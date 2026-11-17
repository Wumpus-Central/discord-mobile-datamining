// === Module 12734: getGameOrganizationDisplayNoun ===

// Module 12734 (getGameOrganizationDisplayNoun)
import util from "util" /* 1113 */;
import _modDef2565 from "module_2565" /* 2565 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
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
    const tmp8 = _modDef2565;
    intl2.string(flag ? tmp8.aikK3o : tmp8.sm5cz5);
  } else {
    const intl = util.intl;
    const tmp4 = _modDef2565;
    return intl.string(flag ? tmp4.xXXGsq : tmp4.nVMqjA);
  }
};