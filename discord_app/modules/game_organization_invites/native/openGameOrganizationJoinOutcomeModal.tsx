// === Module 12289: openGameOrganizationJoinOutcomeModal ===

// Module 12289 (openGameOrganizationJoinOutcomeModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11869 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12290, dependencyMap.paths), { code, result }, closure_3);
};