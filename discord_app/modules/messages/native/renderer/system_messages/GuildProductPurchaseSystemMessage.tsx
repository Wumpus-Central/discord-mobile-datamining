// === Module 8024: GuildProductPurchaseSystemMessage ===

// Module 8024 (GuildProductPurchaseSystemMessage)
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import useMessageAuthor from "useMessageAuthor" /* 4793 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 7994 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

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
        let tmp5Result = AvatarUtils;
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj, author);
      }
      obj = { content: null, totalMonthsSubscribed: 0, username: null, avatarURL: null, welcomeLabel: null };
      tmp5Result = GuildProductSystemMessageUtils;
      obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClickHandler: null, productName: null };
      obj2 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj1.usernameOnClickHandler = formatUsernameOnClickDefault(obj2);
      obj1.productName = product_name;
      obj.content = tmp5Result.getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj.username = messageAuthorWithProcessedColor.nick;
      obj.avatarURL = tmp9(guildMemberAvatarSource).uri;
      const intl = util.intl;
      obj.welcomeLabel = intl.string(util.t.s2N5HS);
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
  const tmp2 = new MessageRecord(message.message);
};