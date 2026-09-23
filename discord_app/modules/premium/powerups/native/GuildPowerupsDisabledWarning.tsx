// === Module 12885: GuildPowerupsDisabledWarning ===

// Module 12885 (GuildPowerupsDisabledWarning)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4823 */;
import WarningIcon from "WarningIcon" /* 8942 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING }, text: { flex: 1 } };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(children) {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [React4(WarningIcon.WarningIcon, { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" }), React4(Text_Text.Text, { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
};