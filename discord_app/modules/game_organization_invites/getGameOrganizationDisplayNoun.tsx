// discord_app/modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx
import util from "../../intl/index.native.tsx";
import _modDef2405 from "GameOrganizationInvitesUntranslated.messages.js";
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(lowercase) {
  let flag = lowercase.lowercase;
  if (flag === undefined) {
    flag = false;
  }
  if (lowercase.displayNoun === constants.GUILD) {
    const intl2 = util.intl;
    const tmp8 = _modDef2405;
    intl2.string(flag ? tmp8.aikK3o : tmp8.sm5cz5);
  } else {
    const intl = util.intl;
    const tmp4 = _modDef2405;
    return intl.string(flag ? tmp4.xXXGsq : tmp4.nVMqjA);
  }
}
