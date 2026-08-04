// discord_app/modules/wishlists/native/AddToWishlistItemCard.tsx
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { heartOverlay: null };
createCacheKey = { position: "absolute", top: require("Themes").space.PX_4, right: require("Themes").space.PX_4, zIndex: 1, alignItems: "center", justifyContent: "center", padding: require("Themes").space.PX_6, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("noop").fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  const merged = Object.assign(sku, Object.create(null));
  let callback;
  let wishlistAnalyticsContext;
  let first;
  let closure_7;
  const tmp2 = createCacheKey();
  callback = tmp2;
  let obj = sku(analyticsLocations[8]);
  wishlistAnalyticsContext = obj.useWishlistAnalyticsContext();
  const tmp4 = callback(wishlistAnalyticsContext.useState(false), 2);
  first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [sku, tmp2.heartOverlay, merged.size];
  callback = wishlistAnalyticsContext.useCallback(() => {
    let obj = { children: null };
    obj = { sku, size: merged.size };
    const items = [outer1_8(wishlistId(analyticsLocations[9]), obj), ];
    obj = { style: _undefined.heartOverlay, pointerEvents: "none", children: null };
    const obj1 = { size: "sm", color: null };
    obj1[1] = wishlistId(analyticsLocations[7]).colors.ICON_OVERLAY_LIGHT;
    obj[2] = outer1_8(sku(analyticsLocations[10]).HeartOutlineIcon, obj1);
    items[1] = outer1_8(first, obj);
    obj[0] = items;
    return outer1_10(outer1_9, obj);
  }, items);
  const items1 = [first, wishlistAnalyticsContext, , , , ];
  ({ id: arr2[2], productLine: arr2[3] } = sku);
  items1[4] = wishlistId;
  items1[5] = analyticsLocations;
  const callback1 = wishlistAnalyticsContext.useCallback(merged(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            if (outer1_6) {
              c4 = 3;
            } else {
              let surface;
              if (outer1_5 != null) {
                surface = tmp28.surface;
              }
              if (null != surface) {
                let obj1 = { sku_id: null, wishlist_id: null, wishlist_owner_id: null, surface: null, position_in_section: null, item_source: null, click_type: "add_to_wishlist", product_line: null, impression_session_id: null, location_stack: null };
                obj1[0] = outer1_0.id;
                obj1[1] = v0;
                ({ wishlistOwnerId: obj9[2], surface: obj9[3], positionInSection: obj9[4], itemSource: obj9[5] } = tmp28);
                obj1[7] = outer1_0.productLine;
                ({ impressionSessionId: obj9[8], analyticsLocations: obj9[9] } = tmp28);
                v0(outer1_2[11]).track(outer1_7.WISHLIST_ITEM_CLICKED, obj1);
                const obj8 = v0(outer1_2[11]);
              }
              outer1_7(true);
              let c3 = 2;
              let obj3 = v0(outer1_2[12]);
              v0 = 3;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.addSkuToWishlist(outer1_0.id, outer1_2);
              return obj2;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = v0(outer1_2[13]);
            obj3 = { key: "WISHLIST_ADD_SUGGESTION_ERROR", content: null };
            const intl = outer1_0(outer1_2[14]).intl;
            obj3[1] = intl.string(outer1_0(outer1_2[14]).t.F8FvUy);
            obj1.open(obj3);
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          callback(false);
        }
        c3 = 0;
        callback(false);
        throw closure_2;
      } catch (tmp36) {
        closure_2 = tmp36;
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  obj = { accessibilityLabel: null, renderPreview: null, onPress: null };
  let intl = sku(analyticsLocations[14]).intl;
  obj = { productName: null };
  const tmp8 = wishlistId(analyticsLocations[15]);
  obj[0] = sku(analyticsLocations[16]).getProductNameAndTypeFromSku(sku);
  obj[0] = intl.formatToPlainString(sku(analyticsLocations[14]).t.xRjJBe, obj);
  obj[1] = callback;
  obj[2] = callback1;
  const merged1 = Object.assign(merged);
  return callback2(tmp8, obj);
};