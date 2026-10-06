// === Module 13931: ThemedIcon ===

// Module 13931 (ThemedIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useToken from "useToken" /* 4586 */;
import IconDefault from "Icon" /* 5603 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let themedColor;

let closure_3 = ["themedColor"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((themedColor) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== themedColor) {
    themedColor = themedColor.themedColor;
    const tmp8 = _objectWithoutProperties(themedColor, closure_3);
    cResult[0] = themedColor;
    cResult[1] = tmp8;
    cResult[2] = themedColor;
    tmp5 = themedColor;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(tmp5);
  if (cResult[3] === tmp4) {
    let tmp10;
    if (cResult[4] === token) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  IconDefault;
  const merged = Object.assign(tmp4);
  const tmp13 = <tmp11 color={token} />;
  cResult[3] = tmp4;
  cResult[4] = token;
  cResult[5] = tmp13;
  tmp10 = tmp13;
}) : ((themedColor) => {
  themedColor = themedColor.themedColor;
  const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
  const obj = useToken;
  const token = obj.useToken(themedColor);
  IconDefault;
  const merged1 = Object.assign(merged);
  return <tmp3 color={token} />;
});
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default tmp3;