// === Module 7567: showNSFWGuildJoinGate ===

// Module 7567 (showNSFWGuildJoinGate)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7568, dependencyMap.paths), { guildId: id });
}