// === Module 13208: InviteEmbed ===

// Module 13208 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7735 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 11306 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 11307 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13209 */;
import GroupDMInvite from "GroupDMInvite" /* 13211 */;
import FriendInvite from "FriendInvite" /* 13212 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 13213 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 13215 */;
import GuildProfileInvite from "GuildProfileInvite" /* 13217 */;
import InviteStore from "InviteStore" /* 4544 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  let obj = InviteStore;
  const invite = InviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      let id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return invite_GuildInvite.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = invite_GuildInvite.createDisabledGuildInvite(invite, theme);
            } else {
              erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = GroupDMInvite;
              return tmp29Result.createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = FriendInvite;
              return tmp29Result.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = InviteTypeUtils.getGuildInviteExtendedType(invite);
              if (InviteTypeUtils.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return GuildScheduledEventEmbed.createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: invite.code, theme };
                return EmbeddedActivityInviteEmbed.createEmbeddedActivityInviteEmbed(obj);
              } else if (InviteTypeUtils.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return GuildProfileInvite.createGuildProfileInvite(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: id, location: "mobile_invite_embed" };
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = VoiceChannelListInviteEmbed.createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = VoiceChannelListInviteEmbed;
                  }
                  tmp29Result5 = VoiceChannelListInviteExperiment;
                }
                return invite_GuildInvite.createGuildInvite(invite, tmp28, theme);
              } else {
                return invite_GuildInvite.createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result1 = InviteTypeUtils;
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
};