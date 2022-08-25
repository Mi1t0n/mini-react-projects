import {useEffect, useState} from 'react';
import Skeleton from './Skeleton';
import User from './User';
import axios from 'axios';

const Users = ({changeStatus, changeInvUsers, invitedUsers}) => {

    const [isLoading, changeLoad] = useState(false);
    const [users, setUsers] = useState([]);

    const [searchValue, changeSearchValue] = useState('');

    useEffect(() => {
        changeLoad(true);
        axios.get('https://reqres.in/api/users')

            .then(r => {
                setUsers(r.data.data);
                changeLoad(false);
            })

            .catch(err => {
                alert('Что то пошло не так!');
                console.log(err);
            });
    }, []);

    const inputHandler = (e) => {
        changeSearchValue(e.target.value);
    };

    const inviteHandler = (id) => {
        if (invitedUsers.includes(id)) {
            changeInvUsers(invitedUsers.filter((_id => _id !== id)));
        } else {
            changeInvUsers([...invitedUsers, id]);
        }
    };

    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                <input type="text" placeholder="Найти пользователя..." value={searchValue} onChange={inputHandler}/>
            </div>
            {
                isLoading ?
                    <div className="skeleton-list">
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                    :
                    <ul className="users-list">
                        {
                            users
                                .filter(user => {
                                    const fullName = (`${user.first_name} ${user.last_name}`).toLowerCase();

                                    const findByName = fullName.includes(searchValue.toLowerCase());
                                    const findByEmail = user.email.includes(searchValue.toLowerCase());

                                    return findByName || findByEmail;
                                })
                                .map(user => <User {...user} invitedUsers={invitedUsers}
                                                   inviteHandler={inviteHandler}/>)
                        }
                    </ul>
            }
            {invitedUsers.length > 0 && <button className="send-invite-btn" onClick={()=>changeStatus(true)}>Отправить приглашение</button>}
        </>
    );
};

export default Users;