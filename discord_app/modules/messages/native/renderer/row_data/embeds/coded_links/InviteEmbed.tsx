// === Module 13047: InviteEmbed ===

// Module 13047 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7225 */;
import Constants2 from "Constants" /* 7226 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 10021 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 10022 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13048 */;
import GroupDMInvite from "GroupDMInvite" /* 13050 */;
import FriendInvite from "FriendInvite" /* 13051 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 13052 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 13054 */;
import GuildProfileInvite from "GuildProfileInvite" /* 13056 */;
import InviteStore from "InviteStore" /* 4871 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  const invite = InviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    let id;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      const obj17 = invite_GuildInvite;
      return obj17.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            let erroredGuildInvite;
            const inviteError = InviteStore.getInviteError(code);
            if (null == inviteError) {
              const obj15 = invite_GuildInvite;
              erroredGuildInvite = obj15.createErroredGuildInvite(code, tmp28, theme);
            } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
              const obj14 = invite_GuildInvite;
              erroredGuildInvite = obj14.createDisabledGuildInvite(invite, theme);
            } else {
              const obj13 = invite_GuildInvite;
              erroredGuildInvite = obj13.createErroredGuildInvite(code, tmp28, theme);
            }
            return erroredGuildInvite;
          } else {
            const obj18 = InviteTypeUtils;
            const inviteType = obj18.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              const tmp29Result = GroupDMInvite;
              return tmp29Result.createGroupDMInvite(invite, id === tmp4, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = FriendInvite;
              return tmp29Result10.createFriendInvite(invite, id === tmp4, id, theme);
            } else {
              const tmp29Result11 = InviteTypeUtils;
              const guildInviteExtendedType = tmp29Result11.getGuildInviteExtendedType(invite);
              if (InviteTypeUtils.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                const tmp29Result12 = GuildScheduledEventEmbed;
                return tmp29Result12.createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                const tmp29Result13 = EmbeddedActivityInviteEmbed;
                return tmp29Result13.createEmbeddedActivityInviteEmbed(obj2);
              } else if (InviteTypeUtils.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                const tmp29Result14 = GuildProfileInvite;
                return tmp29Result14.createGuildProfileInvite(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  const tmp29Result15 = VoiceChannelListInviteExperiment;
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const tmp29Result16 = VoiceChannelListInviteEmbed;
                    const voiceChannelListInviteEmbed = tmp29Result16.createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                  }
                }
                const tmp29Result17 = invite_GuildInvite;
                return tmp29Result17.createGuildInvite(invite, id === tmp4, theme);
              } else {
                const tmp29Result18 = invite_GuildInvite;
                return tmp29Result18.createGuildInvite(invite, id === tmp4, theme);
              }
            }
          }
        }
      }
      const obj16 = invite_GuildInvite;
      return obj16.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
};