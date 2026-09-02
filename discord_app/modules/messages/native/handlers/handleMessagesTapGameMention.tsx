// === Module 11422: handleMessagesTapGameMention ===

// Module 11422 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8821 from "module_8821" /* 8821 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8827 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8821;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};