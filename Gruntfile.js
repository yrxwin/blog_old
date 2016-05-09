// Generated on 2016-04-07 using generator-jekyllrb 1.4.1
'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:dist']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:dist']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '<%= yeoman.app %>/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: '<%= yeoman.dist %>'
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '<%= yeoman.app %>/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.jekyll',
              '.tmp',
              '<%= yeoman.app %>'
            ]
          },
          watchTask: true
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/_bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        expand: true,
        cwd: '.tmp',
        src: '**/{css,concat}/*.css',
        dest: '.tmp'
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/_layouts/default.html'],
        ignorePath: /\.\.\//,
        exclude: ['<%= yeoman.app %>/_bower_components/jquery/'],
        fileTypes: {
          html: {
            replace: {
              js: '<script src="/{{filePath}}"></script>',
              css: '<link rel="stylesheet" href="/{{filePath}}" />'
            }
          }
        }
      }
    },

    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/img']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            src: [
              // Jekyll processes and moves HTML and text files.
              // Usemin moves CSS and javascript inside of Usemin blocks.
              // Copy moves asset files and directories.
              'img/**/*',
              'fonts/**/*',
              // Like Jekyll, exclude files & folders prefixed with an underscore.
              '!**/_*{,/**}',
              // Explicitly add any files your site needs for distribution here.
              '_bower_components/jquery/dist/jquery.min.js'
              //'favicon.ico',
              //'apple-touch*.png'
            ],
            dest: '<%= yeoman.dist %>'
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/_bower_components/bootstrap/dist',
            src: 'fonts/*.*',
            dest: '<%= yeoman.dist %>'
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/_bower_components/components-font-awesome',
            src: 'fonts/*.*',
            dest: '<%= yeoman.dist %>'
          }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    // Renames files for browser caching purposes
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:yrxwin/yrxwin.github.io.git',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js',
        '!<%= yeoman.app %>/js/jqBootstrapValidation.js',
        '!<%= yeoman.app %>/js/classie.js',
        '!<%= yeoman.app %>/js/cbpAnimatedHeader.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    // https://github.com/robwierzbowski/generator-jekyllrb/issues/106
    // scsslint: {
    //   // See https://www.npmjs.org/package/grunt-scss-lint for options.
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },

    // Run some tasks in parallel to speed up the dist process
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:dist',
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'browserSync:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'jshint:all',
    'csslint:check'
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'wiredep',
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'autoprefixer:dist',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
