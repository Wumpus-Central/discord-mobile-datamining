// discord_app/modules/premium/powerups/native/GuildPowerupsWarning.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { apexExperiment } from "../../../design/ManaTypeConsolidationExperiment.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, contentContainer: null, warningText: null, text: null };
createCacheKey = { flexDirection: "row", alignItems: "flex-start", padding: ThemesDefault.space.PX_24, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: ThemesDefault.colors.STATUS_WARNING, borderRadius: ThemesDefault.radii.lg, gap: ThemesDefault.space.PX_8, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: ThemesDefault.space.PX_4, alignItems: "center" };
let obj1 = { flex: 1, gap: ThemesDefault.space.PX_4, alignItems: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_4 };
createCacheKey[3] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  warnings = warnings.warnings;
  let _require;
  let manaTypeConsolidationExperiment;
  ({ guildId, powerupNames } = warnings);
  const tmp = callback2();
  _require = tmp;
  let obj = apexExperiment;
  manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  let tmp10Result = null;
  if (tmp6.shouldShow) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.contentContainer;
    obj1 = { color: null, size: "md" };
    obj1[0] = manaTypeConsolidationExperiment(712).colors.TEXT_FEEDBACK_WARNING;
    let items = [callback(tmp2(8005).CircleErrorIcon, obj1), , , ];
    const obj2 = { variant: "text-md/semibold", color: "text-feedback-warning", style: null, children: null };
    obj2[2] = tmp.text;
    obj2[3] = tmp7;
    items[1] = callback(tmp2(4440).Text, obj2);
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    const obj3 = { variant: null, style: null, children: null };
    obj3[0] = str;
    obj3[1] = tmp.text;
    obj3[2] = tmp8;
    items[2] = callback(tmp2(4440).Text, obj3);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children) => {
        let str = "text-sm/medium";
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = callback);
        return closure_1_4(callback(closure_1_2[8]).Text, { variant: str, color: "text-feedback-warning", style: items, children }, "warning-" + arg1);
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