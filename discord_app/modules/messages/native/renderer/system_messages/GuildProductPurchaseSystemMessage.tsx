// discord_app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import getAvatarURL from "../../../../../utils/AvatarUtils.tsx";
import ensureAvatarSource from "../../../../../utils/native/AvatarUtils.tsx";
import useNullableMessageAuthor from "../../../useMessageAuthor.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getGuildProductPurchaseSystemMessageContentMobile from "../../../../guild_products/GuildProductSystemMessageUtils.tsx";
import hasFlag from "../../../../../records/MessageRecord.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import { MessageTypes } from "../../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

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
        let tmp5Result = getAvatarURL;
        obj = { userId: null, avatar: null, guildId: null };
        obj[0] = author.id;
        obj[1] = guildMemberAvatar;
        obj[2] = guildId;
        let guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj, author);
      }
      obj = { content: null, totalMonthsSubscribed: 0, username: null, avatarURL: null, welcomeLabel: null };
      tmp5Result = getGuildProductPurchaseSystemMessageContentMobile;
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
      const intl = getSystemLocale.intl;
      obj[4] = intl.string(getSystemLocale.t.s2N5HS);
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
  const tmp2 = new closure_3(message.message);
};