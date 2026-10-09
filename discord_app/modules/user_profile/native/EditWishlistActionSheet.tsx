// === Module 13333: EditWishlistActionSheet ===

// Module 13333 (EditWishlistActionSheet)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5092 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8299 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 8968 */;
import WishlistVisibility2 from "WishlistVisibility" /* 13331 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import WishlistStore from "WishlistStore" /* 8961 */;
import UserStore from "UserStore" /* 1390 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const getWishlistProductLines = fn(8962).getWishlistProductLines;
let closure_12 = fn(8291).TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = fn(6837).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 }, loadingContainer: null, toggleRow: null, itemsContainer: null, itemWrapper: null, deleteButton: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
let obj4 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
obj2.toggleRow = { marginBottom: nativeDefault.space.PX_16 };
obj2.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 };
obj2.itemWrapper = { position: "relative" };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, zIndex: 1 };
obj2.deleteButton = rect;
let closure_16 = createStyles.createStyles(obj2);
const LinearTransition = fn(4811).LinearTransition;
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
const springifyResult = LinearTransition.springify();
const massResult = LinearTransition.springify().mass(0.8);
let closure_17 = LinearTransition.springify().mass(0.8).damping(100).stiffness(300);
function exitingAnimation() {
  const obj = { animations: null, initialValues: null };
  const obj2 = { opacity: timing.withTiming(0, { duration: 150 }), transform: null };
  const obj4 = { scale: null };
  obj4.scale = timing.withTiming(0.8, { duration: 150 });
  const items = [obj4];
  obj2.transform = items;
  obj.animations = obj2;
  const obj6 = { opacity: 1, transform: null };
  const items1 = [{ scale: 1 }];
  obj6.transform = items1;
  obj.initialValues = obj6;
  return obj;
}
const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
exitingAnimation.__closure = { withTiming: fn(5092).withTiming };
exitingAnimation.__workletHash = 17293915965800;
exitingAnimation.__initData = { code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}" };
const ReactCompilerGating = fn(558);
let obj6 = { withTiming: fn(5092).withTiming };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditWishlistActionSheet(wishlistId) {
  const cResult = wishlistId(576).c(53);
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  const analyticsLocations = wishlistId.analyticsLocations;
  let obj = wishlistId(576);
  dependencyMap = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores2];
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = W;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = closure_16();
  _slicedToArray = wishlistId(504).useStateFromStores(tmp5, W);
  const bottom = analyticsContext(1631)().bottom;
  if (cResult[2] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == null) {
      items1 = [];
    }
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[2] = analyticsLocations;
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = wishlistId(504);
  const analyticsLocations2 = analyticsContext(6848)(tmp9, tmp8(6872).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[4] = obj2;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  const tmp8Result = analyticsContext(6848);
  ({ cardWidth: closure_5, rowWidth } = analyticsContext(13051)(tmp12));
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [first];
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[5] = items2;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== wishlistId) {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
    cResult[6] = wishlistId;
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[7] = V;
  } else {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
  }
  const tmp14 = analyticsContext(13051)(tmp12);
  const stateFromStores = wishlistId(504).useStateFromStores(tmp16, V);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
    const items3 = [first];
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[8] = items3;
    const tmp20 = items3;
  } else {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
  }
  if (cResult[9] !== wishlistId) {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
    cResult[9] = wishlistId;
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[10] = tmp22;
  } else {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
  }
  const tmpResult4 = wishlistId(504);
  const stateFromStores1 = wishlistId(504).useStateFromStores(tmp20, tmp22);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
    const items4 = [UserStore, ];
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    items4[1] = UserProfileStore;
    cResult[11] = items4;
    const tmp24 = items4;
  } else {
    class V {
      constructor() {
        return closure_8.getWishlist(wishlistId);
      }
    }
  }
  if (cResult[12] !== wishlistId) {
    class X {
      constructor() {
        currentUser = closure_10.getCurrentUser();
        wishlistSettings = null;
        if (null != currentUser) {
          tmp3 = closure_11;
          tmp4 = wishlistId;
          wishlistSettings = closure_11.getWishlistSettings(currentUser.id, wishlistId);
        }
        return wishlistSettings;
      }
    }
    cResult[12] = wishlistId;
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[13] = X;
  } else {
    class X {
      constructor() {
        currentUser = closure_10.getCurrentUser();
        wishlistSettings = null;
        if (null != currentUser) {
          tmp3 = closure_11;
          tmp4 = wishlistId;
          wishlistSettings = closure_11.getWishlistSettings(currentUser.id, wishlistId);
        }
        return wishlistSettings;
      }
    }
  }
  const tmpResult5 = wishlistId(504);
  stateFromStores2 = wishlistId(504).useStateFromStores(tmp24, X);
  [first, getWishlistProductLines] = analyticsLocations2.useState(true);
  if (cResult[14] !== stateFromStores2) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
    cResult[14] = stateFromStores2;
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[15] = K;
  } else {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  if (stateFromStores2 != null) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  if (cResult[16] !== undefined) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
    tmp32[0] = tmp30;
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    cResult[17] = tmp32;
  } else {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  const effect = analyticsLocations2.useEffect(K, tmp32);
  if (stateFromStores != null) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  if (cResult[18] !== undefined) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
    if (stateFromStores != null) {
      class K {
        constructor() {
          tmp = closure_7;
          visibility = undefined;
          if (closure_7 != null) {
            visibility = tmp.visibility;
          }
          if (null != visibility) {
            tmp3 = closure_9;
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
          }
          return;
        }
      }
      const found = arr6.filter((item) => wishlistId(itemWrapper[23]).isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true }));
    }
    if (found == null) {
      class K {
        constructor() {
          tmp = closure_7;
          visibility = undefined;
          if (closure_7 != null) {
            visibility = tmp.visibility;
          }
          if (null != visibility) {
            tmp3 = closure_9;
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
          }
          return;
        }
      }
    }
    class W {
      constructor() {
        return closure_7.useReducedMotion;
      }
    }
    if (stateFromStores != null) {
      class K {
        constructor() {
          tmp = closure_7;
          visibility = undefined;
          if (closure_7 != null) {
            visibility = tmp.visibility;
          }
          if (null != visibility) {
            tmp3 = closure_9;
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
          }
          return;
        }
      }
    }
    cResult[18] = tmp36;
    cResult[19] = found;
  } else {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  if (cResult[20] === analyticsContext) {
    class K {
      constructor() {
        tmp = closure_7;
        visibility = undefined;
        if (closure_7 != null) {
          visibility = tmp.visibility;
        }
        if (null != visibility) {
          tmp3 = closure_9;
          tmp4 = closure_0;
          tmp5 = closure_2;
          tmp6 = closure_9(tmp.visibility === closure_0(closure_2[22]).WishlistVisibility.PUBLIC);
        }
        return;
      }
    }
  }
  function si() {
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    closure_9(!first);
    const result = WishlistActionCreatorsDefault.updateWishlistVisibility(wishlistId, first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC);
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    const obj3 = {};
    const merged = Object.assign(analyticsContext);
    obj3.analyticsLocations = analyticsLocations2;
    obj3.wishlistId = wishlistId;
    obj3.action = first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC;
    let tmp8;
    if (null != stateFromStores) {
      tmp8 = getWishlistProductLines(tmp7);
    }
    obj3.productLines = tmp8;
    const result1 = UserProfileAnalyticsUtils.trackUserProfileWishlistAction(obj3);
  }
  cResult[20] = analyticsContext;
  cResult[21] = analyticsLocations2;
  cResult[22] = first;
  cResult[23] = stateFromStores;
  cResult[24] = wishlistId;
  cResult[25] = si;
  const tmpResult6 = wishlistId(504);
}) : (function EditWishlistActionSheet(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations1 = wishlistId.analyticsLocations;
  let analyticsLocations;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  value = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp = closure_16();
  dependencyMap = tmp;
  let items = [stateFromStores2];
  _slicedToArray = wishlistId(504).useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj = wishlistId(504);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = analyticsContext(6848)(analyticsLocations1, tmp4(6872).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp5 = analyticsContext(6848);
  ({ cardWidth: c5, rowWidth } = analyticsContext(13051)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
    let tmp7 = obj3;
  }
  let tmp6 = analyticsContext(13051)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
  const items1 = [value];
  stateFromStores = wishlistId(504).useStateFromStores(items1, () => WishlistStore.getWishlist(wishlistId));
  const tmp2Result = wishlistId(504);
  const items2 = [value];
  const stateFromStores1 = wishlistId(504).useStateFromStores(items2, () => WishlistStore.isFetching(wishlistId));
  const tmp2Result3 = wishlistId(504);
  const items3 = [closure_10, UserProfileStore];
  stateFromStores2 = wishlistId(504).useStateFromStores(items3, () => {
    const currentUser = UserStore.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  [value, closure_9] = analyticsLocations.useState(true);
  let visibility;
  if (stateFromStores2 != null) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = analyticsLocations.useEffect(() => {
    let visibility;
    if (stateFromStores2 != null) {
      visibility = stateFromStores2.visibility;
    }
    if (null != visibility) {
      closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
    }
  }, items4);
  const items5 = [stateFromStores];
  const memo = obj7.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => wishlistId(itemWrapper[23]).isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true }));
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [wishlistId, value, stateFromStores, analyticsContext, analyticsLocations];
  const items7 = [wishlistId, analyticsLocations];
  const callback = obj7.useCallback(() => {
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    closure_9(!first);
    const result = WishlistActionCreatorsDefault.updateWishlistVisibility(wishlistId, first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC);
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    const obj3 = {};
    const merged = Object.assign(analyticsContext);
    obj3.analyticsLocations = analyticsLocations;
    obj3.wishlistId = wishlistId;
    obj3.action = first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC;
    let tmp8;
    if (null != stateFromStores) {
      tmp8 = getWishlistProductLines(tmp7);
    }
    obj3.productLines = tmp8;
    const result1 = UserProfileAnalyticsUtils.trackUserProfileWishlistAction(obj3);
  }, items6);
  closure_10 = obj7.useCallback((skuId) => {
    const result = WishlistActionCreatorsDefault.removeSkuFromWishlist(wishlistId, skuId, analyticsLocations);
  }, items7);
  let obj4 = { scrollable: true, startExpanded: true, title: null, children: null };
  const tmp2Result4 = wishlistId(504);
  let intl = tmp2(1126).intl;
  obj4.title = intl.string(wishlistId(1126).t["OEgx/4"]);
  let obj5 = { contentContainerStyle: { paddingBottom: analyticsContext(1631)().bottom }, children: null };
  let obj6 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.toggleRow, children: null };
  const obj9 = { hasIcons: false, children: null };
  const obj10 = { label: null, subLabel: null, value: null, onValueChange: null };
  let intl2 = tmp2(1126).intl;
  obj10.label = intl2.string(wishlistId(1126).t.b2nFyA);
  const intl3 = tmp2(1126).intl;
  obj10.subLabel = intl3.string(wishlistId(1126).t.dw58pE);
  obj10.value = value;
  obj10.onValueChange = callback;
  obj9.children = closure_14(wishlistId(6889).TableSwitchRow, obj10);
  obj8.children = closure_14(wishlistId(6269).TableRowGroup, obj9);
  const items8 = [closure_14(stateFromStores, obj8), ];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      let obj11 = { style: tmp.loadingContainer, children: closure_14(c5, {}) };
      let tmp16Result = closure_14(tmp19, obj11);
    }
    items8[1] = tmp16Result;
    obj6.children = items8;
    obj5.children = closure_15(tmp19, obj6);
    obj4.children = closure_14(tmp2(6305).BottomSheetScrollView, obj5);
    return closure_14(tmp4Result, obj4);
  }
  tmp16Result = null;
  if (0 !== memo.length) {
    const obj12 = { style: null, children: null };
    const items9 = [tmp.itemsContainer, tmp7];
    obj12.style = items9;
    obj12.children = memo.map((sku) => {
      let skuId = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let str = itemWrapper;
        const obj = { style: itemWrapper.itemWrapper, exiting: null, layout: null, children: null };
        let tmp6;
        if (!closure_3) {
          tmp6 = exitingAnimation;
        }
        obj.exiting = tmp6;
        let tmp7;
        if (!closure_3) {
          tmp7 = closure_1_17;
        }
        obj.layout = tmp7;
        const obj3 = { sku: null, isOwned: null, size: null, accessibilityHidden: true };
        ({ sku: obj2.sku, isOwned: obj2.isOwned } = skuId);
        obj3.size = size;
        const items = [closure_1_14(analyticsContext(str[32]), obj3), ];
        let obj4 = { style: itemWrapper.deleteButton, children: null };
        let stringResult = wishlistId;
        let obj5 = { variant: "primary-overlay", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
        const obj6 = { size: "sm", color: analyticsContext(str[12]).colors.ICON_FEEDBACK_CRITICAL };
        obj5.icon = closure_1_14(wishlistId(str[34]).TrashIcon, obj6);
        obj5.onPress = function onPress() {
          return closure_10(sku.skuId);
        };
        const intl = wishlistId(str[27]).intl;
        const obj11 = { productName: skuId.skuName };
        const formatToPlainStringResult = intl.formatToPlainString(wishlistId(str[27]).t["IBBF8/"], obj11);
        if (skuId.isOwned) {
          const intl2 = stringResult(str[27]).intl;
          stringResult = intl2.string(stringResult(str[27]).t["6cfuDj"]);
          const _HermesInternal = HermesInternal;
          str = "";
          let combined = "" + formatToPlainStringResult + ", " + stringResult;
        } else {
          combined = formatToPlainStringResult;
        }
        obj5.accessibilityLabel = combined;
        obj5 = closure_1_14(wishlistId(str[33]).IconButton, obj5);
        obj4.children = obj5;
        obj4 = closure_1_14(stateFromStores, obj4);
        items[1] = obj4;
        obj.children = items;
        skuId = skuId.skuId;
        closure_1_15(analyticsContext(itemWrapper[31]), obj, skuId);
        const tmp3 = analyticsContext(itemWrapper[31]);
      }
    });
    tmp16Result = closure_14(tmp19, obj12);
  }
  tmp4Result = analyticsContext(10495);
});