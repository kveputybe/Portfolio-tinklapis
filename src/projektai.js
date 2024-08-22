import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Artboard_1 from './finansu_valdumo_il.svg';
import administravimas from './No_Results.svg';
import noise from './Noise.svg';
export { default as Projektai } from "./projektai";

function projektai() {

    const handleClick = (event) => {
        const pav_mas = document.querySelectorAll('.intro_3 p');
        const pas_pav = event.target;

        const pavArray = Array.from(pav_mas);
        var pas_pav_mas = [];
        var kuris = 0;


        for (var i = 0; i < pavArray.length; i++) {

            
            if (pavArray[i] === event.target) {
                pas_pav_mas[0] = pavArray[i];
                pas_pav_mas[1] = pavArray[i + 1];
                kuris = i;
                pavArray.splice(i, 2);
                if (pas_pav_mas[0].classList.contains('fadeIn')) {
                    pas_pav_mas[0].classList.remove('fadeIn');
                }
                if (pas_pav_mas[1].classList.contains('fadeIn')) {
                    pas_pav_mas[1].classList.remove('fadeIn');
                }
                pas_pav_mas[0].classList.add('fadeOut');
                pas_pav_mas[1].classList.add('fadeOut');

            }
        }

        for (var i = 0; i < pavArray.length; i++) {

            if(pavArray[i].classList.contains('fadeInDown')){
                pavArray[i].classList.remove('fadeInDown');
            }
            if(pavArray[i].classList.contains('fadeInUp')){
                pavArray[i].classList.remove('fadeInUp');
            }
            if(pavArray[i].classList.contains('fadeIn')){
                pavArray[i].classList.remove('fadeIn');
            }
            if(pavArray[i].classList.contains('fadeOut')){
                pavArray[i].classList.remove('fadeDown');
            }
            if (i < kuris) {
                pavArray[i].classList.add('fadeDown');
            }
            else {
                pavArray[i].classList.add('fadeUp');
            }
        }


        const newDiv = document.createElement('div');
        newDiv.id = '';
        newDiv.id = 'content_start';

        const Title = document.createElement('p');
        Title.id='pavadinimas';

        const info = document.createElement('p');
        info.id = 'informacija'

        const img=new Image();
        img.style.width='250px';
        img.style.height='200px';
        img.style.margin='2%';
        img.style.marginBottom='24px';

        const exit = document.createElement('button');
        exit.textContent="X";
        exit.id = 'exit';
        exit.style.width = '3rem';
        exit.style.height = '3rem';
        exit.style.border = '1px solid black';
        exit.addEventListener("click", back);







        if (pas_pav.innerHTML === 'Finansų valdymo puslapis') {
            Title.textContent = 'Finansų valdymo puslapis';
            info.textContent = 'Šiame tinklapyje yra sukurta finansų valdymo programa, kuri leidžia vartotojams sekti savo išlaidas ir laikytis susikurto taupymo plano. Šio projekto metu susipažinau su php programavimo kalba ir gilinau praktines žinias, kuriant tinklapį.';
            img.src=Artboard_1;
        }

        else if (pas_pav.innerHTML === 'Konferencijų administravimo tinklapis') {
            Title.textContent = 'Konferencijų administravimo tinklapis';
            info.textContent = 'Kurdamas ši tinklapį susipažinau su Laravel ,,framework” ypatybėmis. Puslapyje galima sukurti konferencijas, jas redaguoti ir trinti. Prisijungęs vartotojas turi administracinės teises, o neprisijungęs gali tik pamatyti ateinančias konferencijas. Tinklapio dizainas realizuotas naudojant bootstrap.';
            img.src=administravimas;
        }

        else {
            Title.textContent = 'Garso taršos brošiūrą';
            info.textContent = 'Šio projekto metu kūriau brošiūrą, bei plakatą išgalvotam renginiui. Kad tai atlikti naudojausi Adobe Photoshop, illustrator ir InDesign programomis. Projekto metu buvo sukurtas logotipas, iliustracija, foto manipuliacija. Nuorodos į plakatą ir brošiūrą: https://online.fliphtml5.com/xismj/mvhf/ https://online.fliphtml5.com/xismj/rsjz/';
            img.src=noise;
        }
        info.style.fontSize = '15px';

        Title.style.marginTop = '3%';


        newDiv.appendChild(Title);
        newDiv.appendChild(info);
        newDiv.appendChild(img);
        newDiv.appendChild(exit);


        newDiv.style.display = 'block';
        newDiv.style.top = `${window.innerHeight / 4.5 - newDiv.offsetHeight / 4.5}px`;

        document.body.appendChild(newDiv);
        function back() {
            newDiv.id = 'content_end';

            setTimeout(() => {
                newDiv.remove()
            }, 3000);

            if (pas_pav_mas[0].classList.contains('fadeOut')) {
                pas_pav_mas[0].classList.remove('fadeOut');
            }
            if (pas_pav_mas[1].classList.contains('fadeOut')) {
                pas_pav_mas[1].classList.remove('fadeOut');
            }


            pas_pav_mas[0].classList.add('fadeIn');
            pas_pav_mas[1].classList.add('fadeIn');


            for (var i = 0; i < pavArray.length; i++) {

                if(pavArray[i].classList.contains('fadeDown')){
                    pavArray[i].classList.remove('fadeDown');
                }
                if(pavArray[i].classList.contains('fadeUp')){
                    pavArray[i].classList.remove('fadeUp');
                }
                if(pavArray[i].classList.contains('fadeIn')){
                    pavArray[i].classList.remove('fadeIn');
                }
                if(pavArray[i].classList.contains('fadeOut')){
                    pavArray[i].classList.remove('fadeDown');
                }
            
                if (i < kuris) {
                    pavArray[i].classList.add('fadeInDown');
                }
                else {
                    pavArray[i].classList.add('fadeInUp');
                }
            }

            console.log(pavArray);


        }
    }



    return (
        <div className="custom-height-main gradient-projektai">
            <Navbar />
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="w-100 mt-5 mb-5">
                    <div className="intro_1 d-flex flex-column justify-content-center align-items-center custom-font-size-title">
                        <p>PROJEKTAI</p>
                        <div className="border custom-width-line border-top border-dark border- mt-3"></div>
                    </div>
                    <div className="intro_3 d-flex justify-content-center align-items-center mt-5 mb-5">
                        <div className="custom-width-mobile-pTitle d-flex flex-column justify-content-between align-items-center mt-5">
                            <p onClick={handleClick} className=" mb-1 custom-font-size-sec-title">Finansų valdymo puslapis</p>
                            <p className=" mb-5 custom-font-size-text">HTML, CSS, PHP</p>
                            <p onClick={handleClick} className="mb-1  custom-font-size-sec-title">Konferencijų administravimo tinklapis</p>
                            <p className=" mb-5 custom-font-size-text">Laravel</p>
                            <p onClick={handleClick} className="mb-1  custom-font-size-sec-title">Garso taršos brošiūrą</p>
                            <p className="custom-font-size-text">Adobe Photoshop, illustrator, InDesign</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projektai;