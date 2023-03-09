###[Английская версия](README.md)
Установите галп глобально для системы `npm i gulp-cli -g`

Plugins
* `gulp-sass` и `sass` - Для создания CSS файлов из SCSS/SASS, используется плагины
* `gulp-concat` - для конкатинации (объединения) файлов, так же используется для переименования
* `gulp-uglify-es` - объединяет JS файлы (поддерживает ES6 синтаксис)
* `browser-sync` - обновление проекта в браузере
* `gulp-autoprefixer` - добавляет префиксы для старых версий браузеров
* `gulp-clean` - используется для очистки каталого перед билдом

###  команды для Make
__Build CSS file:__ `make build-css`

__Build min CSS file:__ `make build-mincss`

__Build min JS file:__ `make build-minjs`

__Start watching:__ `make watching`

__Clean dist directory:__ `make clean`

__Default task:__ `gulp`

__Build project:__ `make build`
