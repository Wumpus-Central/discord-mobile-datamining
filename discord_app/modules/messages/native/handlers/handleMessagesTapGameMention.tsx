// === Module 11234: handleMessagesTapGameMention ===

// Module 11234 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef9493 from "module_9493" /* 9493 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9499 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef9493;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};