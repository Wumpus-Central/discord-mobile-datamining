// === Module 8074: FriendRequestAcceptedSystemMessage ===

// Module 8074 (FriendRequestAcceptedSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import _modDef8075 from "module_8075" /* 8075 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = UserStore.getUser(recipientId);
      const currentUser = UserStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let colorString = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
          let obj = { userId: recipientId, message, author: colorString, roleStyle: message.roleStyle };
          obj = { username: colorString.nick, usernameOnClick: null };
          obj.usernameOnClick = formatUsernameOnClickDefault(obj);
          let content = message.content;
          if (null != content) {
            if ("" !== content) {
              let tmp15Result = tmp15(4560);
              const obj1 = { baseTextColor: tmp17(576).colors.TEXT_SUBTLE };
              const intl2 = tmp15(1114).intl;
              const formatToParts2 = intl2.formatToParts;
              let t = tmp15(1114).t;
              if (tmp18) {
                t = {};
                obj = Object.assign(obj);
                t.note = content;
                content = { colorString: null };
                colorString = colorString.colorString;
                content.colorString = colorString;
                t.formattedNote = content;
                let formatToParts2Result = formatToParts2(t["6pQebO"], t);
              } else {
                const obj2 = {};
                const merged = Object.assign(obj);
                obj2.note = content;
                const obj3 = { colorString: colorString.colorString };
                obj2.formattedNote = obj3;
                formatToParts2Result = formatToParts2(t.bNrwDM, obj2);
              }
              const baseTextColor = tmp15Result.createNativeStyleProperties(obj1)(message.theme).baseTextColor;
            }
          }
          const intl = tmp15(1114).intl;
          const formatToParts = intl.formatToParts;
          t = tmp15(1114).t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj);
          }
          const obj4 = { content: formatToPartsResult, iconUrl: null, textColor: null };
          tmp15Result = tmp15(7946);
          obj4.iconUrl = tmp15Result.getAssetUriForEmbed(_modDef8075);
          obj4.textColor = undefined;
          const merged1 = Object.assign(tmp17(7964)(message));
          return obj4;
        }
      }
      return null;
    }
  }
  return null;
};