const solveEquation = function(equation) {
  let varConst = retrieveVarConst(equation);
  let lhs = varConst.variable;
  lhs = lhs.split(lhs[lhs.length-1])[0];
  let rhs = varConst.constant;
  return rhs/lhs;
}

const evaluateEquation = function(equation) {
  let values = equation.split(" ");
  console.log(values);
  let toUnshift;
  for(value of values) {
    if(value.includes("x")) {
      console.log(value);
      toUnshift = value;
      console.log(value);
    }
  }
  values[2] = "";
  values.unshift(toUnshift);
  console.log(values);
  return values.join("");
}

const rearrangeLHS = function(equationArray) {
  let array = [];
  for(index in equationArray) {
    array[index] = evaluateEquation(equationArray[index]);
  }
  return array;
}



const retrieveVarConst = function(inputEquation) {
  let values = {variable : 1 , constant: 0 , operator : '+' , equation: ''};
  values.equation = inputEquation.split('=');
  //values.equation = rearrangeLHS(values.equation); 
  let count=3;
  while(count>1) {
    values.equation = seperateVarConst(values);
    count--;
  }
  return values;
}
const seperateVarConst = function(values) {
  if(values.equation[0].includes('x')) { 
    values = moveConstant(eval(values.equation[1]),values);
    values = extractOperator(values.equation[0],values); 
    values.variable = values.equation[0];
    return values.equation;
  }
  if(values.equation[1].includes('x')) {
    values = moveConstant(eval(values.equation[0]),values);
    values = extractOperator(values.equation[1],values); 
    return values.equation;
  }

}

const moveConstant = function(constant,object) {   
  let temp = +constant;
  object.constant = eval(object.constant+object.operator+temp); 
  return object;
}

const extractOperator = function(equation,values) {
  if(equation.includes('+')) {
    values.operator = "-";
    values.equation = equation.split("+");
  }
  if(equation.includes('-')) {
    values.operator = "+";
    values.equation = equation.split("-");
  }
  if(equation.includes('*')) {
    values.operator = "/";
    values.equation = equation.split("*");
  }

  if(equation.includes('/')) {
    values.operator = "*";
    values.equation = equation.split("/");
  }
  return values;
}
module.exports = {
solveEquation,
evaluateEquation,
rearrangeLHS,
retrieveVarConst,
seperateVarConst,
moveConstant,
extractOperator,
};
