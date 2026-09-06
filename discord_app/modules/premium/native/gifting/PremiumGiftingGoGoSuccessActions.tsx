// discord_app/modules/premium/native/gifting/PremiumGiftingGoGoSuccessActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles(() => {
  let obj = { promoDetails: null };
  obj = {
    marginBottom: nativeDefault.space.PX_6,
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  };
  obj.promoDetails = obj;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingGoGoSuccessActions.tsx");

export default function PremiumGiftingGoGoSuccessActions(giftCode) {
  giftCode = giftCode.giftCode;
  let onClose;
  let navigation;
  let enabled;
  let giftCodeURL;
  let obj = onClose(navigation[7]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj1 = onClose(navigation[8]);
  let items = [giftCodeURL];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const marketingComponentByType = giftCodeURL.getMarketingComponentByType(
      onClose(navigation[9]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
    );
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
  const tmp = closure_10();
  enabled = prePurchaseGiftingBadgeProgress(navigation[12]).useConfig({
    location: "PremiumGiftSuccessActions",
  }).enabled;
  tmp2Result = tmp2(tmp3[13]);
  giftCodeURL = tmp2Result.getGiftCodeURL(giftCode);
  const items1 = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items2 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items1);
  const items3 = [onClose];
  const callback1 = enabled.useCallback(() => {
    let obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items2);
  let tmp16 = null != stateFromStores;
  const callback2 = enabled.useCallback(() => {
    onClose();
    const obj = {
      analyticsSource: AnalyticsLocationDefault.PREMIUM_GIFT_SUCCESS_MODAL,
      analyticsLocations: null,
      screen: null,
    };
    const items = [AnalyticsLocationDefault.PREMIUM_GIFT_SUCCESS_MODAL];
    obj.analyticsLocations = items;
    obj.screen = constants.ORBS;
    const result = obj.openCollectiblesShopMobile(obj);
  }, items3);
  if (tmp16) {
    obj = { style: tmp.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
    const intl = tmp2(tmp3[19]).intl;
    obj.title = intl.string(tmp9(tmp3[20])["ZME/HA"]);
    const intl2 = tmp2(tmp3[19]).intl;
    obj.subtitle = intl2.string(tmp9(tmp3[20]).aMeOMj);
    tmp16 = closure_7(tmp9(tmp3[18]), obj);
    const tmp9Result = tmp9(tmp3[18]);
  }
  const items4 = [tmp16, ,];
  let tmp19 = null != giftCode;
  if (tmp19) {
    obj = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj.text = intl3.string(tmp2(tmp3[19]).t.RDE0Sc);
    obj.onPress = callback1;
    tmp19 = closure_7(tmp2(tmp3[21]).Button, obj);
  }
  items4[1] = tmp19;
  if (enabled) {
    if (null != prePurchaseGiftingBadgeProgress) {
      let str2 = "secondary";
      if (null == giftCode) {
        str2 = "primary";
      }
      obj1 = { variant: str2, text: null, onPress: null };
      const intl5 = tmp2(tmp3[19]).intl;
      obj1.text = intl5.string(tmp2(tmp3[19]).t.cpT0Cq);
      obj1.onPress = callback;
      let obj3 = obj1;
    }
    obj2 = { children: null };
    items4[2] = closure_7(tmp22, obj3);
    obj2.children = items4;
    return closure_9(closure_8, obj2);
  }
  let str = "secondary";
  if (null == giftCode) {
    str = "primary";
  }
  obj3 = { grow: true, variant: str, text: null, onPress: null };
  const intl4 = tmp2(tmp3[19]).intl;
  obj3.text = intl4.string(onClose(navigation[19]).t.fYfGgK);
  obj3.onPress = callback2;
}
