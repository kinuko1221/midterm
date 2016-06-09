function distance(x1, y1, x2, y2){
    var a = (x1, y1);
    var b = (x2, y2);
    if( a = b){
        return 0;
    }
    else{
     var one = Math.abs(x1 - x2);
     var two = Math.abs(y1 - y2);
        return  one + two;
    }
}