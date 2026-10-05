// === Module 12942: EditWishlistActionSheet ===

// Module 12942 (EditWishlistActionSheet)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import Constants from "Constants" /* 7854 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7862 */;
import WishlistRecord from "WishlistRecord" /* 8432 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 8438 */;
import WishlistVisibility2 from "WishlistVisibility" /* 12940 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import WishlistStore from "WishlistStore" /* 8431 */;
import UserStore from "UserStore" /* 1377 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, wishlistId;

let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const getWishlistProductLines = WishlistRecord.getWishlistProductLines;
let closure_12 = Constants.TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingContainer: obj3, toggleRow: obj4, itemsContainer: { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 }, itemWrapper: { position: "relative" }, deleteButton: rect };
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, zIndex: 1 };
let closure_16 = createStyles(obj);
const LinearTransition = ReanimatedRexport.LinearTransition;
const springifyResult = LinearTransition.springify();
const massResult = springifyResult.mass(0.8);
const dampingResult = massResult.damping(100);
let closure_17 = dampingResult.stiffness(300);
function exitingAnimation() {
  let items;
  let items1;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: obj2, initialValues: obj6 };
  obj2 = { opacity: obj3.withTiming(0, { duration: 150 }), transform: items };
  obj3 = timing;
  const obj4 = { scale: obj5.withTiming(0.8, { duration: 150 }) };
  items = [obj4];
  obj6 = { opacity: 1, transform: items1 };
  items1 = [{ scale: 1 }];
  obj5 = timing;
  return obj;
}
let obj5 = { withTiming: timing.withTiming };
exitingAnimation.__closure = obj5;
exitingAnimation.__workletHash = 17293915965800;
exitingAnimation.__initData = { code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistId) => {
  let closure_3;
  let closure_5;
  let closure_9;
  let first;
  let itemWrapper;
  let rowWidth;
  let stateFromStores2;
  let tmp12;
  let tmp16;
  let tmp20;
  let tmp24;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = wishlistId;
  let tmp2 = dependencyMap;
  let obj = wishlistId(576);
  const cResult = obj.c(53);
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  const analyticsLocations = wishlistId.analyticsLocations;
  dependencyMap = closure_16();
  closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores2];
    const fn = function w() {
      return stateFromStores2.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  _slicedToArray = tmpResult.useStateFromStores(tmp5, tmp6);
  let tmp8 = analyticsContext;
  const bottom = analyticsContext(1618)().bottom;
  if (cResult[2] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == null) {
      items1 = [];
    }
    cResult[2] = analyticsLocations;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  const tmp8Result = tmp8(6657);
  const analyticsLocations2 = tmp8Result(tmp9, tmp8(6681).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    cResult[4] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[4];
  }
  ({ cardWidth: closure_5, rowWidth } = tmp8(12805)(tmp12));
  tmp8(12805)(tmp12);
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [first];
    cResult[5] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== wishlistId) {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
    cResult[6] = wishlistId;
    cResult[7] = V;
  } else {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
  }
  const tmpResult4 = tmp(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp16, V);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
    const items3 = [first];
    cResult[8] = items3;
    tmp20 = items3;
  } else {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
  }
  if (cResult[9] !== wishlistId) {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
    cResult[9] = wishlistId;
    cResult[10] = tmp22;
  } else {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
  }
  const tmpResult5 = tmp(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp20, tmp22);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
    const items4 = [UserStore, UserProfileStore];
    cResult[11] = items4;
    tmp24 = items4;
  } else {
    class V {
      constructor() {
        return WishlistStore.getWishlist(wishlistId);
      }
    }
  }
  if (cResult[12] !== wishlistId) {
    class X {
      constructor() {
        const currentUser = UserStore.getCurrentUser();
        let wishlistSettings = null;
        if (null != currentUser) {
          wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
        }
        return wishlistSettings;
      }
    }
    cResult[12] = wishlistId;
    cResult[13] = X;
  } else {
    class X {
      constructor() {
        const currentUser = UserStore.getCurrentUser();
        let wishlistSettings = null;
        if (null != currentUser) {
          wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
        }
        return wishlistSettings;
      }
    }
  }
  const tmpResult6 = tmp(504);
  stateFromStores2 = tmpResult6.useStateFromStores(tmp24, X);
  [first, getWishlistProductLines] = analyticsLocations2.useState(true);
  const obj8 = analyticsLocations2;
  if (cResult[14] !== stateFromStores2) {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
    cResult[14] = stateFromStores2;
    cResult[15] = K;
  } else {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  if (stateFromStores2 != null) {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  if (cResult[16] !== undefined) {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
    tmp33[0] = undefined;
    cResult[16] = undefined;
    cResult[17] = tmp33;
  } else {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  const effect = obj8.useEffect(K, tmp33);
  const tmp35 = cResult[18];
  if (stateFromStores != null) {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  if (tmp35 !== undefined) {
    let found;
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
    if (stateFromStores != null) {
      class K {
        constructor() {
          let visibility;
          if (stateFromStores2 != null) {
            visibility = stateFromStores2.visibility;
          }
          if (null != visibility) {
            closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
          }
        }
      }
      found = arr6.filter((item) => {
        const obj = wishlistId(itemWrapper[23]);
        return obj.isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true });
      });
    }
    if (found == null) {
      class K {
        constructor() {
          let visibility;
          if (stateFromStores2 != null) {
            visibility = stateFromStores2.visibility;
          }
          if (null != visibility) {
            closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
          }
        }
      }
    }
    if (stateFromStores != null) {
      class K {
        constructor() {
          let visibility;
          if (stateFromStores2 != null) {
            visibility = stateFromStores2.visibility;
          }
          if (null != visibility) {
            closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
          }
        }
      }
    }
    cResult[18] = undefined;
    cResult[19] = found;
  } else {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  if (cResult[20] === analyticsContext) {
    class K {
      constructor() {
        let visibility;
        if (stateFromStores2 != null) {
          visibility = stateFromStores2.visibility;
        }
        if (null != visibility) {
          closure_9(stateFromStores2.visibility === WishlistVisibility2.WishlistVisibility.PUBLIC);
        }
      }
    }
  }
  function si() {
    let tmp9;
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    closure_9(!first);
    const obj = WishlistActionCreatorsDefault;
    const result = obj.updateWishlistVisibility(wishlistId, tmp2);
    const obj2 = { analyticsLocations: analyticsLocations2, wishlistId, action: first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC, productLines: tmp9 };
    const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
    UserProfileAnalyticsUtils;
    const merged = Object.assign(analyticsContext);
    tmp9 = undefined;
    if (null != stateFromStores) {
      tmp9 = getWishlistProductLines(tmp8);
    }
    const result1 = trackUserProfileWishlistAction(obj2);
  }
  cResult[20] = analyticsContext;
  cResult[21] = analyticsLocations2;
  cResult[22] = first;
  cResult[23] = stateFromStores;
  cResult[24] = wishlistId;
  cResult[25] = si;
}) : ((wishlistId) => {
  let TableRowGroup;
  let TableSwitchRow;
  let c5;
  let closure_3;
  let closure_9;
  let intl;
  let intl2;
  let intl3;
  let itemWrapper;
  let items9;
  let obj10;
  let obj9;
  let rowWidth;
  let tmp16Result;
  let tmp7;
  let value;
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations1 = wishlistId.analyticsLocations;
  let analyticsLocations;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  value = undefined;
  closure_9 = undefined;
  let closure_10;
  let tmp = closure_16();
  dependencyMap = tmp;
  let tmp2 = wishlistId;
  let obj = wishlistId(504);
  let items = [stateFromStores2];
  _slicedToArray = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  const bottom = analyticsContext(1618)().bottom;
  let tmp5 = analyticsContext(6657);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp5(analyticsLocations1, tmp4(6681).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET).analyticsLocations;
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c5, rowWidth } = tmp4(12805)(obj2));
  const tmp6 = tmp4(12805)(obj2);
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
    tmp7 = obj3;
  }
  const items1 = [value];
  const tmp2Result = tmp2(504);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => WishlistStore.getWishlist(wishlistId));
  const items2 = [value];
  const tmp2Result3 = tmp2(504);
  const stateFromStores1 = tmp2Result3.useStateFromStores(items2, () => WishlistStore.isFetching(wishlistId));
  const items3 = [closure_10, UserProfileStore];
  const tmp2Result4 = tmp2(504);
  stateFromStores2 = tmp2Result4.useStateFromStores(items3, () => {
    const currentUser = UserStore.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  [value, closure_9] = analyticsLocations.useState(true);
  let visibility;
  const useEffect = analyticsLocations.useEffect;
  if (stateFromStores2 != null) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = useEffect(() => {
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
      found = items.filter((item) => {
        const obj = wishlistId(itemWrapper[23]);
        return obj.isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true });
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [wishlistId, value, stateFromStores, analyticsContext, analyticsLocations];
  const items7 = [wishlistId, analyticsLocations];
  const callback = obj7.useCallback(() => {
    let tmp9;
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
    closure_9(!first);
    const obj = WishlistActionCreatorsDefault;
    const result = obj.updateWishlistVisibility(wishlistId, tmp2);
    const obj2 = { analyticsLocations, wishlistId, action: first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC, productLines: tmp9 };
    const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
    UserProfileAnalyticsUtils;
    const merged = Object.assign(analyticsContext);
    tmp9 = undefined;
    if (null != stateFromStores) {
      tmp9 = getWishlistProductLines(tmp8);
    }
    const result1 = trackUserProfileWishlistAction(obj2);
  }, items6);
  closure_10 = obj7.useCallback((skuId) => {
    const obj = WishlistActionCreatorsDefault;
    const result = obj.removeSkuFromWishlist(wishlistId, skuId, analyticsLocations);
  }, items7);
  let obj4 = { scrollable: true, startExpanded: true, title: intl.string(tmp2(1126).t["OEgx/4"]), children: null };
  const tmp4Result = analyticsContext(10841);
  intl = tmp2(1126).intl;
  let obj5 = { contentContainerStyle: { paddingBottom: bottom }, children: null };
  let obj6 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.toggleRow, children: closure_14(TableRowGroup, obj9) };
  const BottomSheetScrollView = tmp2(6112).BottomSheetScrollView;
  obj9 = { hasIcons: false, children: closure_14(TableSwitchRow, obj10) };
  TableRowGroup = tmp2(6074).TableRowGroup;
  obj10 = { label: intl2.string(tmp2(1126).t.b2nFyA), subLabel: intl3.string(tmp2(1126).t.dw58pE), value, onValueChange: callback };
  TableSwitchRow = tmp2(6698).TableSwitchRow;
  intl2 = tmp2(1126).intl;
  intl3 = tmp2(1126).intl;
  const items8 = [closure_14(stateFromStores, obj8), ];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      let obj11 = { style: tmp.loadingContainer, children: closure_14(c5, {}) };
      tmp16Result = closure_14(tmp19, obj11);
    }
    items8[1] = tmp16Result;
    obj6.children = items8;
    obj5.children = closure_15(stateFromStores, obj6);
    obj4.children = closure_14(BottomSheetScrollView, obj5);
    return closure_14(tmp4Result, obj4);
  }
  tmp16Result = null;
  if (0 !== memo.length) {
    const obj12 = {
      style: items9,
      children: memo.map((sku) => {
          let IconButton;
          let TrashIcon;
          let combined;
          let items;
          let obj5;
          let obj6;
          let tmp8;
          let tmp9;
          let tmp = null;
          if (null != sku.sku) {
            const obj = { style: itemWrapper.itemWrapper, exiting: tmp8, layout: tmp9, children: items };
            tmp8 = undefined;
            const tmp5 = analyticsContext(itemWrapper[31]);
            if (!closure_3) {
              tmp8 = exitingAnimation;
            }
            tmp9 = undefined;
            if (!closure_3) {
              tmp9 = closure_1_17;
            }
            const obj3 = { sku: null, isOwned: null, size, accessibilityHidden: true };
            ({ sku: obj2.sku, isOwned: obj2.isOwned } = sku);
            items = [closure_1_14(analyticsContext(itemWrapper[32]), obj3), ];
            const obj4 = { style: itemWrapper.deleteButton, children: closure_1_14(IconButton, obj5) };
            obj5 = {
              variant: "primary-overlay",
              size: "sm",
              icon: closure_1_14(TrashIcon, obj6),
              onPress() {
                  return closure_10(sku.skuId);
                },
              accessibilityLabel: combined
            };
            IconButton = wishlistId(itemWrapper[33]).IconButton;
            obj6 = { size: "sm", color: analyticsContext(itemWrapper[12]).colors.ICON_FEEDBACK_CRITICAL };
            TrashIcon = wishlistId(itemWrapper[34]).TrashIcon;
            const isOwned = sku.isOwned;
            const intl = wishlistId(itemWrapper[27]).intl;
            const obj11 = { productName: sku.skuName };
            const formatToPlainStringResult = intl.formatToPlainString(wishlistId(itemWrapper[27]).t["IBBF8/"], obj11);
            if (isOwned) {
              const intl2 = wishlistId(itemWrapper[27]).intl;
              const _HermesInternal = HermesInternal;
              combined = "" + formatToPlainStringResult + ", " + intl2.string(wishlistId(itemWrapper[27]).t["6cfuDj"]);
            } else {
              combined = formatToPlainStringResult;
            }
            items[1] = closure_1_14(stateFromStores, obj4);
            tmp = closure_1_15(tmp5, obj, sku.skuId);
          }
          return tmp;
        })
    };
    items9 = [tmp.itemsContainer, tmp7];
    tmp16Result = closure_14(tmp19, obj12);
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default tmp5;