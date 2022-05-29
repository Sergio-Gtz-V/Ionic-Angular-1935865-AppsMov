// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyDxfAmCME6pRK2JfrGHBuj07N6jNX7wWBc",
    authDomain: "bd-aplicacionesmoviles.firebaseapp.com",
    projectId: "bd-aplicacionesmoviles",
    storageBucket: "bd-aplicacionesmoviles.appspot.com",
    messagingSenderId: "1001369684813",
    appId: "1:1001369684813:web:9135fea19b5f16b89c0504",
    measurementId: "G-SNQ10J2VD7"
  }
};

const app = initializeApp(environment.firebaseConfig)
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
