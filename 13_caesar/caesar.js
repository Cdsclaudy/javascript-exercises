const caesar = function(a,b) {
let c="";
for(let i=0;i<a.length;i++)
{
    if(a.charCodeAt(i)>=97&&a.charCodeAt(i)<=122)
    {
        c+=String.fromCharCode(a.charCodeAt(i)+b);
        if(c.charCodeAt(i)>122)
        {
            c[i]=String.fromCharCode(97+c.charCodeAt(i)-122-1);
        }
        if(c.charCodeAt(i)<97)
        {
            c[i]=String.fromCharCode(122-97-c.charCodeAt(i)+1);
        }
    }
    else if(a.charCodeAt(i)>=65&&a.charCodeAt(i)<=90)
    {
        c+=String.fromCharCode(a.charCodeAt(i)+b);
        if(c.charCodeAt(i)>90)
        {
            c[i]=String.fromCharCode(65+c.charCodeAt(i)-90-1);
        }
        if(c.charCodeAt(i)<65)
        {
            c[i]=String.fromCharCode(90-65-c.charCodeAt(i)+1);
        }
    }
    else
    {
        c+=a[i];
    }
}
return c;
};

// Do not edit below this line
module.exports = caesar;
