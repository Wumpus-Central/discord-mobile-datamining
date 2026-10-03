// === Module 15529: CheckpointCharacterStage ===

// Module 15529 (CheckpointCharacterStage)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 } };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((stage) => {
  const cResult = c.c(6);
  stage = stage.stage;
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stage) {
    const obj2 = { color: "text-muted", variant: "text-md/medium", children: stage };
    const tmp10 = React3(Text_Text.Text, obj2);
    cResult[1] = stage;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { style: tmp4.container, children: null };
  const items = [first, tmp8];
  obj3.children = items;
  const tmp12 = React4(View, obj3);
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((children) => {
  const obj = { style: closure_5().container, children: null };
  const items = [React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: children.stage })];
  obj.children = items;
  return React4(View, obj);
});