// === Module 11279: getCurrentUserProfile ===

// Module 11279 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1389 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;

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