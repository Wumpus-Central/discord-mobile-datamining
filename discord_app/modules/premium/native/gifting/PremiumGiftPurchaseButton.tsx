// === Module 11046: PremiumGiftPurchaseButton ===

// Module 11046 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10662 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10663 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10752 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;
import PromotionsStore from "PromotionsStore" /* 10665 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  let obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.selectedRewardRow = obj;
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
  let obj = defaultSelection(1483);
  importDefault = obj.useNavigation();
  let obj1 = defaultSelection(10699);
  const nativeGiftContext = obj1.useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(11047);
  const canPurchaseIAP = obj2.useCanPurchaseIAP(productId);
  let obj3 = defaultSelection(504);
  let items = [c7];
  const stateFromStores = obj3.useStateFromStores(items, () => {
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
  let tmpResult = tmp(10740);
  const config = tmpResult.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10743).GiftingBadgeExperiment;
  let tmp4Result = tmp4(504);
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING) }));
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = noop.useEffect(() => {
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
        obj = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
        tmpResult = tmp(10754);
        const intl6 = tmp4(1114).intl;
        obj.title = intl6.string(tmp(2460)["P+DDLh"]);
        const intl7 = tmp4(1114).intl;
        obj.subtitle = intl7.string(tmp(2460).dOZh6X);
        let tmp22Result = closure_9(tmpResult, obj);
      }
      const items3 = [tmp22Result, , ];
      let tmp33 = !tmp11;
      if (!tmp11) {
        obj1 = { variant: "text-sm/normal", children: null };
        const intl8 = tmp4(1114).intl;
        obj2 = { paidURL: tmp(2024).getArticleURL(HelpdeskArticles.PAID_TERMS) };
        obj1.children = intl8.format(tmp4(1114).t.hYoGUM, obj2);
        tmp33 = closure_9(tmp4(4556).Text, obj1);
        const tmpResult1 = tmp(2024);
      }
      items3[1] = tmp33;
      obj3 = { loading: isPurchasing, variant: str, text: stringResult, disabled: null, onPress: null };
      let tmp37 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp37 = isPurchasing;
      }
      obj3.disabled = tmp37;
      let fn;
      if (!isPurchasing) {
        fn = () => {
          let obj = ChatInputUtils;
          obj.dismissKeyboard();
          if (closure_10) {
            if (closure_8) {
              if (closure_8) {
                _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
                obj = { defaultHighlightedReward: defaultSelection, allRewards: null, claimableRewards: null, onSelect: null };
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
                  navigation.navigate(defaultSelection(10662).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(defaultSelection(10662).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj3.onPress = fn;
      items3[2] = closure_9(tmp4(4975).Button, obj3);
      obj.children = items3;
      return tmp19(tmp20, obj);
    }
  }
  if (tmp11) {
    if (tmp8) {
      const obj4 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
      const intl4 = tmp4(1114).intl;
      obj4.title = intl4.string(tmp(2460)["7yaXr8"]);
      const intl5 = tmp4(1114).intl;
      obj4.subtitle = intl5.string(tmp(2460).QojGXK);
      tmp22Result = closure_9(tmp(10754), obj4);
      const tmpResult2 = tmp(10754);
    }
  }
  if (tmp15) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj5 = { style: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj5.style = items4;
        obj5.onPress = function onPress() {
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
              navigation.navigate(defaultSelection(10662).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj5.disabled = tmp9;
        obj5.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1114).intl;
          stringResult1 = intl2.string(tmp4(1114).t.bt75uw);
        }
        obj5.accessibilityLabel = stringResult1;
        const obj6 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1114).intl;
        obj6.title = intl3.string(tmp4(1114).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj6.subtitle = name;
        const items5 = [closure_9(tmp4(10754).PremiumGiftPromotionCollectibleRewardDetails, obj6), ];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(10250).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp26Result;
        obj5.children = items5;
        tmp22Result = tmp19(claimableRewards, obj5);
      }
    }
  }
  tmp22Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp22Result = null;
    if (null != nextTier) {
      const obj7 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj7.nextTierName = str2;
      obj7.nextTierIcon = nextTier.simple_icon_url;
      obj7.analyticsLocation = tmp(7182).PREMIUM_GIFT_CUSTOMIZATION;
      tmp22Result = closure_9(tmp(10756), obj7);
      const tmpResult3 = tmp(10756);
    }
  }
};