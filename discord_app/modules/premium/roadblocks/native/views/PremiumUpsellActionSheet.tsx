// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx
import set from "../../../../../utils/PlatformUtils.tsx";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import useAPNGPlayerControls from "../../../../image/native/APNGPlayer.android.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../a11y/AccessibilityStore.tsx";
import closure_7 from "../../../../user_settings/ThemeStore.tsx";
import closure_8 from "../../../../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_9 from "../../../../../stores/SelectedGuildStore.tsx";
import closure_10 from "../../../../../stores/UserStore.tsx";
import GuildFeatures from "../../../PremiumConstants.tsx";
import ME from "../../../../../Constants.tsx";
import { ApplicationStreamFPS } from "../../../../go_live/StreamSettingsConstants.tsx";
import SAVED_BOOKMARKS_MAX from "../../../../../../discord_common/js/shared/shared-constants/SavedMessagesConstants.tsx";
import { MAX_SCHEDULED_MESSAGES_PER_USER as closure_21 } from "../../../../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = React.useCallback((dataSavingMode) => {
    let obj = callback(table[39]);
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
      obj[5] = callback2(tmp2(4474).Text, obj1);
      obj[1] = callback2(tmp2(5993).TableSwitchRow, obj);
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
({ Fragment: closure_22, jsx: closure_23, jsxs: closure_24 } = jsxProd);
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
let closure_25 = createCacheKey.createStyles(createCacheKey);
let obj6 = { marginTop: ThemesDefault.space.PX_32, marginBottom: ThemesDefault.space.PX_32 };
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(onDismiss) {
  ({ featureName, legacyProps } = onDismiss);
  let _require = legacyProps;
  ({ subfeatureName, analyticsLocations } = onDismiss);
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let analyticsLocations2;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let React;
  const tmp = callback3();
  const tmp2 = _require;
  const tmp3 = useTier0UpsellContent;
  let obj = _require(useTier0UpsellContent[38]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[45])(analyticsLocations).analyticsLocations;
  obj1 = _require(useTier0UpsellContent[46]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    let tmp2Result = tmp2(tmp3[47]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2Result = tmp2(tmp3[38]);
  const items1 = [closure_7];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => theme.theme);
  const items2 = [closure_9];
  const stateFromStores2 = tmp2(tmp3[38]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp12 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result1 = tmp2(tmp3[38]);
  const tmp6 = analyticsLocations;
  const token = tmp2(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result2 = tmp2(tmp3[16]);
  let str = "dark";
  const token1 = tmp2(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants3.LIGHT) {
    str = "light";
  }
  const tmp2Result3 = tmp2(tmp3[16]);
  const premiumTypeDisplayName = tmp2(tmp3[17]).getPremiumTypeDisplayName(tmp12);
  let kestrelConfig;
  if (featureName === tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    kestrelConfig = tmp2(tmp3[19]).getKestrelConfig({ location: "native.PremiumUpsellActionSheet" });
    const tmp2Result5 = tmp2(tmp3[19]);
  }
  let effectiveKestrelLimit;
  if (null != kestrelConfig) {
    const tmp2Result6 = tmp2(tmp3[19]);
    effectiveKestrelLimit = tmp2Result6.getEffectiveKestrelLimit(kestrelConfig, tmp2(tmp3[20]).maxFileSize(stateFromStores2));
    const tmp2Result7 = tmp2(tmp3[20]);
  }
  const tmp18 = subfeatureName === tmp2(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  _require = tmp18;
  if (subfeatureName === tmp2(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = tmp2(tmp3[22]).getForLaterLimit("native.PremiumUpsellActionSheet", tmp18);
    const tmp2Result8 = tmp2(tmp3[22]);
  }
  const tmp20 = tmp18 ? closure_20 : closure_19;
  obj = {};
  obj = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = tmp2(tmp3[23]).intl;
  obj[0] = intl.string(tmp2(tmp3[23]).t.jGDYF0);
  const intl2 = tmp2(tmp3[23]).intl;
  obj[1] = intl2.formatToPlainString(tmp2(tmp3[23]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj[2] = constants2.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj[3] = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  obj1 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj[4] = obj1;
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj;
  const obj2 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl3 = tmp2(tmp3[23]).intl;
  obj2[0] = intl3.string(tmp2(tmp3[23]).t.zY5PPb);
  const intl4 = tmp2(tmp3[23]).intl;
  obj2[1] = intl4.formatToPlainString(tmp2(tmp3[23]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj2[2] = constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj2[3] = constants.EMOJI_EVERYWHERE_UPSELL;
  const tmp2Result4 = tmp2(tmp3[17]);
  obj2[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj2;
  const obj4 = { title: null, showBetaBadge: null, isKestrelRaisedCap: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl5 = tmp2(tmp3[23]).intl;
  obj4[0] = intl5.string(tmp2(tmp3[23]).t["G+pngo"]);
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
  const tmp2Result9 = tmp2(tmp3[20]);
  obj5[2] = true === isGA;
  obj5[3] = function onClick() {
    const obj = analyticsLocations2(useTier0UpsellContent[24]);
    obj.openURL(analyticsLocations2(useTier0UpsellContent[25]).getArticleURL(constants.NITRO_FAQ));
  };
  obj4[3] = closure_23(closure_22, { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj5) });
  obj4[4] = constants2.PREMIUM_UPSELL_FILE_UPLOAD;
  obj4[5] = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj6 = { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj5) };
  obj4[6] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj4;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl6 = tmp2(tmp3[23]).intl;
  obj8[0] = intl6.string(tmp2(tmp3[23]).t.SI7R9I);
  const intl7 = tmp2(tmp3[23]).intl;
  obj8[1] = intl7.formatToPlainString(tmp2(tmp3[23]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj8[2] = constants2.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj8[3] = constants.ANIMATED_EMOJI_UPSELL;
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj8[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj8;
  const obj10 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = tmp2(tmp3[23]).intl;
  obj10[0] = intl8.string(tmp2(tmp3[23]).t.p0I2Bk);
  const intl9 = tmp2(tmp3[23]).intl;
  obj10[1] = intl9.string(tmp2(tmp3[23]).t.jBqF2k);
  obj10[2] = constants2.PREMIUM_UPSELL_CLIENT_THEMES;
  obj10[3] = constants.CLIENT_THEMES_UPSELL;
  obj10[4] = analyticsLocations2(tmp3[26]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.CLIENT_THEMES] = obj10;
  const obj11 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp2(tmp3[23]).intl;
  obj11[0] = intl10.string(tmp2(tmp3[23]).t.TYFwcy);
  const intl11 = tmp2(tmp3[23]).intl;
  obj11[1] = intl11.string(tmp2(tmp3[23]).t.HDt8ip);
  obj11[2] = constants2.PREMIUM_UPSELL_APP_ICONS;
  obj11[3] = constants.APP_ICON_UPSELL;
  obj11[4] = analyticsLocations2(tmp3[27]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.APP_ICONS] = obj11;
  if (null == forLaterLimit) {
    const intl13 = tmp2(tmp3[23]).intl;
    let stringResult = intl13.string(tmp2(tmp3[23]).t.YXk6N7);
  } else {
    const intl12 = tmp2(tmp3[23]).intl;
    const t = tmp2(tmp3[23]).t;
    const obj12 = { premiumMax: null };
    obj12[0] = tmp20;
    stringResult = intl12.formatToPlainString(tmp18 ? t["cpj9o/"] : t.Oxm3Sq, obj12);
  }
  const obj13 = { title: stringResult, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  if (null == forLaterLimit) {
    const intl15 = tmp2(tmp3[23]).intl;
    let stringResult1 = intl15.string(tmp2(tmp3[23]).t["m/HzW8"]);
  } else {
    const intl14 = tmp2(tmp3[23]).intl;
    const t2 = tmp2(tmp3[23]).t;
    const obj14 = { children: null };
    const obj15 = { max: null, premiumMax: null, onClick: null };
    obj15[0] = forLaterLimit;
    obj15[1] = tmp20;
    obj15[2] = function onClick() {
      analyticsLocations2(useTier0UpsellContent[28]).hideActionSheet(lib(useTier0UpsellContent[29]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[28]);
      const SavedMessageSortTypes = lib(useTier0UpsellContent[31]).SavedMessageSortTypes;
      lib(useTier0UpsellContent[30]).showForLaterModal(lib ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
    };
    obj14[0] = intl14.format(tmp18 ? t2.NRF0Wh : t2.o5OLyw, obj15);
    stringResult1 = tmp25(tmp26, obj14);
  }
  obj13[2] = stringResult1;
  obj13[3] = constants2.PREMIUM_UPSELL_FOR_LATER;
  obj13[4] = constants.FOR_LATER_MODAL_UPSELL;
  obj13[5] = analyticsLocations2(tmp18 ? tmp3[32] : tmp3[33]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.SAVED_MESSAGES] = obj13;
  const obj16 = { title: null, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl16 = tmp2(tmp3[23]).intl;
  obj16[0] = intl16.formatToPlainString(tmp2(tmp3[23]).t.GNoaxo, { premiumMax: closure_21 });
  const obj18 = { children: null };
  const intl17 = tmp2(tmp3[23]).intl;
  obj18[0] = intl17.format(tmp2(tmp3[23]).t["1kFyto"], {
    premiumMax: closure_21,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[28]).hideActionSheet(lib(useTier0UpsellContent[29]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[28]);
      const result = lib(useTier0UpsellContent[34]).showScheduledMessagesModal();
    }
  });
  obj16[2] = closure_23(closure_22, obj18);
  obj16[3] = constants2.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj16[4] = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj16[5] = analyticsLocations2(tmp3[35]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj16;
  const obj20 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl18 = tmp2(tmp3[23]).intl;
  obj20[0] = intl18.string(tmp2(tmp3[23]).t.ETZQx5);
  const intl19 = tmp2(tmp3[23]).intl;
  obj20[1] = intl19.formatToPlainString(tmp2(tmp3[23]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj20[2] = constants2.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj20[3] = constants.STREAM_QUALITY_UPSELL;
  obj20[4] = analyticsLocations2(tmp3[36]);
  const obj17 = { premiumMax: closure_21 };
  const obj19 = {
    premiumMax: closure_21,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[28]).hideActionSheet(lib(useTier0UpsellContent[29]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[28]);
      const result = lib(useTier0UpsellContent[34]).showScheduledMessagesModal();
    }
  };
  const obj21 = { fps: ApplicationStreamFPS.FPS_60 };
  const obj9 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const items3 = [token, token1];
  obj20[5] = { colors: items3, start: tmp2(tmp3[37]).HorizontalGradient.START, end: tmp2(tmp3[37]).HorizontalGradient.END };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj20;
  React = tmp30;
  const obj22 = { colors: items3, start: tmp2(tmp3[37]).HorizontalGradient.START, end: tmp2(tmp3[37]).HorizontalGradient.END };
  const items4 = [closure_6];
  const stateFromStores3 = tmp2(tmp3[38]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = tmp2(tmp3[38]);
  const items5 = [obj[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(tmp3[48]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  const effect = React.useEffect(() => {
    let obj = analyticsLocations2(useTier0UpsellContent[49]);
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
    obj.sku_id = lib(useTier0UpsellContent[17]).castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? closure_1_11.TIER_0 : closure_1_11.TIER_2);
    obj.track(closure_1_14.PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp34 = analyticsLocations2(tmp3[50])(useTier0UpsellContent, onViewAllPerks, obj[featureName].analyticsPage, undefined, tmp6);
  const loading = tmp34.loading;
  [][0] = onViewAllPerks;
  let tmp25Result1 = null;
  if (null != obj[featureName]) {
    const obj23 = { startExpanded: true, onDismiss: null, children: null };
    obj23[1] = onDismiss.onDismiss;
    if (null == tmp30.image) {
      const items6 = [tmp40, , , ];
      const obj24 = { style: null, children: null };
      obj24[0] = tmp.textContainer;
      let tmp25Result = null;
      if (true === tmp30.showBetaBadge) {
        const obj25 = { size: null, gradient: true, style: null };
        let tmp5Result = tmp5(tmp3[54]);
        obj25[0] = tmp2(tmp3[54]).BetaSizes.SMALL;
        obj25[2] = tmp.betaTag;
        tmp25Result = tmp25(tmp5Result, obj25);
      }
      const items7 = [tmp25Result, , ];
      const obj26 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
      obj26[0] = tmp.text;
      obj26[3] = tmp30.title;
      items7[1] = tmp25(tmp2(tmp3[41]).Text, obj26);
      const obj27 = { style: null, variant: "text-sm/normal", children: null };
      const items8 = [, ];
      ({ text: arr10[0], description: arr10[1] } = tmp);
      obj27[0] = items8;
      obj27[2] = tmp30.description;
      items7[2] = tmp25(tmp2(tmp3[41]).Text, obj27);
      obj24[1] = items7;
      items6[1] = tmp38(tmp39, obj24);
      tmp25Result = null;
      if (featureName === tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
        const obj28 = { isKestrelTreatment: null };
        obj28[0] = true === tmp30.isKestrelRaisedCap;
        tmp25Result = tmp25(AlwaysCompressImagesSwitch, obj28);
      }
      items6[2] = tmp25Result;
      const obj29 = { style: null, children: null };
      obj29[0] = tmp.buttonContainer;
      const obj30 = { loading: null, onPress: null, text: null, icon: null, variant: null };
      obj30[0] = loading;
      let onPress = null;
      if (!loading) {
        onPress = tmp34.onPress;
      }
      obj30[1] = onPress;
      const intl20 = tmp2(tmp3[23]).intl;
      const string = intl20.string;
      const t3 = tmp2(tmp3[23]).t;
      if (useTier0UpsellContent) {
        let stringResult2 = string(t3.cM8bbx);
      } else {
        stringResult2 = string(t3["8x0jKT"]);
      }
      obj30[2] = stringResult2;
      obj30[3] = tmp5(tmp3[56]);
      let str3 = "primary";
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        let str4 = "experimental_premium-primary";
        if (useTier0UpsellContent) {
          str4 = "experimental_premium-basic";
        }
        str3 = str4;
      }
      const obj31 = { children: null };
      obj30[4] = str3;
      const items9 = [tmp25(tmp2(tmp3[55]).Button, obj30), ];
      const obj32 = { variant: "secondary", text: null, onPress: null };
      const intl21 = tmp2(tmp3[23]).intl;
      obj32[1] = intl21.string(tmp2(tmp3[23]).t.PcTCB7);
      obj32[2] = tmp35;
      items9[1] = tmp25(tmp2(tmp3[55]).Button, obj32);
      obj29[1] = items9;
      items6[3] = tmp38(tmp39, obj29);
      obj31[0] = items6;
      obj23[2] = tmp38(tmp39, obj31);
      tmp25Result1 = tmp25(tmp37, obj23);
    } else if (null != tmp30.imageGradientBackground) {
      const obj33 = { style: null, children: null };
      obj33[0] = tmp.imageGradientBackgroundContainer;
      const obj34 = { colors: null, start: null, end: null, style: null, children: null };
      obj34[0] = tmp30.imageGradientBackground.colors;
      obj34[1] = tmp30.imageGradientBackground.start;
      obj34[2] = tmp30.imageGradientBackground.end;
      obj34[3] = tmp.imageGradientBackground;
      const obj35 = { image: null, style: null, useReducedMotion: null };
      obj35[0] = tmp30.image;
      const items10 = [, ];
      ({ image: arr7[0], imageInGradientBackground: arr7[1] } = tmp);
      obj35[1] = items10;
      obj35[2] = stateFromStores3;
      tmp5Result = tmp5(tmp3[53]);
      obj34[4] = tmp25(PremiumUpsellImage, obj35);
      obj33[1] = tmp25(tmp5Result, obj34);
      let tmp25Result2 = tmp25(tmp39, obj33);
    } else {
      const obj36 = { image: null, style: null, useReducedMotion: null };
      obj36[0] = tmp30.image;
      obj36[1] = tmp.image;
      obj36[2] = stateFromStores3;
      tmp25Result2 = tmp25(PremiumUpsellImage, obj36);
    }
  }
  return tmp25Result1;
};