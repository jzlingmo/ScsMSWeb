exports.config =
  modules:
    definition: false
    wrapper: false
  paths:
    public: 'public'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/
      order:
        before: [
          'vendor/js/angular.js'
          'vendor/js/angular-animate.js'
          'vendor/js/angular-cookies.js'
          'vendor/js/angular-sanitize.js'
          'vendor/js/angular-resource.js'
          'vendor/js/angular-route.js'
          'vendor/js/angular-translate.js'

          'vendor/js/ui-bootstrap.js'
          'vendor/js/ui-bootstrap-tpls.js'

          'vendor/js/angular-strap.js'
          'vendor/js/angular-strap.tpl.js'

          'vendor/js/d3.v3.js'
          'vendor/js/nv.d3.js'
        ]

    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor)/
      order:
        after: [
          'app/css/animation.less'
          'app/css/app.less'
        ]
  plugins:
    autoReload:
      enabled:
        js: on
        css: on
        assets: on

    imageoptimizer:
      path: 'images'
      smushit: no

      options:
        indentation:
          value: 4
          level: "warn"

        max_line_length:
          level: "ignore"

# Enable or disable minifying of result js / css files.
# minify: true
