import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
  SimpleChanges,
} from '@angular/core';
import { Editor } from '@tiptap/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import Highlight from '@tiptap/extension-highlight';
import Document from '@tiptap/extension-document';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import { HardBreak } from '@tiptap/extension-hard-break';
import { NgxTiptapModule } from 'ngx-tiptap';
import { FormsModule } from '@angular/forms';
import Color from '@tiptap/extension-color';
import Paragraph from '@tiptap/extension-paragraph';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import History from '@tiptap/extension-history';

@Component({
  selector: 'lib-ngx-rkaeditor',
  standalone: true,
  imports: [CommonModule, NgxTiptapModule, FormsModule],
  templateUrl: './ngx-rkaeditor.component.html',
  styleUrl: './ngx-rkaeditor.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ngxRkaeditorComponent),
      multi: true,
    },
  ],
})
export class ngxRkaeditorComponent implements OnInit {
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
  private disabled: boolean = false;

  @Input() content: string = '';
  textoInicial: string = '';
  @Output() contentChange = new EventEmitter<string>();

  showFontColorPicker: boolean = false; // Para setColor (color de fuente)
  showHighlightColorPicker: boolean = false; // Para toggleHighlight (resaltado)
  selectedFontColor: string | null = null; // Color predeterminado para fuente
  selectedHighlightColor: string | null = null; // Color predeterminado para resaltado

  colors = [
    { value: '#000000' }, // Black
    { value: '#424242' }, // Tundora
    { value: '#636363' }, // Dove Gray
    { value: '#9C9C94' }, // Star Dust
    { value: '#CEC6CE' }, // Pale Slate
    { value: '#EFEFEF' }, // Gallery
    { value: '#F7F7F7' }, // Alabaster
    { value: '#FFFFFF' }, // White
    { value: '#FF0000' }, // Red
    { value: '#FF9C00' }, // Orange Peel
    { value: '#FFFF00' }, // Yellow
    { value: '#00FF00' }, // Green
    { value: '#00FFFF' }, // Cyan
    { value: '#0000FF' }, // Blue
    { value: '#9C00FF' }, // Electric Violet
    { value: '#FF00FF' }, // Magenta
    { value: '#F7C6CE' }, // Azalea
    { value: '#FFE7CE' }, // Karry
    { value: '#FFEFC6' }, // Egg White
    { value: '#D6EFD6' }, // Zanah
    { value: '#CEDEE7' }, // Botticelli
    { value: '#CEE7F7' }, // Tropical Blue
    { value: '#D6D6E7' }, // Mischka
    { value: '#E7D6DE' }, // Twilight
    { value: '#E79C9C' }, // Tonys Pink
    { value: '#FFC69C' }, // Peach Orange
    { value: '#FFE79C' }, // Cream Brulee
    { value: '#B5D6A5' }, // Sprout
    { value: '#A5C6CE' }, // Casper
    { value: '#9CC6EF' }, // Perano
    { value: '#B5A5D6' }, // Cold Purple
    { value: '#D6A5BD' }, // Careys Pink
    { value: '#E76363' }, // Mandy
    { value: '#F7AD6B' }, // Rajah
    { value: '#FFD663' }, // Dandelion
    { value: '#94BD7B' }, // Olivine
    { value: '#73A5AD' }, // Gulf Stream
    { value: '#6BADDE' }, // Viking
    { value: '#8C7BC6' }, // Blue Marguerite
    { value: '#C67BA5' }, // Puce
    { value: '#CE0000' }, // Guardsman Red
    { value: '#E79439' }, // Fire Bush
    { value: '#EFC631' }, // Golden Dream
    { value: '#6BA54A' }, // Chelsea Cucumber
    { value: '#4A7B8C' }, // Smalt Blue
    { value: '#3984C6' }, // Boston Blue
    { value: '#634AA5' }, // Butterfly Bush
    { value: '#A54A7B' }, // Cadillac
    { value: '#9C0000' }, // Sangria
    { value: '#B56308' }, // Mai Tai
    { value: '#BD9400' }, // Buddha Gold
    { value: '#397B21' }, // Forest Green
    { value: '#104A5A' }, // Eden
    { value: '#085294' }, // Venice Blue
    { value: '#311873' }, // Meteorite
    { value: '#731842' }, // Claret
    { value: '#630000' }, // Rosewood
    { value: '#7B3900' }, // Cinnamon
    { value: '#846300' }, // Olive
    { value: '#295218' }, // Parsley
    { value: '#083139' }, // Tiber
    { value: '#003163' }, // Midnight Blue
    { value: '#21104A' }, // Valentino
    { value: '#4A1031' }, // Loulou
  ];
  showMoreColors: boolean = false;
  editor = new Editor({
    extensions: [
      Placeholder,
      Document,
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
      Paragraph,
      Text,
      HorizontalRule,
      HardBreak,
      Bold,
      Italic,
      History,
    ],
    content: this.content,
    parseOptions: {
      preserveWhitespace: true,
    },
  });

