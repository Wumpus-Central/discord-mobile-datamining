// === Module 8480: AlwaysCompressImagesSwitch ===

// Module 8480 (AlwaysCompressImagesSwitch)
import set from "set" /* 500 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5449 */;
import useAPNGPlayerControls from "useAPNGPlayerControls" /* 9217 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_7 from "handleThemeChange" /* 1302 */;
import closure_8 from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import closure_9 from "handleConnectionOpen" /* 4197 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import ME from "ME" /* 676 */;
import { ApplicationStreamFPS } from "RESOLUTION_720" /* 4524 */;
import SAVED_BOOKMARKS_MAX from "SAVED_BOOKMARKS_MAX" /* 8481 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = React.useCallback((dataSavingMode) => {
    let obj = callback(table[35]);
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
      obj1 = { style: null, variant: "text-xs/normal", children: null };
      obj1[0] = tmp.compressionHint;
      const intl2 = tmp2(1236).intl;
      obj1[2] = intl2.string(tmp2(1236).t["wC0+Ph"]);
      obj[5] = callback2(tmp2(4734).Text, obj1);
      obj[1] = callback2(tmp2(7178).TableSwitchRow, obj);
      tmp6 = callback2(View, obj);
    }
  }
  return tmp6;
}
function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  let obj = set;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        obj = { url: null, style: null, autoplay: true };
        obj[0] = image.uri;
        obj[1] = style;
        let tmp5 = callback2(useAPNGPlayerControls.APNGPlayer, obj);
      }
      return tmp5;
    }
  }
  obj = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = callback2(preloadDefault, obj);
}
({ PremiumSubscriptionSKUs: unpackModuleId, PremiumTypes: closure_12, PremiumUpsellTypes: map1 } = GuildFeatures);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = ME);
({ SAVED_BOOKMARKS_MAX: closure_19, SAVED_REMINDERS_MAX: closure_20 } = SAVED_BOOKMARKS_MAX);
({ Fragment: closure_21, jsx: closure_22, jsxs: closure_23 } = jsxProd);
createCacheKey = { image: null, text: null, betaTag: null, description: null, textContainer: null, buttonContainer: null, compressionContainer: null, compressionHint: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
createCacheKey = { alignSelf: "center", marginTop: ThemesDefault.space.PX_16, width: 240, height: 144 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", textAlign: "center" };
createCacheKey[2] = { marginLeft: 0 };
createCacheKey[3] = { marginHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_8, alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj2 = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_8, alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginTop: ThemesDefault.space.PX_32, gap: ThemesDefault.space.PX_8 };
let obj3 = { marginTop: ThemesDefault.space.PX_32, gap: ThemesDefault.space.PX_8 };
createCacheKey[6] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[7] = { marginTop: 2 };
createCacheKey[8] = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj4 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[9] = { width: "100%", marginHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.space.PX_12 };
let obj5 = { width: "100%", marginHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.space.PX_12 };
createCacheKey[10] = { marginTop: ThemesDefault.space.PX_32, marginBottom: ThemesDefault.space.PX_32 };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let obj6 = { marginTop: ThemesDefault.space.PX_32, marginBottom: ThemesDefault.space.PX_32 };
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(arg0) {
  ({ featureName, legacyProps } = arg0);
  let _require = legacyProps;
  ({ subfeatureName, analyticsLocations } = arg0);
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let analyticsLocations2;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let React;
  const tmp = callback3();
  const tmp2 = _require;
  let stringResult3 = useTier0UpsellContent;
  let obj = _require(useTier0UpsellContent[34]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let string = analyticsLocations2;
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[41])(analyticsLocations).analyticsLocations;
  obj1 = _require(useTier0UpsellContent[42]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    let tmp2Result = tmp2(stringResult3[43]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2Result = tmp2(stringResult3[34]);
  const items1 = [closure_7];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => theme.theme);
  const items2 = [closure_9];
  const stateFromStores2 = tmp2(stringResult3[34]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp11 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result1 = tmp2(stringResult3[34]);
  const tmp5 = analyticsLocations;
  const token = tmp2(stringResult3[15]).useToken(string(stringResult3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result2 = tmp2(stringResult3[15]);
  let str = "dark";
  const token1 = tmp2(stringResult3[15]).useToken(string(stringResult3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants3.LIGHT) {
    str = "light";
  }
  const tmp2Result3 = tmp2(stringResult3[15]);
  const premiumTypeDisplayName = tmp2(stringResult3[16]).getPremiumTypeDisplayName(tmp11);
  let kestrelConfig;
  if (featureName === tmp2(stringResult3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    kestrelConfig = tmp2(stringResult3[18]).getKestrelConfig({ location: "native.PremiumUpsellActionSheet" });
    const tmp2Result5 = tmp2(stringResult3[18]);
  }
  let effectiveKestrelLimit;
  if (null != kestrelConfig) {
    const tmp2Result6 = tmp2(stringResult3[18]);
    effectiveKestrelLimit = tmp2Result6.getEffectiveKestrelLimit(kestrelConfig, tmp2(stringResult3[19]).maxFileSize(stateFromStores2));
    const tmp2Result7 = tmp2(stringResult3[19]);
  }
  const tmp17 = subfeatureName === tmp2(stringResult3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp17;
  if (subfeatureName === tmp2(stringResult3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = tmp2(stringResult3[21]).getForLaterLimit("native.PremiumUpsellActionSheet", tmp17);
    const tmp2Result8 = tmp2(stringResult3[21]);
  }
  const tmp19 = tmp17 ? closure_20 : closure_19;
  obj = {};
  obj = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp2(stringResult3[22]).intl;
  obj[0] = intl.string(tmp2(stringResult3[22]).t.jGDYF0);
  const intl2 = tmp2(stringResult3[22]).intl;
  obj[1] = intl2.formatToPlainString(tmp2(stringResult3[22]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj[2] = constants2.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj[3] = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  obj1 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj[4] = obj1;
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj;
  const obj2 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl3 = tmp2(stringResult3[22]).intl;
  obj2[0] = intl3.string(tmp2(stringResult3[22]).t.zY5PPb);
  const intl4 = tmp2(stringResult3[22]).intl;
  obj2[1] = intl4.formatToPlainString(tmp2(stringResult3[22]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj2[2] = constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj2[3] = constants.EMOJI_EVERYWHERE_UPSELL;
  const tmp2Result4 = tmp2(stringResult3[16]);
  obj2[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj2;
  const obj4 = { title: null, showBetaBadge: null, isKestrelRaisedCap: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl5 = tmp2(stringResult3[22]).intl;
  obj4[0] = intl5.string(tmp2(stringResult3[22]).t["G+pngo"]);
  let enabled;
  if (kestrelConfig != null) {
    enabled = kestrelConfig.enabled;
  }
  obj4[1] = true === enabled && true !== kestrelConfig.isGA;
  let enabled1;
  if (kestrelConfig != null) {
    enabled1 = kestrelConfig.enabled;
  }
  obj4[2] = true === enabled1;
  const obj3 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj5 = { guildId: stateFromStores2, maxSize: effectiveKestrelLimit, hideLearnMore: null, onClick: null };
  let isGA;
  if (kestrelConfig != null) {
    isGA = kestrelConfig.isGA;
  }
  const tmp2Result9 = tmp2(stringResult3[19]);
  obj5[2] = true === isGA;
  obj5[3] = function onClick() {
    const obj = analyticsLocations2(useTier0UpsellContent[23]);
    obj.openURL(analyticsLocations2(useTier0UpsellContent[24]).getArticleURL(constants.NITRO_FAQ));
  };
  obj4[3] = closure_22(closure_21, { children: tmp2(stringResult3[19]).fileUploadLimitRoadblockDescription(obj5) });
  obj4[4] = constants2.PREMIUM_UPSELL_FILE_UPLOAD;
  obj4[5] = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj6 = { children: tmp2(stringResult3[19]).fileUploadLimitRoadblockDescription(obj5) };
  obj4[6] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj4;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl6 = tmp2(stringResult3[22]).intl;
  obj8[0] = intl6.string(tmp2(stringResult3[22]).t.SI7R9I);
  const intl7 = tmp2(stringResult3[22]).intl;
  obj8[1] = intl7.formatToPlainString(tmp2(stringResult3[22]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj8[2] = constants2.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj8[3] = constants.ANIMATED_EMOJI_UPSELL;
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj8[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj8;
  const obj10 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = tmp2(stringResult3[22]).intl;
  obj10[0] = intl8.string(tmp2(stringResult3[22]).t.p0I2Bk);
  const intl9 = tmp2(stringResult3[22]).intl;
  obj10[1] = intl9.string(tmp2(stringResult3[22]).t.jBqF2k);
  obj10[2] = constants2.PREMIUM_UPSELL_CLIENT_THEMES;
  obj10[3] = constants.CLIENT_THEMES_UPSELL;
  obj10[4] = string(stringResult3[25]);
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.CLIENT_THEMES] = obj10;
  const obj11 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp2(stringResult3[22]).intl;
  obj11[0] = intl10.string(tmp2(stringResult3[22]).t.TYFwcy);
  const intl11 = tmp2(stringResult3[22]).intl;
  obj11[1] = intl11.string(tmp2(stringResult3[22]).t.HDt8ip);
  obj11[2] = constants2.PREMIUM_UPSELL_APP_ICONS;
  obj11[3] = constants.APP_ICON_UPSELL;
  obj11[4] = string(stringResult3[26]);
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.APP_ICONS] = obj11;
  if (null == forLaterLimit) {
    const intl13 = tmp2(stringResult3[22]).intl;
    let stringResult = intl13.string(tmp2(stringResult3[22]).t.YXk6N7);
  } else {
    const intl12 = tmp2(stringResult3[22]).intl;
    let t = tmp2(stringResult3[22]).t;
    const obj12 = { premiumMax: null };
    obj12[0] = tmp19;
    stringResult = intl12.formatToPlainString(tmp17 ? t["cpj9o/"] : t.Oxm3Sq, obj12);
  }
  const obj13 = { title: stringResult, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  if (null == forLaterLimit) {
    const intl15 = tmp2(stringResult3[22]).intl;
    let stringResult1 = intl15.string(tmp2(stringResult3[22]).t["m/HzW8"]);
  } else {
    const intl14 = tmp2(stringResult3[22]).intl;
    const t2 = tmp2(stringResult3[22]).t;
    const obj14 = { children: null };
    const obj15 = { max: null, premiumMax: null, onClick: null };
    obj15[0] = forLaterLimit;
    obj15[1] = tmp19;
    obj15[2] = function onClick() {
      analyticsLocations2(useTier0UpsellContent[27]).hideActionSheet(lib(useTier0UpsellContent[28]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[27]);
      const SavedMessageSortTypes = lib(useTier0UpsellContent[30]).SavedMessageSortTypes;
      lib(useTier0UpsellContent[29]).showForLaterModal(lib ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
    };
    obj14[0] = intl14.format(tmp17 ? t2.NRF0Wh : t2.o5OLyw, obj15);
    stringResult1 = tmp24(tmp25, obj14);
  }
  obj13[2] = stringResult1;
  obj13[3] = constants2.PREMIUM_UPSELL_FOR_LATER;
  obj13[4] = constants.FOR_LATER_MODAL_UPSELL;
  obj13[5] = string(stringResult3[31]);
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.SAVED_MESSAGES] = obj13;
  const obj16 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl16 = tmp2(stringResult3[22]).intl;
  obj16[0] = intl16.string(tmp2(stringResult3[22]).t.ETZQx5);
  const intl17 = tmp2(stringResult3[22]).intl;
  obj16[1] = intl17.formatToPlainString(tmp2(stringResult3[22]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj16[2] = constants2.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj16[3] = constants.STREAM_QUALITY_UPSELL;
  obj16[4] = string(stringResult3[32]);
  const obj17 = { fps: ApplicationStreamFPS.FPS_60 };
  const obj9 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const items3 = [token, token1];
  obj16[5] = { colors: items3, start: tmp2(stringResult3[33]).HorizontalGradient.START, end: tmp2(stringResult3[33]).HorizontalGradient.END };
  obj[tmp2(stringResult3[17]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj16;
  React = tmp29;
  const obj18 = { colors: items3, start: tmp2(stringResult3[33]).HorizontalGradient.START, end: tmp2(stringResult3[33]).HorizontalGradient.END };
  const items4 = [closure_6];
  const stateFromStores3 = tmp2(stringResult3[34]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const items5 = [obj[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations2(useTier0UpsellContent[44]);
    let analyticsProperties;
    if (lib != null) {
      analyticsProperties = lib.analyticsProperties;
    }
    obj = {};
    const merged = Object.assign(analyticsProperties);
    let upsellType;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj.type = upsellType;
    obj.location = location;
    obj.location_stack = analyticsLocations2;
    obj.sku_id = lib(useTier0UpsellContent[16]).castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? closure_1_11.TIER_0 : closure_1_11.TIER_2);
    obj.track(closure_1_14.PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp32 = string(stringResult3[45])(useTier0UpsellContent, onViewAllPerks, obj[featureName].analyticsPage, undefined, tmp5);
  const loading = tmp32.loading;
  [][0] = onViewAllPerks;
  if (null == obj[featureName]) {
    return null;
  } else if (null == tmp29.image) {
    const items6 = [tmp37, , , ];
    const obj19 = { style: null, children: null };
    obj19[0] = tmp.textContainer;
    let tmp24Result = null;
    if (true === tmp29.showBetaBadge) {
      const obj20 = { size: null, gradient: true, style: null };
      obj20[0] = tmp2(stringResult3[49]).BetaSizes.SMALL;
      obj20[2] = tmp.betaTag;
      tmp24Result = tmp24(string(stringResult3[49]), obj20);
      const stringResult2 = string(stringResult3[49]);
    }
    const items7 = [tmp24Result, , ];
    const obj21 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    obj21[0] = tmp.text;
    obj21[3] = tmp29.title;
    items7[1] = tmp24(tmp2(stringResult3[37]).Text, obj21);
    const obj22 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [, ];
    ({ text: arr10[0], description: arr10[1] } = tmp);
    obj22[0] = items8;
    obj22[2] = tmp29.description;
    items7[2] = tmp24(tmp2(stringResult3[37]).Text, obj22);
    obj19[1] = items7;
    items6[1] = tmp35(tmp36, obj19);
    tmp24Result = null;
    if (featureName === tmp2(stringResult3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      const obj23 = { isKestrelTreatment: null };
      obj23[0] = true === tmp29.isKestrelRaisedCap;
      tmp24Result = tmp24(AlwaysCompressImagesSwitch, obj23);
    }
    items6[2] = tmp24Result;
    let obj24 = { style: null, children: null };
    obj24[0] = tmp.buttonContainer;
    let Button = tmp2(stringResult3[50]).Button;
    let obj25 = { loading: null, onPress: null, text: null, icon: null };
    obj25[0] = loading;
    let onPress = null;
    if (!loading) {
      onPress = tmp32.onPress;
    }
    obj25[1] = onPress;
    let intl18 = tmp2(stringResult3[22]).intl;
    let string2 = intl18.string;
    t = tmp2(stringResult3[22]).t;
    if (useTier0UpsellContent) {
      let string2Result = string2(t.cM8bbx);
    } else {
      string2Result = string2(t["8x0jKT"]);
    }
    t = { startExpanded: true, children: null };
    const obj26 = { children: null };
    obj25[2] = string2Result;
    obj25[3] = string(stringResult3[51]);
    obj25 = [, ];
    obj25[0] = tmp24(Button, obj25);
    const obj27 = { variant: "secondary", text: null, onPress: null };
    intl18 = tmp2(stringResult3[22]).intl;
    string = intl18.string;
    stringResult3 = string(tmp2(stringResult3[22]).t.PcTCB7);
    obj27[1] = stringResult3;
    obj27[2] = tmp33;
    Button = tmp24(tmp2(stringResult3[50]).Button, obj27);
    obj25[1] = Button;
    obj24[1] = obj25;
    obj24 = tmp35(tmp36, obj24);
    items6[3] = obj24;
    obj26[0] = items6;
    string2 = tmp35(tmp36, obj26);
    t[1] = string2;
    tmp24(tmp34, t);
    const tmp24Result1 = tmp24(Button, obj25);
  } else if (null != tmp29.imageGradientBackground) {
    const obj28 = { style: null, children: null };
    obj28[0] = tmp.imageGradientBackgroundContainer;
    const obj29 = { colors: null, start: null, end: null, style: null, children: null };
    obj29[0] = tmp29.imageGradientBackground.colors;
    obj29[1] = tmp29.imageGradientBackground.start;
    obj29[2] = tmp29.imageGradientBackground.end;
    obj29[3] = tmp.imageGradientBackground;
    const obj30 = { image: null, style: null, useReducedMotion: null };
    obj30[0] = tmp29.image;
    const items9 = [, ];
    ({ image: arr7[0], imageInGradientBackground: arr7[1] } = tmp);
    obj30[1] = items9;
    obj30[2] = stateFromStores3;
    obj29[4] = tmp24(PremiumUpsellImage, obj30);
    obj28[1] = tmp24(string(stringResult3[48]), obj29);
    let tmp24Result3 = tmp24(tmp36, obj28);
    const stringResult4 = string(stringResult3[48]);
  } else {
    const obj31 = { image: null, style: null, useReducedMotion: null };
    obj31[0] = tmp29.image;
    obj31[1] = tmp.image;
    obj31[2] = stateFromStores3;
    tmp24Result3 = tmp24(PremiumUpsellImage, obj31);
  }
};