function processData(input) {
    let inp= input.split("\n");
    let size= Number(JSON.parse(inp[0]));
    let arr = inp.splice(1,15);
    let d= Number(inp[1]);
    
  
    let fi=-1;
    let li=-1;
    
    let lo=0;
    let hi = arr.length-1;
    
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        
        if(d<arr[mid]){
            hi=mid-1;
        }
        else if (d>arr[mid]){
            lo=mid+1;
        }
        else{
            li=mid;
            lo=mid+1;
        }
    }
    
    
    lo=0;
    hi=arr.length-1;
    
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        
        if(d<arr[mid]){
            hi=mid-1;
        }
        else if (d>arr[mid]){
            lo=mid+1;
        }
        else{
            fi=mid;
            hi=mid-1;
        }
    }
    
    
    console.log(fi);
    console.log(li);

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
