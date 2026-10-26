// === Module 13911: PremiumGiftPurchaseButton ===

// Module 13911 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 587 */;
import ChatInputUtils from "ChatInputUtils" /* 5159 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5593 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10447 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10448 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10508 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8681 */;
import PromotionsStore from "PromotionsStore" /* 9520 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1087).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4971);
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
  const cResult = defaultSelection(onPurchase[9]).c(57);
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
  if (cResult[5] === allRewards) {
    if (cResult[6] === claimableRewards) {
      if (cResult[7] === defaultSelection) {
        if (cResult[8] === tmp13) {
          if (cResult[9] === navigation) {
            if (cResult[10] === setCurrentAnalyticsStep) {
              if (cResult[11] === setSelectedGiftingPromotionReward) {
                let tmp24 = cResult[12];
              }
              closure_11 = tmp24;
              if (cResult[13] === claimableRewards) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === setSelectedGiftingPromotionReward) {
                    let tmp25 = cResult[16];
                    let tmp26 = cResult[17];
                  }
                  const effect = allRewards.useEffect(tmp25, tmp26);
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
                  function onPress() {
                    ChatInputUtils.dismissKeyboard();
                    if (closure_10) {
                      if (closure_8) {
                        closure_11();
                      }
                    }
                    onPurchase(() => {
                      navigation.navigate(defaultSelection(onPurchase[20]).PremiumGiftScreens.SUCCESS);
                    });
                  }
                  cResult[18] = tmp13;
                  cResult[19] = tmp24;
                  cResult[20] = navigation;
                  cResult[21] = onPurchase;
                  cResult[22] = tmp16;
                  cResult[23] = onPress;
                }
              }
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
              const items2 = [tmp14, claimableRewards, setSelectedGiftingPromotionReward];
              cResult[13] = claimableRewards;
              cResult[14] = tmp14;
              cResult[15] = setSelectedGiftingPromotionReward;
              cResult[16] = tmp27;
              cResult[17] = items2;
              tmp26 = items2;
              tmp25 = tmp27;
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
        navigation.navigate(defaultSelection(onPurchase[20]).PremiumGiftScreens.CUSTOMIZATION);
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
  tmp24 = navigateToRewardSelection;
  const tmpResult2 = defaultSelection(onPurchase[15]);
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
  importDefault = defaultSelection(1505).useNavigation();
  let obj = defaultSelection(1505);
  const nativeGiftContext = defaultSelection(10450).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10450);
  const canPurchaseIAP = defaultSelection(13912).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(13912);
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
  const GiftingBadgeExperiment = tmp4(10496).GiftingBadgeExperiment;
  const obj4 = defaultSelection(504);
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING) }));
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result = defaultSelection(504);
  const product = defaultSelection(11051).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp14 = null != product;
  if (tmp14) {
    tmp14 = product.items.length > 0;
  }
  const intl = tmp4(1128).intl;
  const string = intl.string;
  const t = tmp4(1128).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp11) {
    str = "primary";
  }
  defaultSelection(10509);
  if (stateFromStores != null) {
    const asset = stateFromStores.asset;
  }
  const obj5 = { style: tmp3.container, children: null };
  if (tmp11) {
    if (tmp8) {
      const obj6 = { style: tmp3.promoDetails, imageUrl: tmp17, title: null, subtitle: null };
      const intl4 = tmp4(1128).intl;
      obj6.title = intl4.string(tmp(2600)["7yaXr8"]);
      const intl5 = tmp4(1128).intl;
      obj6.subtitle = intl5.string(tmp(2600).QojGXK);
      let tmp21Result = closure_9(tmp(10512), obj6);
      const tmpResult = tmp(10512);
    }
    const items3 = [tmp21Result, , ];
    let tmp30 = !tmp11;
    if (!tmp11) {
      const obj7 = { variant: "text-sm/normal", children: null };
      const intl6 = tmp4(1128).intl;
      const obj8 = { paidURL: tmp(2067).getArticleURL(HelpdeskArticles.PAID_TERMS) };
      obj7.children = intl6.format(tmp4(1128).t.hYoGUM, obj8);
      tmp30 = closure_9(tmp4(5234).Text, obj7);
      const tmpResult3 = tmp(2067);
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
                navigation.navigate(defaultSelection(10447).PremiumGiftScreens.CUSTOMIZATION);
              };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj2);
            }
          }
        }
        _undefined(() => {
          navigation.navigate(defaultSelection(10447).PremiumGiftScreens.SUCCESS);
        });
      };
    }
    obj9.onPress = onPress;
    items3[2] = closure_9(tmp4(5244).Button, obj9);
    obj5.children = items3;
    return tmp18(tmp19, obj5);
  }
  if (tmp14) {
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
              navigation.navigate(defaultSelection(10447).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj10.disabled = tmp9;
        obj10.accessibilityRole = "button";
        let formatToPlainStringResult;
        if (!tmp9) {
          const intl2 = tmp4(1128).intl;
          const obj11 = { rewardName: product.name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp(2600).qbJihM, obj11);
        }
        obj10.accessibilityLabel = formatToPlainStringResult;
        const obj12 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1128).intl;
        obj12.title = intl3.string(tmp4(1128).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj12.subtitle = name;
        const items5 = [closure_9(tmp4(10512).PremiumGiftPromotionCollectibleRewardDetails, obj12), ];
        let tmp25Result = !tmp9;
        if (!tmp9) {
          tmp25Result = tmp25(tmp4(10120).PencilIcon, { size: "sm" });
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
      const obj13 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj13.nextTierName = str2;
      const tmp21 = closure_9;
      const tmpResult4 = tmp(10514);
      obj13.nextTierIcon = tmp4(10502).getGiftingBadgeTierIconUrl(nextTier);
      obj13.analyticsLocation = tmp(7278).PREMIUM_GIFT_CUSTOMIZATION;
      tmp21Result = tmp21(tmpResult4, obj13);
      const tmp4Result6 = tmp4(10502);
    }
  }
});