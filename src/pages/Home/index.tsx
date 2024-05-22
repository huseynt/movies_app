import style from './style.module.css';
import {useState} from "react";

const Home = () => {
    const [isLoggin, setIsLoggin] = useState(false);

    function login() {
        setIsLoggin(!isLoggin);
    }

    return (
        <div>
            <div className={style.center}>
                {
                    isLoggin && <p>Logged in</p>
                }
                <button
                    className={`${isLoggin ? 'border-8' : 'border-0' } bg-origin-padding p-2 rounded-ee`}
                    style={{backgroundColor: isLoggin ? 'red' : 'blue'}}
                    onClick={login}
                >Login</button>
            </div>
        </div>
    );
};

export default Home;
