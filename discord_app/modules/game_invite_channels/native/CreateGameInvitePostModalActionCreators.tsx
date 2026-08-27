// === Module 12222: openCreateGameInvitePostModal ===

// Module 12222 (openCreateGameInvitePostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4676.pushLazy(asyncRequireImpl(12223, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4676.popWithKey(c3);
};