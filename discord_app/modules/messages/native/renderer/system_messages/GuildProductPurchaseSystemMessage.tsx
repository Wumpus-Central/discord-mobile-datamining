// discord_app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../../utils/AvatarUtils.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GuildProductSystemMessageUtils from "../../../../guild_products/GuildProductSystemMessageUtils.tsx";
import MessageRecord from "../../../../../records/MessageRecord.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx",
);

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
      const obj5 = {
        content: getGuildProductPurchaseSystemMessageContentMobile(obj6),
        totalMonthsSubscribed: 0,
        username: messageAuthorWithProcessedColor.nick,
        avatarURL: tmp9Result.uri,
        welcomeLabel: intl.string(intl2.t.s2N5HS),
      };
      tmp9Result = tmp9(guildMemberAvatarSource);
      obj6 = {
        username: messageAuthorWithProcessedColor.nick,
        usernameOnClickHandler: formatUsernameOnClickDefault(obj7),
        productName: product_name,
      };
      getGuildProductPurchaseSystemMessageContentMobile =
        GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile;
      obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      GuildProductSystemMessageUtils;
      intl = intl2.intl;
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj5;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
