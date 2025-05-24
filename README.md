# 📝 RKAEditor

**RKAEditor** is a lightweight, modular, and easy-to-integrate **rich text editor** for the web. Designed with simplicity, performance, and flexibility in mind, it offers essential text formatting features out of the box and can be extended for more advanced use cases.
![Screenshot_51122](https://github.com/user-attachments/assets/719cff96-a4e8-4fe8-9ed5-0ec85c47b9ec)

---

## 🚀 Features

- 🖋️ **Rich text formatting** – Bold, Italic, Underline, and more  
- 🔁 **Undo / Redo** – Simple history controls for better editing  
- 🧰 **Clean UI Toolbar** – Intuitive and minimal interface  
- 🧱 **Modular architecture** – Add or remove features as needed  
- ⚙️ **Framework-friendly** – Easy to integrate with Angular, React, Vue, etc.  
- 🌐 **Cross-browser support** – Works smoothly on all modern browsers  
- 🖼️ **Theme ready** – Style it to match your design

---

## 📦 Installation /Angular Usage

```bash
npm install rkaeditor


## 📦 Angular Usage

If you're using RKAEditor as an Angular library, you can easily integrate it in your components with the following syntax:

<lib-ngx-rkaeditor [content]="'Your initial text goes here'"></lib-ngx-rkaeditor>

Example:
import { NgxRkaeditorModule } from 'lib-ngx-rkaeditor';

@NgModule({
  declarations: [...],
  imports: [
    ...,
    NgxRkaeditorModule
  ],
  bootstrap: [...]
})
export class AppModule { }

🧱 Required Angular Configuration

To ensure proper styling and functionality of the RKAEditor, you must include Bootstrap, FontAwesome, and jQuery in your Angular project configuration.
Step 1: Install dependencies

Make sure these packages are installed via npm:

npm install bootstrap jquery @fortawesome/fontawesome-free

Step 2: Update angular.json

In the angular.json file, include the following lines under the styles and scripts arrays:

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

This ensures Bootstrap and FontAwesome are properly loaded, along with jQuery which may be used internally for DOM operations or enhancements.

Usage component
<lib-ngx-rkaeditor [content]="'Hello, world!'"></lib-ngx-rkaeditor>
