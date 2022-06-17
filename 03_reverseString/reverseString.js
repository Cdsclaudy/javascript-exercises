const reverseString = function(string) {
let s='';
    for(let i=0;i<string.length;i++)
    {
        s=string[i]+s;
    }
    return s;
};

// Do not edit below this line
module.exports = reverseString;
