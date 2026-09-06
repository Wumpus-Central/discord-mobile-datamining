// discord_app/modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import getItemRecordsFromPurchases from "../CollectiblesUtils.tsx";
import useCollectiblesDataDefault from "../hooks/useCollectiblesData.tsx";
import registerAssetDefault from "../../../../_runtime/13172_registerAsset.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import { CollectiblesMobileShopScreen as closure_6 } from "../CollectiblesShopConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
        const result = closure_1_0(closure_1_2[8]).triggerHapticFeedback(closure_1_1(closure_1_2[9]).IMPACT_LIGHT);
        callback();
      },
      onLongPress,
      accessibilityRole,
      accessibilityLabel,
      accessibilityState: { selected: isSelected },
      children: null,
    };
    items = [, , ,];
    items[0] = tmp.item;
    selected = null;
    tmp3 = View;
    if (isSelected) {
      selected = tmp.selected;
    }
    items[1] = selected;
    items[2] = { width: size, height: size };
    items[3] = style;
    obj[7] = tmp2(tmp3, { style: items, children });
    return tmp2(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  pressable: null,
  item: null,
  selected: null,
  optionCell: null,
  optionCellText: null,
  newIcon: null,
  lockIcon: null,
};
createCacheKey = { marginTop: 10, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
let obj1 = {
  borderWidth: 2,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[2] = { borderColor: ThemesDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
createCacheKey[3] = { justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { marginTop: 4 };
createCacheKey[5] = { position: "absolute", top: -12, right: 5 };
createCacheKey[6] = { position: "absolute", top: -12, right: -10 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderColor: ThemesDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
let result = require("set").fileFinishedImporting(
  "modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx",
);

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = callback3();
  let obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  obj = { source: registerAssetDefault, size: Button.IconSizes.LARGE };
  const items = [callback(Button.Icon, obj)];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: null };
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj[3] = stringResult;
  items[1] = callback(Text.Text, obj);
  obj.children = items;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.create(null));
  let analyticsLocations;
  const tmp2 = callback3();
  analyticsLocations = analyticsLocations(7162)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: React.useCallback(() => {
      let obj = analyticsSource(closure_1_2[15]);
      obj = { analyticsLocations, analyticsSource, screen: closure_1_6.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj);
      analyticsLocations(closure_1_2[16]).hideActionSheet();
    }, items),
  };
  const merged1 = Object.assign(merged);
  obj = { source: analyticsLocations(13173), size: analyticsSource(1178).IconSizes.LARGE };
  const items1 = [callback(analyticsSource(1178).Icon, obj), ,];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1114).intl;
  obj[3] = intl.string(analyticsSource(1114).t.pWG4ze);
  items1[1] = callback(analyticsSource(4556).Text, obj);
  items1[2] = callback(analyticsSource(8832).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return callback2(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.create(null));
  const tmp2 = callback3();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = getPremiumPlanItemDefault;
  const canUseCollectiblesResult = obj1.canUseCollectibles(stateFromStores);
  ({ purchase, product } = useCollectiblesDataDefault(skuId));
  const tmp7 = useCollectiblesDataDefault(skuId);
  const isProductNewResult = getItemRecordsFromPurchases.isProductNew(skuId);
  const obj3 = getItemRecordsFromPurchases;
  let result = getItemRecordsFromPurchases.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp3(7554).isPremiumCollectiblesPurchase(purchase);
    const tmp3Result = tmp3(7554);
  }
  obj = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children];
  if (null == purchase) {
    if (!result) {
      obj = { style: null, isNew: null };
      obj[0] = tmp2.lockIcon;
      obj[1] = isProductNewResult;
      let tmp14 = callback(tmp3(8832).LockBadge, obj);
    }
    items1[1] = tmp14;
    obj.children = items1;
    return closure_8(EditCollectibleListItem, obj);
  }
  let tmp15 = null;
  if (result) {
    tmp15 = null;
    if (!isTryItOut) {
      if (null == purchase) {
        obj1 = { style: null, isNew: null };
        obj1[0] = tmp2.lockIcon;
        obj1[1] = isProductNewResult;
        tmp15 = callback(tmp3(8832).PremiumBadge, obj1);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
};
