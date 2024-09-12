import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public Editor = ClassicEditor;
  text = `
  <font face="Arial" size="4">I am <i>dhiraj</i></font><div><font face="Arial" size="4">I am fine&nbsp;</font><b style="font-family: Arial; font-size: large; text-align: justify;">I am learning angular&nbsp;</b><b style="font-family: Arial; font-size: large; text-align: justify;">I am learning angular&nbsp;</b><b style="font-family: Arial; font-size: large; text-align: justify;">I am learning angular&nbsp;</b></div><h1 class="titleText"></h1><span class="quote"></span><h1 class="titleText"></h1><span class="quote"></span><h1 class="titleText"></h1><span class="quote"></span><div><font face="Arial" size="4">&nbsp;</font><b style="font-family: Arial; font-size: large; text-align: justify;">I am learning angular&nbsp;</b></div><h1 class="titleText"></h1><span class="quote"></span><div style="text-align: justify;"><font face="Arial" size="4"><b>I am learning angular&nbsp;</b></font></div><h1 class="titleText"></h1><span class="quote"></span><div><font face="Arial" size="4"><b><br></b></font></div><div><font face="Arial" size="4"><b>I am df udhfu dihfuds fudi <span style="background-color: rgb(121, 93, 79);">iudfhuidh</span> dsiuhduih i h</b></font></div><div><font face="Arial" size="4"><b>du i</b></font></div><div><font face="Arial" size="4"><b><br></b></font></div><div><font face="Arial" size="4"><b><br></b></font></div><div><font face="Arial" size="4"><b>duh dh iuh i</b></font></div><div><font face="Arial" size="4"><b>dh i</b></font></div><div><font face="Arial" size="4"><b><br></b></font></div><div><font face="Arial" size="4"><b><br></b></font></div><div><font face="Arial" size="4"><b style="background-color: rgb(0, 84, 147);">uh iughfuigh hv hgjhgf dhfdjh dfhdsj</b></font></div>
  `;
}
