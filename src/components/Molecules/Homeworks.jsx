import Image from "../Atoms/Image"

const Homeworks = ( ) => (
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
)

export default Homeworks