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
let HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((defaultSelection) => {
  const cResult = defaultSelection(onPurchase[9]).c(58);
  defaultSelection = defaultSelection.defaultSelection;
  closure_11(navigation(onPurchase[10])().insets.bottom);
  let obj = defaultSelection(onPurchase[9]);
  const tmp4 = navigation;
  navigation = defaultSelection(onPurchase[11]).useNavigation();
  const obj2 = defaultSelection(onPurchase[11]);
  const nativeGiftContext = defaultSelection(onPurchase[12]).useNativeGiftContext();
  onPurchase = nativeGiftContext.onPurchase;
  ({ isPurchasing, allRewards } = nativeGiftContext);
  const claimableRewards = nativeGiftContext.claimableRewards;
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  const setCurrentAnalyticsStep = nativeGiftContext.setCurrentAnalyticsStep;
  const obj3 = defaultSelection(onPurchase[12]);
  const canPurchaseIAP = defaultSelection(onPurchase[13]).useCanPurchaseIAP(nativeGiftContext.productId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [setCurrentAnalyticsStep];
    class P {
      constructor() {
        marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftCustomizationBanner";
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
    cResult[0] = items;
    cResult[1] = P;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const obj4 = defaultSelection(onPurchase[13]);
  const stateFromStores = defaultSelection(onPurchase[15]).useStateFromStores(tmp9, P);
  let tmp13 = null != claimableRewards;
  if (tmp13) {
    tmp13 = claimableRewards.length > 0;
  }
  closure_8 = tmp13;
  let tmp14 = null != claimableRewards;
  if (tmp14) {
    tmp14 = 1 === claimableRewards.length;
  }
  closure_9 = tmp14;
  const tmp15 = tmp4(onPurchase[16])();
  let tmp16 = tmp15;
  if (tmp15) {
    tmp16 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[2] = { location: "PremiumGiftPurchaseButton" };
    class P {
      constructor() {
        marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftCustomizationBanner";
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
    const obj5 = { location: "PremiumGiftPurchaseButton" };
  } else {
    const tmp18 = cResult[2];
  }
  const GiftingBadgeExperiment = tmp(tmp2[17]).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig(tmp18).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [setSelectedGiftingPromotionReward];
    class P {
      constructor() {
        marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftCustomizationBanner";
          prop = null;
          if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
          }
        }
        return prop;
      }
    }
    cResult[3] = items1;
    cResult[4] = tmp22;
    let tmp20 = tmp22;
    let tmp19 = items1;
  } else {
    tmp19 = cResult[3];
    tmp20 = cResult[4];
  }
  const tmpResult = defaultSelection(onPurchase[15]);
  const stateFromStoresObject = defaultSelection(onPurchase[15]).useStateFromStoresObject(tmp19, tmp20);
  ({ nextTier, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  const tmpResult3 = defaultSelection(onPurchase[15]);
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const isGiftingBadgeComplexArtEnabled = defaultSelection(onPurchase[19]).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  if (cResult[5] === allRewards) {
    if (cResult[6] === claimableRewards) {
      if (cResult[7] === defaultSelection) {
        if (cResult[8] === tmp13) {
          if (cResult[9] === navigation) {
            if (cResult[10] === setCurrentAnalyticsStep) {
              if (cResult[11] === setSelectedGiftingPromotionReward) {
                let tmp25 = cResult[12];
              }
              closure_11 = tmp25;
              if (cResult[13] === claimableRewards) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === setSelectedGiftingPromotionReward) {
                    let tmp26 = cResult[16];
                    let tmp27 = cResult[17];
                  }
                  const effect = allRewards.useEffect(tmp26, tmp27);
                  class V {
                    constructor() {
                      if (closure_9) {
                        tmp = closure_6;
                        tmp2 = claimableRewards;
                        tmp3 = closure_6(claimableRewards[0]);
                      }
                      return;
                    }
                  }
                  class J {
                    constructor() {
                      obj = closure_0(closure_2[22]);
                      dismissKeyboardResult = obj.dismissKeyboard();
                      if (closure_10) {
                        tmp2 = closure_8;
                        if (closure_8) {
                          tmp4 = closure_11;
                          tmp5 = closure_11();
                        }
                        return;
                      }
                      tmp3 = onPurchase(() => { ... });
                      return;
                    }
                  }
                  cResult[18] = tmp13;
                  cResult[19] = tmp25;
                  cResult[20] = navigation;
                  cResult[21] = onPurchase;
                  cResult[22] = tmp16;
                  cResult[23] = J;
                }
              }
              class V {
                constructor() {
                  if (closure_9) {
                    tmp = closure_6;
                    tmp2 = claimableRewards;
                    tmp3 = closure_6(claimableRewards[0]);
                  }
                  return;
                }
              }
              tmp28[0] = tmp14;
              tmp28[1] = claimableRewards;
              tmp28[2] = setSelectedGiftingPromotionReward;
              cResult[13] = claimableRewards;
              cResult[14] = tmp14;
              cResult[15] = setSelectedGiftingPromotionReward;
              cResult[16] = V;
              cResult[17] = tmp28;
              tmp27 = tmp28;
              tmp26 = V;
            }
          }
        }
      }
    }
  }
  class Z {
    constructor(arg0) {
      if (closure_8) {
        tmp = defaultSelection;
        tmp2 = setCurrentAnalyticsStep;
        tmp3 = closure_0;
        tmp4 = closure_2;
        tmp5 = setCurrentAnalyticsStep(closure_0(closure_2[20]).PaymentFlowStep.REWARD_SKU_SELECT);
        tmp6 = null;
        if (null == defaultSelection) {
          tmp = defaultSelection;
        }
        tmp7 = closure_1;
        obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
        obj.defaultHighlightedReward = tmp;
        items = allRewards;
        if (allRewards == null) {
          items = [];
        }
        obj.allRewards = items;
        items1 = claimableRewards;
        if (claimableRewards == null) {
          items1 = [];
        }
        obj.claimableRewards = items1;
        obj.onSelect = function onSelect() { ... };
        navigateResult = closure_1.navigate(tmp3(tmp4[21]).PremiumGiftScreens.REWARD_SELECT, obj);
      }
      return;
    }
  }
  cResult[5] = allRewards;
  cResult[6] = claimableRewards;
  cResult[7] = defaultSelection;
  cResult[8] = tmp13;
  cResult[9] = navigation;
  cResult[10] = setCurrentAnalyticsStep;
  cResult[11] = setSelectedGiftingPromotionReward;
  cResult[12] = Z;
  tmp25 = Z;
  const tmpResult4 = defaultSelection(onPurchase[19]);
}) : ((defaultSelection) => {
  defaultSelection = defaultSelection.defaultSelection;
  dependencyMap = undefined;
  noop = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  HelpdeskArticles = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  importDefault = defaultSelection(1490).useNavigation();
  let obj = defaultSelection(1490);
  const nativeGiftContext = defaultSelection(10443).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10443);
  const canPurchaseIAP = defaultSelection(10796).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(10796);
  let items = [c7];
  const stateFromStores = defaultSelection(504).useStateFromStores(items, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(defaultSelection(_undefined[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
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
  const GiftingBadgeExperiment = tmp4(10484).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
  const obj4 = defaultSelection(504);
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
  const isGiftingBadgeComplexArtEnabled = defaultSelection(10488).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result5 = defaultSelection(10488);
  const product = defaultSelection(10791).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp15 = null != product;
  if (tmp15) {
    tmp15 = product.items.length > 0;
  }
  const intl = tmp4(1126).intl;
  const string = intl.string;
  const t = tmp4(1126).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str2 = "active";
  if (tmp11) {
    str2 = "primary";
  }
  defaultSelection(10498);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp11) {
    if (tmp8) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp18, title: null, subtitle: null };
      const intl4 = tmp4(1126).intl;
      obj6.title = intl4.string(tmp(2585)["7yaXr8"]);
      const intl5 = tmp4(1126).intl;
      obj6.subtitle = intl5.string(tmp(2585).QojGXK);
      let tmp22Result = closure_9(tmp(10501), obj6);
      const tmpResult = tmp(10501);
    }
    const items3 = [tmp22Result, , ];
    let tmp31 = !tmp11;
    if (!tmp11) {
      const obj7 = { variant: "text-sm/normal", children: null };
      const intl6 = tmp4(1126).intl;
      const obj8 = { paidURL: tmp(2115).getArticleURL(HelpdeskArticles.PAID_TERMS) };
      obj7.children = intl6.format(tmp4(1126).t.hYoGUM, obj8);
      tmp31 = closure_9(tmp4(4892).Text, obj7);
      const tmpResult3 = tmp(2115);
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
                navigation.navigate(defaultSelection(10406).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(defaultSelection(10406).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj9.onPress = fn;
    items3[2] = closure_9(tmp4(5601).Button, obj9);
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
              navigation.navigate(defaultSelection(10406).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj10.disabled = tmp9;
        obj10.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1126).intl;
          stringResult1 = intl2.string(tmp4(1126).t.bt75uw);
        }
        obj10.accessibilityLabel = stringResult1;
        const obj11 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1126).intl;
        obj11.title = intl3.string(tmp4(1126).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj11.subtitle = name;
        const items5 = [closure_9(tmp4(10501).PremiumGiftPromotionCollectibleRewardDetails, obj11), ];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(10071).PencilIcon, { size: "sm" });
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
    const tmpResult4 = tmp(10503);
    obj12.nextTierIcon = tmp4(10488).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    obj12.analyticsLocation = tmp(6688).PREMIUM_GIFT_CUSTOMIZATION;
    tmp22Result = tmp22(tmpResult4, obj12);
    const tmp4Result8 = tmp4(10488);
  }
});