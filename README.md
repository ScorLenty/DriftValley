# Drift Valley v1.0
3D-дрифт, такси и доставка в открытом мире. Мегаполис, река с мостами, село, трассы Ле-Ман и Тогэ. Vanilla JS + three.js.

▶ **Играть:** (ссылка на GitHub Pages) · 📖 [Руководство](MANUAL.md)

## Запуск
Открой `www/index.html` или залей на GitHub Pages.

## Windows (exe)
```
npm install
npm run build:win     # результат в папке dist/
npm start             # просто запустить в окне Electron
```
Нужен Node.js 18+. Получишь `Drift Valley.exe` (portable) и установщик.

## Android (APK)
```
npm install
npm run android:add
npm run android:sync
npm run android:open  # откроется Android Studio
```
В Android Studio: Build → Build Bundle(s)/APK(s) → Build APK(s).
Перед сборкой: в `android/app/src/main/AndroidManifest.xml` в теге `<activity>` добавь
`android:screenOrientation="sensorLandscape"` — это горизонтальный режим.
После любых правок в `www/` повторяй `npm run android:sync`.

Нужны: Node.js 18+, Android Studio, JDK 17.

## Лицензия
MIT. three.js — MIT.
