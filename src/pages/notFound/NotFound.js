import { useNavigate } from "react-router-dom";
import css from './NotFound.module.css';

function NotFound() {
    const navigate = useNavigate();

    const goHomeHandler = () => navigate('/', {replace: true});
    
    return <>
      <div className={css.notF}>
        <div>Page Not Found</div>
        <button onClick={goHomeHandler}>Go back home</button>
      </div>
    </>
}

export default NotFound