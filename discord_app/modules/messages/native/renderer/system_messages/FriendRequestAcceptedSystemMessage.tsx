// discord_app/modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/07745_AssetRegistry.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx",
);

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  let obj5;
  let obj7;
  let tmp18Result2;
  message = message.message;
  const roleStyle = message.roleStyle;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = UserStore.getUser(recipientId);
      const currentUser = UserStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let formatToPartsResult;
          const obj9 = useAuthorWithProcessedColor;
          const userAuthorWithProcessedColor = obj9.getUserAuthorWithProcessedColor(user, channel);
          const obj = { userId: recipientId, message, author: userAuthorWithProcessedColor, roleStyle };
          const obj2 = {
            username: userAuthorWithProcessedColor.nick,
            usernameOnClick: formatUsernameOnClickDefault(obj),
          };
          const content = message.content;
          if (null != content) {
            let tmp6;
            if ("" !== content) {
              let formatToParts2Result;
              const obj3 = { baseTextColor: nativeDefault.colors.TEXT_SUBTLE };
              const createNativeStyleProperties = createStyles.createNativeStyleProperties;
              createStyles;
              const baseTextColor = createNativeStyleProperties(obj3)(message.theme).baseTextColor;
              const intl2 = intl3.intl;
              const formatToParts2 = intl2.formatToParts;
              const t2 = intl3.t;
              if (message.author.id === currentUser.id) {
                const v6pQebO = t2["6pQebO"];
                const obj4 = { note: content, formattedNote: obj5 };
                const merged = Object.assign(obj2);
                obj5 = { colorString: userAuthorWithProcessedColor.colorString };
                formatToParts2Result = formatToParts2(v6pQebO, obj4);
              } else {
                const bNrwDM = t2.bNrwDM;
                const obj6 = { note: content, formattedNote: obj7 };
                const merged1 = Object.assign(obj2);
                obj7 = { colorString: userAuthorWithProcessedColor.colorString };
                formatToParts2Result = formatToParts2(bNrwDM, obj6);
              }
              formatToPartsResult = formatToParts2Result;
              tmp6 = baseTextColor;
            }
            const obj8 = {
              content: formatToPartsResult,
              iconUrl: tmp18Result2.getAssetUriForEmbed(AssetRegistryDefault),
              textColor: tmp6,
            };
            tmp18Result2 = renderer_EmbedUtils;
            const merged2 = Object.assign(createCommonMessageDefault(message));
            return obj8;
          }
          const intl = intl3.intl;
          const formatToParts = intl.formatToParts;
          const t = intl3.t;
          if (message.author.id === currentUser.id) {
            formatToPartsResult = formatToParts(t.REfFZs, obj2);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj2);
          }
        }
      }
      return null;
    }
  }
  return null;
};
