# 🏎️ Drift Valley v1.0

3D-игра про дрифт, такси и доставку в большом открытом мире. Работает в браузере, на Android (APK) и на Windows (exe).
*A 3D drift, taxi & delivery game with an open world — runs in the browser, on Android and on Windows.*

### ▶ [Играть онлайн](https://scorlenty.github.io/DriftValley/)

<!-- Замени на свои скриншоты: загрузи картинки в папку screenshots и раскомментируй -->
<!--
![Главное меню](screenshots/menu.png)
![Дрифт](screenshots/drift.png)
![Город](screenshots/city.png)
-->

## ✨ Возможности

- **Дрифт-физика:** занос по силам шин, контрруль, режим «заморозки угла» для управления с клавиатуры и кнопок, комбо до x5.
- **4 машины:** дрифт-кар, гиперкар, фургон и такси, у каждой своя физика.
- **Гараж и тюнинг:** цвет кузова, диски, неон, спойлеры, бамперы, декали, апгрейды мотора, шин и подвески.
- **Открытый мир:** мегаполис, река с мостами, село с домами и полями.
- **Трассы:** кольцевая, Ле-Ман, горная Тогэ, два городских круга.
- **Заказы:** такси с пассажирами и доставка грузов между домами, городом и селом; зелёные светящиеся круги, NPC, таймер и награда.
- **Миникарта и общая карта**, день и ночь, светящиеся окна и неон.
- **Мобильное управление:** сенсорные кнопки, настройка HUD (перетаскивание, масштаб, скрытие).
- **Настройки:** громкость, размер пикселя (стиль), тени, камеры (свободная и авто).

## 🎮 Управление

| Действие | ПК | Телефон |
|---|---|---|
| Газ / тормоз | W / S или ↑ / ↓ | правые педали |
| Руль | A / D или ← / → | «<» и «>» |
| Ручник | Пробел | значок рычага |
| Камера | C, ПКМ + мышь, колесо | значок камеры |
| Сброс скорости | R | — |

Полное руководство: **[MANUAL.md](MANUAL.md)**.

## 🛠️ Технологии

- JavaScript (без движков), HTML5, CSS
- [three.js](https://threejs.org) r128 (WebGL)
- Canvas 2D (карты), Web Audio API (звук), localStorage (сохранения)
- [Capacitor](https://capacitorjs.com) (Android), [Electron](https://www.electronjs.org) (Windows)

## 🚀 Запуск

**В браузере:** открой `docs/index.html` или [ссылку выше](https://scorlenty.github.io/DriftValley/).

### Сборка для Windows (exe)
```bash
npm install
npm run build:win    # результат в папке dist/
npm start            # запуск в окне Electron
```

### Сборка для Android (APK)
```bash
npm install
npm run android:add
npm run android:sync
npm run android:open   # откроется Android Studio
```
В Android Studio: **Build → Generate App Bundles or APKs → Generate APKs**.
Перед сборкой в `AndroidManifest.xml` в теге `<activity>` добавь `android:screenOrientation="sensorLandscape"` (горизонтальный режим).
Папку проекта держи по пути без русских букв и пробелов, например `C:\Games\DriftValley`.

Требования: Node.js 18+, Android Studio (JDK 17 входит в комплект).

## 📁 Структура

```
docs/      игра для GitHub Pages
www/       игра для сборки (exe и APK)
electron/  оболочка для Windows
android/   проект Android (Capacitor)
MANUAL.md  полное руководство игрока
```

## 📄 Лицензия

MIT. three.js — MIT.
