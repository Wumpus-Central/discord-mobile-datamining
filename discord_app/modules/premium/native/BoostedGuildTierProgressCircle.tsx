// === Module 13631: BoostedGuildTierProgressCircle ===

// Module 13631 (BoostedGuildTierProgressCircle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7998 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8003 */;
import ProgressCircleDefault from "ProgressCircle" /* 12345 */;
import Tier048Px from "Tier048Px" /* 13632 */;
import _modDef13636 from "module_13636" /* 13636 */;
import _modDef13637 from "module_13637" /* 13637 */;
import _modDef13638 from "module_13638" /* 13638 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: null, guildTierNoneIcon: null, guildTierIcon: null, guildTierName: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj2.guildTierBackground = size;
obj2.guildTierNoneIcon = { width: 18, height: 30 };
obj2.guildTierIcon = { width: 24, height: 24 };
obj2.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BoostedGuildTierProgressCircle(arg0) {
  const cResult = c.c(27);
  ({ guild, theme } = arg0);
  const tmp4 = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    if (cResult[0] !== theme) {
      const tier048PxSource = Tier048Px.getTier048PxSource(theme);
      cResult[0] = theme;
      cResult[1] = tier048PxSource;
      let tmp32 = tier048PxSource;
      const tmpResult = Tier048Px;
    } else {
      tmp32 = cResult[1];
    }
    if (cResult[2] === tmp4.guildTierNoneIcon) {
      if (cResult[3] === tmp32) {
        let tmp34 = cResult[4];
      }
      if (cResult[5] === tmp4.guildTierBackground) {
        if (cResult[6] === tmp34) {
          let tmp38 = cResult[7];
        }
        return tmp38;
      }
      const obj2 = { style: tmp4.guildTierBackground, children: tmp34 };
      const tmp41 = React5(React3, obj2);
      cResult[5] = tmp4.guildTierBackground;
      cResult[6] = tmp34;
      cResult[7] = tmp41;
      tmp38 = tmp41;
    }
    const obj3 = { source: tmp32, style: tmp4.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    const tmp37 = React5(React4, obj3);
    cResult[2] = tmp4.guildTierNoneIcon;
    cResult[3] = tmp32;
    cResult[4] = tmp37;
    tmp34 = tmp37;
  } else {
    const nextGuildTierFromGuild = GuildBoostingUtils.getNextGuildTierFromGuild(guild.id);
    let tmp9 = null;
    if (null != nextGuildTierFromGuild) {
      tmp9 = dependencyMap[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp9) {
      num2 = 100;
      if (tmp9 > 0) {
        num2 = tmp7 / tmp9 * 100;
      }
    }
    if (cResult[8] === guild) {
      if (cResult[9] === theme) {
        if (cResult[11] === tmp4.guildTierIcon) {
          if (cResult[12] === tmp12) {
            let tmp16 = cResult[13];
          }
          if (cResult[14] !== guild.premiumTier) {
            const tierName = GuildBoostingUtils.getTierName(guild.premiumTier);
            cResult[14] = guild.premiumTier;
            cResult[15] = tierName;
            let tmp20 = tierName;
            const tmpResult5 = GuildBoostingUtils;
          } else {
            tmp20 = cResult[15];
          }
          if (cResult[16] === tmp4.guildTierName) {
            if (cResult[17] === tmp20) {
              let tmp22 = cResult[18];
            }
            if (cResult[19] === tmp4.guildTierBackground) {
              if (cResult[20] === tmp16) {
                if (cResult[21] === tmp22) {
                  let tmp25 = cResult[22];
                }
                if (cResult[23] === num2) {
                  if (cResult[24] === tmp4.guildTierProgressCircle) {
                    if (cResult[25] === tmp25) {
                      let tmp29 = cResult[26];
                    }
                    return tmp29;
                  }
                }
                const obj4 = { style: tmp10, percent: num2, children: tmp25 };
                const tmp31 = React5(ProgressCircleDefault, obj4);
                cResult[23] = num2;
                cResult[24] = tmp4.guildTierProgressCircle;
                cResult[25] = tmp25;
                cResult[26] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj5 = { style: tmp11, children: null };
            const items = [tmp16, tmp22];
            obj5.children = items;
            const tmp28 = closure_1_8(React3, obj5);
            cResult[19] = tmp4.guildTierBackground;
            cResult[20] = tmp16;
            cResult[21] = tmp22;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          }
          const obj6 = { style: tmp4.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp20 };
          const tmp24 = React5(Text_Text.Text, obj6);
          cResult[16] = tmp4.guildTierName;
          cResult[17] = tmp20;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
        const obj7 = { source: cResult[10], style: tmp4.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
        const tmp19 = React5(React4, obj7);
        cResult[11] = tmp4.guildTierIcon;
        cResult[12] = cResult[10];
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
    }
    if (null != guild) {
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (constants.TIER_1 === premiumTier) {
          let tier048PxSource1 = _modDef13636;
        } else if (constants.TIER_2 !== premiumTier) {
          if (constants.TIER_3 === premiumTier) {
            tier048PxSource1 = _modDef13638;
          }
        }
        tier048PxSource1 = _modDef13637;
      }
      cResult[8] = guild;
      cResult[9] = theme;
      cResult[10] = tier048PxSource1;
    }
    const tmpResult4 = GuildBoostingUtils;
    tier048PxSource1 = Tier048Px.getTier048PxSource(theme);
    const tmpResult6 = Tier048Px;
  }
}) : (function BoostedGuildTierProgressCircle(arg0) {
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
      tmp7 = dependencyMap[nextGuildTierFromGuild];
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
          let tier048PxSource = _modDef13636;
        } else if (constants.TIER_2 === premiumTier) {
          tier048PxSource = _modDef13637;
        } else if (constants.TIER_3 === premiumTier) {
          tier048PxSource = _modDef13638;
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
});