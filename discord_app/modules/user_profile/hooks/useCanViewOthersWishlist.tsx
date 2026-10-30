// discord_app/modules/user_profile/hooks/useCanViewOthersWishlist.tsx
import useCanDMDefault from "useCanDM.tsx";
import WishlistVisibility from "../../../../discord_common/js/shared/shared-constants/WishlistVisibility.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanViewOthersWishlist.tsx");

export default function useCanViewOthersWishlist(id) {
  _require = id;
  const tmp = useCanDMDefault(id.id);
  importDefault = tmp;
  const items = [UserProfileStore, WishlistStore, RelationshipStore];
  const items1 = [id, tmp];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const firstWishlistId = UserProfileStore.getFirstWishlistId(id.id);
      if (null == firstWishlistId) {
        return false;
      } else {
        const wishlistSettings = UserProfileStore.getWishlistSettings(id.id, firstWishlistId);
        if (wishlistSettings != null) {
          const visibility = wishlistSettings.visibility;
        }
        let tmp6 = WishlistStore.getWishlistItems(firstWishlistId).length > 0;
        let isFriendResult = tmp7;
        if (false === id.nsfwAllowed) {
          isFriendResult = RelationshipStore.isFriend(id.id);
        }
        if (tmp6) {
          tmp6 = visibility === WishlistVisibility.WishlistVisibility.PUBLIC;
        }
        if (tmp6) {
          tmp6 = closure_1;
        }
        if (tmp6) {
          let tmp10 = !tmp7;
          if (tmp7) {
            tmp10 = isFriendResult;
          }
          tmp6 = tmp10;
        }
        return tmp6;
      }
    },
    items1,
  );
}
