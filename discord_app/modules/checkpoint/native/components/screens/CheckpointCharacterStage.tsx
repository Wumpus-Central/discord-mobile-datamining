// === Module 15549: CheckpointCharacterStage ===

// Module 15549 (CheckpointCharacterStage)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let stage;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2 };
obj2 = { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((stage) => {
  let first;
  let items;
  let tmp8;
  const obj = react;
  const cResult = obj.c(6);
  stage = stage.stage;
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = _false(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stage) {
    const obj2 = { color: "text-muted", variant: "text-md/medium", children: stage };
    const tmp10 = _false(Text_Text.Text, obj2);
    cResult[1] = stage;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { style: tmp4.container, children: items };
  items = [first, tmp8];
  const tmp12 = React3(View, obj3);
  cResult[3] = tmp4.container;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((stage) => {
  let items;
  stage = stage.stage;
  const obj = { style: closure_5().container, children: items };
  items = [_false(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), _false(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: stage })];
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default tmp3;