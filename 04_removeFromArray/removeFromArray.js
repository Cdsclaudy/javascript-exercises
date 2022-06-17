const removeFromArray = function() {
let arr=arguments[0];
let b=[];
for(let i=0;i<arr.length;i++)
{
    let a=0;
    for(let j=1;j<arguments.length;j++)
    {
        if(arguments[j]===arr[i])
        {
            a=1;
            break;
        }
    }
    if(a!=1)
    {   
        b.push(arr[i]);
    }
}
return b;
};

// Do not edit below this line
module.exports = removeFromArray;