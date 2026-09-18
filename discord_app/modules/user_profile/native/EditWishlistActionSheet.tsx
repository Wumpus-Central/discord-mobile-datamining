// discord_app/modules/user_profile/native/EditWishlistActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import WishlistActionCreatorsDefault from "../../wishlists/WishlistActionCreators.tsx";
import WishlistVisibility2 from "../../../../discord_common/js/shared/shared-constants/WishlistVisibility.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const getWishlistProductLines = fn(9018).getWishlistProductLines;
let closure_12 = fn(8413).TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = fn(7347).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 },
  loadingContainer: null,
  toggleRow: null,
  itemsContainer: null,
  itemWrapper: null,
  deleteButton: null,
};
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.loadingContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_48,
};
let obj4 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
obj2.toggleRow = { marginBottom: nativeDefault.space.PX_16 };
obj2.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 };
obj2.itemWrapper = { position: "relative" };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, zIndex: 1 };
obj2.deleteButton = rect;
let closure_16 = createStyles.createStyles(obj2);
const LinearTransition = fn(4458).LinearTransition;
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
exitingAnimation.__closure = { withTiming: fn(4723).withTiming };
exitingAnimation.__workletHash = 17293915965800;
exitingAnimation.__initData = {
  code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
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
  analyticsLocations = analyticsContext(7358)(
    analyticsLocations1,
    tmp4(7378).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET,
  ).analyticsLocations;
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp5 = analyticsContext(7358);
  ({ cardWidth: c5, rowWidth } = analyticsContext(13339)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  if (null != rowWidth) {
    let obj3 = { width: rowWidth };
    let tmp7 = obj3;
  }
  let tmp6 = analyticsContext(13339)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
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
      found = items.filter((item) =>
        wishlistId(itemWrapper[21]).isEligibleWishlistItemOnMobile(item, { isWishlistOwner: true }),
      );
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
    const result = WishlistActionCreatorsDefault.updateWishlistVisibility(
      wishlistId,
      first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC,
    );
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
  let intl = tmp2(1115).intl;
  obj4.title = intl.string(wishlistId(1115).t["OEgx/4"]);
  let obj5 = { contentContainerStyle: { paddingBottom: analyticsContext(1612)().bottom }, children: null };
  let obj6 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.toggleRow, children: null };
  const obj9 = { hasIcons: false, children: null };
  const obj10 = { label: null, subLabel: null, value: null, onValueChange: null };
  let intl2 = tmp2(1115).intl;
  obj10.label = intl2.string(wishlistId(1115).t.b2nFyA);
  const intl3 = tmp2(1115).intl;
  obj10.subLabel = intl3.string(wishlistId(1115).t.dw58pE);
  obj10.value = value;
  obj10.onValueChange = callback;
  obj9.children = closure_14(wishlistId(7396).TableSwitchRow, obj10);
  obj8.children = closure_14(wishlistId(5857).TableRowGroup, obj9);
  const items8 = [closure_14(stateFromStores, obj8)];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      let obj11 = { style: tmp.loadingContainer, children: closure_14(c5, {}) };
      let tmp16Result = closure_14(tmp19, obj11);
    }
    items8[1] = tmp16Result;
    obj6.children = items8;
    obj5.children = closure_15(tmp19, obj6);
    obj4.children = closure_14(tmp2(6820).BottomSheetScrollView, obj5);
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
        const items = [closure_1_14(analyticsContext(str[30]), obj3)];
        let obj4 = { style: itemWrapper.deleteButton, children: null };
        let stringResult = wishlistId;
        let obj5 = { variant: "primary-overlay", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
        const obj6 = { size: "sm", color: analyticsContext(str[12]).colors.ICON_FEEDBACK_CRITICAL };
        obj5.icon = closure_1_14(wishlistId(str[32]).TrashIcon, obj6);
        obj5.onPress = function onPress() {
          return closure_10(sku.skuId);
        };
        const intl = wishlistId(str[25]).intl;
        const obj11 = { productName: skuId.skuName };
        const formatToPlainStringResult = intl.formatToPlainString(wishlistId(str[25]).t["IBBF8/"], obj11);
        if (skuId.isOwned) {
          const intl2 = stringResult(str[25]).intl;
          stringResult = intl2.string(stringResult(str[25]).t["6cfuDj"]);
          const _HermesInternal = HermesInternal;
          str = "";
          let combined = "" + formatToPlainStringResult + ", " + stringResult;
        } else {
          combined = formatToPlainStringResult;
        }
        obj5.accessibilityLabel = combined;
        obj5 = closure_1_14(wishlistId(str[31]).IconButton, obj5);
        obj4.children = obj5;
        obj4 = closure_1_14(stateFromStores, obj4);
        items[1] = obj4;
        obj.children = items;
        skuId = skuId.skuId;
        closure_1_15(analyticsContext(itemWrapper[29]), obj, skuId);
        const tmp3 = analyticsContext(itemWrapper[29]);
      }
    });
    tmp16Result = closure_14(tmp19, obj12);
  }
  tmp4Result = analyticsContext(11404);
}
