// discord_app/modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: null, text: null };
obj = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
obj.container = obj;
obj.text = { flex: 1 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(children) {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const items = [React4(WarningIcon.WarningIcon, obj)];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: children.text };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
