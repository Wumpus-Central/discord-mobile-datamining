// === Module 13029: CollectiblesEditUserProfileListItems ===

// Module 13029 (CollectiblesEditUserProfileListItems)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4862 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7855 */;
import CollectiblesBadges from "CollectiblesBadges" /* 8519 */;
import AssetRegistryDefault from "AssetRegistry" /* 13030 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, analyticsSource, asDefault, dependencyMap, importDefault;

let c10;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let closure_3 = ["analyticsSource"];
let closure_4 = ["isSelected", "isTryItOut", "skuId", "children"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
const View = react_native.View;
let closure_9 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { pressable: obj2, item: obj3, selected: obj4, optionCell: { justifyContent: "center", alignItems: "center" }, optionCellText: { marginTop: 4 }, newIcon: { position: "absolute", top: -12, right: 5 }, lockIcon: { position: "absolute", top: -12, right: -10 } };
obj2 = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj4 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let isSelected;
  let onLongPress;
  let onPress;
  let style;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = onPress(576);
  const cResult = obj.c(23);
  ({ size, isSelected, children, style, onPress } = arg0);
  ({ onLongPress, accessibilityLabel, accessibilityRole } = arg0);
  let str = "button";
  if (undefined !== accessibilityRole) {
    str = accessibilityRole;
  }
  const tmp4 = closure_12();
  if (cResult[0] !== onPress) {
    const fn = function l() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      onPress();
    };
    cResult[0] = onPress;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== isSelected) {
    const obj2 = { selected: isSelected };
    cResult[2] = isSelected;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  let selected = null;
  if (isSelected) {
    selected = tmp4.selected;
  }
  if (cResult[4] !== size) {
    const size1 = { width: size, height: size };
    cResult[4] = size;
    cResult[5] = size1;
    tmp8 = size1;
  } else {
    tmp8 = cResult[5];
  }
  if (cResult[6] === style) {
    if (cResult[7] === tmp4.item) {
      if (cResult[8] === selected) {
        let tmp9;
        if (cResult[9] === tmp8) {
          tmp9 = cResult[10];
        }
        if (cResult[11] === children) {
          let tmp10;
          if (cResult[12] === tmp9) {
            tmp10 = cResult[13];
          }
          if (cResult[14] === accessibilityLabel) {
            if (cResult[15] === str) {
              if (cResult[16] === tmp5) {
                if (cResult[17] === isSelected) {
                  if (cResult[18] === onLongPress) {
                    if (cResult[19] === tmp4.pressable) {
                      if (cResult[20] === tmp6) {
                        let tmp14;
                        if (cResult[21] === tmp10) {
                          tmp14 = cResult[22];
                        }
                        return tmp14;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj3 = { style: tmp4.pressable, disabled: isSelected, onPress: tmp5, onLongPress, accessibilityRole: str, accessibilityLabel, accessibilityState: tmp6, children: tmp10 };
          const tmp16 = closure_10(onPress(5916).PressableOpacity, obj3);
          cResult[14] = accessibilityLabel;
          cResult[15] = str;
          cResult[16] = tmp5;
          cResult[17] = isSelected;
          cResult[18] = onLongPress;
          cResult[19] = tmp4.pressable;
          cResult[20] = tmp6;
          cResult[21] = tmp10;
          cResult[22] = tmp16;
          tmp14 = tmp16;
        }
        const obj4 = { style: tmp9, children };
        const tmp13 = closure_10(View, obj4);
        cResult[11] = children;
        cResult[12] = tmp9;
        cResult[13] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const items = [tmp4.item, selected, tmp8, style];
  cResult[6] = style;
  cResult[7] = tmp4.item;
  cResult[8] = selected;
  cResult[9] = tmp8;
  cResult[10] = items;
  tmp9 = items;
}) : ((arg0) => {
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let isSelected;
  let items;
  let onLongPress;
  let require;
  let style;
  ({ size, isSelected, onPress: require, accessibilityRole } = arg0);
  ({ children, style, onLongPress, accessibilityLabel } = arg0);
  if (accessibilityRole === undefined) {
    accessibilityRole = "button";
  }
  const tmp = closure_12();
  let obj = {
    style: tmp.pressable,
    disabled: isSelected,
    onPress() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      _require();
    },
    onLongPress,
    accessibilityRole,
    accessibilityLabel,
    accessibilityState: { selected: isSelected },
    children: closure_10(View, { style: items, children })
  };
  items = [tmp.item, , , ];
  let selected = null;
  const PressableOpacity = Pressables.PressableOpacity;
  if (isSelected) {
    selected = tmp.selected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  items[3] = style;
  return closure_10(PressableOpacity, obj);
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((asDefault) => {
  let first;
  let items;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.LARGE };
    const Icon = native.Icon;
    const tmp8 = authStore(Icon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== asDefault.asDefault) {
    let stringResult;
    asDefault = asDefault.asDefault;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (asDefault) {
      stringResult = string(t.CHf9iJ);
    } else {
      stringResult = string(t.PoWNfe);
    }
    cResult[1] = asDefault.asDefault;
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.optionCellText) {
    let tmp11;
    if (cResult[4] === tmp9) {
      tmp11 = cResult[5];
    }
    if (cResult[6] === asDefault) {
      if (cResult[7] === tmp4.optionCell) {
        let tmp13;
        if (cResult[8] === tmp11) {
          tmp13 = cResult[9];
        }
        return tmp13;
      }
    }
    const obj3 = { style: tmp4.optionCell, children: items };
    const merged = Object.assign(asDefault);
    items = [first, tmp11];
    const tmp19 = unpackModuleId(closure_13, obj3);
    cResult[6] = asDefault;
    cResult[7] = tmp4.optionCell;
    cResult[8] = tmp11;
    cResult[9] = tmp19;
    tmp13 = tmp19;
  }
  const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp4.optionCellText, children: tmp9 };
  const tmp12 = authStore(Text_Text.Text, obj4);
  cResult[3] = tmp4.optionCellText;
  cResult[4] = tmp9;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((asDefault) => {
  let items;
  let stringResult;
  const tmp = closure_12();
  const obj = { style: tmp.optionCell, children: items };
  const merged = Object.assign(asDefault);
  const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.LARGE };
  const Icon = native.Icon;
  items = [authStore(Icon, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: stringResult };
  const Text = Text_Text.Text;
  asDefault = asDefault.asDefault;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (asDefault) {
    stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  items[1] = authStore(Text, obj3);
  return unpackModuleId(closure_13, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsSource) => {
  let analyticsLocations;
  let items;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] !== analyticsSource) {
    analyticsSource = analyticsSource.analyticsSource;
    _require = analyticsSource;
    const tmp8 = _objectWithoutProperties(analyticsSource, closure_3);
    cResult[0] = analyticsSource;
    cResult[1] = analyticsSource;
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_12();
  const tmp10 = analyticsLocations;
  analyticsLocations = analyticsLocations(6664)(tmp4).analyticsLocations;
  if (cResult[3] === analyticsLocations) {
    let tmp11;
    let tmp13;
    let tmp16;
    let tmp18;
    let tmp21;
    if (cResult[4] === tmp4) {
      tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    const optionCell = tmp9.optionCell;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { source: tmp10(13031), size: require("native").IconSizes.LARGE };
      const Icon = tmp(1188).Icon;
      const tmp15 = closure_10(Icon, obj2);
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    const optionCellText = tmp9.optionCellText;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(require("intl").t.pWG4ze);
      cResult[7] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== tmp9.optionCellText) {
      let obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: optionCellText, children: tmp16 };
      const tmp20 = closure_10(require("Text/Text").Text, obj3);
      cResult[8] = tmp9.optionCellText;
      cResult[9] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp9.newIcon) {
      const obj4 = { style: tmp9.newIcon };
      const tmp23 = closure_10(require("CollectiblesBadges").NewBadge, obj4);
      cResult[10] = tmp9.newIcon;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] === tmp11) {
      if (cResult[13] === tmp5) {
        if (cResult[14] === tmp9.optionCell) {
          if (cResult[15] === tmp18) {
            let tmp24;
            if (cResult[16] === tmp21) {
              tmp24 = cResult[17];
            }
            return tmp24;
          }
        }
      }
    }
    const obj5 = { style: optionCell, isSelected: false, onPress: tmp11, children: items };
    const merged = Object.assign(tmp5);
    items = [tmp13, tmp18, tmp21];
    const tmp30 = closure_11(closure_13, obj5);
    cResult[12] = tmp11;
    cResult[13] = tmp5;
    cResult[14] = tmp9.optionCell;
    cResult[15] = tmp18;
    cResult[16] = tmp21;
    cResult[17] = tmp30;
    tmp24 = tmp30;
  }
  const fn = function b() {
    const obj = CollectiblesActionCreators;
    const obj2 = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
    const result = obj.openCollectiblesShopMobile(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp4;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((analyticsSource) => {
  let intl;
  let items1;
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_12();
  analyticsLocations = analyticsLocations(6664)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: react.useCallback(() => {
      const obj = CollectiblesActionCreators;
      const obj2 = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }, items),
    children: items1
  };
  const merged1 = Object.assign(merged);
  let obj2 = { source: analyticsLocations(13031), size: analyticsSource(1188).IconSizes.LARGE };
  const Icon = analyticsSource(1188).Icon;
  items1 = [closure_10(Icon, obj2), , ];
  let obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: intl.string(analyticsSource(1126).t.pWG4ze) };
  const Text = analyticsSource(4892).Text;
  intl = analyticsSource(1126).intl;
  items1[1] = closure_10(Text, obj3);
  const obj4 = { style: tmp2.newIcon };
  items1[2] = closure_10(analyticsSource(8519).NewBadge, obj4);
  return closure_11(closure_13, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_5;
  let currentUser;
  let isNew;
  let isSelected;
  let isTryItOut;
  let items1;
  let product;
  let purchase;
  let skuId;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(29);
  if (cResult[0] !== arg0) {
    ({ isSelected, isTryItOut } = arg0);
    _require = isTryItOut;
    ({ skuId, children } = arg0);
    let tmp9 = _objectWithoutProperties;
    const tmp11 = _objectWithoutProperties(arg0, isNew);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = isSelected;
    cResult[3] = isTryItOut;
    cResult[4] = tmp11;
    cResult[5] = skuId;
    tmp8 = skuId;
    tmp7 = tmp11;
    tmp5 = isSelected;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_12();
  importDefault = tmp12;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[6] = items;
    cResult[7] = fn;
    tmp14 = fn;
    tmp13 = items;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
  if (cResult[8] !== stateFromStores) {
    const obj3 = PremiumUtilsDefault;
    const canUseCollectiblesResult = obj3.canUseCollectibles(stateFromStores);
    cResult[8] = stateFromStores;
    cResult[9] = canUseCollectiblesResult;
    tmp17 = canUseCollectiblesResult;
  } else {
    tmp17 = cResult[9];
  }
  dependencyMap = tmp17;
  ({ product, purchase } = useCollectiblesDataDefault(tmp8));
  useCollectiblesDataDefault(tmp8);
  if (cResult[10] !== tmp8) {
    const tmpResult4 = require("CollectiblesUtils");
    const isProductNewResult = tmpResult4.isProductNew(tmp8);
    cResult[10] = tmp8;
    cResult[11] = isProductNewResult;
    tmp21 = isProductNewResult;
  } else {
    tmp21 = cResult[11];
  }
  isNew = tmp21;
  if (cResult[12] === product) {
    let tmp23;
    if (cResult[13] === purchase) {
      tmp23 = cResult[14];
    }
    _objectWithoutProperties = tmp23;
    if (cResult[15] === tmp17) {
      if (cResult[16] === tmp21) {
        if (cResult[17] === tmp23) {
          if (cResult[18] === isTryItOut) {
            if (cResult[19] === purchase) {
              let tmp25;
              let tmp26;
              if (cResult[20] === tmp12) {
                tmp25 = cResult[21];
              }
              if (cResult[22] !== tmp25) {
                const tmp25Result = tmp25();
                cResult[22] = tmp25;
                cResult[23] = tmp25Result;
                tmp26 = tmp25Result;
              } else {
                tmp26 = cResult[23];
              }
              if (cResult[24] === tmp4) {
                if (cResult[25] === tmp5) {
                  if (cResult[26] === tmp7) {
                    let tmp28;
                    if (cResult[27] === tmp26) {
                      tmp28 = cResult[28];
                    }
                    return tmp28;
                  }
                }
              }
              let obj2 = { isSelected: tmp5, children: items1 };
              const merged = Object.assign(tmp7);
              items1 = [tmp4, tmp26];
              const tmp34 = closure_11(closure_13, obj2);
              cResult[24] = tmp4;
              cResult[25] = tmp5;
              cResult[26] = tmp7;
              cResult[27] = tmp26;
              cResult[28] = tmp34;
              tmp28 = tmp34;
            }
          }
        }
      }
    }
    const fn2 = function k() {
      if (null == purchase) {
        let tmp8;
        if (!closure_5) {
          const obj = { style: closure_1.lockIcon, isNew };
          tmp8 = authStore(CollectiblesBadges.LockBadge, obj);
        }
        return tmp8;
      }
      let tmp9 = null;
      if (closure_5) {
        tmp9 = null;
        if (!closure_0) {
          if (null == purchase) {
            const obj2 = { style: closure_1.lockIcon, isNew };
            tmp9 = authStore(CollectiblesBadges.PremiumBadge, obj2);
          } else {
            tmp9 = null;
          }
        }
      }
      tmp8 = tmp9;
    };
    cResult[15] = tmp17;
    cResult[16] = tmp21;
    cResult[17] = tmp23;
    cResult[18] = isTryItOut;
    cResult[19] = purchase;
    cResult[20] = tmp12;
    cResult[21] = fn2;
    tmp25 = fn2;
  }
  const tmpResult5 = require("CollectiblesUtils");
  let result = tmpResult5.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmpResult6 = require("CollectiblesUtils");
    result = tmpResult6.isPremiumCollectiblesPurchase(purchase);
  }
  cResult[12] = product;
  cResult[13] = purchase;
  cResult[14] = result;
  tmp23 = result;
}) : ((skuId) => {
  let children;
  let currentUser;
  let isSelected;
  let isTryItOut;
  let product;
  let purchase;
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_12();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumUtilsDefault;
  obj2.canUseCollectibles(stateFromStores);
  ({ purchase, product } = useCollectiblesDataDefault(skuId));
  useCollectiblesDataDefault(skuId);
  const obj3 = CollectiblesUtils;
  const isProductNewResult = obj3.isProductNew(skuId);
  const obj4 = CollectiblesUtils;
  let result = obj4.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmp3Result = CollectiblesUtils;
    result = tmp3Result.isPremiumCollectiblesPurchase(purchase);
  }
  const obj5 = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    let tmp14;
    if (!result) {
      const obj6 = { style: tmp2.lockIcon, isNew: isProductNewResult };
      tmp14 = authStore(CollectiblesBadges.LockBadge, obj6);
    }
    items1[1] = tmp14;
    obj5.children = items1;
    return unpackModuleId(closure_13, obj5);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        const obj7 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = authStore(CollectiblesBadges.PremiumBadge, obj7);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export const EditCollectibleListItem = tmp4;
export const EditCollectiblesListItemNone = tmp5;
export const EditCollectiblesListItemShop = tmp6;
export const EditCollectiblesListItemProduct = tmp7;