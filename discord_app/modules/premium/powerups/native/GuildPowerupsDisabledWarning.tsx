// discord_app/modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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