// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import useShouldShowGiftingPromotionDecoDefault from "../../gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  };
  obj.selectedRewardRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.promoDetails = {
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  };
  obj.previewDetails = { flex: 1 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  dependencyMap = undefined;
  noop = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  HelpdeskArticles = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  importDefault = defaultSelection(1498).useNavigation();
  let obj = defaultSelection(1498);
  const nativeGiftContext = defaultSelection(10542).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10542);
  const canPurchaseIAP = defaultSelection(14413).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(14413);
  let items = [c7];
  const stateFromStores = defaultSelection(504).useStateFromStores(items, () => {
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
  closure_9 = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let tmp11 = tmp10;
  if (tmp10) {
    tmp11 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp11;
  const GiftingBadgeExperiment = tmp4(10590).GiftingBadgeExperiment;
  const obj4 = defaultSelection(504);
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({
    nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[16]).BadgeId.GIFTING),
    giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(
      defaultSelection(_undefined[16]).BadgeId.GIFTING,
    ),
  }));
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result = defaultSelection(504);
  const product = defaultSelection(11349).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp14 = null != product;
  if (tmp14) {
    tmp14 = product.items.length > 0;
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
  defaultSelection(10603);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp11) {
    if (tmp8) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp17, title: null, subtitle: null };
      const intl4 = tmp4(1114).intl;
      obj6.title = intl4.string(tmp(2601)["7yaXr8"]);
      const intl5 = tmp4(1114).intl;
      obj6.subtitle = intl5.string(tmp(2601).QojGXK);
      let tmp21Result = closure_9(tmp(10605), obj6);
      const tmpResult = tmp(10605);
    }
    const items3 = [tmp21Result, ,];
    let tmp30 = !tmp11;
    if (!tmp11) {
      const obj7 = { variant: "text-sm/normal", children: null };
      const intl6 = tmp4(1114).intl;
      const obj8 = { paidURL: tmp(2062).getArticleURL(HelpdeskArticles.PAID_TERMS) };
      obj7.children = intl6.format(tmp4(1114).t.hYoGUM, obj8);
      tmp30 = closure_9(tmp4(5619).Text, obj7);
      const tmpResult3 = tmp(2062);
    }
    items3[1] = tmp30;
    const obj9 = { loading: isPurchasing, variant: str, text: stringResult, disabled: null, onPress: null };
    let tmp34 = !canPurchaseIAP;
    if (canPurchaseIAP) {
      tmp34 = isPurchasing;
    }
    obj9.disabled = tmp34;
    let onPress;
    if (!isPurchasing) {
      onPress = function onPress() {
        ChatInputUtils.dismissKeyboard();
        if (closure_10) {
          if (closure_8) {
            if (closure_8) {
              _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
              const obj2 = {
                defaultHighlightedReward: defaultSelection,
                allRewards: null,
                claimableRewards: null,
                onSelect: null,
              };
              let items = c3;
              if (c3 == null) {
                items = [];
              }
              obj2.allRewards = items;
              let items1 = claimableRewards;
              if (claimableRewards == null) {
                items1 = [];
              }
              obj2.claimableRewards = items1;
              obj2.onSelect = function onSelect(arg0) {
                setSelectedGiftingPromotionReward(arg0);
                navigation.navigate(defaultSelection(10539).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(defaultSelection(10539).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj9.onPress = onPress;
    items3[2] = closure_9(tmp4(5629).Button, obj9);
    obj5.children = items3;
    return tmp18(tmp19, obj5);
  }
  if (tmp14) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj10 = {
          style: null,
          onPress: null,
          disabled: null,
          accessibilityRole: null,
          accessibilityLabel: null,
          children: null,
        };
        const items4 = [,];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj10.style = items4;
        obj10.onPress = function handleEditButtonPressed() {
          let tmp = selectedGiftingPromotionReward;
          if (closure_8) {
            _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
            if (null == tmp) {
              tmp = defaultSelection;
            }
            const obj = { defaultHighlightedReward: tmp, allRewards: null, claimableRewards: null, onSelect: null };
            let items = c3;
            if (c3 == null) {
              items = [];
            }
            obj.allRewards = items;
            let items1 = claimableRewards;
            if (claimableRewards == null) {
              items1 = [];
            }
            obj.claimableRewards = items1;
            obj.onSelect = function onSelect(arg0) {
              setSelectedGiftingPromotionReward(arg0);
              navigation.navigate(defaultSelection(10539).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj10.disabled = tmp9;
        obj10.accessibilityRole = "button";
        let formatToPlainStringResult;
        if (!tmp9) {
          const intl2 = tmp4(1114).intl;
          const obj11 = { rewardName: product.name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp(2601).qbJihM, obj11);
        }
        obj10.accessibilityLabel = formatToPlainStringResult;
        const obj12 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1114).intl;
        obj12.title = intl3.string(tmp4(1114).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj12.subtitle = name;
        const items5 = [closure_9(tmp4(10605).PremiumGiftPromotionCollectibleRewardDetails, obj12)];
        let tmp25Result = !tmp9;
        if (!tmp9) {
          tmp25Result = tmp25(tmp4(10212).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp25Result;
        obj10.children = items5;
        tmp21Result = tmp18(claimableRewards, obj10);
      }
    }
  }
  tmp21Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp21Result = null;
    if (null != nextTier) {
      const obj13 = {
        giftsToNextTier: stateFromStoresObject.giftsToNextTier,
        nextTierName: null,
        nextTierIcon: null,
        analyticsLocation: null,
      };
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj13.nextTierName = str2;
      const tmp21 = closure_9;
      const tmpResult4 = tmp(10608);
      obj13.nextTierIcon = tmp4(10596).getGiftingBadgeTierIconUrl(nextTier);
      obj13.analyticsLocation = tmp(7345).PREMIUM_GIFT_CUSTOMIZATION;
      tmp21Result = tmp21(tmpResult4, obj13);
      const tmp4Result6 = tmp4(10596);
    }
  }
}
