import {Button, Form, Input} from "antd"
import Password from "antd/lib/input/Password";
import axios from "axios";

function Login(){
   
    function gagal(salah){
        //  alert(window.base_url)
          //alert(salah.errorFields[3].errors)
      }

      function login(values){
        var formData = new FormData(document.getElementById("formLogin"))
      // alert(formData.get("txt_username"))
      axios.post(window.base_url+"member/login_member.php",formData).then(function(response){
            //alert(response.data.pesan)
            alert(response.data.pesan)
            if(response.data.sukses==2){
                localStorage.setItem("login",formData.get("txt_username"))
                window.location = "/admin"
            }
        }).catch(function(error){
            alert(error)
        }) 
      }
    return(
        <>
           <Form wrapperCol={{ span:16 }}  onFinish={login} onFinishFailed={gagal} id="formLogin">
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
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
            
        </Form> 
            
        </>
    )
}

export default Login;