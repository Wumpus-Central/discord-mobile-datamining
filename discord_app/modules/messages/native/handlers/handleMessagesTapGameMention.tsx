// === Module 11427: handleMessagesTapGameMention ===

// Module 11427 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8825 from "module_8825" /* 8825 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8831 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8825;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};