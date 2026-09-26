// === Module 7908: MethodPathIcon ===

// Module 7908 (MethodPathIcon)
import nativeDefault from "native" /* 576 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { container: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = size;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  _require = undefined;
  const tmp = closure_5();
  _require = require("useToken").useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  const obj2 = { style: tmp.container, children: null };
  const size = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const obj = require("useToken");
  size.children = paths.map((d) => jsx(inlineStyles.Path, { d: d.d, fill, fillRule: d.fillRule }, d.d));
  obj2.children = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View style={tmp.container}>{null}</View>;
};