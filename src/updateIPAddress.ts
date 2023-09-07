import { Contacto} from "../src/contactos";

const updateIPAddress =(contactos: Contacto[]) => {
    contactos.forEach(Contacto =>{
        Contacto.ip_address=Contacto.ip_address+"."+Contacto.id
    })
    return contactos
}

export{updateIPAddress}