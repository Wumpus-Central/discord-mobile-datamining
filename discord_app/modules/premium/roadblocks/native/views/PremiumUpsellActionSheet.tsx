// === Module 6203: AlwaysCompressImagesSwitch ===

// Module 6203 (AlwaysCompressImagesSwitch)
import useAPNGPlayerControls from "useAPNGPlayerControls";
import getSystemLocale from "getSystemLocale";
import { View } from "getKestrelConfig";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { ApplicationStreamFPS } from "RESOLUTION_720";
import jsxProd from "combined";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let map1;
let unpackModuleId;
const require = arg1;
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [CHANNEL_SIDEBAR_WIDTH];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = React.useCallback((dataSavingMode) => {
    let obj = callback(table[28]);
    obj = { dataSavingMode };
    const result = obj.updatedUnsyncedSettings(obj);
  }, []);
  let tmp6 = null;
  if (callback(React.useState(!stateFromStores), 1)[0]) {
    tmp6 = null;
    if (!isKestrelTreatment.isKestrelTreatment) {
      obj = { style: null, children: null };
      obj[0] = tmp.compressionContainer;
      obj = { start: true, end: true, label: null, value: null, onValueChange: null, subLabel: null };
      const intl = tmp2(1236).intl;
      obj[2] = intl.string(tmp2(1236).t.ix8XIj);
      obj[3] = stateFromStores;
      obj[4] = callback;
      const obj1 = { style: null, variant: "text-xs/normal", children: null };
      obj1[0] = tmp.compressionHint;
      const intl2 = tmp2(1236).intl;
      obj1[2] = intl2.string(tmp2(1236).t["wC0+Ph"]);
      obj[5] = callback2(tmp2(4189).Text, obj1);
      obj[1] = callback2(tmp2(5559).TableSwitchRow, obj);
      tmp6 = callback2(View, obj);
    }
  }
  return tmp6;
}
function PremiumUpsellImage(arg0) {
  let image;
  let style;
  let useReducedMotion;
  ({ image, style, useReducedMotion } = arg0);
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        obj = { url: null, style: null, autoplay: true };
        obj[0] = image.uri;
        obj[1] = style;
        let tmp5 = callback2(require(6210) /* useAPNGPlayerControls */.APNGPlayer, obj);
      }
      return tmp5;
    }
  }
  obj = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = callback2(importDefault(5145), obj);
}
({ PremiumSubscriptionSKUs: unpackModuleId, PremiumTypes: closure_12, PremiumUpsellTypes: map1 } = GuildFeatures);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = ME);
({ Fragment: closure_19, jsx: closure_20, jsxs: closure_21 } = jsxProd);
createCacheKey = { image: null, text: null, betaTag: null, description: null, textContainer: null, buttonContainer: null, compressionContainer: null, compressionHint: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
createCacheKey = { alignSelf: "center", marginTop: require("Themes").space.PX_16, width: 240, height: 144 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", textAlign: "center" };
createCacheKey[2] = { marginLeft: 0 };
createCacheKey[3] = { marginHorizontal: require("Themes").space.PX_16 };
let obj1 = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_8, alignItems: "center", gap: require("Themes").space.PX_8 };
let obj2 = { marginTop: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_8, alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[5] = { marginTop: require("Themes").space.PX_32, gap: require("Themes").space.PX_8 };
let obj3 = { marginTop: require("Themes").space.PX_32, gap: require("Themes").space.PX_8 };
createCacheKey[6] = { marginTop: require("Themes").space.PX_24 };
createCacheKey[7] = { marginTop: 2 };
createCacheKey[8] = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj4 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[9] = { width: "100%", marginHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").space.PX_12 };
let obj5 = { width: "100%", marginHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").space.PX_12 };
createCacheKey[10] = { marginTop: require("Themes").space.PX_32, marginBottom: require("Themes").space.PX_32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { marginTop: require("Themes").space.PX_32, marginBottom: require("Themes").space.PX_32 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(arg0) {
  let featureName;
  let legacyProps;
  ({ featureName, legacyProps } = arg0);
  let useTier0UpsellContent;
  let onViewAllPerks;
  let c3;
  let analyticsLocations;
  const tmp = createCacheKey();
  const tmp2 = legacyProps;
  let stringResult1 = onViewAllPerks;
  let obj = legacyProps(onViewAllPerks[27]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = legacyProps(onViewAllPerks[34]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    let tmp2Result = tmp2(stringResult1[35]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2Result = tmp2(stringResult1[27]);
  const items1 = [handleThemeChange];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => theme.theme);
  const items2 = [handleConnectionOpen];
  const stateFromStores2 = tmp2(stringResult1[27]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp10 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result1 = tmp2(stringResult1[27]);
  let string = useTier0UpsellContent;
  const token = tmp2(stringResult1[14]).useToken(useTier0UpsellContent(stringResult1[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result2 = tmp2(stringResult1[14]);
  let str = "dark";
  const token1 = tmp2(stringResult1[14]).useToken(useTier0UpsellContent(stringResult1[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants3.LIGHT) {
    str = "light";
  }
  const tmp2Result3 = tmp2(stringResult1[14]);
  const premiumTypeDisplayName = tmp2(stringResult1[15]).getPremiumTypeDisplayName(tmp10);
  let kestrelConfig;
  if (featureName === tmp2(stringResult1[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    kestrelConfig = tmp2(stringResult1[17]).getKestrelConfig({ location: "native.PremiumUpsellActionSheet" });
    const tmp2Result5 = tmp2(stringResult1[17]);
  }
  let effectiveKestrelLimit;
  if (null != kestrelConfig) {
    const tmp2Result6 = tmp2(stringResult1[17]);
    effectiveKestrelLimit = tmp2Result6.getEffectiveKestrelLimit(kestrelConfig, tmp2(stringResult1[18]).maxFileSize(stateFromStores2));
    const tmp2Result7 = tmp2(stringResult1[18]);
  }
  obj = {};
  obj = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp2(stringResult1[19]).intl;
  obj[0] = intl.string(tmp2(stringResult1[19]).t.jGDYF0);
  const intl2 = tmp2(stringResult1[19]).intl;
  obj[1] = intl2.formatToPlainString(tmp2(stringResult1[19]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj[2] = constants2.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj[3] = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  obj1 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj[4] = obj1;
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj;
  const obj2 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl3 = tmp2(stringResult1[19]).intl;
  obj2[0] = intl3.string(tmp2(stringResult1[19]).t.zY5PPb);
  const intl4 = tmp2(stringResult1[19]).intl;
  obj2[1] = intl4.formatToPlainString(tmp2(stringResult1[19]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj2[2] = constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj2[3] = constants.EMOJI_EVERYWHERE_UPSELL;
  const tmp2Result4 = tmp2(stringResult1[15]);
  obj2[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj2;
  const obj4 = { title: null, showBetaBadge: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl5 = tmp2(stringResult1[19]).intl;
  obj4[0] = intl5.string(tmp2(stringResult1[19]).t["G+pngo"]);
  let enabled;
  if (kestrelConfig != null) {
    enabled = kestrelConfig.enabled;
  }
  obj4[1] = true === enabled;
  const obj5 = { children: null };
  const obj3 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj5[0] = tmp2(stringResult1[18]).fileUploadLimitRoadblockDescription({
    guildId: stateFromStores2,
    maxSize: effectiveKestrelLimit,
    onClick() {
      const obj = useTier0UpsellContent(onViewAllPerks[20]);
      obj.openURL(useTier0UpsellContent(onViewAllPerks[21]).getArticleURL(constants.NITRO_FAQ));
    }
  });
  obj4[2] = callback2(closure_19, obj5);
  obj4[3] = constants2.PREMIUM_UPSELL_FILE_UPLOAD;
  obj4[4] = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj6 = {
    guildId: stateFromStores2,
    maxSize: effectiveKestrelLimit,
    onClick() {
      const obj = useTier0UpsellContent(onViewAllPerks[20]);
      obj.openURL(useTier0UpsellContent(onViewAllPerks[21]).getArticleURL(constants.NITRO_FAQ));
    }
  };
  const tmp2Result8 = tmp2(stringResult1[18]);
  obj4[5] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj4;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl6 = tmp2(stringResult1[19]).intl;
  obj8[0] = intl6.string(tmp2(stringResult1[19]).t.SI7R9I);
  const intl7 = tmp2(stringResult1[19]).intl;
  obj8[1] = intl7.formatToPlainString(tmp2(stringResult1[19]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj8[2] = constants2.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj8[3] = constants.ANIMATED_EMOJI_UPSELL;
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj8[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj8;
  const obj10 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = tmp2(stringResult1[19]).intl;
  obj10[0] = intl8.string(tmp2(stringResult1[19]).t.p0I2Bk);
  const intl9 = tmp2(stringResult1[19]).intl;
  obj10[1] = intl9.string(tmp2(stringResult1[19]).t.jBqF2k);
  obj10[2] = constants2.PREMIUM_UPSELL_CLIENT_THEMES;
  obj10[3] = constants.CLIENT_THEMES_UPSELL;
  obj10[4] = string(stringResult1[22]);
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.CLIENT_THEMES] = obj10;
  const obj11 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp2(stringResult1[19]).intl;
  obj11[0] = intl10.string(tmp2(stringResult1[19]).t.TYFwcy);
  const intl11 = tmp2(stringResult1[19]).intl;
  obj11[1] = intl11.string(tmp2(stringResult1[19]).t.HDt8ip);
  obj11[2] = constants2.PREMIUM_UPSELL_APP_ICONS;
  obj11[3] = constants.APP_ICON_UPSELL;
  obj11[4] = string(stringResult1[23]);
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.APP_ICONS] = obj11;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = tmp2(stringResult1[19]).intl;
  obj12[0] = intl12.string(tmp2(stringResult1[19]).t.YXk6N7);
  const intl13 = tmp2(stringResult1[19]).intl;
  obj12[1] = intl13.string(tmp2(stringResult1[19]).t["m/HzW8"]);
  obj12[2] = constants2.PREMIUM_UPSELL_FOR_LATER;
  obj12[3] = constants.FOR_LATER_MODAL_UPSELL;
  obj12[4] = string(stringResult1[24]);
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.SAVED_MESSAGES] = obj12;
  const obj13 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl14 = tmp2(stringResult1[19]).intl;
  obj13[0] = intl14.string(tmp2(stringResult1[19]).t.ETZQx5);
  const intl15 = tmp2(stringResult1[19]).intl;
  obj13[1] = intl15.formatToPlainString(tmp2(stringResult1[19]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj13[2] = constants2.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj13[3] = constants.STREAM_QUALITY_UPSELL;
  obj13[4] = string(stringResult1[25]);
  const obj14 = { fps: ApplicationStreamFPS.FPS_60 };
  const obj9 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const items3 = [token, token1];
  obj13[5] = { colors: items3, start: tmp2(stringResult1[26]).HorizontalGradient.START, end: tmp2(stringResult1[26]).HorizontalGradient.END };
  obj[tmp2(stringResult1[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj13;
  c3 = tmp20;
  analyticsLocations = string(stringResult1[36])().analyticsLocations;
  const obj15 = { colors: items3, start: tmp2(stringResult1[26]).HorizontalGradient.START, end: tmp2(stringResult1[26]).HorizontalGradient.END };
  const items4 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores3 = tmp2(stringResult1[27]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const items5 = [obj[featureName], analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = analyticsLocations.useEffect(() => {
    let obj = useTier0UpsellContent(onViewAllPerks[37]);
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    obj = {};
    const merged = Object.assign(analyticsProperties);
    let upsellType;
    if (_undefined != null) {
      upsellType = _undefined.upsellType;
    }
    obj.type = upsellType;
    obj.location = location;
    obj.location_stack = analyticsLocations;
    obj.sku_id = legacyProps(onViewAllPerks[15]).castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? outer1_11.TIER_0 : outer1_11.TIER_2);
    obj.track(outer1_14.PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp23 = string(stringResult1[38])(useTier0UpsellContent, onViewAllPerks, obj[featureName].analyticsPage);
  const loading = tmp23.loading;
  [][0] = onViewAllPerks;
  if (null == obj[featureName]) {
    return null;
  } else if (null == tmp20.image) {
    const items6 = [tmp28, , , ];
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.textContainer;
    let tmp19Result = null;
    if (true === tmp20.showBetaBadge) {
      const obj17 = { size: null, gradient: true, style: null };
      obj17[0] = tmp2(stringResult1[44]).BetaSizes.SMALL;
      obj17[2] = tmp.betaTag;
      tmp19Result = tmp19(string(stringResult1[44]), obj17);
      const stringResult = string(stringResult1[44]);
    }
    const items7 = [tmp19Result, , ];
    const obj18 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    obj18[0] = tmp.text;
    obj18[3] = tmp20.title;
    items7[1] = tmp19(tmp2(stringResult1[30]).Text, obj18);
    const obj19 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [, ];
    ({ text: arr10[0], description: arr10[1] } = tmp);
    obj19[0] = items8;
    obj19[2] = tmp20.description;
    items7[2] = tmp19(tmp2(stringResult1[30]).Text, obj19);
    obj16[1] = items7;
    items6[1] = tmp26(tmp27, obj16);
    tmp19Result = null;
    if (featureName === tmp2(stringResult1[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      const obj20 = { isKestrelTreatment: null };
      obj20[0] = true === tmp20.showBetaBadge;
      tmp19Result = tmp19(AlwaysCompressImagesSwitch, obj20);
    }
    items6[2] = tmp19Result;
    let obj21 = { style: null, children: null };
    obj21[0] = tmp.buttonContainer;
    let Button = tmp2(stringResult1[45]).Button;
    let obj22 = { loading: null, onPress: null, text: null, icon: null };
    obj22[0] = loading;
    let onPress = null;
    if (!loading) {
      onPress = tmp23.onPress;
    }
    obj22[1] = onPress;
    let intl16 = tmp2(stringResult1[19]).intl;
    let string2 = intl16.string;
    let t = tmp2(stringResult1[19]).t;
    if (useTier0UpsellContent) {
      let string2Result = string2(t.cM8bbx);
    } else {
      string2Result = string2(t["8x0jKT"]);
    }
    t = { startExpanded: true, children: null };
    const obj23 = { children: null };
    obj22[2] = string2Result;
    obj22[3] = string(stringResult1[46]);
    obj22 = [, ];
    obj22[0] = tmp19(Button, obj22);
    const obj24 = { variant: "secondary", text: null, onPress: null };
    intl16 = tmp2(stringResult1[19]).intl;
    string = intl16.string;
    stringResult1 = string(tmp2(stringResult1[19]).t.PcTCB7);
    obj24[1] = stringResult1;
    obj24[2] = tmp24;
    Button = tmp19(tmp2(stringResult1[45]).Button, obj24);
    obj22[1] = Button;
    obj21[1] = obj22;
    obj21 = tmp26(tmp27, obj21);
    items6[3] = obj21;
    obj23[0] = items6;
    string2 = tmp26(tmp27, obj23);
    t[1] = string2;
    tmp19(tmp25, t);
    const tmp19Result1 = tmp19(Button, obj22);
  } else if (null != tmp20.imageGradientBackground) {
    const obj25 = { style: null, children: null };
    obj25[0] = tmp.imageGradientBackgroundContainer;
    const obj26 = { colors: null, start: null, end: null, style: null, children: null };
    obj26[0] = tmp20.imageGradientBackground.colors;
    obj26[1] = tmp20.imageGradientBackground.start;
    obj26[2] = tmp20.imageGradientBackground.end;
    obj26[3] = tmp.imageGradientBackground;
    const obj27 = { image: null, style: null, useReducedMotion: null };
    obj27[0] = tmp20.image;
    const items9 = [, ];
    ({ image: arr7[0], imageInGradientBackground: arr7[1] } = tmp);
    obj27[1] = items9;
    obj27[2] = stateFromStores3;
    obj26[4] = tmp19(PremiumUpsellImage, obj27);
    obj25[1] = tmp19(string(stringResult1[43]), obj26);
    let tmp19Result3 = tmp19(tmp27, obj25);
    const stringResult2 = string(stringResult1[43]);
  } else {
    const obj28 = { image: null, style: null, useReducedMotion: null };
    obj28[0] = tmp20.image;
    obj28[1] = tmp.image;
    obj28[2] = stateFromStores3;
    tmp19Result3 = tmp19(PremiumUpsellImage, obj28);
  }
};