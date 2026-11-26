// === Module 12339: openGameOrganizationJoinOutcomeModal ===

// Module 12339 (openGameOrganizationJoinOutcomeModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11917 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12340, dependencyMap.paths), { code, result }, closure_3);
};