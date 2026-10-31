// === Module 11660: showGameOrganizationInviteErrorToast ===

// Module 11660 (showGameOrganizationInviteErrorToast)
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/showGameOrganizationInviteErrorToast.tsx");

export default function showGameOrganizationInviteErrorToast() {
  const obj2 = { text: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.fEptJP);
  ToastActionCreatorsDefault.open("GAME_ORGANIZATION_INVITE_SEND_ERROR", obj2);
};