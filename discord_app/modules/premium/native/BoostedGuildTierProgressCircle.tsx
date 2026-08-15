// discord_app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getTier048PxSource } from "../../../design/components/Illustration/native/redesign/generated/Tier048Px.tsx";
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
import { useGuildAppliedBoostCount } from "../powerups/hooks/useGuildPowerupsBoostCount.tsx";

let c3;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c5, BoostedGuildTiers: closure_6 } = ME);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: null, guildTierNoneIcon: null, guildTierIcon: null, guildTierName: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.xxl };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 18, height: 30 };
createCacheKey[3] = { width: 24, height: 24 };
createCacheKey[4] = { lineHeight: 16, marginTop: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let theme;
  ({ guild, theme } = arg0);
  const tmp = createCacheKey();
  useGuildAppliedBoostCount;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    let obj = { style: null, children: null };
    obj[0] = tmp.guildTierBackground;
    obj = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj[0] = getTier048PxSource.getTier048PxSource(theme);
    obj[1] = tmp.guildTierNoneIcon;
    obj[1] = callback(closure_4, obj);
    return callback(closure_3, obj);
  } else {
    const nextGuildTierFromGuild = getGuildTierFromGuild.getNextGuildTierFromGuild(guild.id);
    let tmp7 = null;
    if (null != nextGuildTierFromGuild) {
      tmp7 = table[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp7) {
      num2 = 100;
      if (tmp7 > 0) {
        num2 = tmp5 / tmp7 * 100;
      }
    }
    obj = { style: null, percent: null, children: null };
    obj[0] = tmp.guildTierProgressCircle;
    obj[1] = num2;
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.guildTierBackground;
    if (null != guild) {
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (tmp13.TIER_1 === premiumTier) {
          let tier048PxSource = tmp2(12943);
        } else if (tmp13.TIER_2 === premiumTier) {
          tier048PxSource = tmp2(12944);
        } else if (tmp13.TIER_3 === premiumTier) {
          tier048PxSource = tmp2(12945);
        }
      }
      const obj2 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      obj2[0] = tier048PxSource;
      obj2[1] = tmp.guildTierIcon;
      const items = [tmp8(tmp12, obj2), ];
      const obj3 = { style: null, variant: "text-xs/semibold", color: "interactive-text-active", children: null };
      obj3[0] = tmp.guildTierName;
      let tmp19Result = tmp19(4266);
      obj3[3] = tmp19Result.getTierName(guild.premiumTier);
      items[1] = tmp8(tmp19(4734).Text, obj3);
      obj1[1] = items;
      obj[2] = tmp10(tmp11, obj1);
      return tmp8(tmp9, obj);
    }
    tmp19Result = tmp19(12939);
    tier048PxSource = tmp19Result.getTier048PxSource(theme);
    const obj10 = getGuildTierFromGuild;
  }
};