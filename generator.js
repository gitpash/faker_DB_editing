module.exports = function() {
  const faker = require('faker')
  const _  = require('lodash')
  return {
    fakeData: _.times(10, function(n) {
      return {
        department: faker.company.companyName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        departmentId: n
      }
    })
    }
  }




/// Scheme
// # Модели
 
// Department (name: string)
// Employee (firstName: string, lastName: string, departmentId:number) 
 
// # Интерфейс
 
// Левое меню
 
// Departments
// Employees
 
// Контент 
 
// Таблица редактирования выбранной сущности
