// === Module 12355: getAppDMApplication ===

// Module 12355 (getAppDMApplication)
import ApplicationStore from "ApplicationStore" /* 2040 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import UserStore from "UserStore" /* 1384 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  const user = UserStore.getUser(recipientId);
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp4;
  if (true === bot) {
    tmp4 = recipientId;
  }
  let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(tmp4);
  if (null != tmp4) {
    const userProfile = UserProfileStore.getUserProfile(tmp4);
    let id;
    if (userProfile != null) {
      const application = userProfile.application;
      if (application != null) {
        id = application.id;
      }
    }
    const tmp6 = id;
  }
  if (appIdForBotUserId == null) {
    appIdForBotUserId = tmp6;
  }
  return ApplicationStore.getApplication(appIdForBotUserId);
}