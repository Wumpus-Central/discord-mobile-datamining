// === Module 10729: ModalActionButton ===

// Module 10729 (ModalActionButton)
import c from "c" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["variant"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ spacer: { marginTop: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = ReactCompilerGating.isReactCompilerEnabled() ? ((variant) => {
  const cResult = c.c(12);
  if (cResult[0] !== variant) {
    variant = variant.variant;
    const tmp8 = _objectWithoutProperties(variant, closure_2);
    cResult[0] = variant;
    cResult[1] = tmp8;
    cResult[2] = variant;
    let tmp5 = variant;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_8();
  if (cResult[3] === tmp9) {
    if (cResult[4] === tmp5) {
      let tmp10 = cResult[5];
    }
    if (cResult[6] === tmp4) {
      if (cResult[7] === tmp5) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] === tmp10) {
        if (cResult[10] === tmp14) {
          let tmp20 = cResult[11];
        }
        return tmp20;
      }
      const obj2 = { children: null };
      const items = [tmp10, tmp14];
      obj2.children = items;
      const tmp23 = React5(timestampProducer, obj2);
      cResult[9] = tmp10;
      cResult[10] = tmp14;
      cResult[11] = tmp23;
      tmp20 = tmp23;
    }
    const obj3 = {};
    const merged = Object.assign(tmp4);
    obj3.variant = tmp5;
    obj3.size = "lg";
    const tmp19 = hasOwnProperty(components_Button_Button.Button, obj3);
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = tmp19;
    tmp14 = tmp19;
  }
  let tmp11 = "secondary" === tmp5;
  if (tmp11) {
    const obj4 = { style: tmp9.spacer };
    tmp11 = hasOwnProperty(View, obj4);
  }
  cResult[3] = tmp9;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((variant) => {
  variant = variant.variant;
  const merged = Object.assign(variant, Object.assign({ variant: 0 }));
  let tmp5 = "secondary" === variant;
  if (tmp5) {
    const obj = { style: tmp2.spacer };
    tmp5 = hasOwnProperty(View, obj);
  }
  const obj2 = { children: null };
  const items = [tmp5, ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.variant = variant;
  obj3.size = "lg";
  items[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  obj2.children = items;
  return React5(timestampProducer, obj2);
});