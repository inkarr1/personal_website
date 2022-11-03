import Image from "../Atoms/Image"

const Homeworks = ({ Id, title, description, buttonName }) => (
    <section id={Id}>
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
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <button id="open-quiz-tooltip" className="button">{buttonName}</button>
                </div>
            </article>
        </div>
    </section>
)

export default Homeworks