// === Module 15413: CollectiblesEditUserProfileListItems ===

// Module 15413 (CollectiblesEditUserProfileListItems)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5492 */;
import Text_Text from "Text/Text" /* 5866 */;
import Pressables from "Pressables" /* 7364 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8418 */;
import CollectiblesUtils from "CollectiblesUtils" /* 8431 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 9337 */;
import CollectiblesBadges from "CollectiblesBadges" /* 9365 */;
import _modDef15414 from "module_15414" /* 15414 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

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
      onPress: function handlePress() {
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
let closure_6 = fn(1074).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { pressable: { marginTop: 10, borderRadius: nativeDefault.radii.sm }, item: null, selected: null, optionCell: null, optionCellText: null, newIcon: null, lockIcon: null };
let obj3 = { marginTop: 10, borderRadius: nativeDefault.radii.sm };
obj2.item = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj2.selected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
obj2.optionCell = { justifyContent: "center", alignItems: "center" };
obj2.optionCellText = { marginTop: 4 };
obj2.newIcon = { position: "absolute", top: -12, right: 5 };
obj2.lockIcon = { position: "absolute", top: -12, right: -10 };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export function EditCollectiblesListItemNone(asDefault) {
  const tmp = closure_9();
  const obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  items = [metroImportDefault(native.Icon, { source: _modDef15414, size: native.IconSizes.LARGE }), ];
  const obj3 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj3.children = stringResult;
  items[1] = metroImportDefault(Text_Text.Text, obj3);
  obj.children = items;
  return React5(EditCollectibleListItem, obj);
}
export function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.assign({ analyticsSource: 0 }));
  let analyticsLocations;
  const tmp2 = closure_9();
  analyticsLocations = analyticsLocations(7852)(analyticsSource).analyticsLocations;
  items = [analyticsLocations, analyticsSource];
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
  const items1 = [closure_7(analyticsSource(1187).Icon, { source: analyticsLocations(15415), size: analyticsSource(1187).IconSizes.LARGE }), , ];
  const obj3 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1113).intl;
  obj3.children = intl.string(analyticsSource(1113).t.pWG4ze);
  items1[1] = closure_7(analyticsSource(5866).Text, obj3);
  items1[2] = closure_7(analyticsSource(9365).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return closure_8(EditCollectibleListItem, obj);
}
export function EditCollectiblesListItemProduct(skuId) {
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.assign({ isSelected: 0, isTryItOut: 0, skuId: 0, children: 0 }));
  const tmp2 = closure_9();
  items = [UserStore];
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
      let tmp14 = metroImportDefault(CollectiblesBadges.LockBadge, obj6);
    }
    items1[1] = tmp14;
    obj5.children = items1;
    return React5(EditCollectibleListItem, obj5);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        const obj7 = { style: tmp2.lockIcon, isNew: isProductNewResult };
        tmp15 = metroImportDefault(CollectiblesBadges.PremiumBadge, obj7);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
}