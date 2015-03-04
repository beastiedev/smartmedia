# smartmedia

Note: angular is added using *bower*, so you need to execute `bower install` in console. This will create bower_components directory and download all the dependencies according to bower.json. Here is an article on why to use bower: http://frontendbabel.info/articles/bower-why-frontend-package-manager/

Here is a grunt configured to run 2 tasks by default: jslint and jshint. First one detects syntax errors, 2nd one - logical errors, best practices violations. Example usage:

```
bash-3.1$ grunt
Running "jshint:files" (jshint) task
>> 2 files lint free.

Running "jslint:client" (jslint) task
FAIL    smartmedia.js (3)
smartmedia.js:1:1       'a' was used before it was defined.
smartmedia.js:2:1       'b' was used before it was defined.
smartmedia.js:2:5       'c' was used before it was defined.

\# JSLint failed, 3 violations in 1.  1 files scanned.
Warning: Task "jslint:client" failed. Use --force to continue.

Aborted due to warnings.
```

Few words about jslint: http://habrahabr.ru/post/74419/