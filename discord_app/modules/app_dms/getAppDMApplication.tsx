// discord_app/modules/app_dms/getAppDMApplication.tsx
import addApplication from "../applications/ApplicationStore.tsx";
import createUserWidgetFromServer from "../user_profile/UserProfileStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/app_dms/getAppDMApplication.tsx");

export const getAppDMApplication = function getAppDMApplication(channel) {
  let recipientId;
  if (channel.isPrivate()) {
    recipientId = channel.getRecipientId();
  }
  user = user.getUser(recipientId);
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  let tmp4;
  if (true === bot) {
    tmp4 = recipientId;
  }
  appIdForBotUserId = appIdForBotUserId.getAppIdForBotUserId(tmp4);
  if (null != tmp4) {
    userProfile = userProfile.getUserProfile(tmp4);
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
  return appIdForBotUserId.getApplication(appIdForBotUserId);
};