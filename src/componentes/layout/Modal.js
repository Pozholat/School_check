import React from 'react';
import Modal from 'react-modal';

class Modall extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        
        <button onClick={this.openModal} className="btnmodal">
            Tarea de hoy
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}>
              <div className="materia">
                <div>
                    Ciencias naturales
                </div>
              </div>
          <div className="tarea">Abrir rana y traer 2 caracoles</div>
          <div className="close">
            <button onClick={this.closeModal} className="cerrarmodal">Cerrar</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modall
