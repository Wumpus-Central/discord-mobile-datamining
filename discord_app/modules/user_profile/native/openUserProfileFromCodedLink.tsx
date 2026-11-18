// === Module 12181: openUserProfileFromCodedLink ===

// Module 12181 (openUserProfileFromCodedLink)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7978 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 12182 */;
import UserStore from "UserStore" /* 1388 */;

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