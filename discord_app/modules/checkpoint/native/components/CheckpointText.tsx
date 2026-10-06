// === Module 15555: CheckpointText ===

// Module 15555 (CheckpointText)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import CheckpointConstants from "CheckpointConstants" /* 5121 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["children", "style"];
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_5 = { color: CHECKPOINT_PRIMARY };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    ({ children, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp9;
    cResult[3] = style;
    tmp6 = style;
    tmp5 = tmp9;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const items = [closure_5, tmp6];
    cResult[4] = tmp6;
    cResult[5] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      let tmp12;
      if (cResult[8] === tmp10) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const Text = Text_Text.Text;
  const merged = Object.assign(tmp5);
  const tmp14 = <Text style={tmp10}>{tmp4}</Text>;
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp10;
  cResult[9] = tmp14;
  tmp12 = tmp14;
}) : ((arg0) => {
  let children;
  let style;
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0 }));
  const Text = Text_Text.Text;
  const merged1 = Object.assign(merged);
  const items = [closure_5, style];
  return <Text style={items}>{children}</Text>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default tmp2;