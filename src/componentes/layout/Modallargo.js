import React from 'react';
import Modal from 'react-modal';

class Modallargo extends React.Component {
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
            Tarea a largo plazo
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}>
              <div className="materia">
                <div>
                    Clase pública
                </div>
              </div>
          <div className="tarea">Aprender 2 canciones y traer muestras de té</div>
          <div className="close">
            <button onClick={this.closeModal} className="cerrarmodal">Cerrar</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modallargo