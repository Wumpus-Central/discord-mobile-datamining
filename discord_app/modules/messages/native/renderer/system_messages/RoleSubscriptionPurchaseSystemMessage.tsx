// === Module 8022: RoleSubscriptionPurchaseSystemMessage ===

// Module 8022 (RoleSubscriptionPurchaseSystemMessage)
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import useMessageAuthor from "useMessageAuthor" /* 4793 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    const author = message.author;
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const guild = GuildStore.getGuild(guildId);
    let obj = useMessageAuthor;
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    let obj1 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        let tmp9 = null != guild;
        if (tmp9) {
          tmp9 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        }
        let tmp5Result = tmp5(7997);
        if (tmp5Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          tmp5Result = tmp5(7998);
          const tmp5Result1 = tmp5(7992);
          const transformStickerResult = tmp5Result.transformSticker(tmp5(7992).pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = tmp5(1396).getGuildMemberAvatarSource(obj, author);
        const tmp5Result3 = tmp5(1396);
      }
      obj = { action: "bindOpenRoleSubscriptionOverview", guildId, messageId: message.id, channelId: null, roleSubscriptionListingId: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj.channelId = id;
      const roleSubscriptionData2 = message.roleSubscriptionData;
      let prop;
      if (roleSubscriptionData2 != null) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      obj.roleSubscriptionListingId = prop;
      const tmp17Result = tmp17(guildMemberAvatarSource);
      obj1 = { username: messageAuthorWithProcessedColor.nick, guildId: null, usernameOnClickHandler: null, roleSubscriptionOnClickHandler: null, roleSubscriptionData: null };
      const obj2 = { content: null, totalMonthsSubscribed: null, username: null, avatarURL: null, sticker: null, stickerLabel: null, welcomeLabel: null };
      obj1.guildId = guildId;
      const obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle: tmp };
      obj1.usernameOnClickHandler = formatUsernameOnClickDefault(obj3);
      obj1.roleSubscriptionOnClickHandler = obj;
      obj1.roleSubscriptionData = roleSubscriptionData;
      obj2.content = tmp5(7992).getRoleSubscriptionPurchaseSystemMessageContentMobile(obj1);
      obj2.totalMonthsSubscribed = roleSubscriptionData.total_months_subscribed;
      obj2.username = messageAuthorWithProcessedColor.nick;
      obj2.avatarURL = tmp17Result.uri;
      obj2.sticker = transformStickerResult;
      const tmp5Result4 = tmp5(7992);
      obj2.stickerLabel = tmp5(7992).getRoleSubscriptionPurchaseStickerCTA(message.id, false);
      const intl = tmp5(1114).intl;
      obj2.welcomeLabel = intl.string(tmp5(1114).t.piPHvY);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj2;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};