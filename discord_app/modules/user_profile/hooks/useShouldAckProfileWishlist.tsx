// discord_app/modules/user_profile/hooks/useShouldAckProfileWishlist.tsx
import ProfileReadStateUtils from "../ProfileReadStateUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

const require = globalThis.__r;

require = fn;
const ProfileReadStateSection = fn(7777).ProfileReadStateSection;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldAckProfileWishlist.tsx");

export default function useShouldAckProfileWishlist(arg0) {
  _require = arg0;
  profileReadStateConfigPeek = require("ProfileReadStateExperiment").useProfileReadStateConfigPeek();
  const obj = require("ProfileReadStateExperiment");
  const items = [UserProfileStore, UserStore];
  const items1 = [arg0, profileReadStateConfigPeek];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null != profileReadStateConfigPeek) {
        if (null != closure_0) {
          const currentUser = UserStore.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          if (closure_0 !== id) {
            const firstWishlistId = UserProfileStore.getFirstWishlistId(closure_0);
            let wishlistSettings = null;
            if (null != firstWishlistId) {
              wishlistSettings = UserProfileStore.getWishlistSettings(closure_0, firstWishlistId);
            }
            const profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(
              closure_0,
              ProfileReadStateSection.WISHLIST,
            );
            return ProfileReadStateUtils.shouldAckWishlist(wishlistSettings, profileReadStateSectionAckedAt);
          }
        }
      }
      return false;
    },
    items1,
  );
}
