// === Module 10799: handleMessagesTapGameMention ===

// Module 10799 (handleMessagesTapGameMention)
import obj132 from "obj132" /* 2 */;
import _modDef9096 from "module_9096" /* 9096 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9101 */;

const result = obj132.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};