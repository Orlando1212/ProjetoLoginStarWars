import React,{useState} from 'react';

import {Container,Col,Row,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './personagem.css';


function Personagem(){
    
    const [personagens,setPersonagem] = useState([]);
    
    React.useEffect(()=>{
        async function fetchPersonagem(){
            let res = await fetch('https://rickandmortyapi.com/api/character/?format=json');
            let data = await res.json();
            setPersonagem(data.results);
            console.log(data.results);
        }
    
        fetchPersonagem();
    
    }, []);
        return (
        <Container fluid>
            <Row>
            
            {personagens.map((value,index) =>(
                <Col className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <Card key={index} className="card-box" >
                <Card.Img className="img-box"  src={value.image} />
                <Card.Body>
                <Card.Title ><a href="/">
                    {value.name}
                    </a></Card.Title>
                    <Card.Text>
                        <span className="status">{value.status} -</span> 
                        <span className="species">{value.species}</span>
                        <p>
                            <span>Terra Natal: </span>
                            {value.origin.name}
                        </p>
                        <p> 
                            <span>Localização Atual: </span> 
                            {value.location.name}
                        </p>

                    </Card.Text>
                </Card.Body>
              </Card>
            </ Col>
            ))}

        </Row>
    </ Container>
            
  );


}

export default Personagem;