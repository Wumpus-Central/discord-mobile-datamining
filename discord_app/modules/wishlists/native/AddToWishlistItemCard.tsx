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
const createStyles = fn(4827);
let obj2 = { heartOverlay: null };
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
obj2.heartOverlay = rect;
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistItemCard.tsx");

export default function AddToWishlistItemCard(sku) {
  sku = sku.sku;
  const wishlistId = sku.wishlistId;
  const analyticsLocations = sku.analyticsLocations;
  const merged = Object.assign(sku, Object.assign({ sku: 0, wishlistId: 0, analyticsLocations: 0 }));
  first = undefined;
  closure_7 = undefined;
  const tmp2 = closure_11();
  _slicedToArray = tmp2;
  const wishlistAnalyticsContext = sku(analyticsLocations[8]).useWishlistAnalyticsContext();
  [first, closure_7] = wishlistAnalyticsContext.useState(false);
  let items = [sku, tmp2.heartOverlay, merged.size];
  const callback = wishlistAnalyticsContext.useCallback(() => {
    const obj = { children: null };
    const items = [React6(SKUPreviewDefault, { sku, size: merged.size })];
    const obj3 = {
      style: heartOverlay.heartOverlay,
      pointerEvents: "none",
      children: React6(HeartOutlineIcon.HeartOutlineIcon, {
        size: "sm",
        color: nativeDefault.colors.ICON_OVERLAY_LIGHT,
      }),
    };
    items[1] = React6(View, obj3);
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
          const obj3 = { value, done: true };
          return obj3;
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
              const obj5 = { value, done: true };
              return obj5;
            } else if (first) {
              c4 = 3;
            } else {
              let surface;
              if (wishlistAnalyticsContext != null) {
                surface = wishlistAnalyticsContext.surface;
              }
              if (null != surface) {
                const obj6 = {
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
                obj6.product_line = sku.productLine;
                ({ impressionSessionId: obj9.impression_session_id, analyticsLocations: obj9.location_stack } =
                  wishlistAnalyticsContext);
                v3(tmp36[11]).track(closure_1_7.WISHLIST_ITEM_CLICKED, obj6);
                const obj8 = v3(tmp36[11]);
              }
              closure_7(true);
              c3 = 2;
              v3 = 3;
              c4 = 1;
              const obj7 = { value: v3(tmp36[12]).addSkuToWishlist(sku.id, analyticsLocations), done: false };
              return obj7;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              const obj14 = { key: "WISHLIST_ADD_SUGGESTION_ERROR", content: null };
              const intl = tmp4(tmp36[14]).intl;
              obj14.content = intl.string(tmp4(tmp36[14]).t.F8FvUy);
              v3(tmp36[13]).open(obj14);
              const obj2 = v3(tmp36[13]);
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
  let obj2 = { accessibilityLabel: null, renderPreview: null, onPress: null };
  let obj = sku(analyticsLocations[8]);
  let intl = sku(analyticsLocations[14]).intl;
  let obj3 = { productName: null };
  const tmp8 = wishlistId(analyticsLocations[15]);
  obj3.productName = sku(analyticsLocations[16]).getProductNameAndTypeFromSku(sku);
  obj2.accessibilityLabel = intl.formatToPlainString(sku(analyticsLocations[14]).t.xRjJBe, obj3);
  obj2.renderPreview = callback;
  obj2.onPress = callback1;
  const merged1 = Object.assign(merged);
  return closure_8(tmp8, obj2);
}
