/*
    Estrutura de dados Fila
    Funcionamento: FIFO (First in, First Out)
    (O primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue{
    constructor(){
        this.data = [] // Armazenamento
        this.head = -1 // "Cabeça" (Início da fila)
        this.tail = 0  // "Cauda" (Final da fila)
    }

        // Inserção
    enqueue(value){
        this.data.push(value)
         this.tail++
         this.data[this.tail] = value
    }

        //Remoção
    dequeue(){
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

        //"Olhadinha" (no inicio da fila)
    peek(){
        return this.data[this.head]
    }

        //Tamanho da fila
    size(){
        return this.tail - this.head + 1
    }
}
