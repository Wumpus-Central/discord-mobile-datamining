// === Module 9920: PremiumPerkCard ===

// Module 9920 (PremiumPerkCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import useFontScale from "useFontScale" /* 5881 */;
import FastImageDefault from "FastImage" /* 5957 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import _modDef9925 from "module_9925" /* 9925 */;
import _modDef9926 from "module_9926" /* 9926 */;
import _modDef9927 from "module_9927" /* 9927 */;
import _modDef9928 from "module_9928" /* 9928 */;
import _modDef9929 from "module_9929" /* 9929 */;
import _modDef9930 from "module_9930" /* 9930 */;
import _modDef9931 from "module_9931" /* 9931 */;
import _modDef9932 from "module_9932" /* 9932 */;
import _modDef9933 from "module_9933" /* 9933 */;
import _modDef9934 from "module_9934" /* 9934 */;
import _modDef9935 from "module_9935" /* 9935 */;
import _modDef9936 from "module_9936" /* 9936 */;
import _modDef9937 from "module_9937" /* 9937 */;
import _modDef9938 from "module_9938" /* 9938 */;
import _modDef9939 from "module_9939" /* 9939 */;
import _modDef9940 from "module_9940" /* 9940 */;
import _modDef9941 from "module_9941" /* 9941 */;
import PillTextDefault from "PillText" /* 9942 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const PremiumTypes = fn(1387).PremiumTypes;
const Constants = fn(1072);
({ HelpdeskArticles: metroImportDefault, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PerkCardVariant = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [PerkCardVariant.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 }, [PerkCardVariant.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 } });
const createStyles = fn(5243);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: null, headerComponent: null, image: null, title: null, description: null, button: null, imageContainer: null, imageOverlayText: null, imageOverlayTextContainer: null, pillTextContainer: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: frozen[arg0].width };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: frozen[arg0].width };
  obj.headerComponent = { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, overflow: "hidden" };
  const obj3 = { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, overflow: "hidden" };
  obj.image = { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
  obj.title = { marginTop: 16, marginHorizontal: 16 };
  let num = 8;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  const merged1 = Object.assign(arg0 === obj.NARROW && { height: "100%" });
  obj.description = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  obj.button = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  obj.imageContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  const obj4 = { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
  const obj5 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp5 = arg0 === obj.NARROW && { height: "100%" };
  obj.imageOverlayText = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  const obj6 = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  obj.imageOverlayTextContainer = { position: "absolute", bottom: "10%", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" };
  obj.pillTextContainer = { position: "absolute", width: "auto", top: -8, left: 10 };
  return obj;
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
      const obj2 = { style: tmp4.imageContainer, children: null };
      const obj3 = { style: null, source: null };
      items = [tmp4.image, imageStyle];
      obj3.style = items;
      obj3.source = imageSrc;
      const items1 = [React6(FastImageDefault, obj3), ];
      const obj4 = { style: tmp4.imageOverlayTextContainer, children: null };
      const obj5 = { style: tmp4.imageOverlayText, variant: "body-md/semibold", children: null };
      imageStyle = imageOverlayText.toUpperCase();
      obj5.children = imageStyle;
      imageSrc = React6(Text_Text.Text, obj5);
      obj4.children = imageSrc;
      items1[1] = React6(React4, obj4);
      obj2.children = items1;
      let tmp15 = closure_1_10(React4, obj2);
    } else {
      const obj6 = { style: null, source: null };
      const items2 = [tmp4.image, imageStyle];
      obj6.style = items2;
      obj6.source = imageSrc;
      tmp15 = React6(FastImageDefault, obj6);
    }
  } else {
    let tmp10 = null;
    if (null != headerComponent) {
      obj = { style: tmp4.headerComponent, children: headerComponent };
      tmp10 = React6(React4, obj);
    }
    if (null != description) {
      const obj7 = { variant: "body-sm/normal", children: description };
      let tmp21 = React6(Text_Text.Text, obj7);
    } else {
      tmp21 = null;
      if (null != bodyComponent) {
        tmp21 = bodyComponent;
      }
    }
    const items3 = [tmp4.container, , ];
    let tmp25 = WIDE === tmp5.NARROW;
    if (tmp25) {
      const obj8 = { height: tmp9 };
      tmp25 = obj8;
    }
    const obj9 = { style: null, children: null };
    items3[1] = tmp25;
    items3[2] = style;
    obj9.style = items3;
    let tmp26 = null != pillText;
    if (tmp26) {
      const obj10 = { pillText, style: tmp4.pillTextContainer };
      tmp26 = React6(PillTextDefault, obj10);
    }
    const items4 = [tmp26, tmp10, , , ];
    const obj11 = { style: null, variant: "heading-lg/semibold", accessibilityRole: "header", children: null };
    const items5 = [tmp4.title, titleStyle];
    obj11.style = items5;
    obj11.children = title;
    items4[2] = React6(Text_Text.Text, obj11);
    const obj12 = { style: tmp4.description, children: tmp21 };
    items4[3] = React6(hasOwnProperty, obj12);
    let tmp29Result = null != buttonOnPress;
    if (tmp29Result) {
      const obj13 = { style: tmp4.button, children: null };
      const obj14 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
      obj13.children = React6(components_Button_Button.Button, obj14);
      tmp29Result = React6(React4, obj13);
    }
    items4[4] = tmp29Result;
    obj9.children = items4;
    return closure_1_10(React4, obj9);
  }
  tmp5 = obj;
};
export const PerkCardTypes = { CUSTOM_PROFILE: "customProfile", CLIENT_THEMES: "clientThemes", SERVER_BOOSTS: "serverBoosts", GREYED_SERVER_BOOSTS: "greyServerBoosts", CUSTOM_APP_ICONS: "customAppIcons", EMOJI: "emoji", CUSTOM_SOUNDS: "customSounds", STICKER: "sticker", EARLY_ACCESS: "earlyAccess", MEMBER_PRICING: "memberPricing", LARGE_UPLOADS: "largeUploads", HD_VIDEO: "hdVideo", SUPER_REACTIONS: "superReactions", ENTRACE_SOUNDS: "entranceSounds", BADGE: "badge", GREYED_BADGE: "greyBadge", XBOX_GAME_PASS: "xboxGamePass" };
export { PerkCardVariant };
export const PERK_CARD_SIZES = frozen;
export function usePerkCardHeight(NARROW) {
  return useFontScale.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
}
export function usePremiumPerkCard() {
  const tmp = subscriptionPlansLoaded;
  subscriptionPlansLoaded = subscriptionPlansLoaded(9921).useSubscriptionPlansLoaded();
  let obj = subscriptionPlansLoaded(9921);
  const maxFileSizeForPremiumType = subscriptionPlansLoaded(2171).getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  let obj2 = subscriptionPlansLoaded(2171);
  const isUserEligibleForThirdPartyPerks = subscriptionPlansLoaded(9922).useIsUserEligibleForThirdPartyPerks();
  state = undefined;
  if (isUserEligibleForThirdPartyPerks != null) {
    state = isUserEligibleForThirdPartyPerks.state;
  }
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.COLLECTIBLES_SHOP, params: null };
    const obj = subscriptionPlansLoaded(8537);
    obj2.params = { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD };
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    subscriptionPlansLoaded(8537).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
  }, []);
  items = [subscriptionPlansLoaded];
  const callback2 = noop.useCallback(() => {
    subscriptionPlansLoaded(8537).openUserSettings({ screen: constants.APPEARANCE_THEME_PICKER });
  }, []);
  const callback3 = noop.useCallback(() => {
    const obj2 = { screen: constants.GUILD_BOOSTING, params: { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded } };
    openUserSettings.openUserSettings(obj2);
  }, items);
  const obj4 = { customProfile: null, clientThemes: null, serverBoosts: null, greyServerBoosts: null, customAppIcons: null, emoji: null, customSounds: null, sticker: null, earlyAccess: null, memberPricing: null, largeUploads: null, hdVideo: null, superReactions: null, entranceSounds: null, badge: null, greyBadge: null, xboxGamePass: null };
  const obj5 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = noop.useCallback(() => {
    subscriptionPlansLoaded(8537).openUserSettings({ screen: constants.APP_ICONS });
  }, []);
  const intl = tmp(1113).intl;
  obj5.title = intl.string(tmp(1113).t.KcyDwF);
  const intl2 = tmp(1113).intl;
  obj5.description = intl2.string(tmp(1113).t.Mt3U1W);
  obj5.imageSrc = _modDef9925;
  obj5.buttonOnPress = callback1;
  obj4.customProfile = obj5;
  const obj6 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = tmp(1113).intl;
  obj6.title = intl3.string(tmp(1113).t.kWM48G);
  const intl4 = tmp(1113).intl;
  obj6.description = intl4.string(tmp(1113).t.CjRASJ);
  obj6.imageSrc = _modDef9926;
  obj6.buttonOnPress = callback2;
  obj4.clientThemes = obj6;
  const obj7 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = tmp(1113).intl;
  obj7.title = intl5.string(tmp(1113).t["NyDu/6"]);
  const intl6 = tmp(1113).intl;
  obj7.description = intl6.string(tmp(1113).t["4pEwXL"]);
  obj7.imageSrc = _modDef9927;
  obj7.buttonOnPress = callback3;
  obj4.serverBoosts = obj7;
  const obj8 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = tmp(1113).intl;
  obj8.title = intl7.string(tmp(1113).t["NyDu/6"]);
  const intl8 = tmp(1113).intl;
  obj8.description = intl8.string(tmp(1113).t["4pEwXL"]);
  obj8.imageSrc = _modDef9928;
  const intl9 = tmp(1113).intl;
  obj8.imageOverlayText = intl9.string(tmp(1113).t["/VzCKE"]);
  obj4.greyServerBoosts = obj8;
  const obj9 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = tmp(1113).intl;
  obj9.title = intl10.string(tmp(1113).t.OuItFi);
  const intl11 = tmp(1113).intl;
  obj9.description = intl11.string(tmp(1113).t.mPyrE6);
  obj9.imageSrc = _modDef9929;
  obj9.buttonOnPress = callback4;
  obj4.customAppIcons = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl12 = tmp(1113).intl;
  obj10.title = intl12.string(tmp(1113).t["R2IV/Q"]);
  const intl13 = tmp(1113).intl;
  obj10.description = intl13.string(tmp(1113).t.R5Xag2);
  obj10.imageSrc = _modDef9930;
  obj4.emoji = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl14 = tmp(1113).intl;
  obj11.title = intl14.string(tmp(1113).t.LWsArT);
  const intl15 = tmp(1113).intl;
  obj11.description = intl15.string(tmp(1113).t["4lSyCY"]);
  obj11.imageSrc = _modDef9931;
  obj4.customSounds = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl16 = tmp(1113).intl;
  obj12.title = intl16.string(tmp(1113).t.tzdIwI);
  const intl17 = tmp(1113).intl;
  obj12.description = intl17.string(tmp(1113).t.hJG8ZN);
  obj12.imageSrc = _modDef9932;
  obj4.sticker = obj12;
  const obj13 = { title: null, description: null, imageSrc: null };
  const intl18 = tmp(1113).intl;
  obj13.title = intl18.string(tmp(1113).t.EYxi0o);
  const intl19 = tmp(1113).intl;
  obj13.description = intl19.string(tmp(1113).t.M9AIt1);
  obj13.imageSrc = _modDef9933;
  obj4.earlyAccess = obj13;
  const obj14 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = tmp(1113).intl;
  obj14.title = intl20.string(tmp(1113).t["H4/NBN"]);
  const intl21 = tmp(1113).intl;
  obj14.description = intl21.string(tmp(1113).t.wo3D3T);
  obj14.imageSrc = _modDef9934;
  obj14.buttonOnPress = callback;
  obj4.memberPricing = obj14;
  const obj15 = { title: null, description: null, imageSrc: null };
  const intl22 = tmp(1113).intl;
  obj15.title = intl22.formatToPlainString(tmp(1113).t.jqhAdL, { premiumMaxSize: maxFileSizeForPremiumType });
  const intl23 = tmp(1113).intl;
  obj15.description = intl23.formatToPlainString(tmp(1113).t["HI+cfm"], { premiumMaxSize: maxFileSizeForPremiumType });
  obj15.imageSrc = _modDef9935;
  obj4.largeUploads = obj15;
  const obj16 = { title: null, description: null, imageSrc: null };
  const intl24 = tmp(1113).intl;
  obj16.title = intl24.string(tmp(1113).t.RSXQYO);
  const intl25 = tmp(1113).intl;
  obj16.description = intl25.string(tmp(1113).t.ymCPxp);
  obj16.imageSrc = _modDef9936;
  obj4.hdVideo = obj16;
  const obj17 = { title: null, description: null, imageSrc: null };
  const intl26 = tmp(1113).intl;
  obj17.title = intl26.string(tmp(1113).t["6S7kO7"]);
  const intl27 = tmp(1113).intl;
  obj17.description = intl27.string(tmp(1113).t.A0U9fk);
  obj17.imageSrc = _modDef9937;
  obj4.superReactions = obj17;
  const obj18 = { title: null, description: null, imageSrc: null };
  const intl28 = tmp(1113).intl;
  obj18.title = intl28.string(tmp(1113).t["f4M+H9"]);
  const intl29 = tmp(1113).intl;
  obj18.description = intl29.string(tmp(1113).t["7ZCYvC"]);
  obj18.imageSrc = _modDef9938;
  obj4.entranceSounds = obj18;
  const obj19 = { title: null, description: null, imageSrc: null };
  const intl30 = tmp(1113).intl;
  obj19.title = intl30.string(tmp(1113).t.dcFfSJ);
  const intl31 = tmp(1113).intl;
  obj19.description = intl31.string(tmp(1113).t["37MFFq"]);
  obj19.imageSrc = _modDef9939;
  obj4.badge = obj19;
  const obj20 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = tmp(1113).intl;
  obj20.title = intl32.string(tmp(1113).t.dcFfSJ);
  const intl33 = tmp(1113).intl;
  obj20.description = intl33.string(tmp(1113).t["37MFFq"]);
  obj20.imageSrc = _modDef9940;
  const intl34 = tmp(1113).intl;
  obj20.imageOverlayText = intl34.string(tmp(1113).t["/VzCKE"]);
  obj4.greyBadge = obj20;
  const obj21 = { title: null, imageSrc: null, imageStyle: null, imageOverlayText: null, bodyComponent: null };
  const intl35 = tmp(1113).intl;
  obj21.title = intl35.string(tmp(1113).t.aJE9i1);
  const obj3 = subscriptionPlansLoaded(9922);
  obj21.imageSrc = { uri: _modDef9941 };
  obj21.imageStyle = { aspectRatio: 1.9789473684210526 };
  let stringResult = null;
  if (state === tmp(9923).ThirdPartyPerkClaimState.UPSELL) {
    const intl36 = tmp(1113).intl;
    stringResult = intl36.string(tmp(1113).t["/VzCKE"]);
  }
  obj21.imageOverlayText = stringResult;
  const obj23 = { variant: "body-sm/normal", children: null };
  const intl37 = tmp(1113).intl;
  const obj24 = { termsLink: null };
  const obj22 = { uri: _modDef9941 };
  obj24.termsLink = HelpdeskUtilsDefault.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj23.children = intl37.format(tmp(1113).t["9Wv+8h"], obj24);
  obj21.bodyComponent = closure_9(tmp(5866).Text, obj23);
  obj4.xboxGamePass = obj21;
  return obj4;
}