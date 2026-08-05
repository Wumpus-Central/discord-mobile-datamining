import { GameProfileActionCreators.native } from "../../../game_profile/GameProfileActionCreators.native.tsx";
import { GameProfileEmbedAction } from "../../../game_profile/GameProfileAnalyticUtils.tsx";
// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = GameProfileActionCreators.native;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};