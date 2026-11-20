// === Module 14574: showNSFWGuildJoinGate ===

// Module 14574 (showNSFWGuildJoinGate)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14575, dependencyMap.paths), { guildId: id });
}