// === Module 14887: QuestHomeOrbShopRewardCard ===

// Module 14887 (QuestHomeOrbShopRewardCard)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 7847 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1087).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { card: { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, position: "relative" }, assetTile: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.assetTile = {};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, position: "relative" };
let obj4 = {};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let PressableOpacity = require;
  let tmp = analyticsLocations;
  const cResult = require("c").c(44);
  product = product.product;
  require = product;
  ({ cardWidth, cardHeight, hideCardDetails, clickable } = product);
  if (undefined === cardWidth) {
    cardWidth = PressableOpacity(tmp[9]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (undefined === cardHeight) {
    cardHeight = PressableOpacity(tmp[9]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp5 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return defaultVariantIndex(analyticsLocations[10]).canUseShopDiscounts(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = require("c");
  const tmp4 = undefined !== clickable && clickable;
  const stateFromStores = PressableOpacity(tmp[11]).useStateFromStores(tmp6, tmp7);
  const PressableOpacityResult = PressableOpacity(tmp[11]);
  const defaultVariantIndex = PressableOpacity(tmp[12]).useDefaultVariantIndex(product);
  analyticsLocations = defaultVariantIndex(tmp[13])().analyticsLocations;
  const PressableOpacityResult1 = PressableOpacity(tmp[12]);
  const collectiblesAnalyticsContext = PressableOpacity(tmp[14]).useCollectiblesAnalyticsContext();
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === product) {
      let tmp13 = cResult[4];
    }
    const trackShopCardClick = PressableOpacity(tmp[15]).useTrackShopCardClick(tmp13);
    const PressableOpacityResult3 = PressableOpacity(tmp[15]);
    let obj2 = { product, hasShopDiscount: stateFromStores };
    const productOrbPrice = PressableOpacity(tmp[16]).getProductOrbPrice(obj2);
    if (cResult[5] !== product) {
      const productName = PressableOpacity(tmp[17]).getProductName(product);
      cResult[5] = product;
      cResult[6] = productName;
      let tmp16 = productName;
      const PressableOpacityResult5 = PressableOpacity(tmp[17]);
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === collectiblesAnalyticsContext) {
      if (cResult[8] === analyticsLocations) {
        if (cResult[9] === product) {
          if (cResult[10] === defaultVariantIndex) {
            let tmp18 = cResult[11];
          }
          UserStore = tmp18;
          if (null == productOrbPrice) {
            return null;
          } else {
            if (cResult[12] === cardHeight) {
              if (cResult[13] === cardWidth) {
                let tmp20 = cResult[14];
              }
              if (cResult[15] === tmp5.card) {
                if (cResult[18] === cardHeight) {
                  if (cResult[19] === cardWidth) {
                    if (cResult[20] === tmp3) {
                      if (cResult[21] === product) {
                        let tmp23 = cResult[22];
                      }
                      if (cResult[23] === tmp5.assetTile) {
                        if (cResult[24] === tmp23) {
                          let tmp26 = cResult[25];
                        }
                        if (cResult[26] === tmp3) {
                          if (cResult[27] === product) {
                            let tmp30 = cResult[28];
                          }
                          if (cResult[29] === tmp26) {
                            if (cResult[30] === tmp30) {
                              let tmp34 = cResult[31];
                            }
                            if (tmp4) {
                              if (cResult[36] === tmp18) {
                                if (cResult[37] === trackShopCardClick) {
                                  let tmp41 = cResult[38];
                                }
                                class K {
                                  constructor() {
                                    tmp = closure_4(ShopCtaEnum.OPEN_DETAILS);
                                    tmp2 = closure_5();
                                    return;
                                  }
                                }
                                PressableOpacity = PressableOpacity(tmp[22]).PressableOpacity;
                                let obj3 = { style: tmp22, onPress: tmp41, activeOpacity: 0.8, accessibilityRole: "button", accessibilityLabel: tmp16, children: tmp34 };
                                tmp = closure_7(PressableOpacity, obj3);
                                class B {
                                  constructor() {
                                    obj = closure_1(closure_2[18]);
                                    hideActionSheetResult = obj.hideActionSheet();
                                    obj2 = closure_0(closure_2[19]);
                                    obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                                    tmp2 = closure_3;
                                    obj1.shopAnalyticsContext = tmp2;
                                    result = obj2.openProductDetailsActionSheet(obj1);
                                    return;
                                  }
                                }
                                cResult[40] = tmp22;
                                cResult[41] = tmp16;
                                cResult[42] = tmp41;
                                cResult[43] = tmp;
                              }
                              class K {
                                constructor() {
                                  tmp = closure_4(ShopCtaEnum.OPEN_DETAILS);
                                  tmp2 = closure_5();
                                  return;
                                }
                              }
                              cResult[36] = tmp18;
                              cResult[37] = trackShopCardClick;
                              cResult[38] = K;
                              tmp41 = K;
                            } else {
                              if (cResult[32] === tmp34) {
                                if (cResult[33] === tmp22) {
                                  class K {
                                    constructor() {
                                      tmp = closure_4(ShopCtaEnum.OPEN_DETAILS);
                                      tmp2 = closure_5();
                                      return;
                                    }
                                  }
                                }
                              }
                              class K {
                                constructor() {
                                  tmp = closure_4(ShopCtaEnum.OPEN_DETAILS);
                                  tmp2 = closure_5();
                                  return;
                                }
                              }
                              const obj4 = { style: tmp22, accessible: true, accessibilityRole: "text", accessibilityLabel: tmp16, children: tmp34 };
                              const tmp40 = closure_7(trackShopCardClick, obj4);
                              cResult[32] = tmp34;
                              class B {
                                constructor() {
                                  obj = closure_1(closure_2[18]);
                                  hideActionSheetResult = obj.hideActionSheet();
                                  obj2 = closure_0(closure_2[19]);
                                  obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                                  tmp2 = closure_3;
                                  obj1.shopAnalyticsContext = tmp2;
                                  result = obj2.openProductDetailsActionSheet(obj1);
                                  return;
                                }
                              }
                              cResult[34] = tmp16;
                              cResult[35] = tmp40;
                            }
                          }
                          const obj5 = { children: null };
                          const items1 = [tmp26, tmp30];
                          obj5.children = items1;
                          const tmp37 = closure_9(closure_8, obj5);
                          class B {
                            constructor() {
                              obj = closure_1(closure_2[18]);
                              hideActionSheetResult = obj.hideActionSheet();
                              obj2 = closure_0(closure_2[19]);
                              obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                              tmp2 = closure_3;
                              obj1.shopAnalyticsContext = tmp2;
                              result = obj2.openProductDetailsActionSheet(obj1);
                              return;
                            }
                          }
                          cResult[30] = tmp30;
                          cResult[31] = tmp37;
                          tmp34 = tmp37;
                        }
                        let tmp31 = !tmp3;
                        if (!tmp3) {
                          class K {
                            constructor() {
                              tmp = closure_4(ShopCtaEnum.OPEN_DETAILS);
                              tmp2 = closure_5();
                              return;
                            }
                          }
                          tmp33[0] = product;
                          tmp31 = closure_7(tmp11(tmp[21]), tmp33);
                        }
                        cResult[26] = tmp3;
                        cResult[27] = product;
                        cResult[28] = tmp31;
                        tmp30 = tmp31;
                      }
                      const obj6 = { style: tmp5.assetTile, children: tmp23 };
                      const tmp29 = closure_7(trackShopCardClick, obj6);
                      cResult[23] = tmp5.assetTile;
                      class B {
                        constructor() {
                          obj = closure_1(closure_2[18]);
                          hideActionSheetResult = obj.hideActionSheet();
                          obj2 = closure_0(closure_2[19]);
                          obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                          tmp2 = closure_3;
                          obj1.shopAnalyticsContext = tmp2;
                          result = obj2.openProductDetailsActionSheet(obj1);
                          return;
                        }
                      }
                      cResult[25] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                }
                const obj7 = { product, cardWidth, cardHeight, hideCardDetails: tmp3 };
                const tmp25 = closure_7(tmp11(tmp[20]), obj7);
                cResult[18] = cardHeight;
                class B {
                  constructor() {
                    obj = closure_1(closure_2[18]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[19]);
                    obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                    tmp2 = closure_3;
                    obj1.shopAnalyticsContext = tmp2;
                    result = obj2.openProductDetailsActionSheet(obj1);
                    return;
                  }
                }
                cResult[19] = cardWidth;
                cResult[20] = tmp3;
                cResult[21] = product;
                cResult[22] = tmp25;
                tmp23 = tmp25;
              }
              const items2 = [tmp5.card, tmp20];
              cResult[15] = tmp5.card;
              cResult[16] = tmp20;
              cResult[17] = items2;
              class B {
                constructor() {
                  obj = closure_1(closure_2[18]);
                  hideActionSheetResult = obj.hideActionSheet();
                  obj2 = closure_0(closure_2[19]);
                  obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                  tmp2 = closure_3;
                  obj1.shopAnalyticsContext = tmp2;
                  result = obj2.openProductDetailsActionSheet(obj1);
                  return;
                }
              }
            }
            tmp21[0] = cardWidth;
            tmp21[1] = cardHeight;
            cResult[12] = cardHeight;
            cResult[13] = cardWidth;
            cResult[14] = tmp21;
            tmp20 = tmp21;
          }
        }
      }
    }
    class B {
      constructor() {
        obj = closure_1(closure_2[18]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_0(closure_2[19]);
        obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
        tmp2 = closure_3;
        obj1.shopAnalyticsContext = tmp2;
        result = obj2.openProductDetailsActionSheet(obj1);
        return;
      }
    }
    cResult[7] = collectiblesAnalyticsContext;
    cResult[8] = analyticsLocations;
    cResult[9] = product;
    cResult[10] = defaultVariantIndex;
    cResult[11] = B;
    tmp18 = B;
    const PressableOpacityResult4 = PressableOpacity(tmp[16]);
  }
  const obj8 = { product, analyticsLocations };
  cResult[2] = analyticsLocations;
  cResult[3] = product;
  cResult[4] = obj8;
  tmp13 = obj8;
  const PressableOpacityResult2 = PressableOpacity(tmp[14]);
}) : ((product) => {
  product = product.product;
  const require = product;
  let COLLECTIBLES_SHOP_CARD_WIDTH = product.cardWidth;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = product.cardHeight;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT === undefined) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let flag = product.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = product.clickable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  defaultVariantIndex = undefined;
  let currentUser;
  const tmp5 = closure_10();
  const items = [currentUser];
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores(defaultVariantIndex[10]).canUseShopDiscounts(currentUser.getCurrentUser()));
  let obj = require("initialize");
  const tmp6 = require;
  defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  const analyticsLocations = stateFromStores(defaultVariantIndex[13])().analyticsLocations;
  let obj2 = require("useDefaultVariantIndex");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  let obj3 = require("CollectiblesAnalyticsContext");
  currentUser = require("useTrackShopCardClick").useTrackShopCardClick({ product, analyticsLocations });
  const items1 = [product, stateFromStores];
  const memo = analyticsLocations.useMemo(() => CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: stateFromStores }), items1);
  const obj4 = require("useTrackShopCardClick");
  const productName = require("getProductName").getProductName(product);
  const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
  closure_6 = analyticsLocations.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { product, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
  }, items2);
  if (null == memo) {
    return null;
  } else {
    const items3 = [tmp5.card, ];
    const size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    items3[1] = size;
    const obj6 = { style: tmp5.assetTile, children: null };
    const obj7 = { product, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag };
    obj6.children = closure_7(tmp10(tmp7[20]), obj7);
    const items4 = [closure_7(collectiblesAnalyticsContext, obj6), ];
    let tmp19Result = !flag;
    if (!flag) {
      const obj8 = { product, collectibleProductState: null, hidePrice: true };
      tmp19Result = closure_7(tmp10(tmp7[21]), obj8);
    }
    const obj9 = { children: null };
    items4[1] = tmp19Result;
    obj9.children = items4;
    const tmp17Result = closure_9(closure_8, obj9);
    if (flag2) {
      const obj10 = {
        style: items3,
        onPress() {
              currentUser(ShopCtaEnum.OPEN_DETAILS);
              closure_6();
            },
        activeOpacity: 0.8,
        accessibilityRole: "button",
        accessibilityLabel: productName,
        children: tmp17Result
      };
      let tmp19Result2 = closure_7(tmp6(tmp7[22]).PressableOpacity, obj10);
    } else {
      const obj11 = { style: items3, accessible: true, accessibilityRole: "text", accessibilityLabel: productName, children: tmp17Result };
      tmp19Result2 = closure_7(collectiblesAnalyticsContext, obj11);
    }
    return tmp19Result2;
  }
  const obj5 = require("getProductName");
});
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;