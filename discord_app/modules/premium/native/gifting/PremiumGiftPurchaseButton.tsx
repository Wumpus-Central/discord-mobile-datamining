// === Module 10501: PremiumGiftPurchaseButton ===

// Module 10501 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4697 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6397 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10114 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10115 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10205 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7630 */;
import PromotionsStore from "PromotionsStore" /* 10117 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  obj.selectedRewardRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.promoDetails = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
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
  importDefault = defaultSelection(1484).useNavigation();
  let obj = defaultSelection(1484);
  const nativeGiftContext = defaultSelection(10151).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10151);
  const canPurchaseIAP = defaultSelection(10502).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(10502);
  let items = [c7];
  const stateFromStores = defaultSelection(504).useStateFromStores(items, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(defaultSelection(_undefined[13]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
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
  const GiftingBadgeExperiment = tmp4(10192).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  const obj4 = defaultSelection(504);
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[16]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[16]).BadgeId.GIFTING) }));
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmp4Result = defaultSelection(504);
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const isGiftingBadgeComplexArtEnabled = defaultSelection(10196).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result5 = defaultSelection(10196);
  const product = defaultSelection(10497).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp15 = null != product;
  if (tmp15) {
    tmp15 = product.items.length > 0;
  }
  const intl = tmp4(1115).intl;
  const string = intl.string;
  const t = tmp4(1115).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str2 = "active";
  if (tmp11) {
    str2 = "primary";
  }
  defaultSelection(10206);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp11) {
    if (tmp8) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp18, title: null, subtitle: null };
      const intl4 = tmp4(1115).intl;
      obj6.title = intl4.string(tmp(2550)["7yaXr8"]);
      const intl5 = tmp4(1115).intl;
      obj6.subtitle = intl5.string(tmp(2550).QojGXK);
      let tmp22Result = closure_9(tmp(10207), obj6);
      const tmpResult = tmp(10207);
    }
    const items3 = [tmp22Result, , ];
    let tmp31 = !tmp11;
    if (!tmp11) {
      const obj7 = { variant: "text-sm/normal", children: null };
      const intl6 = tmp4(1115).intl;
      const obj8 = { paidURL: tmp(2110).getArticleURL(HelpdeskArticles.PAID_TERMS) };
      obj7.children = intl6.format(tmp4(1115).t.hYoGUM, obj8);
      tmp31 = closure_9(tmp4(4825).Text, obj7);
      const tmpResult3 = tmp(2110);
    }
    items3[1] = tmp31;
    const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: null, onPress: null };
    let tmp35 = !canPurchaseIAP;
    if (canPurchaseIAP) {
      tmp35 = isPurchasing;
    }
    obj9.disabled = tmp35;
    let fn;
    if (!isPurchasing) {
      fn = () => {
        ChatInputUtils.dismissKeyboard();
        if (closure_10) {
          if (closure_8) {
            if (closure_8) {
              _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
              const obj2 = { defaultHighlightedReward: defaultSelection, allRewards: null, claimableRewards: null, onSelect: null };
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
                navigation.navigate(defaultSelection(10114).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(defaultSelection(10114).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj9.onPress = fn;
    items3[2] = closure_9(tmp4(5274).Button, obj9);
    obj5.children = items3;
    return tmp19(tmp20, obj5);
  }
  if (tmp15) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj10 = { style: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj10.style = items4;
        obj10.onPress = function onPress() {
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
              navigation.navigate(defaultSelection(10114).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj10.disabled = tmp9;
        obj10.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1115).intl;
          stringResult1 = intl2.string(tmp4(1115).t.bt75uw);
        }
        obj10.accessibilityLabel = stringResult1;
        const obj11 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1115).intl;
        obj11.title = intl3.string(tmp4(1115).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj11.subtitle = name;
        const items5 = [closure_9(tmp4(10207).PremiumGiftPromotionCollectibleRewardDetails, obj11), ];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(9702).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp26Result;
        obj10.children = items5;
        tmp22Result = tmp19(claimableRewards, obj10);
      }
    }
  }
  tmp22Result = null;
  if (enabled) {
    const obj12 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
    let str3 = nextTier.name;
    if (str3 == null) {
      str3 = "";
    }
    obj12.nextTierName = str3;
    const tmp22 = closure_9;
    const tmpResult4 = tmp(10209);
    obj12.nextTierIcon = tmp4(10196).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    obj12.analyticsLocation = tmp(6598).PREMIUM_GIFT_CUSTOMIZATION;
    tmp22Result = tmp22(tmpResult4, obj12);
    const tmp4Result8 = tmp4(10196);
  }
};