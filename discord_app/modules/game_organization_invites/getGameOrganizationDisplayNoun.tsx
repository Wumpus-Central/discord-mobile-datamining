// === Module 14349: getGameOrganizationDisplayNoun ===

// Module 14349 (getGameOrganizationDisplayNoun)
import util from "util" /* 1128 */;
import _modDef2396 from "module_2396" /* 2396 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10822 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  if (arg0 === constants.GUILD) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef2396.sm5cz5);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef2396.nVMqjA);
  }
  return stringResult;
};