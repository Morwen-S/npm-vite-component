# Vue 3/Vue 2 + Vite

## Публикация пакета

### Установка пакетов

Используем `--force` для установки @vitejs/plugin-vue2 , так как он установится без Vue 2

```
npm i --force
```

### Генерируем файлы для библиотеки

```
npm run build-lib
```

Будут сегенерированны две папки в корне проекта `./vue2` и `./vue3`

### Публикация пакета

```
npm publish
```

## Использование пакета

Установка пакета

```
npm i [имя пакета]
```

Импорт компонентов в проектах с Vue 2

```
import { ComponentName } from 'npm-vite-component/vue2';
```

Импорт компонентов в проектах с Vue 3

```
import { ComponentName } from 'npm-vite-component/vue3';
```
