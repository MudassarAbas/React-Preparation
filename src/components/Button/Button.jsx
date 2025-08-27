import styles from './Button.module.css'

function Button() {

    const handleClick = (e) => e.target.textContent = "Dragon";

    /*let count = 0;

const handleClick2 = (name) => {
    if(count < 3){
        count++;
        console.log(`${name} you clicked me ${count} times`);
    }
    else{
        console.log(`${name} stop clicking me` );
    }
}


    const handleClick = () => console.log("ouch!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);*/
    return(
        <button onClick={(e) => handleClick(e)} className={styles.button}>
         Click Me
        </button>
    )
}

export default Button