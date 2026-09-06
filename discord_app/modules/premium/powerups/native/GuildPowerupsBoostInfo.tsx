// === Module 12553: GuildPowerupsBoostInfo ===

// Module 12553 (GuildPowerupsBoostInfo)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4450 */;
import Text_Text from "Text/Text" /* 4556 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import BoostGemIcon from "BoostGemIcon" /* 9375 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 12554 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: null, headerContainer: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 };
obj.container = obj;
obj.headerContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  ({ count, type } = arg0);
  const tmp = closure_7();
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  let obj1 = getGuildPowerupsBoostInfoText;
  const guildPowerupsBoostInfoText = obj1.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  obj = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
  }
  const items = [hasOwnProperty(BoostGemIcon.BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-lg/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-lg/semibold";
  }
  obj1 = { variant: str, color: null, importantForAccessibility: "no-hide-descendants", children: null };
  let str2 = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str2 = "text-strong";
  }
  obj1.color = str2;
  obj1.children = count;
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [timestampProducer(View, obj), ];
  let str3 = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str3 = "text-sm/normal";
  }
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: str3, color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText });
  obj.children = items1;
  return timestampProducer(View, obj);
};