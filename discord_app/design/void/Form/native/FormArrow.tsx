// === Module 7141: FormArrow ===

// Module 7141 (FormArrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef7142 from "module_7142" /* 7142 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: null };
createStyles = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
createStyles.icon = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  ({ label, style } = arg0);
  const tmp = closure_6();
  if (null != label) {
    let obj = { style: tmp.wrapper, children: null };
    obj = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    const items = [React4(Text_Text.Text, obj), ];
    const obj1 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj1.style = items1;
    obj1.source = _modDef7142;
    obj1.size = native.Icon.Sizes.MEDIUM;
    items[1] = React4(native.Icon, obj1);
    obj.children = items;
    let tmp6 = hasOwnProperty(View, obj);
  } else {
    obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = _modDef7142;
    obj.size = native.Icon.Sizes.MEDIUM;
    tmp6 = React4(native.Icon, obj);
  }
  return tmp6;
};