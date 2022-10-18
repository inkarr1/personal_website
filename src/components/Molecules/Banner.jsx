import Image from '../Atoms/Image';

const Banner = ( description ) => (
  <section className="banner">
    <Image
      img='avatar'
      classes='banner-image'
      alt='Profile'
    />
    <h1 className="h1"><span className="text-alt">Jhanpiere</span> <span className="text-alt">Montes</span></h1>
    <p className="description">Estudiante de Ciencias de la computación</p>
  </section>
)

export default Banner