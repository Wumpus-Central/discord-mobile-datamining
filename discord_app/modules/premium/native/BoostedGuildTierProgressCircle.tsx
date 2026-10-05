// === Module 13312: BoostedGuildTierProgressCircle ===

// Module 13312 (BoostedGuildTierProgressCircle)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7666 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 7671 */;
import ProgressCircleDefault from "ProgressCircle" /* 12251 */;
import Tier048Px from "Tier048Px" /* 13313 */;
import AssetRegistryDefault from "AssetRegistry" /* 13317 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13318 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13319 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
({ View: c3, Image: closure_4 } = react_native);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: size, guildTierNoneIcon: { width: 18, height: 30 }, guildTierIcon: { width: 24, height: 24 }, guildTierName: { lineHeight: 16, marginTop: 2 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
let closure_9 = createStyles.createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let items;
  let theme;
  const obj = react2;
  const cResult = obj.c(27);
  ({ guild, theme } = arg0);
  const tmp4 = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    let tmp31;
    const guildTierBackground = tmp4.guildTierBackground;
    if (cResult[0] !== theme) {
      const tmpResult = Tier048Px;
      const tier048PxSource = tmpResult.getTier048PxSource(theme);
      cResult[0] = theme;
      cResult[1] = tier048PxSource;
      tmp31 = tier048PxSource;
    } else {
      tmp31 = cResult[1];
    }
    if (cResult[2] === tmp4.guildTierNoneIcon) {
      let tmp33;
      if (cResult[3] === tmp31) {
        tmp33 = cResult[4];
      }
      if (cResult[5] === tmp4.guildTierBackground) {
        let tmp37;
        if (cResult[6] === tmp33) {
          tmp37 = cResult[7];
        }
        return tmp37;
      }
      const obj2 = { style: guildTierBackground, children: tmp33 };
      const tmp40 = metroImportDefault(_false, obj2);
      cResult[5] = tmp4.guildTierBackground;
      cResult[6] = tmp33;
      cResult[7] = tmp40;
      tmp37 = tmp40;
    }
    const obj3 = { source: tmp31, style: tmp4.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    const tmp36 = metroImportDefault(React3, obj3);
    cResult[2] = tmp4.guildTierNoneIcon;
    cResult[3] = tmp31;
    cResult[4] = tmp36;
    tmp33 = tmp36;
  } else {
    let tmp12;
    const tmpResult4 = GuildBoostingUtils;
    const nextGuildTierFromGuild = tmpResult4.getNextGuildTierFromGuild(guild.id);
    let tmp9 = null;
    if (null != nextGuildTierFromGuild) {
      tmp9 = hasOwnProperty[nextGuildTierFromGuild];
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
        tmp12 = cResult[10];
      }
      if (cResult[11] === tmp4.guildTierIcon) {
        let tmp15;
        let tmp19;
        if (cResult[12] === tmp12) {
          tmp15 = cResult[13];
        }
        const guildTierName = tmp4.guildTierName;
        if (cResult[14] !== guild.premiumTier) {
          const tmpResult5 = GuildBoostingUtils;
          const tierName = tmpResult5.getTierName(guild.premiumTier);
          cResult[14] = guild.premiumTier;
          cResult[15] = tierName;
          tmp19 = tierName;
        } else {
          tmp19 = cResult[15];
        }
        if (cResult[16] === tmp4.guildTierName) {
          let tmp21;
          if (cResult[17] === tmp19) {
            tmp21 = cResult[18];
          }
          if (cResult[19] === tmp4.guildTierBackground) {
            if (cResult[20] === tmp15) {
              let tmp24;
              if (cResult[21] === tmp21) {
                tmp24 = cResult[22];
              }
              if (cResult[23] === num2) {
                if (cResult[24] === tmp4.guildTierProgressCircle) {
                  let tmp28;
                  if (cResult[25] === tmp24) {
                    tmp28 = cResult[26];
                  }
                  return tmp28;
                }
              }
              const obj4 = { style: tmp10, percent: num2, children: tmp24 };
              const tmp30 = metroImportDefault(ProgressCircleDefault, obj4);
              cResult[23] = num2;
              cResult[24] = tmp4.guildTierProgressCircle;
              cResult[25] = tmp24;
              cResult[26] = tmp30;
              tmp28 = tmp30;
            }
          }
          const obj5 = { style: tmp11, children: items };
          items = [tmp15, tmp21];
          const tmp27 = metroImportAll(_false, obj5);
          cResult[19] = tmp4.guildTierBackground;
          cResult[20] = tmp15;
          cResult[21] = tmp21;
          cResult[22] = tmp27;
          tmp24 = tmp27;
        }
        const obj6 = { style: guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp19 };
        const tmp23 = metroImportDefault(Text_Text.Text, obj6);
        cResult[16] = tmp4.guildTierName;
        cResult[17] = tmp19;
        cResult[18] = tmp23;
        tmp21 = tmp23;
      }
      const obj7 = { source: tmp12, style: tmp4.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const tmp18 = metroImportDefault(React3, obj7);
      cResult[11] = tmp4.guildTierIcon;
      cResult[12] = tmp12;
      cResult[13] = tmp18;
      tmp15 = tmp18;
    }
    if (null != guild) {
      let tier048PxSource1;
      if (guild.premiumTier !== metroRequire.NONE) {
        const premiumTier = guild.premiumTier;
        if (metroRequire.TIER_1 === premiumTier) {
          tier048PxSource1 = AssetRegistryDefault;
        } else if (metroRequire.TIER_2 === premiumTier) {
          tier048PxSource1 = AssetRegistryDefault2;
        } else if (metroRequire.TIER_3 === premiumTier) {
          tier048PxSource1 = AssetRegistryDefault3;
        }
      }
      cResult[8] = guild;
      cResult[9] = theme;
      cResult[10] = tier048PxSource1;
      tmp12 = tier048PxSource1;
    }
    const tmpResult6 = Tier048Px;
    tier048PxSource1 = tmpResult6.getTier048PxSource(theme);
  }
}) : ((arg0) => {
  let guild;
  let obj3;
  let obj9;
  let theme;
  let tmp19Result;
  ({ guild, theme } = arg0);
  const tmp = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: metroImportDefault(React3, obj3) };
    obj3 = { source: obj9.getTier048PxSource(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj9 = Tier048Px;
    return metroImportDefault(_false, obj2);
  } else {
    const obj10 = GuildBoostingUtils;
    const nextGuildTierFromGuild = obj10.getNextGuildTierFromGuild(guild.id);
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
      let tier048PxSource;
      if (guild.premiumTier !== metroRequire.NONE) {
        const premiumTier = guild.premiumTier;
        if (metroRequire.TIER_1 === premiumTier) {
          tier048PxSource = AssetRegistryDefault;
        } else if (metroRequire.TIER_2 === premiumTier) {
          tier048PxSource = AssetRegistryDefault2;
        } else if (metroRequire.TIER_3 === premiumTier) {
          tier048PxSource = AssetRegistryDefault3;
        }
      }
      const obj5 = { source: tier048PxSource, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [metroImportDefault(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp19Result.getTierName(guild.premiumTier) };
      const Text = Text_Text.Text;
      tmp19Result = GuildBoostingUtils;
      items[1] = metroImportDefault(Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return metroImportDefault(tmp9, obj);
    }
    const tmp19Result2 = Tier048Px;
    tier048PxSource = tmp19Result2.getTier048PxSource(theme);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default tmp6;