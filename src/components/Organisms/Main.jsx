import Banner from '../Molecules/Banner'
import Homeworks from '../Molecules/Homeworks'
import Projects from '../Molecules/Projects'
import AboutMe from	'../Molecules/AboutMe'
import Modal from '../Molecules/Modal'

const Main = () => (
  <main className="main wrapper">
    <div id="quiz-tooltip" className="quiz-tooltip">
      <div className="quiz-tooltip-container">
        <Modal/>
      </div>
    </div>
    <Banner />
	<Homeworks
    Id="homeworks"
    title="Quiz 2 Web"
    description="Conceptos propios de: Computer Science, Arquitectura de computadoras, Sistema Operativos, Redes y Web."
    buttonName="Ver la resolución del quiz"
  />
	<Projects/>
	<AboutMe/>
	</main>
)

export default Main