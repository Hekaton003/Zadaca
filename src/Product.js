import styles from "./App.module.css";
import slika1 from "./img.png"
import slika2 from "./img_1.png"
import logo from "./img_2.png"
import {useEffect, useState} from "react";
function Product(){
    const [star,setStar]=useState([])
    const [rating,setRating]=useState(0)
    function initial(){
        let arr = [slika1,slika1,slika1,slika1,slika1]
        setStar(arr)
    }

    useEffect(() => {

        start();
        if(window.closed){
            sessionStorage.setItem("rating","0");
        }

    }, []);

    function start(){
         let rat = parseInt(sessionStorage.getItem("rating"))||0;
         console.log(rat)
         setRating(rat)
         initial()
         if(rating>0){
             for (let i = 0; i < rating; i++) {
                 NotClickStar(i);
             }
         }
    }
    function NotClickStar(index){
        initial()
        let arr = star;
        if(arr[index]===slika1){
            arr[index]=slika2
        }
        else {
            arr[index]=slika1;
        }
        setStar(arr)
    }
    function changeStar(index){
        let arr = star;
        if(arr[index]===slika1){
            for (let i = 0; i <= index; i++) {
                arr[i]=slika2
            }
        }
        else {
            for(let i=index;i<5;i++){
                arr[i]=slika1
            }
        }
        setStar(arr)
        setRating(index)
        sessionStorage.setItem("rating",rating.toString())
        
    }
    return(
        <div className={styles.block}>
            <p>Please rate </p>
            <ul>
                <li>
                    <button onClick={()=>changeStar(0)}><img src={star[0]} alt={"star"} width={50} height={50}/></button>
                </li>
                <li>
                    <button key={1} onClick={()=>changeStar(1)}><img src={star[1]} alt={"star"} width={50} height={50}/></button>
                </li>
                <li>
                    <button key={2} onClick={()=>changeStar(2)}><img src={star[2]} alt={"star"} width={50} height={50}/></button>
                </li>
                <li>
                    <button key={3} onClick={()=>changeStar(3)}><img src={star[3]} alt={"star"} width={50} height={50}/></button>
                </li>
                <li>
                    <button key={4} onClick={()=>changeStar(4)}><img src={star[4]} alt={"star"} width={50} height={50}/></button>
                </li>
            </ul>
            <p>Your feedback is very important to us</p>
            <img src={logo} alt={"logo"} width={164} height={52} />
        </div>
    );
}

export default Product;