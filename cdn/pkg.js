/*
  PKG.js created by Green_Lab
  Copyright (c) Green_Lab
  pkg.js by Green_Lab is licensed under CC BY-SA 4.0CC
  https://creativecommons.org/licenses/by-sa/4.0/
*/

const pkg = {
  execute: function ExecuteJavascriptOutOfAnString(js)
  {
    setTimeout(js, 0);
  },
  version: 1.0,
  identifier: 'pkgjs-imported',
  cdn: {
    index: 'index.json',
    url: 'https://greencoder001.github.io/pkgjs/cdn/',
  },
  include: function includePkgJsModule(pkg2i) {

    function workWithPackageIndex(data, mod) {

      console.log('[PKG] Successfully fetched the packageindex.')
      console.log(data);

      var count = 0;

      for(var package of data)  {

        //Is it the last Item?
        if (count == data.length - 1) {
          // Last Item!

          if (package.id == mod) {
            // Found the package!
            //All ok.

            /*//Get the head:
            var head = document.getElementsByTagName('head')[0];

            //Create DOM Element:
            var pkgScript = document.createElement('script');
            pkgScript.src = package.url;
            pkgScript.type = 'text/javascript';
            pkgScript.classList.add(pkg.identifier);

            //Append to head:
            head.appendChild(pkgScript);*/

            console.log('[PKG] Found the package!');

            fetch(package.url)
              .then(response => response.text())
              .then(js => pkg.execute(js));

            console.log('[PKG] Package was successfully loaded.')

            break;

          }
          else {
            console.error('[PKG] Package ' + mod + ' doesn\'t exist.');
          }

        }
        else {
          //All ok.

          if (mod == null || mod == undefined) {
            console.error('[PKG] Can\'t import undefined package.');
            break;
          }
          if (package.id == mod) {
            // Found the package!

          }

        }

        count++;

      }


    }

    console.log('[PKG] Preparing to include new package!');
    fetch(pkg.cdn.url + pkg.cdn.index)
      .then(response => response.json())
      .then(data => workWithPackageIndex(data, pkg2i));

    // for (var i = 0; i < json.length; i++) {
    //   if (json[i].id == module) {
    //     // Found the package[i]
    //     //Dom Pkg
    //     console.log('[PKG] Adding new package[i] named ' + json[i].name + '.');
    //     //Add to DOM:
    //     var pkgscript = document.createElement('script');
    //     pkgscript.src = json[i].url;
    //     pkgscript.type = 'text/javascript';
    //     pkgscript.classList.add('pkgjs-imported');
    //     document.head.appendChild(pkgscript);
    //   }
    // }

  }
};
const include = pkg.include;
