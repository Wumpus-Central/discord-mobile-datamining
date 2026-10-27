// === Module 12737: getGameOrganizationDisplayNoun ===

// Module 12737 (getGameOrganizationDisplayNoun)
import util from "util" /* 1125 */;
import _modDef2403 from "module_2403" /* 2403 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11033 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(lowercase) {
  let flag = lowercase.lowercase;
  if (flag === undefined) {
    flag = false;
  }
  if (lowercase.displayNoun === constants.GUILD) {
    const intl2 = util.intl;
    const tmp8 = _modDef2403;
    intl2.string(flag ? tmp8.aikK3o : tmp8.sm5cz5);
  } else {
    const intl = util.intl;
    const tmp4 = _modDef2403;
    return intl.string(flag ? tmp4.xXXGsq : tmp4.nVMqjA);
  }
};