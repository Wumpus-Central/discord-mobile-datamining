// === Module 10398: getCurrentUserProfile ===

// Module 10398 (getCurrentUserProfile)
import closure_0 from "mergeGuildAvatar" /* 1922 */;
import closure_1 from "createUserWidgetFromServer" /* 5365 */;

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