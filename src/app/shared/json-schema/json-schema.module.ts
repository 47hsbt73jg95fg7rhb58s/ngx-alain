import { NgModule } from '@angular/core';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { SharedModule } from '../shared.module';

// import { TinymceWidget } from './widgets-third/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets-third/ueditor/ueditor.widget';
// import { MarkdownWidget } from './widgets-third/markdown/markdown.widget';
import { CkeditorWidget } from './widgets-third/ckeditor/ckeditor.widget';

import { TextsWidget } from './widgets/texts/texts.widget';
import { TextFileWidget } from './widgets/textFile/textFile.widget';
import { UploadAvatarWidget } from './widgets/uploadAvatar/uploadAvatar.widget';

export const SCHEMA_THIRDS_COMPONENTS = [
  // TinymceWidget,
  // UeditorWidget,
  // MarkdownWidget,
  CkeditorWidget,

  TextsWidget,
  TextFileWidget,
  UploadAvatarWidget,

];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, DelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    // widgetRegistry.register(MarkdownWidget.KEY, UeditorWidget);
    widgetRegistry.register(CkeditorWidget.KEY, CkeditorWidget);

    widgetRegistry.register(TextsWidget.KEY, TextsWidget);
    widgetRegistry.register(TextFileWidget.KEY, TextFileWidget);
    widgetRegistry.register(UploadAvatarWidget.KEY, UploadAvatarWidget);
  }
}
