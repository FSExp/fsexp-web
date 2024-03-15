import freestyleLogo from '/images/mini_logo_freestyle_experiences.png';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <div>
        <img src={freestyleLogo} className="logo" alt="Freestyle logo" />
      </div>

      <div className="title_div">
        <h1>Freestyle Experiences</h1>
      </div>
      
      <div className="description_div">
        <p className="description">
          Freestyle Experiences, fundada em 2023 e reformulada em 2024, 
          é uma empresa da área de entretenimento com o objetivo de divertir 
          espectadores com os diversos projetos de diferentes tipos de artes, 
          desde o primeiro foco, que é a música até novos ares com arte digital.
        </p>

        <p className="description">
          Em breve...✨
        </p>
      </div>
    </div>
  )
}

export default App;