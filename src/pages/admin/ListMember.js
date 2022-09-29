import { Alert,Popconfirm,Spin,Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router"
import { Link } from "react-router-dom";

function ListMember(){
    var cek="";
    if(localStorage.getItem("login")==null){
        cek = <Redirect to="/"/>
    }

    const [dataMember, setDataMember] = useState([])

    function loadMember(){
        axios.get(window.base_url+"member/list_member.php").then(function(response){
           
            if(response.data.sukses!=2){
                alert(response.data.pesan)
            }else{
                setDataMember(response.data.data)
                //alert(JSON.stringify(response.data.data))
            }
        }).catch(function(error){
            alert(error)
        })
    }

    useEffect(() => {
        loadMember()
        
    }, [])
    

    const kolom = [
        {
            title: "Username",
            //key:"username",
            dataIndex:"username"
        },
        {
            title: "Email",
            //key:"email",
            dataIndex:"email"
        },
        {
            title: "Telp",
            //key:"telp",
            dataIndex:"telp"
        },
        {
            title: "",
            //key:"hapus",
            render:(text,record) => (
                <Link to={"/admin/member/ubah/"+record.username}>Ubah</Link>
            )
        },
        {
            title: "",
            //key:"hapus",
            render:(text,record) => (
                <Popconfirm 
                    title={"Apakah Anda yakin mau hapus "+record.username+" ?"}
                    onConfirm={() => doHapusMember(record.username)}
                    okText="Ya"
                    cancelText="Tidak"
                >
                    <a href="#" >Hapus</a>
                </Popconfirm>
            )
        },
    ]

    function doHapusMember(id){
        
        
        axios.get(window.base_url+"member/hapus_member.php?id="+id).then(function(response){
            if(response.data.sukses==1){
                loadMember()
            }
        }).catch(function(error){
            alert(error)
        })
    }

    if(dataMember.length == 0){
        return <Spin />
    }

    return(
        <>
            {cek}
            List Member
            {dataMember.length > 0 ? <Table dataSource={dataMember} columns={kolom}></Table> : <Alert type="error">Data tidak ada</Alert>  }
        </>
    )
}

export default ListMember