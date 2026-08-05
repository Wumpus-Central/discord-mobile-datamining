// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx
import { processColor } from "frozen";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import _toTimestampMs from "_toTimestampMs";
import { getGuildIconSource } from "GuildNSFWContentLevel";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { BasicPermissions } from "ME";
import { InviteTypes } from "InviteSendStates";

const result = require("_toTimestampMs").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx");

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  let tmp = null;
  if (null != invite.guild) {
    const guild = store2.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      let channel = require("getChannelAndRecipientsFromInvite.tsx")(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = store.getChannel(channel.id);
          let tmp11 = null;
          if (getUncachedChannelPermissions.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
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
  let baseColors;
  let colors;
  let tmp = null;
  if (null != invite.guild) {
    let guild = store2.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      let channel = displayNameStylesEnabled(10907)(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = store.getChannel(channel.id);
          let tmp11 = null;
          if (getUncachedChannelPermissions.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
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
    ({ colors, baseColors } = displayNameStylesEnabled(7863)(closure_2));
    let assetUriForEmbed;
    if (null != guild.icon) {
      assetUriForEmbed = guild(7865).getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
      let obj2 = guild(7865);
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
        member = outer1_8.getMember(guild.id, member.user.id);
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
        let guildMemberAvatarURLSimple = displayNameStylesEnabled(outer1_2[18]).getGuildMemberAvatarURLSimple(obj);
        const obj2 = displayNameStylesEnabled(outer1_2[18]);
      } else {
        obj = displayNameStylesEnabled(outer1_2[18]);
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if (typeof guildMemberAvatarURLSimple === "number") {
        assetUriForEmbed = guild(outer1_2[17]).getAssetUriForEmbed(guildMemberAvatarURLSimple);
        const obj6 = guild(outer1_2[17]);
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
        nick = displayNameStylesEnabled(outer1_2[19]).getName(member.user);
        const obj5 = displayNameStylesEnabled(outer1_2[19]);
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
    const tmp41 = displayNameStylesEnabled(7863)(closure_2);
    const embedScrollGradientBackground = guild(4096).getEmbedScrollGradientBackground();
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
    const obj4 = guild(4096);
    obj.titleText = guild(4475).computeChannelName(channel2, mergeGuildAvatar, upsertRelationship);
    obj.titleColor = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = tmp30(1236).intl;
    obj.acceptLabelText = intl.string(guild(1236).t.gpqgah);
    ({ acceptLabelGreenColor: obj3.acceptLabelColor, acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor } = colors);
    const tmp30Result = guild(4475);
    const tmp35 = currentClientVoiceChannelId === channel2.id;
    const items1 = [trackCommunicationDisabled];
    obj.canBeAccepted = tmp39(10908).canAcceptInvite(items1, invite);
    obj.embedCanBeTapped = true;
    obj.type = InviteTypes.GUILD;
    obj.voiceUsers = mapped;
    obj.voiceStartTimestamp = startTime;
    const intl2 = tmp30(1236).intl;
    obj.emptyStateText = intl2.string(guild(1236).t.zSqdrS);
    const intl3 = tmp30(1236).intl;
    const tmp39Result = tmp39(10908);
    obj.streamingLabel = intl3.string(guild(1236).t.dI3q4h).toUpperCase();
    obj.voiceHeaderBackgroundColor = colors.voiceHeaderBackgroundColor;
    obj.reducedMotion = tmp20.useReducedMotion;
    obj.isConnected = tmp35;
    const intl4 = tmp30(1236).intl;
    obj.privacyHintText = intl4.string(guild(1236).t.fkg9mQ);
    return obj;
  }
};