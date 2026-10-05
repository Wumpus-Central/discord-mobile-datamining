// discord_app/modules/quests/native/QuestHomeOrbShopRewardCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopConstants from "../../collectibles/CollectiblesShopConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import CollectiblesProductUtils from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import openProductDetailsActionSheet2 from "../../collectibles/native/openProductDetailsActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore_mod from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let product;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
let UserStore = UserStore_mod;
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, assetTile: obj3 };
obj2 = {
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  position: "relative",
};
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      let analyticsLocations;
      let cardHeight;
      let cardWidth;
      let clickable;
      let currentUser;
      let hideCardDetails;
      let items1;
      let require;
      let tmp7;
      let tmp8;
      const tmp2 = analyticsLocations;
      let obj = require("react");
      const cResult = obj.c(44);
      product = product.product;
      require = product;
      ({ cardWidth, cardHeight, hideCardDetails, clickable } = product);
      if (undefined === cardWidth) {
        cardWidth = tmp(tmp2[9]).COLLECTIBLES_SHOP_CARD_WIDTH;
      }
      if (undefined === cardHeight) {
        cardHeight = tmp(tmp2[9]).COLLECTIBLES_SHOP_CARD_HEIGHT;
      }
      const tmp5 = undefined !== clickable && clickable;
      const tmp6 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          const obj = defaultVariantIndex(analyticsLocations[10]);
          return obj.canUseShopDiscounts(currentUser.getCurrentUser());
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const tmpResult6 = require("useDefaultVariantIndex");
      const defaultVariantIndex = tmpResult6.useDefaultVariantIndex(product);
      analyticsLocations = defaultVariantIndex(tmp2[13])().analyticsLocations;
      const tmpResult7 = require("CollectiblesAnalyticsContext");
      const collectiblesAnalyticsContext = tmpResult7.useCollectiblesAnalyticsContext();
      if (cResult[2] === analyticsLocations) {
        let tmp14;
        let tmp17;
        if (cResult[3] === product) {
          tmp14 = cResult[4];
        }
        const tmpResult8 = require("useTrackShopCardClick");
        const trackShopCardClick = tmpResult8.useTrackShopCardClick(tmp14);
        let obj2 = { product, hasShopDiscount: stateFromStores };
        const tmpResult9 = require("CollectiblesProductUtils");
        const productOrbPrice = tmpResult9.getProductOrbPrice(obj2);
        if (cResult[5] !== product) {
          const tmpResult10 = require("getProductName");
          const productName = tmpResult10.getProductName(product);
          cResult[5] = product;
          cResult[6] = productName;
          tmp17 = productName;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] === collectiblesAnalyticsContext) {
          if (cResult[8] === analyticsLocations) {
            if (cResult[9] === product) {
              let tmp19;
              if (cResult[10] === defaultVariantIndex) {
                tmp19 = cResult[11];
              }
              UserStore = tmp19;
              if (null == productOrbPrice) {
                return null;
              } else {
                if (cResult[12] === cardHeight) {
                  let tmp21;
                  if (cResult[13] === cardWidth) {
                    tmp21 = cResult[14];
                  }
                  if (cResult[15] === tmp6.card) {
                    if (cResult[18] === cardHeight) {
                      if (cResult[19] === cardWidth) {
                        if (cResult[20] === (undefined !== hideCardDetails && hideCardDetails)) {
                          let tmp24;
                          if (cResult[21] === product) {
                            tmp24 = cResult[22];
                          }
                          if (cResult[23] === tmp6.assetTile) {
                            let tmp27;
                            if (cResult[24] === tmp24) {
                              tmp27 = cResult[25];
                            }
                            if (cResult[26] === (undefined !== hideCardDetails && hideCardDetails)) {
                              let tmp31;
                              if (cResult[27] === product) {
                                tmp31 = cResult[28];
                              }
                              if (cResult[29] === tmp27) {
                                let tmp35;
                                let tmp39;
                                if (cResult[30] === tmp31) {
                                  tmp35 = cResult[31];
                                }
                                if (tmp5) {
                                  if (cResult[36] === tmp19) {
                                    let tmp42;
                                    if (cResult[37] === trackShopCardClick) {
                                      tmp42 = cResult[38];
                                    }
                                    class K {
                                      constructor() {
                                        trackShopCardClick(ShopCtaEnum.OPEN_DETAILS);
                                        currentUser();
                                      }
                                    }
                                    const obj3 = {
                                      style: tmp23,
                                      onPress: tmp42,
                                      activeOpacity: 0.8,
                                      accessibilityRole: "button",
                                      accessibilityLabel: tmp17,
                                      children: tmp35,
                                    };
                                    cResult[39] = tmp35;
                                    const tmp45 = closure_7(require("Pressables").PressableOpacity, obj3);
                                    class B {
                                      constructor() {
                                        const obj = ActionSheetActionCreatorsDefault;
                                        obj.hideActionSheet();
                                        const obj2 = {
                                          product: require,
                                          initialVariantIndex: defaultVariantIndex,
                                          analyticsLocations,
                                          shopAnalyticsContext: collectiblesAnalyticsContext,
                                        };
                                        const openProductDetailsActionSheet =
                                          openProductDetailsActionSheet2.openProductDetailsActionSheet;
                                        openProductDetailsActionSheet2;
                                        const result = openProductDetailsActionSheet(obj2);
                                      }
                                    }
                                    cResult[40] = tmp23;
                                    cResult[41] = tmp17;
                                    cResult[42] = tmp42;
                                    cResult[43] = tmp45;
                                  }
                                  class K {
                                    constructor() {
                                      trackShopCardClick(ShopCtaEnum.OPEN_DETAILS);
                                      currentUser();
                                    }
                                  }
                                  cResult[36] = tmp19;
                                  cResult[37] = trackShopCardClick;
                                  cResult[38] = K;
                                  tmp42 = K;
                                } else {
                                  if (cResult[32] === tmp35) {
                                    if (cResult[33] === tmp23) {
                                      if (cResult[34] === tmp17) {
                                        tmp39 = cResult[35];
                                      }
                                    }
                                  }
                                  class K {
                                    constructor() {
                                      trackShopCardClick(ShopCtaEnum.OPEN_DETAILS);
                                      currentUser();
                                    }
                                  }
                                  const obj4 = {
                                    style: tmp23,
                                    accessible: true,
                                    accessibilityRole: "text",
                                    accessibilityLabel: tmp17,
                                    children: tmp35,
                                  };
                                  const tmp41 = closure_7(trackShopCardClick, obj4);
                                  cResult[32] = tmp35;
                                  class B {
                                    constructor() {
                                      const obj = ActionSheetActionCreatorsDefault;
                                      obj.hideActionSheet();
                                      const obj2 = {
                                        product: require,
                                        initialVariantIndex: defaultVariantIndex,
                                        analyticsLocations,
                                        shopAnalyticsContext: collectiblesAnalyticsContext,
                                      };
                                      const openProductDetailsActionSheet =
                                        openProductDetailsActionSheet2.openProductDetailsActionSheet;
                                      openProductDetailsActionSheet2;
                                      const result = openProductDetailsActionSheet(obj2);
                                    }
                                  }
                                  cResult[34] = tmp17;
                                  cResult[35] = tmp41;
                                  tmp39 = tmp41;
                                }
                                return tmp39;
                              }
                              const obj5 = { children: items1 };
                              items1 = [tmp27, tmp31];
                              const tmp38 = closure_9(closure_8, obj5);
                              class B {
                                constructor() {
                                  const obj = ActionSheetActionCreatorsDefault;
                                  obj.hideActionSheet();
                                  const obj2 = {
                                    product: require,
                                    initialVariantIndex: defaultVariantIndex,
                                    analyticsLocations,
                                    shopAnalyticsContext: collectiblesAnalyticsContext,
                                  };
                                  const openProductDetailsActionSheet =
                                    openProductDetailsActionSheet2.openProductDetailsActionSheet;
                                  openProductDetailsActionSheet2;
                                  const result = openProductDetailsActionSheet(obj2);
                                }
                              }
                              cResult[30] = tmp31;
                              cResult[31] = tmp38;
                              tmp35 = tmp38;
                            }
                            let tmp32 = !tmp4;
                            if (tmp32) {
                              class K {
                                constructor() {
                                  trackShopCardClick(ShopCtaEnum.OPEN_DETAILS);
                                  currentUser();
                                }
                              }
                              tmp34[0] = product;
                              tmp32 = closure_7(tmp12(tmp2[21]), tmp34);
                            }
                            cResult[26] = undefined !== hideCardDetails && hideCardDetails;
                            cResult[27] = product;
                            cResult[28] = tmp32;
                            tmp31 = tmp32;
                          }
                          const obj6 = { style: tmp6.assetTile, children: tmp24 };
                          const tmp30 = closure_7(trackShopCardClick, obj6);
                          cResult[23] = tmp6.assetTile;
                          class B {
                            constructor() {
                              const obj = ActionSheetActionCreatorsDefault;
                              obj.hideActionSheet();
                              const obj2 = {
                                product: require,
                                initialVariantIndex: defaultVariantIndex,
                                analyticsLocations,
                                shopAnalyticsContext: collectiblesAnalyticsContext,
                              };
                              const openProductDetailsActionSheet =
                                openProductDetailsActionSheet2.openProductDetailsActionSheet;
                              openProductDetailsActionSheet2;
                              const result = openProductDetailsActionSheet(obj2);
                            }
                          }
                          cResult[25] = tmp30;
                          tmp27 = tmp30;
                        }
                      }
                    }
                    const obj7 = {
                      product,
                      cardWidth,
                      cardHeight,
                      hideCardDetails: undefined !== hideCardDetails && hideCardDetails,
                    };
                    const tmp26 = closure_7(defaultVariantIndex(tmp2[20]), obj7);
                    cResult[18] = cardHeight;
                    class B {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        obj.hideActionSheet();
                        const obj2 = {
                          product: require,
                          initialVariantIndex: defaultVariantIndex,
                          analyticsLocations,
                          shopAnalyticsContext: collectiblesAnalyticsContext,
                        };
                        const openProductDetailsActionSheet =
                          openProductDetailsActionSheet2.openProductDetailsActionSheet;
                        openProductDetailsActionSheet2;
                        const result = openProductDetailsActionSheet(obj2);
                      }
                    }
                    cResult[19] = cardWidth;
                    cResult[20] = undefined !== hideCardDetails && hideCardDetails;
                    cResult[21] = product;
                    cResult[22] = tmp26;
                    tmp24 = tmp26;
                  }
                  const items2 = [tmp6.card, tmp21];
                  cResult[15] = tmp6.card;
                  cResult[16] = tmp21;
                  cResult[17] = items2;
                  class B {
                    constructor() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet();
                      const obj2 = {
                        product: require,
                        initialVariantIndex: defaultVariantIndex,
                        analyticsLocations,
                        shopAnalyticsContext: collectiblesAnalyticsContext,
                      };
                      const openProductDetailsActionSheet =
                        openProductDetailsActionSheet2.openProductDetailsActionSheet;
                      openProductDetailsActionSheet2;
                      const result = openProductDetailsActionSheet(obj2);
                    }
                  }
                }
                tmp22[0] = cardWidth;
                tmp22[1] = cardHeight;
                cResult[12] = cardHeight;
                cResult[13] = cardWidth;
                cResult[14] = tmp22;
                tmp21 = tmp22;
              }
            }
          }
        }
        class B {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = {
              product: require,
              initialVariantIndex: defaultVariantIndex,
              analyticsLocations,
              shopAnalyticsContext: collectiblesAnalyticsContext,
            };
            const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
            openProductDetailsActionSheet2;
            const result = openProductDetailsActionSheet(obj2);
          }
        }
        cResult[7] = collectiblesAnalyticsContext;
        cResult[8] = analyticsLocations;
        cResult[9] = product;
        cResult[10] = defaultVariantIndex;
        cResult[11] = B;
        tmp19 = B;
      }
      const obj8 = { product, analyticsLocations };
      cResult[2] = analyticsLocations;
      cResult[3] = product;
      cResult[4] = obj8;
      tmp14 = obj8;
    }
  : (product) => {
      let defaultVariantIndex;
      let obj7;
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
      let obj = require("get initialized");
      const items = [currentUser];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const obj = stateFromStores(defaultVariantIndex[10]);
        return obj.canUseShopDiscounts(currentUser.getCurrentUser());
      });
      let obj2 = require("useDefaultVariantIndex");
      defaultVariantIndex = obj2.useDefaultVariantIndex(product);
      const analyticsLocations = stateFromStores(defaultVariantIndex[13])().analyticsLocations;
      const obj3 = require("CollectiblesAnalyticsContext");
      const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
      const obj4 = require("useTrackShopCardClick");
      currentUser = obj4.useTrackShopCardClick({ product, analyticsLocations });
      const items1 = [product, stateFromStores];
      const memo = analyticsLocations.useMemo(() => {
        const obj = CollectiblesProductUtils;
        const obj2 = { product: require, hasShopDiscount: stateFromStores };
        return obj.getProductOrbPrice(obj2);
      }, items1);
      const obj5 = require("getProductName");
      const productName = obj5.getProductName(product);
      const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
      let closure_6 = analyticsLocations.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = {
          product: require,
          initialVariantIndex: defaultVariantIndex,
          analyticsLocations,
          shopAnalyticsContext: collectiblesAnalyticsContext,
        };
        const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
        openProductDetailsActionSheet2;
        const result = openProductDetailsActionSheet(obj2);
      }, items2);
      const tmp6 = require;
      if (null == memo) {
        return null;
      } else {
        let tmp19Result2;
        const items3 = [tmp5.card];
        size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: COLLECTIBLES_SHOP_CARD_HEIGHT };
        items3[1] = size;
        const obj6 = { style: tmp5.assetTile, children: closure_7(stateFromStores(defaultVariantIndex[20]), obj7) };
        obj7 = {
          product,
          cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH,
          cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT,
          hideCardDetails: flag,
        };
        const items4 = [closure_7(collectiblesAnalyticsContext, obj6)];
        let tmp19Result = !flag;
        const tmp20 = collectiblesAnalyticsContext;
        if (tmp19Result) {
          const obj8 = { product, collectibleProductState: null, hidePrice: true };
          tmp19Result = closure_7(tmp10(tmp7[21]), obj8);
        }
        const obj9 = { children: items4 };
        items4[1] = tmp19Result;
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
            children: tmp17Result,
          };
          tmp19Result2 = closure_7(tmp6(tmp7[22]).PressableOpacity, obj10);
        } else {
          const obj11 = {
            style: items3,
            accessible: true,
            accessibilityRole: "text",
            accessibilityLabel: productName,
            children: tmp17Result,
          };
          tmp19Result2 = closure_7(tmp20, obj11);
        }
        return tmp19Result2;
      }
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default tmp6;
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;
