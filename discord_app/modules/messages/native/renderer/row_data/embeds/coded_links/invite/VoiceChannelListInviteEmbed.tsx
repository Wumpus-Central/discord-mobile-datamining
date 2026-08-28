// === Module 10882: canShowVoiceChannelListInviteEmbed ===

// Module 10882 (canShowVoiceChannelListInviteEmbed)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import InviteSendStates from "InviteSendStates" /* 7428 */;
import CodedLinkExtendedType2 from "CodedLinkExtendedType" /* 10884 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 10885 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import closure_5 from "_toTimestampMs" /* 10883 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "trackCommunicationDisabled" /* 1993 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "getUncachedChannelPermissions" /* 4090 */;
import closure_11 from "markAllUserIdListsStale" /* 4099 */;
import closure_12 from "mergeGuildAvatar" /* 1923 */;
import closure_13 from "updateVoiceState" /* 4465 */;
import closure_14 from "getVoiceStatesForGuild" /* 4521 */;

const processColor = get_ActivityIndicator.processColor;
const getGuildIconSource = GuildNSFWContentLevel.getGuildIconSource;
const CodedLinkExtendedType = CodedLinkExtendedType2.CodedLinkExtendedType;
const BasicPermissions = ME.BasicPermissions;
const InviteTypes = InviteSendStates.InviteTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx");

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  let tmp = null;
  if (null != invite.guild) {
    const guild = store2.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      let channel = getChannelAndRecipientsFromInviteDefault(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = store.getChannel(channel.id);
          let tmp11 = null;
          if (closure_10.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            const obj = { guild: null, channel: null };
            obj[0] = guild;
            obj[1] = channel;
            tmp11 = obj;
          }
          tmp = tmp11;
        }
      }
    }
  }
  return null != tmp;
};
export const createVoiceChannelListInviteEmbed = function createVoiceChannelListInviteEmbed(invite, closure_2) {
  let tmp = null;
  if (null != invite.guild) {
    let guild = store2.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      let channel = displayNameStylesEnabled(10885)(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = store.getChannel(channel.id);
          let tmp11 = null;
          if (closure_10.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            let obj = { guild: null, channel: null };
            obj[0] = guild;
            obj[1] = channel;
            tmp11 = obj;
          }
          tmp = tmp11;
        }
      }
    }
  }
  if (null == tmp) {
    return null;
  } else {
    guild = tmp.guild;
    const channel2 = tmp.channel;
    ({ colors, baseColors } = displayNameStylesEnabled(7801)(closure_2));
    let assetUriForEmbed;
    if (null != guild.icon) {
      assetUriForEmbed = guild(7802).getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
      let obj2 = guild(7802);
    }
    voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(channel2.id, guild.id);
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream), arraySpreadResult);
    const substr = items.slice(0, 10);
    displayNameStylesEnabled = obj.displayNameStylesEnabled;
    const mapped = substr.map((member) => {
      member = member.member;
      if (member == null) {
        member = closure_1_8.getMember(guild.id, member.user.id);
      }
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        let obj = { guildId: null, userId: null, avatar: null, size: 24 };
        obj[0] = guild.id;
        obj[1] = member.user.id;
        obj[2] = member.avatar;
        let guildMemberAvatarURLSimple = displayNameStylesEnabled(closure_1_2[18]).getGuildMemberAvatarURLSimple(obj);
        const obj2 = displayNameStylesEnabled(closure_1_2[18]);
      } else {
        obj = displayNameStylesEnabled(closure_1_2[18]);
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if (typeof guildMemberAvatarURLSimple === "number") {
        assetUriForEmbed = guild(closure_1_2[17]).getAssetUriForEmbed(guildMemberAvatarURLSimple);
        const obj6 = guild(closure_1_2[17]);
      }
      let tmp11;
      if (displayNameStylesEnabled) {
        let fontId;
        if (member != null) {
          const displayNameStyles = member.displayNameStyles;
          if (displayNameStyles != null) {
            fontId = displayNameStyles.fontId;
          }
        }
        if (fontId == null) {
          const displayNameStyles2 = member.user.displayNameStyles;
          let fontId1;
          if (displayNameStyles2 != null) {
            fontId1 = displayNameStyles2.fontId;
          }
          fontId = fontId1;
        }
        tmp11 = fontId;
      }
      obj = { userId: member.user.id, displayName: null, avatarUrl: null, isStreaming: null, fontId: null };
      let nick = member.nick;
      if (nick == null) {
        nick = displayNameStylesEnabled(closure_1_2[19]).getName(member.user);
        const obj5 = displayNameStylesEnabled(closure_1_2[19]);
      }
      obj[1] = nick;
      obj[2] = assetUriForEmbed;
      let flag2 = member.voiceState.selfStream;
      if (flag2 == null) {
        flag2 = false;
      }
      obj[3] = flag2;
      obj[4] = tmp11;
      return obj;
    });
    startTime = startTime.getStartTime(channel2);
    obj = {};
    currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(guild.id);
    const merged = Object.assign(baseColors);
    const tmp20 = obj;
    const tmp29 = processColor;
    const tmp39 = displayNameStylesEnabled;
    const tmp41 = displayNameStylesEnabled(7801)(closure_2);
    const embedScrollGradientBackground = guild(4265).getEmbedScrollGradientBackground();
    let backgroundColor = tmp29(embedScrollGradientBackground);
    if (backgroundColor == null) {
      backgroundColor = baseColors.backgroundColor;
    }
    obj.backgroundColor = backgroundColor;
    obj.extendedType = CodedLinkExtendedType.VOICE_CHANNEL_LIST_INVITE;
    obj.headerColor = colors.headerColor;
    obj.guildName = guild.name;
    obj.guildIcon = assetUriForEmbed;
    obj.headerText = "";
    const obj4 = guild(4265);
    obj.titleText = guild(4640).computeChannelName(channel2, closure_12, closure_11);
    obj.titleColor = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = tmp30(1236).intl;
    obj.acceptLabelText = intl.string(guild(1236).t.gpqgah);
    ({ acceptLabelGreenColor: obj3.acceptLabelColor, acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor } = colors);
    const tmp30Result = guild(4640);
    const tmp35 = currentClientVoiceChannelId === channel2.id;
    const items1 = [closure_8];
    obj.canBeAccepted = tmp39(10886).canAcceptInvite(items1, invite);
    obj.embedCanBeTapped = true;
    obj.type = InviteTypes.GUILD;
    obj.voiceUsers = mapped;
    obj.voiceStartTimestamp = startTime;
    const intl2 = tmp30(1236).intl;
    obj.emptyStateText = intl2.string(guild(1236).t.zSqdrS);
    const intl3 = tmp30(1236).intl;
    const tmp39Result = tmp39(10886);
    obj.streamingLabel = intl3.string(guild(1236).t.dI3q4h).toUpperCase();
    obj.voiceHeaderBackgroundColor = colors.voiceHeaderBackgroundColor;
    obj.reducedMotion = tmp20.useReducedMotion;
    obj.isConnected = tmp35;
    const intl4 = tmp30(1236).intl;
    obj.privacyHintText = intl4.string(guild(1236).t.fkg9mQ);
    return obj;
  }
};