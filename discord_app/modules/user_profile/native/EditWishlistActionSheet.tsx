// discord_app/modules/user_profile/native/EditWishlistActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CONFIG_NEVER_ANIMATE_TIMING from "../../../design/animation/reanimated/timing/timing.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../a11y/AccessibilityStore.tsx";
import closure_8 from "../../wishlists/WishlistStore.tsx";
import { getWishlistProductLines } from "../../wishlists/records/WishlistRecord.tsx";
import closure_10 from "../../../stores/UserStore.tsx";
import closure_11 from "../UserProfileStore.tsx";
import { TrackUserProfileWishlistActions as closure_12 } from "../Constants.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { LinearTransition } from "../../reanimated/ReanimatedRexport.tsx";
import closure_17 from "../../../../_runtime/00300_get_BatchedBridge.js";
import dampingResult from "../../../../_runtime/00100_getConstants.js";

require = arg1;
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = {
  container: null,
  loadingContainer: null,
  toggleRow: null,
  itemsContainer: null,
  itemWrapper: null,
  deleteButton: null,
};
createCacheKey = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: ThemesDefault.space.PX_48 };
let obj1 = { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: ThemesDefault.space.PX_48 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", gap: 16 };
createCacheKey[4] = { position: "relative" };
let obj2 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8, zIndex: 1 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj3 = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8, zIndex: 1 };
const springifyResult = LinearTransition.springify();
const massResult = LinearTransition.springify().mass(0.8);
function exitingAnimation() {
  let obj = { animations: null, initialValues: null };
  obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(0, { duration: 150 }), transform: null };
  obj = { scale: null };
  const obj3 = CONFIG_NEVER_ANIMATE_TIMING;
  obj[0] = CONFIG_NEVER_ANIMATE_TIMING.withTiming(0.8, { duration: 150 });
  const items = [obj];
  obj[1] = items;
  obj[0] = obj;
  const items1 = [{ scale: 1 }];
  obj[1] = { opacity: 1, transform: items1 };
  return obj;
}
exitingAnimation.__closure = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming };
exitingAnimation.__workletHash = 17293915965800;
exitingAnimation.__initData = {
  code: "function exitingAnimation_EditWishlistActionSheetTsx1(_values){const{withTiming}=this.__closure;return{animations:{opacity:withTiming(0,{duration:150}),transform:[{scale:withTiming(0.8,{duration:150})}]},initialValues:{opacity:1,transform:[{scale:1}]}};}",
};
let obj4 = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming };
let result = require("set").fileFinishedImporting("modules/user_profile/native/EditWishlistActionSheet.tsx");

