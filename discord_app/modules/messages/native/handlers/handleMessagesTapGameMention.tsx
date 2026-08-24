// === Module 10838: handleMessagesTapGameMention ===

// Module 10838 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef9133 from "module_9133" /* 9133 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9138 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef9133;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};