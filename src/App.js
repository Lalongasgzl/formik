import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/textInput'
import CheckBox from "./components/checkbox";
import Radio from "./components/radio";
import Select from "./components/select";

const validate = (values) => {
    const errors = {}

    if(!values.name){
      errors.name = 'Requerido'
    }else if(values.name.length < 5) {
      errors.name = 'El nombre es muy corto'
  }

    if(!values.lastname){
      errors.lastname = 'Requerido'
    }else if(values.lastname.length < 5) {
      errors.lastname = 'El Apellido es muy corto'
    }

    if(!values.radio){
      errors.radio='Requerido'
    }

  return errors
}

function App() {
  return (
    <Formik
        initialValues={{ name: '', lastname: '', email: '', chancho:'',  radio:''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >      
         <Form>
            <TextInput name="name" label="Nombre" />
            <br/ >
            <TextInput name="lastname" label="Apellido" />
            <br/>
            <TextInput name="email" label="E-mail" />
            <Select label="Tipo de chancho" name="chancho" >
              <option value=""></option>
              <option value="chanchito feliz">Chanchito feliz</option>
              <option value="chanchito triste">Chanchito triste</option>
              <option value="Felipe">Felipe</option>
            </Select>           
            <CheckBox name="apcept">
              Aceptar terminis y condiciones
            </CheckBox>
            <Radio name="radio" value="chanchito1" label="chancho 1" />
            <Radio name="radio" value="chanchito2" label="chancho 2"/>
            <Radio name="radio" value="chanchito3" label="chancho 3"/>
            <ErrorMessage name="radio" />
            <button type='submit'>Enviar</button>
          </Form>    
    </Formik>
  )
}

export default App;


// archivos/programacion/udemy/ReactByNicolas/formik