// === Module 12019: getGameOrganizationDisplayNoun ===

// Module 12019 (getGameOrganizationDisplayNoun)
import util from "util" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  ({ displayNoun, lowercase } = arg0);
  if (lowercase === undefined) {
    lowercase = false;
  }
  if (constants.GUILD === displayNoun) {
    const intl4 = util.intl;
    const tmp17 = _modDef2555;
    return intl4.string(lowercase ? tmp17.aikK3o : tmp17.sm5cz5);
  } else if (constants.ALLIANCE === displayNoun) {
    const intl3 = util.intl;
    const tmp13 = _modDef2555;
    return intl3.string(lowercase ? tmp13.Y84911 : tmp13.qw4LoI);
  } else if (constants.CLAN === displayNoun) {
    const intl2 = util.intl;
    const tmp9 = _modDef2555;
    return intl2.string(lowercase ? tmp9.QGuKKF : tmp9.jc1qry);
  } else {
    const intl = util.intl;
    const tmp5 = _modDef2555;
    return intl.string(lowercase ? tmp5.xXXGsq : tmp5.nVMqjA);
  }
};