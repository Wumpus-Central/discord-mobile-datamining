// === Module 15535: CheckpointText ===

// Module 15535 (CheckpointText)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_2 = ["children", "style"];
const jsx = fn(21).jsx;
let closure_5 = { color: fn(5115).CHECKPOINT_PRIMARY };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  if (cResult[0] !== arg0) {
    ({ children, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp9;
    cResult[3] = style;
    let tmp6 = style;
    let tmp5 = tmp9;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const items = [closure_5, tmp6];
    cResult[4] = tmp6;
    cResult[5] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp10) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const obj2 = {};
  const merged = Object.assign(tmp5);
  obj2.style = tmp10;
  obj2.children = tmp4;
  const tmp14 = jsx(Text_Text.Text, {});
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp10;
  cResult[9] = tmp14;
  tmp12 = tmp14;
}) : ((arg0) => {
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_5, style];
  obj.style = items;
  obj.children = children;
  return jsx(Text_Text.Text, {});
});