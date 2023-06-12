import  { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule).
catch(err=>console.log(err));


//Loading angular for us

// Just in time compilation -

// Ahead of time - loads faster

// AOT - commonly used and recommedded

