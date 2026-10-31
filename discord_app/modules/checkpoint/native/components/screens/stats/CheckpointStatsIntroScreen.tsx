// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: {
    flexGrow: 1,
    justifyContent: "center",
    gap: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_64,
  },
  title: null,
  titleText: null,
};
let obj3 = {
  flexGrow: 1,
  justifyContent: "center",
  gap: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_64,
};
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointStatsIntroScreen.tsx",
);

export default function CheckpointStatsIntroScreen(title) {
  title = title.title;
  ({ icon, description } = title);
  const tmp = closure_5();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, children: null };
  const items = [icon];
  const obj4 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const tmp2 = CheckpointScreenDefault;
  obj4.children = title.toLocaleUpperCase();
  items[1] = React3(CheckpointTextDefault, obj4);
  obj3.children = items;
  const items1 = [
    React4(View, obj3),
    React3(CheckpointTextDefault, { variant: "heading-lg/medium", children: description }),
  ];
  obj2.children = items1;
  obj.children = React4(View, obj2);
  return React3(tmp2, obj);
}
