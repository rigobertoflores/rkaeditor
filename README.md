# 📝 RKAEditor

**RKAEditor** is a lightweight, modular, and easy-to-integrate **rich text editor** for the web. Designed with simplicity, performance, and flexibility in mind, it offers essential text formatting features out of the box and can be extended for more advanced use cases.
![image](https://github.com/user-attachments/assets/f2c3abde-4672-460a-81bc-8b52b47e4bfb)

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

---
## 📦 Angular Usage

If you're using RKAEditor as an Angular library, you can easily integrate it in your components with the following syntax:

<lib-ngx-rkaeditor [content]="'Your initial text goes here'"></lib-ngx-rkaeditor>

---
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

<lib-ngx-rkaeditor [content]="'Hello, world!'"></lib-ngx-rkaeditor>
