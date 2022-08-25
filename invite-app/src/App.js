import './index.scss';
import Success from './components/Success';
import Users from './components/Users/Users';
import {useState} from 'react';

function App() {
    const [status, changeStatus] = useState(false);
    const [invitedUsers, changeInvUsers] = useState([]);
    return (
        <div className="App">
            {
                status ?
                    <Success changeStatus={changeStatus} invitedUsers={invitedUsers} changeInvUsers={changeInvUsers} />
                    :
                    <Users changeStatus={changeStatus} changeInvUsers={changeInvUsers} invitedUsers={invitedUsers}/>
            }
        </div>
    );
}

export default App;
