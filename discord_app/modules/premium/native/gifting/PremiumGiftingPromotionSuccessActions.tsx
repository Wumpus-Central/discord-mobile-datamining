// === Module 10812: PremiumGiftingPromotionSuccessActions ===

// Module 10812 (PremiumGiftingPromotionSuccessActions)
import nativeDefault from "native" /* 587 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10393 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10813 */;
import noop from "module_19" /* 19 */;

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 }, promoDetails: null };
let obj3 = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.promoDetails = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((purchase) => {
  const cResult = onClose(navigation[6]).c(24);
  const tmp4 = closure_7();
  let obj = onClose(navigation[6]);
  const nativeGiftContext = onClose(navigation[7]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[7]);
  navigation = onClose(navigation[8]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "PremiumGiftingPromotionSuccessActions" };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp(tmp2[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  let obj3 = onClose(navigation[8]);
  const fetchCollectiblesProduct = onClose(navigation[10]).useFetchCollectiblesProduct(purchase.purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  View = product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  let tmp9 = null != product;
  if (tmp9) {
    tmp9 = product.items.length > 0;
  }
  if (cResult[1] === prePurchaseGiftingBadgeProgress) {
    if (cResult[2] === enabled) {
      if (cResult[3] === navigation) {
        let tmp10 = cResult[4];
      }
      onCancel = tmp10;
      if (cResult[5] === prePurchaseGiftingBadgeProgress) {
        if (cResult[6] === enabled) {
          if (cResult[7] === navigation) {
            if (cResult[8] === onClose) {
              if (cResult[9] === tmp10) {
                if (cResult[10] === product) {
                  let tmp11 = cResult[11];
                }
                if (cResult[12] === tmp9) {
                  if (cResult[13] === product) {
                    if (cResult[14] === tmp4.promoDetails) {
                      let tmp13 = cResult[15];
                    }
                    const _Symbol = Symbol;
                    class S {
                      constructor() {
                        if (null != product) {
                          tmp10 = closure_1;
                          tmp11 = closure_2;
                          obj2 = closure_1(closure_2[12]);
                          obj1 = { product: null, onCancel: null };
                          obj1.product = tmp;
                          tmp12 = closure_5;
                          obj1.onCancel = closure_5;
                          openResult = obj2.open(obj1);
                        } else {
                          tmp2 = enabled;
                          if (enabled) {
                            if (null != closure_1) {
                              tmp6 = closure_2;
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              obj = { currentProgress: null };
                              obj.currentProgress = tmp3;
                              navigateResult = closure_2.navigate(closure_0(closure_2[11]).PremiumGiftScreens.GIFTING_BADGE, obj);
                            }
                          }
                          tmp4 = onClose;
                          tmp5 = onClose();
                        }
                        return;
                      }
                    }
                    if (cResult[17] === isFetching) {
                      if (cResult[18] === tmp11) {
                        let tmp17 = cResult[19];
                      }
                      if (cResult[20] === tmp4.container) {
                        if (cResult[21] === tmp13) {
                          if (cResult[22] === tmp17) {
                            let tmp20 = cResult[23];
                          }
                          return tmp20;
                        }
                      }
                      class S {
                        constructor() {
                          if (null != product) {
                            tmp10 = closure_1;
                            tmp11 = closure_2;
                            obj2 = closure_1(closure_2[12]);
                            obj1 = { product: null, onCancel: null };
                            obj1.product = tmp;
                            tmp12 = closure_5;
                            obj1.onCancel = closure_5;
                            openResult = obj2.open(obj1);
                          } else {
                            tmp2 = enabled;
                            if (enabled) {
                              if (null != closure_1) {
                                tmp6 = closure_2;
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                obj = { currentProgress: null };
                                obj.currentProgress = tmp3;
                                navigateResult = closure_2.navigate(closure_0(closure_2[11]).PremiumGiftScreens.GIFTING_BADGE, obj);
                              }
                            }
                            tmp4 = onClose;
                            tmp5 = onClose();
                          }
                          return;
                        }
                      }
                      const obj5 = { style: tmp12, children: null };
                      const items = [tmp13, tmp17];
                      obj5.children = items;
                      const tmp22 = closure_6(View, obj5);
                      cResult[20] = tmp4.container;
                      cResult[21] = tmp13;
                      cResult[22] = tmp17;
                      cResult[23] = tmp22;
                      tmp20 = tmp22;
                    }
                    const obj6 = { grow: true, text: tmp16, loading: isFetching, onPress: tmp11 };
                    const tmp19 = onCancel(tmp(tmp2[16]).Button, obj6);
                    cResult[17] = isFetching;
                    cResult[18] = tmp11;
                    cResult[19] = tmp19;
                    tmp17 = tmp19;
                  }
                }
                class S {
                  constructor() {
                    if (null != product) {
                      tmp10 = closure_1;
                      tmp11 = closure_2;
                      obj2 = closure_1(closure_2[12]);
                      obj1 = { product: null, onCancel: null };
                      obj1.product = tmp;
                      tmp12 = closure_5;
                      obj1.onCancel = closure_5;
                      openResult = obj2.open(obj1);
                    } else {
                      tmp2 = enabled;
                      if (enabled) {
                        if (null != closure_1) {
                          tmp6 = closure_2;
                          tmp7 = closure_0;
                          tmp8 = closure_2;
                          obj = { currentProgress: null };
                          obj.currentProgress = tmp3;
                          navigateResult = closure_2.navigate(closure_0(closure_2[11]).PremiumGiftScreens.GIFTING_BADGE, obj);
                        }
                      }
                      tmp4 = onClose;
                      tmp5 = onClose();
                    }
                    return;
                  }
                }
                cResult[12] = tmp9;
                cResult[13] = product;
                cResult[14] = tmp4.promoDetails;
                cResult[15] = tmp9;
                tmp13 = tmp14;
              }
            }
          }
        }
      }
      class S {
        constructor() {
          if (null != product) {
            tmp10 = closure_1;
            tmp11 = closure_2;
            obj2 = closure_1(closure_2[12]);
            obj1 = { product: null, onCancel: null };
            obj1.product = tmp;
            tmp12 = closure_5;
            obj1.onCancel = closure_5;
            openResult = obj2.open(obj1);
          } else {
            tmp2 = enabled;
            if (enabled) {
              if (null != closure_1) {
                tmp6 = closure_2;
                tmp7 = closure_0;
                tmp8 = closure_2;
                obj = { currentProgress: null };
                obj.currentProgress = tmp3;
                navigateResult = closure_2.navigate(closure_0(closure_2[11]).PremiumGiftScreens.GIFTING_BADGE, obj);
              }
            }
            tmp4 = onClose;
            tmp5 = onClose();
          }
          return;
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
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
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
  const tmpResult = onClose(navigation[10]);
}) : ((purchase) => {
  let onClose;
  let navigation;
  onCancel = undefined;
  let tmp = closure_7();
  const nativeGiftContext = onClose(navigation[7]).useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj = onClose(navigation[7]);
  navigation = onClose(navigation[8]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[9]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj2 = onClose(navigation[8]);
  const fetchCollectiblesProduct = onClose(navigation[10]).useFetchCollectiblesProduct(purchase.purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  c4 = product;
  let tmp12Result = null != product;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  onCancel = enabled.useCallback(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp) {
      const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items);
  const items1 = [product, onClose, onCancel, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const obj4 = { style: tmp.container, children: null };
  const callback1 = enabled.useCallback(() => {
    if (null != c4) {
      const obj3 = { product: tmp, onCancel };
      ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
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
  if (tmp12Result) {
    const obj5 = { style: tmp.promoDetails, product, title: null, subtitle: null };
    const intl = tmp2(tmp3[14]).intl;
    obj5.title = intl.string(prePurchaseGiftingBadgeProgress(tmp3[15]).XeLTZl);
    let name;
    if (product != null) {
      name = product.name;
    }
    obj5.subtitle = name;
    tmp12Result = onCancel(tmp2(tmp3[13]).PremiumGiftPromotionCollectibleRewardDetails, obj5);
  }
  const items2 = [tmp12Result, ];
  const obj6 = { grow: true, text: null, loading: null, onPress: null };
  const intl2 = tmp2(tmp3[14]).intl;
  obj6.text = intl2.string(onClose(navigation[14]).t.kMYVwv);
  obj6.loading = fetchCollectiblesProduct.isFetching;
  obj6.onPress = callback1;
  items2[1] = onCancel(onClose(navigation[16]).Button, obj6);
  obj4.children = items2;
  return closure_6(c4, obj4);
});