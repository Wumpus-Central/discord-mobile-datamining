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
const createStyles = fn(4639);
let closure_10 = createStyles.createStyles(() => {
  const obj = {
    promoDetails: {
      marginBottom: nativeDefault.space.PX_6,
      paddingVertical: nativeDefault.space.PX_12,
      paddingHorizontal: nativeDefault.space.PX_16,
      borderRadius: nativeDefault.radii.md,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    },
  };
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
  const tmp = closure_10();
  const nativeGiftContext = onClose(navigation[7]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[7]);
  let items = [giftCodeURL];
  const stateFromStores = onClose(navigation[8]).useStateFromStores(items, () => {
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
  let obj2 = onClose(navigation[8]);
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = onClose(navigation[10]).useThemeAndReducedMotionAwareAssetUrl(asset);
  let obj3 = onClose(navigation[10]);
  navigation = onClose(navigation[11]).useNavigation();
  const tmp2Result = onClose(navigation[11]);
  enabled = prePurchaseGiftingBadgeProgress(navigation[12]).useConfig({
    location: "PremiumGiftSuccessActions",
  }).enabled;
  const obj5 = prePurchaseGiftingBadgeProgress(navigation[12]);
  giftCodeURL = onClose(navigation[13]).getGiftCodeURL(giftCode);
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
    showShareActionSheet.showShareActionSheet({ url: giftCodeURL }, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (enabled) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
    }
    const obj2 = { url: giftCodeURL };
  }, items2);
  let tmp16 = null != stateFromStores;
  const callback2 = enabled.useCallback(() => {
    onClose();
    const obj2 = {
      analyticsSource: AnalyticsLocationDefault.PREMIUM_GIFT_SUCCESS_MODAL,
      analyticsLocations: null,
      screen: null,
    };
    const items = [AnalyticsLocationDefault.PREMIUM_GIFT_SUCCESS_MODAL];
    obj2.analyticsLocations = items;
    obj2.screen = constants.ORBS;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
  }, items3);
  if (tmp16) {
    const obj4 = { style: tmp.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
    const intl = tmp2(tmp3[19]).intl;
    obj4.title = intl.string(tmp9(tmp3[20])["ZME/HA"]);
    const intl2 = tmp2(tmp3[19]).intl;
    obj4.subtitle = intl2.string(tmp9(tmp3[20]).aMeOMj);
    tmp16 = closure_7(tmp9(tmp3[18]), obj4);
    const tmp9Result = tmp9(tmp3[18]);
  }
  const items4 = [tmp16, ,];
  let tmp19 = null != giftCode;
  if (tmp19) {
    const obj6 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj6.text = intl3.string(tmp2(tmp3[19]).t.RDE0Sc);
    obj6.onPress = callback1;
    tmp19 = closure_7(tmp2(tmp3[21]).Button, obj6);
  }
  items4[1] = tmp19;
  if (enabled) {
    if (null != prePurchaseGiftingBadgeProgress) {
      let str2 = "secondary";
      if (null == giftCode) {
        str2 = "primary";
      }
      const obj7 = { variant: str2, text: null, onPress: null };
      const intl5 = tmp2(tmp3[19]).intl;
      obj7.text = intl5.string(tmp2(tmp3[19]).t.cpT0Cq);
      obj7.onPress = callback;
      let obj9 = obj7;
    }
    const obj8 = { children: null };
    items4[2] = closure_7(tmp22, obj9);
    obj8.children = items4;
    return closure_9(closure_8, obj8);
  }
  let str = "secondary";
  if (null == giftCode) {
    str = "primary";
  }
  obj9 = { grow: true, variant: str, text: null, onPress: null };
  const intl4 = tmp2(tmp3[19]).intl;
  obj9.text = intl4.string(onClose(navigation[19]).t.fYfGgK);
  obj9.onPress = callback2;
  const tmp2Result2 = onClose(navigation[13]);
}
