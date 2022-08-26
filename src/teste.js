/*

<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Título especial</h5>
      <p class="card-text">Com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
      <a href="#" class="btn btn-primary">Visitar</a>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Título especial</h5>
      <p class="card-text">Com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
      <a href="#" class="btn btn-primary">Visitar</a>
    </div>
  </div>
</div>
</div>


<Row className="row-card">
<Col className="col-card">
{personagens.map((value,index) =>(

    <Card key={index} className="card-box" >
    <Card.Img className="img-box"  src={value.image} />
    <Card.Body className='body-card'>
    <Card.Title className="card-title">
        {value.name}
        </Card.Title>
        <Card.Text>
            <span className="status">{value.status}</span>
            <span className="species">{value.species}</span>
        </Card.Text>
    </Card.Body>
  </Card>


))}
</Col>
</Row>



   <div className="row">
        {personagens.map((value,index) =>(
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card" style={{ minWidth: "200px" }}>
                    <img src={value.image} alt="" /> 
                </div> 
            </div>
        ))}
      </div>

*/