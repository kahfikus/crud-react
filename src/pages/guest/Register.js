import {Button, Form, Input} from "antd"
import Password from "antd/lib/input/Password"
import axios from "axios"
import { useState } from "react"
import Fungsi from "../../myLib/Fungsi"


function Register(){
    // const [username, setUsername] = useState()
    // const [password, setPassword] = useState()

    function simpan(values){

        //alert(values.txt_email)
       var formData = new FormData(document.getElementById("formRegister"))
      // alert(formData.get("txt_username"))
      axios.post(window.base_url+"member/tambah_member.php",formData).then(function(response){
            //alert(response.data.pesan)
            alert(response.data.pesan)
        }).catch(function(error){
            alert(error)
        }) 
        
        //alert("Username:"+ values.txt_username+"\n"+"Password:"+values.txt_password)
    }

    function gagal(salah){
      //  alert(window.base_url)
        //alert(salah.errorFields[3].errors)
    }

    return(
    <>
        <Form wrapperCol={{ span:16 }}  onFinish={simpan} onFinishFailed={gagal} id="formRegister">
            <Form.Item 
                label="Username" 
                name="txt_username"
                rules={[
                    {
                        required:true,
                        message:"Username harus diisi"
                    }
                ]}
            >
                <Input name="txt_username"/>
            </Form.Item>
            <Form.Item 
                label="Password" 
                name="txt_password"
                rules={[
                    {
                        required:true,
                        message:"Password harus diisi"
                    }
                ]}
            >
                 <Password name="txt_password" />
            </Form.Item>
            <Form.Item 
                label="Email" 
                name="txt_email" 
                rules={[
                    {
                        required:true,
                        message:"Email harus diisi"
                    },
                    {
                        type:"email",
                        message:"Format email tidak valid"
                    }
                ]}
            >
                <Input name="txt_email" />
            </Form.Item>
            <Form.Item 
                label="Telp" 
                name="txt_telp"
               rules={[
                    {
                        required:true,
                        message:"Telp harus diisi",
                       
                    },
                    {
                        min:12,
                        message:"harus diisi minimal 12 angka"
                    },
                    {
                         pattern: new RegExp(/^[0-9]+$/),
                        message:"Telp harus diisi angka"
                    },
                    
                ]}
            >
                <Input name="txt_telp" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Daftar
                </Button>
            </Form.Item>
            
        </Form>
    </>)
}

export default Register