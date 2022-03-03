import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';

  users=[{name:"tony",id:12,occupation:"CEO"},
  {name:"pranay",id:11,occupation:"teacher"},
  {name:"Lawliet",id:9,occupation:"manager"},
  {name:"falcon",id:6,occupation:"MTS"},
  {name:"WS",id:3,occupation:"MTS"},
  {name:"Gilliard",id:4,occupation:"MTS"}];

  currentEditUser="";

  textFeildData="";
  editUser(userid,username){
    console.log(userid);
    this.textFeildData=username;
    console.log(this.textFeildData);
    
    this.currentEditUser=userid;
  }

  updateUser(userid){
    console.log(userid);
    console.log(this.textFeildData);
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id==userid){
        this.users[i].name=this.textFeildData;
        this.currentEditUser="";
      }
    }
    
  }

  deleteUser(userid){
    let targetuserInd = null;
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id==userid){
        targetuserInd=i;
      }
    }
    this.users.splice(targetuserInd,1);

  }

  newid=null;
  newName="";
  newOccupation="";

  createUser(){
let newUser = {id:this.newid,name:this.newName,occupation:this.newOccupation};
this.users.push(newUser);
this.newid=null;
  this.newName="";
  this.newOccupation="";
  }
}
