import React from 'react';

const Success = ({changeStatus,invitedUsers,changeInvUsers}) => {
    const backHandler = () =>{
        changeInvUsers([])
        changeStatus(false)
    }

    return (
        <div className="success-block" >
            <img src="/assets/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {invitedUsers.length} пользователям отправлено приглашение.</p>
            <button className="send-invite-btn" onClick={backHandler} >Назад</button>
        </div>
    );
};

export default Success;