// === Module 15515: PremiumPerkCard ===

// Module 15515 (PremiumPerkCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import useFontScale from "useFontScale" /* 5776 */;
import FastImageDefault from "FastImage" /* 5851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import _modDef15517 from "module_15517" /* 15517 */;
import _modDef15518 from "module_15518" /* 15518 */;
import _modDef15519 from "module_15519" /* 15519 */;
import _modDef15520 from "module_15520" /* 15520 */;
import _modDef15521 from "module_15521" /* 15521 */;
import _modDef15522 from "module_15522" /* 15522 */;
import _modDef15523 from "module_15523" /* 15523 */;
import _modDef15524 from "module_15524" /* 15524 */;
import _modDef15525 from "module_15525" /* 15525 */;
import _modDef15526 from "module_15526" /* 15526 */;
import _modDef15527 from "module_15527" /* 15527 */;
import _modDef15528 from "module_15528" /* 15528 */;
import _modDef15529 from "module_15529" /* 15529 */;
import _modDef15530 from "module_15530" /* 15530 */;
import _modDef15531 from "module_15531" /* 15531 */;
import _modDef15532 from "module_15532" /* 15532 */;
import _modDef15533 from "module_15533" /* 15533 */;
import PillTextDefault from "PillText" /* 15534 */;
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
const createStyles = fn(5141);
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
  subscriptionPlansLoaded = subscriptionPlansLoaded(15516).useSubscriptionPlansLoaded();
  let obj = subscriptionPlansLoaded(15516);
  const maxFileSizeForPremiumType = subscriptionPlansLoaded(2176).getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.COLLECTIBLES_SHOP, params: null };
    const obj = subscriptionPlansLoaded(7703);
    obj2.params = { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD };
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    subscriptionPlansLoaded(7703).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
  }, []);
  items = [subscriptionPlansLoaded];
  const callback2 = noop.useCallback(() => {
    subscriptionPlansLoaded(7703).openUserSettings({ screen: constants.APPEARANCE_THEME_PICKER });
  }, []);
  const callback3 = noop.useCallback(() => {
    const obj2 = { screen: constants.GUILD_BOOSTING, params: { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded } };
    openUserSettings.openUserSettings(obj2);
  }, items);
  const obj3 = { customProfile: null, clientThemes: null, serverBoosts: null, greyServerBoosts: null, customAppIcons: null, emoji: null, customSounds: null, sticker: null, earlyAccess: null, memberPricing: null, largeUploads: null, hdVideo: null, superReactions: null, entranceSounds: null, badge: null, greyBadge: null, xboxGamePass: null };
  const obj4 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = noop.useCallback(() => {
    subscriptionPlansLoaded(7703).openUserSettings({ screen: constants.APP_ICONS });
  }, []);
  const intl = subscriptionPlansLoaded(1113).intl;
  obj4.title = intl.string(subscriptionPlansLoaded(1113).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1113).intl;
  obj4.description = intl2.string(subscriptionPlansLoaded(1113).t.Mt3U1W);
  obj4.imageSrc = _modDef15517;
  obj4.buttonOnPress = callback1;
  obj3.customProfile = obj4;
  const obj5 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = subscriptionPlansLoaded(1113).intl;
  obj5.title = intl3.string(subscriptionPlansLoaded(1113).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1113).intl;
  obj5.description = intl4.string(subscriptionPlansLoaded(1113).t.CjRASJ);
  obj5.imageSrc = _modDef15518;
  obj5.buttonOnPress = callback2;
  obj3.clientThemes = obj5;
  const obj6 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = subscriptionPlansLoaded(1113).intl;
  obj6.title = intl5.string(subscriptionPlansLoaded(1113).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1113).intl;
  obj6.description = intl6.string(subscriptionPlansLoaded(1113).t["4pEwXL"]);
  obj6.imageSrc = _modDef15519;
  obj6.buttonOnPress = callback3;
  obj3.serverBoosts = obj6;
  const obj7 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = subscriptionPlansLoaded(1113).intl;
  obj7.title = intl7.string(subscriptionPlansLoaded(1113).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1113).intl;
  obj7.description = intl8.string(subscriptionPlansLoaded(1113).t["4pEwXL"]);
  obj7.imageSrc = _modDef15520;
  const intl9 = subscriptionPlansLoaded(1113).intl;
  obj7.imageOverlayText = intl9.string(subscriptionPlansLoaded(1113).t["/VzCKE"]);
  obj3.greyServerBoosts = obj7;
  const obj8 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = subscriptionPlansLoaded(1113).intl;
  obj8.title = intl10.string(subscriptionPlansLoaded(1113).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1113).intl;
  obj8.description = intl11.string(subscriptionPlansLoaded(1113).t.mPyrE6);
  obj8.imageSrc = _modDef15521;
  obj8.buttonOnPress = callback4;
  obj3.customAppIcons = obj8;
  const obj9 = { title: null, description: null, imageSrc: null };
  const intl12 = subscriptionPlansLoaded(1113).intl;
  obj9.title = intl12.string(subscriptionPlansLoaded(1113).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1113).intl;
  obj9.description = intl13.string(subscriptionPlansLoaded(1113).t.R5Xag2);
  obj9.imageSrc = _modDef15522;
  obj3.emoji = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl14 = subscriptionPlansLoaded(1113).intl;
  obj10.title = intl14.string(subscriptionPlansLoaded(1113).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1113).intl;
  obj10.description = intl15.string(subscriptionPlansLoaded(1113).t["4lSyCY"]);
  obj10.imageSrc = _modDef15523;
  obj3.customSounds = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl16 = subscriptionPlansLoaded(1113).intl;
  obj11.title = intl16.string(subscriptionPlansLoaded(1113).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1113).intl;
  obj11.description = intl17.string(subscriptionPlansLoaded(1113).t.hJG8ZN);
  obj11.imageSrc = _modDef15524;
  obj3.sticker = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl18 = subscriptionPlansLoaded(1113).intl;
  obj12.title = intl18.string(subscriptionPlansLoaded(1113).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1113).intl;
  obj12.description = intl19.string(subscriptionPlansLoaded(1113).t.M9AIt1);
  obj12.imageSrc = _modDef15525;
  obj3.earlyAccess = obj12;
  const obj13 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = subscriptionPlansLoaded(1113).intl;
  obj13.title = intl20.string(subscriptionPlansLoaded(1113).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1113).intl;
  obj13.description = intl21.string(subscriptionPlansLoaded(1113).t.wo3D3T);
  obj13.imageSrc = _modDef15526;
  obj13.buttonOnPress = callback;
  obj3.memberPricing = obj13;
  const obj14 = { title: null, description: null, imageSrc: null };
  const intl22 = subscriptionPlansLoaded(1113).intl;
  obj14.title = intl22.formatToPlainString(subscriptionPlansLoaded(1113).t.jqhAdL, { premiumMaxSize: maxFileSizeForPremiumType });
  const intl23 = subscriptionPlansLoaded(1113).intl;
  obj14.description = intl23.formatToPlainString(subscriptionPlansLoaded(1113).t["HI+cfm"], { premiumMaxSize: maxFileSizeForPremiumType });
  obj14.imageSrc = _modDef15527;
  obj3.largeUploads = obj14;
  const obj15 = { title: null, description: null, imageSrc: null };
  const intl24 = subscriptionPlansLoaded(1113).intl;
  obj15.title = intl24.string(subscriptionPlansLoaded(1113).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1113).intl;
  obj15.description = intl25.string(subscriptionPlansLoaded(1113).t.ymCPxp);
  obj15.imageSrc = _modDef15528;
  obj3.hdVideo = obj15;
  const obj16 = { title: null, description: null, imageSrc: null };
  const intl26 = subscriptionPlansLoaded(1113).intl;
  obj16.title = intl26.string(subscriptionPlansLoaded(1113).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1113).intl;
  obj16.description = intl27.string(subscriptionPlansLoaded(1113).t.A0U9fk);
  obj16.imageSrc = _modDef15529;
  obj3.superReactions = obj16;
  const obj17 = { title: null, description: null, imageSrc: null };
  const intl28 = subscriptionPlansLoaded(1113).intl;
  obj17.title = intl28.string(subscriptionPlansLoaded(1113).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1113).intl;
  obj17.description = intl29.string(subscriptionPlansLoaded(1113).t["7ZCYvC"]);
  obj17.imageSrc = _modDef15530;
  obj3.entranceSounds = obj17;
  const obj18 = { title: null, description: null, imageSrc: null };
  const intl30 = subscriptionPlansLoaded(1113).intl;
  obj18.title = intl30.string(subscriptionPlansLoaded(1113).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1113).intl;
  obj18.description = intl31.string(subscriptionPlansLoaded(1113).t["37MFFq"]);
  obj18.imageSrc = _modDef15531;
  obj3.badge = obj18;
  const obj19 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = subscriptionPlansLoaded(1113).intl;
  obj19.title = intl32.string(subscriptionPlansLoaded(1113).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1113).intl;
  obj19.description = intl33.string(subscriptionPlansLoaded(1113).t["37MFFq"]);
  obj19.imageSrc = _modDef15532;
  const intl34 = subscriptionPlansLoaded(1113).intl;
  obj19.imageOverlayText = intl34.string(subscriptionPlansLoaded(1113).t["/VzCKE"]);
  obj3.greyBadge = obj19;
  const obj20 = { title: null, imageSrc: null, imageStyle: null, bodyComponent: null };
  const intl35 = subscriptionPlansLoaded(1113).intl;
  obj20.title = intl35.string(subscriptionPlansLoaded(1113).t.aJE9i1);
  let obj2 = subscriptionPlansLoaded(2176);
  obj20.imageSrc = { uri: _modDef15533 };
  obj20.imageStyle = { aspectRatio: 1.9789473684210526 };
  const obj22 = { variant: "body-sm/normal", children: null };
  const intl36 = subscriptionPlansLoaded(1113).intl;
  const obj23 = { termsLink: null };
  const obj21 = { uri: _modDef15533 };
  obj23.termsLink = HelpdeskUtilsDefault.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj22.children = intl36.format(subscriptionPlansLoaded(1113).t["9Wv+8h"], obj23);
  obj20.bodyComponent = closure_9(subscriptionPlansLoaded(5761).Text, obj22);
  obj3.xboxGamePass = obj20;
  return obj3;
}