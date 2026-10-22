// === Module 12648: openGameOrganizationJoinModal ===

// Module 12648 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12649, dependencyMap.paths), { code });
};