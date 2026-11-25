// === Module 13757: CreateGameInvitePostModalActionCreators ===

// Module 13757 (CreateGameInvitePostModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13758, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}