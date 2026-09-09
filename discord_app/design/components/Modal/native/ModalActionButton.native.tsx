// === Module 11028: ModalActionButton ===

// Module 11028 (ModalActionButton)
import components_Button_Button from "components/Button/Button" /* 4989 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let closure_6 = createStyles.createStyles({ spacer: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  variant = variant.variant;
  const merged = Object.assign(variant, Object.assign({ variant: 0 }));
  let tmp5 = "secondary" === variant;
  if (tmp5) {
    let obj = { style: tmp2.spacer };
    tmp5 = React3(View, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = variant;
  obj.size = "lg";
  items[1] = React3(components_Button_Button.Button, obj);
  obj.children = items;
  return hasOwnProperty(React4, obj);
};