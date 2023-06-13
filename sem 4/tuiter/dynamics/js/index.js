window.addEventListener("load",()=>{
    document.cookie="galleta-fav="+"barritas;"+"max-age=3600";
    let guardado=document.cookie.split("=");
    const NOTA=document.getElementById("textDescrip");
    const ENVIAR=document.getElementById("send");
    if(guardado!="")
        NOTA.value=guardado;
    NOTA.addEventListener("keyup",()=>{
        document.cookie="texto="+ NOTA.value + ";max-age=3600";
    });
    ENVIAR.addEventListener("click",()=>{
        document.cookie="texto; max-age=-1";
    });
});