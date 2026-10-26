// === Module 11322: groupInvitableGameOrganizationsByApplication ===

// Module 11322 (groupInvitableGameOrganizationsByApplication)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_organization_invites/groupInvitableGameOrganizationsByApplication.tsx");

export default function groupInvitableGameOrganizationsByApplication(arg0) {
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    value = map.get(nextResult.application.id);
    if (null != value) {
      let gameOrganizations = tmp4.gameOrganizations;
      let arr = gameOrganizations.push(tmp2);
    } else {
      let obj = { application: tmp2.application, gameOrganizations: null };
      let items = [tmp2];
      obj.gameOrganizations = items;
      let result = map.set(tmp2.application.id, obj);
    }
    continue;
  }
  return Array.from(map.values());
};