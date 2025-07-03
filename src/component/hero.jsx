import './hero.css'

const Hero=(props)=>{
    return(
        <section className='hero'>
        <h1>Welcome {props.data}</h1>
        </section>
    )
}
export default Hero