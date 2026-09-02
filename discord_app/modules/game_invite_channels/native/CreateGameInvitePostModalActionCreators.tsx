// === Module 12532: openCreateGameInvitePostModal ===

// Module 12532 (openCreateGameInvitePostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4723.pushLazy(asyncRequireImpl(12533, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4723.popWithKey(c3);
};