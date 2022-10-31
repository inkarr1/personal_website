import Icon from '../Atoms/Icon';
import Figma from '../Atoms/Icons/Figma'

const AboutMe = () => (
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
        <Figma/>
    </section>
)

export default AboutMe