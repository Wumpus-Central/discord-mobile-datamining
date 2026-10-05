// discord_app/modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumGiftModal from "PremiumGiftModal.tsx";
import ProductPurchaseSuccessActionCreatorsDefault from "../../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let navigation, onCancel, purchase;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, promoDetails: obj3 };
obj2 = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  alignSelf: "stretch",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (purchase) => {
      let first;
      let items;
      let onClose;
      let tmp = onClose;
      let obj = onClose(navigation[6]);
      const cResult = obj.c(24);
      purchase = purchase.purchase;
      const tmp4 = closure_7();
      let obj2 = onClose(navigation[7]);
      const nativeGiftContext = obj2.useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj3 = onClose(navigation[8]);
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: "PremiumGiftingPromotionSuccessActions" };
        cResult[0] = obj4;
        first = obj4;
      } else {
        first = cResult[0];
      }
      const GiftingBadgeExperiment = tmp(tmp2[9]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
      const tmpResult = tmp(navigation[10]);
      const fetchCollectiblesProduct = tmpResult.useFetchCollectiblesProduct(purchase.skuId);
      const product = fetchCollectiblesProduct.product;
      View = product;
      const isFetching = fetchCollectiblesProduct.isFetching;
      if (cResult[1] === prePurchaseGiftingBadgeProgress) {
        if (cResult[2] === enabled) {
          let tmp10;
          if (cResult[3] === navigation) {
            tmp10 = cResult[4];
          }
          onCancel = tmp10;
          if (cResult[5] === prePurchaseGiftingBadgeProgress) {
            if (cResult[6] === enabled) {
              if (cResult[7] === navigation) {
                if (cResult[8] === onClose) {
                  if (cResult[9] === tmp10) {
                    let tmp11;
                    if (cResult[10] === product) {
                      tmp11 = cResult[11];
                    }
                    if (cResult[12] === (null != product && product.items.length > 0)) {
                      if (cResult[13] === product) {
                        let tmp13;
                        if (cResult[14] === tmp4.promoDetails) {
                          tmp13 = cResult[15];
                        }
                        const _Symbol = Symbol;
                        class S {
                          constructor() {
                            if (null != View) {
                              const obj3 = { product: tmp, onCancel };
                              const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
                              obj2.open(obj3);
                            } else {
                              if (enabled) {
                                if (null != prePurchaseGiftingBadgeProgress) {
                                  const obj = { currentProgress: tmp3 };
                                  navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
                                }
                              }
                              onClose();
                            }
                          }
                        }
                        if (cResult[17] === isFetching) {
                          let tmp17;
                          if (cResult[18] === tmp11) {
                            tmp17 = cResult[19];
                          }
                          if (cResult[20] === tmp4.container) {
                            if (cResult[21] === tmp13) {
                              let tmp20;
                              if (cResult[22] === tmp17) {
                                tmp20 = cResult[23];
                              }
                              return tmp20;
                            }
                          }
                          class S {
                            constructor() {
                              if (null != View) {
                                const obj3 = { product: tmp, onCancel };
                                const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
                                obj2.open(obj3);
                              } else {
                                if (enabled) {
                                  if (null != prePurchaseGiftingBadgeProgress) {
                                    const obj = { currentProgress: tmp3 };
                                    navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
                                  }
                                }
                                onClose();
                              }
                            }
                          }
                          const obj5 = { style: tmp12, children: items };
                          items = [tmp13, tmp17];
                          const tmp22 = closure_6(View, obj5);
                          cResult[20] = tmp4.container;
                          cResult[21] = tmp13;
                          cResult[22] = tmp17;
                          cResult[23] = tmp22;
                          tmp20 = tmp22;
                        }
                        const obj6 = { grow: true, text: tmp16, loading: isFetching, onPress: tmp11 };
                        const tmp19 = onCancel(tmp(navigation[16]).Button, obj6);
                        cResult[17] = isFetching;
                        cResult[18] = tmp11;
                        cResult[19] = tmp19;
                        tmp17 = tmp19;
                      }
                    }
                    class S {
                      constructor() {
                        if (null != View) {
                          const obj3 = { product: tmp, onCancel };
                          const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
                          obj2.open(obj3);
                        } else {
                          if (enabled) {
                            if (null != prePurchaseGiftingBadgeProgress) {
                              const obj = { currentProgress: tmp3 };
                              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
                            }
                          }
                          onClose();
                        }
                      }
                    }
                    cResult[12] = null != product && product.items.length > 0;
                    cResult[13] = product;
                    cResult[14] = tmp4.promoDetails;
                    cResult[15] = null != product && product.items.length > 0;
                    tmp13 = tmp14;
                  }
                }
              }
            }
          }
          class S {
            constructor() {
              if (null != View) {
                const obj3 = { product: tmp, onCancel };
                const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
                obj2.open(obj3);
              } else {
                if (enabled) {
                  if (null != prePurchaseGiftingBadgeProgress) {
                    const obj = { currentProgress: tmp3 };
                    navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
                  }
                }
                onClose();
              }
            }
          }
          cResult[5] = prePurchaseGiftingBadgeProgress;
          cResult[6] = enabled;
          cResult[7] = navigation;
          cResult[8] = onClose;
          cResult[9] = tmp10;
          cResult[10] = product;
          cResult[11] = S;
          tmp11 = S;
        }
      }
      const fn = function _() {
        const tmp = enabled && null != prePurchaseGiftingBadgeProgress;
        if (tmp) {
          const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      };
      cResult[1] = prePurchaseGiftingBadgeProgress;
      cResult[2] = enabled;
      cResult[3] = navigation;
      cResult[4] = fn;
      tmp10 = fn;
    }
  : (purchase) => {
      let intl;
      let intl2;
      let items2;
      let name;
      let onClose;
      navigation = undefined;
      onCancel = undefined;
      purchase = purchase.purchase;
      let tmp = closure_7();
      const tmp3 = navigation;
      let obj = onClose(navigation[7]);
      const nativeGiftContext = obj.useNativeGiftContext();
      onClose = nativeGiftContext.onClose;
      const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
      let obj2 = onClose(navigation[8]);
      navigation = obj2.useNavigation();
      const GiftingBadgeExperiment = onClose(navigation[9]).GiftingBadgeExperiment;
      const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
      let obj3 = onClose(navigation[10]);
      const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
      const product = fetchCollectiblesProduct.product;
      let c4 = product;
      let tmp12Result = null != product;
      const isFetching = fetchCollectiblesProduct.isFetching;
      if (tmp12Result) {
        tmp12Result = product.items.length > 0;
      }
      const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
      onCancel = enabled.useCallback(() => {
        const tmp = enabled && null != prePurchaseGiftingBadgeProgress;
        if (tmp) {
          const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }, items);
      const items1 = [product, onClose, onCancel, enabled, prePurchaseGiftingBadgeProgress, navigation];
      const obj4 = { style: tmp.container, children: items2 };
      const callback1 = enabled.useCallback(() => {
        if (null != c4) {
          const obj3 = { product: tmp, onCancel };
          const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
          obj2.open(obj3);
        } else {
          if (enabled) {
            if (null != prePurchaseGiftingBadgeProgress) {
              const obj = { currentProgress: tmp3 };
              navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
            }
          }
          onClose();
        }
      }, items1);
      const tmp11 = c4;
      if (tmp12Result) {
        const obj5 = {
          style: tmp.promoDetails,
          product,
          title: intl.string(prePurchaseGiftingBadgeProgress(tmp3[15]).XeLTZl),
          subtitle: name,
        };
        const PremiumGiftPromotionCollectibleRewardDetails = tmp2(
          tmp3[13],
        ).PremiumGiftPromotionCollectibleRewardDetails;
        intl = tmp2(tmp3[14]).intl;
        name = undefined;
        const tmp12 = onCancel;
        if (product != null) {
          name = product.name;
        }
        tmp12Result = tmp12(PremiumGiftPromotionCollectibleRewardDetails, obj5);
      }
      items2 = [tmp12Result];
      const obj6 = {
        grow: true,
        text: intl2.string(onClose(tmp3[14]).t.kMYVwv),
        loading: isFetching,
        onPress: callback1,
      };
      const Button = tmp2(tmp3[16]).Button;
      intl2 = tmp2(tmp3[14]).intl;
      items2[1] = onCancel(Button, obj6);
      return closure_6(tmp11, obj4);
    };
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default tmp4;
