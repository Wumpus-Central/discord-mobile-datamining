// === Module 6637: FormArrow ===

// Module 6637 (FormArrow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import _modDef6638 from "module_6638" /* 6638 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ label, style } = arg0);
  let wrapper = closure_6();
  if (null != label) {
    if (cResult[0] !== label) {
      const obj2 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
      const tmp10 = React4(Text_Text.Text, obj2);
      cResult[0] = label;
      cResult[1] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === style) {
      if (cResult[3] === wrapper.icon) {
        let tmp11 = cResult[4];
      }
      if (cResult[5] === wrapper.wrapper) {
        if (cResult[6] === tmp8) {
        }
      }
      const obj3 = { style: wrapper.wrapper, children: null };
      const items = [tmp8, tmp11];
      obj3.children = items;
      const tmp18 = hasOwnProperty(View, obj3);
      wrapper = wrapper.wrapper;
      cResult[5] = wrapper;
      cResult[6] = tmp8;
      cResult[7] = tmp11;
      cResult[8] = tmp18;
    }
    const obj4 = { style: null, source: null, size: null };
    const items1 = [wrapper.icon, style];
    obj4.style = items1;
    obj4.source = _modDef6638;
    obj4.size = native.Icon.Sizes.MEDIUM;
    const tmp14 = React4(native.Icon, obj4);
    cResult[2] = style;
    cResult[3] = wrapper.icon;
    cResult[4] = tmp14;
    tmp11 = tmp14;
  } else {
    if (cResult[9] === style) {
      if (cResult[10] === wrapper.icon) {
        let tmp4 = cResult[11];
      }
      return tmp4;
    }
    const obj5 = { style: null, source: null, size: null };
    const items2 = [wrapper.icon, style];
    obj5.style = items2;
    obj5.source = _modDef6638;
    obj5.size = native.Icon.Sizes.MEDIUM;
    const tmp7 = React4(native.Icon, obj5);
    cResult[9] = style;
    cResult[10] = wrapper.icon;
    cResult[11] = tmp7;
    tmp4 = tmp7;
  }
}) : ((arg0) => {
  ({ label, style } = arg0);
  const tmp = closure_6();
  if (null != label) {
    const obj2 = { style: tmp.wrapper, children: null };
    const obj3 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    const items = [React4(Text_Text.Text, obj3), ];
    const obj4 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj4.style = items1;
    obj4.source = _modDef6638;
    obj4.size = native.Icon.Sizes.MEDIUM;
    items[1] = React4(native.Icon, obj4);
    obj2.children = items;
    let tmp6 = hasOwnProperty(View, obj2);
  } else {
    const obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = _modDef6638;
    obj.size = native.Icon.Sizes.MEDIUM;
    tmp6 = React4(native.Icon, obj);
  }
  return tmp6;
});