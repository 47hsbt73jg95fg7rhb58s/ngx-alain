export const tplModalEditHTML =
  `
<div class='modal-header'>
    <div class='modal-title'>{{  modalTitle }}</div>
</div>

<div class="sf-view">
<sf #sf 
    [schema]='mainSchema' 
    [ui]='mainSchemaUi' 
    [formData]='formData' 
    (formSubmit)='onSubmit(sf)' 
    [button]="'none'"></sf>
</div>

<div class='modal-footer'>
    <button nz-button nzType="primary" (click)='sf.submit()' [nzLoading]="httpSrv.loading" [disabled]='!sf.valid'>保存</button>
    <button nz-button nzType="danger" (click)='sf.reset()'>重置</button>
    <button nz-button nzType="default" (click)='modalClose()'>关闭</button>
</div>

`;

