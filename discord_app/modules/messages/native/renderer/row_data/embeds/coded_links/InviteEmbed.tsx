// === Module 12759: createInviteEmbed ===

// Module 12759 (createInviteEmbed)
import InviteTypes2 from "InviteTypes" /* 4369 */;
import getVoiceChannelListInviteExperiment from "getVoiceChannelListInviteExperiment" /* 10507 */;
import canShowVoiceChannelListInviteEmbed from "canShowVoiceChannelListInviteEmbed" /* 10508 */;
import createResolvingGuildInvite from "createResolvingGuildInvite" /* 12760 */;
import createGroupDMInvite from "createGroupDMInvite" /* 12762 */;
import createFriendInvite from "createFriendInvite" /* 12763 */;
import createGuildScheduledEventEmbed from "createGuildScheduledEventEmbed" /* 12764 */;
import createEmbeddedActivityInviteEmbed from "createEmbeddedActivityInviteEmbed" /* 12766 */;
import createGuildProfileInvite from "createGuildProfileInvite" /* 12768 */;
import updateInvite from "updateInvite" /* 4359 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { InviteTypes } from "InviteSendStates" /* 4371 */;

require = fn;
({ InviteStates: c4, AbortCodes: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, closure_2) {
  let obj = invite;
  invite = invite.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      let id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return createResolvingGuildInvite.createResolvingGuildInvite(closure_2);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, closure_2);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = createResolvingGuildInvite.createDisabledGuildInvite(invite, closure_2);
            } else {
              erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, closure_2);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypes2.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = createGroupDMInvite;
              return tmp29Result.createGroupDMInvite(invite, tmp28, closure_2);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = createFriendInvite;
              return tmp29Result.createFriendInvite(invite, tmp28, id, closure_2);
            } else {
              const guildInviteExtendedType = InviteTypes2.getGuildInviteExtendedType(invite);
              if (InviteTypes2.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return createGuildScheduledEventEmbed.createGuildScheduledEventInviteEmbed(invite, closure_2);
              } else if (InviteTypes2.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = closure_2;
                return createEmbeddedActivityInviteEmbed.createEmbeddedActivityInviteEmbed(obj);
              } else if (InviteTypes2.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return createGuildProfileInvite.createGuildProfileInvite(invite, closure_2);
              } else if (InviteTypes2.GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = canShowVoiceChannelListInviteEmbed.createVoiceChannelListInviteEmbed(invite, closure_2);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = canShowVoiceChannelListInviteEmbed;
                  }
                  tmp29Result5 = getVoiceChannelListInviteExperiment;
                }
                return createResolvingGuildInvite.createGuildInvite(invite, tmp28, closure_2);
              } else {
                return createResolvingGuildInvite.createGuildInvite(invite, tmp28, closure_2);
              }
              const tmp29Result1 = InviteTypes2;
            }
          }
        }
      }
      return createResolvingGuildInvite.createExpiredGuildInvite(closure_0, id === tmp4, closure_2);
    }
  }
};