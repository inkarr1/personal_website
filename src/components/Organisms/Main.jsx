import Card from '../Molecules/Card';

function Main () {
    return (
        <main class="main wrapper">
		<div id="quiz-tooltip" class="quiz-tooltip">
			<div class="quiz-tooltip-container">
                <Card />
			</div>
		</div>
		<section class="banner">
			<img class="banner-image" src="./assets/avatar.png" alt="Profile">
			<h1 class="h1"><span class="text-alt">Jhanpiere</span> <span class="text-alt">Montes</span></h1>
			<p class="description">Estudiante de Ciencias de la computación</p>
		</section>
		<section id="homeworks">
			<h2 class="h2">Tareas</h2>
			<div class="card-container">
				<div class="circle left"></div>
				<!--<div class="circle right"></div>-->
				<article id="open-overlay-button" class="card">
					<img src="./assets/quiz2_web.png" alt="Quiz 2">
					<div class="card-text">
						<div>
							<h3>Quiz 2 Web</h3>
							<p>Conceptos propios de:</br>Computer Science, Arquitectura de computadoras, Sistema Operativos, Redes y Web</p>
						</div>
						<button id="open-quiz-tooltip" class="button">Ver la resolución del quiz</button>
					</div>
				</article>
			</div>
		</section>
		<section class="projects" id="projects">
			<h2 class="h2">Proyectos</h2>
		</section>
		<section class="about" id="about">
			<h2 class="h2">Sobre mí</h2>
			<div class="conter">
				<article class="about-container">
					<img src="./assets/desktop.jpg" alt="">
					<div class="about-text">
						<p>Soy de Lima, Peru. 🦙</p>
						<p>Me encuentro cursando el primer ciclo de la carrera de Ciencias de la Computación en UTEC. 👨‍💻</p>
						<p>Me gusta el trabajo en equipo, el aprendizaje constante y rodearme de personas apasiandas por lo que hacen.</p>
					</div>
				</article>
				<article class="experience">
					<div class="experience-container">
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
				<article class="skills-container">
					<div>
						<h3>Habilidades</h3>
						<ul class="tools">
							<li class="icon">
								<img src="./assets/html.webp" alt="">
							</li>
							<li class="icon">
								<img src="./assets/css.webp" alt="">
							</li>
							<li class="icon">
								<img src="./assets/python.webp" alt="">
							</li>
							<li class="icon">
								<img src="./assets/sass.webp" alt="">
							</li>
						</ul>
					</div>
					<div>
						<h3>Herramientas</h3>
						<ul class="tools">
							<li class="icon">
								<img src="./assets/git.webp" alt="Git">
							</li>
							<li class="icon">
								<img src="./assets/figma.webp" alt="Figma">
							</li>
							<li class="icon">
								<img src="./assets/notion.webp" alt="Notion">
							</li>
							<li class="icon">
								<img src="./assets/miro.webp" alt="Miro">
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