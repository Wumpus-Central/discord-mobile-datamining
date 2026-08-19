// discord_app/modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import getAvatarURL from "../../../../../utils/AvatarUtils.tsx";
import ensureAvatarSource from "../../../../../utils/native/AvatarUtils.tsx";
import useNullableMessageAuthor from "../../../useMessageAuthor.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import identityHook from "../../../../guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx";
import computeIsStickerReplyEnabled from "useIsStickerReplyEnabled.tsx";
import transform from "transformSticker.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../../stores/GuildStore.tsx";
import { SystemChannelFlags } from "../../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    const author = message.author;
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    let obj = useNullableMessageAuthor;
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    obj1 = getMessageAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        let tmp9 = null != guild;
        if (tmp9) {
          tmp9 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        }
        let tmp5Result = computeIsStickerReplyEnabled;
        if (tmp5Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          tmp5Result = transform;
          const tmp5Result1 = identityHook;
          const transformStickerResult = tmp5Result.transformSticker(identityHook.pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    ensureAvatarSource;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: null, avatar: null, guildId: null };
        obj[0] = author.id;
        obj[1] = guildMemberAvatar;
        obj[2] = guildId;
        let guildMemberAvatarSource = getAvatarURL.getGuildMemberAvatarSource(obj, author);
        const tmp5Result3 = getAvatarURL;
      }
      obj = { action: "bindOpenRoleSubscriptionOverview", guildId: null, messageId: null, channelId: null, roleSubscriptionListingId: null };
      obj[1] = guildId;
      obj[2] = message.id;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj[3] = id;
      const roleSubscriptionData2 = message.roleSubscriptionData;
      let prop;
      if (roleSubscriptionData2 != null) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      obj[4] = prop;
      const tmp17Result = tmp17(guildMemberAvatarSource);
      obj1 = { username: null, guildId: null, usernameOnClickHandler: null, roleSubscriptionOnClickHandler: null, roleSubscriptionData: null };
      obj1[0] = messageAuthorWithProcessedColor.nick;
      const obj2 = { content: null, totalMonthsSubscribed: null, username: null, avatarURL: null, sticker: null, stickerLabel: null, welcomeLabel: null };
      obj1[1] = guildId;
      const obj3 = { message: null, author: null, roleStyle: null };
      obj3[0] = message;
      obj3[1] = messageAuthorWithProcessedColor;
      obj3[2] = tmp;
      obj1[2] = formatUsernameOnClickDefault(obj3);
      obj1[3] = obj;
      obj1[4] = roleSubscriptionData;
      obj2[0] = identityHook.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj1);
      obj2[1] = roleSubscriptionData.total_months_subscribed;
      obj2[2] = messageAuthorWithProcessedColor.nick;
      obj2[3] = tmp17Result.uri;
      obj2[4] = transformStickerResult;
      const tmp5Result4 = identityHook;
      obj2[5] = identityHook.getRoleSubscriptionPurchaseStickerCTA(message.id, false);
      const intl = getSystemLocale.intl;
      obj2[6] = intl.string(getSystemLocale.t.piPHvY);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj2;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};