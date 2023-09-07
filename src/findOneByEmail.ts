import{Contacto,contactos} from "./contactos"

const findOneByEmail=(email:string): Contacto =>{
    function tieneMismoMail(contacto: Contacto){
        return contacto.email=== email;
    }
    const encontre= contactos.filter(tieneMismoMail);
    return encontre[0];
}
export {findOneByEmail};