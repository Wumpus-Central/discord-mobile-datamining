// discord_app/modules/checkpoint/native/components/screens/CheckpointUnavailableScreen.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointScreenDefault from "../CheckpointScreen.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { container: { flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_64 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/CheckpointUnavailableScreen.tsx",
);

export default function CheckpointUnavailableScreen(children) {
  const obj = { children: null };
  const obj2 = { style: closure_4().container, children: null };
  const tmp = closure_4();
  obj2.children = jsx(CheckpointTextDefault, {
    isStepHeading: true,
    variant: "heading-lg/medium",
    children: children.message,
  });
  obj.children = <View style={closure_4().container}>{null}</View>;
  return jsx(CheckpointScreenDefault, { children: null });
}
