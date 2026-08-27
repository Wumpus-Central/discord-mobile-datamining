// === Module 11115: handleMessagesTapGameMention ===

// Module 11115 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8731 from "module_8731" /* 8731 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8737 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8731;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};