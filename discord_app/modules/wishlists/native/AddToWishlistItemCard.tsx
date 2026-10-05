// === Module 12948: AddToWishlistItemCard ===

// Module 12948 (AddToWishlistItemCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import SKUPreviewDefault from "SKUPreview" /* 8426 */;
import HeartOutlineIcon2 from "HeartOutlineIcon" /* 8494 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c4;

let c10;
let c9;
let metroImportAll;
let rect;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { heartOverlay: rect };
rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4, zIndex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  let closure_7;
  let first;
  let formatToPlainString;
  let heartOverlay;
  let obj3;
  let obj4;
  let xRjJBe;
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  let analyticsLocations = sku.analyticsLocations;
  const merged = Object.assign(sku, Object.assign({ sku: 0, wishlistId: 0, analyticsLocations: 0 }));
  first = undefined;
  closure_7 = undefined;
  const tmp2 = closure_11();
  _slicedToArray = tmp2;
  let obj = sku(analyticsLocations[8]);
  const wishlistAnalyticsContext = obj.useWishlistAnalyticsContext();
  [first, closure_7] = wishlistAnalyticsContext.useState(false);
  let items = [sku, tmp2.heartOverlay, merged.size];
  const callback = wishlistAnalyticsContext.useCallback(() => {
    let HeartOutlineIcon;
    let items;
    let obj4;
    const obj = { children: items };
    items = [, ];
    const obj2 = { sku, size: merged.size };
    items[0] = metroImportAll(SKUPreviewDefault, obj2);
    const obj3 = { style: heartOverlay.heartOverlay, pointerEvents: "none", children: metroImportAll(HeartOutlineIcon, obj4) };
    obj4 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    HeartOutlineIcon = HeartOutlineIcon2.HeartOutlineIcon;
    items[1] = metroImportAll(View, obj3);
    return authStore(React4, obj);
  }, items);
  const items1 = [first, wishlistAnalyticsContext, , , , ];
  ({ id: arr2[2], productLine: arr2[3] } = sku);
  items1[4] = wishlistId;
  items1[5] = analyticsLocations;
  const callback1 = wishlistAnalyticsContext.useCallback(merged(function*() {
    let closure_0;
    let closure_2;
    let intl;
    let v2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (!first) {
            let surface;
            if (wishlistAnalyticsContext != null) {
              surface = wishlistAnalyticsContext.surface;
            }
            if (null != surface) {
              const obj5 = { sku_id: sku.id, wishlist_id: wishlistId, wishlist_owner_id: null, surface: null, position_in_section: null, item_source: null, click_type: "add_to_wishlist", product_line: sku.productLine, impression_session_id: null, location_stack: null };
              ({ wishlistOwnerId: obj8.wishlist_owner_id, surface: obj8.surface, positionInSection: obj8.position_in_section, itemSource: obj8.item_source } = wishlistAnalyticsContext);
              ({ impressionSessionId: obj8.impression_session_id, analyticsLocations: obj8.location_stack } = wishlistAnalyticsContext);
              const obj7 = v2(analyticsLocations[11]);
              obj7.track(closure_1_7.WISHLIST_ITEM_CLICKED, obj5);
            }
            closure_7(true);
            c3 = 2;
            const obj3 = v2(analyticsLocations[12]);
            v2 = 3;
            c4 = 1;
            const obj6 = { value: obj3.addSkuToWishlist(sku.id, analyticsLocations), done: false };
            return obj6;
          }
        } else if (1 === v2) {
          c3 = 0;
          closure_128_7(false);
          throw analyticsLocations;
        } else {
          if (2 === v2) {
            c3 = 1;
            const obj13 = { key: "WISHLIST_ADD_SUGGESTION_ERROR", content: intl.string(tmp(analyticsLocations[14]).t.F8FvUy) };
            const open = v2(analyticsLocations[13]).open;
            const tmp12 = v2(analyticsLocations[13]);
            intl = tmp(analyticsLocations[14]).intl;
            open(obj13);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_7(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_128_7(false);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp33) {
        analyticsLocations = tmp33;
        if (0 === c3) {
          c4 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  }), items1);
  let obj2 = { accessibilityLabel: formatToPlainString(xRjJBe, obj3), renderPreview: callback, onPress: callback1 };
  const tmp8 = wishlistId(analyticsLocations[15]);
  let intl = sku(analyticsLocations[14]).intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { productName: obj4.getProductNameAndTypeFromSku(sku) };
  xRjJBe = sku(analyticsLocations[14]).t.xRjJBe;
  obj4 = sku(analyticsLocations[16]);
  const merged1 = Object.assign(merged);
  return closure_8(tmp8, obj2);
};