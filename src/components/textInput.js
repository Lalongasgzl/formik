import { useField } from "formik"
import './error.css'

const TextInput = ({ label, ...props }) => {
     const [field, meta] = useField(props)
     //console.log({field, meta})
     return(
        <div>
             <label>{label}</label>
             <input {...field} />
             { meta.touched && meta.error ? <div className="error">{meta.error}</div> : null }
        </div> 
     )
     
}
export default TextInput