// === Module 8179: PremiumUpsellActionSheet ===

// Module 8179 (PremiumUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumUtils from "PremiumUtils" /* 4481 */;
import ChatInputUtils from "ChatInputUtils" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import FastImageDefault from "FastImage" /* 5890 */;
import openPremiumUpsellActionSheet from "openPremiumUpsellActionSheet" /* 8178 */;
import showForLaterModal from "showForLaterModal" /* 8188 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8189 */;
import APNGPlayer from "APNGPlayer" /* 9165 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4850 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        let tmp5 = closure_1_20(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  tmp5 = closure_1_20(FastImageDefault, { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false });
  obj = PlatformUtils;
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
}
function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = closure_1_20(View, obj2);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj4 = { colors: pageConfig.imageGradientBackground.colors, start: pageConfig.imageGradientBackground.start, end: pageConfig.imageGradientBackground.end, style: styles.imageGradientBackground, children: null };
        const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, , ];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj5.style = items;
        obj5.useReducedMotion = useReducedMotion;
        obj4.children = closure_1_20(PremiumUpsellImage, obj5);
        obj3.children = closure_1_20(LinearGradientDefault, obj4);
        let tmp3 = closure_1_20(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [, ];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = closure_1_20(PremiumUpsellImage, obj);
      }
    }
  }
  return tmp13;
}
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PremiumSubscriptionSKUs: c10, PremiumTypes: closure_11, PremiumUpsellTypes: closure_12 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = fn(4874).ApplicationStreamFPS;
const SavedMessagesConstants = fn(8180);
({ SAVED_BOOKMARKS_MAX: closure_17, SAVED_REMINDERS_MAX: closure_18 } = SavedMessagesConstants);
const premiumMax = fn(8174).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 }, image: { width: 240, height: 144 }, text: { alignSelf: "center", textAlign: "center" }, betaTag: { marginLeft: 0 }, description: null, textContainer: null, buttonContainer: null, imageGradientBackgroundContainer: null, imageGradientBackground: null, imageInGradientBackground: null };
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackgroundContainer = { display: "flex", width: "100%", justifyContent: "center", alignItems: "center" };
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackground = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
let obj7 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_23 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(onDismiss) {
  ({ featureName, legacyProps } = onDismiss);
  ({ subfeatureName, analyticsLocations } = onDismiss);
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  let analyticsLocations2;
  let useTier0UpsellContent;
  let onViewAllPerks;
  let upsellType;
  const tmp = closure_23();
  const tmp3 = useTier0UpsellContent;
  const items = [UserStore];
  const stateFromStores = legacyProps(useTier0UpsellContent[41]).useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[42])(analyticsLocations).analyticsLocations;
  let obj = legacyProps(useTier0UpsellContent[41]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = legacyProps(tmp3[44]).getUpsellType(featureName);
    const tmp2Result = legacyProps(tmp3[44]);
  }
  const premiumUpsellConfig = legacyProps(useTier0UpsellContent[43]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  legacyProps(tmp3[45]);
  let trialCtaOverride = null;
  if (!useTier0UpsellContent) {
    trialCtaOverride = legacyProps(tmp3[46]).getTrialCtaOverride(tmp10, TIER_2.TIER_2);
    const tmp2Result17 = legacyProps(tmp3[46]);
  }
  let obj2 = legacyProps(useTier0UpsellContent[43]);
  const tmp6 = analyticsLocations;
  const items1 = [ThemeStore];
  const stateFromStores1 = legacyProps(tmp3[41]).useStateFromStores(items1, () => theme.theme);
  const tmp2Result18 = legacyProps(tmp3[41]);
  const items2 = [SelectedGuildStore];
  const stateFromStores2 = legacyProps(tmp3[41]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp16 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
  const tmp2Result19 = legacyProps(tmp3[41]);
  const token = legacyProps(tmp3[15]).useToken(tmp5(tmp3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result20 = legacyProps(tmp3[15]);
  let str = "dark";
  const token1 = legacyProps(tmp3[15]).useToken(tmp5(tmp3[14]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result21 = legacyProps(tmp3[15]);
  const premiumTypeDisplayName = legacyProps(tmp3[16]).getPremiumTypeDisplayName(tmp16);
  let effectiveUploadLimit;
  if (featureName === legacyProps(tmp3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmp2Result23 = legacyProps(tmp3[18]);
    effectiveUploadLimit = tmp2Result23.getEffectiveUploadLimit(legacyProps(tmp3[19]).maxFileSize(stateFromStores2));
    const tmp2Result24 = legacyProps(tmp3[19]);
  }
  const tmp21 = subfeatureName === legacyProps(tmp3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  closure_129_0 = tmp21;
  if (subfeatureName === legacyProps(tmp3[20]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = legacyProps(tmp3[21]).getForLaterLimit("native.PremiumUpsellActionSheet", tmp21);
    const tmp2Result25 = legacyProps(tmp3[21]);
  }
  const tmp23 = tmp21 ? closure_18 : closure_17;
  const tmp2Result22 = legacyProps(tmp3[16]);
  let tmp24;
  if (tmp2Result26.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet")) {
    tmp24 = closure_20(legacyProps(tmp3[23]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  let obj3 = {};
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = legacyProps(tmp3[24]).intl;
  obj4.title = intl.string(legacyProps(tmp3[24]).t.jGDYF0);
  const intl2 = legacyProps(tmp3[24]).intl;
  obj4.description = intl2.formatToPlainString(legacyProps(tmp3[24]).t["fc+8uy"], { nitroTierName: premiumTypeDisplayName });
  obj4.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj4.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  tmp2Result26 = legacyProps(tmp3[22]);
  obj4.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj4;
  const obj6 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl3 = legacyProps(tmp3[24]).intl;
  obj6.title = intl3.string(legacyProps(tmp3[24]).t.zY5PPb);
  const intl4 = legacyProps(tmp3[24]).intl;
  obj6.description = intl4.formatToPlainString(legacyProps(tmp3[24]).t["uukIF/"], { nitroTierName: premiumTypeDisplayName });
  obj6.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj6.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj5 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj6.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj6.illustration = tmp24;
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj6;
  const obj8 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = legacyProps(tmp3[24]).intl;
  obj8.title = intl5.string(legacyProps(tmp3[24]).t.Eukdgl);
  const intl6 = legacyProps(tmp3[24]).intl;
  obj8.description = intl6.string(legacyProps(tmp3[24]).t.sMmd7s);
  obj8.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj8.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj8.illustration = closure_20(legacyProps(tmp3[23]).StickersSpotIllustration, { width: 235, height: 132, accessible: false });
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj8;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl7 = legacyProps(tmp3[24]).intl;
  obj9.title = intl7.string(legacyProps(tmp3[24]).t["G+pngo"]);
  const obj10 = { children: null };
  const obj7 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj10.children = legacyProps(tmp3[19]).fileUploadLimitRoadblockDescription({ guildId: stateFromStores2, maxSize: effectiveUploadLimit });
  obj9.description = closure_20(closure_21, obj10);
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj9.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const tmp2Result27 = legacyProps(tmp3[19]);
  obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj9;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, illustration: null };
  const intl8 = legacyProps(tmp3[24]).intl;
  obj12.title = intl8.string(legacyProps(tmp3[24]).t.SI7R9I);
  const intl9 = legacyProps(tmp3[24]).intl;
  obj12.description = intl9.formatToPlainString(legacyProps(tmp3[24]).t.uGkSY2, { nitroTierName: premiumTypeDisplayName });
  obj12.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj12.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj11 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj12.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj12.illustration = tmp24;
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj12;
  const obj14 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = legacyProps(tmp3[24]).intl;
  obj14.title = intl10.string(legacyProps(tmp3[24]).t.p0I2Bk);
  const intl11 = legacyProps(tmp3[24]).intl;
  obj14.description = intl11.string(legacyProps(tmp3[24]).t.jBqF2k);
  obj14.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj14.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj14.image = analyticsLocations2(tmp3[25]);
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.CLIENT_THEMES] = obj14;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = legacyProps(tmp3[24]).intl;
  obj15.title = intl12.string(legacyProps(tmp3[24]).t.TYFwcy);
  const intl13 = legacyProps(tmp3[24]).intl;
  obj15.description = intl13.string(legacyProps(tmp3[24]).t.HDt8ip);
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj15.upsellType = constants.APP_ICON_UPSELL;
  obj15.image = analyticsLocations2(tmp3[26]);
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.APP_ICONS] = obj15;
  if (null == forLaterLimit) {
    const intl15 = legacyProps(tmp3[24]).intl;
    let stringResult = intl15.string(legacyProps(tmp3[24]).t.YXk6N7);
  } else {
    const intl14 = legacyProps(tmp3[24]).intl;
    const t = legacyProps(tmp3[24]).t;
    const obj16 = { premiumMax: tmp23 };
    stringResult = intl14.formatToPlainString(tmp21 ? t["cpj9o/"] : t.Oxm3Sq, obj16);
  }
  const obj17 = { title: stringResult, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  if (null == forLaterLimit) {
    const intl17 = legacyProps(tmp3[24]).intl;
    let stringResult1 = intl17.string(legacyProps(tmp3[24]).t["m/HzW8"]);
  } else {
    const intl16 = legacyProps(tmp3[24]).intl;
    const t2 = legacyProps(tmp3[24]).t;
    const obj18 = { children: null };
    const obj19 = {
      max: forLaterLimit,
      premiumMax: tmp23,
      onClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
          const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
          showForLaterModal.showForLaterModal(legacyProps ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
        }
    };
    obj18.children = intl16.format(tmp21 ? t2.NRF0Wh : t2.o5OLyw, obj19);
    stringResult1 = closure_20(closure_21, obj18);
  }
  obj17.description = stringResult1;
  obj17.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
  obj17.upsellType = constants.FOR_LATER_MODAL_UPSELL;
  obj17.image = analyticsLocations2(tmp21 ? tmp3[31] : tmp3[32]);
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.SAVED_MESSAGES] = obj17;
  const obj20 = { title: null, showBetaBadge: true, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl18 = legacyProps(tmp3[24]).intl;
  obj20.title = intl18.formatToPlainString(legacyProps(tmp3[24]).t.GNoaxo, { premiumMax });
  const obj22 = { children: null };
  const intl19 = legacyProps(tmp3[24]).intl;
  obj22.children = intl19.format(legacyProps(tmp3[24]).t["1kFyto"], {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[27]).hideActionSheet(legacyProps(useTier0UpsellContent[28]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[27]);
      const result = legacyProps(useTier0UpsellContent[33]).showScheduledMessagesModal();
    }
  });
  obj20.description = closure_20(closure_21, obj22);
  obj20.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj20.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj20.image = analyticsLocations2(tmp3[34]);
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj20;
  const obj24 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null, imageGradientBackground: null };
  const intl20 = legacyProps(tmp3[24]).intl;
  obj24.title = intl20.string(legacyProps(tmp3[24]).t.ETZQx5);
  const intl21 = legacyProps(tmp3[24]).intl;
  obj24.description = intl21.formatToPlainString(legacyProps(tmp3[24]).t["4nlpei"], { fps: ApplicationStreamFPS.FPS_60 });
  obj24.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj24.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj24.image = analyticsLocations2(tmp3[35]);
  const obj26 = { colors: null, start: legacyProps(tmp3[36]).HorizontalGradient.START, end: legacyProps(tmp3[36]).HorizontalGradient.END };
  const items3 = [token, token1];
  obj26.colors = items3;
  obj24.imageGradientBackground = obj26;
  obj3[legacyProps(tmp3[17]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj24;
  upsellType = tmp32;
  const obj13 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj21 = { premiumMax };
  const obj23 = {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[27]).hideActionSheet(legacyProps(useTier0UpsellContent[28]).PREMIUM_UPSELL_ACTION_SHEET_KEY);
      const obj = analyticsLocations2(useTier0UpsellContent[27]);
      const result = legacyProps(useTier0UpsellContent[33]).showScheduledMessagesModal();
    }
  };
  const obj25 = { fps: ApplicationStreamFPS.FPS_60 };
  const items4 = [AccessibilityStore];
  const stateFromStores3 = legacyProps(tmp3[41]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result28 = legacyProps(tmp3[41]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(tmp3[22]).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(tmp3[47]).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result30 = legacyProps(tmp3[47]);
  }
  const items5 = [obj3[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj2.type = upsellType;
    obj2.location = location;
    obj2.location_stack = analyticsLocations2;
    const obj = AnalyticsUtilsDefault;
    obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2);
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    obj2.voice_guild_id = guildId;
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
  }, items5);
  const tmp36 = analyticsLocations2(tmp3[49])(useTier0UpsellContent, onViewAllPerks, obj3[featureName].analyticsPage, undefined, tmp6);
  const loading = tmp36.loading;
  [][0] = onViewAllPerks;
  let tmp28Result2 = null;
  if (null != obj3[featureName]) {
    const obj27 = { startExpanded: true, onDismiss: onDismiss.onDismiss, children: null };
    const obj28 = { pageConfig: tmp32, styles: tmp, useReducedMotion: stateFromStores3 };
    const items6 = [closure_20(PremiumUpsellHero, obj28), , ];
    const obj29 = { style: tmp.textContainer, children: null };
    let tmp28Result = null;
    if (true === tmp32.showBetaBadge) {
      const obj30 = { size: legacyProps(tmp3[52]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp28Result = closure_20(tmp5(tmp3[52]), obj30);
      const tmp5Result = tmp5(tmp3[52]);
    }
    const items7 = [tmp28Result, , ];
    const obj31 = { style: tmp.text, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp32.title };
    items7[1] = closure_20(legacyProps(tmp3[53]).Text, obj31);
    const obj32 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [, ];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj32.style = items8;
    obj32.children = tmp32.description;
    items7[2] = closure_20(legacyProps(tmp3[53]).Text, obj32);
    obj29.children = items7;
    items6[1] = closure_22(upsellType, obj29);
    const obj33 = { style: tmp.buttonContainer, children: null };
    const obj34 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp36.onPress;
    }
    obj34.onPress = onPress;
    if (useTier0UpsellContent) {
      const intl23 = legacyProps(tmp3[24]).intl;
      trialCtaOverride = intl23.string(legacyProps(tmp3[24]).t.cM8bbx);
    } else if (trialCtaOverride == null) {
      const intl22 = legacyProps(tmp3[24]).intl;
      trialCtaOverride = intl22.string(legacyProps(tmp3[24]).t["8x0jKT"]);
    }
    obj34.text = trialCtaOverride;
    obj34.icon = tmp5(tmp3[55]);
    let str3 = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    const obj35 = { children: null };
    obj34.variant = str3;
    const items9 = [closure_20(legacyProps(tmp3[54]).Button, obj34), ];
    const obj36 = { variant: "secondary", text: null, onPress: null };
    const intl24 = legacyProps(tmp3[24]).intl;
    obj36.text = intl24.string(legacyProps(tmp3[24]).t.PcTCB7);
    obj36.onPress = tmp37;
    items9[1] = closure_20(legacyProps(tmp3[54]).Button, obj36);
    obj33.children = items9;
    items6[2] = closure_22(upsellType, obj33);
    obj35.children = items6;
    obj27.children = closure_22(upsellType, obj35);
    tmp28Result2 = closure_20(legacyProps(tmp3[51]).ActionSheet, obj27);
  }
  return tmp28Result2;
};