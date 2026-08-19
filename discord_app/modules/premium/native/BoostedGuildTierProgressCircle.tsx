// === Module 12938: BoostedGuildTierProgressCircle ===

// Module 12938 (BoostedGuildTierProgressCircle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4266 */;
import useGuildAppliedBoostCountDefault from "useGuildAppliedBoostCount" /* 4281 */;
import Text from "Text" /* 4734 */;
import getTier048PxSource from "getTier048PxSource" /* 12939 */;
import registerAssetDefault from "registerAsset" /* 12943 */;
import registerAssetDefault2 from "registerAsset" /* 12944 */;
import registerAssetDefault3 from "registerAsset" /* 12945 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c5, BoostedGuildTiers: closure_6 } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.xxl };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 18, height: 30 };
createCacheKey[3] = { width: 24, height: 24 };
createCacheKey[4] = { lineHeight: 16, marginTop: 2 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  ({ guild, theme } = arg0);
  const tmp = callback2();
  useGuildAppliedBoostCountDefault;
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
    obj1 = { style: null, children: null };
    obj1[0] = tmp.guildTierBackground;
    if (null != guild) {
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (constants.TIER_1 === premiumTier) {
          let tier048PxSource = registerAssetDefault;
        } else if (constants.TIER_2 === premiumTier) {
          tier048PxSource = registerAssetDefault2;
        } else if (constants.TIER_3 === premiumTier) {
          tier048PxSource = registerAssetDefault3;
        }
      }
      const obj2 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      obj2[0] = tier048PxSource;
      obj2[1] = tmp.guildTierIcon;
      const items = [callback(tmp12, obj2), ];
      const obj3 = { style: null, variant: "text-xs/semibold", color: "interactive-text-active", children: null };
      obj3[0] = tmp.guildTierName;
      let tmp19Result = getGuildTierFromGuild;
      obj3[3] = tmp19Result.getTierName(guild.premiumTier);
      items[1] = callback(Text.Text, obj3);
      obj1[1] = items;
      obj[2] = tmp10(tmp11, obj1);
      return callback(tmp9, obj);
    }
    tmp19Result = getTier048PxSource;
    tier048PxSource = tmp19Result.getTier048PxSource(theme);
  }
};