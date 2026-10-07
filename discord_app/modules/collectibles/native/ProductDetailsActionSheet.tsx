// === Module 7859: ProductDetailsActionSheet ===

// Module 7859 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native2 from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import ShopStandalonePdpMobileExperiment from "ShopStandalonePdpMobileExperiment" /* 7856 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import generated_NoResults from "generated/NoResults" /* 7915 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8454 */;
import useCollectiblesShopProducts from "useCollectiblesShopProducts" /* 8569 */;
import useFetchCollectiblesCategoriesAndPurchases from "useFetchCollectiblesCategoriesAndPurchases" /* 10478 */;
import ProductDetailsActionSheetSkeletonDefault from "ProductDetailsActionSheetSkeleton" /* 13021 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;

require = fn;
let closure_3 = ["shopAnalyticsContext"];
let noop = fn(19);
({ useCallback: closure_7, useMemo: closure_8 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1087).ShopCtaEnum;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = {};
const logger = new LoggerDefault("ProductDetailsActionSheet");
const createStyles = fn(4896);
let obj = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
const rect = { position: "absolute", top: 0, right: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.actionButtons = rect;
let size = { width: fn(5607).MEDIUM_BUTTON_HEIGHT, height: fn(5607).MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj.previewProfileButton = size;
let obj3 = { backgroundColor: null };
let native = fn(4595);
obj3.backgroundColor = native.setColorOpacity("white", 0.72);
obj.previewProfileButtonLight = obj3;
let obj4 = { backgroundColor: null };
native = fn(4595);
obj4.backgroundColor = native.setColorOpacity("white", 0.62);
obj.previewProfileButtonLightPressed = obj4;
let tmp5 = new LoggerDefault("ProductDetailsActionSheet");
obj.previewProfileButtonDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewProfileButtonDarkPressed = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
let obj6 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj.previewProfileButtonMidnight = { borderColor: nativeDefault.colors.BORDER_STRONG };
const rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
obj.badgeWrapper = rect1;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((handlePreviewPress) => {
  const cResult = handlePreviewPress(576).c(14);
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp4 = closure_19();
  dependencyMap = tmp4;
  const obj = handlePreviewPress(576);
  const theme = handlePreviewPress(4595).useThemeContext().theme;
  const obj2 = handlePreviewPress(4595);
  const isThemeLightResult = handlePreviewPress(4735).isThemeLight(theme);
  closure_3 = tmp6;
  const tmp7 = isThemeLightResult ? tmp4.previewProfileButtonLight : tmp4.previewProfileButtonDark;
  closure_4 = tmp7;
  const tmp8 = isThemeLightResult ? tmp4.previewProfileButtonLightPressed : tmp4.previewProfileButtonDarkPressed;
  closure_5 = tmp8;
  if (cResult[0] === handlePreviewPress) {
    if (cResult[1] === onTrackPress) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp4.previewProfileButton) {
          if (cResult[6] === tmp4.previewProfileButtonMidnight) {
            if (cResult[7] === tmp7) {
              let tmp10 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t["3Qcx6K"]);
              const obj4 = { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT };
              const tmp17 = closure_15(tmp(6465).EyeIcon, obj4);
              cResult[9] = stringResult;
              cResult[10] = tmp17;
              let tmp13 = tmp17;
              let tmp12 = stringResult;
            } else {
              tmp12 = cResult[9];
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp10) {
                let tmp18 = cResult[13];
              }
              return tmp18;
            }
            const obj5 = { style: tmp10, onPress: tmp9, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp13 };
            const tmp21 = closure_15(closure_9, obj5);
            cResult[11] = tmp9;
            cResult[12] = tmp10;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
    }
    const fn2 = function b(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
        previewProfileButtonMidnight = closure_2.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    };
    cResult[3] = tmp6;
    cResult[4] = tmp8;
    cResult[5] = tmp4.previewProfileButton;
    cResult[6] = tmp4.previewProfileButtonMidnight;
    cResult[7] = tmp7;
    cResult[8] = fn2;
    tmp10 = fn2;
  }
  const fn = function o() {
    onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
    handlePreviewPress();
  };
  cResult[0] = handlePreviewPress;
  cResult[1] = onTrackPress;
  cResult[2] = fn;
  tmp9 = fn;
  const obj3 = handlePreviewPress(4735);
}) : ((handlePreviewPress) => {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_19();
  dependencyMap = tmp;
  const theme = handlePreviewPress(4595).useThemeContext().theme;
  const obj = handlePreviewPress(4595);
  const isThemeLightResult = handlePreviewPress(4735).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.ONYX;
  closure_4 = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
        previewProfileButtonMidnight = closure_2.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: noop.useCallback(() => {
      onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1126).intl;
  obj3.accessibilityLabel = intl.string(handlePreviewPress(1126).t["3Qcx6K"]);
  const obj2 = handlePreviewPress(4735);
  obj3.children = closure_15(handlePreviewPress(6465).EyeIcon, { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT });
  return closure_15(closure_9, obj3);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = require("c").c(8);
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const collectibleProfileOverrides = product.collectibleProfileOverrides;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let obj = require("c");
  const currentUser = require("useCurrentUser").useCurrentUser();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === collectibleProfileOverrides) {
      if (cResult[2] === product) {
        if (cResult[3] === shopAnalyticsContext) {
          if (cResult[4] === stageCollectibleChangeForEditProfile) {
            if (cResult[5] === currentUser.id) {
              if (cResult[6] === variantIndex) {
                let tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
      }
    }
  }
  const fn = function o() {
    showUserProfileActionSheetDefault({
      userId: currentUser.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        if (null == stageCollectibleChangeForEditProfile) {
          const obj2 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(analyticsLocations[22]).openProductDetailsActionSheet(obj2);
          const obj4 = product(analyticsLocations[22]);
        } else {
          const obj5 = { skuId: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null, stageCollectibleChangeForEditProfile: null };
          const obj = product(analyticsLocations[22]);
          obj5.skuId = product(analyticsLocations[23]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(analyticsLocations[23]);
        }
      }
    });
  };
  cResult[0] = analyticsLocations;
  cResult[1] = collectibleProfileOverrides;
  cResult[2] = product;
  cResult[3] = shopAnalyticsContext;
  cResult[4] = stageCollectibleChangeForEditProfile;
  cResult[5] = currentUser.id;
  cResult[6] = variantIndex;
  cResult[7] = fn;
  tmp3 = fn;
}) : ((product) => {
  product = product.product;
  require = product;
  const variantIndex = product.variantIndex;
  const analyticsLocations = product.analyticsLocations;
  const shopAnalyticsContext = product.shopAnalyticsContext;
  const collectibleProfileOverrides = product.collectibleProfileOverrides;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const currentUser = require("useCurrentUser").useCurrentUser();
  const items = [product, variantIndex, collectibleProfileOverrides, currentUser.id, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile];
  return currentUser.useCallback(() => {
    showUserProfileActionSheetDefault({
      userId: currentUser.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        if (null == stageCollectibleChangeForEditProfile) {
          const obj2 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(analyticsLocations[22]).openProductDetailsActionSheet(obj2);
          const obj4 = product(analyticsLocations[22]);
        } else {
          const obj5 = { skuId: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null, stageCollectibleChangeForEditProfile: null };
          const obj = product(analyticsLocations[22]);
          obj5.skuId = product(analyticsLocations[23]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(analyticsLocations[23]);
        }
      }
    });
  }, items);
});
ReactCompilerGating = fn(558);
let closure_22 = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((product, arg1) => {
  const cResult = require("c").c(107);
  product = product.product;
  require = product;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = product);
  let num = 0;
  if (undefined !== initialVariantIndex) {
    num = initialVariantIndex;
  }
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ProductDetailsActionSheetInner" };
    cResult[2] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[2];
  }
  const OTPACOMOrderExperiment = tmp(tmp2[24]).OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig(tmp5);
  const tmp7 = closure_19();
  ref = noop.useRef(null);
  if (cResult[3] !== tmp4) {
    const items1 = [];
    items1[HermesBuiltin.arraySpread(tmp4, 0)] = require("AnalyticsLocation").COLLECTIBLES_SHOP_PROFILE_PREVIEW;
    cResult[3] = tmp4;
    cResult[4] = items1;
    let tmp9 = items1;
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp4, 0);
  } else {
    tmp9 = cResult[4];
  }
  const analyticsLocations2 = require("useAnalyticsLocations")(tmp9).analyticsLocations;
  if (cResult[5] !== product) {
    const productSkuIds = tmp(tmp2[23]).getProductSkuIds(product);
    cResult[5] = product;
    cResult[6] = productSkuIds;
    let tmp15 = productSkuIds;
    const tmpResult = tmp(tmp2[23]);
  } else {
    tmp15 = cResult[6];
  }
  const obj = require("c");
  let first = _slicedToArray(noop.useState(num), 2)[0];
  if (cResult[7] === product) {
    if (cResult[8] === first) {
      let tmp21 = cResult[9];
    }
    closure_3 = tmp21;
    if (cResult[10] === analyticsLocations2) {
      if (cResult[11] === tmp15) {
        if (cResult[12] === tmp21.skuId) {
          let tmp23 = cResult[13];
        }
        const trackPdpClick = tmp(tmp2[27]).useTrackPdpClick(tmp23);
        if (cResult[14] !== trackPdpClick) {
          const fn = function z() {
            return {
              scrollToEnd() {
                const current = ref.current;
                let scrollToEndResult;
                if (current != null) {
                  scrollToEndResult = current.scrollToEnd({ animated: true });
                }
                return scrollToEndResult;
              },
              notifyDismissed() {
                return trackPdpClick(constants.CLOSE_DETAIL);
              }
            };
          };
          const items2 = [trackPdpClick];
          cResult[14] = trackPdpClick;
          cResult[15] = items2;
          cResult[16] = fn;
          let tmp26 = fn;
          let tmp25 = items2;
        } else {
          tmp25 = cResult[15];
          tmp26 = cResult[16];
        }
        const imperativeHandle = obj3.useImperativeHandle(arg1, tmp26, tmp25);
        const tmpResult11 = tmp(tmp2[27]);
        [tmp30, tmp31] = tmp17(obj3.useState(undefined), 2);
        _slicedToArray = tmp31;
        const tmp17Result = tmp17(obj3.useState(undefined), 2);
        if (tmp21.skuId !== tmp17Result6[0]) {
          tmp33(tmp21.skuId);
          tmp31(undefined);
        }
        tmp17Result6 = tmp17(obj3.useState(tmp21.skuId), 2);
        const collectibleProfileOverrides = tmp(tmp2[28]).useCollectibleProfileOverrides(tmp21, tmp30);
        const tmpResult12 = tmp(tmp2[28]);
        const collectiblesAnalyticsContext = tmp(tmp2[29]).useCollectiblesAnalyticsContext();
        let cardId;
        if (collectiblesAnalyticsContext != null) {
          cardId = collectiblesAnalyticsContext.cardId;
        }
        let tilePosition;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        let sessionId;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        if (cResult[17] === analyticsLocations2) {
          if (cResult[18] === tmp15) {
            if (cResult[19] === tmp21.skuId) {
              if (cResult[20] === cardId) {
                if (cResult[21] === tilePosition) {
                  if (cResult[22] === sessionId) {
                    let tmp42 = cResult[23];
                  }
                  tmp14(tmp2[31])(tmp42);
                  if (cResult[24] === analyticsLocations2) {
                    if (cResult[25] === collectibleProfileOverrides) {
                      if (cResult[26] === product) {
                        if (cResult[27] === stageCollectibleChangeForEditProfile) {
                          if (cResult[28] === tmp44) {
                            if (cResult[29] === first) {
                              let tmp45 = cResult[30];
                            }
                            const tmp47 = closure_21(tmp45);
                            const tmp48 = product.type === tmp(tmp2[19]).CollectiblesItemType.BUNDLE;
                            noop = tmp48;
                            if (cResult[31] === tmp48) {
                              if (cResult[32] === product.items) {
                                let tmp49 = cResult[33];
                              }
                              [type, closure_7] = tmp17(obj3.useState(tmp49), 2);
                              const _Symbol = Symbol;
                              if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                function ue(type) {
                                  tmp31(type);
                                  closure_1_7(type.type);
                                }
                                cResult[34] = ue;
                                let tmp51 = ue;
                              } else {
                                tmp51 = cResult[34];
                              }
                              if (!tmp48) {
                                type = tmp21.type;
                              }
                              if (cResult[35] !== type) {
                                let tmp53 = null != type;
                                if (tmp53) {
                                  tmp53 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
                                  const tmp54 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
                                }
                                cResult[35] = type;
                                cResult[36] = tmp53;
                                let tmp52 = tmp53;
                              } else {
                                tmp52 = cResult[36];
                              }
                              if (cResult[37] === product.skuId) {
                                if (cResult[38] === tmp4) {
                                  let tmp55 = cResult[39];
                                  let tmp56 = cResult[40];
                                }
                                const effect = obj3.useEffect(tmp55, tmp56);
                                const hideBadge = product.hideBadge;
                                const theme = tmp(tmp2[13]).useThemeContext().theme;
                                if (cResult[41] !== theme) {
                                  const isThemeDarkResult = tmp(tmp2[16]).isThemeDark(theme);
                                  cResult[41] = theme;
                                  cResult[42] = isThemeDarkResult;
                                  let tmp58 = isThemeDarkResult;
                                  const tmpResult15 = tmp(tmp2[16]);
                                } else {
                                  tmp58 = cResult[42];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                  const items3 = [CollectiblesCategoryStore];
                                  cResult[43] = items3;
                                  let tmp60 = items3;
                                } else {
                                  tmp60 = cResult[43];
                                }
                                if (cResult[44] !== product.categorySkuId) {
                                  function ke() {
                                    const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
                                    let unpublishedAt;
                                    if (category != null) {
                                      unpublishedAt = category.unpublishedAt;
                                    }
                                    return unpublishedAt;
                                  }
                                  cResult[44] = product.categorySkuId;
                                  cResult[45] = ke;
                                  let tmp62 = ke;
                                } else {
                                  tmp62 = cResult[45];
                                }
                                const tmpResult14 = tmp(tmp2[13]);
                                const stateFromStores = tmp(tmp2[33]).useStateFromStores(tmp60, tmp62);
                                let tmp64 = tmp21;
                                if (tmp48) {
                                  tmp64 = tmp21;
                                  if (null != tmp30) {
                                    const obj4 = { skuId: null, type: null, items: null };
                                    ({ skuId: obj16.skuId, type: obj16.type } = tmp30);
                                    const items4 = [tmp30];
                                    obj4.items = items4;
                                    tmp64 = obj4;
                                  }
                                }
                                let tmp65 = null;
                                if (null == product.badgeOverride) {
                                  if (tmpResult17.isDynamicProduct(tmp64)) {
                                    if (!hideBadge) {
                                      const _Symbol3 = Symbol;
                                      if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl = tmp(tmp2[17]).intl;
                                        const stringResult = intl.string(tmp(tmp2[17]).t["+drfVi"]);
                                        cResult[46] = stringResult;
                                        let tmp66 = stringResult;
                                      } else {
                                        tmp66 = cResult[46];
                                      }
                                      const _Symbol4 = Symbol;
                                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl2 = tmp(tmp2[17]).intl;
                                        const stringResult1 = intl2.string(tmp(tmp2[17]).t["+drfVi"]);
                                        cResult[47] = stringResult1;
                                        let tmp68 = stringResult1;
                                      } else {
                                        tmp68 = cResult[47];
                                      }
                                      if (cResult[48] !== tmp58) {
                                        const obj5 = { accessibilityLabel: tmp66, children: null };
                                        const obj6 = { icon: tmp(tmp2[36]).DiceIcon, label: tmp68, isDark: tmp58 };
                                        obj5.children = closure_15(tmp(tmp2[35]).IconTextBadge, obj6);
                                        const tmp72 = closure_15(tmp(tmp2[34]).DynamicBadgeTooltip, obj5);
                                        cResult[48] = tmp58;
                                        cResult[49] = tmp72;
                                        let tmp70 = tmp72;
                                      } else {
                                        tmp70 = cResult[49];
                                      }
                                      tmp65 = tmp70;
                                    }
                                  }
                                  if (null != stateFromStores) {
                                    if (tmpResult18.shouldShowLimitedTimeBadge(stateFromStores)) {
                                      if (!hideBadge) {
                                        if (cResult[50] !== stateFromStores) {
                                          const obj7 = { unpublishedAt: stateFromStores };
                                          const tmp75 = closure_15(tmp14(tmp2[38]), obj7);
                                          cResult[50] = stateFromStores;
                                          cResult[51] = tmp75;
                                          let tmp73 = tmp75;
                                        } else {
                                          tmp73 = cResult[51];
                                        }
                                        tmp65 = tmp73;
                                      }
                                    }
                                    tmpResult18 = tmp(tmp2[37]);
                                  }
                                  tmpResult17 = tmp(tmp2[23]);
                                  const tmpResult19 = tmp(tmp2[23]);
                                  tmp65 = null;
                                  if (tmp76) {
                                    const _Symbol5 = Symbol;
                                    if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                      const intl3 = tmp(tmp2[17]).intl;
                                      const stringResult2 = intl3.string(tmp(tmp2[17]).t["0TmQRG"]);
                                      cResult[52] = stringResult2;
                                      let tmp77 = stringResult2;
                                    } else {
                                      tmp77 = cResult[52];
                                    }
                                    if (cResult[53] !== tmp58) {
                                      const obj8 = { icon: tmp(tmp2[39]).OrbsIcon, label: tmp77, isDark: tmp58 };
                                      const tmp81 = closure_15(tmp(tmp2[35]).IconTextBadge, obj8);
                                      cResult[53] = tmp58;
                                      cResult[54] = tmp81;
                                    }
                                  }
                                  tmp76 = tmp(tmp2[23]).isOrbsExclusiveProduct(tmp21) && !hideBadge;
                                }
                                const tmpResult16 = tmp(tmp2[33]);
                                [tmp84, closure_8] = tmp17(obj3.useState(false), 2);
                                const tmp17Result8 = tmp17(obj3.useState(false), 2);
                                [r10395, closure_9] = tmp17(obj3.useState(null), 2);
                                const tmp17Result9 = tmp17(obj3.useState(null), 2);
                                [r10400, closure_10] = tmp17(obj3.useState(0), 2);
                                if (cResult[55] === tmp47) {
                                  if (cResult[56] === tmp52) {
                                    if (cResult[57] === trackPdpClick) {
                                      let tmp87 = cResult[58];
                                    }
                                    if (cResult[59] === tmp21) {
                                      if (cResult[60] === trackPdpClick) {
                                        let tmp90 = cResult[61];
                                      }
                                      if (cResult[62] === tmp7.actionButtons) {
                                        if (cResult[63] === tmp87) {
                                          if (cResult[64] === tmp90) {
                                            let tmp93 = cResult[65];
                                          }
                                          if (cResult[66] === tmp65) {
                                            if (cResult[67] === tmp7.badgeWrapper) {
                                              let tmp97 = cResult[68];
                                            }
                                            if (cResult[69] === tmp47) {
                                              if (cResult[70] === tmp21) {
                                                if (cResult[71] === trackPdpClick) {
                                                  let tmp100 = cResult[72];
                                                }
                                                if (cResult[73] === tmp21) {
                                                  if (cResult[74] === trackPdpClick) {
                                                    let tmp103 = cResult[75];
                                                  }
                                                  if (cResult[76] === tmp84) {
                                                    if (cResult[77] === product) {
                                                      if (cResult[78] === first) {
                                                        let tmp106 = cResult[79];
                                                      }
                                                      const _Symbol6 = Symbol;
                                                      if (cResult[80] === Symbol.for("react.memo_cache_sentinel")) {
                                                        const obj9 = { size: tmp14(tmp2[11]).space.PX_16 };
                                                        const tmp111 = closure_15(tmp(tmp2[44]).Spacer, obj9);
                                                        cResult[80] = tmp111;
                                                        let tmp109 = tmp111;
                                                      } else {
                                                        tmp109 = cResult[80];
                                                      }
                                                      if (cResult[81] === tmp7.container) {
                                                        if (cResult[82] === tmp93) {
                                                          if (cResult[83] === tmp97) {
                                                            if (cResult[84] === tmp100) {
                                                              if (cResult[85] === tmp103) {
                                                                if (cResult[88] !== tmp21) {
                                                                  class Ye {
                                                                    constructor() {
                                                                      tmp = closure_9(closure_3);
                                                                      tmp2 = closure_10((arg0) => arg0 + 1);
                                                                      tmp3 = closure_8(true);
                                                                      return;
                                                                    }
                                                                  }
                                                                  cResult[88] = tmp21;
                                                                  cResult[89] = Ye;
                                                                } else {
                                                                  class Ye {
                                                                    constructor() {
                                                                      tmp = closure_9(closure_3);
                                                                      tmp2 = closure_10((arg0) => arg0 + 1);
                                                                      tmp3 = closure_8(true);
                                                                      return;
                                                                    }
                                                                  }
                                                                }
                                                                if (cResult[90] === analyticsLocations2) {
                                                                  class Ye {
                                                                    constructor() {
                                                                      tmp = closure_9(closure_3);
                                                                      tmp2 = closure_10((arg0) => arg0 + 1);
                                                                      tmp3 = closure_8(true);
                                                                      return;
                                                                    }
                                                                  }
                                                                }
                                                                const obj10 = { product: tmp21, analyticsLocations: analyticsLocations2, onTrackPress: trackPdpClick, isBuying: tmp84, onStartPurchase: Ye, stageCollectibleChangeForEditProfile };
                                                                const tmp118 = closure_15(tmp14(tmp2[46]), obj10);
                                                                cResult[90] = analyticsLocations2;
                                                                cResult[91] = tmp84;
                                                                cResult[92] = tmp21;
                                                                cResult[93] = stageCollectibleChangeForEditProfile;
                                                                cResult[94] = Ye;
                                                                cResult[95] = trackPdpClick;
                                                                cResult[96] = tmp118;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj11 = { scrollsToTop: false, style: tmp7.container, ref, children: null };
                                                      const items5 = [tmp93, tmp97, tmp100, tmp103, tmp106, tmp109];
                                                      obj11.children = items5;
                                                      const tmp114 = closure_16(tmp(tmp2[45]).BottomSheetScrollView, obj11);
                                                      cResult[81] = tmp7.container;
                                                      cResult[82] = tmp93;
                                                      cResult[83] = tmp97;
                                                      cResult[84] = tmp100;
                                                      cResult[85] = tmp103;
                                                      cResult[86] = tmp106;
                                                      cResult[87] = tmp114;
                                                    }
                                                  }
                                                  const obj12 = { product, selectedVariantIndex: first, disabled: tmp84, onVariantSelect: tmp20 };
                                                  const tmp108 = closure_15(tmp14(tmp2[43]), obj12);
                                                  cResult[76] = tmp84;
                                                  cResult[77] = product;
                                                  cResult[78] = first;
                                                  cResult[79] = tmp108;
                                                  tmp106 = tmp108;
                                                }
                                                const obj13 = { product: tmp21, onTrackPress: trackPdpClick };
                                                const tmp105 = closure_15(tmp14(tmp2[42]), obj13);
                                                cResult[73] = tmp21;
                                                cResult[74] = trackPdpClick;
                                                cResult[75] = tmp105;
                                                tmp103 = tmp105;
                                              }
                                            }
                                            const obj14 = { product: tmp21, handlePreviewPress: tmp47, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp51 };
                                            const tmp102 = closure_15(tmp14(tmp2[41]), obj14);
                                            cResult[69] = tmp47;
                                            cResult[70] = tmp21;
                                            cResult[71] = trackPdpClick;
                                            cResult[72] = tmp102;
                                            tmp100 = tmp102;
                                          }
                                          let tmp98 = null != tmp65;
                                          if (tmp98) {
                                            class Ye {
                                              constructor() {
                                                tmp = closure_9(closure_3);
                                                tmp2 = closure_10((arg0) => arg0 + 1);
                                                tmp3 = closure_8(true);
                                                return;
                                              }
                                            }
                                            const obj15 = { style: tmp7.badgeWrapper, children: tmp65 };
                                            tmp98 = closure_15(closure_10, obj15);
                                          }
                                          cResult[66] = tmp65;
                                          cResult[67] = tmp7.badgeWrapper;
                                          cResult[68] = tmp98;
                                          tmp97 = tmp98;
                                        }
                                      }
                                      const obj17 = { style: tmp7.actionButtons, children: null };
                                      const items6 = [tmp87, tmp90];
                                      obj17.children = items6;
                                      const tmp96 = closure_16(closure_10, obj17);
                                      cResult[62] = tmp7.actionButtons;
                                      cResult[63] = tmp87;
                                      cResult[64] = tmp90;
                                      cResult[65] = tmp96;
                                      tmp93 = tmp96;
                                    }
                                    const obj18 = { selectedProduct: tmp21, size: "md", onTrackPress: trackPdpClick };
                                    const tmp92 = closure_15(tmp14(tmp2[40]), obj18);
                                    cResult[59] = tmp21;
                                    cResult[60] = trackPdpClick;
                                    cResult[61] = tmp92;
                                    tmp90 = tmp92;
                                  }
                                }
                                let tmp88 = tmp52;
                                if (tmp52) {
                                  class Ye {
                                    constructor() {
                                      tmp = closure_9(closure_3);
                                      tmp2 = closure_10((arg0) => arg0 + 1);
                                      tmp3 = closure_8(true);
                                      return;
                                    }
                                  }
                                  const obj19 = { handlePreviewPress: tmp47, onTrackPress: trackPdpClick };
                                  tmp88 = closure_15(closure_20, obj19);
                                }
                                cResult[55] = tmp47;
                                cResult[56] = tmp52;
                                cResult[57] = trackPdpClick;
                                cResult[58] = tmp88;
                                tmp87 = tmp88;
                                const tmp17Result10 = tmp17(obj3.useState(0), 2);
                              }
                              function me() {
                                AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Collectibles Shop Details Modal", location_stack, sku_id: product.skuId });
                              }
                              const items7 = [tmp4, product.skuId];
                              cResult[37] = product.skuId;
                              cResult[38] = tmp4;
                              cResult[39] = me;
                              cResult[40] = items7;
                              tmp56 = items7;
                              tmp55 = me;
                              const tmp17Result7 = tmp17(obj3.useState(tmp49), 2);
                            }
                            function ae() {
                              let tmp;
                              if (closure_6) {
                                const first = product.items[0];
                                let type;
                                if (first != null) {
                                  type = first.type;
                                }
                                tmp = type;
                              }
                              return tmp;
                            }
                            cResult[31] = tmp48;
                            cResult[32] = product.items;
                            cResult[33] = ae;
                            tmp49 = ae;
                          }
                        }
                      }
                    }
                  }
                  const obj20 = { product, variantIndex: first, analyticsLocations: analyticsLocations2, collectibleProfileOverrides, shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile };
                  cResult[24] = analyticsLocations2;
                  cResult[25] = collectibleProfileOverrides;
                  cResult[26] = product;
                  cResult[27] = stageCollectibleChangeForEditProfile;
                  cResult[28] = collectiblesAnalyticsContext;
                  cResult[29] = first;
                  cResult[30] = obj20;
                  tmp45 = obj20;
                }
              }
            }
          }
        }
        const obj21 = { type: tmp(tmp2[30]).ImpressionTypes.HALFSHEET, name: tmp(tmp2[30]).ImpressionNames.SHOP_PRODUCT_DETAIL, properties: null };
        const obj22 = { sku_id: tmp21.skuId, location_stack: analyticsLocations2, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp15 };
        obj21.properties = obj22;
        cResult[17] = analyticsLocations2;
        cResult[18] = tmp15;
        cResult[19] = tmp21.skuId;
        cResult[20] = cardId;
        cResult[21] = tilePosition;
        cResult[22] = sessionId;
        cResult[23] = obj21;
        tmp42 = obj21;
        const tmpResult13 = tmp(tmp2[29]);
      }
    }
    const obj23 = { skuId: tmp21.skuId, productSkuIds: tmp15, analyticsLocations: analyticsLocations2 };
    cResult[10] = analyticsLocations2;
    cResult[11] = tmp15;
    cResult[12] = tmp21.skuId;
    cResult[13] = obj23;
    tmp23 = obj23;
  }
  const tmp18 = _slicedToArray(noop.useState(num), 2);
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, first);
  cResult[7] = product;
  cResult[8] = first;
  cResult[9] = selectedProduct;
  tmp21 = selectedProduct;
  const tmpResult20 = require("CollectiblesProductUtils");
}) : ((product, arg1) => {
  product = product.product;
  require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations1 = product.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let ref;
  _slicedToArray = undefined;
  noop = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = closure_19();
  ref = noop.useRef(null);
  const items = [];
  const tmp7 = analyticsLocations1(ref[26]);
  items[HermesBuiltin.arraySpread(analyticsLocations1, 0)] = analyticsLocations1(ref[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp7(items).analyticsLocations;
  const items1 = [product];
  const tmp9 = c8(() => CollectiblesProductUtils.getProductSkuIds(product), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations1, 0);
  [tmp12, tmp13] = noop.useState(num);
  const tmp11 = _slicedToArray(noop.useState(num), 2);
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, tmp12);
  const obj2 = require("CollectiblesProductUtils");
  const trackPdpClick = require("useTrackPdpClick").useTrackPdpClick({ skuId: selectedProduct.skuId, productSkuIds: tmp9, analyticsLocations });
  const items2 = [trackPdpClick];
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    scrollToEnd() {
      const current = ref.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    notifyDismissed() {
      return trackPdpClick(constants.CLOSE_DETAIL);
    }
  }), items2);
  const obj3 = require("useTrackPdpClick");
  const obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp9, analyticsLocations };
  [tmp18, tmp19] = noop.useState(undefined);
  _slicedToArray = tmp19;
  const tmp17 = _slicedToArray(noop.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp20[0]) {
    tmp21(selectedProduct.skuId);
    tmp19(undefined);
  }
  tmp20 = _slicedToArray(noop.useState(selectedProduct.skuId), 2);
  const collectibleProfileOverrides = require("useCollectibleProfileOverrides").useCollectibleProfileOverrides(selectedProduct, tmp18);
  const tmpResult = require("useCollectibleProfileOverrides");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const obj5 = { type: null, name: null, properties: null };
  const tmpResult8 = require("CollectiblesAnalyticsContext");
  obj5.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj5.name = require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL;
  const obj6 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: null, position_in_section: null, shop_session_id: null, product_sku_ids: null };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj6.card_id = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj6.position_in_section = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj6.shop_session_id = sessionId;
  obj6.product_sku_ids = tmp9;
  obj5.properties = obj6;
  analyticsLocations1(ref[31])(obj5);
  const obj7 = { product, variantIndex: tmp12, analyticsLocations, collectibleProfileOverrides, shopAnalyticsContext: collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile };
  const tmp31Result = closure_21(obj7);
  const tmp33 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  noop = tmp33;
  const tmp6Result = analyticsLocations1(ref[31]);
  [type, c7] = noop.useState(() => {
    let tmp;
    if (closure_6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  });
  const tmp10Result = _slicedToArray(noop.useState(() => {
    let tmp;
    if (closure_6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  if (!tmp33) {
    type = selectedProduct.type;
  }
  let tmp36 = null != type;
  if (tmp36) {
    tmp36 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp37 = type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[19]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[19]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items3 = [analyticsLocations1, product.skuId];
  const effect = obj.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: product.skuId });
  }, items3);
  const hideBadge = product.hideBadge;
  const tmp35 = c7((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const tmpResult9 = require("native");
  const isThemeDarkResult = require("shared").isThemeDark(tmpResult9.useThemeContext().theme);
  const tmpResult10 = require("shared");
  const items4 = [CollectiblesCategoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
    const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp41 = selectedProduct;
  if (tmp33) {
    tmp41 = selectedProduct;
    if (null != tmp18) {
      const obj8 = { skuId: null, type: null, items: null };
      ({ skuId: obj13.skuId, type: obj13.type } = tmp18);
      const items5 = [tmp18];
      obj8.items = items5;
      tmp41 = obj8;
    }
  }
  let tmp42 = null;
  if (null == product.badgeOverride) {
    if (tmpResult12.isDynamicProduct(tmp41)) {
      if (!hideBadge) {
        const obj9 = { accessibilityLabel: null, children: null };
        const intl = tmp(tmp2[17]).intl;
        obj9.accessibilityLabel = intl.string(tmp(tmp2[17]).t["+drfVi"]);
        const obj10 = { icon: tmp(tmp2[36]).DiceIcon, label: null, isDark: null };
        const intl2 = tmp(tmp2[17]).intl;
        obj10.label = intl2.string(tmp(tmp2[17]).t["+drfVi"]);
        obj10.isDark = isThemeDarkResult;
        obj9.children = closure_15(tmp(tmp2[35]).IconTextBadge, obj10);
        tmp42 = closure_15(tmp(tmp2[34]).DynamicBadgeTooltip, obj9);
      }
    }
    if (null != stateFromStores) {
      if (tmpResult13.shouldShowLimitedTimeBadge(stateFromStores)) {
        if (!hideBadge) {
          const obj11 = { unpublishedAt: stateFromStores };
          tmp42 = closure_15(tmp6(tmp2[38]), obj11);
        }
      }
      tmpResult13 = tmp(tmp2[37]);
    }
    tmpResult12 = tmp(tmp2[23]);
    const tmpResult14 = tmp(tmp2[23]);
    tmp42 = null;
    if (tmp45) {
      const obj12 = { icon: tmp(tmp2[39]).OrbsIcon, label: null, isDark: null };
      const intl3 = tmp(tmp2[17]).intl;
      obj12.label = intl3.string(tmp(tmp2[17]).t["0TmQRG"]);
      obj12.isDark = isThemeDarkResult;
      tmp42 = closure_15(tmp(tmp2[35]).IconTextBadge, obj12);
    }
    tmp45 = tmp(tmp2[23]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
  }
  const tmpResult11 = require("initialize");
  [tmp48, c8] = noop.useState(false);
  const tmp10Result4 = _slicedToArray(noop.useState(false), 2);
  [tmp50, c9] = noop.useState(null);
  const tmp10Result6 = _slicedToArray(noop.useState(0), 2);
  closure_10 = tmp10Result6[1];
  const obj14 = { value: analyticsLocations, children: null };
  const obj15 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj16 = { style: tmp4.actionButtons, children: null };
  if (tmp36) {
    const obj17 = { handlePreviewPress: tmp31Result, onTrackPress: trackPdpClick };
    tmp36 = closure_15(closure_20, obj17);
  }
  const items6 = [tmp36, closure_15(analyticsLocations1(ref[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj16.children = items6;
  const items7 = [closure_16(closure_10, obj16), , , , , ];
  let tmp56Result = null != tmp42;
  if (tmp56Result) {
    const obj18 = { style: tmp4.badgeWrapper, children: tmp42 };
    tmp56Result = closure_15(tmp53, obj18);
  }
  items7[1] = tmp56Result;
  items7[2] = closure_15(analyticsLocations1(ref[41]), { product: selectedProduct, handlePreviewPress: tmp31Result, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp35 });
  items7[3] = closure_15(analyticsLocations1(ref[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items7[4] = closure_15(analyticsLocations1(ref[43]), { product, selectedVariantIndex: tmp12, disabled: tmp48, onVariantSelect: tmp13 });
  const tmp10Result5 = _slicedToArray(noop.useState(null), 2);
  items7[5] = closure_15(require("native").Spacer, { size: analyticsLocations1(ref[11]).space.PX_16 });
  obj15.children = items7;
  const items8 = [
    closure_16(require("BottomSheetModal").BottomSheetScrollView, obj15),
    closure_15(analyticsLocations1(ref[46]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp48,
      onStartPurchase() {
        _undefined4(selectedProduct);
        closure_10((arg0) => arg0 + 1);
        _undefined3(true);
      },
      stageCollectibleChangeForEditProfile
    }),

  ];
  let tmp56Result2 = null != tmp50;
  if (tmp56Result2) {
    const obj21 = {
      product: tmp50,
      attempt: tmp10Result6[0],
      analyticsLocations,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp56Result2 = closure_15(tmp6(tmp2[47]), obj21);
  }
  items8[2] = tmp56Result2;
  obj14.children = items8;
  return closure_16(require("useAnalyticsLocations").AnalyticsLocationProvider, obj14);
}));
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    };
    const fn2 = function n() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    };
    cResult[0] = fn;
    cResult[1] = fn2;
    tmp6 = fn;
    tmp7 = fn2;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === initialVariantIndex) {
      if (cResult[4] === product) {
        if (cResult[5] === stageCollectibleChangeForEditProfile) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
  }
  const ref1 = noop.useRef(null);
  const tmp9 = closure_1_15(Sheet_BottomSheet.BottomSheet, { scrollable: true, startExpanded: true, onExpand: tmp6, onDismiss: tmp7, ref, children: closure_1_15(closure_22, { ref: noop.useRef(null), product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile }) });
  cResult[2] = analyticsLocations;
  cResult[3] = initialVariantIndex;
  cResult[4] = product;
  cResult[5] = stageCollectibleChangeForEditProfile;
  cResult[6] = tmp9;
  tmp8 = tmp9;
  const obj2 = { scrollable: true, startExpanded: true, onExpand: tmp6, onDismiss: tmp7, ref, children: closure_1_15(closure_22, { ref: noop.useRef(null), product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile }) };
}) : ((arg0) => {
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref1 = noop.useRef(null);
  const ref = noop.useRef(null);
  return closure_1_15(Sheet_BottomSheet.BottomSheet, {
    scrollable: true,
    startExpanded: true,
    onExpand() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    },
    onDismiss() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    },
    ref: noop.useRef(null),
    children: closure_1_15(closure_22, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  });
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(20);
  let _Math = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { needsCategory: false, seedCategoryStore: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const collectiblesShopProduct = useCollectiblesShopProducts.useCollectiblesShopProduct(_Math, first);
  ({ product, state, retry } = collectiblesShopProduct);
  const tmpResult = useCollectiblesShopProducts;
  const getOrFetchPurchases = useFetchCollectiblesCategoriesAndPurchases.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  noop.useRef(null);
  noop.useRef(null);
  if (null != product) {
    if (tmpResult4.getIsVariantProduct(product)) {
      if (cResult[1] === product.variants) {
        if (cResult[2] === _Math) {
          _Math = Math;
          const bound = Math.max(0, cResult[3]);
        }
      }
      if (cResult[4] !== _Math) {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
        cResult[4] = _Math;
        cResult[5] = T;
      } else {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(T);
      cResult[1] = product.variants;
      cResult[2] = _Math;
      cResult[3] = findIndexResult;
    }
    tmpResult4 = CollectiblesProductUtils;
  }
  if ("ready" === state) {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
  }
  if ("error" === state) {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const stringResult = obj5.string(util.t.eAn6z2);
      cResult[11] = stringResult;
      let tmp18 = stringResult;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const stringResult1 = obj6.string(util.t["+hivLW"]);
      cResult[12] = stringResult1;
      const tmp20 = stringResult1;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
    if (cResult[13] !== retry) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const obj3 = { Illustration: generated_NoResults.NoResults, body: tmp18, children: null };
      const obj4 = { text: tmp20, onPress: retry };
      tmp18 = closure_1_15(components_Button_Button.Button, obj4);
      obj3.children = tmp18;
      const tmp23 = closure_1_15(native2.EmptyState, obj3);
      cResult[13] = retry;
      cResult[14] = tmp23;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
  } else {
    class T {
      constructor(arg0) {
        return skuId.skuId === skuId;
      }
    }
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
      const tmp17 = closure_1_15(ProductDetailsActionSheetSkeletonDefault, {});
      cResult[15] = tmp17;
    } else {
      class T {
        constructor(arg0) {
          return skuId.skuId === skuId;
        }
      }
    }
  }
  const tmpResult3 = useFetchCollectiblesCategoriesAndPurchases;
}) : ((skuId) => {
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  const collectiblesShopProduct = skuId(8569).useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj = skuId(8569);
  const getOrFetchPurchases = skuId(10478).useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const obj2 = skuId(10478);
  const ref1 = noop.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        const obj3 = { ref: ref1, product, initialVariantIndex: tmp7, analyticsLocations, stageCollectibleChangeForEditProfile };
        const obj4 = {
          scrollable: true,
          startExpanded: true,
          onExpand() {
                  const current = ref1.current;
                  let scrollToEndResult;
                  if (current != null) {
                    scrollToEndResult = current.scrollToEnd();
                  }
                  return scrollToEndResult;
                },
          onDismiss() {
                  const current = ref1.current;
                  let notifyDismissedResult;
                  if (current != null) {
                    notifyDismissedResult = current.notifyDismissed();
                  }
                  return notifyDismissedResult;
                },
          ref,
          children: closure_15(closure_22, obj3)
        };
        return closure_15(tmp(6652).BottomSheet, obj4);
      }
    }
  }
  if ("error" === state) {
    const obj5 = { Illustration: tmp(7915).NoResults, body: null, children: null };
    const intl = tmp(1126).intl;
    obj5.body = intl.string(tmp(1126).t.eAn6z2);
    const obj6 = { text: null, onPress: null };
    const intl2 = tmp(1126).intl;
    obj6.text = intl2.string(tmp(1126).t["+hivLW"]);
    obj6.onPress = retry;
    obj5.children = closure_15(tmp(5601).Button, obj6);
    closure_15(tmp(1188).EmptyState, obj5);
  } else {
    closure_15(initialVariantIndex(13021), {});
  }
  ref = noop.useRef(null);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(7);
  if (obj2.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in skuId) {
      skuId = skuId.skuId;
    } else {
      skuId = skuId.product.skuId;
    }
    if (cResult[0] === skuId.analyticsLocations) {
      if (cResult[1] === skuId.initialVariantIndex) {
        if (cResult[2] === skuId.stageCollectibleChangeForEditProfile) {
          if (cResult[3] === skuId) {
            let tmp13 = cResult[4];
          }
          return tmp13;
        }
      }
    }
    const obj3 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj4.initialVariantIndex, analyticsLocations: obj4.analyticsLocations, stageCollectibleChangeForEditProfile: obj4.stageCollectibleChangeForEditProfile } = skuId);
    const tmp16 = closure_1_15(closure_24, obj3);
    cResult[0] = skuId.analyticsLocations;
    cResult[1] = skuId.initialVariantIndex;
    cResult[2] = skuId.stageCollectibleChangeForEditProfile;
    cResult[3] = skuId;
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else if ("product" in skuId) {
    if (cResult[5] !== skuId) {
      const obj6 = {};
      const merged = Object.assign(skuId);
      const tmp11 = closure_1_15(closure_23, obj6);
      cResult[5] = skuId;
      cResult[6] = tmp11;
    }
  } else {
    logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
    return null;
  }
  obj2 = ShopStandalonePdpMobileExperiment;
}) : ((arg0) => {
  stageCollectibleChangeForEditProfile = arg0;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in stageCollectibleChangeForEditProfile) {
      let skuId = stageCollectibleChangeForEditProfile.skuId;
    } else {
      skuId = stageCollectibleChangeForEditProfile.product.skuId;
    }
    const obj2 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj3.initialVariantIndex, analyticsLocations: obj3.analyticsLocations, stageCollectibleChangeForEditProfile } = stageCollectibleChangeForEditProfile);
    obj2.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
    closure_1_15(closure_24, obj2);
  } else {
    if ("product" in stageCollectibleChangeForEditProfile) {
      const obj5 = {};
      const merged = Object.assign(stageCollectibleChangeForEditProfile);
      let tmp3 = closure_1_15(closure_23, obj5);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
  obj = ShopStandalonePdpMobileExperiment;
});
ReactCompilerGating = fn(558);
let obj8 = { borderColor: nativeDefault.colors.BORDER_STRONG };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shopAnalyticsContext) => {
  const cResult = c.c(8);
  if (cResult[0] !== shopAnalyticsContext) {
    shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
    const tmp8 = _objectWithoutProperties(shopAnalyticsContext, closure_3);
    cResult[0] = shopAnalyticsContext;
    cResult[1] = tmp8;
    cResult[2] = shopAnalyticsContext;
    let tmp5 = shopAnalyticsContext;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (undefined === tmp5) {
    tmp5 = closure_17;
  }
  if (cResult[3] !== tmp4) {
    const obj2 = {};
    const merged = Object.assign(tmp4);
    const tmp15 = closure_1_15(closure_25, obj2);
    cResult[3] = tmp4;
    cResult[4] = tmp15;
    let tmp9 = tmp15;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    if (cResult[6] === tmp9) {
      let tmp16 = cResult[7];
    }
    return tmp16;
  }
  const tmp17 = closure_1_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp5, children: tmp9 });
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((shopAnalyticsContext) => {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_17;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: null };
  const merged1 = Object.assign(merged);
  obj.children = closure_1_15(closure_25, {});
  return closure_1_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
});