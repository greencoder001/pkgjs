/*
  PKG.js created by Green_Lab
  Copyright (c) Green_Lab
  pkg.js by Green_Lab is licensed under CC BY-SA 4.0CC
  https://creativecommons.org/licenses/by-sa/4.0/
*/

const pkg = {
  version: 1.0,
  cms: {
    index: 'packages/index.json',
    url: 'https://greencoder001.github.io/pkgjs/cms/',
  },
  include: function includePkgJsModule(module) {
    var json = {};
    fetch(pkg.cms.url + pkg.cms.index)
      .then(response => response.json())
      .then(data => data.forEach((package, i) function () {
        if (package.id == module) {
          // Found the Package
          //Dom Pkg
          console.log('[PKG] Adding new Package named ' + package.name + '.');
          //Add to DOM:
          var pkgscript = document.createElement('script');
          pkgscript.src = package.url;
          pkgscript.type = 'text/javascript';
          pkgscript.classList.add('pkgjs-imported');
          document.head.appendChild(pkgscript);
        }
      }
    ););
  }
};
const include = pkg.include;
