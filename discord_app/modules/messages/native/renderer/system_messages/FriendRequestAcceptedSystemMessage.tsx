// === Module 8336: FriendRequestAcceptedSystemMessage ===

// Module 8336 (FriendRequestAcceptedSystemMessage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import createStyles from "createStyles" /* 4757 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8208 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8222 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8224 */;
import createCommonMessageDefault from "createCommonMessage" /* 8226 */;
import _modDef8337 from "module_8337" /* 8337 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import UserStore from "UserStore" /* 1372 */;

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
          const obj = { userId: recipientId, message, author: colorString, roleStyle: message.roleStyle };
          let obj2 = { username: colorString.nick, usernameOnClick: formatUsernameOnClickDefault(obj) };
          let content = message.content;
          if (null != content) {
            if ("" !== content) {
              const obj3 = { baseTextColor: nativeDefault.colors.TEXT_SUBTLE };
              const intl2 = util.intl;
              const formatToParts2 = intl2.formatToParts;
              let t1 = util.t;
              if (tmp18) {
                t1 = {};
                obj2 = Object.assign(obj2);
                t1.note = content;
                content = { colorString: null };
                colorString = colorString.colorString;
                content.colorString = colorString;
                t1.formattedNote = content;
                let formatToParts2Result = formatToParts2(t1["6pQebO"], t1);
              } else {
                const obj4 = {};
                const merged = Object.assign(obj2);
                obj4.note = content;
                const obj5 = { colorString: colorString.colorString };
                obj4.formattedNote = obj5;
                formatToParts2Result = formatToParts2(t1.bNrwDM, obj4);
              }
              const baseTextColor = createStyles.createNativeStyleProperties(obj3)(message.theme).baseTextColor;
              const tmp15Result = createStyles;
            }
          }
          const intl = util.intl;
          const formatToParts = intl.formatToParts;
          const t = util.t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj2);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj2);
          }
          const obj6 = { content: formatToPartsResult, iconUrl: null, textColor: null };
          obj6.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8337);
          obj6.textColor = undefined;
          const merged1 = Object.assign(createCommonMessageDefault(message));
          return obj6;
        }
      }
      return null;
    }
  }
  return null;
};