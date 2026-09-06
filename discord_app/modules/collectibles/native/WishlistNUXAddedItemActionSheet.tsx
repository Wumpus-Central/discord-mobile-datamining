// === Module 8771: WishlistNUXAddedItemActionSheet ===

// Module 8771 (WishlistNUXAddedItemActionSheet)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SKUPreview from "SKUPreview" /* 8772 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8183).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null, subtitle: null };
createStyles = { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.textContainer = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles.subtitle = { textAlign: "center" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  require = product;
  let memo;
  const tmp = closure_10();
  let obj = require("initialize");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const items1 = [product];
  memo = noop.useMemo(() => {
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      let obj = { type: "bundle", items: null, previewAssets: null };
      ({ items: obj2.items, previewAssets: obj2.previewAssets } = tmp);
      return obj;
    } else {
      const first = _slicedToArray(tmp.items, 1)[0];
      let tmp5;
      if (null != first) {
        obj = { type: "single", item: first };
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
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (null != stateFromStores) {
      obj = { userId: tmp4.id, sourceAnalyticsLocations: null, initialSection: null };
      const items = [tmp(7182).COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = UserProfileSections.WISHLIST;
      tmp(8179)(obj);
      const tmpResult = tmp(8179);
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
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const items4 = [closure_8(stateFromStores(memo[15]), { renderPreview: callback2 }), , ];
  const obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t["3T2jbf"]);
  const items5 = [closure_8(require("Text/Text").Text, obj2), ];
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t.SXb73A);
  items5[1] = closure_8(require("Text/Text").Text, obj3);
  obj1.children = items5;
  items4[1] = closure_9(View, obj1);
  const obj4 = { direction: "horizontal", children: null };
  const obj5 = { text: null, onPress: null, size: "lg", variant: "primary", grow: true };
  const intl3 = require("util").intl;
  obj5.text = intl3.string(require("util").t.tM4PUv);
  obj5.onPress = callback;
  const items6 = [closure_8(require("components/Button/Button").Button, obj5), ];
  const obj6 = { text: null, onPress: null, variant: "secondary", size: "lg", grow: true };
  const intl4 = require("util").intl;
  obj6.text = intl4.string(require("util").t.TxBQzD);
  obj6.onPress = callback1;
  items6[1] = closure_8(require("components/Button/Button").Button, obj6);
  obj4.children = items6;
  items4[2] = closure_9(require("ButtonGroup").ButtonGroup, obj4);
  obj.children = items4;
  obj.children = closure_9(View, obj);
  return closure_8(require("Sheet/BottomSheet").BottomSheet, obj);
};