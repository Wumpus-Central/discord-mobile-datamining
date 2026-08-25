// === Module 12110: GuildPowerupsSectionHeader ===

// Module 12110 (GuildPowerupsSectionHeader)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import apexExperiment from "apexExperiment" /* 8348 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { headerContainer: null };
obj = { padding: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  ({ title, description } = arg0);
  let obj = apexExperiment;
  obj = { style: callback2().headerContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
  const items = [callback(Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), ];
  let str = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = callback(Text.Text, { variant: str, children: description });
  obj[1] = items;
  return closure_4(View, obj);
};