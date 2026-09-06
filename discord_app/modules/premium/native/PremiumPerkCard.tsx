// discord_app/modules/premium/native/PremiumPerkCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import _modDef13418 from "../../../../_runtime/metro/13418__.js";
import _modDef13419 from "../../../../_runtime/metro/13419__.js";
import _modDef13420 from "../../../../_runtime/metro/13420__.js";
import _modDef13421 from "../../../../_runtime/metro/13421__.js";
import _modDef13422 from "../../../../_runtime/metro/13422__.js";
import _modDef13423 from "../../../../_runtime/metro/13423__.js";
import _modDef13424 from "../../../../_runtime/metro/13424__.js";
import _modDef13425 from "../../../../_runtime/metro/13425__.js";
import _modDef13426 from "../../../../_runtime/metro/13426__.js";
import _modDef13427 from "../../../../_runtime/metro/13427__.js";
import _modDef13428 from "../../../../_runtime/metro/13428__.js";
import _modDef13429 from "../../../../_runtime/metro/13429__.js";
import _modDef13430 from "../../../../_runtime/metro/13430__.js";
import _modDef13431 from "../../../../_runtime/metro/13431__.js";
import _modDef13432 from "../../../../_runtime/metro/13432__.js";
import _modDef13433 from "../../../../_runtime/metro/13433__.js";
import _modDef13434 from "../../../../discord_assets/assets/images/perks/xbox_game_pass.jpg.js";
import PillTextDefault from "components/PillText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const PremiumTypes = fn(1373).PremiumTypes;
const Constants = fn(1074);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PerkCardVariant = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({
  [PerkCardVariant.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 },
  [PerkCardVariant.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 },
});
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles((arg0) => {
  let headerComponent = {
    container: null,
    headerComponent: null,
    image: null,
    title: null,
    description: null,
    button: null,
    imageContainer: null,
    imageOverlayText: null,
    imageOverlayTextContainer: null,
    pillTextContainer: null,
  };
  headerComponent = {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    width: frozen[arg0].width,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  headerComponent.container = headerComponent;
  headerComponent = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  };
  headerComponent.headerComponent = headerComponent;
  headerComponent.image = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  };
  headerComponent.title = { marginTop: 16, marginHorizontal: 16 };
  let num = 8;
  if (arg0 === headerComponent.WIDE) {
    num = 24;
  }
  const merged1 = Object.assign(arg0 === headerComponent.NARROW && { height: "100%" });
  headerComponent.description = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  headerComponent.button = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  headerComponent.imageContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  const obj1 = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  };
  const obj2 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp5 = arg0 === headerComponent.NARROW && { height: "100%" };
  headerComponent.imageOverlayText = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  const obj3 = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  headerComponent.imageOverlayTextContainer = {
    position: "absolute",
    bottom: "10%",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  };
  headerComponent.pillTextContainer = { position: "absolute", width: "auto", top: -8, left: 10 };
  return headerComponent;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default function PremiumPerkCard(variant) {
  ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
  ({ style, title, titleStyle } = variant);
  if (cta === undefined) {
    const intl = util.intl;
    cta = intl.string(util.t.jVcuVY);
  }
  let WIDE = variant.variant;
  if (WIDE === undefined) {
    WIDE = obj.WIDE;
  }
  ({ imageOverlayText, pillText } = variant);
  const tmp4 = closure_13(WIDE);
  const NARROW = obj.NARROW;
  useFontScale;
  if (null != imageSrc) {
    if (null != imageOverlayText) {
      obj = { style: tmp4.imageContainer, children: null };
      obj = { style: null, source: null };
      const items = [tmp4.image, imageStyle];
      obj.style = items;
      obj.source = imageSrc;
      const items1 = [React7(FastImageDefault, obj)];
      const obj1 = { style: tmp4.imageOverlayTextContainer, children: null };
      const obj2 = { style: tmp4.imageOverlayText, variant: "text-md/bold", children: null };
      imageStyle = imageOverlayText.toUpperCase();
      obj2.children = imageStyle;
      imageSrc = React7(tmp6(4556).Text, obj2);
      obj1.children = imageSrc;
      items1[1] = React7(React4, obj1);
      obj.children = items1;
      let tmp15 = closure_1_10(React4, obj);
    } else {
      const obj3 = { style: null, source: null };
      const items2 = [tmp4.image, imageStyle];
      obj3.style = items2;
      obj3.source = imageSrc;
      tmp15 = React7(FastImageDefault, obj3);
    }
  } else {
    let tmp10 = null;
    if (null != headerComponent) {
      obj = { style: tmp4.headerComponent, children: headerComponent };
      tmp10 = React7(React4, obj);
    }
    if (null != description) {
      const obj4 = { variant: "text-sm/normal", children: description };
      let tmp21 = React7(tmp6(4556).Text, obj4);
    } else {
      tmp21 = null;
      if (null != bodyComponent) {
        tmp21 = bodyComponent;
      }
    }
    const items3 = [tmp4.container, ,];
    let tmp25 = WIDE === obj.NARROW;
    if (tmp25) {
      const obj5 = { height: tmp9 };
      tmp25 = obj5;
    }
    const obj6 = { style: null, children: null };
    items3[1] = tmp25;
    items3[2] = style;
    obj6.style = items3;
    let tmp26 = null != pillText;
    if (tmp26) {
      const obj7 = { pillText, style: tmp4.pillTextContainer };
      tmp26 = React7(PillTextDefault, obj7);
    }
    const items4 = [tmp26, tmp10, , ,];
    const obj8 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    const items5 = [tmp4.title, titleStyle];
    obj8.style = items5;
    obj8.children = title;
    items4[2] = React7(tmp6(4556).Text, obj8);
    const obj9 = { style: tmp4.description, children: tmp21 };
    items4[3] = React7(hasOwnProperty, obj9);
    let tmp29Result = null != buttonOnPress;
    if (tmp29Result) {
      const obj10 = { style: tmp4.button, children: null };
      const obj11 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
      obj10.children = tmp29(tmp6(4975).Button, obj11);
      tmp29Result = tmp29(tmp24, obj10);
    }
    items4[4] = tmp29Result;
    obj6.children = items4;
    return closure_1_10(React4, obj6);
  }
}
export const PerkCardTypes = {
  CUSTOM_PROFILE: "customProfile",
  CLIENT_THEMES: "clientThemes",
  SERVER_BOOSTS: "serverBoosts",
  GREYED_SERVER_BOOSTS: "greyServerBoosts",
  CUSTOM_APP_ICONS: "customAppIcons",
  EMOJI: "emoji",
  CUSTOM_SOUNDS: "customSounds",
  STICKER: "sticker",
  EARLY_ACCESS: "earlyAccess",
  MEMBER_PRICING: "memberPricing",
  LARGE_UPLOADS: "largeUploads",
  HD_VIDEO: "hdVideo",
  SUPER_REACTIONS: "superReactions",
  ENTRACE_SOUNDS: "entranceSounds",
  BADGE: "badge",
  GREYED_BADGE: "greyBadge",
  XBOX_GAME_PASS: "xboxGamePass",
};
export { PerkCardVariant };
export const PERK_CARD_SIZES = frozen;
export const usePerkCardHeight = function usePerkCardHeight(NARROW) {
  return useFontScale.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
};
export const usePremiumPerkCard = function usePremiumPerkCard() {
  let customProfile = subscriptionPlansLoaded(13417);
  subscriptionPlansLoaded = customProfile.useSubscriptionPlansLoaded();
  let obj1 = subscriptionPlansLoaded(4218);
  const maxFileSizeForPremiumType = obj1.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  const callback = noop.useCallback(() => {
    subscriptionPlansLoaded(7382);
    let params = { screen: constants.COLLECTIBLES_SHOP, params: null };
    params = { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD };
    params.params = params;
    params.openUserSettings(params);
  }, []);
  const callback1 = noop.useCallback(() => {
    subscriptionPlansLoaded(7382);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = noop.useCallback(() => {
    subscriptionPlansLoaded(7382);
    obj = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj);
  }, []);
  const callback3 = noop.useCallback(() => {
    let params = { screen: constants.GUILD_BOOSTING, params: null };
    params = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    params.params = params;
    params.openUserSettings(params);
  }, items);
  customProfile = {
    customProfile: null,
    clientThemes: null,
    serverBoosts: null,
    greyServerBoosts: null,
    customAppIcons: null,
    emoji: null,
    customSounds: null,
    sticker: null,
    earlyAccess: null,
    memberPricing: null,
    largeUploads: null,
    hdVideo: null,
    superReactions: null,
    entranceSounds: null,
    badge: null,
    greyBadge: null,
    xboxGamePass: null,
  };
  customProfile = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = noop.useCallback(() => {
    subscriptionPlansLoaded(7382);
    obj = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj);
  }, []);
  const intl = subscriptionPlansLoaded(1114).intl;
  customProfile.title = intl.string(subscriptionPlansLoaded(1114).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1114).intl;
  customProfile.description = intl2.string(subscriptionPlansLoaded(1114).t.Mt3U1W);
  customProfile.imageSrc = _modDef13418;
  customProfile.buttonOnPress = callback1;
  customProfile.customProfile = customProfile;
  obj1 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = subscriptionPlansLoaded(1114).intl;
  obj1.title = intl3.string(subscriptionPlansLoaded(1114).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1114).intl;
  obj1.description = intl4.string(subscriptionPlansLoaded(1114).t.CjRASJ);
  obj1.imageSrc = _modDef13419;
  obj1.buttonOnPress = callback2;
  customProfile.clientThemes = obj1;
  const obj2 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = subscriptionPlansLoaded(1114).intl;
  obj2.title = intl5.string(subscriptionPlansLoaded(1114).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1114).intl;
  obj2.description = intl6.string(subscriptionPlansLoaded(1114).t["4pEwXL"]);
  obj2.imageSrc = _modDef13420;
  obj2.buttonOnPress = callback3;
  customProfile.serverBoosts = obj2;
  const obj3 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = subscriptionPlansLoaded(1114).intl;
  obj3.title = intl7.string(subscriptionPlansLoaded(1114).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1114).intl;
  obj3.description = intl8.string(subscriptionPlansLoaded(1114).t["4pEwXL"]);
  obj3.imageSrc = _modDef13421;
  const intl9 = subscriptionPlansLoaded(1114).intl;
  obj3.imageOverlayText = intl9.string(subscriptionPlansLoaded(1114).t["/VzCKE"]);
  customProfile.greyServerBoosts = obj3;
  const obj4 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = subscriptionPlansLoaded(1114).intl;
  obj4.title = intl10.string(subscriptionPlansLoaded(1114).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1114).intl;
  obj4.description = intl11.string(subscriptionPlansLoaded(1114).t.mPyrE6);
  obj4.imageSrc = _modDef13422;
  obj4.buttonOnPress = callback4;
  customProfile.customAppIcons = obj4;
  const obj5 = { title: null, description: null, imageSrc: null };
  const intl12 = subscriptionPlansLoaded(1114).intl;
  obj5.title = intl12.string(subscriptionPlansLoaded(1114).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1114).intl;
  obj5.description = intl13.string(subscriptionPlansLoaded(1114).t.R5Xag2);
  obj5.imageSrc = _modDef13423;
  customProfile.emoji = obj5;
  const obj6 = { title: null, description: null, imageSrc: null };
  const intl14 = subscriptionPlansLoaded(1114).intl;
  obj6.title = intl14.string(subscriptionPlansLoaded(1114).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1114).intl;
  obj6.description = intl15.string(subscriptionPlansLoaded(1114).t["4lSyCY"]);
  obj6.imageSrc = _modDef13424;
  customProfile.customSounds = obj6;
  const obj7 = { title: null, description: null, imageSrc: null };
  const intl16 = subscriptionPlansLoaded(1114).intl;
  obj7.title = intl16.string(subscriptionPlansLoaded(1114).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1114).intl;
  obj7.description = intl17.string(subscriptionPlansLoaded(1114).t.hJG8ZN);
  obj7.imageSrc = _modDef13425;
  customProfile.sticker = obj7;
  const obj8 = { title: null, description: null, imageSrc: null };
  const intl18 = subscriptionPlansLoaded(1114).intl;
  obj8.title = intl18.string(subscriptionPlansLoaded(1114).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1114).intl;
  obj8.description = intl19.string(subscriptionPlansLoaded(1114).t.M9AIt1);
  obj8.imageSrc = _modDef13426;
  customProfile.earlyAccess = obj8;
  const obj9 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = subscriptionPlansLoaded(1114).intl;
  obj9.title = intl20.string(subscriptionPlansLoaded(1114).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1114).intl;
  obj9.description = intl21.string(subscriptionPlansLoaded(1114).t.wo3D3T);
  obj9.imageSrc = _modDef13427;
  obj9.buttonOnPress = callback;
  customProfile.memberPricing = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl22 = subscriptionPlansLoaded(1114).intl;
  obj10.title = intl22.formatToPlainString(subscriptionPlansLoaded(1114).t.jqhAdL, {
    premiumMaxSize: maxFileSizeForPremiumType,
  });
  const intl23 = subscriptionPlansLoaded(1114).intl;
  obj10.description = intl23.formatToPlainString(subscriptionPlansLoaded(1114).t["HI+cfm"], {
    premiumMaxSize: maxFileSizeForPremiumType,
  });
  obj10.imageSrc = _modDef13428;
  customProfile.largeUploads = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl24 = subscriptionPlansLoaded(1114).intl;
  obj11.title = intl24.string(subscriptionPlansLoaded(1114).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1114).intl;
  obj11.description = intl25.string(subscriptionPlansLoaded(1114).t.ymCPxp);
  obj11.imageSrc = _modDef13429;
  customProfile.hdVideo = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl26 = subscriptionPlansLoaded(1114).intl;
  obj12.title = intl26.string(subscriptionPlansLoaded(1114).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1114).intl;
  obj12.description = intl27.string(subscriptionPlansLoaded(1114).t.A0U9fk);
  obj12.imageSrc = _modDef13430;
  customProfile.superReactions = obj12;
  const obj13 = { title: null, description: null, imageSrc: null };
  const intl28 = subscriptionPlansLoaded(1114).intl;
  obj13.title = intl28.string(subscriptionPlansLoaded(1114).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1114).intl;
  obj13.description = intl29.string(subscriptionPlansLoaded(1114).t["7ZCYvC"]);
  obj13.imageSrc = _modDef13431;
  customProfile.entranceSounds = obj13;
  const obj14 = { title: null, description: null, imageSrc: null };
  const intl30 = subscriptionPlansLoaded(1114).intl;
  obj14.title = intl30.string(subscriptionPlansLoaded(1114).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1114).intl;
  obj14.description = intl31.string(subscriptionPlansLoaded(1114).t["37MFFq"]);
  obj14.imageSrc = _modDef13432;
  customProfile.badge = obj14;
  const obj15 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = subscriptionPlansLoaded(1114).intl;
  obj15.title = intl32.string(subscriptionPlansLoaded(1114).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1114).intl;
  obj15.description = intl33.string(subscriptionPlansLoaded(1114).t["37MFFq"]);
  obj15.imageSrc = _modDef13433;
  const intl34 = subscriptionPlansLoaded(1114).intl;
  obj15.imageOverlayText = intl34.string(subscriptionPlansLoaded(1114).t["/VzCKE"]);
  customProfile.greyBadge = obj15;
  const obj16 = { title: null, imageSrc: null, imageStyle: null, bodyComponent: null };
  const intl35 = subscriptionPlansLoaded(1114).intl;
  obj16.title = intl35.string(subscriptionPlansLoaded(1114).t.aJE9i1);
  obj16.imageSrc = { uri: _modDef13434 };
  obj16.imageStyle = { aspectRatio: 1.9789473684210526 };
  const obj18 = { variant: "text-sm/normal", children: null };
  const intl36 = subscriptionPlansLoaded(1114).intl;
  const obj19 = { termsLink: null };
  const obj17 = { uri: _modDef13434 };
  obj19.termsLink = HelpdeskUtilsDefault.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj18.children = intl36.format(subscriptionPlansLoaded(1114).t["9Wv+8h"], obj19);
  obj16.bodyComponent = closure_9(subscriptionPlansLoaded(4556).Text, obj18);
  customProfile.xboxGamePass = obj16;
  return customProfile;
};
