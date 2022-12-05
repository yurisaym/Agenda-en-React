import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter
} from 'reactstrap'

const data = [
  { id: 1, personaje: 'Danilson', anime: 'vicio' },
  { id: 2, personaje: 'Yurisay', anime: 'lala' },
  { id: 3, personaje: 'Summer', anime: 'mascota' },
  { id: 4, personaje: 'Pepe', anime: 'sexual' }
]

class App extends React.Component {
  state = {
    data: data
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success">Insertar nuevo personaje</Button>
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(elemento => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td>
                    <Button color="primary">Editar</Button>
                    {'  '}
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    )
  }
}

export default App
