// discord_app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";
import PromotionsStore from "../../promotions/PromotionsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let defaultSelection,
  dependencyMap,
  dismissKeyboardResult,
  importDefault,
  marketingComponentByType,
  navigateResult,
  navigation,
  tmp5,
  tmp6,
  tmp7,
  tmp8;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let tmp;
const HelpdeskUtilsDefault = tmp(2115);
const _modDef2557 = tmp(2557);
const AnalyticsLocationDefault = tmp(6681);
const useShouldShowGiftingPromotionDecoDefault = tmp(10484);
const PremiumGiftPromotionDetailsDefault = tmp(10488);
const GiftingBadgeProgressBannerDefault = tmp(10490);
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = {
    container: obj2,
    selectedRewardRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 },
    promoDetails: {
      paddingVertical: nativeDefault.space.PX_12,
      paddingHorizontal: nativeDefault.space.PX_16,
      borderRadius: nativeDefault.radii.md,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    },
    previewDetails: { flex: 1 },
  };
  obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  ({
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (defaultSelection) => {
      let allRewards;
      let giftsToNextTier;
      let isPurchasing;
      let nextTier;
      let onPurchase;
      let tmp10;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp9;
      let tmp2 = onPurchase;
      let obj = defaultSelection(onPurchase[9]);
      const cResult = obj.c(58);
      defaultSelection = defaultSelection.defaultSelection;
      closure_11(navigation(onPurchase[10])().insets.bottom);
      const obj2 = defaultSelection(onPurchase[11]);
      const tmp4 = navigation;
      navigation = obj2.useNavigation();
      const obj3 = defaultSelection(onPurchase[12]);
      const nativeGiftContext = obj3.useNativeGiftContext();
      onPurchase = nativeGiftContext.onPurchase;
      ({ isPurchasing, allRewards } = nativeGiftContext);
      const claimableRewards = nativeGiftContext.claimableRewards;
      const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
      const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
      const setCurrentAnalyticsStep = nativeGiftContext.setCurrentAnalyticsStep;
      const productId = nativeGiftContext.productId;
      const obj4 = defaultSelection(onPurchase[13]);
      const canPurchaseIAP = obj4.useCanPurchaseIAP(productId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [setCurrentAnalyticsStep];
        class P {
          constructor() {
            marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(
              defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
            );
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
      const tmpResult = defaultSelection(tmp2[15]);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, P);
      let closure_8 = tmp13;
      let closure_9 = tmp14;
      const tmp16 = tmp4(tmp2[16])() && null == selectedGiftingPromotionReward;
      let closure_10 = tmp16;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { location: "PremiumGiftPurchaseButton" };
        cResult[2] = obj5;
        class P {
          constructor() {
            marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(
              defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
            );
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
      } else {
        tmp17 = cResult[2];
      }
      const GiftingBadgeExperiment = tmp(tmp2[17]).GiftingBadgeExperiment;
      let enabled = GiftingBadgeExperiment.useConfig(tmp17).enabled;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [setSelectedGiftingPromotionReward];
        class P {
          constructor() {
            marketingComponentByType = setCurrentAnalyticsStep.getMarketingComponentByType(
              defaultSelection(onPurchase[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
            );
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
        cResult[4] = tmp21;
        tmp19 = tmp21;
        tmp18 = items1;
      } else {
        tmp18 = cResult[3];
        tmp19 = cResult[4];
      }
      const tmpResult3 = defaultSelection(tmp2[15]);
      const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp18, tmp19);
      ({ nextTier, giftsToNextTier } = stateFromStoresObject);
      if (enabled) {
        enabled = null != nextTier;
      }
      let str = "-DISABLED";
      const useIsGiftingBadgeComplexArtEnabled = tmp(tmp2[19]).useIsGiftingBadgeComplexArtEnabled;
      defaultSelection(tmp2[19]);
      if (enabled) {
        str = "";
      }
      const isGiftingBadgeComplexArtEnabled = useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
      if (cResult[5] === allRewards) {
        if (cResult[6] === claimableRewards) {
          if (cResult[7] === defaultSelection) {
            if (cResult[8] === (null != claimableRewards && claimableRewards.length > 0)) {
              if (cResult[9] === navigation) {
                if (cResult[10] === setCurrentAnalyticsStep) {
                  let tmp25;
                  if (cResult[11] === setSelectedGiftingPromotionReward) {
                    tmp25 = cResult[12];
                  }
                  closure_11 = tmp25;
                  if (cResult[13] === claimableRewards) {
                    if (cResult[14] === (null != claimableRewards && 1 === claimableRewards.length)) {
                      let tmp26;
                      let tmp27;
                      if (cResult[15] === setSelectedGiftingPromotionReward) {
                        tmp26 = cResult[16];
                        tmp27 = cResult[17];
                      }
                      const effect = allRewards.useEffect(tmp26, tmp27);
                      class V {
                        constructor() {
                          tmp = closure_9;
                          if (tmp) {
                            tmp2 = closure_6;
                            tmp3 = claimableRewards;
                            tmp4 = closure_6(claimableRewards[0]);
                          }
                          return;
                        }
                      }
                      class J {
                        constructor() {
                          obj = closure_0(closure_2[22]);
                          dismissKeyboardResult = obj.dismissKeyboard();
                          tmp2 = closure_10;
                          if (tmp2) {
                            tmp3 = closure_8;
                            if (tmp3) {
                              tmp5 = closure_11;
                              tmp6 = closure_11();
                            }
                            return;
                          }
                          tmp4 = onPurchase(() => {
                            /* body not rendered: F140681 */
                          });
                          return;
                        }
                      }
                      cResult[18] = null != claimableRewards && claimableRewards.length > 0;
                      cResult[19] = tmp25;
                      cResult[20] = navigation;
                      cResult[21] = onPurchase;
                      cResult[22] = tmp16;
                      cResult[23] = J;
                    }
                  }
                  class V {
                    constructor() {
                      tmp = closure_9;
                      if (tmp) {
                        tmp2 = closure_6;
                        tmp3 = claimableRewards;
                        tmp4 = closure_6(claimableRewards[0]);
                      }
                      return;
                    }
                  }
                  tmp28[0] = null != claimableRewards && 1 === claimableRewards.length;
                  tmp28[1] = claimableRewards;
                  tmp28[2] = setSelectedGiftingPromotionReward;
                  cResult[13] = claimableRewards;
                  cResult[14] = null != claimableRewards && 1 === claimableRewards.length;
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
          tmp = closure_8;
          if (tmp) {
            tmp2 = defaultSelection;
            tmp3 = setCurrentAnalyticsStep;
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp6 = setCurrentAnalyticsStep(closure_0(closure_2[20]).PaymentFlowStep.REWARD_SKU_SELECT);
            tmp7 = null;
            if (null == defaultSelection) {
              tmp2 = defaultSelection;
            }
            tmp8 = closure_1;
            navigate = closure_1.navigate;
            obj = { defaultHighlightedReward: null, allRewards: null, claimableRewards: null, onSelect: null };
            obj.defaultHighlightedReward = tmp2;
            items = allRewards;
            REWARD_SELECT = tmp4(tmp5[21]).PremiumGiftScreens.REWARD_SELECT;
            if (allRewards == null) {
              items = [];
            }
            obj.allRewards = items;
            items1 = claimableRewards;
            if (claimableRewards == null) {
              items1 = [];
            }
            obj.claimableRewards = items1;
            obj.onSelect = function onSelect() {
              /* body not rendered: F140680 */
            };
            navigateResult = navigate(REWARD_SELECT, obj);
          }
          return;
        }
      }
      cResult[5] = allRewards;
      cResult[6] = claimableRewards;
      cResult[7] = defaultSelection;
      cResult[8] = null != claimableRewards && claimableRewards.length > 0;
      cResult[9] = navigation;
      cResult[10] = setCurrentAnalyticsStep;
      cResult[11] = setSelectedGiftingPromotionReward;
      cResult[12] = Z;
      tmp25 = Z;
    }
  : (defaultSelection) => {
      let _undefined;
      let c2;
      let c3;
      let c7;
      let claimableRewards;
      let closure_8;
      let fn;
      let format;
      let giftsToNextTier;
      let hYoGUM;
      let intl3;
      let intl4;
      let intl5;
      let isPurchasing;
      let items4;
      let items5;
      let name;
      let nextTier;
      let obj8;
      let productId;
      let str3;
      let stringResult;
      let stringResult1;
      let tmp23Result;
      let tmp36;
      let tmp4Result8;
      let tmpResult3;
      function onSelect(arg0) {
        setSelectedGiftingPromotionReward(arg0);
        navigation.navigate(defaultSelection(c2[21]).PremiumGiftScreens.CUSTOMIZATION);
      }
      defaultSelection = defaultSelection.defaultSelection;
      importDefault = undefined;
      dependencyMap = undefined;
      react = undefined;
      claimableRewards = undefined;
      c7 = undefined;
      let tmp = importDefault;
      const tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
      let obj = defaultSelection(1490);
      importDefault = obj.useNavigation();
      let obj2 = defaultSelection(10430);
      const nativeGiftContext = obj2.useNativeGiftContext();
      ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
      const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
      const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
      ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
      const obj3 = defaultSelection(10783);
      const canPurchaseIAP = obj3.useCanPurchaseIAP(productId);
      let items = [c7];
      const obj4 = defaultSelection(504);
      const stateFromStores = obj4.useStateFromStores(items, () => {
        marketingComponentByType = marketingComponentByType.getMarketingComponentByType(
          defaultSelection(c2[14]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER,
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
      HelpdeskArticles = tmp8;
      let closure_9 = tmp9;
      const tmp10 = useShouldShowGiftingPromotionDecoDefault();
      let closure_10 = tmp11;
      const GiftingBadgeExperiment = tmp4(10471).GiftingBadgeExperiment;
      let enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled;
      let items1 = [setSelectedGiftingPromotionReward];
      const tmp4Result = defaultSelection(504);
      const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items1, () => {
        const obj = {
          nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(c2[18]).BadgeId.GIFTING),
          giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(
            defaultSelection(c2[18]).BadgeId.GIFTING,
          ),
        };
        return obj;
      });
      ({ nextTier, giftsToNextTier } = stateFromStoresObject);
      if (enabled) {
        enabled = null != nextTier;
      }
      let str = "-DISABLED";
      const useIsGiftingBadgeComplexArtEnabled = tmp4(10475).useIsGiftingBadgeComplexArtEnabled;
      defaultSelection(10475);
      if (enabled) {
        str = "";
      }
      const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
      const isGiftingBadgeComplexArtEnabled = useIsGiftingBadgeComplexArtEnabled(`PremiumGiftPurchaseButton${str}`);
      const effect = react.useEffect(() => {
        if (closure_9) {
          setSelectedGiftingPromotionReward(claimableRewards[0]);
        }
      }, items2);
      const tmp4Result6 = defaultSelection(10778);
      const product = tmp4Result6.useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
      const tmp16 = null != product && product.items.length > 0;
      const intl = tmp4(1126).intl;
      const string = intl.string;
      const t = tmp4(1126).t;
      if (tmp10 && null == selectedGiftingPromotionReward) {
        stringResult = string(t["gNZY/B"]);
      } else {
        stringResult = string(t.ouo4FK);
      }
      let str2 = "active";
      if (tmp10 && null == selectedGiftingPromotionReward) {
        str2 = "primary";
      }
      defaultSelection(10485);
      if (stateFromStores != null) {
        const asset = stateFromStores.asset;
      }
      const obj5 = { style: tmp3.container, children: null };
      if (tmp10 && null == selectedGiftingPromotionReward) {
        if (null != claimableRewards && claimableRewards.length > 0) {
          const obj6 = {
            style: tmp3.promoDetails,
            imageUrl: tmp19,
            title: intl4.string(_modDef2557["7yaXr8"]),
            subtitle: intl5.string(_modDef2557.QojGXK),
          };
          const tmpResult = PremiumGiftPromotionDetailsDefault;
          intl4 = tmp4(1126).intl;
          intl5 = tmp4(1126).intl;
          tmp23Result = closure_9(tmpResult, obj6);
        }
        const items3 = [tmp23Result, ,];
        let tmp32 = !tmp11;
        if (tmp32) {
          const obj7 = { variant: "text-sm/normal", children: format(hYoGUM, obj8) };
          const Text = tmp4(4886).Text;
          const intl6 = tmp4(1126).intl;
          format = intl6.format;
          obj8 = { paidURL: tmpResult3.getArticleURL(HelpdeskArticles.PAID_TERMS) };
          hYoGUM = tmp4(1126).t.hYoGUM;
          tmpResult3 = HelpdeskUtilsDefault;
          tmp32 = closure_9(Text, obj7);
        }
        items3[1] = tmp32;
        const obj9 = { loading: isPurchasing, variant: str2, text: stringResult, disabled: tmp36, onPress: fn };
        tmp36 = !canPurchaseIAP;
        const Button = tmp4(5594).Button;
        const tmp35 = closure_9;
        if (canPurchaseIAP) {
          tmp36 = isPurchasing;
        }
        fn = undefined;
        if (!isPurchasing) {
          fn = () => {
            let items;
            let items1;
            const obj = ChatInputUtils;
            obj.dismissKeyboard();
            if (closure_10) {
              if (closure_8) {
                if (closure_8) {
                  marketingComponentByType(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
                  const navigate = navigation.navigate;
                  const obj2 = {
                    defaultHighlightedReward: defaultSelection,
                    allRewards: items,
                    claimableRewards: items1,
                    onSelect,
                  };
                  items = c3;
                  const REWARD_SELECT = PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT;
                  if (c3 == null) {
                    items = [];
                  }
                  items1 = claimableRewards;
                  if (claimableRewards == null) {
                    items1 = [];
                  }
                  navigate(REWARD_SELECT, obj2);
                }
              }
            }
            c2(() => {
              navigation.navigate(defaultSelection(c2[21]).PremiumGiftScreens.SUCCESS);
            });
          };
        }
        items3[2] = tmp35(Button, obj9);
        obj5.children = items3;
        return closure_10(tmp21, obj5);
      }
      if (tmp16) {
        if (tmp10) {
          if (null != selectedGiftingPromotionReward) {
            const obj10 = {
              style: items4,
              onPress() {
                let items;
                let items1;
                let tmp = selectedGiftingPromotionReward;
                if (closure_8) {
                  marketingComponentByType(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
                  if (null == tmp) {
                    tmp = defaultSelection;
                  }
                  const navigate = navigation.navigate;
                  const obj = { defaultHighlightedReward: tmp, allRewards: items, claimableRewards: items1, onSelect };
                  items = c3;
                  const REWARD_SELECT = PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT;
                  if (c3 == null) {
                    items = [];
                  }
                  items1 = claimableRewards;
                  if (claimableRewards == null) {
                    items1 = [];
                  }
                  navigate(REWARD_SELECT, obj);
                }
              },
              disabled: null != claimableRewards && 1 === claimableRewards.length,
              accessibilityRole: "button",
              accessibilityLabel: stringResult1,
              children: items5,
            };
            items4 = [,];
            ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
            stringResult1 = undefined;
            const tmp25 = claimableRewards;
            if (!(null != claimableRewards && 1 === claimableRewards.length)) {
              const intl2 = tmp4(1126).intl;
              stringResult1 = intl2.string(tmp4(1126).t.bt75uw);
            }
            const obj11 = {
              style: tmp3.previewDetails,
              product,
              title: intl3.string(defaultSelection(1126).t.Rh4oem),
              subtitle: name,
            };
            const PremiumGiftPromotionCollectibleRewardDetails =
              tmp4(10488).PremiumGiftPromotionCollectibleRewardDetails;
            intl3 = tmp4(1126).intl;
            name = undefined;
            if (product != null) {
              name = product.name;
            }
            items5 = [
              closure_9(PremiumGiftPromotionCollectibleRewardDetails, obj11),
              !tmp9 && closure_9(tmp4(10058).PencilIcon, { size: "sm" }),
            ];
            !(null != claimableRewards && 1 === claimableRewards.length) &&
              closure_9(defaultSelection(10058).PencilIcon, { size: "sm" });
            tmp23Result = tmp20(tmp25, obj10);
          }
        }
      }
      tmp23Result = null;
      if (enabled) {
        const obj12 = {
          giftsToNextTier,
          nextTierName: str3,
          nextTierIcon: tmp4Result8.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled),
          analyticsLocation: AnalyticsLocationDefault.PREMIUM_GIFT_CUSTOMIZATION,
        };
        str3 = nextTier.name;
        const tmp23 = closure_9;
        const tmpResult4 = GiftingBadgeProgressBannerDefault;
        if (str3 == null) {
          str3 = "";
        }
        tmp4Result8 = defaultSelection(10475);
        tmp23Result = tmp23(tmpResult4, obj12);
      }
    };
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default tmp4;
