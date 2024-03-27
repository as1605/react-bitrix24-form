# React Component to Integrate Bitrix24 CRM Forms
You can use this component to easily integrate Bitrix24 CRM Forms into ReactJS or NextJS projects. TypeScript is also supported.
# Usage
## Setting Up Bitrix24
- Login to [Bitrix24](https://www.bitrix24.net/)
- Create a [CRM Form](https://helpdesk.bitrix24.com/open/17748218/)
- Get the **Embed Code** similar to this
```html
<script data-b24-form="inline/55/e23xlv" data-skip-moving="true">
(function(w,d,u){
var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
}(window,document, 'https://cdn.bitrix24.com/b16700425/crm/form/loader_55.js'));
</script>
```
- Note down the `src` as the URI given (`'https://cdn.bitrix24.com/b16700425/crm/form/loader_55.js'` in this example), and `data` as the first attribute (`"inline/55/e23xlv"` in this example)
## Installing `react-bitrix24-form`
- Install `react-bitrix24-form`
```shell
yarn add react-bitrix24-form
```
```shell
npm i react-bitrix24-form
```
- Import `Bitrix24Form`
```typescript
import { Bitrix24Form } from 'react-bitrix24-form';
```
- Add `Bitrix24Form` component inside your React component
```typescript
<Bitrix24Form src='https://cdn.bitrix24.com/b16700425/crm/form/loader_55.js' data="inline/55/e23xlv" />
```
- Run your React codebase. 
