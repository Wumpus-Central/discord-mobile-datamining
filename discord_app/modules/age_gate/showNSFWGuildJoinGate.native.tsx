// === Module 7386: showNSFWGuildJoinGate ===

// Module 7386 (showNSFWGuildJoinGate)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7387, dependencyMap.paths), { guildId: id });
}