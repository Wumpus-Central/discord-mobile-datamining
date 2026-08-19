// === Module 12954: FEATURES_PREMIUM_GUILD_USER ===

// Module 12954 (FEATURES_PREMIUM_GUILD_USER)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4310 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 7893 */;
import registerAssetDefault2 from "registerAsset" /* 7902 */;
import registerAssetDefault3 from "registerAsset" /* 7903 */;
import ReactionIcon from "ReactionIcon" /* 7939 */;
import UploadIcon from "UploadIcon" /* 7942 */;
import BoostGemIcon from "BoostGemIcon" /* 7979 */;
import StickerIcon from "StickerIcon" /* 7990 */;
import ShieldUserIcon from "ShieldUserIcon" /* 8859 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9337 */;
import StarIcon from "StarIcon" /* 9410 */;
import HeadphonesIcon from "HeadphonesIcon" /* 11697 */;
import getSubscriptionPlansLoaded from "getSubscriptionPlansLoaded" /* 12853 */;
import registerAssetDefault4 from "registerAsset" /* 12933 */;
import registerAssetDefault5 from "registerAsset" /* 12955 */;
import registerAssetDefault6 from "registerAsset" /* 12958 */;
import registerAssetDefault7 from "registerAsset" /* 12959 */;
import registerAssetDefault8 from "registerAsset" /* 12960 */;
import registerAssetDefault9 from "registerAsset" /* 12961 */;
import registerAssetDefault10 from "registerAsset" /* 12962 */;
import registerAssetDefault11 from "registerAsset" /* 12963 */;
import getGuildSubscriptionNoGuildsSource from "getGuildSubscriptionNoGuildsSource" /* 12964 */;
import PricingSubheadingCopyDefault from "PricingSubheadingCopy" /* 12968 */;
import GuildBoostingGuildListItemDefault from "GuildBoostingGuildListItem" /* 12969 */;
import PremiumSubscriptionUpsellDefault from "PremiumSubscriptionUpsell" /* 12970 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[9] = createCacheKey;
createCacheKey[10] = { marginTop: 32 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: require("registerAsset"), label: null, IconComponent: null, color: null };
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t["GS+bL0"]);
    obj[2] = require("BoostGemIcon").BoostGemIcon;
    obj[3] = require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj = { icon: require("registerAsset"), label: null, IconComponent: null };
    intl2 = require("getSystemLocale").intl;
    obj[1] = intl2.string(require("getSystemLocale").t.a7LWeM);
    obj[2] = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = callback2(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
      return callback3(callback(12956).BoostTier3Icon, obj);
    };
    items[1] = obj;
    obj1 = { icon: require("registerAsset"), label: null, color: null, IconComponent: null };
    intl3 = require("getSystemLocale").intl;
    obj1[1] = intl3.string(require("getSystemLocale").t.E76jz8);
    obj1[2] = require("Themes").unsafe_rawColors.YELLOW_300;
    obj1[3] = require("ShieldUserIcon").ShieldUserIcon;
    items[2] = obj1;
    return items;
  }
}
const result = require("obj132").fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  obj1 = getSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj1.useSubscriptionPlansLoaded();
  let obj2 = getGuildSubscriptionNoGuildsSource;
  const guildSubscriptionNoGuildsSource = obj2.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.imgPremiumGuild, source: registerAssetDefault };
  const items1 = [callback(closure_4, obj1), , , ];
  obj2 = { style: tmp.logoPremiumGuild, source: null };
  const tmp8 = useThemeDefault();
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = registerAssetDefault2;
  } else {
    tmp7Result = registerAssetDefault3;
  }
  obj2[1] = tmp7Result;
  items1[1] = callback(closure_4, obj2);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj3[4] = intl.string(getSystemLocale.t.hw6WTd);
  items1[2] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj4[2] = intl2.string(getSystemLocale.t.K5jBdG);
  items1[3] = callback(Text.Text, obj4);
  obj[1] = items1;
  const items2 = [callback(closure_3, obj), , , , , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getSystemLocale.intl;
  obj5[4] = intl3.string(getSystemLocale.t.RvfRTB);
  items2[1] = callback(Text.Text, obj5);
  const obj6 = { style: tmp.features, features: null };
  tmp7Result = PremiumFeatureListDefault;
  obj6[1] = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = callback(tmp7Result, obj6);
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = getSystemLocale.intl;
  obj7[4] = intl4.string(getSystemLocale.t["/pVhjb"]);
  items2[3] = callback(Text.Text, obj7);
  const obj8 = { style: tmp.features, features: null };
  const obj9 = { icon: null, label: null, IconComponent: null, color: null };
  tmp2Result = AccessibilityAnnouncer;
  obj9[0] = registerAssetDefault7;
  const intl5 = getSystemLocale.intl;
  obj9[1] = intl5.string(getSystemLocale.t.Ts7BVI);
  obj9[2] = ReactionIcon.ReactionIcon;
  obj9[3] = ThemesDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj9, , , , ];
  const obj10 = { icon: registerAssetDefault8, label: null, IconComponent: null, color: null };
  const intl6 = getSystemLocale.intl;
  obj10[1] = intl6.string(getSystemLocale.t.QcJbt6);
  obj10[2] = StickerIcon.StickerIcon;
  obj10[3] = ThemesDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj10;
  const obj11 = { icon: registerAssetDefault9, label: null, color: "#4173da", IconComponent: null };
  const intl7 = getSystemLocale.intl;
  obj11[1] = intl7.string(getSystemLocale.t.rFNkf5);
  obj11[3] = HeadphonesIcon.HeadphonesIcon;
  items3[2] = obj11;
  const obj12 = { icon: registerAssetDefault10, label: null, IconComponent: null, color: null };
  const intl8 = getSystemLocale.intl;
  obj12[1] = intl8.string(getSystemLocale.t["BpjjS/"]);
  obj12[2] = UploadIcon.UploadIcon;
  obj12[3] = ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj12;
  const obj13 = { icon: registerAssetDefault11, label: null, IconComponent: null, color: null };
  const intl9 = getSystemLocale.intl;
  obj13[1] = intl9.string(getSystemLocale.t["9g5Lgb"]);
  obj13[2] = StarIcon.StarIcon;
  obj13[3] = ThemesDefault.unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj13;
  obj8[1] = items3;
  items2[4] = callback(PremiumFeatureListDefault, obj8);
  const obj14 = { style: tmp.upsell, children: null };
  let tmp13Result = null;
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp13Result = callback(PricingSubheadingCopyDefault, {});
    }
  }
  const items4 = [tmp13Result, , ];
  if (isInReverseTrial) {
    items4[1] = null;
    tmp13Result = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium: null, style: null };
      obj15[0] = onLearnMorePremium;
      obj15[1] = tmp.subscriptionUpsell;
      tmp13Result = callback(PremiumSubscriptionUpsellDefault, obj15);
    }
    items4[2] = tmp13Result;
    obj14[1] = items4;
    items2[5] = callback(closure_3, obj14);
    obj[1] = items2;
    tmp11Result = callback(closure_3, obj);
  } else {
    const obj16 = { children: null };
    if (stateFromStores) {
      const obj17 = { style: null, variant: "text-md/medium", children: null };
      obj17[0] = tmp.cardText;
      const intl12 = getSystemLocale.intl;
      obj17[2] = intl12.string(getSystemLocale.t.WRzob8);
      const items5 = [callback(Text.Text, obj17), , ];
      const obj18 = { style: null, variant: "text-md/bold", children: null };
      const items6 = [tmp.cardText];
      obj18[0] = items6;
      const intl13 = getSystemLocale.intl;
      obj18[2] = intl13.string(getSystemLocale.t.j4bXcm);
      items5[1] = callback(Text.Text, obj18);
      const obj19 = { style: null };
      obj19[0] = tmp.guildList;
      items5[2] = callback(GuildBoostingGuildListItemDefault, obj19);
      obj16[0] = items5;
      let tmp19 = obj16;
    } else {
      const obj20 = { style: null, source: null };
      obj20[0] = tmp.imgNoGuilds;
      obj20[1] = guildSubscriptionNoGuildsSource;
      const items7 = [callback(closure_4, obj20), , ];
      const obj21 = { style: null, variant: "text-md/bold", children: null };
      const items8 = [tmp.cardText];
      obj21[0] = items8;
      const intl10 = getSystemLocale.intl;
      obj21[2] = intl10.string(getSystemLocale.t.FHm4bZ);
      items7[1] = callback(Text.Text, obj21);
      const obj22 = { style: null, variant: "text-md/medium", children: null };
      obj22[0] = tmp.cardText;
      const intl11 = getSystemLocale.intl;
      obj22[2] = intl11.string(getSystemLocale.t.PSLiiu);
      items7[2] = callback(Text.Text, obj22);
      obj16[0] = items7;
      tmp19 = obj16;
    }
    tmp11Result = callback(closure_3, tmp19);
  }
  const tmp7Result1 = PremiumFeatureListDefault;
};
export { FEATURES_PREMIUM_GUILD_USER };