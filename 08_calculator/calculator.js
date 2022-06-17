const add = function(a,b) {
	return(a+b);
};

const subtract = function(a,b) {
	return(a-b);
};

const sum = function(a) {
  let b=0;
	for(let i=0;i<a.length;i++)
  {
    b+=a[i];
  }
  return b;
};

const multiply = function(a) {
  let b=1;
	for(let i=0;i<a.length;i++)
  {
    b*=a[i];
  }
  return b;
};

const power = function(a,b) {
	let p=1;
  for(let i=0;i<b;i++)
  {
    p=p*a;
  }
  return p;
};

const factorial = function(a) {
	let p=1;
  for(let i=1;i<=a;i++)
  {
    p=p*i;
  }
  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
