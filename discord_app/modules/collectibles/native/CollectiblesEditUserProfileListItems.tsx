// === Module 13402: CollectiblesEditUserProfileListItems ===

// Module 13402 (CollectiblesEditUserProfileListItems)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5057 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8281 */;
import CollectiblesBadges from "CollectiblesBadges" /* 9014 */;
import _modDef13403 from "module_13403" /* 13403 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["analyticsSource"];
let closure_4 = ["isSelected", "isTryItOut", "skuId", "children"];
const View = fn(17).View;
let closure_9 = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { pressable: { marginTop: 10, borderRadius: nativeDefault.radii.sm }, item: null, selected: null, optionCell: null, optionCellText: null, newIcon: null, lockIcon: null };
let obj3 = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
obj2.item = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj2.selected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
obj2.optionCell = { justifyContent: "center", alignItems: "center" };
obj2.optionCellText = { marginTop: 4 };
obj2.newIcon = { position: "absolute", top: -12, right: 5 };
obj2.lockIcon = { position: "absolute", top: -12, right: -10 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectibleListItem(arg0) {
  const cResult = onPress(576).c(23);
  ({ size, isSelected, children, style, onPress } = arg0);
  ({ onLongPress, accessibilityLabel, accessibilityRole } = arg0);
  let str = "button";
  if (undefined !== accessibilityRole) {
    str = accessibilityRole;
  }
  const tmp4 = closure_12();
  if (cResult[0] !== onPress) {
    function handlePress() {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      onPress();
    }
    cResult[0] = onPress;
    cResult[1] = handlePress;
    let tmp5 = handlePress;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== isSelected) {
    const obj2 = { selected: isSelected };
    cResult[2] = isSelected;
    cResult[3] = obj2;
    let tmp6 = obj2;
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
    let tmp8 = size1;
  } else {
    tmp8 = cResult[5];
  }
  if (cResult[6] === style) {
    if (cResult[7] === tmp4.item) {
      if (cResult[8] === selected) {
        if (cResult[9] === tmp8) {
          let tmp9 = cResult[10];
        }
        if (cResult[11] === children) {
          if (cResult[12] === tmp9) {
            let tmp10 = cResult[13];
          }
          if (cResult[14] === accessibilityLabel) {
            if (cResult[15] === str) {
              if (cResult[16] === tmp5) {
                if (cResult[17] === isSelected) {
                  if (cResult[18] === onLongPress) {
                    if (cResult[19] === tmp4.pressable) {
                      if (cResult[20] === tmp6) {
                        if (cResult[21] === tmp10) {
                          let tmp14 = cResult[22];
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
          const tmp16 = closure_10(onPress(6191).PressableOpacity, obj3);
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
  const obj = onPress(576);
}) : (function EditCollectibleListItem(arg0) {
  ({ size, isSelected, onPress: require, accessibilityRole } = arg0);
  ({ children, style, onLongPress, accessibilityLabel } = arg0);
  if (accessibilityRole === undefined) {
    accessibilityRole = "button";
  }
  const tmp = closure_12();
  const obj = {
    style: tmp.pressable,
    disabled: isSelected,
    onPress: function handlePress() {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      _require();
    },
    onLongPress,
    accessibilityRole,
    accessibilityLabel,
    accessibilityState: { selected: isSelected },
    children: null
  };
  const items = [tmp.item, , , ];
  let selected = null;
  if (isSelected) {
    selected = tmp.selected;
  }
  items[1] = selected;
  items[2] = { width: size, height: size };
  items[3] = style;
  obj.children = closure_10(View, { style: items, children });
  return closure_10(Pressables.PressableOpacity, obj);
});
let closure_13 = tmp3;
fn(558);
let obj5 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectiblesListItemNone(asDefault) {
  const cResult = c.c(10);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef13403, size: native.IconSizes.LARGE };
    const tmp8 = collapsed(native.Icon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== asDefault.asDefault) {
    const intl = util.intl;
    const string = intl.string;
    asDefault = util.t;
    if (asDefault.asDefault) {
      let stringResult = string(asDefault.CHf9iJ);
    } else {
      stringResult = string(asDefault.PoWNfe);
    }
    asDefault = asDefault.asDefault;
    cResult[1] = asDefault;
    cResult[2] = stringResult;
  } else {
    if (cResult[3] === tmp4.optionCellText) {
      if (cResult[4] === tmp9) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] === asDefault) {
        if (cResult[7] === tmp4.optionCell) {
          if (cResult[8] === tmp12) {
            let tmp15 = cResult[9];
          }
          return tmp15;
        }
      }
      const obj3 = { style: tmp4.optionCell };
      const merged = Object.assign(asDefault);
      const items = [first, tmp12];
      obj3.children = items;
      const tmp21 = closure_1_11(closure_13, obj3);
      cResult[6] = asDefault;
      cResult[7] = tmp4.optionCell;
      cResult[8] = tmp12;
      cResult[9] = tmp21;
      tmp15 = tmp21;
    }
    const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp4.optionCellText, children: cResult[2] };
    const tmp14 = collapsed(Text_Text.Text, obj4);
    cResult[3] = tmp4.optionCellText;
    cResult[4] = cResult[2];
    cResult[5] = tmp14;
    tmp12 = tmp14;
  }
}) : (function EditCollectiblesListItemNone(asDefault) {
  const tmp = closure_12();
  const obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  const items = [collapsed(native.Icon, { source: _modDef13403, size: native.IconSizes.LARGE }), ];
  const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj3.children = stringResult;
  items[1] = collapsed(Text_Text.Text, obj3);
  obj.children = items;
  return closure_1_11(closure_13, obj);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectiblesListItemShop(analyticsSource) {
  const cResult = require("c").c(18);
  if (cResult[0] !== analyticsSource) {
    analyticsSource = analyticsSource.analyticsSource;
    _require = analyticsSource;
    const tmp8 = _objectWithoutProperties(analyticsSource, closure_3);
    cResult[0] = analyticsSource;
    cResult[1] = analyticsSource;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_12();
  analyticsLocations = analyticsLocations(6848)(tmp4).analyticsLocations;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === tmp4) {
      let tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { source: tmp10(13404), size: tmp(1200).IconSizes.LARGE };
      const tmp15 = closure_10(tmp(1200).Icon, obj2);
      cResult[6] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.pWG4ze);
      cResult[7] = stringResult;
      let tmp16 = stringResult;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== tmp9.optionCellText) {
      const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp9.optionCellText, children: tmp16 };
      const tmp20 = closure_10(tmp(5087).Text, obj3);
      cResult[8] = tmp9.optionCellText;
      cResult[9] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp9.newIcon) {
      const obj4 = { style: tmp9.newIcon };
      const tmp23 = closure_10(tmp(9014).NewBadge, obj4);
      cResult[10] = tmp9.newIcon;
      cResult[11] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    if (cResult[12] === tmp11) {
      if (cResult[13] === tmp5) {
        if (cResult[14] === tmp9.optionCell) {
          if (cResult[15] === tmp18) {
            if (cResult[16] === tmp21) {
              let tmp24 = cResult[17];
            }
            return tmp24;
          }
        }
      }
    }
    const obj5 = { style: tmp9.optionCell, isSelected: false, onPress: tmp11 };
    const merged = Object.assign(tmp5);
    const items = [tmp13, tmp18, tmp21];
    obj5.children = items;
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
    const result = CollectiblesActionCreators.openCollectiblesShopMobile({ analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE });
    const obj2 = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp4;
  cResult[5] = fn;
  tmp11 = fn;
  let obj = require("c");
  tmp10 = analyticsLocations;
}) : (function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_12();
  analyticsLocations = analyticsLocations(6848)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: noop.useCallback(() => {
      const result = CollectiblesActionCreators.openCollectiblesShopMobile({ analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE });
      const obj2 = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }, items)
  };
  const merged1 = Object.assign(merged);
  const items1 = [closure_10(analyticsSource(1200).Icon, { source: analyticsLocations(13404), size: analyticsSource(1200).IconSizes.LARGE }), , ];
  const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1126).intl;
  obj3.children = intl.string(analyticsSource(1126).t.pWG4ze);
  items1[1] = closure_10(analyticsSource(5087).Text, obj3);
  items1[2] = closure_10(analyticsSource(9014).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return closure_11(closure_13, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export const EditCollectibleListItem = tmp3;
export const EditCollectiblesListItemNone = tmp4;
export const EditCollectiblesListItemShop = tmp5;
export const EditCollectiblesListItemProduct = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectiblesListItemProduct(arg0) {
  const cResult = require("c").c(29);
  if (cResult[0] !== arg0) {
    ({ isSelected, isTryItOut } = arg0);
    _require = isTryItOut;
    ({ skuId, children } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, isNew);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = isSelected;
    cResult[3] = isTryItOut;
    cResult[4] = tmp11;
    cResult[5] = skuId;
    let tmp8 = skuId;
    let tmp7 = tmp11;
    let tmp5 = isSelected;
    let tmp4 = children;
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
    class L {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    cResult[6] = items;
    cResult[7] = L;
    let tmp14 = L;
    let tmp13 = items;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp13, tmp14);
  if (cResult[8] !== stateFromStores) {
    const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(stateFromStores);
    class L {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = canUseCollectiblesResult;
    let tmp17 = canUseCollectiblesResult;
  } else {
    tmp17 = cResult[9];
  }
  dependencyMap = tmp17;
  const tmpResult = require("initialize");
  ({ product, purchase } = useCollectiblesDataDefault(tmp8));
  if (cResult[10] !== tmp8) {
    const isProductNewResult = tmp(7269).isProductNew(tmp8);
    class L {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    cResult[11] = isProductNewResult;
    let tmp21 = isProductNewResult;
    const tmpResult4 = tmp(7269);
  } else {
    tmp21 = cResult[11];
  }
  isNew = tmp21;
  if (cResult[12] === product) {
    if (cResult[13] === purchase) {
      let tmp23 = cResult[14];
    }
    _objectWithoutProperties = tmp23;
    if (cResult[15] === tmp17) {
      if (cResult[16] === tmp21) {
        if (cResult[17] === tmp23) {
          if (cResult[18] === isTryItOut) {
            if (cResult[19] === purchase) {
              if (cResult[20] === tmp12) {
                let tmp25 = cResult[21];
              }
              if (cResult[22] !== tmp25) {
                const tmp25Result = tmp25();
                cResult[22] = tmp25;
                class L {
                  constructor() {
                    return closure_1_8.getCurrentUser();
                  }
                }
                cResult[23] = tmp25Result;
                let tmp27 = tmp25Result;
              } else {
                tmp27 = cResult[23];
              }
              if (cResult[24] === tmp4) {
                if (cResult[25] === tmp5) {
                  if (cResult[26] === tmp7) {
                    if (cResult[27] === tmp27) {
                      let tmp29 = cResult[28];
                    }
                    return tmp29;
                  }
                }
              }
              class L {
                constructor() {
                  return closure_1_8.getCurrentUser();
                }
              }
              let obj2 = { isSelected: tmp5 };
              const merged = Object.assign(tmp7);
              const items1 = [tmp4, tmp27];
              obj2.children = items1;
              const tmp34 = closure_11(closure_13, obj2);
              cResult[24] = tmp4;
              cResult[25] = tmp5;
              cResult[26] = tmp7;
              cResult[27] = tmp27;
              cResult[28] = tmp34;
              tmp29 = tmp34;
            }
          }
        }
      }
    }
    class L {
      constructor() {
        return closure_1_8.getCurrentUser();
      }
    }
    cResult[15] = tmp17;
    cResult[16] = tmp21;
    cResult[17] = tmp23;
    cResult[18] = isTryItOut;
    cResult[19] = purchase;
    cResult[20] = tmp12;
    cResult[21] = tmp26;
    tmp25 = tmp26;
  }
  const tmp20 = useCollectiblesDataDefault(tmp8);
  let result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp(7269).isPremiumCollectiblesPurchase(purchase);
    const tmpResult6 = tmp(7269);
  }
  cResult[12] = product;
  cResult[13] = purchase;
  cResult[14] = result;
  tmp23 = result;
  const tmpResult5 = require("CollectiblesUtils");
}) : (function EditCollectiblesListItemProduct(skuId) {
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_12();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  PremiumUtilsDefault.canUseCollectibles(stateFromStores);
  ({ purchase, product } = useCollectiblesDataDefault(skuId));
  const tmp7 = useCollectiblesDataDefault(skuId);
  const isProductNewResult = CollectiblesUtils.isProductNew(skuId);
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
    const tmp3Result = CollectiblesUtils;
  }
  const obj5 = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    if (!result) {
      const obj6 = { style: tmp2.lockIcon, isNew: isProductNewResult };
      let tmp14 = collapsed(CollectiblesBadges.LockBadge, obj6);
    }
    items1[1] = tmp14;
    obj5.children = items1;
    return closure_1_11(closure_13, obj5);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        const obj7 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = collapsed(CollectiblesBadges.PremiumBadge, obj7);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
});