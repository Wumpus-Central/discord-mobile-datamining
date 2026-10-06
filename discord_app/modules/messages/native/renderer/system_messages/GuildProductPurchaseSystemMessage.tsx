// === Module 7706: GuildProductPurchaseSystemMessage ===

// Module 7706 (GuildProductPurchaseSystemMessage)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import useMessageAuthor from "useMessageAuthor" /* 5311 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 7664 */;
import MessageRecord from "MessageRecord" /* 4526 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  let getGuildProductPurchaseSystemMessageContentMobile;
  let intl;
  let obj6;
  let obj7;
  let tmp9Result;
  const obj = { message: new MessageRecord(message.message) };
  const merged = Object.assign(message);
  obj.message.type = MessageTypes.ROLE_SUBSCRIPTION_PURCHASE;
  const purchaseNotification = obj.message.purchaseNotification;
  let product_name;
  new MessageRecord(message.message);
  if (purchaseNotification != null) {
    const guild_product_purchase = purchaseNotification.guild_product_purchase;
    if (guild_product_purchase != null) {
      product_name = guild_product_purchase.product_name;
    }
  }
  if (null == product_name) {
    return null;
  } else {
    let guildId;
    message = obj.message;
    const author = message.author;
    const roleStyle = message.roleStyle;
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const obj2 = useMessageAuthor;
    const guildMemberAvatar = obj2.getMessageAuthor(message).guildMemberAvatar;
    const obj3 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj3.getMessageAuthorWithProcessedColor(message);
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      let guildMemberAvatarSource;
      if (null != guildId) {
        const obj4 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        const tmp5Result = AvatarUtils;
        guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj4, author);
      }
      const obj5 = { content: getGuildProductPurchaseSystemMessageContentMobile(obj6), totalMonthsSubscribed: 0, username: messageAuthorWithProcessedColor.nick, avatarURL: tmp9Result.uri, welcomeLabel: intl.string(intl2.t.s2N5HS) };
      tmp9Result = tmp9(guildMemberAvatarSource);
      obj6 = { username: messageAuthorWithProcessedColor.nick, usernameOnClickHandler: formatUsernameOnClickDefault(obj7), productName: product_name };
      getGuildProductPurchaseSystemMessageContentMobile = GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile;
      obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      GuildProductSystemMessageUtils;
      intl = intl2.intl;
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj5;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};