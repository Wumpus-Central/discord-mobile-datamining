// === Module 8323: useResolveGameForProfile ===

// Module 8323 (useResolveGameForProfile)
import react from "react" /* 576 */;
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 5020 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 5021 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6663 */;
import useGame2 from "useGame" /* 6812 */;
import useResolveGameDefault from "useResolveGame" /* 8324 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let data;
  let gameId;
  let isLoading;
  const obj = react;
  const cResult = obj.c(6);
  ({ applicationId, gameId } = arg0);
  let tmp5;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (null == gameId) {
    tmp5 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp5);
  let ROBLOX_GAME_ID = gameId;
  if (null != getOrFetchApplication) {
    ROBLOX_GAME_ID = gameId;
    const tmpResult = RobloxSubgameUtils;
    if (tmpResult.isRobloxSubgameApplication(getOrFetchApplication)) {
      ROBLOX_GAME_ID = RobloxSubgameTypes.ROBLOX_GAME_ID;
    }
  }
  if (cResult[0] === applicationId) {
    let tmp7;
    if (cResult[1] === ROBLOX_GAME_ID) {
      tmp7 = cResult[2];
    }
    const tmp9 = useResolveGameDefault(tmp7);
    let isRobloxSubgameGameResult = null != tmp9.gameRecord;
    if (isRobloxSubgameGameResult) {
      const tmpResult3 = RobloxSubgameUtils;
      isRobloxSubgameGameResult = tmpResult3.isRobloxSubgameGame(tmp9.gameRecord);
    }
    let ROBLOX_GAME_ID1;
    const useGame = useGame2.useGame;
    useGame2;
    if (isRobloxSubgameGameResult) {
      ROBLOX_GAME_ID1 = RobloxSubgameTypes.ROBLOX_GAME_ID;
    }
    const game = useGame(ROBLOX_GAME_ID1);
    ({ data, isLoading } = game);
    if (isRobloxSubgameGameResult) {
      if (data == null) {
        data = null;
      }
      if (cResult[3] === isLoading) {
        let tmp14;
        if (cResult[4] === data) {
          tmp14 = cResult[5];
        }
        return tmp14;
      }
      const obj2 = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: data, isLoading };
      cResult[3] = isLoading;
      cResult[4] = data;
      cResult[5] = obj2;
      tmp14 = obj2;
    } else {
      return tmp9;
    }
  }
  const obj3 = { applicationId, gameId: ROBLOX_GAME_ID };
  cResult[0] = applicationId;
  cResult[1] = ROBLOX_GAME_ID;
  cResult[2] = obj3;
  tmp7 = obj3;
}) : ((arg0) => {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let tmp4;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp4);
  let result = null != getOrFetchApplication;
  if (result) {
    const tmpResult = RobloxSubgameUtils;
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  const obj = { applicationId, gameId };
  const tmp7 = useResolveGameDefault;
  if (result) {
    gameId = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  let tmp7Result = tmp7(obj);
  let isRobloxSubgameGameResult = null != tmp7Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    const tmpResult3 = RobloxSubgameUtils;
    isRobloxSubgameGameResult = tmpResult3.isRobloxSubgameGame(tmp7Result.gameRecord);
  }
  let ROBLOX_GAME_ID;
  const useGame = useGame2.useGame;
  useGame2;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = RobloxSubgameTypes.ROBLOX_GAME_ID;
  }
  const game = useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj2 = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: data, isLoading: tmp14 };
    if (data == null) {
      data = null;
    }
    tmp7Result = obj2;
  }
  return tmp7Result;
});
let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default tmp2;