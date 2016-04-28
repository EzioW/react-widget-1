/**
 * Radiogroup demo
 */
import babelPolyfill from "babel-polyfill";  // enable es6 to es5 transform
import React from "react";
import ReactDom from "react-dom";
import Radiogroup from "../../src/component/form/Radiogroup.js";

let options = [
  {checked: true, disabled: false, text: 'Radiogroup class', value: Radiogroup },
  {checked: false, disabled: false, text: 'window', value: window },
  {checked: false, disabled: true, text: 'document', value: document },
  {checked: true, disabled: false, text: 'navigator.userAgent', value: navigator.userAgent },
  {checked: false, disabled: false, text: 'navigator.languages', value: navigator.languages },
];
const example1 = {
  allOptions: options,
};
function runner () {
  ReactDom.render(<div>
    <style dangerouslySetInnerHTML={ {__html: `
      .radiogroup-instance .ui-form-radiogroup-option:before {
        content: " - ";
      }
      .radiogroup-instance .ui-form-radiogroup-option.ui-common_selected:before {
        content: " + ";
      }
      .radiogroup-instance .ui-form-radiogroup-option.ui-common_selected:after {
        content: "(checked)";
      }
      .radiogroup-instance .ui-form-radiogroup-option.ui-common_disabled {
        opacity: .5;
      }
      .radiogroup-instance .ui-form-radiogroup-option.ui-common_disabled:after {
        content: "(disabled)";
      }
    `} } />
    <div style={{display: 'inline-block'}}>
      Typical use:<br/>
      <div>
        <Radiogroup className="radiogroup-instance radiogroup-typical"
                    options={ example1.allOptions }
                    onOptionsChange={ (evt) => {
                      const { options } = evt;
                      example1.allOptions = options;
                      runner();
                    } } />
      </div>
      &nbsp;<br/>
    </div>
    <div>
      Selected option:<br/>
      { example1.allOptions.filter(i => i.checked).map(i => ` [${i.text}] `) }
    </div>
  </div>, document.getElementById("container"));
}
runner();
