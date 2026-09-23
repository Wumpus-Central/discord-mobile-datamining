// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx
import _mod17 from "../../../../../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../../../../../Constants.tsx";
import AvatarUtilsDefault from "../../../../../../../../utils/AvatarUtils.tsx";
import GuildRecord from "../../../../../../../../records/GuildRecord.tsx";
import UserUtilsDefault from "../../../../../../../../utils/UserUtils.tsx";
import Constants2 from "../../../../../../../instant_invite/Constants.tsx";
import renderer_EmbedUtils from "../../../../EmbedUtils.tsx";
import CodedLinksConstants from "../CodedLinksConstants.tsx";
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite.tsx";
import AccessibilityStore from "../../../../../../../a11y/AccessibilityStore.tsx";
import VoiceChannelStartTimeStore from "../../../../../../../channel/VoiceChannelStartTimeStore.tsx";
import ChannelStore from "../../../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../../../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../../../../../../stores/views/SortedVoiceStateStore.tsx";
import size from "../../../../../../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const BasicPermissions = Constants.BasicPermissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx",
);

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  let tmp = null;
  if (null != invite.guild) {
    const guild = GuildStore.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      const channel = getChannelAndRecipientsFromInviteDefault(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          let channel1 = ChannelStore.getChannel(channel.id);
          if (channel1 == null) {
            channel1 = channel;
          }
          let tmp11 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel1)) {
            const obj = { guild, channel: channel1 };
            tmp11 = obj;
          }
          tmp = tmp11;
        }
      }
    }
  }
  return null != tmp;
};
export const createVoiceChannelListInviteEmbed = function createVoiceChannelListInviteEmbed(invite, theme) {
  let tmp = null;
  if (null != invite.guild) {
    const guild1 = GuildStore.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild1) {
      const channel = displayNameStylesEnabled(11653)(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          let channel1 = ChannelStore.getChannel(channel.id);
          if (channel1 == null) {
            channel1 = channel;
          }
          let tmp11 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel1)) {
            let obj = { guild: guild1, channel: channel1 };
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
    const guild = tmp.guild;
    const channel2 = tmp.channel;
    ({ colors, baseColors } = displayNameStylesEnabled(8289)(theme));
    let assetUriForEmbed;
    if (null != guild.icon) {
      assetUriForEmbed = guild(8290).getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
      let obj2 = guild(8290);
    }
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channel2.id, guild.id);
    const items = [];
    const tmp39 = displayNameStylesEnabled;
    const tmp41 = displayNameStylesEnabled(8289)(theme);
    HermesBuiltin.arraySpread(
      voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream),
      HermesBuiltin.arraySpread(
        voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream),
        0,
      ),
    );
    const substr = items.slice(0, 10);
    displayNameStylesEnabled = AccessibilityStore.displayNameStylesEnabled;
    const mapped = substr.map((member) => {
      member = member.member;
      if (member == null) {
        member = GuildMemberStore.getMember(guild.id, member.user.id);
      }
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        const obj3 = { guildId: guild.id, userId: member.user.id, avatar: member.avatar, size: 24 };
        let guildMemberAvatarURLSimple = AvatarUtilsDefault.getGuildMemberAvatarURLSimple(obj3);
      } else {
        guildMemberAvatarURLSimple = AvatarUtilsDefault.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if (typeof guildMemberAvatarURLSimple === "number") {
        assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(guildMemberAvatarURLSimple);
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
      const obj4 = { userId: member.user.id, displayName: null, avatarUrl: null, isStreaming: null, fontId: null };
      let nick = member.nick;
      if (nick == null) {
        nick = UserUtilsDefault.getName(member.user);
      }
      obj4.displayName = nick;
      obj4.avatarUrl = assetUriForEmbed;
      let flag2 = member.voiceState.selfStream;
      if (flag2 == null) {
        flag2 = false;
      }
      obj4.isStreaming = flag2;
      obj4.fontId = tmp11;
      return obj4;
    });
    const startTime = VoiceChannelStartTimeStore.getStartTime(channel2);
    let obj5 = {};
    const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(guild.id);
    const merged = Object.assign(baseColors);
    const arraySpreadResult = HermesBuiltin.arraySpread(
      voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream),
      0,
    );
    const embedScrollGradientBackground = guild(4645).getEmbedScrollGradientBackground();
    let backgroundColor = processColor(embedScrollGradientBackground);
    if (backgroundColor == null) {
      backgroundColor = baseColors.backgroundColor;
    }
    obj5.backgroundColor = backgroundColor;
    obj5.extendedType = CodedLinkExtendedType.VOICE_CHANNEL_LIST_INVITE;
    obj5.headerColor = colors.headerColor;
    obj5.guildName = guild.name;
    obj5.guildIcon = assetUriForEmbed;
    obj5.headerText = "";
    let obj4 = guild(4645);
    obj5.titleText = guild(4980).computeChannelName(channel2, UserStore, RelationshipStore);
    obj5.titleColor = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = tmp30(1115).intl;
    obj5.acceptLabelText = intl.string(guild(1115).t.gpqgah);
    ({
      acceptLabelGreenColor: obj3.acceptLabelColor,
      acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor,
    } = colors);
    const tmp30Result = guild(4980);
    const tmp35 = currentClientVoiceChannelId === channel2.id;
    const items1 = [GuildMemberStore];
    obj5.canBeAccepted = tmp39(11654).canAcceptInvite(items1, invite);
    obj5.embedCanBeTapped = true;
    obj5.type = InviteTypes.GUILD;
    obj5.voiceUsers = mapped;
    obj5.voiceStartTimestamp = startTime;
    const intl2 = tmp30(1115).intl;
    obj5.emptyStateText = intl2.string(guild(1115).t.zSqdrS);
    const intl3 = tmp30(1115).intl;
    const tmp39Result = tmp39(11654);
    obj5.streamingLabel = intl3.string(guild(1115).t.dI3q4h).toUpperCase();
    obj5.voiceHeaderBackgroundColor = colors.voiceHeaderBackgroundColor;
    obj5.reducedMotion = AccessibilityStore.useReducedMotion;
    obj5.isConnected = tmp35;
    const intl4 = tmp30(1115).intl;
    obj5.privacyHintText = intl4.string(guild(1115).t.fkg9mQ);
    return obj5;
  }
};
