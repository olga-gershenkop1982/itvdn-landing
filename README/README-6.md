# _ОРГАНИЗАЦИЯ РАБОЧЕГО ПРОЦЕССА_
## _КОМАНДЫ ТЕРМИНАЛА:_

> #### `ls`
> * показывает все файлы и папки проекта `списком`, `исключая скрытые`
> 
> _Например,
  в папке `itvdn-landing` находиться 1 явный файл, `README.md`:_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ ls
> README.md
> ```
  
> #### `ls -a`
> * показывает все файлы и папки проекта `списком`, `включая скрытые`
> 
> _Например,
  в папке `itvdn-landing`,
  находиться 1 явный файл, `README.md`,
  и 2 скрытых папки, `.git` и `.idea`:_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ ls -a
> .  ..  .git  .idea  README.md
> ```

> #### `touch <file>`
> * создаёт файл
> 
> _Например,_
> 
> `touch README.md`

> #### `touch <file> <file>`
> * создаёт несколько файлов
> 
> _Например,_
> 
> `touch index.html main.css`

> #### `mkdir <directory>`
> * создаёт папку
> 
> _Например,_
> 
> `mkdir build`
> 
> _или_
> 
> `mkdir build/`

> #### `mkdir <directory> <directory>`
> * создаёт несколько папок
> 
> Например,
>
> `mkdir build source`
>
> _или_
> 
> `mkdir build/ source/`

> #### `cd <directory>`
> * переход
> 
> _Например,_
> * _находимся в папке `Learning`_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning
> $ 
> ```
> * _хотим перейти в папку проекта `itvdn-landing`_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning
> $ cd itvdn-landing
> ```
> * _теперь находимся в папке `itvdn-landing`_
>```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing
> $ 
>```
  
## _КОМАНДЫ ДЛЯ ПРОВЕРКИ ВЕРСИИ:_

### _NODE_
> `node -v` _: сокращённая_
>
> `node --version` _: полная_
> 
> * _проверяет, есть ли у вас `node` и показывает версию_

### _NPM_
> `npm -v` _: сокращённая_
>
> `npm --version` _: полная_
>
> * _проверяет, есть ли у вас `npm` и показывает версию_

### _NPX_
> `npx -v` _: сокращённая_
>
> `npx --version` _: полная_
>
> * _проверяет, есть ли у вас `npx` и показывает версию_

### _GULP_
> `gulp -v` _: сокращённая_
>
> `gulp --version` _: полная_
>
> * _проверяет, есть ли у вас `gulp` и показывает версию_
> 
> _В терминале:_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ gulp -v
> CLI version: 2.3.0
> Local version: 4.0.2
> ```
> _или_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ gulp --version
> CLI version: 2.3.0
> Local version: 4.0.2
> ```

## _КОМАНДЫ NPM:_

### _удалить старую версию `gulp`_
> `npm rm --global gulp` _: полная_
>
> `npm rm -g gulp` _: сокращённая_
>
> * _удаляет старую версию `gulp`, если ранее вы устанавливали его глобально_

### _создать `package.json`_
> `npm init`
>
> * _создаёт `package.json` (через терминал)_

### _установить в проект все зависимости_
> `npm install`
>
> * _установит в проект все библиотеки, пакеты и зависимости,
    указанные в `package.json`_

### _установить пакет/пакеты в папку проекта_
> `npm install --save-dev <package>`
>
> `npm install --save-dev <package> <package>`
>
> * _устанавливаем `пакет` или `несколько` пакетов
    в раздел `devDependencies` файла `package.json`_
> 
> _Например,_
>
> `npm install --save-dev browser-sync`
>
> _или_
>
> `npm install --save-dev browser-sync gulp gulp-pug gulp-sass`

### _удалить пакет/пакеты из папки проекта_
> `npm uninstall --save-dev <package>`
>
> _или_
>
> `npm uninstall --save-dev <package> <package>`
>
> * _удаляем `пакет` или `несколько` пакетов
    из раздела `devDependencies` файла `package.json`_
> 
> _Например,_
>
> `npm uninstall --save-dev browser-sync`
>
> _или_
>
> `npm uninstall --save-dev browser-sync gulp gulp-pug gulp-sass`

## _КОМАНДЫ GIT:_

### _создаём пустой репозиторий_
> `git init`
>
> * _создаёт пустой репозиторий_
> ```
> $ git init
> Initialized empty Git repository in C:/Users/User/Desktop/Frontend/Learning/itvdn-landing/.git/
> ```

### _показываем состояние проекта_
> `git status`
>
> * _показывает состояние проекта на текущий момент_

### _добавляем изменение в зону `"index"`_
> `git add <file>`
>
> * _добавляет изменения `одного какого-то файла` в зону `"index"`_
> 
> _Например,_
> `git add README.md`

### _добавляем несколько изменений в зону `"index"`_
> `git add <file> <file>`
>
> * _добавляет изменения `нескольких каких-то файлов` в зону `"index"`_
> 
> _Например,_
> `git add README.md .gitignore`

