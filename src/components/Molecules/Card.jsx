
function Card () {
  return (
    <article id='open-overlay-button' className='card'>
      <div class="card-quiz">
					<div id="close-quiz-tooltip" class="cross">
						<img src="./assets/cross.svg" alt="Cerrar tooltip">
					</div>
					<div class="card-quiz-text">
						<section class="quiz-text-container">
							<article>
								<div class="quiz-theme-container">
									<a class="enlace" href="http://137.184.108.27/~jhanpiere_montes/" target="_blank">
										<h3 class="quiz-theme-title">Computer Science</h3>
										<img src="./assets/share.svg" alt="Link de la clase">
									</a>
								</div>
								<p>La Ciencia de la Computación  estudia los fundamentos de la información y la computación, puedo abarcar desde los teórico hasta los práctico respecto a estructuración de datos, programación, sistemas y/o estructuras computacionales.</p>
							</article>
							<article>
								<h3>Arquitectura de Computadores</h3>
								<p>Una computadora esta formada por diversos componentes los cuales hacen posible su funcionamiento:</p>
								<ul>
									<li>El CPU procesa cada intrucción y orden que se les da al dispositivo con la mayor efectividad posible.</li>
									<li>El GPU es el encargado de realizar el renderizado de imagenes, videos, GIF, etc.</li>
									<li>La Memoria RAM almancena una parte de la aplicación que ejecutamos, la suficiente para que garantize una experiencia cómoda al usuario.</li>
									<li>Los SSD es un componente que almancenan cada programa u otros elementos de la PC, son formados por microchips conectadas entre sí.</li>
									<li>Los periféricos son piezas que permiten conectar a la PC con las personas como teclados,monitores, mouse, etc.</li>
								</ul>
							</article>
							<article>
								<h3>Sistemas Operativos</h3>
								<p>Los sistemas operativos son el soporte que facilita el uso de programas y cadenas de procesos mediante funciones, tienen 3 componentes importante los cuales son el sistema de archivos, traductor de comandos y nucleos.Existen diferentes sistemas operativos como Windows, MacOs, Ubuntu, Linux, Android, Ios, etc.</p>
							</article>
							<article>
								<h3>Redes</h3>
								<p>Las redes permiten conectar computadoras independientes, de esa forma nos simplifica el intercambio de datos y recursos.</p>
							</article>
							<article>
								<h3>Web</h3>
								<p>Es un sistema encargado de gestionar la información para una proxima trasmisión de datos(información, imagenes, video, audio, etc) al usuario a través de internet, además su utilización es muy común al momento de crear páginas web en lenguaje HTML.</p>
							</article>
						</section>
					</div>
				</div>
    </article>
  );
}

export default Card;