// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import set from "../../../../../utils/PlatformUtils.tsx";
import LinearGradientDefault from "../../../../../../_runtime/04941_LinearGradient.js";
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
    let obj = callback(table[40]);
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
      const intl = tmp2(1233).intl;
      obj[2] = intl.string(tmp2(1233).t.ix8XIj);
      obj[3] = stateFromStores;
      obj[4] = callback;
      obj1 = { style: null, variant: "text-xs/normal", children: null };
      obj1[0] = tmp.compressionHint;
      const intl2 = tmp2(1233).intl;
      obj1[2] = intl2.string(tmp2(1233).t["wC0+Ph"]);
      obj[5] = callback2(tmp2(4474).Text, obj1);
      obj[1] = callback2(tmp2(6002).TableSwitchRow, obj);
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
function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    let obj = { style: null, children: null };
    obj[0] = styles.hero;
    obj[1] = pageConfig.illustration;
    let tmp13 = callback2(View, obj);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        obj = { style: null, children: null };
        obj[0] = styles.imageGradientBackgroundContainer;
        obj1 = { colors: null, start: null, end: null, style: null, children: null };
        obj1[0] = pageConfig.imageGradientBackground.colors;
        obj1[1] = pageConfig.imageGradientBackground.start;
        obj1[2] = pageConfig.imageGradientBackground.end;
        obj1[3] = styles.imageGradientBackground;
        const obj2 = { image: null, style: null, useReducedMotion: null };
        obj2[0] = pageConfig.image;
        const items = [, ,];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj2[1] = items;
        obj2[2] = useReducedMotion;
        obj1[4] = callback2(PremiumUpsellImage, obj2);
        obj[1] = callback2(LinearGradientDefault, obj1);
        let tmp3 = callback2(View, obj);
        const tmp8 = LinearGradientDefault;
      } else {
        obj = { image: null, style: null, useReducedMotion: null };
        obj[0] = pageConfig.image;
        const items1 = [,];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj[1] = items1;
        obj[2] = useReducedMotion;
        tmp3 = callback2(PremiumUpsellImage, obj);
      }
    }
  }
  return tmp13;
}
({ PremiumSubscriptionSKUs: unpackModuleId, PremiumTypes: closure_12, PremiumUpsellTypes: map1 } = GuildFeatures);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, HelpdeskArticles: closure_16, ThemeTypes: closure_17 } = ME);
({ SAVED_BOOKMARKS_MAX: closure_19, SAVED_REMINDERS_MAX: closure_20 } = SAVED_BOOKMARKS_MAX);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = jsxProd);
createCacheKey = {
  hero: null,
  image: null,
  text: null,
  betaTag: null,
  description: null,
  textContainer: null,
  buttonContainer: null,
  compressionContainer: null,
  compressionHint: null,
  imageGradientBackgroundContainer: null,
  imageGradientBackground: null,
  imageInGradientBackground: null,
};
createCacheKey = { alignSelf: "center", marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 240, height: 144 };
createCacheKey[2] = { alignSelf: "center", textAlign: "center" };
createCacheKey[3] = { marginLeft: 0 };
createCacheKey[4] = { marginHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[5] = {
  marginTop: ThemesDefault.space.PX_24,
  marginHorizontal: ThemesDefault.space.PX_8,
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
};
let obj2 = {
  marginTop: ThemesDefault.space.PX_24,
  marginHorizontal: ThemesDefault.space.PX_8,
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
};
createCacheKey[6] = { marginTop: ThemesDefault.space.PX_32, gap: ThemesDefault.space.PX_8 };
let obj3 = { marginTop: ThemesDefault.space.PX_32, gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[8] = { marginTop: 2 };
createCacheKey[9] = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj4 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[10] = {
  width: "100%",
  marginHorizontal: ThemesDefault.space.PX_16,
  borderRadius: ThemesDefault.space.PX_12,
};
let obj5 = { width: "100%", marginHorizontal: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.space.PX_12 };
createCacheKey[11] = { marginTop: ThemesDefault.space.PX_32, marginBottom: ThemesDefault.space.PX_32 };
let closure_25 = createCacheKey.createStyles(createCacheKey);
let obj6 = { marginTop: ThemesDefault.space.PX_32, marginBottom: ThemesDefault.space.PX_32 };
let result = require("set").fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx",
);

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
  let obj = _require(useTier0UpsellContent[39]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[47])(analyticsLocations).analyticsLocations;
  obj1 = _require(useTier0UpsellContent[48]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    let tmp2Result = tmp2(tmp3[49]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2Result = tmp2(tmp3[39]);
  const items1 = [closure_7];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => theme.theme);
  const items2 = [closure_9];
  const stateFromStores2 = tmp2(tmp3[39]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp12 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result1 = tmp2(tmp3[39]);
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
    effectiveKestrelLimit = tmp2Result6.getEffectiveKestrelLimit(
      kestrelConfig,
      tmp2(tmp3[20]).maxFileSize(stateFromStores2),
    );
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
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = tmp2(tmp3[23]).intl;
  obj4[0] = intl5.string(tmp2(tmp3[23]).t.Eukdgl);
  const intl6 = tmp2(tmp3[23]).intl;
  obj4[1] = intl6.string(tmp2(tmp3[23]).t.sMmd7s);
  obj4[2] = constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj4[3] = constants.STICKERS_EVERYWHERE_UPSELL;
  obj4[4] = callback2(tmp2(tmp3[24]).StickersSpotIllustration, { width: 188, height: 106, accessible: false });
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj4;
  const obj5 = {
    title: null,
    showBetaBadge: null,
    isKestrelRaisedCap: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
  };
  const intl7 = tmp2(tmp3[23]).intl;
  obj5[0] = intl7.string(tmp2(tmp3[23]).t["G+pngo"]);
  let enabled;
  if (kestrelConfig != null) {
    enabled = kestrelConfig.enabled;
  }
  obj5[1] = true === enabled && true !== kestrelConfig.isGA;
  let enabled1;
  if (kestrelConfig != null) {
    enabled1 = kestrelConfig.enabled;
  }
  obj5[2] = true === enabled1;
  const obj3 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj6 = { guildId: stateFromStores2, maxSize: effectiveKestrelLimit, hideLearnMore: null, onClick: null };
  let isGA;
  if (kestrelConfig != null) {
    isGA = kestrelConfig.isGA;
  }
  const tmp2Result9 = tmp2(tmp3[20]);
  obj6[2] = true === isGA;
  obj6[3] = function onClick() {
    const obj = analyticsLocations2(useTier0UpsellContent[25]);
    obj.openURL(analyticsLocations2(useTier0UpsellContent[26]).getArticleURL(constants.NITRO_FAQ));
  };
  obj5[3] = callback2(closure_23, { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj6) });
  obj5[4] = constants2.PREMIUM_UPSELL_FILE_UPLOAD;
  obj5[5] = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj7 = { children: tmp2(tmp3[20]).fileUploadLimitRoadblockDescription(obj6) };
  obj5[6] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj5;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = tmp2(tmp3[23]).intl;
  obj9[0] = intl8.string(tmp2(tmp3[23]).t.SI7R9I);
  const intl9 = tmp2(tmp3[23]).intl;
  obj9[1] = intl9.formatToPlainString(tmp2(tmp3[23]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj9[2] = constants2.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj9[3] = constants.ANIMATED_EMOJI_UPSELL;
  const obj8 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj9[4] = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj9;
  const obj11 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = tmp2(tmp3[23]).intl;
  obj11[0] = intl10.string(tmp2(tmp3[23]).t.p0I2Bk);
  const intl11 = tmp2(tmp3[23]).intl;
  obj11[1] = intl11.string(tmp2(tmp3[23]).t.jBqF2k);
  obj11[2] = constants2.PREMIUM_UPSELL_CLIENT_THEMES;
  obj11[3] = constants.CLIENT_THEMES_UPSELL;
  obj11[4] = analyticsLocations2(tmp3[27]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.CLIENT_THEMES] = obj11;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = tmp2(tmp3[23]).intl;
  obj12[0] = intl12.string(tmp2(tmp3[23]).t.TYFwcy);
  const intl13 = tmp2(tmp3[23]).intl;
  obj12[1] = intl13.string(tmp2(tmp3[23]).t.HDt8ip);
  obj12[2] = constants2.PREMIUM_UPSELL_APP_ICONS;
  obj12[3] = constants.APP_ICON_UPSELL;
  obj12[4] = analyticsLocations2(tmp3[28]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.APP_ICONS] = obj12;
  if (null == forLaterLimit) {
    const intl15 = tmp2(tmp3[23]).intl;
    let stringResult = intl15.string(tmp2(tmp3[23]).t.YXk6N7);
  } else {
    const intl14 = tmp2(tmp3[23]).intl;
    const t = tmp2(tmp3[23]).t;
    const obj13 = { premiumMax: null };
    obj13[0] = tmp20;
    stringResult = intl14.formatToPlainString(tmp18 ? t["cpj9o/"] : t.Oxm3Sq, obj13);
  }
  const obj14 = {
    title: stringResult,
    showBetaBadge: true,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
  };
  if (null == forLaterLimit) {
    const intl17 = tmp2(tmp3[23]).intl;
    let stringResult1 = intl17.string(tmp2(tmp3[23]).t["m/HzW8"]);
  } else {
    const intl16 = tmp2(tmp3[23]).intl;
    const t2 = tmp2(tmp3[23]).t;
    const obj15 = { children: null };
    const obj16 = { max: null, premiumMax: null, onClick: null };
    obj16[0] = forLaterLimit;
    obj16[1] = tmp20;
    obj16[2] = function onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(
        lib(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const SavedMessageSortTypes = lib(useTier0UpsellContent[32]).SavedMessageSortTypes;
      lib(useTier0UpsellContent[31]).showForLaterModal(
        lib ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
      );
    };
    obj15[0] = intl16.format(tmp18 ? t2.NRF0Wh : t2.o5OLyw, obj16);
    stringResult1 = tmp23(tmp26, obj15);
  }
  obj14[2] = stringResult1;
  obj14[3] = constants2.PREMIUM_UPSELL_FOR_LATER;
  obj14[4] = constants.FOR_LATER_MODAL_UPSELL;
  obj14[5] = analyticsLocations2(tmp18 ? tmp3[33] : tmp3[34]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.SAVED_MESSAGES] = obj14;
  const obj17 = {
    title: null,
    showBetaBadge: true,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
  };
  const intl18 = tmp2(tmp3[23]).intl;
  obj17[0] = intl18.formatToPlainString(tmp2(tmp3[23]).t.GNoaxo, { premiumMax: closure_21 });
  const obj19 = { children: null };
  const intl19 = tmp2(tmp3[23]).intl;
  obj19[0] = intl19.format(tmp2(tmp3[23]).t["1kFyto"], {
    premiumMax: closure_21,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(
        lib(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = lib(useTier0UpsellContent[35]).showScheduledMessagesModal();
    },
  });
  obj17[2] = callback2(closure_23, obj19);
  obj17[3] = constants2.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj17[4] = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj17[5] = analyticsLocations2(tmp3[36]);
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj17;
  const obj21 = {
    title: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
    imageGradientBackground: null,
  };
  const intl20 = tmp2(tmp3[23]).intl;
  obj21[0] = intl20.string(tmp2(tmp3[23]).t.ETZQx5);
  const intl21 = tmp2(tmp3[23]).intl;
  obj21[1] = intl21.formatToPlainString(tmp2(tmp3[23]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj21[2] = constants2.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj21[3] = constants.STREAM_QUALITY_UPSELL;
  obj21[4] = analyticsLocations2(tmp3[37]);
  const obj10 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj18 = { premiumMax: closure_21 };
  const obj20 = {
    premiumMax: closure_21,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(
        lib(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = lib(useTier0UpsellContent[35]).showScheduledMessagesModal();
    },
  };
  const obj22 = { fps: ApplicationStreamFPS.FPS_60 };
  const items3 = [token, token1];
  obj21[5] = {
    colors: items3,
    start: tmp2(tmp3[38]).HorizontalGradient.START,
    end: tmp2(tmp3[38]).HorizontalGradient.END,
  };
  obj[tmp2(tmp3[18]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj21;
  React = tmp30;
  const obj23 = {
    colors: items3,
    start: tmp2(tmp3[38]).HorizontalGradient.START,
    end: tmp2(tmp3[38]).HorizontalGradient.END,
  };
  const items4 = [closure_6];
  const stateFromStores3 = tmp2(tmp3[39]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = tmp2(tmp3[39]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(
    tmp3[50],
  ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmp2(
      tmp3[51],
    ).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result12 = tmp2(tmp3[51]);
  }
  const items5 = [obj[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations2(useTier0UpsellContent[52]);
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
    obj.sku_id = lib(useTier0UpsellContent[17]).castPremiumSubscriptionAsSkuId(
      useTier0UpsellContent ? closure_1_11.TIER_0 : closure_1_11.TIER_2,
    );
    obj.track(closure_1_14.PREMIUM_UPSELL_VIEWED, obj);
  }, items5);
  const tmp34 = analyticsLocations2(tmp3[53])(
    useTier0UpsellContent,
    onViewAllPerks,
    obj[featureName].analyticsPage,
    undefined,
    tmp6,
  );
  const loading = tmp34.loading;
  [][0] = onViewAllPerks;
  let tmp23Result1 = null;
  if (null != obj[featureName]) {
    const obj24 = { startExpanded: true, onDismiss: null, children: null };
    obj24[1] = onDismiss.onDismiss;
    const obj25 = { pageConfig: null, styles: null, useReducedMotion: null };
    obj25[0] = tmp30;
    obj25[1] = tmp;
    obj25[2] = stateFromStores3;
    const items6 = [tmp23(PremiumUpsellHero, obj25), , ,];
    const obj26 = { style: null, children: null };
    obj26[0] = tmp.textContainer;
    let tmp23Result = null;
    if (true === tmp30.showBetaBadge) {
      const obj27 = { size: null, gradient: true, style: null };
      obj27[0] = tmp2(tmp3[56]).BetaSizes.SMALL;
      obj27[2] = tmp.betaTag;
      tmp23Result = tmp23(tmp5(tmp3[56]), obj27);
      const tmp5Result = tmp5(tmp3[56]);
    }
    const items7 = [tmp23Result, ,];
    const obj28 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    obj28[0] = tmp.text;
    obj28[3] = tmp30.title;
    items7[1] = tmp23(tmp2(tmp3[42]).Text, obj28);
    const obj29 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [,];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj29[0] = items8;
    obj29[2] = tmp30.description;
    items7[2] = tmp23(tmp2(tmp3[42]).Text, obj29);
    obj26[1] = items7;
    items6[1] = closure_24(View, obj26);
    tmp23Result = null;
    if (featureName === tmp2(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      const obj30 = { isKestrelTreatment: null };
      obj30[0] = true === tmp30.isKestrelRaisedCap;
      tmp23Result = tmp23(AlwaysCompressImagesSwitch, obj30);
    }
    items6[2] = tmp23Result;
    const obj31 = { style: null, children: null };
    obj31[0] = tmp.buttonContainer;
    const obj32 = { loading: null, onPress: null, text: null, icon: null, variant: null };
    obj32[0] = loading;
    let onPress = null;
    if (!loading) {
      onPress = tmp34.onPress;
    }
    obj32[1] = onPress;
    const intl22 = tmp2(tmp3[23]).intl;
    const string = intl22.string;
    const t3 = tmp2(tmp3[23]).t;
    if (useTier0UpsellContent) {
      let stringResult2 = string(t3.cM8bbx);
    } else {
      stringResult2 = string(t3["8x0jKT"]);
    }
    obj32[2] = stringResult2;
    obj32[3] = tmp5(tmp3[58]);
    let str3 = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    const obj33 = { children: null };
    obj32[4] = str3;
    const items9 = [tmp23(tmp2(tmp3[57]).Button, obj32)];
    const obj34 = { variant: "secondary", text: null, onPress: null };
    const intl23 = tmp2(tmp3[23]).intl;
    obj34[1] = intl23.string(tmp2(tmp3[23]).t.PcTCB7);
    obj34[2] = tmp35;
    items9[1] = tmp23(tmp2(tmp3[57]).Button, obj34);
    obj31[1] = items9;
    items6[3] = closure_24(View, obj31);
    obj33[0] = items6;
    obj24[2] = closure_24(View, obj33);
    tmp23Result1 = tmp23(tmp2(tmp3[55]).ActionSheet, obj24);
  }
  return tmp23Result1;
}
