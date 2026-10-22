// === Module 12896: CheckpointStatsIntroScreen ===

// Module 12896 (CheckpointStatsIntroScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 12893 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12895 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4969);
let obj2 = { container: { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null };
let obj3 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatsIntroScreen(arg0) {
  const cResult = c.c(15);
  ({ icon, title, description } = arg0);
  const tmp3 = closure_6();
  ({ container, title: title2, titleText } = tmp3);
  if (cResult[0] !== title) {
    const toLocaleUpperCaseResult = title.toLocaleUpperCase();
    cResult[0] = title;
    cResult[1] = toLocaleUpperCaseResult;
    let tmp4 = toLocaleUpperCaseResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.titleText) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === icon) {
      if (cResult[6] === tmp3.title) {
        if (cResult[7] === tmp6) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] !== description) {
          const obj2 = { variant: "heading-lg/medium", children: description };
          const tmp15 = React4(CheckpointTextDefault, obj2);
          cResult[9] = description;
          cResult[10] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[10];
        }
        if (cResult[11] === tmp3.container) {
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp12) {
              let tmp16 = cResult[14];
            }
            return tmp16;
          }
        }
        const obj3 = { children: null };
        const obj4 = { style: container, children: null };
        const items = [tmp8, tmp12];
        obj4.children = items;
        obj3.children = hasOwnProperty(View, obj4);
        const tmp22 = React4(CheckpointScreenDefault, obj3);
        cResult[11] = tmp3.container;
        cResult[12] = tmp8;
        cResult[13] = tmp12;
        cResult[14] = tmp22;
        tmp16 = tmp22;
      }
    }
    const obj5 = { style: title2, children: null };
    const items1 = [icon, tmp6];
    obj5.children = items1;
    const tmp11 = hasOwnProperty(View, obj5);
    cResult[5] = icon;
    cResult[6] = tmp3.title;
    cResult[7] = tmp6;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React4(CheckpointTextDefault, { variant: "heading-md/extrabold", style: titleText, children: tmp4 });
  cResult[2] = tmp3.titleText;
  cResult[3] = tmp4;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function CheckpointStatsIntroScreen(title) {
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_6();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, children: null };
  const items = [icon, ];
  const obj4 = { variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const tmp2 = CheckpointScreenDefault;
  obj4.children = title.toLocaleUpperCase();
  items[1] = React4(CheckpointTextDefault, obj4);
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3), React4(CheckpointTextDefault, { variant: "heading-lg/medium", children: description })];
  obj2.children = items1;
  obj.children = hasOwnProperty(View, obj2);
  return React4(tmp2, obj);
});