// discord_app/modules/game_profile/hooks/useResolveGameForProfile.tsx
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "../../games/hooks/useGame.tsx";
import useResolveGameDefault from "../../games/hooks/useResolveGame.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    let tmpResult = tmp(4690);
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4691).ROBLOX_GAME_ID;
  }
  obj.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = tmp(4690);
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4691).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: tmp(4691).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj.gameRecord = data;
    obj.isLoading = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
}
