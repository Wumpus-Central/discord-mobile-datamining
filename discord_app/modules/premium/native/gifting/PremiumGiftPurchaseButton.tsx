// === Module 11207: PremiumGiftPurchaseButton ===

// Module 11207 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4506 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7095 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10811 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10812 */;
import PremiumGiftingGogoPromotionExperimentDefault from "PremiumGiftingGogoPromotionExperiment" /* 10889 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10904 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8340 */;
import PromotionsStore from "PromotionsStore" /* 10814 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
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
  const nativeGiftContext = defaultSelection(10848).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10848);
  const canPurchaseIAP = defaultSelection(11208).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(11208);
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
  const obj4 = defaultSelection(504);
  const config = PremiumGiftingGogoPromotionExperimentDefault.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10892).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  const tmpResult = PremiumGiftingGogoPromotionExperimentDefault;
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING) }));
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
  const isGiftingBadgeComplexArtEnabled = defaultSelection(10896).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result5 = defaultSelection(10896);
  const product = defaultSelection(11203).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp16 = null != product;
  if (tmp16) {
    tmp16 = product.items.length > 0;
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
  const tmp4Result6 = defaultSelection(11203);
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10905).useThemeAndReducedMotionAwareAssetUrl(asset);
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === tmp4(10887).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        const obj6 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
        const intl6 = tmp4(1115).intl;
        obj6.title = intl6.string(tmp(2461)["P+DDLh"]);
        const intl7 = tmp4(1115).intl;
        obj6.subtitle = intl7.string(tmp(2461).dOZh6X);
        let tmp23Result = closure_9(tmp(10907), obj6);
        const tmpResult5 = tmp(10907);
      }
      const items3 = [tmp23Result, , ];
      let tmp34 = !tmp11;
      if (!tmp11) {
        const obj7 = { variant: "text-sm/normal", children: null };
        const intl8 = tmp4(1115).intl;
        const obj8 = { paidURL: tmp(2025).getArticleURL(HelpdeskArticles.PAID_TERMS) };
        obj7.children = intl8.format(tmp4(1115).t.hYoGUM, obj8);
        tmp34 = closure_9(tmp4(4636).Text, obj7);
        const tmpResult6 = tmp(2025);
      }
      items3[1] = tmp34;
      const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: null, onPress: null };
      let tmp38 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp38 = isPurchasing;
      }
      obj9.disabled = tmp38;
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
                  navigation.navigate(defaultSelection(10811).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(defaultSelection(10811).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj9.onPress = fn;
      items3[2] = closure_9(tmp4(5062).Button, obj9);
      obj5.children = items3;
      return tmp20(tmp21, obj5);
    }
  }
  if (tmp11) {
    if (tmp8) {
      const obj10 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null, subtitleColor: "text-strong" };
      const intl4 = tmp4(1115).intl;
      obj10.title = intl4.string(tmp4(1115).t.Ve9Ge6);
      const intl5 = tmp4(1115).intl;
      obj10.subtitle = intl5.string(tmp(2461).ivpn6G);
      tmp23Result = closure_9(tmp(10907), obj10);
      const tmpResult7 = tmp(10907);
    }
  }
  if (tmp16) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj11 = { style: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj11.style = items4;
        obj11.onPress = function onPress() {
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
              navigation.navigate(defaultSelection(10811).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj11.disabled = tmp9;
        obj11.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1115).intl;
          stringResult1 = intl2.string(tmp4(1115).t.bt75uw);
        }
        obj11.accessibilityLabel = stringResult1;
        const obj12 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1115).intl;
        obj12.title = intl3.string(tmp4(1115).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj12.subtitle = name;
        const items5 = [closure_9(tmp4(10907).PremiumGiftPromotionCollectibleRewardDetails, obj12), ];
        let tmp27Result = !tmp9;
        if (!tmp9) {
          tmp27Result = tmp27(tmp4(10397).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp27Result;
        obj11.children = items5;
        tmp23Result = tmp20(claimableRewards, obj11);
      }
    }
  }
  tmp23Result = null;
  if (enabled) {
    const obj13 = { giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
    let str3 = nextTier.name;
    if (str3 == null) {
      str3 = "";
    }
    obj13.nextTierName = str3;
    const tmp23 = closure_9;
    const tmpResult8 = tmp(10910);
    obj13.nextTierIcon = tmp4(10896).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    obj13.analyticsLocation = tmp(7296).PREMIUM_GIFT_CUSTOMIZATION;
    tmp23Result = tmp23(tmpResult8, obj13);
    const tmp4Result8 = tmp4(10896);
  }
};