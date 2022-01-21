import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Geçerli Bir E-Mail Giriniz").required("Zorunlu"),
    password: yup.string().min(5, "En az 5 karakter Girmelisiniz").required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar Uyuşmuyor")

}) ;

export default validations