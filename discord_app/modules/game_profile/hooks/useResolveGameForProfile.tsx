// === Module 8909: useResolveGameForProfile ===

// Module 8909 (useResolveGameForProfile)
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4852 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 4853 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7364 */;
import useGame from "useGame" /* 7505 */;
import useResolveGameDefault from "useResolveGame" /* 8910 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  ({ applicationId, gameId } = arg0);
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    result = RobloxSubgameUtils.isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = RobloxSubgameUtils;
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = RobloxSubgameUtils.isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = RobloxSubgameUtils;
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};