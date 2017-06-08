!["Logo"](https://cdn.rawgit.com/Baqend/ionic1-starter/master/ionic_baqend.svg)

# Ionic 1 and Baqend Starter

With this Ionic and Baqend starter kit you can build **blazingly fast hybrid apps** in no time.

This starter is based on the [Ionic-Tabs-Starter](https://github.com/driftyco/ionic-starter-tabs).

## HOW-TO

The easiest way to use this starter is to use the ionic cli:
 
 ```bash
 npm install -g ionic cordova
 npm install
 ionic serve
 ```

 The ionic app is already connected to a Baqend test instance. To connect it to your [own Baqend instance](https://dashboard.baqend.com/register) change the variable `appName` in the `service.js` to the name of your Baqend instance. If you will use your app on iOS please
 replace `app-starter` with your Baqend instance name at the bottom of the `config.xml`.

 The app uses a `Message` object, which is defined in [the Baqend schema](https://www.baqend.com/guide/topics/schema/). It has three string attributes: `name`, `text`, `face`.  
 
## How Baqend fits your Backend requirements

Baqend is a fully managed Backend-as-a-Service platform with a strong focus on performance and scalability ([click here for details](https://medium.baqend.com/bringing-web-performance-to-the-next-level-an-overview-of-baqend-be3521bc2faf)). The [JavaScript API](https://www.baqend.com/js-sdk/latest/baqend.html) gives you access to common backend features while the [dashboard](https://www.baqend.com/guide/topics/dashboard/) lets you define data models and access rules as well as business logic to execute on the server side.

Baqend's feature set includes: 

* Automated Browser and CDN Caching
* Scalable Data Storage
* Realtime Streaming Queries
* Powerful Search and Query Language
* Push Notifications
* User Authentication and OAuth
* File Storage and Hosting
* Access Control on Object and Schema Level

## License
 
[MIT](https://github.com/Baqend/ionic-starter/blob/master/LICENSE) 
