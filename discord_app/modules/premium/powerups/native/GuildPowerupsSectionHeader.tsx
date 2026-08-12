// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { apexExperiment } from "../../../design/ManaTypeConsolidationExperiment.tsx";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { headerContainer: null };
obj = { padding: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let title;
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