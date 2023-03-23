let employee = {
    name:"harith",
    streetAddress:" Use literal syntax to create your ",
}
function updateEmployeeWithKeyAndValue(employee, key, value) { 
    return {
        ...employee,
        [key]: value,
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const obj = {...employee}; 
    delete obj [key]; 
    return obj ; 
  }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}
  
