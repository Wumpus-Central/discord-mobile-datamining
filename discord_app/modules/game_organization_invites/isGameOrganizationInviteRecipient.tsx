// === Module 11816: isGameOrganizationInviteRecipient ===

// Module 11816 (isGameOrganizationInviteRecipient)
import size from "module_2" /* 2 */;

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
};