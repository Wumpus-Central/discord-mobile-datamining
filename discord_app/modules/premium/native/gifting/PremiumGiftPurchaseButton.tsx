// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import useShouldShowGiftingPromotionDecoDefault from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../badges/BadgeDirectoryStore.tsx";
import closure_7 from "../../promotions/PromotionsStore.tsx";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  obj = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
    paddingTop: ThemesDefault.space.PX_12,
    paddingBottom: ThemesDefault.space.PX_12 + arg0,
    paddingHorizontal: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_8,
  };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj[2] = {
    paddingVertical: ThemesDefault.space.PX_12,
    paddingHorizontal: ThemesDefault.space.PX_16,
    borderRadius: ThemesDefault.radii.md,
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
  };
  obj[3] = { flex: 1 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  importDefault = undefined;
  dependencyMap = undefined;
  let React;
  claimableRewards = undefined;
  let selectedGiftingPromotionReward;
  let setSelectedGiftingPromotionReward;
  c7 = undefined;
  HelpdeskArticles = undefined;
  let callback;
  closure_10 = undefined;
  let tmp3 = callback2(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  let obj = defaultSelection(1483);
  importDefault = obj.useNavigation();
  obj1 = defaultSelection(10699);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(11047);
  const canPurchaseIAP = obj2.useCanPurchaseIAP(productId);
  let obj3 = defaultSelection(504);
  let items = [c7];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(
      defaultSelection(_undefined[13]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
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
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = claimableRewards.length > 0;
  }
  HelpdeskArticles = tmp8;
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  callback = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let tmp11 = tmp10;
  if (tmp10) {
    tmp11 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp11;
  let tmpResult = tmp(10740);
  const config = tmpResult.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10743).GiftingBadgeExperiment;
  let tmp4Result = tmp4(504);
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
    ({ getNextTier, getRemainingToNextTier } = setSelectedGiftingPromotionReward);
    return {
      nextTier: getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING),
      giftsToNextTier: getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING),
    };
  });
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = React.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  tmp4Result = tmp4(11042);
  const product = tmp4Result.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp15 = null != product;
  if (tmp15) {
    tmp15 = product.items.length > 0;
  }
  const intl = tmp4(1114).intl;
  const string = intl.string;
  const t = tmp4(1114).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp11) {
    str = "primary";
  }
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10753).useThemeAndReducedMotionAwareAssetUrl(asset);
  obj = { style: tmp3.container, children: null };
  if (tmp10) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === tmp4(10738).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        obj = { style: null, imageUrl: null, title: null, subtitle: null };
        obj[0] = tmp3.promoDetails;
        obj[1] = themeAndReducedMotionAwareAssetUrl;
        tmpResult = tmp(10754);
        const intl6 = tmp4(1114).intl;
        obj[2] = intl6.string(tmp(2460)["P+DDLh"]);
        const intl7 = tmp4(1114).intl;
        obj[3] = intl7.string(tmp(2460).dOZh6X);
        let tmp22Result = callback(tmpResult, obj);
      }
      const items3 = [tmp22Result, ,];
      let tmp33 = !tmp11;
      if (!tmp11) {
        obj1 = { variant: "text-sm/normal", children: null };
        const intl8 = tmp4(1114).intl;
        obj2 = { paidURL: null };
        obj2[0] = tmp(2024).getArticleURL(HelpdeskArticles.PAID_TERMS);
        obj1[1] = intl8.format(tmp4(1114).t.hYoGUM, obj2);
        tmp33 = callback(tmp4(4556).Text, obj1);
        const tmpResult1 = tmp(2024);
      }
      items3[1] = tmp33;
      obj3 = { loading: null, variant: null, text: null, disabled: null, onPress: null };
      obj3[0] = isPurchasing;
      obj3[1] = str;
      obj3[2] = stringResult;
      let tmp37 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp37 = isPurchasing;
      }
      obj3[3] = tmp37;
      let fn;
      if (!isPurchasing) {
        fn = () => {
          let obj = defaultSelection(_undefined[32]);
          obj.dismissKeyboard();
          if (closure_10) {
            if (closure_8) {
              if (closure_8) {
                _undefined2(tmp(tmp2[19]).PaymentFlowStep.REWARD_SKU_SELECT);
                obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
                obj[0] = defaultSelection;
                let items = c3;
                if (c3 == null) {
                  items = [];
                }
                obj[1] = items;
                let items1 = claimableRewards;
                if (claimableRewards == null) {
                  items1 = [];
                }
                obj[2] = items1;
                obj[3] = function onSelect(arg0) {
                  callback(arg0);
                  navigation.navigate(closure_1_0(closure_1_2[20]).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(tmp(tmp2[20]).PremiumGiftScreens.REWARD_SELECT, obj);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(closure_1_0(closure_1_2[20]).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj3[4] = fn;
      items3[2] = callback(tmp4(4975).Button, obj3);
      obj[1] = items3;
      return tmp19(tmp20, obj);
    }
  }
  if (tmp11) {
    if (tmp8) {
      const obj4 = { style: null, imageUrl: null, title: null, subtitle: null };
      obj4[0] = tmp3.promoDetails;
      obj4[1] = themeAndReducedMotionAwareAssetUrl;
      const intl4 = tmp4(1114).intl;
      obj4[2] = intl4.string(tmp(2460)["7yaXr8"]);
      const intl5 = tmp4(1114).intl;
      obj4[3] = intl5.string(tmp(2460).QojGXK);
      tmp22Result = callback(tmp(10754), obj4);
      const tmpResult2 = tmp(10754);
    }
  }
  if (tmp15) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj5 = {
          style: null,
          onPress: null,
          disabled: null,
          accessibilityRole: null,
          accessibilityLabel: null,
          children: null,
        };
        const items4 = [,];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj5[0] = items4;
        obj5[1] = function onPress() {
          let tmp = selectedGiftingPromotionReward;
          if (closure_8) {
            _undefined2(defaultSelection(_undefined[19]).PaymentFlowStep.REWARD_SKU_SELECT);
            if (null == tmp) {
              tmp = defaultSelection;
            }
            const obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
            obj[0] = tmp;
            let items = c3;
            if (c3 == null) {
              items = [];
            }
            obj[1] = items;
            let items1 = claimableRewards;
            if (claimableRewards == null) {
              items1 = [];
            }
            obj[2] = items1;
            obj[3] = function onSelect(arg0) {
              callback(arg0);
              navigation.navigate(closure_1_0(closure_1_2[20]).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(defaultSelection(_undefined[20]).PremiumGiftScreens.REWARD_SELECT, obj);
            const tmp3 = defaultSelection;
            const tmp4 = _undefined;
          }
        };
        obj5[2] = tmp9;
        obj5[3] = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1114).intl;
          stringResult1 = intl2.string(tmp4(1114).t.bt75uw);
        }
        obj5[4] = stringResult1;
        const obj6 = { style: null, product: null, title: null, subtitle: null };
        obj6[0] = tmp3.previewDetails;
        obj6[1] = product;
        const intl3 = tmp4(1114).intl;
        obj6[2] = intl3.string(tmp4(1114).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj6[3] = name;
        const items5 = [callback(tmp4(10754).PremiumGiftPromotionCollectibleRewardDetails, obj6)];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(10250).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp26Result;
        obj5[5] = items5;
        tmp22Result = tmp19(claimableRewards, obj5);
        const tmp24 = claimableRewards;
      }
    }
  }
  tmp22Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp22Result = null;
    if (null != nextTier) {
      const obj7 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      obj7[0] = stateFromStoresObject.giftsToNextTier;
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj7[1] = str2;
      obj7[2] = nextTier.simple_icon_url;
      obj7[3] = tmp(7182).PREMIUM_GIFT_CUSTOMIZATION;
      tmp22Result = callback(tmp(10756), obj7);
      const tmp22 = callback;
      const tmpResult3 = tmp(10756);
    }
  }
}
