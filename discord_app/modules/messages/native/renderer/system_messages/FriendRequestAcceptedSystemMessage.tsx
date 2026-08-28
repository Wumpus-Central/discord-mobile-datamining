// === Module 7929: createFriendRequestAcceptedSystemMessage ===

// Module 7929 (createFriendRequestAcceptedSystemMessage)
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7816 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7818 */;
import registerAssetDefault from "registerAsset" /* 7930 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "mergeGuildAvatar" /* 1923 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  message = message.message;
  channel = channel.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = authStore.getUser(recipientId);
      const currentUser = authStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let colorString = getMessageAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
          let obj = { userId: null, message: null, author: null, roleStyle: null };
          obj[0] = recipientId;
          obj[1] = message;
          obj[2] = colorString;
          obj[3] = message.roleStyle;
          obj = { username: null, usernameOnClick: null };
          obj[0] = colorString.nick;
          obj[1] = formatUsernameOnClickDefault(obj);
          let content = message.content;
          if (null != content) {
            if ("" !== content) {
              let tmp15Result = tmp15(4446);
              obj1 = { baseTextColor: null };
              obj1[0] = tmp17(712).colors.TEXT_SUBTLE;
              const intl2 = tmp15(1236).intl;
              const formatToParts2 = intl2.formatToParts;
              let t = tmp15(1236).t;
              if (tmp18) {
                t = {};
                obj = Object.assign(obj);
                t.note = content;
                content = { colorString: null };
                colorString = colorString.colorString;
                content[0] = colorString;
                t.formattedNote = content;
                let formatToParts2Result = formatToParts2(t["6pQebO"], t);
              } else {
                const obj2 = {};
                const merged = Object.assign(obj);
                obj2.note = content;
                const obj3 = { colorString: null };
                obj3[0] = colorString.colorString;
                obj2.formattedNote = obj3;
                formatToParts2Result = formatToParts2(t.bNrwDM, obj2);
              }
              const baseTextColor = tmp15Result.createNativeStyleProperties(obj1)(message.theme).baseTextColor;
            }
          }
          const intl = tmp15(1236).intl;
          const formatToParts = intl.formatToParts;
          t = tmp15(1236).t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj);
          }
          const obj4 = { content: null, iconUrl: null, textColor: null };
          obj4[0] = formatToPartsResult;
          tmp15Result = tmp15(7802);
          obj4[1] = tmp15Result.getAssetUriForEmbed(registerAssetDefault);
          obj4[2] = undefined;
          const merged1 = Object.assign(tmp17(7819)(message));
          return obj4;
        }
      }
      return null;
    }
  }
  return null;
};