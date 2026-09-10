// === Module 8748: useResolveGameForProfile ===

// Module 8748 (useResolveGameForProfile)
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4735 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 4736 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7220 */;
import useGame from "useGame" /* 7361 */;
import useResolveGameDefault from "useResolveGame" /* 8749 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

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
    let tmpResult = RobloxSubgameUtils;
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  obj.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = RobloxSubgameUtils;
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj.gameRecord = data;
    obj.isLoading = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
};