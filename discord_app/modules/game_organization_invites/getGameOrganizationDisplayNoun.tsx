// === Module 14202: getGameOrganizationDisplayNoun ===

// Module 14202 (getGameOrganizationDisplayNoun)
import util from "util" /* 1126 */;
import _modDef2438 from "module_2438" /* 2438 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10719 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  if (arg0 === constants.GUILD) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef2438.sm5cz5);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef2438.nVMqjA);
  }
  return stringResult;
};