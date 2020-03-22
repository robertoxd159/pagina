contacto.querySelector('#Enviar').addEventListener('click',function(){
    
    let cliente = contacto.querySelector('#cliente').value;
    let email = contacto.querySelector('#email').value;
    let mensaje = contacto.querySelector('#mensaje').value;

    let url = "https://api.whatsapp.com/send?phone=51923481905&text=*_Hacker de Diversas Cuentas_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*¿cual es tu correo?*%0A" + correo + "%0A*Cual es tu mensaje*%0A" + mensaje;
    window.open(url);

});