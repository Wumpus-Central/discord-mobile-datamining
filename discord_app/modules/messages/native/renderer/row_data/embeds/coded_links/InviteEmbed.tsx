// === Module 14446: InviteEmbed ===

// Module 14446 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 5743 */;
import invite_GuildInvite from "invite/GuildInvite" /* 14447 */;
import GroupDMInvite from "GroupDMInvite" /* 14451 */;
import FriendInvite from "FriendInvite" /* 14453 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 14454 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 14457 */;
import GuildProfileInvite from "GuildProfileInvite" /* 14459 */;
import InviteStore from "InviteStore" /* 5731 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const Constants = fn(1071);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(5745).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export function createInviteEmbed(author, code, theme) {
  const invite = InviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return invite_GuildInvite.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            const inviteError = InviteStore.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp26, theme);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = invite_GuildInvite.createDisabledGuildInvite(invite, theme);
            } else {
              erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp26, theme);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              return GroupDMInvite.createGroupDMInvite(invite, tmp26, theme);
            } else if (tmp30.FRIEND === inviteType) {
              const tmp27Result7 = FriendInvite;
              return tmp27Result7.createFriendInvite(invite, tmp26, id, theme);
            } else {
              const guildInviteExtendedType = InviteTypeUtils.getGuildInviteExtendedType(invite);
              if (InviteTypeUtils.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return GuildScheduledEventEmbed.createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return EmbeddedActivityInviteEmbed.createEmbeddedActivityInviteEmbed(obj2);
              } else if (InviteTypeUtils.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return GuildProfileInvite.createGuildProfileInvite(invite, theme);
              } else {
                return invite_GuildInvite.createGuildInvite(invite, tmp26, theme);
              }
              const tmp27Result8 = InviteTypeUtils;
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
}