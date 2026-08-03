import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, text: null };
obj = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, borderColor: require("Themes").colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: require("Themes").radii.lg, padding: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING };
obj[0] = obj;
obj[1] = { flex: 1 };
let closure_6 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(children) {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { color: null, size: "md" };
  obj[0] = importDefault(712).colors.TEXT_FEEDBACK_WARNING;
  const items = [callback(require(7760) /* WarningIcon */.WarningIcon, obj), ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: children.text };
  items[1] = callback(require(4251) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};