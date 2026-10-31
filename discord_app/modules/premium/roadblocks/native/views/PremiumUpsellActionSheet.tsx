// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import PremiumUtils from "../../../../../utils/PremiumUtils.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05587_LinearGradient.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import APNGPlayer from "../../../../image/native/APNGPlayer.android.tsx";
import openPremiumUpsellActionSheet from "../utils/openPremiumUpsellActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../../user_settings/ThemeStore.tsx";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function PremiumUpsellImage(arg0) {
  ({ image, style, useReducedMotion } = arg0);
  if (obj.isAndroid()) {
    if (!useReducedMotion) {
      if (null != image.uri) {
        const obj2 = { url: image.uri, style, autoplay: true };
        let tmp5 = collapsedCategories(APNGPlayer.APNGPlayer, obj2);
      }
      return tmp5;
    }
  }
  tmp5 = collapsedCategories(FastImageDefault, {
    source: image,
    resizeMode: "contain",
    style,
    enableAnimation: !useReducedMotion,
    accessible: false,
  });
  obj = PlatformUtils;
  const obj3 = { source: image, resizeMode: "contain", style, enableAnimation: !useReducedMotion, accessible: false };
}
function PremiumUpsellHero(arg0) {
  ({ pageConfig, styles, useReducedMotion } = arg0);
  if (null != pageConfig.illustration) {
    const obj2 = { style: styles.hero, children: pageConfig.illustration };
    let tmp13 = collapsedCategories(View, obj2);
  } else {
    tmp13 = null;
    if (null != pageConfig.image) {
      if (null != pageConfig.imageGradientBackground) {
        const obj3 = { style: styles.imageGradientBackgroundContainer, children: null };
        const obj4 = {
          colors: pageConfig.imageGradientBackground.colors,
          start: pageConfig.imageGradientBackground.start,
          end: pageConfig.imageGradientBackground.end,
          style: styles.imageGradientBackground,
          children: null,
        };
        const obj5 = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items = [, ,];
        ({ hero: arr2[0], image: arr2[1], imageInGradientBackground: arr2[2] } = styles);
        obj5.style = items;
        obj5.useReducedMotion = useReducedMotion;
        obj4.children = collapsedCategories(PremiumUpsellImage, obj5);
        obj3.children = collapsedCategories(LinearGradientDefault, obj4);
        let tmp3 = collapsedCategories(View, obj3);
      } else {
        const obj = { image: pageConfig.image, style: null, useReducedMotion: null };
        const items1 = [,];
        ({ hero: arr[0], image: arr[1] } = styles);
        obj.style = items1;
        obj.useReducedMotion = useReducedMotion;
        tmp3 = collapsedCategories(PremiumUpsellImage, obj);
      }
    }
  }
  return tmp13;
}
const View = fn(17).View;
const PremiumConstants = fn(1385);
({ PremiumSubscriptionSKUs: c10, PremiumTypes: closure_11, PremiumUpsellTypes: closure_12 } = PremiumConstants);
const Constants = fn(1072);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ThemeTypes: closure_15 } = Constants);
const ApplicationStreamFPS = fn(5864).ApplicationStreamFPS;
const premiumMax = fn(9795).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  hero: { alignSelf: "center", marginTop: nativeDefault.space.PX_16 },
  image: { width: 240, height: 144 },
  text: { alignSelf: "center", textAlign: "center" },
  betaTag: { marginLeft: 0 },
  description: null,
  textContainer: null,
  buttonContainer: null,
  imageGradientBackgroundContainer: null,
  imageGradientBackground: null,
  imageInGradientBackground: null,
};
let obj3 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj2.description = { marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.textContainer = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
let obj5 = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.buttonContainer = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackgroundContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};
let obj6 = { marginTop: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj2.imageGradientBackground = {
  width: "100%",
  marginHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.space.PX_12,
};
let obj7 = { width: "100%", marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.space.PX_12 };
obj2.imageInGradientBackground = { marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_32 };
let closure_21 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellActionSheet.tsx");

export default function PremiumUpsellActionSheet(analyticsLocations) {
  ({ featureName, legacyProps } = analyticsLocations);
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  analyticsLocations = undefined;
  let useTier0UpsellContent;
  let onViewAllPerks;
  closure_4 = undefined;
  const tmp = closure_21();
  const tmp3 = useTier0UpsellContent;
  const items = [UserStore];
  const stateFromStores = legacyProps(useTier0UpsellContent[35]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  analyticsLocations = analyticsLocations(useTier0UpsellContent[36])(analyticsLocations1).analyticsLocations;
  let obj = legacyProps(useTier0UpsellContent[35]);
  let initialUpsellKey;
  if (legacyProps != null) {
    initialUpsellKey = legacyProps.initialUpsellKey;
  }
  if (initialUpsellKey == null) {
    initialUpsellKey = legacyProps(tmp3[19]).getUpsellType(featureName);
    const tmp2Result = legacyProps(tmp3[19]);
  }
  const premiumUpsellConfig = legacyProps(useTier0UpsellContent[37]).usePremiumUpsellConfig(
    initialUpsellKey,
    analyticsLocations,
  );
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  let obj2 = legacyProps(useTier0UpsellContent[37]);
  const tmp6 = analyticsLocations1;
  const premiumTrialOffer = legacyProps(tmp3[38]).usePremiumTrialOffer();
  legacyProps(tmp3[39]);
  let mobileRoadblockButtonText = null;
  if (!useTier0UpsellContent) {
    let obj3 = { subscriptionTier: TIER_2.TIER_2, trialOffer: premiumTrialOffer, discountOffer: tmp11 };
    mobileRoadblockButtonText = legacyProps(tmp3[40]).getMobileRoadblockButtonText(obj3);
    const tmp2Result18 = legacyProps(tmp3[40]);
  }
  const tmp2Result16 = legacyProps(tmp3[38]);
  const items1 = [ThemeStore];
  const stateFromStores1 = legacyProps(tmp3[35]).useStateFromStores(items1, () => theme.theme);
  const tmp2Result19 = legacyProps(tmp3[35]);
  const items2 = [SelectedGuildStore];
  const stateFromStores2 = legacyProps(tmp3[35]).useStateFromStores(items2, () => guildId.getGuildId());
  const tmp17 = useTier0UpsellContent ? closure_11.TIER_0 : closure_11.TIER_2;
  const tmp2Result20 = legacyProps(tmp3[35]);
  const token = legacyProps(tmp3[14]).useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START);
  const tmp2Result21 = legacyProps(tmp3[14]);
  let str = "dark";
  const token1 = legacyProps(tmp3[14]).useToken(tmp5(tmp3[13]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END);
  if (stateFromStores1 === constants4.LIGHT) {
    str = "light";
  }
  const tmp2Result22 = legacyProps(tmp3[14]);
  const premiumTypeDisplayName = legacyProps(tmp3[15]).getPremiumTypeDisplayName(tmp17);
  let effectiveUploadLimit;
  if (featureName === legacyProps(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE) {
    const tmp2Result24 = legacyProps(tmp3[17]);
    effectiveUploadLimit = tmp2Result24.getEffectiveUploadLimit(legacyProps(tmp3[18]).maxFileSize(stateFromStores2));
    const tmp2Result25 = legacyProps(tmp3[18]);
  }
  const tmp2Result23 = legacyProps(tmp3[15]);
  let tmp22;
  if (tmp2Result26.isEmojiPickerUpsellFeature(featureName)) {
    tmp22 = closure_18(legacyProps(tmp3[20]).ReactionsSpotIllustration, { width: 198, height: 132, accessible: false });
  }
  const obj4 = {};
  const obj5 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl = legacyProps(tmp3[21]).intl;
  obj5.title = intl.string(legacyProps(tmp3[21]).t.jGDYF0);
  const intl2 = legacyProps(tmp3[21]).intl;
  obj5.description = intl2.formatToPlainString(legacyProps(tmp3[21]).t["fc+8uy"], {
    nitroTierName: premiumTypeDisplayName,
  });
  obj5.analyticsPage = constants3.PREMIUM_UPSELL_SOUNDBOARD_EVERYWHERE;
  obj5.upsellType = constants.SOUNDBOARD_EVERYWHERE_UPSELL;
  tmp2Result26 = legacyProps(tmp3[19]);
  obj5.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE] = obj5;
  const obj7 = {
    title: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
    illustration: null,
  };
  const intl3 = legacyProps(tmp3[21]).intl;
  obj7.title = intl3.string(legacyProps(tmp3[21]).t.zY5PPb);
  const intl4 = legacyProps(tmp3[21]).intl;
  obj7.description = intl4.formatToPlainString(legacyProps(tmp3[21]).t["uukIF/"], {
    nitroTierName: premiumTypeDisplayName,
  });
  obj7.analyticsPage = constants3.PREMIUM_UPSELL_EMOJI_EVERYWHERE;
  obj7.upsellType = constants.EMOJI_EVERYWHERE_UPSELL;
  const obj6 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_" + str + ".png" };
  obj7.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj7.illustration = tmp22;
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.EMOJIS_EVERYWHERE] = obj7;
  const obj9 = { title: null, description: null, analyticsPage: null, upsellType: null, illustration: null };
  const intl5 = legacyProps(tmp3[21]).intl;
  obj9.title = intl5.string(legacyProps(tmp3[21]).t.Eukdgl);
  const intl6 = legacyProps(tmp3[21]).intl;
  obj9.description = intl6.string(legacyProps(tmp3[21]).t.sMmd7s);
  obj9.analyticsPage = constants3.PREMIUM_UPSELL_STICKERS_EVERYWHERE;
  obj9.upsellType = constants.STICKERS_EVERYWHERE_UPSELL;
  obj9.illustration = closure_18(legacyProps(tmp3[22]).StickersSpotIllustration, {
    width: 235,
    height: 132,
    accessible: false,
  });
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.STICKERS_EVERYWHERE] = obj9;
  const obj10 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl7 = legacyProps(tmp3[21]).intl;
  obj10.title = intl7.string(legacyProps(tmp3[21]).t["G+pngo"]);
  const obj11 = { children: null };
  const obj8 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj11.children = legacyProps(tmp3[18]).fileUploadLimitRoadblockDescription({
    guildId: stateFromStores2,
    maxSize: effectiveUploadLimit,
  });
  obj10.description = closure_18(closure_19, obj11);
  obj10.analyticsPage = constants3.PREMIUM_UPSELL_FILE_UPLOAD;
  obj10.upsellType = constants.LARGER_FILE_UPLOAD_UPSELL;
  const tmp2Result27 = legacyProps(tmp3[18]);
  obj10.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE] = obj10;
  const obj13 = {
    title: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
    illustration: null,
  };
  const intl8 = legacyProps(tmp3[21]).intl;
  obj13.title = intl8.string(legacyProps(tmp3[21]).t.SI7R9I);
  const intl9 = legacyProps(tmp3[21]).intl;
  obj13.description = intl9.formatToPlainString(legacyProps(tmp3[21]).t.uGkSY2, {
    nitroTierName: premiumTypeDisplayName,
  });
  obj13.analyticsPage = constants3.PREMIUM_UPSELL_ANIMATED_EMOJI;
  obj13.upsellType = constants.ANIMATED_EMOJI_UPSELL;
  const obj12 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_" + str + "_v2.png" };
  obj13.image = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  obj13.illustration = tmp22;
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.ANIMATED_EMOJIS] = obj13;
  const obj15 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl10 = legacyProps(tmp3[21]).intl;
  obj15.title = intl10.string(legacyProps(tmp3[21]).t.p0I2Bk);
  const intl11 = legacyProps(tmp3[21]).intl;
  obj15.description = intl11.string(legacyProps(tmp3[21]).t.jBqF2k);
  obj15.analyticsPage = constants3.PREMIUM_UPSELL_CLIENT_THEMES;
  obj15.upsellType = constants.CLIENT_THEMES_UPSELL;
  obj15.image = analyticsLocations(tmp3[23]);
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.CLIENT_THEMES] = obj15;
  const obj16 = { title: null, description: null, analyticsPage: null, upsellType: null, image: null };
  const intl12 = legacyProps(tmp3[21]).intl;
  obj16.title = intl12.string(legacyProps(tmp3[21]).t.TYFwcy);
  const intl13 = legacyProps(tmp3[21]).intl;
  obj16.description = intl13.string(legacyProps(tmp3[21]).t.HDt8ip);
  obj16.analyticsPage = constants3.PREMIUM_UPSELL_APP_ICONS;
  obj16.upsellType = constants.APP_ICON_UPSELL;
  obj16.image = analyticsLocations(tmp3[24]);
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.APP_ICONS] = obj16;
  const obj17 = {
    title: null,
    showBetaBadge: true,
    description: null,
    analyticsPage: null,
    upsellType: null,
    illustration: null,
  };
  const intl14 = legacyProps(tmp3[21]).intl;
  obj17.title = intl14.formatToPlainString(legacyProps(tmp3[21]).t.GNoaxo, { premiumMax });
  const obj19 = { children: null };
  const intl15 = legacyProps(tmp3[21]).intl;
  obj19.children = intl15.format(legacyProps(tmp3[21]).t["1kFyto"], {
    premiumMax,
    onClick() {
      analyticsLocations(useTier0UpsellContent[25]).hideActionSheet(
        legacyProps(useTier0UpsellContent[26]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations(useTier0UpsellContent[25]);
      const result = legacyProps(useTier0UpsellContent[27]).showScheduledMessagesModal();
    },
  });
  obj17.description = closure_18(closure_19, obj19);
  obj17.analyticsPage = constants3.PREMIUM_UPSELL_SCHEDULED_MESSAGES;
  obj17.upsellType = constants.SCHEDULED_MESSAGES_MODAL_UPSELL;
  obj17.illustration = closure_18(legacyProps(tmp3[28]).NitroScheduleMessageSpotIllustration, {
    width: 198,
    height: 132,
    accessible: false,
  });
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.SCHEDULED_MESSAGES] = obj17;
  const obj21 = {
    title: null,
    description: null,
    analyticsPage: null,
    upsellType: null,
    image: null,
    imageGradientBackground: null,
  };
  const intl16 = legacyProps(tmp3[21]).intl;
  obj21.title = intl16.string(legacyProps(tmp3[21]).t.ETZQx5);
  const intl17 = legacyProps(tmp3[21]).intl;
  obj21.description = intl17.formatToPlainString(legacyProps(tmp3[21]).t["4nlpei"], {
    fps: ApplicationStreamFPS.FPS_60,
  });
  obj21.analyticsPage = constants3.PREMIUM_UPSELL_STREAM_HIGH_QUALITY;
  obj21.upsellType = constants.STREAM_QUALITY_UPSELL;
  obj21.image = analyticsLocations(tmp3[29]);
  const obj23 = {
    colors: null,
    start: legacyProps(tmp3[30]).HorizontalGradient.START,
    end: legacyProps(tmp3[30]).HorizontalGradient.END,
  };
  const items3 = [token, token1];
  obj23.colors = items3;
  obj21.imageGradientBackground = obj23;
  obj4[legacyProps(tmp3[16]).EntitlementFeatureNames.STREAM_HIGH_QUALITY] = obj21;
  closure_4 = tmp25;
  const obj14 = { uri: "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_" + str + ".png" };
  const obj18 = { premiumMax };
  const obj20 = {
    premiumMax,
    onClick() {
      analyticsLocations(useTier0UpsellContent[25]).hideActionSheet(
        legacyProps(useTier0UpsellContent[26]).PREMIUM_UPSELL_ACTION_SHEET_KEY,
      );
      const obj = analyticsLocations(useTier0UpsellContent[25]);
      const result = legacyProps(useTier0UpsellContent[27]).showScheduledMessagesModal();
    },
  };
  const obj22 = { fps: ApplicationStreamFPS.FPS_60 };
  const items4 = [AccessibilityStore];
  const stateFromStores3 = legacyProps(tmp3[35]).useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  const tmp2Result28 = legacyProps(tmp3[35]);
  let result = legacyProps(tmp3[19]).isEmojiPickerUpsellFeature(featureName);
  if (!result) {
    result = legacyProps(tmp3[41]).getMobileStickerPickerUpsellRestyleEnabledForFeature(
      featureName,
      "native.PremiumUpsellActionSheet",
    );
    const tmp2Result30 = legacyProps(tmp3[41]);
  }
  const items5 = [obj4[featureName], analyticsLocations, useTier0UpsellContent, legacyProps];
  const effect = onViewAllPerks.useEffect(() => {
    let analyticsProperties;
    if (legacyProps != null) {
      analyticsProperties = legacyProps.analyticsProperties;
    }
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    let upsellType;
    if (closure_4 != null) {
      upsellType = closure_4.upsellType;
    }
    obj2.type = upsellType;
    let analyticsPage;
    if (closure_4 != null) {
      analyticsPage = closure_4.analyticsPage;
    }
    obj2.location = { page: analyticsPage };
    obj2.location_stack = analyticsLocations;
    const obj = AnalyticsUtilsDefault;
    obj2.sku_id = PremiumUtils.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? TIER_2.TIER_0 : TIER_2.TIER_2);
    guildId = RTCConnectionStore.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    obj2.voice_guild_id = guildId;
    obj.track(constants2.PREMIUM_UPSELL_VIEWED, obj2);
  }, items5);
  const tmp29 = analyticsLocations(tmp3[43])(
    useTier0UpsellContent,
    onViewAllPerks,
    obj4[featureName].analyticsPage,
    undefined,
    tmp6,
  );
  const loading = tmp29.loading;
  [][0] = onViewAllPerks;
  let tmp24Result2 = null;
  if (null != obj4[featureName]) {
    const obj24 = { startExpanded: true, onDismiss: analyticsLocations.onDismiss, children: null };
    const obj25 = { pageConfig: tmp25, styles: tmp, useReducedMotion: stateFromStores3 };
    const items6 = [closure_18(PremiumUpsellHero, obj25), ,];
    const obj26 = { style: tmp.textContainer, children: null };
    let tmp24Result = null;
    if (true === tmp25.showBetaBadge) {
      const obj27 = { size: legacyProps(tmp3[46]).BetaSizes.SMALL, gradient: true, style: tmp.betaTag };
      tmp24Result = closure_18(tmp5(tmp3[46]), obj27);
      const tmp5Result = tmp5(tmp3[46]);
    }
    const items7 = [tmp24Result, ,];
    const obj28 = {
      style: tmp.text,
      variant: "heading-lg/extrabold",
      accessibilityRole: "header",
      children: tmp25.title,
    };
    items7[1] = closure_18(legacyProps(tmp3[47]).Text, obj28);
    const obj29 = { style: null, variant: "text-sm/normal", children: null };
    const items8 = [,];
    ({ text: arr10[0], description: arr10[1] } = tmp);
    obj29.style = items8;
    obj29.children = tmp25.description;
    items7[2] = closure_18(legacyProps(tmp3[47]).Text, obj29);
    obj26.children = items7;
    items6[1] = closure_20(closure_4, obj26);
    const obj30 = { style: tmp.buttonContainer, children: null };
    const obj31 = { loading, onPress: null, text: null, icon: null, variant: null };
    let onPress = null;
    if (!loading) {
      onPress = tmp29.onPress;
    }
    obj31.onPress = onPress;
    if (useTier0UpsellContent) {
      const intl19 = legacyProps(tmp3[21]).intl;
      mobileRoadblockButtonText = intl19.string(legacyProps(tmp3[21]).t.cM8bbx);
    } else if (mobileRoadblockButtonText == null) {
      const intl18 = legacyProps(tmp3[21]).intl;
      mobileRoadblockButtonText = intl18.string(legacyProps(tmp3[21]).t["8x0jKT"]);
    }
    obj31.text = mobileRoadblockButtonText;
    obj31.icon = tmp5(tmp3[49]);
    let str3 = "primary";
    if (result) {
      let str4 = "experimental_premium-primary";
      if (useTier0UpsellContent) {
        str4 = "experimental_premium-basic";
      }
      str3 = str4;
    }
    const obj32 = { children: null };
    obj31.variant = str3;
    const items9 = [closure_18(legacyProps(tmp3[48]).Button, obj31)];
    const obj33 = { variant: "secondary", text: null, onPress: null };
    const intl20 = legacyProps(tmp3[21]).intl;
    obj33.text = intl20.string(legacyProps(tmp3[21]).t.PcTCB7);
    obj33.onPress = tmp30;
    items9[1] = closure_18(legacyProps(tmp3[48]).Button, obj33);
    obj30.children = items9;
    items6[2] = closure_20(closure_4, obj30);
    obj32.children = items6;
    obj24.children = closure_20(closure_4, obj32);
    tmp24Result2 = closure_18(legacyProps(tmp3[45]).ActionSheet, obj24);
  }
  return tmp24Result2;
}
