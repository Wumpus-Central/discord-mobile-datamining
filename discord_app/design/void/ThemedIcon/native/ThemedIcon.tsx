// === Module 14234: ThemedIcon ===

// Module 14234 (ThemedIcon)
import c from "c" /* 576 */;
import useToken from "useToken" /* 4778 */;
import IconDefault from "Icon" /* 5377 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["themedColor"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedIcon(themedColor) {
  const cResult = c.c(6);
  if (cResult[0] !== themedColor) {
    themedColor = themedColor.themedColor;
    const tmp8 = _objectWithoutProperties(themedColor, closure_3);
    cResult[0] = themedColor;
    cResult[1] = tmp8;
    cResult[2] = themedColor;
    let tmp5 = themedColor;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const token = useToken.useToken(tmp5);
  if (cResult[3] === tmp4) {
    if (cResult[4] === token) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const obj2 = { color: token };
  const tmpResult = useToken;
  const merged = Object.assign(tmp4);
  const tmp13 = jsx(IconDefault, { color: token });
  cResult[3] = tmp4;
  cResult[4] = token;
  cResult[5] = tmp13;
  tmp10 = tmp13;
}) : (function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
  const token = useToken.useToken(themedColor.themedColor);
  const obj2 = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconDefault, { color: token });
});