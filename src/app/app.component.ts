import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-Project-Angular6';
  serverElements = [{
    type: 'server',
    name: 'Test Server',
    content: 'Just a test'
  }];
  loadedFeature = 'recipe';
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
   }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
   }

   onNavigate(feature: string) {
    this.loadedFeature = feature;
   }

}
