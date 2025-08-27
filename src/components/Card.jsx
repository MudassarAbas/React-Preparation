import picofme from '../assets/picofme.png'; 

function Card() {
  return (
    <div className="card">
      <img className="profile-img" src={picofme} alt="Mahar Mudassar" />
      <h2 className='title'>Mahar Mudassar</h2>
      <p className='text'>I am Professional Web Developer</p>
    </div>
  );
}

export default Card;
