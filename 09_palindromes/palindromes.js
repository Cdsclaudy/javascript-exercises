const palindromes = function (a) {
let rev='';
let norm='';
for(let i=0;i<a.length;i++)
{
    if(a[i].toLowerCase()>='a'&&a[i].toLowerCase()<='z')
    {
        norm=norm+a[i].toLowerCase();
        rev=a[i].toLowerCase()+rev;
    }
}
if(norm==rev)
    return true;
else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
