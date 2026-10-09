// === Module 8863: useResolveGameForProfile ===

// Module 8863 (useResolveGameForProfile)
import c from "c" /* 576 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6854 */;
import useGame from "useGame" /* 7002 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 7435 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 7436 */;
import useResolveGameDefault from "useResolveGame" /* 8864 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useResolveGameForProfile(arg0) {
  const cResult = c.c(6);
  ({ applicationId, gameId } = arg0);
  let tmp4;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp4);
  let ROBLOX_GAME_ID = gameId;
  if (null != getOrFetchApplication) {
    ROBLOX_GAME_ID = gameId;
    if (tmpResult.isRobloxSubgameApplication(getOrFetchApplication)) {
      ROBLOX_GAME_ID = RobloxSubgameTypes.ROBLOX_GAME_ID;
    }
    tmpResult = RobloxSubgameUtils;
  }
  if (cResult[0] === applicationId) {
    if (cResult[1] === ROBLOX_GAME_ID) {
      let tmp6 = cResult[2];
    }
    const tmp8 = useResolveGameDefault(tmp6);
    let isRobloxSubgameGameResult = null != tmp8.gameRecord;
    if (isRobloxSubgameGameResult) {
      isRobloxSubgameGameResult = RobloxSubgameUtils.isRobloxSubgameGame(tmp8.gameRecord);
      const tmpResult3 = RobloxSubgameUtils;
    }
    let ROBLOX_GAME_ID1;
    if (isRobloxSubgameGameResult) {
      ROBLOX_GAME_ID1 = RobloxSubgameTypes.ROBLOX_GAME_ID;
    }
    const game = useGame.useGame(ROBLOX_GAME_ID1);
    ({ data, isLoading } = game);
    if (isRobloxSubgameGameResult) {
      if (data == null) {
        data = null;
      }
      if (cResult[3] === isLoading) {
        if (cResult[4] === data) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
      const obj3 = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: data, isLoading };
      cResult[3] = isLoading;
      cResult[4] = data;
      cResult[5] = obj3;
      tmp12 = obj3;
    } else {
      return tmp8;
    }
    const tmpResult4 = useGame;
  }
  const obj4 = { applicationId, gameId: ROBLOX_GAME_ID };
  cResult[0] = applicationId;
  cResult[1] = ROBLOX_GAME_ID;
  cResult[2] = obj4;
  tmp6 = obj4;
}) : (function useResolveGameForProfile(arg0) {
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
});