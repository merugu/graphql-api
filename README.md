### Example query 1:
```
{
  getEmployeeByID(employeeID: 1) {
    name
    employeeID
    address {
      street
      city
      state
      postalCode
    }
  }
}
```