import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
export { default as Home } from "./home";


const home = () => {
    return (
        <div className="gradient-background-home-kontaktai container-fluid custom-height-main d-flex flex-column justify-content-center align-items-center">
            <Navbar />
            <div class="container-fluid custom-height-main d-flex flex-column justify-content-center align-items-center " >
                <div className='intro_1 custom-margin-name custom-font-size-title text-uppercase'>
                    <p>Šarūnas Bernotavičius</p>
                </div>
                <div className='mb-2 intro_1 custom-font-size-sec-title'>
                    <p>Internetinių puslapių kūrėjas</p>
                </div>
                <div className='intro_2 custom-font-size-text text-wrap custom-width-info text-center'>
                    <p>Trečio kurso Multimedijų ir kompiuterinio dizaino programos Vilniaus Tech universiteto studentas. Domiuosi internetinių tinklų kūrimu, kur galiu atskleisti netik savo technines žinias, bet ir išreikšti kūrybiškumą. Daug grožio randu brutalistiniuose ir minimalistiniuose dizainuose.</p>
                </div>
                <div className='intro_2 border border-dark border-1 h-0 custom-width-line mt-3'></div>
                <div className='intro_2 mt-3 text-decoration-underline custom-font-size-text'>
                    <NavLink className="nav-link text-decoration-underline" to="/projektai">
                        <p>Pamatyti daugiau</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default home;