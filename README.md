# responsive-data-tables

CSS and JS for quickly doing responsive data tables

## How to use

Write some markup like this:

```html
<table>
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content</td>
      <td>This is longer content</td>
      <td>Content</td>
      <td>Content</td>
    </tr>
    <tr>
      <td>Content</td>
      <td>This is longer content</td>
      <td>Content</td>
      <td>Content</td>
    </tr>
    <tr>
      <td>Content</td>
      <td>This is longer content</td>
      <td>Content</td>
      <td>Content</td>
    </tr>
    <tr>
      <td>Content</td>
      <td>This is longer content</td>
      <td>Content</td>
      <td>Content</td>
    </tr>
  </tbody>
</table>
```

If the table doesn't contain a thead element then the javascript will construct one from the first tr in tbody.

Then just include the CSS and JS on the page and call the jQuery plugin:


```javascript
$('table.responsive').responsiveTables();
```
