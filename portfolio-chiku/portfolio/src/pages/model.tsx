import Navbar from '../NavBar/Navbar';
import { useEffect } from 'react';
import './model.css';

function Model() {
    useEffect(() => {
        const pictureList = document.querySelector('.picture-list');
        if (pictureList) {
            // Clone the items and append them to create the infinite effect
            const items = pictureList.querySelectorAll('.item');
            items.forEach(item => {
                const clone = item.cloneNode(true);
                pictureList.appendChild(clone);
            });
        }
    }, []);

    return (
        <div className="skeleton">
            <Navbar/>
            <div className="main-body">
                <div className="slider-container">
                    <div className="slider">
                        <div className="picture-list">
                            <div className="item"><img src="../assets/modelpics/vinnies-150.png" alt="Model 1"/></div>
                            <div className="item"><img src="../assets/modelpics/Brothers Photoshoot IMG 0577.png" alt="Model 2"/></div>
                            <div className="item"><img src="../assets/modelpics/IMG_0412-2_Original.png" alt="Model 3"/></div>
                            <div className="item"><img src="../assets/modelpics/IMG_7067.png" alt="Model 4"/></div>
                            <div className="item"><img src="../assets/modelpics/D30CC087-73E9-4BBE-B45B-5EACEAC52931.png" alt="Model 5"/></div>
                        </div>
                    </div>
                </div>
                <div className="chiku-text">
                    <p>
                        Some of my modeling work from 2024, I worked primarily with.......
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Model;