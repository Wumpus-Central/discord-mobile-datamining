// === Module 11058: getCurrentUserProfile ===

// Module 11058 (getCurrentUserProfile)
import closure_0 from "mergeGuildAvatar" /* 1921 */;
import closure_1 from "createUserWidgetFromServer" /* 7376 */;

const result = require("set").fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  let id = currentUser.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != guildId) {
    id = id.id;
    let guildMemberProfile = authStore.getGuildMemberProfile(id, guildId);
  } else {
    guildMemberProfile = authStore.getUserProfile(id.id);
  }
};