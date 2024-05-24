//import styles from './Credits.module.css';
import style_default from './Home.module.css';

const Credits = () => {
    return (
        <div>
            <h1 className={style_default.Header}>Credits:</h1>
            <h2 className={style_default.Paragraph}>Reference Name</h2>
            <p className={style_default.Paragraph}>
                Reference Details
            </p>
        </div>
    );
};

export default Credits;