// === Module 7536: showNSFWGuildJoinGate ===

// Module 7536 (showNSFWGuildJoinGate)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7537, dependencyMap.paths), { guildId: id });
}