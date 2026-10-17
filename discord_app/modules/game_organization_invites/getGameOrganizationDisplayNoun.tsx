// discord_app/modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx
import util from "../../intl/index.native.tsx";
import _modDef2459 from "GameOrganizationInvitesUntranslated.messages.js";
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = GameOrganizationInviteConstants.GameOrganizationDisplayNouns;
const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationDisplayNoun.tsx");

export default function getGameOrganizationDisplayNoun(arg0) {
  if (arg0 === constants.GUILD) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef2459.sm5cz5);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef2459.nVMqjA);
  }
  return stringResult;
}
