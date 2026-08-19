// discord_app/modules/premium/native/PremiumPerkCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import getFontScale from "../../screen/native/useFontScale.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../_runtime/12854_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/12855_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/12856_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/12857_registerAsset.js";
import registerAssetDefault5 from "../../../../_runtime/12858_registerAsset.js";
import registerAssetDefault6 from "../../../../_runtime/12859_registerAsset.js";
import registerAssetDefault7 from "../../../../_runtime/12860_registerAsset.js";
import registerAssetDefault8 from "../../../../_runtime/12861_registerAsset.js";
import registerAssetDefault9 from "../../../../_runtime/12862_registerAsset.js";
import registerAssetDefault10 from "../../../../_runtime/12863_registerAsset.js";
import registerAssetDefault11 from "../../../../_runtime/12864_registerAsset.js";
import registerAssetDefault12 from "../../../../_runtime/12865_registerAsset.js";
import registerAssetDefault13 from "../../../../_runtime/12866_registerAsset.js";
import registerAssetDefault14 from "../../../../_runtime/12867_registerAsset.js";
import registerAssetDefault15 from "../../../../_runtime/12868_registerAsset.js";
import registerAssetDefault16 from "../../../../_runtime/12869_registerAsset.js";
import metadataDefault from "../../../../discord_assets/assets/images/perks/xbox_game_pass.jpg.js";
import PillTextDefault from "components/PillText.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE as closure_6 } from "../PremiumConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ HelpdeskArticles: error, UserSettingsSections: closure_8 } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({ [obj.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 }, [obj.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 } });
let closure_13 = createCacheKey.createStyles((arg0) => {
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, width: frozen[arg0].width };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[0] = obj;
  obj = { width: "100%", borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm, overflow: "hidden" };
  obj[1] = obj;
  obj[2] = { width: "100%", borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
  obj[3] = { marginTop: 16, marginHorizontal: 16 };
  let num = 8;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  const merged1 = Object.assign(arg0 === obj.NARROW && { height: "100%" });
  obj[4] = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  obj[5] = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  obj[6] = { position: "relative", alignItems: "center", justifyContent: "center" };
  obj[7] = { color: ThemesDefault.colors.WHITE, fontSize: 14 };
  obj[8] = { position: "absolute", bottom: "10%", borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, paddingHorizontal: 12, paddingVertical: 4, justifyContent: "center", alignItems: "center" };
  obj[9] = { position: "absolute", width: "auto", top: -8, left: 10 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default function PremiumPerkCard(variant) {
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
      const items1 = [callback(preloadDefault, obj), ];
      obj1 = { style: null, children: null };
      obj1[0] = tmp4.imageOverlayTextContainer;
      const obj2 = { style: null, variant: "text-md/bold", children: null };
      obj2[0] = tmp4.imageOverlayText;
      imageStyle = imageOverlayText.toUpperCase();
      obj2[2] = imageStyle;
      imageSrc = callback(Text.Text, obj2);
      obj1[1] = imageSrc;
      items1[1] = callback(closure_4, obj1);
      obj[1] = items1;
      let tmp15 = callback2(closure_4, obj);
    } else {
      const obj3 = { style: null, source: null };
      const items2 = [tmp4.image, imageStyle];
      obj3[0] = items2;
      obj3[1] = imageSrc;
      tmp15 = callback(preloadDefault, obj3);
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
      let tmp21 = callback(Text.Text, obj4);
    } else {
      tmp21 = null;
      if (null != bodyComponent) {
        tmp21 = bodyComponent;
      }
    }
    const items3 = [tmp4.container, , ];
    let tmp25 = WIDE === tmp5.NARROW;
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
      tmp26 = callback(PillTextDefault, obj7);
    }
    const items4 = [tmp26, tmp10, , , ];
    const obj8 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
    const items5 = [tmp4.title, titleStyle];
    obj8[0] = items5;
    obj8[3] = title;
    items4[2] = callback(Text.Text, obj8);
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
      obj10[1] = callback(Button.Button, obj11);
      tmp29Result = callback(closure_4, obj10);
    }
    items4[4] = tmp29Result;
    obj6[1] = items4;
    return callback2(closure_4, obj6);
  }
  tmp5 = obj;
};
export const PerkCardTypes = { CUSTOM_PROFILE: "customProfile", CLIENT_THEMES: "clientThemes", SERVER_BOOSTS: "serverBoosts", GREYED_SERVER_BOOSTS: "greyServerBoosts", CUSTOM_APP_ICONS: "customAppIcons", EMOJI: "emoji", CUSTOM_SOUNDS: "customSounds", STICKER: "sticker", EARLY_ACCESS: "earlyAccess", MEMBER_PRICING: "memberPricing", LARGE_UPLOADS: "largeUploads", HD_VIDEO: "hdVideo", SUPER_REACTIONS: "superReactions", ENTRACE_SOUNDS: "entranceSounds", BADGE: "badge", GREYED_BADGE: "greyBadge", XBOX_GAME_PASS: "xboxGamePass" };
export const PerkCardVariant = obj;
export const PERK_CARD_SIZES = frozen;
export const usePerkCardHeight = function usePerkCardHeight(NARROW) {
  return getFontScale.useFontScale() > 1 ? frozen[NARROW].scaledFontHeight : frozen[NARROW].height;
};
export const usePremiumPerkCard = function usePremiumPerkCard() {
  obj = subscriptionPlansLoaded(12853);
  subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  obj1 = subscriptionPlansLoaded(4269);
  const formatSizeResult = obj1.formatSize(closure_6 / 1024, { useKibibytes: true });
  const callback = React.useCallback(() => {
    subscriptionPlansLoaded(7360);
    obj = { analyticsSource: callback(7159).PREMIUM_MARKETING_PERK_CARD };
    obj[1] = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    subscriptionPlansLoaded(7360);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = React.useCallback(() => {
    subscriptionPlansLoaded(7360);
    obj = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj);
  }, []);
  const callback3 = React.useCallback(() => {
    obj = subscriptionPlansLoaded(dependencyMap[8]);
    obj = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    obj.openUserSettings(obj);
  }, items);
  obj = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = React.useCallback(() => {
    subscriptionPlansLoaded(7360);
    obj = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj);
  }, []);
  const intl = subscriptionPlansLoaded(1236).intl;
  obj[0] = intl.string(subscriptionPlansLoaded(1236).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1236).intl;
  obj[1] = intl2.string(subscriptionPlansLoaded(1236).t.Mt3U1W);
  obj[2] = registerAssetDefault;
  obj[3] = callback1;
  obj[0] = obj;
  obj1 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = subscriptionPlansLoaded(1236).intl;
  obj1[0] = intl3.string(subscriptionPlansLoaded(1236).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1236).intl;
  obj1[1] = intl4.string(subscriptionPlansLoaded(1236).t.CjRASJ);
  obj1[2] = registerAssetDefault2;
  obj1[3] = callback2;
  obj[1] = obj1;
  const obj2 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = subscriptionPlansLoaded(1236).intl;
  obj2[0] = intl5.string(subscriptionPlansLoaded(1236).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1236).intl;
  obj2[1] = intl6.string(subscriptionPlansLoaded(1236).t["4pEwXL"]);
  obj2[2] = registerAssetDefault3;
  obj2[3] = callback3;
  obj[2] = obj2;
  const obj3 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = subscriptionPlansLoaded(1236).intl;
  obj3[0] = intl7.string(subscriptionPlansLoaded(1236).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1236).intl;
  obj3[1] = intl8.string(subscriptionPlansLoaded(1236).t["4pEwXL"]);
  obj3[2] = registerAssetDefault4;
  const intl9 = subscriptionPlansLoaded(1236).intl;
  obj3[3] = intl9.string(subscriptionPlansLoaded(1236).t["/VzCKE"]);
  obj[3] = obj3;
  const obj4 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = subscriptionPlansLoaded(1236).intl;
  obj4[0] = intl10.string(subscriptionPlansLoaded(1236).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1236).intl;
  obj4[1] = intl11.string(subscriptionPlansLoaded(1236).t.mPyrE6);
  obj4[2] = registerAssetDefault5;
  obj4[3] = callback4;
  obj[4] = obj4;
  const obj5 = { title: null, description: null, imageSrc: null };
  const intl12 = subscriptionPlansLoaded(1236).intl;
  obj5[0] = intl12.string(subscriptionPlansLoaded(1236).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1236).intl;
  obj5[1] = intl13.string(subscriptionPlansLoaded(1236).t.R5Xag2);
  obj5[2] = registerAssetDefault6;
  obj[5] = obj5;
  const obj6 = { title: null, description: null, imageSrc: null };
  const intl14 = subscriptionPlansLoaded(1236).intl;
  obj6[0] = intl14.string(subscriptionPlansLoaded(1236).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1236).intl;
  obj6[1] = intl15.string(subscriptionPlansLoaded(1236).t["4lSyCY"]);
  obj6[2] = registerAssetDefault7;
  obj[6] = obj6;
  const obj7 = { title: null, description: null, imageSrc: null };
  const intl16 = subscriptionPlansLoaded(1236).intl;
  obj7[0] = intl16.string(subscriptionPlansLoaded(1236).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1236).intl;
  obj7[1] = intl17.string(subscriptionPlansLoaded(1236).t.hJG8ZN);
  obj7[2] = registerAssetDefault8;
  obj[7] = obj7;
  const obj8 = { title: null, description: null, imageSrc: null };
  const intl18 = subscriptionPlansLoaded(1236).intl;
  obj8[0] = intl18.string(subscriptionPlansLoaded(1236).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1236).intl;
  obj8[1] = intl19.string(subscriptionPlansLoaded(1236).t.M9AIt1);
  obj8[2] = registerAssetDefault9;
  obj[8] = obj8;
  const obj9 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = subscriptionPlansLoaded(1236).intl;
  obj9[0] = intl20.string(subscriptionPlansLoaded(1236).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1236).intl;
  obj9[1] = intl21.string(subscriptionPlansLoaded(1236).t.wo3D3T);
  obj9[2] = registerAssetDefault10;
  obj9[3] = callback;
  obj[9] = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl22 = subscriptionPlansLoaded(1236).intl;
  obj10[0] = intl22.formatToPlainString(subscriptionPlansLoaded(1236).t.jqhAdL, { premiumMaxSize: formatSizeResult });
  const intl23 = subscriptionPlansLoaded(1236).intl;
  obj10[1] = intl23.formatToPlainString(subscriptionPlansLoaded(1236).t["HI+cfm"], { premiumMaxSize: formatSizeResult });
  obj10[2] = registerAssetDefault11;
  obj[10] = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl24 = subscriptionPlansLoaded(1236).intl;
  obj11[0] = intl24.string(subscriptionPlansLoaded(1236).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1236).intl;
  obj11[1] = intl25.string(subscriptionPlansLoaded(1236).t.ymCPxp);
  obj11[2] = registerAssetDefault12;
  obj[11] = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl26 = subscriptionPlansLoaded(1236).intl;
  obj12[0] = intl26.string(subscriptionPlansLoaded(1236).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1236).intl;
  obj12[1] = intl27.string(subscriptionPlansLoaded(1236).t.A0U9fk);
  obj12[2] = registerAssetDefault13;
  obj[12] = obj12;
  const obj13 = { title: null, description: null, imageSrc: null };
  const intl28 = subscriptionPlansLoaded(1236).intl;
  obj13[0] = intl28.string(subscriptionPlansLoaded(1236).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1236).intl;
  obj13[1] = intl29.string(subscriptionPlansLoaded(1236).t["7ZCYvC"]);
  obj13[2] = registerAssetDefault14;
  obj[13] = obj13;
  const obj14 = { title: null, description: null, imageSrc: null };
  const intl30 = subscriptionPlansLoaded(1236).intl;
  obj14[0] = intl30.string(subscriptionPlansLoaded(1236).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1236).intl;
  obj14[1] = intl31.string(subscriptionPlansLoaded(1236).t["37MFFq"]);
  obj14[2] = registerAssetDefault15;
  obj[14] = obj14;
  const obj15 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = subscriptionPlansLoaded(1236).intl;
  obj15[0] = intl32.string(subscriptionPlansLoaded(1236).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1236).intl;
  obj15[1] = intl33.string(subscriptionPlansLoaded(1236).t["37MFFq"]);
  obj15[2] = registerAssetDefault16;
  const intl34 = subscriptionPlansLoaded(1236).intl;
  obj15[3] = intl34.string(subscriptionPlansLoaded(1236).t["/VzCKE"]);
  obj[15] = obj15;
  const obj16 = { title: null, imageSrc: null, imageStyle: null, bodyComponent: null };
  const intl35 = subscriptionPlansLoaded(1236).intl;
  obj16[0] = intl35.string(subscriptionPlansLoaded(1236).t.aJE9i1);
  obj16[1] = { uri: metadataDefault };
  obj16[2] = { aspectRatio: 1.9789473684210526 };
  const obj18 = { variant: "text-sm/normal", children: null };
  const intl36 = subscriptionPlansLoaded(1236).intl;
  const obj19 = { termsLink: null };
  obj19[0] = combinedDefault.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj18[1] = intl36.format(subscriptionPlansLoaded(1236).t["9Wv+8h"], obj19);
  obj16[3] = callback(subscriptionPlansLoaded(4734).Text, obj18);
  obj[16] = obj16;
  return obj;
};