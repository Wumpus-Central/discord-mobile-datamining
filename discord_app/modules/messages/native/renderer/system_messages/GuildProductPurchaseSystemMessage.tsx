// === Module 8244: GuildProductPurchaseSystemMessage ===

// Module 8244 (GuildProductPurchaseSystemMessage)
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import useMessageAuthor from "useMessageAuthor" /* 4955 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8179 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8181 */;
import createCommonMessageDefault from "createCommonMessage" /* 8183 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8213 */;
import MessageRecord from "MessageRecord" /* 4372 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  const obj = {};
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
    const guildMemberAvatar = useMessageAuthor.getMessageAuthor(message).guildMemberAvatar;
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        const obj4 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = AvatarUtils.getGuildMemberAvatarSource(obj4, author);
        const tmp5Result = AvatarUtils;
      }
      const obj5 = { content: null, totalMonthsSubscribed: 0, username: null, avatarURL: null, welcomeLabel: null };
      const tmp9Result = tmp9(guildMemberAvatarSource);
      const obj6 = { username: messageAuthorWithProcessedColor.nick, usernameOnClickHandler: null, productName: null };
      const obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj6.usernameOnClickHandler = formatUsernameOnClickDefault(obj7);
      obj6.productName = product_name;
      obj5.content = GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile(obj6);
      obj5.username = messageAuthorWithProcessedColor.nick;
      obj5.avatarURL = tmp9Result.uri;
      const intl = util.intl;
      obj5.welcomeLabel = intl.string(util.t.s2N5HS);
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj5;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
  const tmp2 = new MessageRecord(message.message);
};