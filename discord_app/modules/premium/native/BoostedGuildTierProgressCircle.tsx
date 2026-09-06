// discord_app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import useGuildPowerupsBoostCountDefault from "../powerups/hooks/useGuildPowerupsBoostCount.tsx";
import Tier048Px from "../../../design/components/Illustration/native/redesign/generated/Tier048Px.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
const createStyles = {
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
createStyles.guildTierBackground = size;
createStyles.guildTierNoneIcon = { width: 18, height: 30 };
createStyles.guildTierIcon = { width: 24, height: 24 };
createStyles.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_9 = createStyles.createStyles(createStyles);
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
    let obj = { style: tmp.guildTierBackground, children: null };
    obj = {
      source: Tier048Px.getTier048PxSource(theme),
      style: tmp.guildTierNoneIcon,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no",
    };
    obj.children = React5(React4, obj);
    return React5(React3, obj);
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
        num2 = (tmp5 / tmp7) * 100;
      }
    }
    obj = { style: tmp.guildTierProgressCircle, percent: num2, children: null };
    const obj1 = { style: tmp.guildTierBackground, children: null };
    if (null != guild) {
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (tmp13.TIER_1 === premiumTier) {
          let tier048PxSource = tmp2(13512);
        } else if (tmp13.TIER_2 === premiumTier) {
          tier048PxSource = tmp2(13513);
        } else if (tmp13.TIER_3 === premiumTier) {
          tier048PxSource = tmp2(13514);
        }
      }
      const obj2 = {
        source: tier048PxSource,
        style: tmp.guildTierIcon,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no",
      };
      const items = [tmp8(tmp12, obj2)];
      const obj3 = {
        style: tmp.guildTierName,
        variant: "text-xs/semibold",
        color: "interactive-text-active",
        children: null,
      };
      let tmp19Result = tmp19(4454);
      obj3.children = tmp19Result.getTierName(guild.premiumTier);
      items[1] = tmp8(tmp19(4556).Text, obj3);
      obj1.children = items;
      obj.children = tmp10(tmp11, obj1);
      return tmp8(tmp9, obj);
    }
    tmp19Result = tmp19(13508);
    tier048PxSource = tmp19Result.getTier048PxSource(theme);
  }
}
