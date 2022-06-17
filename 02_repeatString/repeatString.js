const repeatString = function(string,num) {
    if(num<0)
    return("ERROR");
    let s1='';
for(let i=0;i<num;i++)
{
    s1=s1+string;
}
return s1;
};

// Do not edit below this line
module.exports = repeatString;
