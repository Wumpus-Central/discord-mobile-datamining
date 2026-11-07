// === Module 7446: showNSFWGuildJoinGate ===

// Module 7446 (showNSFWGuildJoinGate)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7447, dependencyMap.paths), { guildId: id });
}