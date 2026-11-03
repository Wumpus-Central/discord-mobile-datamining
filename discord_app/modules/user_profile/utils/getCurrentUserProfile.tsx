// === Module 11654: getCurrentUserProfile ===

// Module 11654 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7896 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  let id = UserStore.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != guildId) {
    id = id.id;
    let guildMemberProfile = UserProfileStore.getGuildMemberProfile(id, guildId);
  } else {
    guildMemberProfile = UserProfileStore.getUserProfile(id.id);
  }
};