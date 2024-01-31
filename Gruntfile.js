module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'src/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css',
          },
        ],
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/index.min.js': ['src/js/*.js'],
        },
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'src/assets',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'dist/assets',
          },
        ],
      },
    },
    htmlmin: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.html'],
            dest: 'dev',
          },
        ],
      },
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.html'],
            dest: 'prebuild',
          },
        ],
      },
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dev/',
      },
    },
    replace: {
      devIndex: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS_GLOBAL',
              replacement: './css/style.css',
            },
            {
              match: 'ENDERECO_DO_CSS_HIGH_CONTRAST',
              replacement: './css/high-contrast.css',
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: './js/index.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dev/',
          },
        ],
      },
      devPages: {
        options: {
          patterns: [
            {
              match: 'PAGES_ENDERECO_DO_CSS_GLOBAL',
              replacement: '../css/style.css',
            },
            {
              match: 'PAGES_ENDERECO_DO_CSS_HIGH_CONTRAST',
              replacement: '../css/high-contrast.css',
            },
            {
              match: 'PAGES_ENDERECO_DO_JS',
              replacement: '../js/index.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/pages/*.html'],
            dest: 'dev/pages/',
          },
        ],
      },
      distIndex: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_DO_CSS_GLOBAL',
              replacement: './css/style.min.css',
            },
            {
              match: 'ENDERECO_DO_CSS_HIGH_CONTRAST',
              replacement: './css/high-contrast.min.css',
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: './js/index.min.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['prebuild/index.html'],
            dest: 'dist/',
          },
        ],
      },
      distPages: {
        options: {
          patterns: [
            {
              match: 'PAGES_ENDERECO_DO_CSS_GLOBAL',
              replacement: '../css/style.min.css',
            },
            {
              match: 'PAGES_ENDERECO_DO_CSS_HIGH_CONTRAST',
              replacement: '../css/high-contrast.min.css',
            },
            {
              match: 'PAGES_ENDERECO_DO_JS',
              replacement: '../js/index.min.js',
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['prebuild/pages/*.html'],
            dest: 'dist/pages/',
          },
        ],
      },
    },
    clean: ['prebuild'],
  })

  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-replace')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', [
    'copy',
    'htmlmin:dev',
    'replace:devIndex',
    'replace:devPages',
  ])
  grunt.registerTask('build', [
    'cssmin',
    'uglify',
    'imagemin',
    'htmlmin:dist',
    'replace:distIndex',
    'replace:distPages',
    'clean',
  ])
}
