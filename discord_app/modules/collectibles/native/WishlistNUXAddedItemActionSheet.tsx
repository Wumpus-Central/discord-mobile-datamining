// === Module 9050: WishlistNUXAddedItemActionSheet ===

// Module 9050 (WishlistNUXAddedItemActionSheet)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7422 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8447 */;
import SKUPreview from "SKUPreview" /* 9051 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8451).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, textContainer: null, subtitle: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.subtitle = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  require = product;
  let memo;
  const tmp = closure_10();
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const items1 = [product];
  memo = noop.useMemo(() => {
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      ({ items: obj2.items, previewAssets: obj2.previewAssets } = product);
      return { type: "bundle", items: null, previewAssets: null };
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let tmp5;
      if (null != first) {
        const obj = { type: "single", item: first };
        tmp5 = obj;
      }
      return tmp5;
    }
  }, items1);
  const items2 = [stateFromStores];
  const callback = noop.useCallback(() => {
    stateFromStores(memo[10]).hideActionSheet();
  }, []);
  const items3 = [memo];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (null != stateFromStores) {
      const obj2 = { userId: tmp4.id, sourceAnalyticsLocations: null, initialSection: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj2.sourceAnalyticsLocations = items;
      obj2.initialSection = UserProfileSections.WISHLIST;
      showUserProfileActionSheetDefault(obj2);
      const tmpResult = showUserProfileActionSheetDefault;
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: tmp };
      tmp2 = React6(SKUPreview.CollectiblesPreview, obj);
    }
    return tmp2;
  }, items3);
  let obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const items4 = [closure_8(stateFromStores(memo[15]), { renderPreview: callback2 }), , ];
  const obj4 = { style: tmp.textContainer, children: null };
  const obj5 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header", children: null };
  const intl = require("util").intl;
  obj5.children = intl.string(require("util").t["3T2jbf"]);
  const items5 = [closure_8(require("Text/Text").Text, obj5), ];
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t.SXb73A);
  items5[1] = closure_8(require("Text/Text").Text, obj6);
  obj4.children = items5;
  items4[1] = closure_9(View, obj4);
  const obj7 = { direction: "horizontal", children: null };
  const obj8 = { text: null, onPress: null, size: "lg", variant: "primary", grow: true };
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t.tM4PUv);
  obj8.onPress = callback;
  const items6 = [closure_8(require("components/Button/Button").Button, obj8), ];
  const obj9 = { text: null, onPress: null, variant: "secondary", size: "lg", grow: true };
  const intl4 = require("util").intl;
  obj9.text = intl4.string(require("util").t.TxBQzD);
  obj9.onPress = callback1;
  items6[1] = closure_8(require("components/Button/Button").Button, obj9);
  obj7.children = items6;
  items4[2] = closure_9(require("ButtonGroup").ButtonGroup, obj7);
  obj3.children = items4;
  obj2.children = closure_9(View, obj3);
  return closure_8(require("Sheet/BottomSheet").BottomSheet, obj2);
};