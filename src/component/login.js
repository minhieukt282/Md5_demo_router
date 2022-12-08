import {useLocation, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export default function Login() {
    const navigate = useNavigate()
    const mess = useLocation();
    const handleLogin = (value) => {
        if (value.username == 'a' && value.password == '1') {
            navigate('admin')
        } else if (value.username == '1' && value.password == '1') {
            navigate('user', {state: value.username})
        } else {
            navigate('', {state: 'sai tk'})
        }
    }
    return (
        <div>
            {mess && <h1>{mess.state}</h1>}
            <Formik initialValues={{
                username: '',
                password: ''
            }} onSubmit={values => handleLogin(values)}>
                <Form>
                    <Field type="text" name={'username'}/>
                    <Field type="text" name={'password'}/>
                    <button>Login</button>
                </Form>
            </Formik>
        </div>
    )
}