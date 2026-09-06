// === Module 16518: ICYMIHeader ===

// Module 16518 (ICYMIHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { text: null, separator: null };
  obj = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  obj.text = obj;
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
  obj.separator = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.separator };
  const items = [React4(View, obj), ];
  obj = { style: tmp.text, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["jnXV/V"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
};