// discord_app/modules/game_profile/hooks/useResolveGameForProfile.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _openRobloxURLWithRootPlaceId from "../../roblox_subgame_detection/RobloxSubgameUtils.tsx";
import ROBLOX_PROTOCOL_URL from "../../roblox_subgame_detection/RobloxSubgameTypes.tsx";
import importDefaultResult1 from "../../games/hooks/useGame.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useResolveGameDefault from "../../games/hooks/useResolveGame.tsx";

let result = obj132.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  ({ applicationId, gameId } = arg0);
  let obj = useGetOrFetchApplications;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    let tmpResult = _openRobloxURLWithRootPlaceId;
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = ROBLOX_PROTOCOL_URL.ROBLOX_GAME_ID;
  }
  obj[1] = gameId;
  let tmp6Result = useResolveGameDefault(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = _openRobloxURLWithRootPlaceId;
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = ROBLOX_PROTOCOL_URL.ROBLOX_GAME_ID;
  }
  const game = importDefaultResult1.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: null, gameRecord: null, isLoading: null };
    obj[0] = ROBLOX_PROTOCOL_URL.ROBLOX_GAME_ID;
    if (data == null) {
      data = null;
    }
    obj[1] = data;
    obj[2] = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
};