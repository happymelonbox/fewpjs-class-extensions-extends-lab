class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
    return this.array.reduce((acc,cv) => acc+cv)
}}

class Triangle extends Polygon{
    get isValid(){
     if(!this.array[0] + this.array[1]> this.array[2] ||
        !this.array[1] + this.array[2]> this.array[0] ||
        !this.array[2] + this.array[0]> this.array[1]){
        return false
        }
        return true
    }
}

class Square extends Polygon{
    get isValid(){
    if (this.array[0] === this.array[1] &&
        this.array[1] === this.array[2] &&
        this.array[2] === this.array[3]){
        return true
    }
    return false
    } 

    get area(){
        return this.array[0] * this.array[1]
    }
}
