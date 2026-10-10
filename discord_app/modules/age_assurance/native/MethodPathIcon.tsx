// === Module 7575: MethodPathIcon ===

// Module 7575 (MethodPathIcon)
import nativeDefault from "native" /* 587 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
obj2.container = size;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MethodPathIcon(icon) {
  const cResult = token(576).c(10);
  let paths = icon.icon;
  const tmp3 = closure_5();
  const obj = token(576);
  token = token(4818).useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  if (cResult[0] === paths.paths) {
    if (cResult[1] === token) {
      if (cResult[5] !== cResult[2]) {
        const size = { width: 24, height: 24, viewBox: "0 0 24 24", children: tmp7 };
        const tmp12 = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: tmp7 });
        cResult[5] = tmp7;
        cResult[6] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp3.container) {
        if (cResult[8] === tmp10) {
          let tmp13 = cResult[9];
        }
        return tmp13;
      }
      const obj3 = { style: tmp6, children: tmp10 };
      const tmp16 = <View style={tmp6}>{tmp10}</View>;
      cResult[7] = tmp3.container;
      cResult[8] = tmp10;
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
  }
  if (cResult[3] !== token) {
    const fn = function h(d) {
      return jsx(inlineStyles.Path, { d: d.d, fill: token, fillRule: d.fillRule }, d.d);
    };
    cResult[3] = token;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const paths1 = paths.paths;
  const mapped = paths1.map(tmp8);
  paths = paths.paths;
  cResult[0] = paths;
  cResult[1] = token;
  cResult[2] = mapped;
  const obj2 = token(4818);
}) : (function MethodPathIcon(icon) {
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
});