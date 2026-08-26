// === Module 9568: WishlistNUXAddedItemActionSheet ===

// Module 9568 (WishlistNUXAddedItemActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY" /* 9000 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

let require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, textContainer: null, subtitle: null };
createCacheKey = { alignItems: "center", padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  require = product;
  let stateFromStores;
  let memo;
  const tmp = callback3();
  let obj = require(memo[8]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const items1 = [product];
  memo = React.useMemo(() => {
    if (product.type === product(memo[9]).CollectiblesItemType.BUNDLE) {
      let obj = { type: "bundle", items: null, previewAssets: null };
      ({ items: obj2[1], previewAssets: obj2[2] } = tmp);
      return obj;
    } else {
      const first = closure_1_3(tmp.items, 1)[0];
      let tmp5;
      if (null != first) {
        obj = { type: "single", item: null };
        obj[1] = first;
        tmp5 = obj;
      }
      return tmp5;
    }
  }, items1);
  const items2 = [stateFromStores];
  const callback = React.useCallback(() => {
    stateFromStores(memo[10]).hideActionSheet();
  }, []);
  const items3 = [memo];
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[10]);
    obj.hideAllActionSheets();
    if (null != stateFromStores) {
      obj = { userId: null, sourceAnalyticsLocations: null, initialSection: null };
      obj[0] = tmp4.id;
      const items = [tmp(tmp2[12]).COLLECTIBLES_SHOP];
      obj[1] = items;
      obj[2] = closure_1_7.WISHLIST;
      tmp(tmp2[11])(obj);
      const tmpResult = tmp(tmp2[11]);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      const obj = { collectiblesItemData: null };
      obj[0] = tmp;
      tmp2 = closure_1_8(product(memo[13]).CollectiblesPreview, obj);
    }
    return tmp2;
  }, items3);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const items4 = [callback(stateFromStores(memo[15]), { renderPreview: callback2 }), , ];
  obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header", children: null };
  const intl = require(memo[17]).intl;
  obj2[3] = intl.string(require(memo[17]).t["3T2jbf"]);
  const items5 = [callback(require(memo[16]).Text, obj2), ];
  const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = require(memo[17]).intl;
  obj3[3] = intl2.string(require(memo[17]).t.SXb73A);
  items5[1] = callback(require(memo[16]).Text, obj3);
  obj1[1] = items5;
  items4[1] = callback2(View, obj1);
  const obj4 = { direction: "horizontal", children: null };
  const obj5 = { text: null, onPress: null, size: "lg", variant: "primary", grow: true };
  const intl3 = require(memo[17]).intl;
  obj5[0] = intl3.string(require(memo[17]).t.tM4PUv);
  obj5[1] = callback;
  const items6 = [callback(require(memo[19]).Button, obj5), ];
  const obj6 = { text: null, onPress: null, variant: "secondary", size: "lg", grow: true };
  const intl4 = require(memo[17]).intl;
  obj6[0] = intl4.string(require(memo[17]).t.TxBQzD);
  obj6[1] = callback1;
  items6[1] = callback(require(memo[19]).Button, obj6);
  obj4[1] = items6;
  items4[2] = callback2(require(memo[18]).ButtonGroup, obj4);
  obj[1] = items4;
  obj[0] = callback2(View, obj);
  return callback(require(memo[14]).BottomSheet, obj);
};