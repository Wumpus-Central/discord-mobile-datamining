// === Module 11162: handleMessagesTapGameMention ===

// Module 11162 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef9425 from "module_9425" /* 9425 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9431 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef9425;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};