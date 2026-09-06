// === Module 12545: GuildPowerupsDisabledWarning ===

// Module 12545 (GuildPowerupsDisabledWarning)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import WarningIcon from "WarningIcon" /* 8588 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: null, text: null };
obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
obj.container = obj;
obj.text = { flex: 1 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(children) {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const items = [React4(WarningIcon.WarningIcon, obj), ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: children.text };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
};