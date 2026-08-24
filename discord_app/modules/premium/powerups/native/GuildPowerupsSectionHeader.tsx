// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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