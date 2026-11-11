// === Module 10697: GuildPowerupsBoostInfo ===

// Module 10697 (GuildPowerupsBoostInfo)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import Text_Text from "Text/Text" /* 5866 */;
import BoostGemIcon from "BoostGemIcon" /* 9915 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 10698 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 }, headerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  ({ count, type } = arg0);
  const tmp = closure_7();
  const guildPowerupsBoostInfoText = getGuildPowerupsBoostInfoText.getGuildPowerupsBoostInfoText(count, type);
  const obj2 = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  const obj3 = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
  }
  items = [hasOwnProperty(BoostGemIcon.BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str = "text-strong";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "body-lg/semibold", color: str, importantForAccessibility: "no-hide-descendants", children: count });
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), hasOwnProperty(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText })];
  obj2.children = items1;
  return timestampProducer(View, obj2);
};