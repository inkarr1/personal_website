import Banner from '../Molecules/Banner';
import Card from '../Molecules/Card';
import Image from '../Atoms/Image';
import Icon from '../Atoms/Icon';

function Main () {
  return (
  <main className="main wrapper">
    <div id="quiz-tooltip" className="quiz-tooltip">
      <div className="quiz-tooltip-container">
        <Card />
      </div>
    </div>
    <Banner
    />
    <section id="homeworks">
      <h2 className="h2">Tareas</h2>
      <div className="card-container">
        <div className="circle left"></div>
        <article id="open-overlay-button" className="card">
          <Image
            img='quiz2_web'
            alt='Quiz 2'
          />
          <div className="card-text">
            <div>
              <h3>Quiz 2 Web</h3>
              <p>Conceptos propios de: Computer Science, Arquitectura de computadoras, Sistema Operativos, Redes y Web</p>
            </div>
            <button id="open-quiz-tooltip" className="button">Ver la resolución del quiz</button>
          </div>
        </article>
      </div>
    </section>
		<section className="projects" id="projects">
			<h2 className="h2">Proyectos</h2>
		</section>
		<section className="about" id="about">
			<h2 class="h2">Sobre mí</h2>
			<div className="conter">
				<article className="about-container">
					<img src="./assets/desktop.jpg" alt="Desktop"/>
					<div className="about-text">
						<p>Soy de Lima, Peru. 🦙</p>
						<p>Me encuentro cursando el primer ciclo de la carrera de Ciencias de la Computación en UTEC. 👨‍💻</p>
						<p>Me gusta el trabajo en equipo, el aprendizaje constante y rodearme de personas apasiandas por lo que hacen.</p>
					</div>
				</article>
				<article className="experience">
					<div className="experience-container">
						<div>
							<h3>Educación</h3>
							<p>Bachiller en Ciencias de la computación</p>
							<p>Universidad de Ingeniería y Tecnología</p>
							<p>Ago 2022 - Actualidad</p>
						</div>
						<div>
							<h3>Idiomas</h3>
							<p>Español (nativo)</p>
							<p>Inglés (A2)</p>
						</div>
					</div>
					<div>
						<h3>Experiencia</h3>
						<p>UX Designer</p>
						<p>AGROS</p>
						<p>Enero 2022 - Ago 2022</p>
						<p>Investigación, implementación y creación de diseños en herramientas del Suite de la empresa</p>
					</div>
				</article>
				<article className="skills-container">
					<div>
						<h3>Habilidades</h3>
						<ul className="tools">
							<li className='icon'>
                <Icon
                  icon="html"
                  alt="HTML"
                />
							</li>
							<li className="icon">
                <Icon
                  icon="css"
                  alt="CSS"
                />
							</li>
							<li className="icon">
								<img src="./assets/python.webp" alt="Python" />
							</li>
							<li className="icon">
								<img src="./assets/sass.webp" alt="Sass" />
							</li>
						</ul>
					</div>
					<div>
						<h3>Herramientas</h3>
						<ul className="tools">
							<li className="icon">
								<img src="../" alt="Git" />
							</li>
							<li className="icon">
								<img src="./assets/figma.webp" alt="Figma" />
							</li>
							<li className="icon">
								<img src="./assets/notion.webp" alt="Notion" />
							</li>
							<li className="icon">
								<img src="./assets/miro.webp" alt="Miro" />
							</li>
						</ul>
					</div>
				</article>
			</div>
		</section>
	</main>
    );
}

export default Main;