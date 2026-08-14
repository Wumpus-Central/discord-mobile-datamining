// discord_app/modules/premium/native/gifting/PremiumGiftingGoGoSuccessActions.tsx
import getSystemLocale from "getSystemLocale";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { AnalyticsSections } from "ME";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles(() => {
  let obj = { promoDetails: null };
  obj = { marginBottom: Themes.space.PX_6, paddingVertical: Themes.space.PX_12, paddingHorizontal: Themes.space.PX_16, borderRadius: Themes.radii.md, backgroundColor: Themes.colors.BACKGROUND_MOD_SUBTLE };
  obj[0] = obj;
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingGoGoSuccessActions.tsx");

export default function PremiumGiftingGoGoSuccessActions(giftCode) {
  giftCode = giftCode.giftCode;
  let onClose;
  let prePurchaseGiftingBadgeProgress;
  let navigation;
  let enabled;
  let giftCodeURL;
  let obj = onClose(navigation[7]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj1 = onClose(navigation[8]);
  let items = [giftCodeURL];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const marketingComponentByType = giftCodeURL.getMarketingComponentByType(onClose(navigation[9]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  let obj2 = onClose(navigation[10]);
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj2.useThemeAndReducedMotionAwareAssetUrl(asset);
  let tmp2Result = tmp2(tmp3[11]);
  navigation = tmp2Result.useNavigation();
  const tmp = callback2();
  enabled = prePurchaseGiftingBadgeProgress(navigation[12]).useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  tmp2Result = tmp2(tmp3[13]);
  giftCodeURL = tmp2Result.getGiftCodeURL(giftCode);
  const items1 = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items2 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: null };
        obj[0] = tmp;
        navigation.navigate(onClose(navigation[14]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items1);
  const items3 = [onClose];
  const callback1 = enabled.useCallback(() => {
    let obj = onClose(navigation[15]);
    obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, outer1_5.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      obj = { currentProgress: null };
      obj[0] = prePurchaseGiftingBadgeProgress;
      navigation.navigate(onClose(navigation[14]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items2);
  let tmp16 = null != stateFromStores;
  callback2 = enabled.useCallback(() => {
    onClose();
    let obj = onClose(navigation[16]);
    obj = { analyticsSource: prePurchaseGiftingBadgeProgress(navigation[17]).PREMIUM_GIFT_SUCCESS_MODAL, analyticsLocations: null, screen: null };
    const items = [prePurchaseGiftingBadgeProgress(navigation[17]).PREMIUM_GIFT_SUCCESS_MODAL];
    obj[1] = items;
    obj[2] = outer1_6.ORBS;
    const result = obj.openCollectiblesShopMobile(obj);
  }, items3);
  if (tmp16) {
    obj = { style: null, imageUrl: null, title: null, subtitle: null };
    obj[0] = tmp.promoDetails;
    obj[1] = themeAndReducedMotionAwareAssetUrl;
    const intl = tmp2(tmp3[19]).intl;
    obj[2] = intl.string(tmp9(tmp3[20])["ZME/HA"]);
    const intl2 = tmp2(tmp3[19]).intl;
    obj[3] = intl2.string(tmp9(tmp3[20]).aMeOMj);
    tmp16 = callback(tmp9(tmp3[18]), obj);
    const tmp9Result = tmp9(tmp3[18]);
  }
  const items4 = [tmp16, , ];
  let tmp19 = null != giftCode;
  if (tmp19) {
    obj = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj[1] = intl3.string(tmp2(tmp3[19]).t.RDE0Sc);
    obj[2] = callback1;
    tmp19 = callback(tmp2(tmp3[21]).Button, obj);
  }
  items4[1] = tmp19;
  if (enabled) {
    if (null != prePurchaseGiftingBadgeProgress) {
      let str2 = "secondary";
      if (null == giftCode) {
        str2 = "primary";
      }
      obj1 = { variant: null, text: null, onPress: null };
      obj1[0] = str2;
      const intl5 = tmp2(tmp3[19]).intl;
      obj1[1] = intl5.string(tmp2(tmp3[19]).t.cpT0Cq);
      obj1[2] = callback;
      let obj3 = obj1;
    }
    obj2 = { children: null };
    items4[2] = callback(tmp22, obj3);
    obj2[0] = items4;
    return closure_9(closure_8, obj2);
  }
  let str = "secondary";
  if (null == giftCode) {
    str = "primary";
  }
  obj3 = { grow: true, variant: str, text: null, onPress: null };
  const intl4 = tmp2(tmp3[19]).intl;
  obj3[2] = intl4.string(onClose(navigation[19]).t.fYfGgK);
  obj3[3] = callback2;
};