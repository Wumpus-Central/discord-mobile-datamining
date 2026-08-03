// === Module 11665: GuildPowerupsWarning ===

// Module 11665 (GuildPowerupsWarning)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, contentContainer: null, warningText: null, text: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", padding: require("Themes").space.PX_24, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: require("Themes").colors.STATUS_WARNING, borderRadius: require("Themes").radii.lg, gap: require("Themes").space.PX_8, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: require("Themes").space.PX_4, alignItems: "center" };
let obj1 = { flex: 1, gap: require("Themes").space.PX_4, alignItems: "center" };
createCacheKey[2] = { marginTop: require("Themes").space.PX_4 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: require("Themes").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  let guildId;
  let powerupNames;
  warnings = warnings.warnings;
  let _require;
  ({ guildId, powerupNames } = warnings);
  const tmp = createCacheKey();
  _require = tmp;
  let tmp8Result = null;
  if (tmp4.shouldShow) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.contentContainer;
    obj = { color: null, size: "md" };
    obj[0] = importDefault(712).colors.TEXT_FEEDBACK_WARNING;
    let items = [callback(_require(6733).CircleErrorIcon, obj), , , ];
    const obj1 = { variant: "text-md/semibold", color: "text-feedback-warning", style: null, children: null };
    obj1[2] = tmp.text;
    obj1[3] = tmp5;
    items[1] = callback(_require(4189).Text, obj1);
    const obj2 = { variant: "text-sm/medium", style: null, children: null };
    obj2[1] = tmp.text;
    obj2[2] = tmp6;
    items[2] = callback(_require(4189).Text, obj2);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children) => {
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = _undefined);
        return outer1_4(_undefined(outer1_2[7]).Text, { variant: "text-sm/medium", color: "text-feedback-warning", style: items, children }, "warning-" + arg1);
      });
    }
    items[3] = mapped;
    obj[1] = items;
    obj[1] = closure_5(View, obj);
    tmp8Result = callback(tmp9, obj);
    const tmp10 = closure_5;
    const tmp8 = callback;
  }
  return tmp8Result;
};