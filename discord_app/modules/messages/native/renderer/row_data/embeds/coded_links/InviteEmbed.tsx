// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
import updateInvite from "updateInvite";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";
import { InviteTypes } from "../../../../../../instant_invite/InviteTypeUtils.tsx";
import { createResolvingGuildInvite } from "invite/GuildInvite.tsx";

let c4;
let c5;
const require = arg1;
({ InviteStates: c4, AbortCodes: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, updateInvite) {
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
      return createResolvingGuildInvite.createResolvingGuildInvite(updateInvite);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj15 = createResolvingGuildInvite;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = createResolvingGuildInvite.createDisabledGuildInvite(invite, updateInvite);
              const obj14 = createResolvingGuildInvite;
            } else {
              erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj13 = createResolvingGuildInvite;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypes.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = tmp29(12600);
              return tmp29Result.createGroupDMInvite(invite, tmp28, updateInvite);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(12601);
              return tmp29Result.createFriendInvite(invite, tmp28, id, updateInvite);
            } else {
              const guildInviteExtendedType = tmp29(7195).getGuildInviteExtendedType(invite);
              if (tmp29(7195).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12602).createGuildScheduledEventInviteEmbed(invite, updateInvite);
              } else if (tmp29(7195).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = updateInvite;
                return tmp29(12604).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(7195).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12606).createGuildProfileInvite(invite, updateInvite);
              } else if (tmp29(7195).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10990).createVoiceChannelListInviteEmbed(invite, updateInvite);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(10990);
                  }
                  tmp29Result5 = tmp29(10989);
                }
                return tmp29(12598).createGuildInvite(invite, tmp28, updateInvite);
              } else {
                return tmp29(12598).createGuildInvite(invite, tmp28, updateInvite);
              }
              const tmp29Result1 = tmp29(7195);
            }
            const obj18 = InviteTypes;
          }
        }
      }
      return createResolvingGuildInvite.createExpiredGuildInvite(closure_0, id === tmp4, updateInvite);
    }
  }
};