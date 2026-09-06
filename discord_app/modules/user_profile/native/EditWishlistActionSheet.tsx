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
const getWishlistProductLines = fn(8778).getWishlistProductLines;
let closure_12 = fn(8183).TrackUserProfileWishlistActions;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  loadingContainer: null,
  toggleRow: null,
  itemsContainer: null,
  itemWrapper: null,
  deleteButton: null,
};
createStyles = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.loadingContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_48,
};
let obj1 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: nativeDefault.space.PX_48 };
createStyles.toggleRow = { marginBottom: nativeDefault.space.PX_16 };
createStyles.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 };
createStyles.itemWrapper = { position: "relative" };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, zIndex: 1 };
createStyles.deleteButton = rect;
let closure_16 = createStyles.createStyles(createStyles);
const LinearTransition = fn(4296).LinearTransition;
let obj2 = { marginBottom: nativeDefault.space.PX_16 };
const springifyResult = LinearTransition.springify();
const massResult = LinearTransition.springify().mass(0.8);
let closure_17 = LinearTransition.springify().mass(0.8).damping(100).stiffness(300);
function exitingAnimation() {
  let obj = { animations: null, initialValues: null };
  obj = { opacity: timing.withTiming(0, { duration: 150 }), transform: null };
  obj = { scale: null };
  obj.scale = timing.withTiming(0.8, { duration: 150 });
  const items = [obj];
  obj.transform = items;
  obj.animations = obj;
  const obj1 = { opacity: 1, transform: null };
  const items1 = [{ scale: 1 }];
  obj1.transform = items1;
  obj.initialValues = obj1;
  return obj;
}
const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
exitingAnimation.__closure = { withTiming: fn(4561).withTiming };
exitingAnimation.__workletHash = 17293915965800;
exitingAnimation.__initData = {
  code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  value = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  const tmp = closure_16();
  dependencyMap = tmp;
  let obj = wishlistId(504);
  let items = [stateFromStores2];
  _slicedToArray = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = analyticsContext(7162)(
    analyticsLocations,
    tmp4(7182).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET,
  ).analyticsLocations;
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp5 = analyticsContext(7162);
  ({ cardWidth: c5, rowWidth } = analyticsContext(13086)(obj));
  if (null != rowWidth) {
    obj = { width: rowWidth };
    let tmp7 = obj;
  }
  let tmp2Result = tmp2(504);
  const items1 = [value];
  stateFromStores = tmp2Result.useStateFromStores(items1, () => WishlistStore.getWishlist(wishlistId));
  tmp2Result = tmp2(504);
  const items2 = [value];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => WishlistStore.isFetching(wishlistId));
  let tmp6 = analyticsContext(13086)(obj);
  const items3 = [closure_10, UserProfileStore];
  stateFromStores2 = wishlistId(504).useStateFromStores(items3, () => {
    const currentUser = UserStore.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = UserProfileStore.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  let obj6 = analyticsLocations;
  const tmp11 = _slicedToArray(analyticsLocations.useState(true), 2);
  value = tmp11[0];
  closure_9 = tmp11[1];
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
  const memo = obj6.useMemo(() => {
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
  const callback = obj6.useCallback(() => {
    const WishlistVisibility = WishlistVisibility2.WishlistVisibility;
    closure_9(!first);
    let obj = WishlistActionCreatorsDefault;
    const result = obj.updateWishlistVisibility(
      wishlistId,
      first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC,
    );
    obj = {};
    const merged = Object.assign(analyticsContext);
    obj.analyticsLocations = analyticsLocations;
    obj.wishlistId = wishlistId;
    obj.action = first ? constants.WISHLIST_TOGGLE_PRIVATE : constants.WISHLIST_TOGGLE_PUBLIC;
    let tmp8;
    if (null != stateFromStores) {
      tmp8 = getWishlistProductLines(tmp7);
    }
    obj.productLines = tmp8;
    const result1 = UserProfileAnalyticsUtils.trackUserProfileWishlistAction(obj);
    const tmp2 = first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC;
  }, items6);
  closure_10 = obj6.useCallback((skuId) => {
    const result = WishlistActionCreatorsDefault.removeSkuFromWishlist(wishlistId, skuId, analyticsLocations);
  }, items7);
  let obj1 = { scrollable: true, startExpanded: true, title: null, children: null };
  const tmp2Result1 = wishlistId(504);
  let intl = tmp2(1114).intl;
  obj1.title = intl.string(wishlistId(1114).t["OEgx/4"]);
  let obj2 = { contentContainerStyle: { paddingBottom: analyticsContext(1611)().bottom }, children: null };
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.toggleRow, children: null };
  const obj5 = { hasIcons: false, children: null };
  obj6 = { label: null, subLabel: null, value: null, onValueChange: null };
  let intl2 = tmp2(1114).intl;
  obj6.label = intl2.string(wishlistId(1114).t.b2nFyA);
  const intl3 = tmp2(1114).intl;
  obj6.subLabel = intl3.string(wishlistId(1114).t.dw58pE);
  obj6.value = value;
  obj6.onValueChange = callback;
  obj5.children = closure_14(wishlistId(7201).TableSwitchRow, obj6);
  obj4.children = closure_14(wishlistId(5687).TableRowGroup, obj5);
  const items8 = [closure_14(stateFromStores, obj4)];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      const obj7 = { style: tmp.loadingContainer, children: closure_14(c5, {}) };
      let tmp16Result = closure_14(tmp19, obj7);
    }
    items8[1] = tmp16Result;
    obj3.children = items8;
    obj2.children = closure_15(tmp19, obj3);
    obj1.children = closure_14(tmp2(6627).BottomSheetScrollView, obj2);
    return closure_14(tmp4Result, obj1);
  }
  tmp16Result = null;
  if (0 !== memo.length) {
    const obj8 = { style: null, children: null };
    const items9 = [tmp.itemsContainer, tmp7];
    obj8.style = items9;
    obj8.children = memo.map((sku) => {
      let skuId = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let str = itemWrapper;
        let obj = { style: itemWrapper.itemWrapper, exiting: null, layout: null, children: null };
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
        obj = { sku: null, isOwned: null, size: null, accessibilityHidden: true };
        ({ sku: obj2.sku, isOwned: obj2.isOwned } = skuId);
        obj.size = size;
        const items = [closure_1_14(analyticsContext(str[30]), obj)];
        obj = { style: itemWrapper.deleteButton, children: null };
        let stringResult = wishlistId;
        let obj1 = { variant: "primary-overlay", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
        const obj2 = { size: "sm", color: analyticsContext(str[12]).colors.ICON_FEEDBACK_CRITICAL };
        obj1.icon = closure_1_14(wishlistId(str[32]).TrashIcon, obj2);
        obj1.onPress = function onPress() {
          return closure_10(sku.skuId);
        };
        const intl = wishlistId(str[25]).intl;
        const obj3 = { productName: skuId.skuName };
        const formatToPlainStringResult = intl.formatToPlainString(wishlistId(str[25]).t["IBBF8/"], obj3);
        if (skuId.isOwned) {
          const intl2 = stringResult(str[25]).intl;
          stringResult = intl2.string(stringResult(str[25]).t["6cfuDj"]);
          const _HermesInternal = HermesInternal;
          str = "";
          let combined = "" + formatToPlainStringResult + ", " + stringResult;
        } else {
          combined = formatToPlainStringResult;
        }
        obj1.accessibilityLabel = combined;
        obj1 = closure_1_14(wishlistId(str[31]).IconButton, obj1);
        obj.children = obj1;
        obj = closure_1_14(stateFromStores, obj);
        items[1] = obj;
        obj.children = items;
        skuId = skuId.skuId;
        closure_1_15(analyticsContext(itemWrapper[29]), obj, skuId);
        const tmp3 = analyticsContext(itemWrapper[29]);
      }
    });
    tmp16Result = closure_14(tmp19, obj8);
  }
  tmp4Result = analyticsContext(11151);
}
