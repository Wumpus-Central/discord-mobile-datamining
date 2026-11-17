// === Module 12905: openGameOrganizationJoinOutcomeModal ===

// Module 12905 (openGameOrganizationJoinOutcomeModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12906, dependencyMap.paths), { code, result }, closure_3);
};