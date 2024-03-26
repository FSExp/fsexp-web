import Footer from "../../components/Header-Footer/Footer";
import Header from "../../components/Header-Footer/Header";
import freestyleLogo from '/images/logo_freestyle_experiences.png';
import freestyleAwards from '/images/freestyle_awards_logo.png';
import interrogacaoIcon from '/images/interrogacao_icon.png';

import {FirstSection, SecondSection} from './Home.styles';

function Home() {

    const firstSectionTexts = [
        { text: 'ENTRETERIMENTO'},
        { text: 'ARTES'},
        { text: 'MÚSICA'}
    ];

    return (
    <>
        <Header/>
        <FirstSection>
            <div>
                <div>
                    <img src={freestyleLogo} alt="Logo da Freestyle Experiences"/>
                </div>

                <div>
                    <h1>
                        <span>Be Yourself</span>
                        , 
                        <span>Be Free</span>
                    </h1>
                </div>
            </div>

            <div>
                {firstSectionTexts.map(item => (
                    <h2>{item.text}</h2>
                ))}
            </div>
        </FirstSection>

        <SecondSection>
            <div>
                <h1>CONHEÇA NOSSAS PRINCIPAIS ÁREAS</h1>
            </div>

            <div>
                <div>
                    <img src={interrogacaoIcon} alt="Em breve..."/>
                    <p>EM BREVE...</p>
                </div>

                <div>
                    <img src={freestyleAwards} alt="Logo da Freestyle Awards"/>
                    <p>FREESTYLE AWARDS</p>
                </div>
            </div>
        </SecondSection>
        <Footer/>
    </>
    );
}

export default Home;