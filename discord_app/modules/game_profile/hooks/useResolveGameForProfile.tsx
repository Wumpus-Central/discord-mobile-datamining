// discord_app/modules/game_profile/hooks/useResolveGameForProfile.tsx
import set from "../../../../_runtime/00002_set.js";
import importDefaultResult1 from "../../games/hooks/useGame.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useResolveGameDefault from "../../games/hooks/useResolveGame.tsx";

let result = set.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

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
    let tmpResult = tmp(4649);
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4650).ROBLOX_GAME_ID;
  }
  obj[1] = gameId;
  let tmp6Result = useResolveGameDefault(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = tmp(4649);
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  const tmp6 = useResolveGameDefault;
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4650).ROBLOX_GAME_ID;
  }
  const game = importDefaultResult1.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: null, gameRecord: null, isLoading: null };
    obj[0] = tmp(4650).ROBLOX_GAME_ID;
    if (data == null) {
      data = null;
    }
    obj[1] = data;
    obj[2] = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
};