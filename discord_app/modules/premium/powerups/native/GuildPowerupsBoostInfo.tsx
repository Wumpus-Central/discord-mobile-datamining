// discord_app/modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx
import { View } from "get ActivityIndicator";
import { BoostInfoType } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { BoostGemIcon } from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { apexExperiment } from "../../../design/ManaTypeConsolidationExperiment.tsx";
import { getGuildPowerupsBoostInfoText } from "../utils/getGuildPowerupsBoostInfoText.tsx";

let c5;
let closure_6;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, headerContainer: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: require("Themes").space.PX_12 };
obj[0] = obj;
obj[1] = { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" };
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  let count;
  let type;
  ({ count, type } = arg0);
  const tmp = callback();
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  let obj1 = getGuildPowerupsBoostInfoText;
  const guildPowerupsBoostInfoText = obj1.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  obj = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = Themes.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = Themes.colors.TEXT_MUTED;
  }
  const items = [closure_5(BoostGemIcon.BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-lg/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-lg/semibold";
  }
  obj1 = { variant: str, color: null, importantForAccessibility: "no-hide-descendants", children: null };
  let str2 = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str2 = "text-strong";
  }
  obj1[1] = str2;
  obj1[3] = count;
  items[1] = closure_5(Text.Text, obj1);
  obj[3] = items;
  const items1 = [closure_6(View, obj), closure_5(Text.Text, { variant: "text-md/normal", color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText })];
  obj[3] = items1;
  return closure_6(View, obj);
};