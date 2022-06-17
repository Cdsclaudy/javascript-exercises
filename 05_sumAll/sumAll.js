const sumAll = function(a,b) {
    if(typeof(a)!="number"||typeof(b)!="number" || a<0 || b<0)
    {
        return("ERROR");
    }
let v=0;
if(a<b)
{
for(let i=a;i<=b;i++)
{
    v+=i;
}
}
else
{
    for(let i=b;i<=a;i++)
{
    v+=i;
}
}
return v;
};

// Do not edit below this line
module.exports = sumAll;
