import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { FiLogIn } from "react-icons/fi";
import "./style/style.css";

export default function LoginCredenziali() {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicCf">
        <Form.Label>Codice fiscale:</Form.Label>
        <Form.Control type="cf" placeholder="" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
  
      <Button  type="submit" class ="btn-accedi">
      <FiLogIn /> Accedi
        
      </Button >
      <div>
      <Row><a class="mt-3 mx-md-5" href="https://sister.agenziaentrate.gov.it/Main/SceltaServizioAccesso.do?tipo=M">Non sei ancora registrato?</a> </Row>
      <Row><a class="mt-3 mx-md-5" href="https://sister.agenziaentrate.gov.it/Main/SceltaServizioAccesso.do?tipo=M">Hai dimenticato la password?</a> </Row>
      
      </div>
    </Form>
  );
}

