// === Module 13171: CollectiblesEditUserProfileListItems ===

// Module 13171 (CollectiblesEditUserProfileListItems)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8173 */;
import _modDef13172 from "module_13172" /* 13172 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class EditCollectibleListItem {
  constructor(arg0) {
    ({ size, isSelected, onPress, accessibilityRole } = global);
    ({ children, style, onLongPress, accessibilityLabel } = global);
    if (accessibilityRole === undefined) {
      accessibilityRole = "button";
    }
    tmp = closure_9();
    tmp2 = jsx;
    obj = {
      style: tmp.pressable,
      disabled: isSelected,
      onPress() {
            const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            closure_1_0();
          },
      onLongPress,
      accessibilityRole,
      accessibilityLabel,
      accessibilityState: { selected: isSelected },
      children: null
    };
    items = [, , , ];
    items[0] = tmp.item;
    selected = null;
    tmp3 = View;
    if (isSelected) {
      selected = tmp.selected;
    }
    items[1] = selected;
    items[2] = { width: size, height: size };
    items[3] = style;
    obj.children = tmp2(tmp3, { style: items, children });
    return tmp2(onPress(closure_2[7]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { pressable: null, item: null, selected: null, optionCell: null, optionCellText: null, newIcon: null, lockIcon: null };
createStyles = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
createStyles.pressable = createStyles;
createStyles.item = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let obj1 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createStyles.selected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
createStyles.optionCell = { justifyContent: "center", alignItems: "center" };
createStyles.optionCellText = { marginTop: 4 };
createStyles.newIcon = { position: "absolute", top: -12, right: 5 };
createStyles.lockIcon = { position: "absolute", top: -12, right: -10 };
const React7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = closure_9();
  let obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  obj = { source: _modDef13172, size: native.IconSizes.LARGE };
  const items = [React5(native.Icon, obj), ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj.children = stringResult;
  items[1] = React5(Text_Text.Text, obj);
  obj.children = items;
  return React6(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_9();
  analyticsLocations = analyticsLocations(7162)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: noop.useCallback(() => {
      const obj = { analyticsLocations, analyticsSource, screen: constants.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj = { source: analyticsLocations(13173), size: analyticsSource(1178).IconSizes.LARGE };
  const items1 = [closure_7(analyticsSource(1178).Icon, obj), , ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1114).intl;
  obj.children = intl.string(analyticsSource(1114).t.pWG4ze);
  items1[1] = closure_7(analyticsSource(4556).Text, obj);
  items1[2] = closure_7(analyticsSource(8832).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_9();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = PremiumUtilsDefault;
  const canUseCollectiblesResult = obj1.canUseCollectibles(stateFromStores);
  ({ purchase, product } = useCollectiblesDataDefault(skuId));
  const tmp7 = useCollectiblesDataDefault(skuId);
  const isProductNewResult = CollectiblesUtils.isProductNew(skuId);
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp3(7554).isPremiumCollectiblesPurchase(purchase);
    const tmp3Result = tmp3(7554);
  }
  obj = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    if (!result) {
      obj = { style: tmp2.lockIcon, isNew: isProductNewResult };
      let tmp14 = React5(tmp3(8832).LockBadge, obj);
    }
    items1[1] = tmp14;
    obj.children = items1;
    return React6(EditCollectibleListItem, obj);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        obj1 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = React5(tmp3(8832).PremiumBadge, obj1);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
};