// === Module 11714: GuildPowerupsDisabledWarning ===

// Module 11714 (GuildPowerupsDisabledWarning)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import WarningIcon from "WarningIcon" /* 8078 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, borderColor: ThemesDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING };
obj[0] = obj;
obj[1] = { flex: 1 };
let closure_6 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(children) {
  const tmp = callback3();
  let obj = { color: ThemesDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const items = [callback(WarningIcon.WarningIcon, obj), ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: children.text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};