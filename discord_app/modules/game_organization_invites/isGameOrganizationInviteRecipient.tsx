// discord_app/modules/game_organization_invites/isGameOrganizationInviteRecipient.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organization_invites/isGameOrganizationInviteRecipient.tsx");

export default function isGameOrganizationInviteRecipient(id, id, isBlockedOrIgnored) {
  let tmp = null != id;
  if (tmp) {
    tmp = id.id !== id;
  }
  if (tmp) {
    tmp = !id.bot;
  }
  if (tmp) {
    tmp = !id.isSystemUser();
  }
  if (tmp) {
    tmp = !isBlockedOrIgnored.isBlockedOrIgnored(id.id);
  }
  return tmp;
}
