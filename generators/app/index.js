'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log('Welcome to the cool ' + chalk.red('angular-boot') + ' generator! ' + chalk.yellow('Let\'s ask you few questions...'));

    var prompts = [
      {type: 'input', name: 'artifact', message: 'Artifact:', default: 'angularboot'},
      {type: 'input', name: 'package', message: 'Group name:', default: 'com.somecompany'},
      {type: 'input', name: 'author', message: 'Project author:', default: 'John Doe'},
      {type: 'input', name: 'email', message: 'E-mail', default: 'john.doe@localhost'},
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var packagePath = this.props.package.replace(/\./g, '/');
      this.template('_pom.xml', 'pom.xml');
      this.directory('src/main/java/package/', 'src/main/java/' + packagePath + '/' + this.props.artifact + '/');
      this.copy('src/main/resources/application.properties', 'src/main/resources/application.properties');

      this.directory('gulp', 'gulp');
      this.copy('karma.conf.js', 'karma.conf.js');
      this.copy('gulpfile.js', 'gulpfile.js');
      this.copy('protractor.conf.js', 'protractor.conf.js');

      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');

    }
    ,

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
})
;
