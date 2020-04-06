/* eslint-disable */
/* Author Anene */
{
    "use strict";
    //Question 1
    console.log("---------------Q1 Answer------------------------");
    const person={
        name:"",
        dateOfBirth:"",
        getName:()=>this.name,
        setName:(newName)=>this.name=newName
    }
    const john=Object.create(person);
    john.setDateOfBirth=(dob)=>this.dateOfBirth=dob;
    john.getDateOfBirth=()=>{
            const dob=new Date(this.dateOfBirth);
        		return (dob.getFullYear()+"-"+(dob.getMonth()+1)+"-"+dob.getDate());
    }
    john.setName("John");
    john.setDateOfBirth(new Date("December 10 1998"));
    console.log("The person's name is ${john.getName()}");
    console.log(john.getName()+ " was born "+john.getDateOfBirth());

    //Question 2
    console.log("---------------Q2 Answer------------------------");
    const employee=Object.create(person);
    employee.salary=0.0;
    employee.setSalary=(sal)=>employee.salary=sal;
    employee.hireDate=new Date();
    employee.doJob=(jobTitle)=>employee.getName()+" is a "+jobTitle+" who earns $"+employee.salary;
	const annaemp=Object.create(employee);
    annaemp.setName("Anna");
    annaemp.setSalary(249995.50);
    console.log(annaemp.doJob("Programmer"));
    
}

//Question 3
{
    //Question 1
    console.log("---------------Q3 Answer------------------------");
    function Person(){
        this.name="";
        this.dateOfBirth="";
        this.getName=()=>name;
        this.setName=(newName)=>name=newName;
    }
    const john=new Person();
    Person.prototype.setDateOfBirth=(dob)=>this.dateOfBirth=dob;
    Person.prototype.getDateOfBirth=()=>{
            const dob=new Date(this.dateOfBirth);
        		return (dob.getFullYear()+"-"+(dob.getMonth()+1)+"-"+dob.getDate());
    }
    Person.prototype.toString=()=>{
    	const dob=new Date(this.dateOfBirth);
    	return"{Name:"+this.name+", DateOfBirth:"+dob.getFullYear()+"-"+(dob.getMonth()+1)+"-"+dob.getDate()+"}"};
    john.setName("John");
    john.setDateOfBirth(new Date("December 10 1998"));
    console.log(john.toString());
    
    const peter=new Person();
    peter.setName("Peter");
    peter.setDateOfBirth(new Date("November 10 1985"));
    console.log(peter.toString());   
}