// === Module 7337: FormArrow ===

// Module 7337 (FormArrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4718 */;
import _modDef7338 from "module_7338" /* 7338 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  ({ label, style } = arg0);
  const tmp = closure_6();
  if (null != label) {
    const obj2 = { style: tmp.wrapper, children: null };
    const obj3 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    const items = [React4(Text_Text.Text, obj3), ];
    const obj4 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj4.style = items1;
    obj4.source = _modDef7338;
    obj4.size = native.Icon.Sizes.MEDIUM;
    items[1] = React4(native.Icon, obj4);
    obj2.children = items;
    let tmp6 = hasOwnProperty(View, obj2);
  } else {
    const obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = _modDef7338;
    obj.size = native.Icon.Sizes.MEDIUM;
    tmp6 = React4(native.Icon, obj);
  }
  return tmp6;
};