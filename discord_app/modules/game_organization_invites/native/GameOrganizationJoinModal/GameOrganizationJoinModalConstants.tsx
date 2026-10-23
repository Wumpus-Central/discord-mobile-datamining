// === Module 12662: GameOrganizationJoinModalConstants ===

// Module 12662 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export const closeGameOrganizationJoinModal = function closeGameOrganizationJoinModal() {
  ModalActionCreatorsDefault.pop();
};