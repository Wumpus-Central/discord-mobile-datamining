// discord_app/modules/age_gate/showNSFWGuildJoinGate.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export const showNSFWGuildJoinGate = function showNSFWGuildJoinGate(id) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId: id };
  obj.pushLazy(asyncRequire(6725, dependencyMap.paths), obj2);
};