  ngOnInit(): void {
    this.initializeEditor();
    this.editor.on('update', ({ editor }): void => {
      let newValue = editor.getHTML();
      this.content = newValue;
      this.textoInicial =
        this.textoInicial == '' ? this.content : this.textoInicial;
      this.contentChange.emit(newValue);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.editor.commands.setContent(this.content, true, {
        preserveWhitespace: true,
      });
    }
  }

  public initializeEditor() {
    this.editor.on('update', ({ editor }) => {
      let newValue = editor.getHTML();
      this.content = newValue;

      this.contentChange.emit(newValue);
      this.onChange(newValue); // Notifica cambios a ngModel
    });
  }

  toggleHighlightColorPicker() {
    this.showHighlightColorPicker = !this.showHighlightColorPicker;
    this.showFontColorPicker = false; // Cerrar la paleta de fuente si está abierta
  }

  toggleHighlight(color: string | null = null) {
    if (!this.editor) return;
    this.selectedHighlightColor = color || null;
    this.showHighlightColorPicker = false; // Ocultar paleta después de seleccionar
  }

  toggleHighlightSetColor(color: string | null = null) {
    if (!this.editor) return;
    this.editor
      .chain()
      .focus()
      .toggleHighlight(color ? { color } : undefined)
      .run();
  }
  unsetHighlight() {
    if (!this.editor) return;
    this.editor.chain().focus().unsetHighlight().run();
  }

  isHighlightActive(color: string | null = null): boolean {
    if (!this.editor) return false;
    return this.editor.isActive('highlight', color ? { color } : undefined);
  }

  // // Métodos de ControlValueAccessor
  // writeValue(value: string): void {
  //   this.content = value || '';
  // }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.editor) {
      this.editor.setEditable(!isDisabled);
    }
  }

  toggleFontColorPicker() {
    this.showFontColorPicker = !this.showFontColorPicker;
    this.showHighlightColorPicker = false; // Cerrar la paleta de resaltado si está abierta
  }

  toggleBold() {
    if (!this.editor) return;
    this.editor.chain().focus().toggleBold().run();
  }

  toggleItalic() {
    if (!this.editor) return;
    this.editor.chain().focus().toggleItalic().run();
  }

  unsetAllFormats() {
    if (!this.editor) return;
    this.editor.chain().focus().unsetAllMarks().run();
  }

  isBoldActive(): boolean {
    if (!this.editor) return false;
    return this.editor.isActive('bold');
  }

  isItalicActive(): boolean {
    if (!this.editor) return false;
    return this.editor.isActive('italic');
  }

  setFontColor(color: string) {
    if (!this.editor) return;
    this.selectedFontColor = color;
  }

  setCustomColor(event: Event) {
    const input = event.target as HTMLInputElement;
    const color = input.value;
    this.setFontColor(color);
  }

  SetColor(color: string) {
    if (!this.editor) return;
    this.editor.chain().focus().setColor(color).run();
  }

  getColorName(color: string): string {
    const colorMap: { [key: string]: string } = {
      '#000000': 'Negro',
      '#ff0000': 'Rojo',
      '#ffff00': 'Amarillo',
      '#00ff00': 'Verde',
      '#0000ff': 'Azul',
      '#800080': 'Púrpura',
      '#cccccc': 'Gris Claro',
      '#ff9999': 'Rojo Claro',
      '#ffff99': 'Amarillo Claro',
      '#99ff99': 'Verde Claro',
      '#99ccff': 'Azul Claro',
      '#cc99ff': 'Púrpura Claro',
      '#333333': 'Gris Oscuro',
      '#990000': 'Rojo Oscuro',
      '#999900': 'Amarillo Oscuro',
      '#006600': 'Verde Oscuro',
      '#000099': 'Azul Oscuro',
      '#4b0082': 'Púrpura Oscuro',
      red: 'Rojo (nombre)',
      '#ffa8a8': 'Rojo Claro (hex)',
    };
    return colorMap[color] || 'Color Personalizado';
  }

  getColorIcon(color: string): string {
    return `<i class="fa-solid fa-font" style="background-color: ${color}; color: ${this.getContrastColor(
      color
    )};"></i>`;
  }

  getContrastColor(hexcolor: string): string {
    // Convertir hex a RGB
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    // Calcular luminancia para determinar si usar blanco o negro
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 128 ? '#000000' : '#FFFFFF';
  }

  //funcion undo
  toggleUndo() {
    if (!this.editor || this.textoInicial == this.editor.getHTML()) return;
    this.editor.chain().focus().undo().run();
  }

  toggleRedo() {
    if (!this.editor) return;
    this.editor.chain().focus().redo().run();
  }
}
