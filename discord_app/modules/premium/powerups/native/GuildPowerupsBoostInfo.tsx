// === Module 12032: GuildPowerupsBoostInfo ===

// Module 12032 (GuildPowerupsBoostInfo)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4332 */;
import Text from "Text" /* 4441 */;
import apexExperiment from "apexExperiment" /* 7936 */;
import BoostGemIcon from "BoostGemIcon" /* 8166 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 12033 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const View = get_ActivityIndicator.View;
const BoostInfoType = BoostedGuildTiers.BoostInfoType;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, headerContainer: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: ThemesDefault.space.PX_12 };
obj[0] = obj;
obj[1] = { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" };
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  ({ count, type } = arg0);
  const tmp = callback();
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  obj1 = getGuildPowerupsBoostInfoText;
  const guildPowerupsBoostInfoText = obj1.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  obj = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = ThemesDefault.colors.TEXT_MUTED;
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