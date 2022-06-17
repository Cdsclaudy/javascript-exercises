const fibonacci = function(a) {
let b=1;
let c=1;
if(a<0)
{
    return("OOPS");
}
if(a==1||a==2)
    return b;
else
{
    let res=0;
    for(let i=0;i<a-2;i++)
    {
        res=b+c;
        b=c;
        c=res;
    }
    return res;
}
};

// Do not edit below this line
module.exports = fibonacci;
