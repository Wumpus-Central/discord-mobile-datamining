// === Module 16005: CheckpointStatsScreen ===

// Module 16005 (CheckpointStatsScreen)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 15996 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15998 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, name: { textTransform: "uppercase" } };
let closure_6 = createStyles.createStyles(obj);
let obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatsScreen(name) {
  const cResult = c.c(7);
  name = name.name;
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React4(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === name) {
    if (cResult[2] === tmp3.name) {
      let tmp8 = cResult[3];
    }
    if (cResult[4] === tmp3.container) {
      if (cResult[5] === tmp8) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
    const obj2 = { children: null };
    const obj3 = { style: tmp3.container, children: null };
    const items = [first, tmp8];
    obj3.children = items;
    obj2.children = hasOwnProperty(View, obj3);
    const tmp16 = React4(CheckpointScreenDefault, obj2);
    cResult[4] = tmp3.container;
    cResult[5] = tmp8;
    cResult[6] = tmp16;
    tmp10 = tmp16;
  }
  const tmp9 = React4(CheckpointTextDefault, { variant: "display-md", style: tmp3.name, adjustsFontSizeToFit: true, lineClamp: 2, children: name });
  cResult[1] = name;
  cResult[2] = tmp3.name;
  cResult[3] = tmp9;
  tmp8 = tmp9;
  const obj4 = { variant: "display-md", style: tmp3.name, adjustsFontSizeToFit: true, lineClamp: 2, children: name };
}) : (function CheckpointStatsScreen(children) {
  const tmp = closure_6();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [React4(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" }), React4(CheckpointTextDefault, { variant: "display-md", style: tmp.name, adjustsFontSizeToFit: true, lineClamp: 2, children: children.name })];
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(CheckpointScreenDefault, obj);
});