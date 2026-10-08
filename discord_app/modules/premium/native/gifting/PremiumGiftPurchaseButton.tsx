// === Module 12747: PremiumGiftPurchaseButton ===

// Module 12747 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 587 */;
import ChatInputUtils from "ChatInputUtils" /* 4945 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6656 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10003 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10004 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10094 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8292 */;
import PromotionsStore from "PromotionsStore" /* 10006 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftPurchaseButton(defaultSelection) {
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
    class R {
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
    cResult[1] = R;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const obj4 = defaultSelection(onPurchase[13]);
  const stateFromStores = defaultSelection(onPurchase[15]).useStateFromStores(tmp9, R);
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
    class R {
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
    class R {
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
                  function onPress() {
                    ChatInputUtils.dismissKeyboard();
                    if (closure_10) {
                      if (closure_8) {
                        closure_11();
                      }
                    }
                    onPurchase(() => {
                      navigation.navigate(defaultSelection(onPurchase[21]).PremiumGiftScreens.SUCCESS);
                    });
                  }
                  cResult[18] = tmp13;
                  cResult[19] = tmp25;
                  cResult[20] = navigation;
                  cResult[21] = onPurchase;
                  cResult[22] = tmp16;
                  cResult[23] = onPress;
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
              const items2 = [tmp14, claimableRewards, setSelectedGiftingPromotionReward];
              cResult[13] = claimableRewards;
              cResult[14] = tmp14;
              cResult[15] = setSelectedGiftingPromotionReward;
              cResult[16] = V;
              cResult[17] = items2;
              tmp27 = items2;
              tmp26 = V;
            }
          }
        }
      }
    }
  }
  function navigateToRewardSelection(arg0) {
    if (closure_8) {
      let tmp = arg0;
      setCurrentAnalyticsStep(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
      if (null == arg0) {
        tmp = defaultSelection;
      }
      const obj = { defaultHighlightedReward: tmp, allRewards: null, claimableRewards: null, onSelect: null };
      let items = allRewards;
      if (allRewards == null) {
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
        navigation.navigate(defaultSelection(onPurchase[21]).PremiumGiftScreens.CUSTOMIZATION);
      };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
    }
  }
  cResult[5] = allRewards;
  cResult[6] = claimableRewards;
  cResult[7] = defaultSelection;
  cResult[8] = tmp13;
  cResult[9] = navigation;
  cResult[10] = setCurrentAnalyticsStep;
  cResult[11] = setSelectedGiftingPromotionReward;
  cResult[12] = navigateToRewardSelection;
  tmp25 = navigateToRewardSelection;
  const tmpResult4 = defaultSelection(onPurchase[19]);
}) : (function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  dependencyMap = undefined;
  noop = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  HelpdeskArticles = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  importDefault = defaultSelection(1502).useNavigation();
  let obj = defaultSelection(1502);
  const nativeGiftContext = defaultSelection(10040).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10040);
  const canPurchaseIAP = defaultSelection(12748).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(12748);
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
  const GiftingBadgeExperiment = tmp4(10081).GiftingBadgeExperiment;
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
  const isGiftingBadgeComplexArtEnabled = defaultSelection(10085).useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result5 = defaultSelection(10085);
  const product = defaultSelection(10482).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
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
  defaultSelection(10095);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp11) {
    if (tmp8) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp18, title: null, subtitle: null };
      const intl4 = tmp4(1126).intl;
      obj6.title = intl4.string(tmp(2629)["7yaXr8"]);
      const intl5 = tmp4(1126).intl;
      obj6.subtitle = intl5.string(tmp(2629).QojGXK);
      let tmp22Result = closure_9(tmp(10098), obj6);
      const tmpResult = tmp(10098);
    }
    const items3 = [tmp22Result, , ];
    let tmp31 = !tmp11;
    if (!tmp11) {
      const obj7 = { variant: "text-sm/normal", children: null };
      const intl6 = tmp4(1126).intl;
      const obj8 = { paidURL: tmp(2127).getArticleURL(HelpdeskArticles.PAID_TERMS) };
      obj7.children = intl6.format(tmp4(1126).t.hYoGUM, obj8);
      tmp31 = closure_9(tmp4(5086).Text, obj7);
      const tmpResult3 = tmp(2127);
    }
    items3[1] = tmp31;
    const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: null, onPress: null };
    let tmp35 = !canPurchaseIAP;
    if (canPurchaseIAP) {
      tmp35 = isPurchasing;
    }
    obj9.disabled = tmp35;
    let onPress;
    if (!isPurchasing) {
      onPress = function onPress() {
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
                navigation.navigate(defaultSelection(10003).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(defaultSelection(10003).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj9.onPress = onPress;
    items3[2] = closure_9(tmp4(5375).Button, obj9);
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
              navigation.navigate(defaultSelection(10003).PremiumGiftScreens.CUSTOMIZATION);
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
        const items5 = [closure_9(tmp4(10098).PremiumGiftPromotionCollectibleRewardDetails, obj11), ];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(9675).PencilIcon, { size: "sm" });
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
    const tmpResult4 = tmp(10100);
    obj12.nextTierIcon = tmp4(10085).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    obj12.analyticsLocation = tmp(6865).PREMIUM_GIFT_CUSTOMIZATION;
    tmp22Result = tmp22(tmpResult4, obj12);
    const tmp4Result8 = tmp4(10085);
  }
});