export default function EditWishlistActionSheet(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const analyticsContext = wishlistId.analyticsContext;
  let analyticsLocations = wishlistId.analyticsLocations;
  dependencyMap = undefined;
  let callback;
  analyticsLocations = undefined;
  c5 = undefined;
  let stateFromStores;
  let stateFromStores2;
  let first;
  closure_9 = undefined;
  closure_10 = undefined;
  let tmp = callback3();
  dependencyMap = tmp;
  let obj = wishlistId(586);
  let items = [stateFromStores2];
  callback = obj.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations = analyticsContext(5962)(
    analyticsLocations,
    tmp4(5982).USER_PROFILE_EDIT_WISHLIST_ACTION_SHEET,
  ).analyticsLocations;
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  let tmp5 = analyticsContext(5962);
  ({ cardWidth: c5, rowWidth } = analyticsContext(12758)(obj));
  if (null != rowWidth) {
    obj = { width: null };
    obj[0] = rowWidth;
    let tmp7 = obj;
  }
  let tmp2Result = tmp2(586);
  const items1 = [first];
  stateFromStores = tmp2Result.useStateFromStores(items1, () => first.getWishlist(wishlistId));
  tmp2Result = tmp2(586);
  const items2 = [first];
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => first.isFetching(wishlistId));
  let tmp6 = analyticsContext(12758)(obj);
  const items3 = [closure_10, closure_11];
  stateFromStores2 = wishlistId(586).useStateFromStores(items3, () => {
    currentUser = currentUser.getCurrentUser();
    let wishlistSettings = null;
    if (null != currentUser) {
      wishlistSettings = closure_1_11.getWishlistSettings(currentUser.id, wishlistId);
    }
    return wishlistSettings;
  });
  let obj6 = analyticsLocations;
  const tmp11 = callback(analyticsLocations.useState(true), 2);
  first = tmp11[0];
  closure_9 = tmp11[1];
  let visibility;
  if (stateFromStores2 != null) {
    visibility = stateFromStores2.visibility;
  }
  const items4 = [visibility];
  const effect = analyticsLocations.useEffect(() => {
    let visibility;
    if (stateFromStores2 != null) {
      visibility = tmp.visibility;
    }
    if (null != visibility) {
      callback(tmp.visibility === wishlistId(itemWrapper[20]).WishlistVisibility.PUBLIC);
    }
  }, items4);
  const items5 = [stateFromStores];
  const memo = obj6.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((sku) => callback(table[21]).isEligibleWishlistItemOnMobile(sku, { isWishlistOwner: true }));
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [wishlistId, first, stateFromStores, analyticsContext, analyticsLocations];
  const items7 = [wishlistId, analyticsLocations];
  callback = obj6.useCallback(() => {
    const WishlistVisibility = wishlistId(itemWrapper[20]).WishlistVisibility;
    callback(!first);
    let obj = analyticsContext(itemWrapper[22]);
    const result = obj.updateWishlistVisibility(
      wishlistId,
      first ? WishlistVisibility.PRIVATE : WishlistVisibility.PUBLIC,
    );
    obj = {};
    const merged = Object.assign(analyticsContext);
    obj.analyticsLocations = analyticsLocations;
    obj.wishlistId = wishlistId;
    obj.action = first ? closure_1_12.WISHLIST_TOGGLE_PRIVATE : closure_1_12.WISHLIST_TOGGLE_PUBLIC;
    let tmp8;
    if (null != stateFromStores) {
      tmp8 = callback(tmp7);
    }
    obj.productLines = tmp8;
    const result1 = wishlistId(itemWrapper[23]).trackUserProfileWishlistAction(obj);
  }, items6);
  closure_10 = obj6.useCallback((closure_1_1) => {
    const result = analyticsContext(itemWrapper[22]).removeSkuFromWishlist(wishlistId, closure_1_1, analyticsLocations);
  }, items7);
  obj1 = { scrollable: true, startExpanded: true, title: null, children: null };
  const tmp2Result1 = wishlistId(586);
  let intl = tmp2(1233).intl;
  obj1[2] = intl.string(wishlistId(1233).t["OEgx/4"]);
  let obj2 = { contentContainerStyle: { paddingBottom: analyticsContext(1627)().bottom }, children: null };
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.toggleRow, children: null };
  const obj5 = { hasIcons: false, children: null };
  obj6 = { label: null, subLabel: null, value: null, onValueChange: null };
  let intl2 = tmp2(1233).intl;
  obj6[0] = intl2.string(wishlistId(1233).t.b2nFyA);
  const intl3 = tmp2(1233).intl;
  obj6[1] = intl3.string(wishlistId(1233).t.dw58pE);
  obj6[2] = first;
  obj6[3] = callback;
  obj5[1] = callback2(wishlistId(6002).TableSwitchRow, obj6);
  obj4[1] = callback2(wishlistId(6001).TableRowGroup, obj5);
  const items8 = [callback2(stateFromStores, obj4)];
  if (stateFromStores1) {
    if (null == stateFromStores) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.loadingContainer;
      obj7[1] = tmp16(c5, {});
      let tmp16Result = tmp16(tmp19, obj7);
    }
    items8[1] = tmp16Result;
    obj3[1] = items8;
    obj2[1] = closure_15(tmp19, obj3);
    obj1[3] = tmp16(tmp2(5633).BottomSheetScrollView, obj2);
    return tmp16(tmp4Result, obj1);
  }
  tmp16Result = null;
  if (0 !== memo.length) {
    const obj8 = { style: null, children: null };
    const items9 = [tmp.itemsContainer, tmp7];
    obj8[0] = items9;
    obj8[1] = memo.map((sku) => {
      let skuId = sku;
      closure_0 = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let str = itemWrapper;
        let obj = { style: null, exiting: null, layout: null, children: null };
        obj[0] = itemWrapper.itemWrapper;
        let tmp6;
        if (!closure_3) {
          tmp6 = closure_1_18;
        }
        obj[1] = tmp6;
        let tmp7;
        if (!tmp5) {
          tmp7 = closure_1_17;
        }
        obj[2] = tmp7;
        obj = { sku: null, isOwned: null, size: null, accessibilityHidden: true };
        ({ sku: obj2[0], isOwned: obj2[1] } = skuId);
        obj[2] = c5;
        const items = [closure_1_14(analyticsContext(str[30]), obj)];
        obj = { style: null, children: null };
        obj[0] = itemWrapper.deleteButton;
        let stringResult = wishlistId;
        obj1 = { variant: "primary-overlay", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
        const obj2 = { size: "sm", color: null };
        obj2[1] = analyticsContext(str[12]).colors.ICON_FEEDBACK_CRITICAL;
        obj1[2] = closure_1_14(wishlistId(str[32]).TrashIcon, obj2);
        obj1[3] = function onPress() {
          return closure_1_10(sku.skuId);
        };
        const intl = wishlistId(str[25]).intl;
        const obj3 = { productName: null };
        obj3[0] = skuId.skuName;
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
        obj1[4] = combined;
        obj1 = tmp8(wishlistId(str[31]).IconButton, obj1);
        obj[1] = obj1;
        obj = tmp8(stateFromStores, obj);
        items[1] = obj;
        obj[3] = items;
        skuId = skuId.skuId;
        closure_1_15(analyticsContext(itemWrapper[29]), obj, skuId);
        const tmp = closure_1_15;
        const tmp10 = stateFromStores;
        const tmp3 = analyticsContext(itemWrapper[29]);
        const tmp4 = itemWrapper;
        tmp5 = closure_3;
      }
    });
    tmp16Result = tmp16(tmp19, obj8);
  }
}
