// === Module 7942: createGuildProductPurchaseSystemMessage ===

// Module 7942 (createGuildProductPurchaseSystemMessage)
import ensureAvatarSource from "ensureAvatarSource" /* 1433 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4746 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7878 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7880 */;
import createCommonMessageDefault from "createCommonMessage" /* 7882 */;
import closure_3 from "hasFlag" /* 4131 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import { MessageTypes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  let obj = {};
  const merged = Object.assign(message);
  obj.message = new closure_3(message.message);
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
    channel = channel.getChannel(message.getChannelId());
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    obj1 = useNullableMessageAuthor;
    const guildMemberAvatar = obj1.getMessageAuthor(message).guildMemberAvatar;
    let obj2 = getMessageAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    ensureAvatarSource;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        let tmp5Result = tmp5(1430);
        obj = { userId: null, avatar: null, guildId: null };
        obj[0] = author.id;
        obj[1] = guildMemberAvatar;
        obj[2] = guildId;
        let guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj, author);
      }
      obj = { content: null, totalMonthsSubscribed: 0, username: null, avatarURL: null, welcomeLabel: null };
      tmp5Result = tmp5(7912);
      obj1 = { username: null, usernameOnClickHandler: null, productName: null };
      obj1[0] = messageAuthorWithProcessedColor.nick;
      obj2 = { message: null, author: null, roleStyle: null };
      obj2[0] = message;
      obj2[1] = messageAuthorWithProcessedColor;
      obj2[2] = message.roleStyle;
      obj1[1] = formatUsernameOnClickDefault(obj2);
      obj1[2] = product_name;
      obj[0] = tmp5Result.getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj[2] = messageAuthorWithProcessedColor.nick;
      obj[3] = tmp9(guildMemberAvatarSource).uri;
      const intl = tmp5(1233).intl;
      obj[4] = intl.string(tmp5(1233).t.s2N5HS);
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};