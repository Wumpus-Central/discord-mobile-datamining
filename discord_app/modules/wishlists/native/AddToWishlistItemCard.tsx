// discord_app/modules/wishlists/native/AddToWishlistItemCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { position: "absolute", top: ThemesDefault.space.PX_4, right: ThemesDefault.space.PX_4, zIndex: 1, alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_6, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[0] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  const merged = Object.assign(sku, Object.create(null));
  const tmp2 = callback3();
  let callback = tmp2;
  let obj = sku(analyticsLocations[8]);
  const wishlistAnalyticsContext = obj.useWishlistAnalyticsContext();
  const tmp4 = callback(wishlistAnalyticsContext.useState(false), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [sku, tmp2.heartOverlay, merged.size];
  callback = wishlistAnalyticsContext.useCallback(() => {
    let obj = { sku, size: merged.size };
    const items = [closure_1_8(wishlistId(analyticsLocations[9]), obj), ];
    obj = { style: heartOverlay.heartOverlay, pointerEvents: "none", children: closure_1_8(sku(analyticsLocations[10]).HeartOutlineIcon, { size: "sm", color: wishlistId(analyticsLocations[7]).colors.ICON_OVERLAY_LIGHT }) };
    items[1] = closure_1_8(first, obj);
    obj[0] = items;
    return closure_1_10(closure_1_9, obj);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_0 = tmp4;
            if (first) {
              c4 = 3;
            } else {
              let surface;
              if (wishlistAnalyticsContext != null) {
                surface = wishlistAnalyticsContext.surface;
              }
              if (null != surface) {
                obj1 = { sku_id: null, wishlist_id: null, wishlist_owner_id: null, surface: null, position_in_section: null, item_source: null, click_type: "add_to_wishlist", product_line: null, impression_session_id: null, location_stack: null };
                obj1[0] = sku.id;
                obj1[1] = v0;
                ({ wishlistOwnerId: obj9[2], surface: obj9[3], positionInSection: obj9[4], itemSource: obj9[5] } = wishlistAnalyticsContext);
                obj1[7] = sku.productLine;
                ({ impressionSessionId: obj9[8], analyticsLocations: obj9[9] } = wishlistAnalyticsContext);
                v0(analyticsLocations[11]).track(closure_1_7.WISHLIST_ITEM_CLICKED, obj1);
                const obj8 = v0(analyticsLocations[11]);
              }
              closure_1_7(true);
              c3 = 2;
              let obj3 = v0(analyticsLocations[12]);
              v0 = 3;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.addSkuToWishlist(sku.id, analyticsLocations);
              return obj2;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = v0(analyticsLocations[13]);
            obj3 = { key: "WISHLIST_ADD_SUGGESTION_ERROR", content: null };
            const intl = sku(analyticsLocations[14]).intl;
            obj3[1] = intl.string(sku(analyticsLocations[14]).t.F8FvUy);
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