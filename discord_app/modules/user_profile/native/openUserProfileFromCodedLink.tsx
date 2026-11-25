// === Module 12271: openUserProfileFromCodedLink ===

// Module 12271 (openUserProfileFromCodedLink)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 6102 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11926 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileFromCodedLink.tsx");

export default function openUserProfileFromCodedLink(userId, arg1) {
  let isUserProfileEmbedRenderingMobileEnabled = UserProfileEmbedRenderingMobileExperiment.getIsUserProfileEmbedRenderingMobileEnabled("MessagesHandlers");
  if (isUserProfileEmbedRenderingMobileEnabled) {
    isUserProfileEmbedRenderingMobileEnabled = null != UserStore.getUser(userId);
  }
  if (isUserProfileEmbedRenderingMobileEnabled) {
    const obj3 = { userId, channelId: null, messageId: null };
    ({ channel_id: obj2.channelId, id: obj2.messageId } = arg1);
    showUserProfileActionSheetDefault(obj3);
  }
};