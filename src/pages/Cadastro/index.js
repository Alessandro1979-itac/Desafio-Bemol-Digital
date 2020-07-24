import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import schema from '../../schema';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Dialog from '../../components/Dialog';
import './index.css';

class Cadastrar extends Component {
  state = {
    isOpen: false
  }
  render() {
    function onSubmit( values, actions ) {
      console.log( 'SUBMIT', values );
    }

    function onBlurCep( ev, setFieldValue ) {
      const { value  } = ev.target;
      const cep = value?.replace( /[^0-9]/g, '' );

      if ( cep?.length !== 8 ) {
        return;
      }

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(( res ) => res.json())
        .then(( data ) => {
          setFieldValue('logradouro', data.logradouro);
          setFieldValue('bairro', data.bairro);
          setFieldValue('cidade', data.localidade);
          setFieldValue('uf', data.uf);
        });
    }

    return (
      <div className="App">
        <Link to='/' className="link-back link-back--hover">
          <BsArrowLeft size={50} />
        </Link>
        <Formik
          onSubmit={onSubmit}
          validateOnMount
          validationSchema={schema}
          initialValues={{
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
          }}
          render={({ values, errors, touched, isValid, setFieldValue }) => (
            <Form>
               <div className="form-control-group">
                <label>Nome</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <div className="form-control-group">
                <label>Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>
              <div className="form-control-group">
                <label>Cep</label>
                <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
              </div>
              <div className="form-control-group">
                <label>Logradouro</label>
                <Field name="logradouro" type="text" />
              </div>
              <div className="form-control-group">
                <label>Número</label>
                <Field name="numero" type="text" />
              </div>
              <div className="form-control-group">
                <label>Complemento</label>
                <Field name="complemento" type="text" />
              </div>
              <div className="form-control-group">
                <label>Bairro</label>
                <Field name="bairro" type="text" />
              </div>
              <div className="form-control-group">
                <label>Cidade</label>
                <Field name="cidade" type="text" />
              </div>
              <div className="form-control-group">
                <label>Estado</label>
                <Field component="select" name="uf">
                  <option value={null}>Selecione o Estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </Field>
              </div>
              <button type="Reset" disabled={!isValid} onClick={(e)=> this.setState({ isOpen: true })}>Enviar</button>
              <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                Obrigado por se Cadastrar!
              </Dialog>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default Cadastrar;
