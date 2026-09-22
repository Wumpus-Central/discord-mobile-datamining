// === Module 13483: CollectiblesEditUserProfileListItems ===

// Module 13483 (CollectiblesEditUserProfileListItems)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4415 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import HapticUtils from "HapticUtils" /* 4725 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4726 */;
import Text_Text from "Text/Text" /* 4753 */;
import Pressables from "Pressables" /* 5341 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7786 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7799 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8446 */;
import CollectiblesBadges from "CollectiblesBadges" /* 9116 */;
import _modDef13484 from "module_13484" /* 13484 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

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
const createStyles = fn(4757);
let obj2 = { pressable: { marginTop: 10, borderRadius: nativeDefault.radii.sm }, item: null, selected: null, optionCell: null, optionCellText: null, newIcon: null, lockIcon: null };
let obj3 = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
obj2.item = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj2.selected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
obj2.optionCell = { justifyContent: "center", alignItems: "center" };
obj2.optionCellText = { marginTop: 4 };
obj2.newIcon = { position: "absolute", top: -12, right: 5 };
obj2.lockIcon = { position: "absolute", top: -12, right: -10 };
const React7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = closure_9();
  const obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  const items = [React5(native.Icon, { source: _modDef13484, size: native.IconSizes.LARGE }), ];
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
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React6(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_9();
  analyticsLocations = analyticsLocations(7409)(analyticsSource).analyticsLocations;
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
  const items1 = [closure_7(analyticsSource(1177).Icon, { source: analyticsLocations(13485), size: analyticsSource(1177).IconSizes.LARGE }), , ];
  const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1115).intl;
  obj3.children = intl.string(analyticsSource(1115).t.pWG4ze);
  items1[1] = closure_7(analyticsSource(4753).Text, obj3);
  items1[2] = closure_7(analyticsSource(9116).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_9();
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
      let tmp14 = React5(CollectiblesBadges.LockBadge, obj6);
    }
    items1[1] = tmp14;
    obj5.children = items1;
    return React6(EditCollectibleListItem, obj5);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        const obj7 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = React5(CollectiblesBadges.PremiumBadge, obj7);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
};