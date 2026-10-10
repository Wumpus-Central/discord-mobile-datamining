// === Module 10243: ActivityStatusText ===

// Module 10243 (ActivityStatusText)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children", "style", "variant"];
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ text: { flexShrink: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityStatusText(arg0) {
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    ({ children, style, variant } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = style;
    cResult[4] = variant;
    let tmp7 = variant;
    let tmp6 = style;
    let tmp5 = tmp10;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let str = "text-xs/medium";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  const tmp11 = closure_5();
  if (cResult[5] === tmp6) {
    if (cResult[6] === tmp11.text) {
      let tmp12 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp12) {
          if (cResult[11] === str) {
            let tmp13 = cResult[12];
          }
          return tmp13;
        }
      }
    }
    const obj2 = { variant: str, color: "text-muted", style: tmp12, lineClamp: 1 };
    const merged = Object.assign(tmp5);
    obj2.children = tmp4;
    const tmp18 = jsx(Text_Text.Text, { variant: str, color: "text-muted", style: tmp12, lineClamp: 1 });
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = tmp12;
    cResult[11] = str;
    cResult[12] = tmp18;
    tmp13 = tmp18;
  }
  const items = [tmp11.text, tmp6];
  cResult[5] = tmp6;
  cResult[6] = tmp11.text;
  cResult[7] = items;
  tmp12 = items;
}) : (function ActivityStatusText(variant) {
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const merged = Object.assign(variant, Object.assign({ children: 0, style: 0, variant: 0 }));
  const obj = { variant: str, color: "text-muted", style: null, lineClamp: 1 };
  const items = [closure_5().text, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(Text_Text.Text, { variant: str, color: "text-muted", style: null, lineClamp: 1 });
});