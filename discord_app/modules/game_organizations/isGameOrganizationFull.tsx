// === Module 12443: isGameOrganizationFull ===

// Module 12443 (isGameOrganizationFull)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organizations/isGameOrganizationFull.tsx");

export default function isGameOrganizationFull(arg0) {
  ({ memberCount, maxMembers } = arg0);
  return null != memberCount && null != maxMembers && memberCount >= maxMembers;
};