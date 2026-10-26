// === Module 12723: openGameOrganizationJoinModal ===

// Module 12723 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12724, dependencyMap.paths), { code });
};