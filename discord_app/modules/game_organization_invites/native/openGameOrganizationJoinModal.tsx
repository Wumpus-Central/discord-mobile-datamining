// === Module 12732: openGameOrganizationJoinModal ===

// Module 12732 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12733, dependencyMap.paths), { code });
};