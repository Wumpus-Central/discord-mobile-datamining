// discord_app/modules/game_profile/hooks/useResolveGameForProfile.tsx
import { useGetOrFetchApplications } from "../../applications/useGetOrFetchApplications.tsx";
import { importDefaultResult1 } from "../../games/hooks/useGame.tsx";
import { useResolveGame } from "../../games/hooks/useResolveGame.tsx";
let result = require("useResolveGame").fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let obj = useGetOrFetchApplications /* useGetOrFetchApplications */;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    let tmpResult = tmp(4455);
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4456).ROBLOX_GAME_ID;
  }
  obj[1] = gameId;
  let tmp6Result = useResolveGame(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = tmp(4455);
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  const tmp6 = useResolveGame;
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4456).ROBLOX_GAME_ID;
  }
  const game = importDefaultResult1 /* importDefaultResult1 */.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: null, gameRecord: null, isLoading: null };
    obj[0] = tmp(4456).ROBLOX_GAME_ID;
    if (data == null) {
      data = null;
    }
    obj[1] = data;
    obj[2] = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
};