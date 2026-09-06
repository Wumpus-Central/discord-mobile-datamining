// discord_app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import MessageRecord from "../../../../../records/MessageRecord.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx",
);

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  let obj = {};
  const merged = Object.assign(message);
  obj.message = new MessageRecord(message.message);
  obj.message.type = MessageTypes.ROLE_SUBSCRIPTION_PURCHASE;
  const purchaseNotification = obj.message.purchaseNotification;
  let product_name;
  if (purchaseNotification != null) {
    const guild_product_purchase = purchaseNotification.guild_product_purchase;
    if (guild_product_purchase != null) {
      product_name = guild_product_purchase.product_name;
    }
  }
  if (null == product_name) {
    return null;
  } else {
    message = obj.message;
    const author = message.author;
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    let obj1 = useMessageAuthor;
    const guildMemberAvatar = obj1.getMessageAuthor(message).guildMemberAvatar;
    let obj2 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        let tmp5Result = tmp5(1396);
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj, author);
      }
      obj = { content: null, totalMonthsSubscribed: 0, username: null, avatarURL: null, welcomeLabel: null };
      tmp5Result = tmp5(7994);
      obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClickHandler: null, productName: null };
      obj2 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj1.usernameOnClickHandler = formatUsernameOnClickDefault(obj2);
      obj1.productName = product_name;
      obj.content = tmp5Result.getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj.username = messageAuthorWithProcessedColor.nick;
      obj.avatarURL = tmp9(guildMemberAvatarSource).uri;
      const intl = tmp5(1114).intl;
      obj.welcomeLabel = intl.string(tmp5(1114).t.s2N5HS);
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
