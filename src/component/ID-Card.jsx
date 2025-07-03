import './IdCard.css'

const IdCard = ({name, age, occupation, contact})=>{
    return(
        <div className="id-card" style={{border: '1px solid black', padding: '20px', width: '170px', textAlign: 'left'}}>
            <h1>ID Card</h1>
            <img src="src\\assets\\image.png" alt="image" srcset="" height="100px"/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
            <p>Contact: {contact}</p>
        </div>
    )
}

export default IdCard;