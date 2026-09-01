// discord_app/components_native/premium/GuildBoostingUpsell.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import UploadIcon from "../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ReactionIcon from "../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import BoostGemIcon from "../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import PremiumFeatureListDefault from "PremiumFeatureList.tsx";
import StarIcon from "../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import ShieldUserIcon from "../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import StickerIcon from "../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import HeadphonesIcon from "../../design/components/Icon/native/redesign/generated/HeadphonesIcon.tsx";
import getSubscriptionPlansLoaded from "../../modules/billing/hooks/useSubscriptionPlansLoaded.tsx";
import registerAssetDefault from "../../../_runtime/13159_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/13181_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/13184_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/13185_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/13186_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/13187_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/13188_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/13189_registerAsset.js";
import getGuildSubscriptionNoGuildsSource from "../../design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../stores/SortedGuildStore.tsx";
import { FractionalPremiumStates } from "../../modules/premium/PremiumConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Image: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  root: { paddingHorizontal: 16, paddingVertical: 32 },
  title: { marginTop: 16 },
  features: { marginTop: 16 },
  cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" },
  guildList: { marginTop: 16 },
  logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 },
  imgPremiumGuild: { width: 95, height: 65 },
  imgNoGuilds: { width: 178, height: 112, marginTop: 32 },
  header: { alignItems: "center" },
  upsell: null,
  subscriptionUpsell: null,
};
createCacheKey = {
  marginTop: 32,
  paddingTop: 16,
  borderTopWidth: 2 * StyleSheet.hairlineWidth,
  borderTopColor: ThemesDefault.colors.BORDER_SUBTLE,
};
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
    items = [, ,];
    items[0] = obj;
    obj = { icon: require("registerAsset"), label: null, IconComponent: null };
    intl2 = require("getSystemLocale").intl;
    obj[1] = intl2.string(require("getSystemLocale").t.a7LWeM);
    obj[2] = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = callback2(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
      return callback3(callback(13182).BoostTier3Icon, obj);
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
const result = require("set").fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

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
  obj = { style: tmp.root, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.imgPremiumGuild, source: tmp7(12983) };
  const items1 = [callback(closure_4, obj1), , ,];
  obj2 = { style: tmp.logoPremiumGuild, source: null };
  const tmp8 = useThemeDefault();
  const tmp9 = FractionalPremiumStates;
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = tmp7(12992);
  } else {
    tmp7Result = tmp7(12993);
  }
  obj2[1] = tmp7Result;
  items1[1] = callback(closure_4, obj2);
  const obj3 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp2(1236).intl;
  obj3[4] = intl.string(getSystemLocale.t.hw6WTd);
  items1[2] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1236).intl;
  obj4[2] = intl2.string(getSystemLocale.t.K5jBdG);
  items1[3] = callback(Text.Text, obj4);
  obj[1] = items1;
  const items2 = [closure_8(closure_3, obj), , , , ,];
  const obj5 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = tmp2(1236).intl;
  obj5[4] = intl3.string(getSystemLocale.t.RvfRTB);
  items2[1] = callback(Text.Text, obj5);
  const obj6 = { style: tmp.features, features: null };
  tmp7Result = tmp7(8362);
  obj6[1] = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = callback(tmp7Result, obj6);
  const obj7 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl4 = tmp2(1236).intl;
  obj7[4] = intl4.string(getSystemLocale.t["/pVhjb"]);
  items2[3] = callback(Text.Text, obj7);
  const obj8 = { style: tmp.features, features: null };
  const obj9 = { icon: null, label: null, IconComponent: null, color: null };
  tmp2Result = AccessibilityAnnouncer;
  obj9[0] = registerAssetDefault4;
  const intl5 = tmp2(1236).intl;
  obj9[1] = intl5.string(getSystemLocale.t.Ts7BVI);
  obj9[2] = ReactionIcon.ReactionIcon;
  obj9[3] = ThemesDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj9, , , ,];
  const obj10 = { icon: registerAssetDefault5, label: null, IconComponent: null, color: null };
  const intl6 = tmp2(1236).intl;
  obj10[1] = intl6.string(getSystemLocale.t.QcJbt6);
  obj10[2] = StickerIcon.StickerIcon;
  obj10[3] = ThemesDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj10;
  const obj11 = { icon: registerAssetDefault6, label: null, color: "#4173da", IconComponent: null };
  const intl7 = tmp2(1236).intl;
  obj11[1] = intl7.string(getSystemLocale.t.rFNkf5);
  obj11[3] = HeadphonesIcon.HeadphonesIcon;
  items3[2] = obj11;
  const obj12 = { icon: registerAssetDefault7, label: null, IconComponent: null, color: null };
  const intl8 = tmp2(1236).intl;
  obj12[1] = intl8.string(getSystemLocale.t["BpjjS/"]);
  obj12[2] = UploadIcon.UploadIcon;
  obj12[3] = ThemesDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj12;
  const obj13 = { icon: registerAssetDefault8, label: null, IconComponent: null, color: null };
  const intl9 = tmp2(1236).intl;
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
    if (fractionalState === tmp9.NONE) {
      tmp13Result = tmp13(tmp7(13194), {});
    }
  }
  const items4 = [tmp13Result, ,];
  if (isInReverseTrial) {
    items4[1] = null;
    tmp13Result = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium: null, style: null };
      obj15[0] = onLearnMorePremium;
      obj15[1] = tmp.subscriptionUpsell;
      tmp13Result = tmp13(tmp7(13196), obj15);
    }
    items4[2] = tmp13Result;
    obj14[1] = items4;
    items2[5] = tmp11(tmp12, obj14);
    obj[1] = items2;
    tmp11Result = tmp11(tmp12, obj);
  } else {
    const obj16 = { children: null };
    if (stateFromStores) {
      const obj17 = { style: null, variant: "text-md/medium", children: null };
      obj17[0] = tmp.cardText;
      const intl12 = tmp2(1236).intl;
      obj17[2] = intl12.string(tmp2(1236).t.WRzob8);
      const items5 = [tmp13(tmp2(4474).Text, obj17), ,];
      const obj18 = { style: null, variant: "text-md/bold", children: null };
      const items6 = [tmp.cardText];
      obj18[0] = items6;
      const intl13 = tmp2(1236).intl;
      obj18[2] = intl13.string(tmp2(1236).t.j4bXcm);
      items5[1] = tmp13(tmp2(4474).Text, obj18);
      const obj19 = { style: null };
      obj19[0] = tmp.guildList;
      items5[2] = tmp13(tmp7(13195), obj19);
      obj16[0] = items5;
      let tmp19 = obj16;
    } else {
      const obj20 = { style: null, source: null };
      obj20[0] = tmp.imgNoGuilds;
      obj20[1] = guildSubscriptionNoGuildsSource;
      const items7 = [tmp13(tmp14, obj20), ,];
      const obj21 = { style: null, variant: "text-md/bold", children: null };
      const items8 = [tmp.cardText];
      obj21[0] = items8;
      const intl10 = tmp2(1236).intl;
      obj21[2] = intl10.string(tmp2(1236).t.FHm4bZ);
      items7[1] = tmp13(tmp2(4474).Text, obj21);
      const obj22 = { style: null, variant: "text-md/medium", children: null };
      obj22[0] = tmp.cardText;
      const intl11 = tmp2(1236).intl;
      obj22[2] = intl11.string(tmp2(1236).t.PSLiiu);
      items7[2] = tmp13(tmp2(4474).Text, obj22);
      obj16[0] = items7;
      tmp19 = obj16;
    }
    tmp11Result = tmp11(tmp12, tmp19);
  }
}
export { FEATURES_PREMIUM_GUILD_USER };
