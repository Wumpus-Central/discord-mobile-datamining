// === Module 8955: WishlistNUXAddedItemActionSheet ===

// Module 8955 (WishlistNUXAddedItemActionSheet)
import nativeDefault from "native" /* 587 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import SKUPreview from "SKUPreview" /* 8956 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8957 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8291).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, textContainer: null, subtitle: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.textContainer = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.subtitle = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WishlistNUXAddedItemActionSheet(product) {
  const cResult = stateFromStores(576).c(31);
  product = product.product;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function b() {
      return currentUser.getCurrentUser();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = fn;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6, tmp7);
  if (product.type !== stateFromStores(1993).CollectiblesItemType.BUNDLE) {
    const first = _slicedToArray(product.items, 1)[0];
    if (cResult[6] !== first) {
      let tmp15;
      if (null != first) {
        let obj2 = { type: "single", item: first };
        tmp15 = obj2;
      }
      cResult[6] = first;
      cResult[7] = tmp15;
    }
  } else {
    if (cResult[3] === product.items) {
      if (cResult[4] === product.previewAssets) {
        let tmp10 = cResult[5];
      }
      importDefault = tmp10;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            obj = closure_1(closure_1_2[12]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        cResult[8] = P;
      } else {
        class P {
          constructor() {
            obj = closure_1(closure_1_2[12]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class B {
          constructor() {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[12]);
            hideAllActionSheetsResult = obj.hideAllActionSheets();
            if (null != closure_0) {
              obj1 = { userId: null, sourceAnalyticsLocations: null, initialSection: null };
              obj1.userId = tmp4.id;
              tmpResult = tmp(tmp2[13]);
              items = [];
              items[0] = tmp(tmp2[14]).COLLECTIBLES_SHOP;
              obj1.sourceAnalyticsLocations = items;
              tmp6 = UserProfileSections;
              obj1.initialSection = UserProfileSections.WISHLIST;
              tmp5Result = tmpResult(obj1);
            }
            return;
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = B;
      } else {
        class B {
          constructor() {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[12]);
            hideAllActionSheetsResult = obj.hideAllActionSheets();
            if (null != closure_0) {
              obj1 = { userId: null, sourceAnalyticsLocations: null, initialSection: null };
              obj1.userId = tmp4.id;
              tmpResult = tmp(tmp2[13]);
              items = [];
              items[0] = tmp(tmp2[14]).COLLECTIBLES_SHOP;
              obj1.sourceAnalyticsLocations = items;
              tmp6 = UserProfileSections;
              obj1.initialSection = UserProfileSections.WISHLIST;
              tmp5Result = tmpResult(obj1);
            }
            return;
          }
        }
      }
      if (cResult[11] !== tmp10) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        cResult[11] = tmp10;
        cResult[12] = L;
      } else {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[13] !== L) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj4 = { renderPreview: L };
        const tmp22 = closure_8(WishlistItemCardBaseDefault, obj4);
        cResult[13] = L;
        cResult[14] = tmp22;
      } else {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj5 = { variant: "heading-lg/extrabold", color: "text-strong", accessibilityRole: "header", children: null };
        const intl = tmp(1126).intl;
        obj5.children = intl.string(tmp(1126).t["3T2jbf"]);
        const tmp24 = closure_8(tmp(5087).Text, obj5);
        cResult[15] = tmp24;
        const tmp23 = tmp24;
      } else {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const stringResult = obj7.string(tmp(1126).t.SXb73A);
        cResult[16] = stringResult;
        const tmp25 = stringResult;
      } else {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[17] !== tmp4.subtitle) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp25 };
        const tmp28 = closure_8(tmp(5087).Text, obj6);
        cResult[17] = tmp4.subtitle;
        cResult[18] = tmp28;
      } else {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[19] === tmp4.textContainer) {
        class L {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = jsx;
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = { collectiblesItemData: null };
              obj.collectiblesItemData = tmp;
              tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const obj8 = { text: null, onPress: null, size: "lg", variant: "primary", grow: true };
          const intl2 = tmp(1126).intl;
          obj8.text = intl2.string(tmp(1126).t.tM4PUv);
          obj8.onPress = P;
          const tmp34 = closure_8(tmp(5376).Button, obj8);
          cResult[22] = tmp34;
          const tmp33 = tmp34;
        } else {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const stringResult1 = obj11.string(tmp(1126).t.TxBQzD);
          cResult[23] = stringResult1;
          const tmp35 = stringResult1;
        } else {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[24] !== B) {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const obj9 = { direction: "horizontal", children: null };
          const items2 = [tmp33, ];
          const obj10 = { text: tmp35, onPress: B, variant: "secondary", size: "lg", grow: true };
          items2[1] = closure_8(tmp(5376).Button, obj10);
          obj9.children = items2;
          const tmp39 = closure_9(tmp(5965).ButtonGroup, obj9);
          cResult[24] = B;
          cResult[25] = tmp39;
        } else {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[26] === tmp4.container) {
          class L {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = jsx;
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = { collectiblesItemData: null };
                obj.collectiblesItemData = tmp;
                tmp2 = jsx(closure_0(closure_2[15]).CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        const obj12 = { children: null };
        const obj13 = { style: tmp4.container, children: null };
        const items3 = [tmp20, tmp29, tmp37];
        obj13.children = items3;
        obj12.children = closure_9(View, obj13);
        const tmp44 = closure_8(tmp(6836).BottomSheet, obj12);
        cResult[26] = tmp4.container;
        cResult[27] = tmp29;
        cResult[28] = tmp37;
        cResult[29] = tmp20;
        cResult[30] = tmp44;
      }
      const obj14 = { style: tmp4.textContainer, children: null };
      const items4 = [tmp23, tmp27];
      obj14.children = items4;
      const tmp32 = closure_9(View, obj14);
      cResult[19] = tmp4.textContainer;
      cResult[20] = tmp27;
      cResult[21] = tmp32;
    }
    const obj15 = { type: "bundle", items: null, previewAssets: null };
    ({ items: obj3.items, previewAssets: obj3.previewAssets } = product);
    cResult[3] = product.items;
    cResult[4] = product.previewAssets;
    cResult[5] = obj15;
    tmp10 = obj15;
  }
  let tmpResult = stateFromStores(504);
}) : (function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  const require = product;
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
    stateFromStores(memo[12]).hideActionSheet();
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
      tmp2 = closure_2_8(SKUPreview.CollectiblesPreview, obj);
    }
    return tmp2;
  }, items3);
  let obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const items4 = [closure_8(stateFromStores(memo[16]), { renderPreview: callback2 }), , ];
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
});