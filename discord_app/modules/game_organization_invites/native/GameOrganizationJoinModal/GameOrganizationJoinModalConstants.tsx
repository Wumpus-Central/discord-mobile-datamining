// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GameOrganizationInviteConstants from "../../GameOrganizationInviteConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx",
);

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  ModalActionCreatorsDefault.popWithKey(closure_2);
}
