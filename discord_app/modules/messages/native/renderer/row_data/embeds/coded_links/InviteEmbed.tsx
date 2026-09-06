// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
import InviteTypeUtils from "../../../../../../instant_invite/InviteTypeUtils.tsx";
import invite_GuildInvite from "invite/GuildInvite.tsx";
import InviteStore from "../../../../../../../stores/InviteStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx",
);

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
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
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
              let tmp29Result = tmp29(13211);
              return tmp29Result.createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(13212);
              return tmp29Result.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7735).getGuildInviteExtendedType(invite);
              if (tmp29(7735).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(13213).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7735).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: invite.code, theme };
                return tmp29(13215).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(7735).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(13217).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7735).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: id, location: "mobile_invite_embed" };
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(11307).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(11307);
                  }
                  tmp29Result5 = tmp29(11306);
                }
                return tmp29(13209).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(13209).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result1 = tmp29(7735);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
};
