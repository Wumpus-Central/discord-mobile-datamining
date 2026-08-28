// === Module 11133: handleMessagesTapGameMention ===

// Module 11133 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8747 from "module_8747" /* 8747 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8753 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8747;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};