### _добавляем все изменения в зону `"index"`_
> `git add .`
>
> * _добавляет `все изменения всех файлов` в зону `"index"`_
> 
> _Например,_
> `git add .`

### _комментируем через редактор_
> `git commit`
>
> * _`переводит` вас `в окно текстового редактора`;_
> * _где, в специальной строке, вы можете создать и отредактировать комментарий;_
> * _далее добавит изменения в зону `"репозиторий"`,
    когда вы сохраните и закроете окно редактора;_
> 
> _Пример `окна текстового редактора`:_
>
> ```
> 1 
> 2  # Please enter the commit message for your changes. Lines starting
> 3  # with '#' will be ignored, and an empty message aborts the commit.
> 4  #
> 5  # On branch master
> 6  #
> 7  # Initial commit
> 8  #
> 9  # Changes to be committed:
> 10 # new file:   .gitignore
> 11 #
> 12 # Untracked files:
> 13 # README.md
> 14 #
> ```
> _Запись в терминале, после сохранения и закрытия окна текстового редактора:_
>
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ git commit
> [master (root-commit) 1fab94a] Add .gitignore
> 1 file changed, 19 insertions(+)
> create mode 100644 .gitignore
> ``` 

### _комментируем_
> _1.:_ `git commit -m "Commit"`
> 
> _Например,_
> `git commit -m "First init"`
> 
> _2.:_ `git commit -m 'Commit'`
> 
> _Например,_
> `git commit -m 'First init'`
> 
> _3.:_ `git commit -m Commit`
> 
> _Например,_
> `git commit -m 'Init'`
> 
> * _добавляет изменения в зону `"репозиторий"`_
> * _и создаёт `комментарий`_

### _клонируем проект_
> `git clone <path>`
>
> * _клонирует репозиторий_
>
>> _Например,_
>>
>> `HTTPS:`
>> `git clone https://github.com/olga-gershenkop1982/itvdn-landing.git`
>>
>> _или_
>>
>> `SSH:`
>> `git clone git@github.com:olga-gershenkop1982/itvdn-landing.git`
>>
>> *_`клонировать` - т.е. скачать репозиторий/скопировать/весь проект забрать себе;_

### _задаём удалённому серверу путь_
> `git remote add origin <path>`
>
> * _делается `один раз`;_
> * _говорим git, что наш удалённый сервер находится по данной ссылке;_
> ```
> remote = удалённо
> add = добавь
> origin = источник
> ```
>> _Например,_
>>
>> `HTTPS:`
>> `git remote add origin https://github.com/olga-gershenkop1982/itvdn-landing.git`
>>
>> _или_
>>
>> `SSH:`
>> `git remote add origin git@github.com:olga-gershenkop1982/itvdn-landing.git`

### _отправляем данные_
> `git push -u origin master`
>
> * _делается `один раз`_;
> * _отправляем изменения на `git` в указанную ветку_;
> * _после данной команды, необходимо `обновить страницу репозитория в браузере`_;
>
> `origin`
> * _сокращённое слово, которое хранит в себе ссылку, например,
    `HTTPS:` `https://github.com/olga-gershenkop1982/itvdn-landing.git`
    или
    `SSH:` `git@github.com:olga-gershenkop1982/itvdn-landing.git`_;
> * _предназначено, чтобы постоянно не писать, указанную выше ссылку, т.е. переменная_;
>
> `master`
> * _ветка_;
>
> _Запись в терминале, после `git push -u origin master`:_
> ```
> User@Olga MINGW64 ~/Desktop/Frontend/Learning/itvdn-landing (master)
> $ git push -u origin master
> Enumerating objects: 3, done.
> Counting objects: 100% (3/3), done.
> Delta compression using up to 4 threads
> Compressing objects: 100% (2/2), done.
> Writing objects: 100% (3/3), 333 bytes | 111.00 KiB/s, done.
> Total 3 (delta 0), reused 0 (delta 0)
> To github.com:olga-gershenkop1982/itvdn-landing.git
> * [new branch]      master -> master
> Branch 'master' set up to track remote branch 'master' from 'origin'.
> ``` 
> 
> _далее используем_
> `git push origin <branch>`
> 
> * _отправляем изменения на `git` в указанную ветку,
    например, `master` или `version-1`_;
>> _Например,_
>>
>> `git push origin master`
>>
>> _или_
>>
>> `git push origin version-1`
> ```
> push = затолкай
> -u = ...
> origin = источник
> ```

### _посмотреть ветки_
> `git branch`
> * _посмотреть, какие у нас есть ветки;_
> 
> _Например,_
> ```
> lesson-1
> * master
> ```
> _в примере, `*` указывает на какой ветке мы находимся,
  в данном случае в ветке `master`_

### _создать ветку_
> `git branch <name>`
>
> * _`создаём ветку` с определенным именем_;
> 
> _Например,_
> `git branch lesson-1`

### _перейти на ветку_
> `git checkout <name>`
> * _`переходим` на определенную ветку;_
> 
> _Например,_
> `git checkout version-1`