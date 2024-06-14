import logo from "./img_2.png";
import { useEffect, useState } from "react";
import slika1 from "./img.png"; // assuming you have an empty star image
import slika2 from "./img_1.png"; // assuming you have a filled star image
import styles from "./App.module.css"; // assuming you have a CSS module for styles

function Product() {
    const [star, setStar] = useState([slika1,slika1,slika1,slika1,slika1]);
    const [rating, setRating] = useState(0);
    useEffect(() => {
        let rat = parseInt(localStorage.getItem("rating")) || 0;
        setRating(rat);
        console.log(rat)
        const initialStart = Array(5).fill(slika1);
        for (let i = 0; i < rat; i++) {
            initialStart[i] = slika2;
        }
        if(rat!=0){
            initialStart[rat]=slika2;
        }
        setStar(initialStart);
    }, []);

    function changeStar(index) {
        let arr = [...star];
        let newRating = index;
        if (arr[index] === slika1) {
            for (let i = 0; i <= index; i++) {
                arr[i] = slika2;
            }
        } else {
            for (let i = index; i < 5; i++) {
                arr[i] = slika1;
            }
            newRating=index-1;
        }
        setStar(arr);
        setRating(newRating);
        localStorage.setItem("rating", (newRating).toString());
    }

    return (
        <div className={styles.block}>
            <p>Please rate</p>
            <ul>
                <li>
                    <button onClick={() => changeStar(0)}>
                        <img src={star[0]} alt="star" width={50} height={50} />
                    </button>
                </li>
                <li>
                    <button key={1} onClick={() => changeStar(1)}>
                        <img src={star[1]} alt="star" width={50} height={50} />
                    </button>
                </li>
                <li>
                    <button key={2} onClick={() => changeStar(2)}>
                        <img src={star[2]} alt="star" width={50} height={50} />
                    </button>
                </li>
                <li>
                    <button key={3} onClick={() => changeStar(3)}>
                        <img src={star[3]} alt="star" width={50} height={50} />
                    </button>
                </li>
                <li>
                    <button key={4} onClick={() => changeStar(4)}>
                        <img src={star[4]} alt="star" width={50} height={50} />
                    </button>
                </li>
            </ul>
            <p>Your feedback is very important to us</p>
            <img src={logo} alt="logo" width={164} height={52} />
        </div>
    );
}

export default Product;

