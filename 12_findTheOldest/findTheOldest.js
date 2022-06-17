const findTheOldest = function(a) {
let m=0;
for(let i=1;i<a.length;i++)
{
    if(typeof(a[i].yearOfDeath)=="undefined")
    {
        a[i].yearOfDeath=new Date().getFullYear();
    }
    if(typeof(a[m].yearOfDeath)=="undefined")
    {
        a[m].yearOfDeath=new Date().getFullYear();
    }
    if(typeof(a[m].yearOfDeath)!="undefined"&&a[i].yearOfDeath-a[i].yearOfBirth>a[m].yearOfDeath-a[m].yearOfBirth)
    {
        m=i;
    }
}
return a[m];
};

// Do not edit below this line
module.exports = findTheOldest;
