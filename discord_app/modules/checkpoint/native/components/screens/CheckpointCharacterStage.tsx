// discord_app/modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 },
};
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(children) {
  const obj = { style: closure_5().container, children: null };
  const items = [
    React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
    React3(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: children.stage }),
  ];
  obj.children = items;
  return React4(View, obj);
}
