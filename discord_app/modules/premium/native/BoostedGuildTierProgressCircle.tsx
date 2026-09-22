// === Module 13779: BoostedGuildTierProgressCircle ===

// Module 13779 (BoostedGuildTierProgressCircle)
import nativeDefault from "native" /* 576 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4650 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4665 */;
import Text_Text from "Text/Text" /* 4753 */;
import Tier048Px from "Tier048Px" /* 13780 */;
import _modDef13784 from "module_13784" /* 13784 */;
import _modDef13785 from "module_13785" /* 13785 */;
import _modDef13786 from "module_13786" /* 13786 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: null, guildTierNoneIcon: null, guildTierIcon: null, guildTierName: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj2.guildTierBackground = size;
obj2.guildTierNoneIcon = { width: 18, height: 30 };
obj2.guildTierIcon = { width: 24, height: 24 };
obj2.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  ({ guild, theme } = arg0);
  const tmp = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: null };
    const obj3 = { source: Tier048Px.getTier048PxSource(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj2.children = React5(React4, obj3);
    return React5(React3, obj2);
  } else {
    const nextGuildTierFromGuild = GuildBoostingUtils.getNextGuildTierFromGuild(guild.id);
    let tmp7 = null;
    if (null != nextGuildTierFromGuild) {
      tmp7 = hasOwnProperty[nextGuildTierFromGuild];
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
          let tier048PxSource = _modDef13784;
        } else if (constants.TIER_2 === premiumTier) {
          tier048PxSource = _modDef13785;
        } else if (constants.TIER_3 === premiumTier) {
          tier048PxSource = _modDef13786;
        }
      }
      const obj5 = { source: tier048PxSource, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [React5(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: GuildBoostingUtils.getTierName(guild.premiumTier) };
      items[1] = React5(Text_Text.Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return React5(tmp9, obj);
    }
    tier048PxSource = Tier048Px.getTier048PxSource(theme);
    const tmp19Result2 = Tier048Px;
  }
};