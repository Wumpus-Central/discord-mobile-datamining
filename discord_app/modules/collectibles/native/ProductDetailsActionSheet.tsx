// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import Constants2 from "../../../../discord_common/js/shared/Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import native2 from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import ShopStandalonePdpMobileExperiment from "../experiments/ShopStandalonePdpMobileExperiment.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import useCollectiblesShopProducts from "../hooks/useCollectiblesShopProducts.tsx";
import useFetchCollectiblesCategoriesAndPurchases from "../hooks/useFetchCollectiblesCategoriesAndPurchases.tsx";
import ProductDetailsActionSheetSkeletonDefault from "ProductDetailsActionSheetSkeleton.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import "react";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import native_mod from "../../../../discord_common/js/packages/design/native.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, handlePreviewPress, importDefault, skuId;

let c10;
let c9;
let closure_15;
let closure_16;
let metroImportAll;
let metroImportDefault;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let rect1;
let size;
let closure_3 = ["shopAnalyticsContext"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useCallback: metroImportDefault, useMemo: metroImportAll } = react);
({ Pressable: c9, View: c10 } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = {};
let tmp6 = new LoggerDefault("ProductDetailsActionSheet");
const logger = tmp6;
let createStyles = createStyles_mod;
let obj = {
  container: { position: "relative", flex: 1 },
  actionButtons: rect,
  previewProfileButton: size,
  previewProfileButtonLight: obj2,
  previewProfileButtonLightPressed: obj3,
  previewProfileButtonDark: obj4,
  previewProfileButtonDarkPressed: obj5,
  previewProfileButtonMidnight: obj6,
  badgeWrapper: rect1,
};
rect = {
  position: "absolute",
  top: 0,
  right: nativeDefault.space.PX_16,
  zIndex: 2,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
size = {
  width: ButtonConstants.MEDIUM_BUTTON_HEIGHT,
  height: ButtonConstants.MEDIUM_BUTTON_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
};
obj2 = { backgroundColor: native.setColorOpacity("white", 0.72) };
native = native_mod;
obj3 = { backgroundColor: native.setColorOpacity("white", 0.62) };
native = native_mod;
obj4 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj6 = { borderColor: nativeDefault.colors.BORDER_STRONG };
rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handlePreviewPress) => {
      let closure_2;
      const obj = handlePreviewPress(576);
      const cResult = obj.c(14);
      handlePreviewPress = handlePreviewPress.handlePreviewPress;
      const onTrackPress = handlePreviewPress.onTrackPress;
      const tmp4 = closure_19();
      dependencyMap = tmp4;
      const obj2 = handlePreviewPress(4589);
      const theme = obj2.useThemeContext().theme;
      const obj3 = handlePreviewPress(4729);
      const isThemeLightResult = obj3.isThemeLight(theme);
      closure_3 = tmp6;
      const tmp7 = isThemeLightResult ? tmp4.previewProfileButtonLight : tmp4.previewProfileButtonDark;
      let closure_4 = tmp7;
      const tmp8 = isThemeLightResult ? tmp4.previewProfileButtonLightPressed : tmp4.previewProfileButtonDarkPressed;
      let closure_5 = tmp8;
      if (cResult[0] === handlePreviewPress) {
        let tmp9;
        if (cResult[1] === onTrackPress) {
          tmp9 = cResult[2];
        }
        if ((cResult[3] === theme) === ThemeTypes.ONYX) {
          if (cResult[4] === tmp8) {
            if (cResult[5] === tmp4.previewProfileButton) {
              if (cResult[6] === tmp4.previewProfileButtonMidnight) {
                let tmp10;
                let tmp13;
                let tmp12;
                if (cResult[7] === tmp7) {
                  tmp10 = cResult[8];
                }
                const _Symbol = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const stringResult = intl.string(handlePreviewPress(1126).t["3Qcx6K"]);
                  const obj4 = { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT };
                  const EyeIcon = tmp(6458).EyeIcon;
                  const tmp17 = closure_15(EyeIcon, obj4);
                  cResult[9] = stringResult;
                  cResult[10] = tmp17;
                  tmp13 = tmp17;
                  tmp12 = stringResult;
                } else {
                  tmp12 = cResult[9];
                  tmp13 = cResult[10];
                }
                if (cResult[11] === tmp9) {
                  let tmp18;
                  if (cResult[12] === tmp10) {
                    tmp18 = cResult[13];
                  }
                  return tmp18;
                }
                const obj5 = {
                  style: tmp10,
                  onPress: tmp9,
                  accessibilityRole: "button",
                  accessibilityLabel: tmp12,
                  children: tmp13,
                };
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
          const items = [
            closure_2.previewProfileButton,
            closure_4,
            closure_3 && closure_2.previewProfileButtonMidnight,
          ];
          if (pressed) {
            pressed = closure_5;
          }
          items[3] = pressed;
          return items;
        };
        cResult[3] = theme === ThemeTypes.ONYX;
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
    }
  : (handlePreviewPress) => {
      let EyeIcon;
      let closure_2;
      let intl;
      let obj4;
      handlePreviewPress = handlePreviewPress.handlePreviewPress;
      const onTrackPress = handlePreviewPress.onTrackPress;
      const tmp = closure_19();
      dependencyMap = tmp;
      const obj = handlePreviewPress(4589);
      const theme = obj.useThemeContext().theme;
      const obj2 = handlePreviewPress(4729);
      const isThemeLightResult = obj2.isThemeLight(theme);
      closure_3 = theme === ThemeTypes.ONYX;
      let closure_4 = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
      let closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
      let items = [handlePreviewPress, onTrackPress];
      const obj3 = {
        style(pressed) {
          pressed = pressed.pressed;
          const items = [
            closure_2.previewProfileButton,
            closure_4,
            closure_3 && closure_2.previewProfileButtonMidnight,
          ];
          if (pressed) {
            pressed = closure_5;
          }
          items[3] = pressed;
          return items;
        },
        onPress: react.useCallback(() => {
          onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
          handlePreviewPress();
        }, items),
        accessibilityRole: "button",
        accessibilityLabel: intl.string(handlePreviewPress(1126).t["3Qcx6K"]),
        children: closure_15(EyeIcon, obj4),
      };
      intl = tmp2(1126).intl;
      obj4 = { size: "md", color: onTrackPress(587).colors.INTERACTIVE_ICON_DEFAULT };
      EyeIcon = tmp2(6458).EyeIcon;
      return closure_15(closure_9, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      let analyticsLocations;
      let obj = require("react");
      const cResult = obj.c(8);
      product = product.product;
      require = product;
      const variantIndex = product.variantIndex;
      analyticsLocations = product.analyticsLocations;
      const shopAnalyticsContext = product.shopAnalyticsContext;
      const collectibleProfileOverrides = product.collectibleProfileOverrides;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      let obj2 = require("useCurrentUser");
      const currentUser = obj2.useCurrentUser();
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === collectibleProfileOverrides) {
          if (cResult[2] === product) {
            if (cResult[3] === shopAnalyticsContext) {
              if (cResult[4] === stageCollectibleChangeForEditProfile) {
                if (cResult[5] === currentUser.id) {
                  let tmp3;
                  if (cResult[6] === variantIndex) {
                    tmp3 = cResult[7];
                  }
                  return tmp3;
                }
              }
            }
          }
        }
      }
      const fn = function o() {
        let initialVariantIndex;
        let obj = {
          userId: currentUser.id,
          isPreviewingChanges: true,
          collectibleProfileOverrides,
          sourceAnalyticsLocations: analyticsLocations,
          onClose() {
            let obj2;
            if (null == stageCollectibleChangeForEditProfile) {
              const obj4 = { product: require, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
              const obj3 = require("openProductDetailsActionSheet");
              const result = obj3.openProductDetailsActionSheet(obj4);
            } else {
              const obj = {
                skuId: obj2.getSelectedProduct(require, initialVariantIndex).skuId,
                initialVariantIndex,
                analyticsLocations,
                shopAnalyticsContext,
                stageCollectibleChangeForEditProfile: tmp,
              };
              const openProductDetailsActionSheetForSku =
                require("openProductDetailsActionSheet").openProductDetailsActionSheetForSku;
              require("openProductDetailsActionSheet");
              obj2 = require("CollectiblesProductUtils");
              const result1 = openProductDetailsActionSheetForSku(obj);
            }
          },
        };
        const tmp = showUserProfileActionSheetDefault(obj);
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
    }
  : (product) => {
      product = product.product;
      require = product;
      const variantIndex = product.variantIndex;
      const analyticsLocations = product.analyticsLocations;
      const shopAnalyticsContext = product.shopAnalyticsContext;
      const collectibleProfileOverrides = product.collectibleProfileOverrides;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      let obj = require("useCurrentUser");
      const currentUser = obj.useCurrentUser();
      const items = [
        product,
        variantIndex,
        collectibleProfileOverrides,
        currentUser.id,
        analyticsLocations,
        shopAnalyticsContext,
        stageCollectibleChangeForEditProfile,
      ];
      return currentUser.useCallback(() => {
        let initialVariantIndex;
        let obj = {
          userId: currentUser.id,
          isPreviewingChanges: true,
          collectibleProfileOverrides,
          sourceAnalyticsLocations: analyticsLocations,
          onClose() {
            let obj2;
            if (null == stageCollectibleChangeForEditProfile) {
              const obj4 = { product: require, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
              const obj3 = require("openProductDetailsActionSheet");
              const result = obj3.openProductDetailsActionSheet(obj4);
            } else {
              const obj = {
                skuId: obj2.getSelectedProduct(require, initialVariantIndex).skuId,
                initialVariantIndex,
                analyticsLocations,
                shopAnalyticsContext,
                stageCollectibleChangeForEditProfile: tmp,
              };
              const openProductDetailsActionSheetForSku =
                require("openProductDetailsActionSheet").openProductDetailsActionSheetForSku;
              require("openProductDetailsActionSheet");
              obj2 = require("CollectiblesProductUtils");
              const result1 = openProductDetailsActionSheetForSku(obj);
            }
          },
        };
        const tmp = showUserProfileActionSheetDefault(obj);
      }, items);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (product, arg1) => {
        let IconTextBadge;
        let analyticsLocations;
        let closure_10;
        let closure_5;
        let closure_6;
        let closure_7;
        let closure_8;
        let closure_9;
        let initialVariantIndex;
        let items4;
        let items5;
        let items6;
        let location_stack;
        let obj22;
        let obj6;
        let ref;
        let stageCollectibleChangeForEditProfile;
        let tmp10;
        let tmp16;
        let tmp31;
        let tmp32;
        let tmp5;
        let tmp6;
        let tmp84;
        let type;
        let obj = require("react");
        const cResult = obj.c(107);
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
          tmp5 = items;
        } else {
          tmp5 = cResult[1];
        }
        importDefault = tmp5;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { location: "ProductDetailsActionSheetInner" };
          cResult[2] = obj2;
          tmp6 = obj2;
        } else {
          tmp6 = cResult[2];
        }
        const OTPACOMOrderExperiment = tmp2(tmp3[24]).OTPACOMOrderExperiment;
        const config = OTPACOMOrderExperiment.useConfig(tmp6);
        const tmp8 = closure_19();
        ref = react.useRef(null);
        if (cResult[3] !== tmp5) {
          const items1 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp5, 0);
          items1[arraySpreadResult] = require("AnalyticsLocation").COLLECTIBLES_SHOP_PROFILE_PREVIEW;
          cResult[3] = tmp5;
          cResult[4] = items1;
          tmp10 = items1;
        } else {
          tmp10 = cResult[4];
        }
        const analyticsLocations2 = require("useAnalyticsLocations")(tmp10).analyticsLocations;
        if (cResult[5] !== product) {
          const tmp2Result = require("CollectiblesProductUtils");
          const productSkuIds = tmp2Result.getProductSkuIds(product);
          cResult[5] = product;
          cResult[6] = productSkuIds;
          tmp16 = productSkuIds;
        } else {
          tmp16 = cResult[6];
        }
        let first = _slicedToArray(react.useState(num), 2)[0];
        _slicedToArray(react.useState(num), 2);
        if (cResult[7] === product) {
          let tmp22;
          if (cResult[8] === first) {
            tmp22 = cResult[9];
          }
          closure_3 = tmp22;
          if (cResult[10] === analyticsLocations2) {
            if (cResult[11] === tmp16) {
              let tmp24;
              let tmp27;
              let tmp26;
              if (cResult[12] === tmp22.skuId) {
                tmp24 = cResult[13];
              }
              const tmp2Result11 = require("useTrackPdpClick");
              const trackPdpClick = tmp2Result11.useTrackPdpClick(tmp24);
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
                    },
                  };
                };
                const items2 = [trackPdpClick];
                cResult[14] = trackPdpClick;
                cResult[15] = items2;
                cResult[16] = fn;
                tmp27 = fn;
                tmp26 = items2;
              } else {
                tmp26 = cResult[15];
                tmp27 = cResult[16];
              }
              const imperativeHandle = obj3.useImperativeHandle(arg1, tmp27, tmp26);
              [tmp31, tmp32] = react.useState(undefined);
              _slicedToArray(react.useState(undefined), 2);
              _slicedToArray = tmp32;
              const tmp18Result6 = _slicedToArray(react.useState(tmp22.skuId), 2);
              if (tmp22.skuId !== tmp18Result6[0]) {
                tmp34(tmp22.skuId);
                tmp32(undefined);
              }
              const tmp2Result12 = require("useCollectibleProfileOverrides");
              const collectibleProfileOverrides = tmp2Result12.useCollectibleProfileOverrides(tmp22, tmp31);
              const tmp2Result13 = require("CollectiblesAnalyticsContext");
              const collectiblesAnalyticsContext = tmp2Result13.useCollectiblesAnalyticsContext();
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
                if (cResult[18] === tmp16) {
                  if (cResult[19] === tmp22.skuId) {
                    if (cResult[20] === cardId) {
                      if (cResult[21] === tilePosition) {
                        let tmp43;
                        if (cResult[22] === sessionId) {
                          tmp43 = cResult[23];
                        }
                        require("useTrackImpression")(tmp43);
                        if (cResult[24] === analyticsLocations2) {
                          if (cResult[25] === collectibleProfileOverrides) {
                            if (cResult[26] === product) {
                              if (cResult[27] === stageCollectibleChangeForEditProfile) {
                                if (cResult[28] === collectiblesAnalyticsContext) {
                                  let tmp46;
                                  if (cResult[29] === first) {
                                    tmp46 = cResult[30];
                                  }
                                  const tmp48 = closure_21(tmp46);
                                  const tmp49 =
                                    product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
                                  react = tmp49;
                                  if (cResult[31] === tmp49) {
                                    let tmp50;
                                    let tmp52;
                                    let tmp53;
                                    if (cResult[32] === product.items) {
                                      tmp50 = cResult[33];
                                    }
                                    [type, closure_7] = react.useState(tmp50);
                                    const _Symbol = Symbol;
                                    _slicedToArray(react.useState(tmp50), 2);
                                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                      function ue(type) {
                                        tmp32(type);
                                        closure_7(type.type);
                                      }
                                      cResult[34] = ue;
                                      tmp52 = ue;
                                    } else {
                                      tmp52 = cResult[34];
                                    }
                                    if (!tmp49) {
                                      type = tmp22.type;
                                    }
                                    if (cResult[35] !== type) {
                                      let tmp54 = null != type;
                                      if (tmp54) {
                                        tmp54 =
                                          type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_EFFECT ||
                                          type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_FRAME ||
                                          type === tmp2(tmp3[19]).CollectiblesItemType.AVATAR_DECORATION;
                                        type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT ||
                                          type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME ||
                                          type ===
                                            require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
                                      }
                                      cResult[35] = type;
                                      cResult[36] = tmp54;
                                      tmp53 = tmp54;
                                    } else {
                                      tmp53 = cResult[36];
                                    }
                                    if (cResult[37] === product.skuId) {
                                      let tmp56;
                                      let tmp57;
                                      let tmp59;
                                      let tmp61;
                                      let tmp63;
                                      if (cResult[38] === tmp5) {
                                        tmp56 = cResult[39];
                                        tmp57 = cResult[40];
                                      }
                                      const effect = obj3.useEffect(tmp56, tmp57);
                                      const hideBadge = product.hideBadge;
                                      const tmp2Result14 = require("native");
                                      const theme = tmp2Result14.useThemeContext().theme;
                                      if (cResult[41] !== theme) {
                                        const tmp2Result15 = require("shared");
                                        const isThemeDarkResult = tmp2Result15.isThemeDark(theme);
                                        cResult[41] = theme;
                                        cResult[42] = isThemeDarkResult;
                                        tmp59 = isThemeDarkResult;
                                      } else {
                                        tmp59 = cResult[42];
                                      }
                                      const _Symbol2 = Symbol;
                                      if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                                        const items3 = [CollectiblesCategoryStore];
                                        cResult[43] = items3;
                                        tmp61 = items3;
                                      } else {
                                        tmp61 = cResult[43];
                                      }
                                      if (cResult[44] !== product.categorySkuId) {
                                        function ke() {
                                          const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
                                          let unpublishedAt;
                                          if (category != null) {
                                            unpublishedAt = category.unpublishedAt;
                                          }
                                          return unpublishedAt;
                                        }
                                        cResult[44] = product.categorySkuId;
                                        cResult[45] = ke;
                                        tmp63 = ke;
                                      } else {
                                        tmp63 = cResult[45];
                                      }
                                      const tmp2Result16 = require("get initialized");
                                      const stateFromStores = tmp2Result16.useStateFromStores(tmp61, tmp63);
                                      let tmp65 = tmp22;
                                      if (tmp49) {
                                        tmp65 = tmp22;
                                        if (null != tmp31) {
                                          const obj4 = { skuId: null, type: null, items: items4 };
                                          ({ skuId: obj16.skuId, type: obj16.type } = tmp31);
                                          items4 = [tmp31];
                                          tmp65 = obj4;
                                        }
                                      }
                                      let tmp66 = null;
                                      if (null == product.badgeOverride) {
                                        const tmp2Result17 = require("CollectiblesProductUtils");
                                        if (tmp2Result17.isDynamicProduct(tmp65)) {
                                          if (!hideBadge) {
                                            let tmp67;
                                            let tmp69;
                                            let tmp71;
                                            const _Symbol3 = Symbol;
                                            if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl = tmp2(tmp3[17]).intl;
                                              const stringResult = intl.string(require("intl").t["+drfVi"]);
                                              cResult[46] = stringResult;
                                              tmp67 = stringResult;
                                            } else {
                                              tmp67 = cResult[46];
                                            }
                                            const _Symbol4 = Symbol;
                                            if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl2 = tmp2(tmp3[17]).intl;
                                              const stringResult1 = intl2.string(require("intl").t["+drfVi"]);
                                              cResult[47] = stringResult1;
                                              tmp69 = stringResult1;
                                            } else {
                                              tmp69 = cResult[47];
                                            }
                                            if (cResult[48] !== tmp59) {
                                              const obj5 = {
                                                accessibilityLabel: tmp67,
                                                children: closure_15(IconTextBadge, obj6),
                                              };
                                              const DynamicBadgeTooltip = tmp2(tmp3[34]).DynamicBadgeTooltip;
                                              obj6 = {
                                                icon: require("DiceIcon").DiceIcon,
                                                label: tmp69,
                                                isDark: tmp59,
                                              };
                                              IconTextBadge = tmp2(tmp3[35]).IconTextBadge;
                                              const tmp73 = closure_15(DynamicBadgeTooltip, obj5);
                                              cResult[48] = tmp59;
                                              cResult[49] = tmp73;
                                              tmp71 = tmp73;
                                            } else {
                                              tmp71 = cResult[49];
                                            }
                                            tmp66 = tmp71;
                                          }
                                        }
                                        if (null != stateFromStores) {
                                          const tmp2Result18 = require("CollectiblesUtils");
                                          if (tmp2Result18.shouldShowLimitedTimeBadge(stateFromStores)) {
                                            if (!hideBadge) {
                                              let tmp74;
                                              if (cResult[50] !== stateFromStores) {
                                                const obj7 = { unpublishedAt: stateFromStores };
                                                const tmp76 = closure_15(require("LimitedTimeBadge"), obj7);
                                                cResult[50] = stateFromStores;
                                                cResult[51] = tmp76;
                                                tmp74 = tmp76;
                                              } else {
                                                tmp74 = cResult[51];
                                              }
                                              tmp66 = tmp74;
                                            }
                                          }
                                        }
                                        tmp66 = null;
                                        const tmp2Result19 = require("CollectiblesProductUtils");
                                        const tmp77 = tmp2Result19.isOrbsExclusiveProduct(tmp22) && !hideBadge;
                                        if (tmp77) {
                                          let tmp78;
                                          let tmp80;
                                          const _Symbol5 = Symbol;
                                          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                            const intl3 = tmp2(tmp3[17]).intl;
                                            const stringResult2 = intl3.string(require("intl").t["0TmQRG"]);
                                            cResult[52] = stringResult2;
                                            tmp78 = stringResult2;
                                          } else {
                                            tmp78 = cResult[52];
                                          }
                                          if (cResult[53] !== tmp59) {
                                            const obj8 = {
                                              icon: require("OrbsIcon").OrbsIcon,
                                              label: tmp78,
                                              isDark: tmp59,
                                            };
                                            const IconTextBadge2 = tmp2(tmp3[35]).IconTextBadge;
                                            const tmp82 = closure_15(IconTextBadge2, obj8);
                                            cResult[53] = tmp59;
                                            cResult[54] = tmp82;
                                            tmp80 = tmp82;
                                          } else {
                                            tmp80 = cResult[54];
                                          }
                                          tmp66 = tmp80;
                                        }
                                      }
                                      [tmp84, closure_8] = react.useState(false);
                                      _slicedToArray(react.useState(false), 2);
                                      [r10394, closure_9] = react.useState(null);
                                      _slicedToArray(react.useState(null), 2);
                                      [r10399, closure_10] = react.useState(0);
                                      _slicedToArray(react.useState(0), 2);
                                      if (cResult[55] === tmp48) {
                                        if (cResult[56] === tmp53) {
                                          let tmp87;
                                          if (cResult[57] === trackPdpClick) {
                                            tmp87 = cResult[58];
                                          }
                                          if (cResult[59] === tmp22) {
                                            let tmp90;
                                            if (cResult[60] === trackPdpClick) {
                                              tmp90 = cResult[61];
                                            }
                                            if (cResult[62] === tmp8.actionButtons) {
                                              if (cResult[63] === tmp87) {
                                                let tmp93;
                                                if (cResult[64] === tmp90) {
                                                  tmp93 = cResult[65];
                                                }
                                                if (cResult[66] === tmp66) {
                                                  let tmp97;
                                                  if (cResult[67] === tmp8.badgeWrapper) {
                                                    tmp97 = cResult[68];
                                                  }
                                                  if (cResult[69] === tmp48) {
                                                    if (cResult[70] === tmp22) {
                                                      let tmp100;
                                                      if (cResult[71] === trackPdpClick) {
                                                        tmp100 = cResult[72];
                                                      }
                                                      if (cResult[73] === tmp22) {
                                                        let tmp103;
                                                        if (cResult[74] === trackPdpClick) {
                                                          tmp103 = cResult[75];
                                                        }
                                                        if (cResult[76] === tmp84) {
                                                          if (cResult[77] === product) {
                                                            let tmp106;
                                                            let tmp109;
                                                            if (cResult[78] === first) {
                                                              tmp106 = cResult[79];
                                                            }
                                                            const _Symbol6 = Symbol;
                                                            if (
                                                              cResult[80] === Symbol.for("react.memo_cache_sentinel")
                                                            ) {
                                                              const obj9 = { size: require("native").space.PX_16 };
                                                              const Spacer = tmp2(tmp3[44]).Spacer;
                                                              const tmp111 = closure_15(Spacer, obj9);
                                                              cResult[80] = tmp111;
                                                              tmp109 = tmp111;
                                                            } else {
                                                              tmp109 = cResult[80];
                                                            }
                                                            if (cResult[81] === tmp8.container) {
                                                              if (cResult[82] === tmp93) {
                                                                if (cResult[83] === tmp97) {
                                                                  if (cResult[84] === tmp100) {
                                                                    if (cResult[85] === tmp103) {
                                                                      if (cResult[88] !== tmp22) {
                                                                        class Ye {
                                                                          constructor() {
                                                                            closure_9(closure_3);
                                                                            closure_10((arg0) => arg0 + 1);
                                                                            closure_8(true);
                                                                          }
                                                                        }
                                                                        cResult[88] = tmp22;
                                                                        cResult[89] = Ye;
                                                                      } else {
                                                                        class Ye {
                                                                          constructor() {
                                                                            closure_9(closure_3);
                                                                            closure_10((arg0) => arg0 + 1);
                                                                            closure_8(true);
                                                                          }
                                                                        }
                                                                      }
                                                                      if (cResult[90] === analyticsLocations2) {
                                                                        class Ye {
                                                                          constructor() {
                                                                            closure_9(closure_3);
                                                                            closure_10((arg0) => arg0 + 1);
                                                                            closure_8(true);
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj10 = {
                                                                        product: tmp22,
                                                                        analyticsLocations: analyticsLocations2,
                                                                        onTrackPress: trackPdpClick,
                                                                        isBuying: tmp84,
                                                                        onStartPurchase: Ye,
                                                                        stageCollectibleChangeForEditProfile,
                                                                      };
                                                                      cResult[90] = analyticsLocations2;
                                                                      cResult[91] = tmp84;
                                                                      cResult[92] = tmp22;
                                                                      cResult[93] =
                                                                        stageCollectibleChangeForEditProfile;
                                                                      cResult[94] = Ye;
                                                                      cResult[95] = trackPdpClick;
                                                                      cResult[96] = closure_15(
                                                                        require("ProductDetailsActionSheetPurchaseSection"),
                                                                        obj10,
                                                                      );
                                                                      const tmp118 = closure_15(
                                                                        require("ProductDetailsActionSheetPurchaseSection"),
                                                                        obj10,
                                                                      );
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj11 = {
                                                              scrollsToTop: false,
                                                              style: tmp8.container,
                                                              ref,
                                                              children: items5,
                                                            };
                                                            items5 = [tmp93, tmp97, tmp100, tmp103, tmp106, tmp109];
                                                            cResult[81] = tmp8.container;
                                                            cResult[82] = tmp93;
                                                            cResult[83] = tmp97;
                                                            cResult[84] = tmp100;
                                                            cResult[85] = tmp103;
                                                            cResult[86] = tmp106;
                                                            cResult[87] = closure_16(
                                                              require("BottomSheetModal").BottomSheetScrollView,
                                                              obj11,
                                                            );
                                                            const tmp114 = closure_16(
                                                              require("BottomSheetModal").BottomSheetScrollView,
                                                              obj11,
                                                            );
                                                          }
                                                        }
                                                        const obj12 = {
                                                          product,
                                                          selectedVariantIndex: first,
                                                          disabled: tmp84,
                                                          onVariantSelect: tmp21,
                                                        };
                                                        const tmp108 = closure_15(
                                                          require("ProductDetailsActionSheetVariants"),
                                                          obj12,
                                                        );
                                                        cResult[76] = tmp84;
                                                        cResult[77] = product;
                                                        cResult[78] = first;
                                                        cResult[79] = tmp108;
                                                        tmp106 = tmp108;
                                                      }
                                                      const obj13 = { product: tmp22, onTrackPress: trackPdpClick };
                                                      const tmp105 = closure_15(
                                                        require("ProductDetailsActionSheetInfo"),
                                                        obj13,
                                                      );
                                                      cResult[73] = tmp22;
                                                      cResult[74] = trackPdpClick;
                                                      cResult[75] = tmp105;
                                                      tmp103 = tmp105;
                                                    }
                                                  }
                                                  const obj14 = {
                                                    product: tmp22,
                                                    handlePreviewPress: tmp48,
                                                    onTrackPress: trackPdpClick,
                                                    onBundleActiveItemChange: tmp52,
                                                  };
                                                  const tmp102 = closure_15(
                                                    require("ProductDetailsActionSheetPreview"),
                                                    obj14,
                                                  );
                                                  cResult[69] = tmp48;
                                                  cResult[70] = tmp22;
                                                  cResult[71] = trackPdpClick;
                                                  cResult[72] = tmp102;
                                                  tmp100 = tmp102;
                                                }
                                                let tmp98 = null != tmp66;
                                                if (tmp98) {
                                                  class Ye {
                                                    constructor() {
                                                      closure_9(closure_3);
                                                      closure_10((arg0) => arg0 + 1);
                                                      closure_8(true);
                                                    }
                                                  }
                                                  const obj15 = { style: tmp8.badgeWrapper, children: tmp66 };
                                                  tmp98 = closure_15(closure_10, obj15);
                                                }
                                                cResult[66] = tmp66;
                                                cResult[67] = tmp8.badgeWrapper;
                                                cResult[68] = tmp98;
                                                tmp97 = tmp98;
                                              }
                                            }
                                            const obj17 = { style: tmp8.actionButtons, children: items6 };
                                            items6 = [tmp87, tmp90];
                                            const tmp96 = closure_16(closure_10, obj17);
                                            cResult[62] = tmp8.actionButtons;
                                            cResult[63] = tmp87;
                                            cResult[64] = tmp90;
                                            cResult[65] = tmp96;
                                            tmp93 = tmp96;
                                          }
                                          const obj18 = {
                                            selectedProduct: tmp22,
                                            size: "md",
                                            onTrackPress: trackPdpClick,
                                          };
                                          const tmp92 = closure_15(require("WishlistButton"), obj18);
                                          cResult[59] = tmp22;
                                          cResult[60] = trackPdpClick;
                                          cResult[61] = tmp92;
                                          tmp90 = tmp92;
                                        }
                                      }
                                      let tmp88 = tmp53;
                                      if (tmp88) {
                                        class Ye {
                                          constructor() {
                                            closure_9(closure_3);
                                            closure_10((arg0) => arg0 + 1);
                                            closure_8(true);
                                          }
                                        }
                                        const obj19 = { handlePreviewPress: tmp48, onTrackPress: trackPdpClick };
                                        tmp88 = closure_15(closure_20, obj19);
                                      }
                                      cResult[55] = tmp48;
                                      cResult[56] = tmp53;
                                      cResult[57] = trackPdpClick;
                                      cResult[58] = tmp88;
                                      tmp87 = tmp88;
                                    }
                                    function me() {
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = {
                                        type: "Collectibles Shop Details Modal",
                                        location_stack,
                                        sku_id: require.skuId,
                                      };
                                      obj.track(AnalyticEvents.OPEN_MODAL, obj2);
                                    }
                                    const items7 = [tmp5, product.skuId];
                                    cResult[37] = product.skuId;
                                    cResult[38] = tmp5;
                                    cResult[39] = me;
                                    cResult[40] = items7;
                                    tmp57 = items7;
                                    tmp56 = me;
                                  }
                                  function ae() {
                                    let tmp;
                                    if (closure_6) {
                                      const first = require.items[0];
                                      let type;
                                      if (first != null) {
                                        type = first.type;
                                      }
                                      tmp = type;
                                    }
                                    return tmp;
                                  }
                                  cResult[31] = tmp49;
                                  cResult[32] = product.items;
                                  cResult[33] = ae;
                                  tmp50 = ae;
                                }
                              }
                            }
                          }
                        }
                        const obj20 = {
                          product,
                          variantIndex: first,
                          analyticsLocations: analyticsLocations2,
                          collectibleProfileOverrides,
                          shopAnalyticsContext: collectiblesAnalyticsContext,
                          stageCollectibleChangeForEditProfile,
                        };
                        cResult[24] = analyticsLocations2;
                        cResult[25] = collectibleProfileOverrides;
                        cResult[26] = product;
                        cResult[27] = stageCollectibleChangeForEditProfile;
                        cResult[28] = collectiblesAnalyticsContext;
                        cResult[29] = first;
                        cResult[30] = obj20;
                        tmp46 = obj20;
                      }
                    }
                  }
                }
              }
              const obj21 = {
                type: require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET,
                name: require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL,
                properties: obj22,
              };
              obj22 = {
                sku_id: tmp22.skuId,
                location_stack: analyticsLocations2,
                card_id: cardId,
                position_in_section: tilePosition,
                shop_session_id: sessionId,
                product_sku_ids: tmp16,
              };
              cResult[17] = analyticsLocations2;
              cResult[18] = tmp16;
              cResult[19] = tmp22.skuId;
              cResult[20] = cardId;
              cResult[21] = tilePosition;
              cResult[22] = sessionId;
              cResult[23] = obj21;
              tmp43 = obj21;
            }
          }
          const obj23 = { skuId: tmp22.skuId, productSkuIds: tmp16, analyticsLocations: analyticsLocations2 };
          cResult[10] = analyticsLocations2;
          cResult[11] = tmp16;
          cResult[12] = tmp22.skuId;
          cResult[13] = obj23;
          tmp24 = obj23;
        }
        const tmp2Result20 = require("CollectiblesProductUtils");
        const selectedProduct = tmp2Result20.getSelectedProduct(product, first);
        cResult[7] = product;
        cResult[8] = first;
        cResult[9] = selectedProduct;
        tmp22 = selectedProduct;
      }
    : (product, arg1) => {
        let IconTextBadge;
        let _undefined;
        let _undefined2;
        let _undefined3;
        let _undefined4;
        let c7;
        let c8;
        let c9;
        let cardId;
        let closure_10;
        let closure_6;
        let first;
        let intl;
        let intl2;
        let intl3;
        let items5;
        let items6;
        let items7;
        let items8;
        let obj10;
        let obj6;
        let sessionId;
        let tilePosition;
        let tmp13;
        let tmp14;
        let tmp19;
        let tmp20;
        let tmp49;
        let tmp51;
        let type;
        const f95677 = () => {
          let tmp;
          if (closure_6) {
            const first = require.items[0];
            let type;
            if (first != null) {
              type = first.type;
            }
            tmp = type;
          }
          return tmp;
        };
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
        react = undefined;
        c7 = undefined;
        c8 = undefined;
        c9 = undefined;
        closure_10 = undefined;
        const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
        const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
        const tmp5 = closure_19();
        let obj = react;
        ref = react.useRef(null);
        const items = [];
        const tmp8 = analyticsLocations1(ref[26]);
        const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations1, 0);
        items[arraySpreadResult] = analyticsLocations1(ref[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
        const analyticsLocations = tmp8(items).analyticsLocations;
        const items1 = [product];
        const tmp10 = c8(() => {
          const obj = CollectiblesProductUtils;
          return obj.getProductSkuIds(require);
        }, items1);
        [tmp13, tmp14] = react.useState(num);
        _slicedToArray(react.useState(num), 2);
        let obj2 = require("CollectiblesProductUtils");
        const selectedProduct = obj2.getSelectedProduct(product, tmp13);
        const obj3 = require("useTrackPdpClick");
        const obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp10, analyticsLocations };
        const trackPdpClick = obj3.useTrackPdpClick(obj4);
        const items2 = [trackPdpClick];
        const imperativeHandle = react.useImperativeHandle(
          arg1,
          () => ({
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
            },
          }),
          items2,
        );
        [tmp19, tmp20] = react.useState(undefined);
        _slicedToArray(react.useState(undefined), 2);
        _slicedToArray = tmp20;
        const tmp21 = _slicedToArray(react.useState(selectedProduct.skuId), 2);
        if (selectedProduct.skuId !== tmp21[0]) {
          tmp22(selectedProduct.skuId);
          tmp20(undefined);
        }
        const tmp2Result = require("useCollectibleProfileOverrides");
        const collectibleProfileOverrides = tmp2Result.useCollectibleProfileOverrides(selectedProduct, tmp19);
        const tmp2Result8 = require("CollectiblesAnalyticsContext");
        const collectiblesAnalyticsContext = tmp2Result8.useCollectiblesAnalyticsContext();
        const obj5 = {
          type: require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET,
          name: require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL,
          properties: obj6,
        };
        obj6 = {
          sku_id: selectedProduct.skuId,
          location_stack: analyticsLocations,
          card_id: cardId,
          position_in_section: tilePosition,
          shop_session_id: sessionId,
          product_sku_ids: tmp10,
        };
        cardId = undefined;
        const tmp7Result = analyticsLocations1(ref[31]);
        if (collectiblesAnalyticsContext != null) {
          cardId = collectiblesAnalyticsContext.cardId;
        }
        tilePosition = undefined;
        if (collectiblesAnalyticsContext != null) {
          tilePosition = collectiblesAnalyticsContext.tilePosition;
        }
        sessionId = undefined;
        if (collectiblesAnalyticsContext != null) {
          sessionId = collectiblesAnalyticsContext.sessionId;
        }
        tmp7Result(obj5);
        const obj7 = {
          product,
          variantIndex: tmp13,
          analyticsLocations,
          collectibleProfileOverrides,
          shopAnalyticsContext: collectiblesAnalyticsContext,
          stageCollectibleChangeForEditProfile,
        };
        const tmp32Result = closure_21(obj7);
        const tmp34 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
        react = tmp34;
        [type, c7] = obj.useState(f95677);
        _slicedToArray(obj.useState(f95677), 2);
        const tmp36 = c7((type) => {
          _undefined(type);
          _undefined2(type.type);
        }, []);
        if (!tmp34) {
          type = selectedProduct.type;
        }
        let tmp37 = null != type;
        if (tmp37) {
          tmp37 =
            type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_EFFECT ||
            type === tmp2(tmp3[19]).CollectiblesItemType.PROFILE_FRAME ||
            type === tmp2(tmp3[19]).CollectiblesItemType.AVATAR_DECORATION;
          type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT ||
            type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME ||
            type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
        }
        const items3 = [analyticsLocations1, product.skuId];
        const effect = obj.useEffect(() => {
          const obj = AnalyticsUtilsDefault;
          const obj2 = {
            type: "Collectibles Shop Details Modal",
            location_stack: analyticsLocations1,
            sku_id: require.skuId,
          };
          obj.track(AnalyticEvents.OPEN_MODAL, obj2);
        }, items3);
        const hideBadge = product.hideBadge;
        const tmp2Result9 = require("native");
        const theme = tmp2Result9.useThemeContext().theme;
        const tmp2Result10 = require("shared");
        const isThemeDarkResult = tmp2Result10.isThemeDark(theme);
        const items4 = [CollectiblesCategoryStore];
        const tmp2Result11 = require("get initialized");
        const stateFromStores = tmp2Result11.useStateFromStores(items4, () => {
          const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
          let unpublishedAt;
          if (category != null) {
            unpublishedAt = category.unpublishedAt;
          }
          return unpublishedAt;
        });
        let tmp42 = selectedProduct;
        if (tmp34) {
          tmp42 = selectedProduct;
          if (null != tmp19) {
            const obj8 = { skuId: null, type: null, items: items5 };
            ({ skuId: obj13.skuId, type: obj13.type } = tmp19);
            items5 = [tmp19];
            tmp42 = obj8;
          }
        }
        let tmp43 = null;
        if (null == product.badgeOverride) {
          const tmp2Result12 = require("CollectiblesProductUtils");
          if (tmp2Result12.isDynamicProduct(tmp42)) {
            if (!hideBadge) {
              const obj9 = {
                accessibilityLabel: intl.string(require("intl").t["+drfVi"]),
                children: closure_15(IconTextBadge, obj10),
              };
              const DynamicBadgeTooltip = tmp2(tmp3[34]).DynamicBadgeTooltip;
              intl = tmp2(tmp3[17]).intl;
              obj10 = {
                icon: require("DiceIcon").DiceIcon,
                label: intl2.string(require("intl").t["+drfVi"]),
                isDark: isThemeDarkResult,
              };
              IconTextBadge = tmp2(tmp3[35]).IconTextBadge;
              intl2 = tmp2(tmp3[17]).intl;
              tmp43 = closure_15(DynamicBadgeTooltip, obj9);
            }
          }
          if (null != stateFromStores) {
            const tmp2Result13 = require("CollectiblesUtils");
            if (tmp2Result13.shouldShowLimitedTimeBadge(stateFromStores)) {
              if (!hideBadge) {
                const obj11 = { unpublishedAt: stateFromStores };
                tmp43 = closure_15(tmp7(tmp3[38]), obj11);
              }
            }
          }
          tmp43 = null;
          const tmp2Result14 = require("CollectiblesProductUtils");
          const tmp46 = tmp2Result14.isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
          if (tmp46) {
            const obj12 = {
              icon: require("OrbsIcon").OrbsIcon,
              label: intl3.string(require("intl").t["0TmQRG"]),
              isDark: isThemeDarkResult,
            };
            const IconTextBadge2 = tmp2(tmp3[35]).IconTextBadge;
            intl3 = tmp2(tmp3[17]).intl;
            tmp43 = closure_15(IconTextBadge2, obj12);
          }
        }
        [tmp49, c8] = obj.useState(false);
        _slicedToArray(obj.useState(false), 2);
        [tmp51, c9] = obj.useState(null);
        _slicedToArray(obj.useState(null), 2);
        [first, closure_10] = obj.useState(0);
        const obj14 = { value: analyticsLocations, children: items8 };
        const AnalyticsLocationProvider = tmp2(tmp3[26]).AnalyticsLocationProvider;
        const obj15 = { scrollsToTop: false, style: tmp5.container, ref, children: items7 };
        const obj16 = { style: tmp5.actionButtons, children: items6 };
        const BottomSheetScrollView = tmp2(tmp3[45]).BottomSheetScrollView;
        if (tmp37) {
          const obj17 = { handlePreviewPress: tmp32Result, onTrackPress: trackPdpClick };
          tmp37 = closure_15(closure_20, obj17);
        }
        items6 = [
          tmp37,
          closure_15(analyticsLocations1(tmp3[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick }),
        ];
        items7 = [closure_16(closure_10, obj16), , , , ,];
        let tmp58Result = null != tmp43;
        if (tmp58Result) {
          const obj18 = { style: tmp5.badgeWrapper, children: tmp43 };
          tmp58Result = closure_15(tmp55, obj18);
        }
        items7[1] = tmp58Result;
        items7[2] = closure_15(analyticsLocations1(ref[41]), {
          product: selectedProduct,
          handlePreviewPress: tmp32Result,
          onTrackPress: trackPdpClick,
          onBundleActiveItemChange: tmp36,
        });
        items7[3] = closure_15(analyticsLocations1(ref[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
        items7[4] = closure_15(analyticsLocations1(ref[43]), {
          product,
          selectedVariantIndex: tmp13,
          disabled: tmp49,
          onVariantSelect: tmp14,
        });
        const obj19 = { size: analyticsLocations1(ref[11]).space.PX_16 };
        const Spacer = tmp2(tmp3[44]).Spacer;
        items7[5] = closure_15(Spacer, obj19);
        items8 = [closure_16(BottomSheetScrollView, obj15), ,];
        const obj20 = {
          product: selectedProduct,
          analyticsLocations,
          onTrackPress: trackPdpClick,
          isBuying: tmp49,
          onStartPurchase() {
            _undefined4(selectedProduct);
            closure_10((arg0) => arg0 + 1);
            _undefined3(true);
          },
          stageCollectibleChangeForEditProfile,
        };
        items8[1] = closure_15(analyticsLocations1(ref[46]), obj20);
        let tmp58Result2 = null != tmp51;
        if (tmp58Result2) {
          const obj21 = {
            product: tmp51,
            attempt: first,
            analyticsLocations,
            onBuySettled() {
              return _undefined3(false);
            },
            stageCollectibleChangeForEditProfile,
          };
          tmp58Result2 = closure_15(tmp7(tmp3[47]), obj21);
        }
        items8[2] = tmp58Result2;
        return closure_16(AnalyticsLocationProvider, obj14);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let initialVariantIndex;
      let product;
      let stageCollectibleChangeForEditProfile;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(7);
      ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
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
            let tmp8;
            if (cResult[5] === stageCollectibleChangeForEditProfile) {
              tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
      }
      const obj2 = {
        scrollable: true,
        startExpanded: true,
        onExpand: tmp6,
        onDismiss: tmp7,
        ref,
        children: closure_15(closure_22, {
          ref: ref1,
          product,
          initialVariantIndex,
          analyticsLocations,
          stageCollectibleChangeForEditProfile,
        }),
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const tmp9 = closure_15(BottomSheet, obj2);
      cResult[2] = analyticsLocations;
      cResult[3] = initialVariantIndex;
      cResult[4] = product;
      cResult[5] = stageCollectibleChangeForEditProfile;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let analyticsLocations;
      let initialVariantIndex;
      let product;
      let stageCollectibleChangeForEditProfile;
      ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
      const obj = {
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
        children: closure_15(closure_22, {
          ref: ref1,
          product,
          initialVariantIndex,
          analyticsLocations,
          stageCollectibleChangeForEditProfile,
        }),
      };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      return closure_15(BottomSheet, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (skuId) => {
      let analyticsLocations;
      let fetchPurchasesError;
      let first;
      let hasPreviouslyFetched;
      let initialVariantIndex;
      let obj4;
      let product;
      let retry;
      let stageCollectibleChangeForEditProfile;
      let state;
      const obj = react2;
      const cResult = obj.c(20);
      skuId = skuId.skuId;
      ({ initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { needsCategory: false, seedCategoryStore: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = useCollectiblesShopProducts;
      const collectiblesShopProduct = tmpResult.useCollectiblesShopProduct(skuId, first);
      ({ product, state, retry } = collectiblesShopProduct);
      const tmpResult3 = useFetchCollectiblesCategoriesAndPurchases;
      const getOrFetchPurchases = tmpResult3.useGetOrFetchPurchases();
      ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
      react.useRef(null);
      react.useRef(null);
      if (null != product) {
        let bound = initialVariantIndex;
        const tmpResult4 = CollectiblesProductUtils;
        if (tmpResult4.getIsVariantProduct(product)) {
          if (cResult[1] === product.variants) {
            let tmp10;
            if (cResult[2] === skuId) {
              tmp10 = cResult[3];
            }
            const _Math = Math;
            bound = Math.max(0, tmp10);
          }
          if (cResult[4] !== skuId) {
            class T {
              constructor(arg0) {
                return skuId.skuId === skuId;
              }
            }
            cResult[4] = skuId;
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
          cResult[2] = skuId;
          cResult[3] = findIndexResult;
          tmp10 = findIndexResult;
        }
      }
      if ("ready" === state) {
        class T {
          constructor(arg0) {
            return skuId.skuId === skuId;
          }
        }
      }
      if ("error" === state) {
        let tmp17;
        let tmp19;
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
          const stringResult = obj5.string(intl4.t.eAn6z2);
          cResult[11] = stringResult;
          tmp17 = stringResult;
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
          const stringResult1 = obj6.string(intl4.t["+hivLW"]);
          cResult[12] = stringResult1;
          tmp19 = stringResult1;
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
          const obj3 = {
            Illustration: generated_NoResults.NoResults,
            body: tmp17,
            children: closure_15(components_Button_Button.Button, obj4),
          };
          const EmptyState = native2.EmptyState;
          obj4 = { text: tmp19, onPress: retry };
          const tmp22 = closure_15(EmptyState, obj3);
          cResult[13] = retry;
          cResult[14] = tmp22;
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
          const tmp16 = closure_15(ProductDetailsActionSheetSkeletonDefault, {});
          cResult[15] = tmp16;
        } else {
          class T {
            constructor(arg0) {
              return skuId.skuId === skuId;
            }
          }
        }
      }
    }
  : (skuId) => {
      let Button;
      let _undefined;
      let analyticsLocations;
      let fetchPurchasesError;
      let hasPreviouslyFetched;
      let intl;
      let intl2;
      let obj6;
      let retry;
      let stageCollectibleChangeForEditProfile;
      let state;
      let tmp11;
      let tmp13;
      skuId = skuId.skuId;
      const initialVariantIndex = skuId.initialVariantIndex;
      ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
      let obj = skuId(8536);
      const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, {
        needsCategory: false,
        seedCategoryStore: true,
      });
      const product = collectiblesShopProduct.product;
      dependencyMap = product;
      ({ state, retry } = collectiblesShopProduct);
      const obj2 = skuId(10465);
      const getOrFetchPurchases = obj2.useGetOrFetchPurchases();
      ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
      const items = [product, skuId, initialVariantIndex];
      if ("ready" === state) {
        if (hasPreviouslyFetched) {
          let tmp8;
          let tmp10;
          if (null != product) {
            tmp8 = closure_15;
            const obj3 = {
              ref: ref1,
              product,
              initialVariantIndex: tmp7,
              analyticsLocations,
              stageCollectibleChangeForEditProfile,
            };
            tmp10 = closure_15(closure_22, obj3);
          }
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
            children: tmp10,
          };
          return tmp8(skuId(6645).BottomSheet, obj4);
        }
      }
      if ("error" === state) {
        const obj5 = {
          Illustration: skuId(7904).NoResults,
          body: intl.string(skuId(1126).t.eAn6z2),
          children: closure_15(Button, obj6),
        };
        const EmptyState = tmp(1188).EmptyState;
        intl = tmp(1126).intl;
        obj6 = { text: intl2.string(skuId(1126).t["+hivLW"]), onPress: retry };
        Button = tmp(5594).Button;
        intl2 = tmp(1126).intl;
        tmp13 = closure_15(EmptyState, obj5);
        tmp11 = closure_15;
      } else {
        tmp11 = closure_15;
        tmp13 = closure_15(initialVariantIndex(13002), {});
      }
      tmp8 = tmp11;
      tmp10 = tmp13;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (skuId) => {
      const obj = react2;
      const cResult = obj.c(7);
      const obj2 = ShopStandalonePdpMobileExperiment;
      if (obj2.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
        if ("skuId" in skuId) {
          skuId = skuId.skuId;
        } else {
          skuId = skuId.product.skuId;
        }
        if (cResult[0] === skuId.analyticsLocations) {
          if (cResult[1] === skuId.initialVariantIndex) {
            if (cResult[2] === skuId.stageCollectibleChangeForEditProfile) {
              let tmp12;
              if (cResult[3] === skuId) {
                tmp12 = cResult[4];
              }
              return tmp12;
            }
          }
        }
        const obj3 = {
          skuId,
          initialVariantIndex: null,
          analyticsLocations: null,
          stageCollectibleChangeForEditProfile: null,
        };
        ({
          initialVariantIndex: obj4.initialVariantIndex,
          analyticsLocations: obj4.analyticsLocations,
          stageCollectibleChangeForEditProfile: obj4.stageCollectibleChangeForEditProfile,
        } = skuId);
        const tmp15 = closure_15(closure_24, obj3);
        cResult[0] = skuId.analyticsLocations;
        cResult[1] = skuId.initialVariantIndex;
        cResult[2] = skuId.stageCollectibleChangeForEditProfile;
        cResult[3] = skuId;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        let tmp4;
        if ("product" in skuId) {
          let tmp5;
          if (cResult[5] !== skuId) {
            const obj6 = {};
            const merged = Object.assign(skuId);
            const tmp11 = closure_15(closure_23, obj6);
            cResult[5] = skuId;
            cResult[6] = tmp11;
            tmp5 = tmp11;
          } else {
            tmp5 = cResult[6];
          }
          tmp4 = tmp5;
        } else {
          logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
          tmp4 = null;
        }
        return tmp4;
      }
    }
  : (skuId) => {
      let tmp9Result;
      const obj = ShopStandalonePdpMobileExperiment;
      if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
        if ("skuId" in skuId) {
          skuId = skuId.skuId;
        } else {
          skuId = skuId.product.skuId;
        }
        const obj2 = {
          skuId,
          initialVariantIndex: null,
          analyticsLocations: null,
          stageCollectibleChangeForEditProfile: null,
        };
        ({
          initialVariantIndex: obj3.initialVariantIndex,
          analyticsLocations: obj3.analyticsLocations,
          stageCollectibleChangeForEditProfile: obj3.stageCollectibleChangeForEditProfile,
        } = skuId);
        tmp9Result = closure_15(closure_24, obj2);
      } else if ("product" in skuId) {
        const obj5 = {};
        const merged = Object.assign(skuId);
        tmp9Result = closure_15(closure_23, obj5);
      } else {
        logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
        tmp9Result = null;
      }
      return tmp9Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (shopAnalyticsContext) => {
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== shopAnalyticsContext) {
        shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
        const tmp8 = _objectWithoutProperties(shopAnalyticsContext, closure_3);
        cResult[0] = shopAnalyticsContext;
        cResult[1] = tmp8;
        cResult[2] = shopAnalyticsContext;
        tmp5 = shopAnalyticsContext;
        tmp4 = tmp8;
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
        const tmp15 = closure_15(closure_25, obj2);
        cResult[3] = tmp4;
        cResult[4] = tmp15;
        tmp9 = tmp15;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        let tmp16;
        if (cResult[6] === tmp9) {
          tmp16 = cResult[7];
        }
        return tmp16;
      }
      const tmp17 = closure_15(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, {
        newValue: tmp5,
        children: tmp9,
      });
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : (shopAnalyticsContext) => {
      let obj2;
      shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
      if (shopAnalyticsContext === undefined) {
        shopAnalyticsContext = closure_17;
      }
      const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
      const obj = { newValue: shopAnalyticsContext, children: closure_15(closure_25, obj2) };
      obj2 = {};
      const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
      const merged1 = Object.assign(merged);
      return closure_15(CollectiblesAnalyticsProvider, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default tmp8;
