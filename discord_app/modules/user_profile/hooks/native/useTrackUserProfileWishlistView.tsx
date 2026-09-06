// discord_app/modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import WishlistStore from "../../../wishlists/WishlistStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useEffect: c2, useRef: c3 } = noop);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default function useTrackUserProfileWishlistView(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  const items = [stateFromStores];
  stateFromStores = wishlistId(onAction[2]).useStateFromStores(items, () => WishlistStore.isFetching(wishlistId));
  flag(false);
  const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
  productLines(() => {
    if (flag) {
      let current = stateFromStores;
      if (!stateFromStores) {
        current = ref.current;
      }
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId, productLines };
        onAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items1);
}
