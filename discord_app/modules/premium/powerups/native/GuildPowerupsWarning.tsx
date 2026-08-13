// discord_app/modules/premium/powerups/native/GuildPowerupsWarning.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { apexExperiment } from "../../../design/ManaTypeConsolidationExperiment.tsx";

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
  let manaTypeConsolidationExperiment;
  ({ guildId, powerupNames } = warnings);
  const tmp = createCacheKey();
  _require = tmp;
  let obj = _apexExperiment;
  manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  let tmp10Result = null;
  if (tmp6.shouldShow) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.contentContainer;
    const obj1 = { color: null, size: "md" };
    obj1[0] = manaTypeConsolidationExperiment(712).colors.TEXT_FEEDBACK_WARNING;
    let items = [callback(tmp2(7838).CircleErrorIcon, obj1), , , ];
    const obj2 = { variant: "text-md/semibold", color: "text-feedback-warning", style: null, children: null };
    obj2[2] = tmp.text;
    obj2[3] = tmp7;
    items[1] = callback(tmp2(4338).Text, obj2);
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    const obj3 = { variant: null, style: null, children: null };
    obj3[0] = str;
    obj3[1] = tmp.text;
    obj3[2] = tmp8;
    items[2] = callback(tmp2(4338).Text, obj3);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children) => {
        let str = "text-sm/medium";
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = _undefined);
        return outer1_4(_undefined(outer1_2[8]).Text, { variant: str, color: "text-feedback-warning", style: items, children }, "warning-" + arg1);
      });
    }
    items[3] = mapped;
    obj[1] = items;
    obj[1] = closure_5(View, obj);
    tmp10Result = tmp10(tmp11, obj);
    const tmp12 = closure_5;
  }
  return tmp10Result;
};