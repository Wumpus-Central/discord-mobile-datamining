// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01994_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting(
  "modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx",
);

export function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14368, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}
