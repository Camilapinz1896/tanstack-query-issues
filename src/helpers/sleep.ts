/*
Recibe un parámetro milliseconds (tipo number) que indica cuánto tiempo esperar.
Retorna una Promise — esto es clave, porque JavaScript es asíncrono y no tiene una forma nativa de "pausar" sin bloquear el hilo principal.
Dentro de la Promise, usa setTimeout para esperar el tiempo indicado y luego llama a r(true), que resuelve la promesa (es decir, le dice "ya terminé").
*/

export const sleep = (milliseconds: number) =>{

    return new Promise (r=>{
        setTimeout(()=>{
            r(true)
        }, milliseconds)
    })
    
}