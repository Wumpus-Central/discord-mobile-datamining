// discord_app/modules/wishlists/native/AddToWishlistItemCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SKUPreviewDefault from "../../skus/native/SKUPreview.tsx";
import HeartOutlineIcon from "../../../design/components/Icon/native/redesign/generated/HeartOutlineIcon.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
const createStyles = { heartOverlay: null };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_4,
  right: nativeDefault.space.PX_4,
  zIndex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
};
createStyles.heartOverlay = rect;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  const merged = Object.assign(sku, Object.assign({ sku: 0, wishlistId: 0, analyticsLocations: 0 }));
  const tmp2 = closure_11();
  _slicedToArray = tmp2;
  let obj = sku(analyticsLocations[8]);
  const wishlistAnalyticsContext = obj.useWishlistAnalyticsContext();
  const tmp4 = _slicedToArray(wishlistAnalyticsContext.useState(false), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  let items = [sku, tmp2.heartOverlay, merged.size];
  const callback = wishlistAnalyticsContext.useCallback(() => {
    let obj = { children: null };
    obj = { sku, size: merged.size };
    const items = [React6(SKUPreviewDefault, obj)];
    obj = {
      style: heartOverlay.heartOverlay,
      pointerEvents: "none",
      children: React6(HeartOutlineIcon.HeartOutlineIcon, {
        size: "sm",
        color: nativeDefault.colors.ICON_OVERLAY_LIGHT,
      }),
    };
    items[1] = React6(View, obj);
    obj.children = items;
    return closure_2_10(React7, obj);
  }, items);
  const items1 = [first, wishlistAnalyticsContext, , , ,];
  ({ id: arr2[2], productLine: arr2[3] } = sku);
  items1[4] = wishlistId;
  items1[5] = analyticsLocations;
  const callback1 = wishlistAnalyticsContext.useCallback(
    merged(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else if (first) {
              c4 = 3;
            } else {
              let surface;
              if (wishlistAnalyticsContext != null) {
                surface = wishlistAnalyticsContext.surface;
              }
              if (null != surface) {
                let obj1 = {
                  sku_id: sku.id,
                  wishlist_id: wishlistId,
                  wishlist_owner_id: null,
                  surface: null,
                  position_in_section: null,
                  item_source: null,
                  click_type: "add_to_wishlist",
                  product_line: null,
                  impression_session_id: null,
                  location_stack: null,
                };
                ({
                  wishlistOwnerId: obj9.wishlist_owner_id,
                  surface: obj9.surface,
                  positionInSection: obj9.position_in_section,
                  itemSource: obj9.item_source,
                } = wishlistAnalyticsContext);
                obj1.product_line = sku.productLine;
                ({ impressionSessionId: obj9.impression_session_id, analyticsLocations: obj9.location_stack } =
                  wishlistAnalyticsContext);
                v3(tmp36[11]).track(closure_1_7.WISHLIST_ITEM_CLICKED, obj1);
                const obj8 = v3(tmp36[11]);
              }
              closure_7(true);
              c3 = 2;
              let obj3 = v3(tmp36[12]);
              v3 = 3;
              c4 = 1;
              const obj2 = { value: obj3.addSkuToWishlist(sku.id, analyticsLocations), done: false };
              return obj2;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              obj1 = v3(tmp36[13]);
              obj3 = { key: "WISHLIST_ADD_SUGGESTION_ERROR", content: null };
              const intl = tmp4(tmp36[14]).intl;
              obj3.content = intl.string(tmp4(tmp36[14]).t.F8FvUy);
              obj1.open(obj3);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_7(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_128_7(false);
          }
          c3 = 0;
          closure_128_7(false);
          throw tmp36;
        } catch (tmp36) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp36;
          } else if (tmp2 === tmp38) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items1,
  );
  obj = { accessibilityLabel: null, renderPreview: null, onPress: null };
  let intl = sku(analyticsLocations[14]).intl;
  obj = { productName: null };
  const tmp8 = wishlistId(analyticsLocations[15]);
  obj.productName = sku(analyticsLocations[16]).getProductNameAndTypeFromSku(sku);
  obj.accessibilityLabel = intl.formatToPlainString(sku(analyticsLocations[14]).t.xRjJBe, obj);
  obj.renderPreview = callback;
  obj.onPress = callback1;
  const merged1 = Object.assign(merged);
  return closure_8(tmp8, obj);
}
