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
    <Banner/>
    <Homeworks/>
    <Projects/>
    <AboutMe/>
	</main>
)

export default Main