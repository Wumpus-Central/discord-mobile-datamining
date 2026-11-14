// === Module 14500: CheckpointStatsIntroScreen ===

// Module 14500 (CheckpointStatsIntroScreen)
import nativeDefault from "native" /* 575 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, wideContainer: null, wideTitle: null, wideDescription: null };
let obj3 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
obj2.wideContainer = { alignItems: "center", paddingBottom: 0 };
obj2.wideTitle = { justifyContent: "center" };
obj2.wideDescription = { maxWidth: 560, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx");

export default function CheckpointStatsIntroScreen(title) {
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_5();
  const tmp4 = useIsCheckpointWideDefault();
  const obj = { centered: tmp4, children: null };
  items = [tmp.container, ];
  let wideContainer = tmp4;
  if (tmp4) {
    wideContainer = tmp.wideContainer;
  }
  const obj2 = { style: items, children: null };
  items[1] = wideContainer;
  const items1 = [tmp.title, ];
  let wideTitle = tmp4;
  if (tmp4) {
    wideTitle = tmp.wideTitle;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = wideTitle;
  const items2 = [icon, ];
  const obj4 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const tmp6 = CheckpointScreenDefault;
  obj4.children = title.toLocaleUpperCase();
  items2[1] = React3(CheckpointTextDefault, obj4);
  obj3.children = items2;
  const items3 = [React4(View, obj3), ];
  let wideDescription;
  const tmp2Result = CheckpointTextDefault;
  if (tmp4) {
    wideDescription = tmp.wideDescription;
  }
  items3[1] = React3(CheckpointTextDefault, { variant: "heading-lg/medium", style: wideDescription, children: description });
  obj2.children = items3;
  obj.children = React4(View, obj2);
  return React3(tmp6, obj);
};