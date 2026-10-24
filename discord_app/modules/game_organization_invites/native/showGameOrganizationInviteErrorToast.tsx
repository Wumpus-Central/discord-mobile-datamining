// discord_app/modules/game_organization_invites/native/showGameOrganizationInviteErrorToast.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/showGameOrganizationInviteErrorToast.tsx",
);

export default function showGameOrganizationInviteErrorToast() {
  const obj2 = { text: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.fEptJP);
  ToastActionCreatorsDefault.open("GAME_ORGANIZATION_INVITE_SEND_ERROR", obj2);
}
