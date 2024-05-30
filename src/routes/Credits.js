//import styles from './Credits.module.css';
import style_default from './Home.module.css';

const Credits = () => {
    return (
        <div>
            <h1 className={style_default.Header}>Credits:</h1>
            <h2 className={style_default.Paragraph}>NavMeshPlus</h2>
            <h3 className={style_default.PaddingLess}>Created by h8man</h3>
            <p className={style_default.Paragraph}>
                2D Navmesh package used to generate Navmeshes from scene geometry.<br></br>
                <a href="https://github.com/h8man/NavMeshPlus/tree/master">NavMeshPlus GitHub page</a>
            </p>
        </div>
    );
};

export default Credits;