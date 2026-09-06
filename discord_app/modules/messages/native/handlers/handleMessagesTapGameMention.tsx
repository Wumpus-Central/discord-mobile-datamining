// discord_app/modules/messages/native/handlers/handleMessagesTapGameMention.tsx
import GameProfileActionCreatorsDefault from "../../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = {
    gameId,
    gameProfileModalChecks: { shouldOpenGameProfile: true, gameId },
    source: GameProfileAnalyticUtils.GameProfileSources.GameMention,
  };
  obj.openGameProfileModal(obj);
};
