import {Button, Form, Input, Spin} from "antd"
import Password from "antd/lib/input/Password"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams,Redirect } from "react-router-dom"
import Fungsi from "../../myLib/Fungsi"


function UbahMember(){
    const [detailMember, setDetailMember] = useState([])
    const [isUbah,setIsUbah] = useState(false)
    const { id } = useParams();
    // const [txt_email, setTxt_email] = useState('')
    // const [txt_telp, setTxt_telp] = useState('')

    function simpan(values){

        //alert(values.txt_email)
       var formData = new FormData(document.getElementById("formUbahMember"))
      // alert(formData.get("txt_username"))
      axios.post(window.base_url+"member/ubah_member.php?id="+id,formData).then(function(response){
            //alert(response.data.pesan)
            alert(response.data.pesan)
            setIsUbah(true)
        }).catch(function(error){
            alert(error)
        }) 
        
        //alert("Username:"+ values.txt_username+"\n"+"Password:"+values.txt_password)
    }

    function gagal(salah){
      //  alert(window.base_url)
        //alert(salah.errorFields[3].errors)
    }

  

    function loadMember(id){
       
        axios.get(window.base_url+"member/tampil_member.php?id="+id).then(function(response){
           
            if(response.data.sukses==0){
                alert(response.data.pesan)
            }else{
               // console.log(response.data.data)
                setDetailMember(response.data.data)
               
                //alert(response.data.data[0].email)
                
                
                //alert(detailMember[0].email)
                //alert(JSON.stringify(response.data.data))
            }
        }).catch(function(error){
            alert(error)
        })
    }

    useEffect(() => {
        loadMember(id)
        //alert("aa")
        //alert(id)
        //alert(JSON.stringify(dataMember))
        //alert(dataMember[0].email)
       //alert(dataMember.email)
       
    }, [])

    // useEffect( () =>{
    //     if(detailMember.length ){
    //         loadMember(id)
    //     }
    // },[detailMember])
    //alert(detailMember)
    if(detailMember.length==0)
    {
        return <Spin />
    }

    if(isUbah){
        return <Redirect to="/admin" />
    }
   
    return(
    <>
        <Form 
            wrapperCol={{ span:16 }}  
            onFinish={simpan} 
            onFinishFailed={gagal} id="formUbahMember"
            initialValues={{ 
                txt_email: detailMember[0].email,
                txt_telp:detailMember[0].telp
             }}
            >
           
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
                <Input name="txt_email"   />
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
                <Input name="txt_telp"  />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Simpan
                </Button>
            </Form.Item>
            
        </Form>
    </>)
}

export default UbahMember