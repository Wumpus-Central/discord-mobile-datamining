// discord_app/modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx
import initialize from "initialize";
import { View } from "registerAsset";
import mergeGuildAvatar from "mergeGuildAvatar";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import jsxProd from "useCollectiblesData";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
class EditCollectibleListItem {
  constructor(arg0) {
    ({ size, isSelected, onPress, accessibilityRole } = global);
    ({ children, style, onLongPress, accessibilityLabel } = global);
    if (accessibilityRole === undefined) {
      accessibilityRole = "button";
    }
    tmp = jsxs();
    tmp2 = jsx;
    obj = {
      style: tmp.pressable,
      disabled: isSelected,
      onPress() {
            const result = outer1_0(outer1_2[8]).triggerHapticFeedback(outer1_1(outer1_2[9]).IMPACT_LIGHT);
            callback();
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
    obj[7] = tmp2(tmp3, { style: items, children });
    return tmp2(require("PressableBase").PressableOpacity, obj);
  }
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { pressable: null, item: null, selected: null, optionCell: null, optionCellText: null, newIcon: null, lockIcon: null };
createCacheKey = { marginTop: 10, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderWidth: 2, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let obj1 = { borderWidth: 2, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { borderColor: require("Themes").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
createCacheKey[3] = { justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { marginTop: 4 };
createCacheKey[5] = { position: "absolute", top: -12, right: 5 };
createCacheKey[6] = { position: "absolute", top: -12, right: -10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderColor: require("Themes").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx");

export { EditCollectibleListItem };
export const EditCollectiblesListItemNone = function EditCollectiblesListItemNone(asDefault) {
  const tmp = createCacheKey();
  let obj = { style: tmp.optionCell };
  const merged = Object.assign(asDefault);
  obj = { source: null, size: null };
  obj[0] = importDefault(7969);
  obj[1] = require(1297) /* Button */.IconSizes.LARGE;
  const items = [callback(require(1297) /* Button */.Icon, obj), ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.optionCellText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (asDefault.asDefault) {
    let stringResult = string(t.CHf9iJ);
  } else {
    stringResult = string(t.PoWNfe);
  }
  obj[3] = stringResult;
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj.children = items;
  return closure_8(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemShop = function EditCollectiblesListItemShop(analyticsSource) {
  analyticsSource = analyticsSource.analyticsSource;
  const merged = Object.assign(analyticsSource, Object.create(null));
  let analyticsLocations;
  const tmp2 = createCacheKey();
  analyticsLocations = analyticsLocations(5519)(analyticsSource).analyticsLocations;
  const items = [analyticsLocations, analyticsSource];
  let obj = {
    style: tmp2.optionCell,
    isSelected: false,
    onPress: React.useCallback(() => {
      let obj = analyticsSource(outer1_2[15]);
      obj = { analyticsLocations, analyticsSource, screen: outer1_6.FEATURED_PAGE };
      const result = obj.openCollectiblesShopMobile(obj);
      analyticsLocations(outer1_2[16]).hideActionSheet();
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj = { source: null, size: null };
  obj[0] = analyticsLocations(7970);
  obj[1] = analyticsSource(1297).IconSizes.LARGE;
  const items1 = [callback(analyticsSource(1297).Icon, obj), , ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp2.optionCellText, children: null };
  const intl = analyticsSource(1236).intl;
  obj[3] = intl.string(analyticsSource(1236).t.pWG4ze);
  items1[1] = callback(analyticsSource(4189).Text, obj);
  items1[2] = callback(analyticsSource(7971).NewBadge, { style: tmp2.newIcon });
  obj.children = items1;
  return callback2(EditCollectibleListItem, obj);
};
export const EditCollectiblesListItemProduct = function EditCollectiblesListItemProduct(skuId) {
  let children;
  let isSelected;
  let isTryItOut;
  let product;
  let purchase;
  skuId = skuId.skuId;
  ({ isSelected, isTryItOut, children } = skuId);
  const merged = Object.assign(skuId, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(3839);
  const canUseCollectiblesResult = obj1.canUseCollectibles(stateFromStores);
  ({ purchase, product } = importDefault(7959)(skuId));
  const tmp7 = importDefault(7959)(skuId);
  const isProductNewResult = require(5815) /* getItemRecordsFromPurchases */.isProductNew(skuId);
  const obj3 = require(5815) /* getItemRecordsFromPurchases */;
  let result = require(5815) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp3(5815).isPremiumCollectiblesPurchase(purchase);
    const tmp3Result = tmp3(5815);
  }
  obj = { isSelected };
  const merged1 = Object.assign(merged);
  const items1 = [children, ];
  if (null == purchase) {
    if (!result) {
      obj = { style: null, isNew: null };
      obj[0] = tmp2.lockIcon;
      obj[1] = isProductNewResult;
      let tmp14 = callback(tmp3(7971).LockBadge, obj);
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
        tmp15 = callback(tmp3(7971).PremiumBadge, obj1);
      } else {
        tmp15 = null;
      }
    }
  }
  tmp14 = tmp15;
};