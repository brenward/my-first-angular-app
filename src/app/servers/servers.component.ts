import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]' -- add <div app-servers></div> to html to select via attribute,
  //selector: '.app-servers' -- add <div class="app-servers"></div> to html to select via class,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;   
    
    console.log(event);
  }

}
