// === Module 15543: CheckpointStatsScreen ===

// Module 15543 (CheckpointStatsScreen)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 15539 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15541 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let name;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, name: { textTransform: "uppercase" } };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  let first;
  let items;
  let obj3;
  const obj = react;
  const cResult = obj.c(7);
  name = name.name;
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === name) {
    let tmp8;
    if (cResult[2] === tmp3.name) {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp3.container) {
      let tmp10;
      if (cResult[5] === tmp8) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
    const obj2 = { children: hasOwnProperty(View, obj3) };
    obj3 = { style: tmp3.container, children: items };
    items = [first, tmp8];
    const tmp13 = CheckpointScreenDefault;
    const tmp16 = React3(tmp13, obj2);
    cResult[4] = tmp3.container;
    cResult[5] = tmp8;
    cResult[6] = tmp16;
    tmp10 = tmp16;
  }
  const obj4 = { variant: "display-md", style: tmp3.name, adjustsFontSizeToFit: true, lineClamp: 2, children: name };
  const tmp9 = React3(CheckpointTextDefault, obj4);
  cResult[1] = name;
  cResult[2] = tmp3.name;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((name) => {
  let items;
  let obj2;
  name = name.name;
  const tmp = closure_6();
  const obj = { children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, ];
  const tmp2 = CheckpointScreenDefault;
  items[0] = React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
  const obj3 = { variant: "display-md", style: tmp.name, adjustsFontSizeToFit: true, lineClamp: 2, children: name };
  items[1] = React3(CheckpointTextDefault, obj3);
  return React3(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx");

export default tmp3;