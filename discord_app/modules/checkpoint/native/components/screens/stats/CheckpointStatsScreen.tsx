// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {
  container: {
    flexGrow: 1,
    justifyContent: "center",
    gap: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_64,
  },
  name: { textTransform: "uppercase" },
};
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx",
);

export default function CheckpointStatsScreen(children) {
  const tmp = closure_5();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [
    React3(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" }),
    React3(CheckpointTextDefault, {
      variant: "display-md",
      style: tmp.name,
      adjustsFontSizeToFit: true,
      lineClamp: 2,
      children: children.name,
    }),
  ];
  obj2.children = items;
  obj.children = React4(View, obj2);
  return React3(CheckpointScreenDefault, obj);
}
