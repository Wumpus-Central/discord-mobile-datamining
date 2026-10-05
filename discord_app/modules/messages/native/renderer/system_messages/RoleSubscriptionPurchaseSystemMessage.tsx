// === Module 7693: RoleSubscriptionPurchaseSystemMessage ===

// Module 7693 (RoleSubscriptionPurchaseSystemMessage)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import useMessageAuthor from "useMessageAuthor" /* 5304 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7619 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7621 */;
import createCommonMessageDefault from "createCommonMessage" /* 7623 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 7651 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 7657 */;
import transformSticker2 from "transformSticker" /* 7658 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const SystemChannelFlags = Constants.SystemChannelFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  let id;
  let intl;
  let obj7;
  let prop;
  let tmp5Result12;
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    let transformStickerResult;
    const author = message.author;
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const guild = GuildStore.getGuild(guildId);
    const obj = useMessageAuthor;
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    const obj2 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        const tmp9 = null != guild && !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        const tmp5Result = useIsStickerReplyEnabled;
        if (tmp5Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          const transformSticker = transformSticker2.transformSticker;
          transformSticker2;
          const tmp5Result8 = GuildRoleSubscriptionSystemMessageUtils;
          transformStickerResult = transformSticker(tmp5Result8.pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      let guildMemberAvatarSource;
      if (null != guildId) {
        const obj3 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        const tmp5Result10 = AvatarUtils;
        guildMemberAvatarSource = tmp5Result10.getGuildMemberAvatarSource(obj3, author);
      }
      const obj4 = { action: "bindOpenRoleSubscriptionOverview", guildId, messageId: message.id, channelId: id, roleSubscriptionListingId: prop };
      id = undefined;
      const tmp18Result = tmp18(guildMemberAvatarSource);
      if (channel != null) {
        id = channel.id;
      }
      const roleSubscriptionData2 = message.roleSubscriptionData;
      prop = undefined;
      if (roleSubscriptionData2 != null) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      const obj5 = { username: messageAuthorWithProcessedColor.nick, guildId, usernameOnClickHandler: formatUsernameOnClickDefault(obj7), roleSubscriptionOnClickHandler: obj4, roleSubscriptionData };
      const getRoleSubscriptionPurchaseSystemMessageContentMobile = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile;
      const obj6 = { content: getRoleSubscriptionPurchaseSystemMessageContentMobile(obj5), totalMonthsSubscribed: roleSubscriptionData.total_months_subscribed, username: messageAuthorWithProcessedColor.nick, avatarURL: tmp18Result.uri, sticker: transformStickerResult, stickerLabel: tmp5Result12.getRoleSubscriptionPurchaseStickerCTA(message.id, false), welcomeLabel: intl.string(intl2.t.piPHvY) };
      obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle: tmp };
      GuildRoleSubscriptionSystemMessageUtils;
      tmp5Result12 = GuildRoleSubscriptionSystemMessageUtils;
      intl = intl2.intl;
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj6;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};