// === Module 10398: getCurrentUserProfile ===

// Module 10398 (getCurrentUserProfile)
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 5365 */;

const result = require("obj132").fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

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