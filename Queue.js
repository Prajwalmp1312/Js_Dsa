class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(elements){
        this.items.push(elements)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
        
    }

}

const queue=new Queue()
console.log(queue.isEmpty());

queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(17)
queue.enqueue(18)

console.log(queue.size());

console.log("*******************");
queue.print()
console.log("*******************");

console.log(queue.dequeue());
console.log(queue.peek());
