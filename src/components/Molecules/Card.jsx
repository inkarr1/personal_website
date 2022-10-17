
function Card () {
  return (
    <article id='open-overlay-button' className='card'>
      <img src='../static/images/quiz2_web.png' alt='Quiz 2'/>
      <div class='card-text'>
        <div>
          <h3>Quiz 2 Web</h3>
          <p>Conceptos propios de: Computer Science, Arquitectura de computadoras, Sistema Operativos, Redes y Web</p>
        </div>
        <button id='open-quiz-tooltip' class='button'>Ver la resolución del quiz</button>
      </div>
    </article>
  );
}

export default Card;