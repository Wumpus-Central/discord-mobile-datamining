// === Module 15390: BoostedGuildTierProgressCircle ===

// Module 15390 (BoostedGuildTierProgressCircle)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8463 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8468 */;
import ProgressCircleDefault from "ProgressCircle" /* 12570 */;
import Tier048Px from "Tier048Px" /* 15391 */;
import _modDef15395 from "module_15395" /* 15395 */;
import _modDef15396 from "module_15396" /* 15396 */;
import _modDef15397 from "module_15397" /* 15397 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: null, guildTierNoneIcon: null, guildTierIcon: null, guildTierName: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj2.guildTierBackground = size;
obj2.guildTierNoneIcon = { width: 18, height: 30 };
obj2.guildTierIcon = { width: 24, height: 24 };
obj2.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  ({ guild, theme } = arg0);
  const tmp = closure_8();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: null };
    const obj3 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    const tmp2Result = FastImageDefault;
    obj3.source = Tier048Px.getTier048PxSource(theme);
    obj3.style = tmp.guildTierNoneIcon;
    obj2.children = timestampProducer(tmp2Result, obj3);
    return timestampProducer(View, obj2);
  } else {
    const nextGuildTierFromGuild = GuildBoostingUtils.getNextGuildTierFromGuild(guild.id);
    let tmp7 = null;
    if (null != nextGuildTierFromGuild) {
      tmp7 = React4[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp7) {
      num2 = 100;
      if (tmp7 > 0) {
        num2 = tmp5 / tmp7 * 100;
      }
    }
    const obj = { style: tmp.guildTierProgressCircle, percent: num2, children: null };
    const obj4 = { style: tmp.guildTierBackground, children: null };
    if (null != guild) {
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (constants.TIER_1 === premiumTier) {
          let tmp2Result4 = _modDef15395;
        } else if (constants.TIER_2 === premiumTier) {
          tmp2Result4 = _modDef15396;
        } else if (constants.TIER_3 === premiumTier) {
          tmp2Result4 = _modDef15397;
        }
      }
      const obj5 = { source: tmp2Result4, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [timestampProducer(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: GuildBoostingUtils.getTierName(guild.premiumTier) };
      items[1] = timestampProducer(Text_Text.Text, obj6);
      obj4.children = items;
      obj.children = React5(View, obj4);
      return timestampProducer(tmp2Result3, obj);
    }
    tmp2Result3 = ProgressCircleDefault;
    tmp2Result4 = Tier048Px.getTier048PxSource(theme);
    const tmp19Result2 = Tier048Px;
  }
};