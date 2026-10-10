// discord_app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import useGuildPowerupsBoostCountDefault from "../powerups/hooks/useGuildPowerupsBoostCount.tsx";
import ProgressCircleDefault from "components/ProgressCircle.tsx";
import Tier048Px from "../../../design/components/Illustration/native/redesign/generated/Tier048Px.tsx";
import _modDef13779 from "../../../../_runtime/metro/13779__.js";
import _modDef13780 from "../../../../_runtime/metro/13780__.js";
import _modDef13781 from "../../../../_runtime/metro/13781__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  guildTierProgressCircle: { position: "relative", width: 70, height: 70 },
  guildTierBackground: null,
  guildTierNoneIcon: null,
  guildTierIcon: null,
  guildTierName: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: 64,
  height: 64,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xxl,
};
obj2.guildTierBackground = size;
obj2.guildTierNoneIcon = { width: 18, height: 30 };
obj2.guildTierIcon = { width: 24, height: 24 };
obj2.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BoostedGuildTierProgressCircle(arg0) {
      const cResult = c.c(27);
      ({ guild, theme } = arg0);
      const tmp4 = closure_8();
      useGuildPowerupsBoostCountDefault;
      if (guild != null) {
        const id = guild.id;
      }
      if (null == guild) {
        if (cResult[0] !== theme) {
          const tier048PxSource = Tier048Px.getTier048PxSource(theme);
          cResult[0] = theme;
          cResult[1] = tier048PxSource;
          let tmp31 = tier048PxSource;
          const tmpResult = Tier048Px;
        } else {
          tmp31 = cResult[1];
        }
        if (cResult[2] === tmp4.guildTierNoneIcon) {
          if (cResult[3] === tmp31) {
            let tmp33 = cResult[4];
          }
          if (cResult[5] === tmp4.guildTierBackground) {
            if (cResult[6] === tmp33) {
              let tmp36 = cResult[7];
            }
            return tmp36;
          }
          const obj2 = { style: tmp4.guildTierBackground, children: tmp33 };
          const tmp39 = timestampProducer(View, obj2);
          cResult[5] = tmp4.guildTierBackground;
          cResult[6] = tmp33;
          cResult[7] = tmp39;
          tmp36 = tmp39;
        }
        const obj3 = {
          source: tmp31,
          style: tmp4.guildTierNoneIcon,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no",
        };
        const tmp35 = timestampProducer(FastImageDefault, obj3);
        cResult[2] = tmp4.guildTierNoneIcon;
        cResult[3] = tmp31;
        cResult[4] = tmp35;
        tmp33 = tmp35;
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
            num2 = (tmp7 / tmp9) * 100;
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
                let tmp19 = tierName;
                const tmpResult5 = GuildBoostingUtils;
              } else {
                tmp19 = cResult[15];
              }
              if (cResult[16] === tmp4.guildTierName) {
                if (cResult[17] === tmp19) {
                  let tmp21 = cResult[18];
                }
                if (cResult[19] === tmp4.guildTierBackground) {
                  if (cResult[20] === tmp16) {
                    if (cResult[21] === tmp21) {
                      let tmp24 = cResult[22];
                    }
                    if (cResult[23] === num2) {
                      if (cResult[24] === tmp4.guildTierProgressCircle) {
                        if (cResult[25] === tmp24) {
                          let tmp28 = cResult[26];
                        }
                        return tmp28;
                      }
                    }
                    const obj4 = { style: tmp10, percent: num2, children: tmp24 };
                    const tmp30 = timestampProducer(ProgressCircleDefault, obj4);
                    cResult[23] = num2;
                    cResult[24] = tmp4.guildTierProgressCircle;
                    cResult[25] = tmp24;
                    cResult[26] = tmp30;
                    tmp28 = tmp30;
                  }
                }
                const obj5 = { style: tmp11, children: null };
                const items = [tmp16, tmp21];
                obj5.children = items;
                const tmp27 = React5(View, obj5);
                cResult[19] = tmp4.guildTierBackground;
                cResult[20] = tmp16;
                cResult[21] = tmp21;
                cResult[22] = tmp27;
                tmp24 = tmp27;
              }
              const obj6 = {
                style: tmp4.guildTierName,
                variant: "text-xs/semibold",
                color: "interactive-text-active",
                children: tmp19,
              };
              const tmp23 = timestampProducer(Text_Text.Text, obj6);
              cResult[16] = tmp4.guildTierName;
              cResult[17] = tmp19;
              cResult[18] = tmp23;
              tmp21 = tmp23;
            }
            const obj7 = {
              source: cResult[10],
              style: tmp4.guildTierIcon,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no",
            };
            const tmp18 = timestampProducer(FastImageDefault, obj7);
            cResult[11] = tmp4.guildTierIcon;
            cResult[12] = cResult[10];
            cResult[13] = tmp18;
            tmp16 = tmp18;
          }
        }
        if (null != guild) {
          if (guild.premiumTier !== constants.NONE) {
            const premiumTier = guild.premiumTier;
            if (constants.TIER_1 === premiumTier) {
              let tier048PxSource1 = _modDef13779;
            } else if (constants.TIER_2 !== premiumTier) {
              if (constants.TIER_3 === premiumTier) {
                tier048PxSource1 = _modDef13781;
              }
            }
            tier048PxSource1 = _modDef13780;
          }
          cResult[8] = guild;
          cResult[9] = theme;
          cResult[10] = tier048PxSource1;
        }
        const tmpResult4 = GuildBoostingUtils;
        tier048PxSource1 = Tier048Px.getTier048PxSource(theme);
        const tmpResult6 = Tier048Px;
      }
    }
  : function BoostedGuildTierProgressCircle(arg0) {
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
          tmp7 = dependencyMap[nextGuildTierFromGuild];
        }
        let num2 = 100;
        if (null != tmp7) {
          num2 = 100;
          if (tmp7 > 0) {
            num2 = (tmp5 / tmp7) * 100;
          }
        }
        const obj = { style: tmp.guildTierProgressCircle, percent: num2, children: null };
        const obj4 = { style: tmp.guildTierBackground, children: null };
        if (null != guild) {
          if (guild.premiumTier !== constants.NONE) {
            const premiumTier = guild.premiumTier;
            if (constants.TIER_1 === premiumTier) {
              let tmp2Result4 = _modDef13779;
            } else if (constants.TIER_2 === premiumTier) {
              tmp2Result4 = _modDef13780;
            } else if (constants.TIER_3 === premiumTier) {
              tmp2Result4 = _modDef13781;
            }
          }
          const obj5 = {
            source: tmp2Result4,
            style: tmp.guildTierIcon,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no",
          };
          const items = [timestampProducer(tmp12, obj5)];
          const obj6 = {
            style: tmp.guildTierName,
            variant: "text-xs/semibold",
            color: "interactive-text-active",
            children: GuildBoostingUtils.getTierName(guild.premiumTier),
          };
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
