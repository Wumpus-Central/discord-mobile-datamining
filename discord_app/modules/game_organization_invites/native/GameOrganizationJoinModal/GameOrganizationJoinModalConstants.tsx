// === Module 12734: GameOrganizationJoinModalConstants ===

// Module 12734 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export const closeGameOrganizationJoinModal = function closeGameOrganizationJoinModal() {
  ModalActionCreatorsDefault.pop();
};