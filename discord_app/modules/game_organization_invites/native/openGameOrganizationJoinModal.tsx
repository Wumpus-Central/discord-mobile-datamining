// === Module 12660: openGameOrganizationJoinModal ===

// Module 12660 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12661, dependencyMap.paths), { code });
};