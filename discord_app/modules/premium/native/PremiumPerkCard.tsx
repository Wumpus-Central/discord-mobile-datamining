// discord_app/modules/premium/native/PremiumPerkCard.tsx
import registerAsset from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import { MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE as closure_6 } from "GuildFeatures";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/12570_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12571_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12572_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12573_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12574_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12575_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12576_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12577_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12578_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12579_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12580_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12581_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12582_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12583_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12584_registerAsset.js";
import { registerAsset } from "../../../../_runtime/12585_registerAsset.js";
import { metadata } from "../../../../discord_assets/assets/images/perks/xbox_game_pass.jpg.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
import { getFontScale } from "../../screen/native/useFontScale.tsx";
import { PillText } from "components/PillText.tsx";

let c10;
let c4;
let c5;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ HelpdeskArticles: error, UserSettingsSections: metroImportAll } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [obj.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 }, [obj.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 } });
let closure_13 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, headerComponent: null, image: null, title: null, description: null, button: null, imageContainer: null, imageOverlayText: null, imageOverlayTextContainer: null, pillTextContainer: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_SURFACE_HIGH, borderRadius: Themes.radii.sm, width: frozen[arg0].width };
  const merged = Object.assign(Themes.shadows.SHADOW_LOW);
  obj[0] = obj;
  obj = { width: "100%", borderTopLeftRadius: Themes.radii.sm, borderTopRightRadius: Themes.radii.sm, overflow: "hidden" };
  obj[1] = obj;
  obj[2] = { width: "100%", borderTopLeftRadius: Themes.radii.sm, borderTopRightRadius: Themes.radii.sm };
  obj[3] = { marginTop: 16, marginHorizontal: 16 };
  let num = 8;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  const merged1 = Object.assign(arg0 === obj.NARROW && { height: "100%" });
  obj[4] = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  obj[5] = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  obj[6] = { position: "relative", alignItems: "center", justifyContent: "center" };
  const obj1 = { width: "100%", borderTopLeftRadius: Themes.radii.sm, borderTopRightRadius: Themes.radii.sm };
  const obj2 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp4 = obj;
  const tmp5 = arg0 === obj.NARROW && { height: "100%" };
  obj[7] = { color: Themes.colors.WHITE, fontSize: 14 };
  const obj3 = { color: Themes.colors.WHITE, fontSize: 14 };
  obj[8] = { position: "absolute", bottom: "10%", borderRadius: Themes.radii.round, backgroundColor: Themes.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" };
  obj[9] = { position: "absolute", width: "auto", top: -8, left: 10 };
  return obj;
});
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default function PremiumPerkCard(variant) {
  let bodyComponent;
  let buttonOnPress;
  let cta;
  let description;
  let headerComponent;
  let imageOverlayText;
  let imageSrc;
  let imageStyle;
  let pillText;
  let style;
  let title;
  let titleStyle;
  ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
  ({ style, title, titleStyle } = variant);
  if (cta === undefined) {
    const intl = getSystemLocale.intl;
    cta = intl.string(getSystemLocale.t.jVcuVY);
  }
  let WIDE = variant.variant;
  if (WIDE === undefined) {
    WIDE = obj.WIDE;
  }
  ({ imageOverlayText, pillText } = variant);
  const tmp4 = callback3(WIDE);
  const NARROW = obj.NARROW;
  getFontScale;
  if (null != imageSrc) {
    if (null != imageOverlayText) {
      obj = { style: null, children: null };
      obj[0] = tmp4.imageContainer;
      obj = { style: null, source: null };
      const items = [tmp4.image, imageStyle];
      obj[0] = items;
      obj[1] = imageSrc;
      const items1 = [callback(preload, obj), ];
      const obj1 = { style: null, children: null };
      obj1[0] = tmp4.imageOverlayTextContainer;
      const obj2 = { style: null, variant: "text-md/bold", children: null };
      obj2[0] = tmp4.imageOverlayText;
      imageStyle = imageOverlayText.toUpperCase();
      obj2[2] = imageStyle;
      imageSrc = callback(tmp6(4251).Text, obj2);
      obj1[1] = imageSrc;
      items1[1] = callback(closure_4, obj1);
      obj[1] = items1;
      let tmp15 = callback2(closure_4, obj);
    } else {
      const obj3 = { style: null, source: null };
      const items2 = [tmp4.image, imageStyle];
      obj3[0] = items2;
      obj3[1] = imageSrc;
      tmp15 = callback(preload, obj3);
    }
  } else {
    let tmp10 = null;
    if (null != headerComponent) {
      obj = { style: null, children: null };
      obj[0] = tmp4.headerComponent;
      obj[1] = headerComponent;
      tmp10 = callback(closure_4, obj);
    }
    if (null != description) {
      const obj4 = { variant: "text-sm/normal", children: null };
      obj4[1] = description;
      let tmp21 = callback(tmp6(4251).Text, obj4);
    } else {
      tmp21 = null;
      if (null != bodyComponent) {
        tmp21 = bodyComponent;
      }
    }
    const items3 = [tmp4.container, , ];
    let tmp25 = WIDE === obj.NARROW;
    if (tmp25) {
      const obj5 = { height: null };
      obj5[0] = tmp9;
      tmp25 = obj5;
    }
    const obj6 = { style: null, children: null };
    items3[1] = tmp25;
    items3[2] = style;
    obj6[0] = items3;
    let tmp26 = null != pillText;
    if (tmp26) {
      const obj7 = { pillText: null, style: null };
      obj7[0] = pillText;
      obj7[1] = tmp4.pillTextContainer;
      tmp26 = callback(PillText, obj7);
    }
    const items4 = [tmp26, tmp10, , , ];
    const obj8 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    const items5 = [tmp4.title, titleStyle];
    obj8[0] = items5;
    obj8[3] = title;
    items4[2] = callback(tmp6(4251).Text, obj8);
    const obj9 = { style: null, children: null };
    obj9[0] = tmp4.description;
    obj9[1] = tmp21;
    items4[3] = callback(closure_5, obj9);
    let tmp29Result = null != buttonOnPress;
    if (tmp29Result) {
      const obj10 = { style: null, children: null };
      obj10[0] = tmp4.button;
      const obj11 = { size: "sm", variant: "secondary", text: null, onPress: null };
      obj11[2] = cta;
      obj11[3] = buttonOnPress;
      obj10[1] = tmp29(tmp6(4665).Button, obj11);
      tmp29Result = tmp29(tmp24, obj10);
    }
    items4[4] = tmp29Result;
    obj6[1] = items4;
    return callback2(closure_4, obj6);
  }
};
export const PerkCardTypes = { CUSTOM_PROFILE: "customProfile", CLIENT_THEMES: "clientThemes", SERVER_BOOSTS: "serverBoosts", GREYED_SERVER_BOOSTS: "greyServerBoosts", CUSTOM_APP_ICONS: "customAppIcons", EMOJI: "emoji", CUSTOM_SOUNDS: "customSounds", STICKER: "sticker", EARLY_ACCESS: "earlyAccess", MEMBER_PRICING: "memberPricing", LARGE_UPLOADS: "largeUploads", HD_VIDEO: "hdVideo", SUPER_REACTIONS: "superReactions", ENTRACE_SOUNDS: "entranceSounds", BADGE: "badge", GREYED_BADGE: "greyBadge", XBOX_GAME_PASS: "xboxGamePass" };
export const PerkCardVariant = obj;
export const PERK_CARD_SIZES = frozen;
export const usePerkCardHeight = function usePerkCardHeight(NARROW) {
  return getFontScale.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
};
export const usePremiumPerkCard = function usePremiumPerkCard() {
  let obj = subscriptionPlansLoaded(12569);
  subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  let obj1 = subscriptionPlansLoaded(4150);
  const formatSizeResult = obj1.formatSize(closure_6 / 1024, { useKibibytes: true });
  const callback = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(5910);
    obj = { screen: constants.COLLECTIBLES_SHOP, params: null };
    obj = { analyticsSource: callback(5615).PREMIUM_MARKETING_PERK_CARD };
    obj[1] = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(5910);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(5910);
    obj = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj);
  }, []);
  const callback3 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(outer1_2[8]);
    obj = { screen: outer1_8.GUILD_BOOSTING, params: obj };
    obj = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    obj.openUserSettings(obj);
  }, items);
  obj = { customProfile: null, clientThemes: null, serverBoosts: null, greyServerBoosts: null, customAppIcons: null, emoji: null, customSounds: null, sticker: null, earlyAccess: null, memberPricing: null, largeUploads: null, hdVideo: null, superReactions: null, entranceSounds: null, badge: null, greyBadge: null, xboxGamePass: null };
  obj = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = React.useCallback(() => {
    let obj = subscriptionPlansLoaded(5910);
    obj = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj);
  }, []);
  const intl = subscriptionPlansLoaded(1236).intl;
  obj[0] = intl.string(subscriptionPlansLoaded(1236).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1236).intl;
  obj[1] = intl2.string(subscriptionPlansLoaded(1236).t.Mt3U1W);
  obj[2] = registerAsset;
  obj[3] = callback1;
  obj[0] = obj;
  obj1 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = subscriptionPlansLoaded(1236).intl;
  obj1[0] = intl3.string(subscriptionPlansLoaded(1236).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1236).intl;
  obj1[1] = intl4.string(subscriptionPlansLoaded(1236).t.CjRASJ);
  obj1[2] = registerAsset;
  obj1[3] = callback2;
  obj[1] = obj1;
  const obj2 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = subscriptionPlansLoaded(1236).intl;
  obj2[0] = intl5.string(subscriptionPlansLoaded(1236).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1236).intl;
  obj2[1] = intl6.string(subscriptionPlansLoaded(1236).t["4pEwXL"]);
  obj2[2] = registerAsset;
  obj2[3] = callback3;
  obj[2] = obj2;
  const obj3 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = subscriptionPlansLoaded(1236).intl;
  obj3[0] = intl7.string(subscriptionPlansLoaded(1236).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1236).intl;
  obj3[1] = intl8.string(subscriptionPlansLoaded(1236).t["4pEwXL"]);
  obj3[2] = registerAsset;
  const intl9 = subscriptionPlansLoaded(1236).intl;
  obj3[3] = intl9.string(subscriptionPlansLoaded(1236).t["/VzCKE"]);
  obj[3] = obj3;
  const obj4 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = subscriptionPlansLoaded(1236).intl;
  obj4[0] = intl10.string(subscriptionPlansLoaded(1236).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1236).intl;
  obj4[1] = intl11.string(subscriptionPlansLoaded(1236).t.mPyrE6);
  obj4[2] = registerAsset;
  obj4[3] = callback4;
  obj[4] = obj4;
  const obj5 = { title: null, description: null, imageSrc: null };
  const intl12 = subscriptionPlansLoaded(1236).intl;
  obj5[0] = intl12.string(subscriptionPlansLoaded(1236).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1236).intl;
  obj5[1] = intl13.string(subscriptionPlansLoaded(1236).t.R5Xag2);
  obj5[2] = registerAsset;
  obj[5] = obj5;
  const obj6 = { title: null, description: null, imageSrc: null };
  const intl14 = subscriptionPlansLoaded(1236).intl;
  obj6[0] = intl14.string(subscriptionPlansLoaded(1236).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1236).intl;
  obj6[1] = intl15.string(subscriptionPlansLoaded(1236).t["4lSyCY"]);
  obj6[2] = registerAsset;
  obj[6] = obj6;
  const obj7 = { title: null, description: null, imageSrc: null };
  const intl16 = subscriptionPlansLoaded(1236).intl;
  obj7[0] = intl16.string(subscriptionPlansLoaded(1236).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1236).intl;
  obj7[1] = intl17.string(subscriptionPlansLoaded(1236).t.hJG8ZN);
  obj7[2] = registerAsset;
  obj[7] = obj7;
  const obj8 = { title: null, description: null, imageSrc: null };
  const intl18 = subscriptionPlansLoaded(1236).intl;
  obj8[0] = intl18.string(subscriptionPlansLoaded(1236).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1236).intl;
  obj8[1] = intl19.string(subscriptionPlansLoaded(1236).t.M9AIt1);
  obj8[2] = registerAsset;
  obj[8] = obj8;
  const obj9 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = subscriptionPlansLoaded(1236).intl;
  obj9[0] = intl20.string(subscriptionPlansLoaded(1236).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1236).intl;
  obj9[1] = intl21.string(subscriptionPlansLoaded(1236).t.wo3D3T);
  obj9[2] = registerAsset;
  obj9[3] = callback;
  obj[9] = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl22 = subscriptionPlansLoaded(1236).intl;
  obj10[0] = intl22.formatToPlainString(subscriptionPlansLoaded(1236).t.jqhAdL, { premiumMaxSize: formatSizeResult });
  const intl23 = subscriptionPlansLoaded(1236).intl;
  obj10[1] = intl23.formatToPlainString(subscriptionPlansLoaded(1236).t["HI+cfm"], { premiumMaxSize: formatSizeResult });
  obj10[2] = registerAsset;
  obj[10] = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl24 = subscriptionPlansLoaded(1236).intl;
  obj11[0] = intl24.string(subscriptionPlansLoaded(1236).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1236).intl;
  obj11[1] = intl25.string(subscriptionPlansLoaded(1236).t.ymCPxp);
  obj11[2] = registerAsset;
  obj[11] = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl26 = subscriptionPlansLoaded(1236).intl;
  obj12[0] = intl26.string(subscriptionPlansLoaded(1236).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1236).intl;
  obj12[1] = intl27.string(subscriptionPlansLoaded(1236).t.A0U9fk);
  obj12[2] = registerAsset;
  obj[12] = obj12;
  const obj13 = { title: null, description: null, imageSrc: null };
  const intl28 = subscriptionPlansLoaded(1236).intl;
  obj13[0] = intl28.string(subscriptionPlansLoaded(1236).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1236).intl;
  obj13[1] = intl29.string(subscriptionPlansLoaded(1236).t["7ZCYvC"]);
  obj13[2] = registerAsset;
  obj[13] = obj13;
  const obj14 = { title: null, description: null, imageSrc: null };
  const intl30 = subscriptionPlansLoaded(1236).intl;
  obj14[0] = intl30.string(subscriptionPlansLoaded(1236).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1236).intl;
  obj14[1] = intl31.string(subscriptionPlansLoaded(1236).t["37MFFq"]);
  obj14[2] = registerAsset;
  obj[14] = obj14;
  const obj15 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = subscriptionPlansLoaded(1236).intl;
  obj15[0] = intl32.string(subscriptionPlansLoaded(1236).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1236).intl;
  obj15[1] = intl33.string(subscriptionPlansLoaded(1236).t["37MFFq"]);
  obj15[2] = registerAsset;
  const intl34 = subscriptionPlansLoaded(1236).intl;
  obj15[3] = intl34.string(subscriptionPlansLoaded(1236).t["/VzCKE"]);
  obj[15] = obj15;
  const obj16 = { title: null, imageSrc: null, imageStyle: null, bodyComponent: null };
  const intl35 = subscriptionPlansLoaded(1236).intl;
  obj16[0] = intl35.string(subscriptionPlansLoaded(1236).t.aJE9i1);
  obj16[1] = { uri: metadata };
  obj16[2] = { aspectRatio: 1.9789473684210526 };
  const obj18 = { variant: "text-sm/normal", children: null };
  const intl36 = subscriptionPlansLoaded(1236).intl;
  const obj19 = { termsLink: null };
  const obj17 = { uri: metadata };
  obj19[0] = combined.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj18[1] = intl36.format(subscriptionPlansLoaded(1236).t["9Wv+8h"], obj19);
  obj16[3] = callback(subscriptionPlansLoaded(4251).Text, obj18);
  obj[16] = obj16;
  return obj;
};