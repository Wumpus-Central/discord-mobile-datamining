// === Module 9522: useResolveGameForProfile ===

// Module 9522 (useResolveGameForProfile)
import obj132 from "obj132" /* 2 */;
import _openRobloxURLWithRootPlaceId from "_openRobloxURLWithRootPlaceId" /* 4643 */;
import ROBLOX_PROTOCOL_URL from "ROBLOX_PROTOCOL_URL" /* 4644 */;
import importDefaultResult1 from "importDefaultResult1" /* 5378 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7145 */;
import useResolveGameDefault from "useResolveGame" /* 9523 */;

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