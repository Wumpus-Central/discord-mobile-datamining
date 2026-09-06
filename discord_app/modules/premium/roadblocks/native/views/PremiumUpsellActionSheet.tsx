// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../../_runtime/04987_LinearGradient.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import openPremiumUpsellActionSheet from "../utils/openPremiumUpsellActionSheet.tsx";
import showForLaterModal from "../../../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../../../saved_messages/SavedMessagesTypes.tsx";
import APNGPlayer from "../../../../image/native/APNGPlayer.android.tsx";
import UserSettingsActionCreatorsDefault from "../../../../../actions/UserSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../../../user_settings/UnsyncedUserSettingsStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function AlwaysCompressImagesSwitch(isKestrelTreatment) {
  const tmp = closure_25();
  let obj = initialize;
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const callback = noop.useCallback((dataSavingMode) => {
    const obj = { dataSavingMode };
    const result = obj.updatedUnsyncedSettings(obj);
  }, []);
  let tmp6 = null;
  if (_slicedToArray(noop.useState(!stateFromStores), 1)[0]) {
    tmp6 = null;
    if (!isKestrelTreatment.isKestrelTreatment) {
      obj = { style: tmp.compressionContainer, children: null };
      obj = { start: true, end: true, label: null, value: null, onValueChange: null, subLabel: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.ix8XIj);
      obj.value = stateFromStores;
      obj.onValueChange = callback;
      const obj1 = { style: tmp.compressionHint, variant: "text-xs/normal", children: null };
      const intl2 = util.intl;
      obj1.children = intl2.string(util.t["wC0+Ph"]);
      obj.subLabel = __initData2(Text_Text.Text, obj1);
      obj.children = __initData2(TableSwitchRow.TableSwitchRow, obj);
      tmp6 = __initData2(View, obj);
    }
  }
  return tmp6;
}
function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        obj = { url: image.uri, style, autoplay: true };
        let tmp5 = __initData2(APNGPlayer.APNGPlayer, obj);
      }
      return tmp5;
    }
  }
  obj = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
  tmp5 = __initData2(FastImageDefault, obj);
}
function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    let obj = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = __initData2(View, obj);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        obj = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj1 = {
          colors: pageConfig.imageGradientBackground.colors,
          start: pageConfig.imageGradientBackground.start,
          end: pageConfig.imageGradientBackground.end,
          style: styles.imageGradientBackground,
          children: null,
        };
        const obj2 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, ,];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj2.style = items;
        obj2.useReducedMotion = useReducedMotion;
        obj1.children = __initData2(PremiumUpsellImage, obj2);
        obj.children = __initData2(LinearGradientDefault, obj1);
        let tmp3 = __initData2(View, obj);
      } else {
        obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [,];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = __initData2(PremiumUpsellImage, obj);
      }
    }
  }
  return tmp13;
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12, PremiumUpsellTypes: map1 } = PremiumConstants);
const Constants = fn(1074);
({
  AnalyticEvents: closure_14,
  AnalyticsPages: closure_15,
  HelpdeskArticles: closure_16,
  ThemeTypes: closure_17,
} = Constants);
const ApplicationStreamFPS = fn(4607).ApplicationStreamFPS;
const SavedMessagesConstants = fn(7852);
({ SAVED_BOOKMARKS_MAX: closure_19, SAVED_REMINDERS_MAX: closure_20 } = SavedMessagesConstants);
const premiumMax = fn(7846).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_22, Fragment: closure_23, jsxs: closure_24 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
createStyles.hero = createStyles;
createStyles.image = { width: 240, height: 144 };
createStyles.text = { alignSelf: "center", textAlign: "center" };
createStyles.betaTag = { marginLeft: 0 };
createStyles.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj1 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.textContainer = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj2 = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
createStyles.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
let obj3 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
createStyles.compressionContainer = { marginTop: nativeDefault.space.PX_24 };
createStyles.compressionHint = { marginTop: 2 };
createStyles.imageGradientBackgroundContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};
let obj4 = { marginTop: nativeDefault.space.PX_24 };
createStyles.imageGradientBackground = {
  width: "100%",
  marginHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.space.PX_12,
};
let obj5 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
createStyles.imageInGradientBackground = {
  marginTop: nativeDefault.space.PX_32,
  marginBottom: nativeDefault.space.PX_32,
};
let closure_25 = createStyles.createStyles(createStyles);
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
  noop = undefined;
  const tmp = closure_25();
  const tmp3 = useTier0UpsellContent;
  let obj = legacyProps(useTier0UpsellContent[39]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  analyticsLocations2 = analyticsLocations2(useTier0UpsellContent[47])(analyticsLocations).analyticsLocations;
  let obj1 = legacyProps(useTier0UpsellContent[48]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    let tmp2Result = legacyProps(tmp3[49]);
    initialUpsellKey = tmp2Result.getUpsellType(featureName);
  }
  const premiumUpsellConfig = obj1.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  tmp2Result = legacyProps(tmp3[39]);
  const items1 = [ThemeStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => theme.theme);
  const items2 = [SelectedGuildStore];
  const stateFromStores2 = legacyProps(tmp3[39]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp12 = useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2;
  const tmp2Result1 = legacyProps(tmp3[39]);
  const tmp6 = analyticsLocations;
  const token = legacyProps(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result2 = legacyProps(tmp3[16]);
  let str = "dark";
  const token1 = legacyProps(tmp3[16]).useToken(tmp5(tmp3[15]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result3 = legacyProps(tmp3[16]);
  const premiumTypeDisplayName = legacyProps(tmp3[17]).getPremiumTypeDisplayName(tmp12);
  let kestrelConfig;
  if (featureName === legacyProps(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    kestrelConfig = legacyProps(tmp3[19]).getKestrelConfig({ location: "native.PremiumUpsellActionSheet" });
    const tmp2Result5 = legacyProps(tmp3[19]);
  }
  let effectiveKestrelLimit;
  if (null != kestrelConfig) {
    const tmp2Result6 = legacyProps(tmp3[19]);
    effectiveKestrelLimit = tmp2Result6.getEffectiveKestrelLimit(
      kestrelConfig,
      legacyProps(tmp3[20]).maxFileSize(stateFromStores2),
    );
    const tmp2Result7 = legacyProps(tmp3[20]);
  }
  const tmp18 = subfeatureName === legacyProps(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT;
  closure_129_0 = tmp18;
  if (subfeatureName === legacyProps(tmp3[21]).PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT) {
    const forLaterLimit = legacyProps(tmp3[22]).getForLaterLimit("native.PremiumUpsellActionSheet", tmp18);
    const tmp2Result8 = legacyProps(tmp3[22]);
  }
  const tmp20 = tmp18 ? closure_20 : closure_19;
  obj = {};
  obj = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = legacyProps(tmp3[23]).intl;
  obj.title = intl.string(legacyProps(tmp3[23]).t.jGDYF0);
  const intl2 = legacyProps(tmp3[23]).intl;
  obj.description = intl2.formatToPlainString(legacyProps(tmp3[23]).t["fc+8uy"], {
    nitroTierName: premiumTypeDisplayName,
  });
  obj.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  obj1 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj.image = obj1;
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj;
  const obj2 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl3 = legacyProps(tmp3[23]).intl;
  obj2.title = intl3.string(legacyProps(tmp3[23]).t.zY5PPb);
  const intl4 = legacyProps(tmp3[23]).intl;
  obj2.description = intl4.formatToPlainString(legacyProps(tmp3[23]).t["uukIF/"], {
    nitroTierName: premiumTypeDisplayName,
  });
  obj2.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj2.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const tmp2Result4 = legacyProps(tmp3[17]);
  obj2.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj2;
  const obj4 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = legacyProps(tmp3[23]).intl;
  obj4.title = intl5.string(legacyProps(tmp3[23]).t.Eukdgl);
  const intl6 = legacyProps(tmp3[23]).intl;
  obj4.description = intl6.string(legacyProps(tmp3[23]).t.sMmd7s);
  obj4.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj4.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj4.illustration = closure_22(legacyProps(tmp3[24]).StickersSpotIllustration, {
    width: 188,
    height: 106,
    accessible: false,
  });
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj4;
  const obj5 = {
    title: null,
    showBetaBadge: null,
    isKestrelRaisedCap: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
  };
  const intl7 = legacyProps(tmp3[23]).intl;
  obj5.title = intl7.string(legacyProps(tmp3[23]).t["G+pngo"]);
  let enabled;
  if (kestrelConfig != null) {
    enabled = kestrelConfig.enabled;
  }
  obj5.showBetaBadge = true === enabled && true !== kestrelConfig.isGA;
  let enabled1;
  if (kestrelConfig != null) {
    enabled1 = kestrelConfig.enabled;
  }
  obj5.isKestrelRaisedCap = true === enabled1;
  let obj3 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj6 = { guildId: stateFromStores2, maxSize: effectiveKestrelLimit, hideLearnMore: null, onClick: null };
  let isGA;
  if (kestrelConfig != null) {
    isGA = kestrelConfig.isGA;
  }
  const tmp2Result9 = legacyProps(tmp3[20]);
  obj6.hideLearnMore = true === isGA;
  obj6.onClick = function onClick() {
    const obj = analyticsLocations2(useTier0UpsellContent[25]);
    obj.openURL(analyticsLocations2(useTier0UpsellContent[26]).getArticleURL(constants.NITRO_FAQ));
  };
  obj5.description = closure_22(closure_23, {
    children: legacyProps(tmp3[20]).fileUploadLimitRoadblockDescription(obj6),
  });
  obj5.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj5.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const obj7 = { children: legacyProps(tmp3[20]).fileUploadLimitRoadblockDescription(obj6) };
  obj5.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj5;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl8 = legacyProps(tmp3[23]).intl;
  obj9.title = intl8.string(legacyProps(tmp3[23]).t.SI7R9I);
  const intl9 = legacyProps(tmp3[23]).intl;
  obj9.description = intl9.formatToPlainString(legacyProps(tmp3[23]).t.uGkSY2, {
    nitroTierName: premiumTypeDisplayName,
  });
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj9.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj8 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj9.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj9;
  const obj11 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = legacyProps(tmp3[23]).intl;
  obj11.title = intl10.string(legacyProps(tmp3[23]).t.p0I2Bk);
  const intl11 = legacyProps(tmp3[23]).intl;
  obj11.description = intl11.string(legacyProps(tmp3[23]).t.jBqF2k);
  obj11.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj11.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj11.image = analyticsLocations2(tmp3[27]);
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.CLIENT_THEMES] = obj11;
  const obj12 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = legacyProps(tmp3[23]).intl;
  obj12.title = intl12.string(legacyProps(tmp3[23]).t.TYFwcy);
  const intl13 = legacyProps(tmp3[23]).intl;
  obj12.description = intl13.string(legacyProps(tmp3[23]).t.HDt8ip);
  obj12.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj12.upsellType = constants.APP_ICON_UPSELL;
  obj12.image = analyticsLocations2(tmp3[28]);
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.APP_ICONS] = obj12;
  if (null == forLaterLimit) {
    const intl15 = legacyProps(tmp3[23]).intl;
    let stringResult = intl15.string(legacyProps(tmp3[23]).t.YXk6N7);
  } else {
    const intl14 = legacyProps(tmp3[23]).intl;
    const t = legacyProps(tmp3[23]).t;
    const obj13 = { premiumMax: tmp20 };
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
    const intl17 = legacyProps(tmp3[23]).intl;
    let stringResult1 = intl17.string(legacyProps(tmp3[23]).t["m/HzW8"]);
  } else {
    const intl16 = legacyProps(tmp3[23]).intl;
    const t2 = legacyProps(tmp3[23]).t;
    const obj15 = { children: null };
    const obj16 = {
      max: forLaterLimit,
      premiumMax: tmp20,
      onClick() {
        ActionSheetActionCreatorsDefault.hideActionSheet(openPremiumUpsellActionSheet.PREMIUM_UPSELL_ACTION_SHEET_KEY);
        const SavedMessageSortTypes = SavedMessagesTypes.SavedMessageSortTypes;
        showForLaterModal.showForLaterModal(
          legacyProps ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
        );
      },
    };
    obj15.children = intl16.format(tmp18 ? t2.NRF0Wh : t2.o5OLyw, obj16);
    stringResult1 = closure_22(closure_23, obj15);
  }
  obj14.description = stringResult1;
  obj14.analyticsPage = constants3.PREMIUM_UPSELL_FOR_LATER;
  obj14.upsellType = constants.FOR_LATER_MODAL_UPSELL;
  obj14.image = analyticsLocations2(tmp18 ? tmp3[33] : tmp3[34]);
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.SAVED_MESSAGES] = obj14;
  const obj17 = {
    title: null,
    showBetaBadge: true,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
  };
  const intl18 = legacyProps(tmp3[23]).intl;
  obj17.title = intl18.formatToPlainString(legacyProps(tmp3[23]).t.GNoaxo, { premiumMax });
  const obj19 = { children: null };
  const intl19 = legacyProps(tmp3[23]).intl;
  obj19.children = intl19.format(legacyProps(tmp3[23]).t["1kFyto"], {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(
        legacyProps(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = legacyProps(useTier0UpsellContent[35]).showScheduledMessagesModal();
    },
  });
  obj17.description = closure_22(closure_23, obj19);
  obj17.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj17.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj17.image = analyticsLocations2(tmp3[36]);
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj17;
  const obj21 = {
    title: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
    imageGradientBackground: null,
  };
  const intl20 = legacyProps(tmp3[23]).intl;
  obj21.title = intl20.string(legacyProps(tmp3[23]).t.ETZQx5);
  const intl21 = legacyProps(tmp3[23]).intl;
  obj21.description = intl21.formatToPlainString(legacyProps(tmp3[23]).t["4nlpei"], {
    fps: ApplicationStreamFPS.FPS_60,
  });
  obj21.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj21.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj21.image = analyticsLocations2(tmp3[37]);
  const obj23 = {
    colors: null,
    start: legacyProps(tmp3[38]).HorizontalGradient.START,
    end: legacyProps(tmp3[38]).HorizontalGradient.END,
  };
  const items3 = [token, token1];
  obj23.colors = items3;
  obj21.imageGradientBackground = obj23;
  obj[legacyProps(tmp3[18]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj21;
  noop = tmp30;
  const obj10 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj18 = { premiumMax };
  const obj20 = {
    premiumMax,
    onClick() {
      analyticsLocations2(useTier0UpsellContent[29]).hideActionSheet(
        legacyProps(useTier0UpsellContent[30]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations2(useTier0UpsellContent[29]);
      const result = legacyProps(useTier0UpsellContent[35]).showScheduledMessagesModal();
    },
  };
  const obj22 = { fps: ApplicationStreamFPS.FPS_60 };
  const items4 = [AccessibilityStore];
  const stateFromStores3 = legacyProps(tmp3[39]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result10 = legacyProps(tmp3[39]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
    tmp3[50],
  ).getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    mobileEmojiPickerUpsellRestyleEnabledForFeature = legacyProps(
      tmp3[51],
    ).getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumUpsellActionSheet");
    const tmp2Result12 = legacyProps(tmp3[51]);
  }
  const items5 = [obj[featureName], analyticsLocations2, useTier0UpsellContent, legacyProps];
  const effect = noop.useEffect(() => {
    let obj = AnalyticsUtilsDefault;
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    obj = {};
    const merged = Object.assign(analyticsProperties);
    upsellType = undefined;
    if (upsellType != null) {
      upsellType = upsellType.upsellType;
    }
    obj.type = upsellType;
    obj.location = location;
    obj.location_stack = analyticsLocations2;
    obj.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(
      useTier0UpsellContent ? closure_2_11.TIER_0 : closure_2_11.TIER_2,
    );
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj);
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
    const obj24 = { startExpanded: true, onDismiss: onDismiss.onDismiss, children: null };
    const obj25 = { pageConfig: tmp30, styles: tmp, useReducedMotion: stateFromStores3 };
    const items6 = [closure_22(PremiumUpsellHero, obj25), , ,];
    const obj26 = { style: tmp.textContainer, children: null };
    let tmp23Result = null;
    if (true === tmp30.showBetaBadge) {
      const obj27 = { size: legacyProps(tmp3[56]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp23Result = closure_22(tmp5(tmp3[56]), obj27);
      const tmp5Result = tmp5(tmp3[56]);
    }
    const items7 = [tmp23Result, ,];
    const obj28 = {
      style: tmp.text,
      variant: "heading-lg/extrabold",
      accessibilityRole: "header",
      children: tmp30.title,
    };
    items7[1] = closure_22(legacyProps(tmp3[42]).Text, obj28);
    const obj29 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [,];
    ({ text: arr9[0], description: arr9[1] } = tmp);
    obj29.style = items8;
    obj29.children = tmp30.description;
    items7[2] = closure_22(legacyProps(tmp3[42]).Text, obj29);
    obj26.children = items7;
    items6[1] = closure_24(View, obj26);
    tmp23Result = null;
    if (featureName === legacyProps(tmp3[18]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
      const obj30 = { isKestrelTreatment: true === tmp30.isKestrelRaisedCap };
      tmp23Result = closure_22(AlwaysCompressImagesSwitch, obj30);
    }
    items6[2] = tmp23Result;
    const obj31 = { style: tmp.buttonContainer, children: null };
    const obj32 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp34.onPress;
    }
    obj32.onPress = onPress;
    const intl22 = legacyProps(tmp3[23]).intl;
    const string = intl22.string;
    const t3 = legacyProps(tmp3[23]).t;
    if (useTier0UpsellContent) {
      let stringResult2 = string(t3.cM8bbx);
    } else {
      stringResult2 = string(t3["8x0jKT"]);
    }
    obj32.text = stringResult2;
    obj32.icon = tmp5(tmp3[58]);
    let str3 = "primary";
    if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    const obj33 = { children: null };
    obj32.variant = str3;
    const items9 = [closure_22(legacyProps(tmp3[57]).Button, obj32)];
    const obj34 = { variant: "secondary", text: null, onPress: null };
    const intl23 = legacyProps(tmp3[23]).intl;
    obj34.text = intl23.string(legacyProps(tmp3[23]).t.PcTCB7);
    obj34.onPress = tmp35;
    items9[1] = closure_22(legacyProps(tmp3[57]).Button, obj34);
    obj31.children = items9;
    items6[3] = closure_24(View, obj31);
    obj33.children = items6;
    obj24.children = closure_24(View, obj33);
    tmp23Result1 = closure_22(legacyProps(tmp3[55]).ActionSheet, obj24);
  }
  return tmp23Result1;
}
