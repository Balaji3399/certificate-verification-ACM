import react from 'react' ;
import Navbar from '../components/Navbar';
import Cert from '../components/certificate' ;
import Footer from '../components/Footer' ;

export default function Certificate(){
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <Cert />
                <div className='mt-auto'>
                    <Footer />
                </div>
            </div>
        </>
    )
}