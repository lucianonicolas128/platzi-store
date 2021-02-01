// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: "AIzaSyC2lQYEI1KZfRKwcMCtgVLpRkwLwQFEGks",
    authDomain: "platzi-store-faae8.firebaseapp.com",
    projectId: "platzi-store-faae8",
    storageBucket: "platzi-store-faae8.appspot.com",
    messagingSenderId: "32013721871",
    appId: "1:32013721871:web:99acd465275f1988971e7a"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.