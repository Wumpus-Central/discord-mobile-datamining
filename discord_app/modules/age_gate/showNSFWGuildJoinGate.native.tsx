// discord_app/modules/age_gate/showNSFWGuildJoinGate.native.tsx
import asyncRequireImpl from "../../../_runtime/01994_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/age_gate/showNSFWGuildJoinGate.native.tsx");

export function showNSFWGuildJoinGate(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7387, dependencyMap.paths), { guildId: id });
}
