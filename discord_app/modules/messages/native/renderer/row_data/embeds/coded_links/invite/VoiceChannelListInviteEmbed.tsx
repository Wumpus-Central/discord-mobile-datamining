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
      let channel = getChannelAndRecipientsFromInviteDefault(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = ChannelStore.getChannel(channel.id);
          let tmp11 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            const obj = { guild, channel };
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
    let guild = GuildStore.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      let channel = displayNameStylesEnabled(11310)(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          channel = ChannelStore.getChannel(channel.id);
          let tmp11 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            let obj = { guild, channel };
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
    ({ colors, baseColors } = displayNameStylesEnabled(7945)(theme));
    let assetUriForEmbed;
    if (null != guild.icon) {
      assetUriForEmbed = guild(7946).getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
      let obj2 = guild(7946);
    }
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channel2.id, guild.id);
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(
      voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream),
      0,
    );
    arraySpreadResult = HermesBuiltin.arraySpread(
      voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream),
      arraySpreadResult,
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
        let obj = { guildId: guild.id, userId: member.user.id, avatar: member.avatar, size: 24 };
        let guildMemberAvatarURLSimple = AvatarUtilsDefault.getGuildMemberAvatarURLSimple(obj);
      } else {
        obj = AvatarUtilsDefault;
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
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
      obj = { userId: member.user.id, displayName: null, avatarUrl: null, isStreaming: null, fontId: null };
      let nick = member.nick;
      if (nick == null) {
        nick = UserUtilsDefault.getName(member.user);
      }
      obj.displayName = nick;
      obj.avatarUrl = assetUriForEmbed;
      let flag2 = member.voiceState.selfStream;
      if (flag2 == null) {
        flag2 = false;
      }
      obj.isStreaming = flag2;
      obj.fontId = tmp11;
      return obj;
    });
    const startTime = VoiceChannelStartTimeStore.getStartTime(channel2);
    obj = {};
    const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(guild.id);
    const merged = Object.assign(baseColors);
    const tmp20 = AccessibilityStore;
    const tmp29 = processColor;
    const tmp39 = displayNameStylesEnabled;
    const tmp41 = displayNameStylesEnabled(7945)(theme);
    const embedScrollGradientBackground = guild(4378).getEmbedScrollGradientBackground();
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
    const obj4 = guild(4378);
    obj.titleText = guild(4713).computeChannelName(channel2, UserStore, RelationshipStore);
    obj.titleColor = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = tmp30(1114).intl;
    obj.acceptLabelText = intl.string(guild(1114).t.gpqgah);
    ({
      acceptLabelGreenColor: obj3.acceptLabelColor,
      acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor,
    } = colors);
    const tmp30Result = guild(4713);
    const tmp35 = currentClientVoiceChannelId === channel2.id;
    const items1 = [GuildMemberStore];
    obj.canBeAccepted = tmp39(11311).canAcceptInvite(items1, invite);
    obj.embedCanBeTapped = true;
    obj.type = InviteTypes.GUILD;
    obj.voiceUsers = mapped;
    obj.voiceStartTimestamp = startTime;
    const intl2 = tmp30(1114).intl;
    obj.emptyStateText = intl2.string(guild(1114).t.zSqdrS);
    const intl3 = tmp30(1114).intl;
    const tmp39Result = tmp39(11311);
    obj.streamingLabel = intl3.string(guild(1114).t.dI3q4h).toUpperCase();
    obj.voiceHeaderBackgroundColor = colors.voiceHeaderBackgroundColor;
    obj.reducedMotion = tmp20.useReducedMotion;
    obj.isConnected = tmp35;
    const intl4 = tmp30(1114).intl;
    obj.privacyHintText = intl4.string(guild(1114).t.fkg9mQ);
    return obj;
  }
};
