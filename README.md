# chardin.js-rails
**Chardin.js for rails asset pipeline**

[Chardin.js][0] provides a simple overlay instructions for your apps.

## Usage

### Install chardinjs-rails gem

Add `chardinjs-rails` to your Gemfile and run `bundle install`:

```Ruby
group :assets do
  gem "chardinjs-rails"
end
```

### Include chardinjs-rails javascript assets

Add the following to your `app/assets/javascripts/application.js`:

     //= require chardinjs

### Include chardinjs-rails stylesheet assets

Add to your `app/assets/stylesheets/application.css`:

     *= require chardinjs

## Version

`chardinjs-rails` tracks [Chardin.js][0]'s versions.

## Contributions

If you want to contribute, please:

  * Fork the project.
  * Make your feature addition or bug fix.
  * Send me a pull request on Github.

## Copyright

### MIT Licensed

Copyright (c) 2013 Pablo Fernandez. See [LICENSE][1] for details.

[0]: https://github.com/heelhook/chardin.js
[1]: https://github.com/heelhook/chardin.js-rails/blob/master/LICENSE
