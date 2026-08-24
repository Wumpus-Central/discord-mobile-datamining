// discord_app/modules/game_profile/hooks/useSimilarGames.tsx
import closure_2 from "../../games/GameStore.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_4 } from "../../../../discord_common/js/shared/shared-constants/SimilarGamesConstants.tsx";

const require = arg1;
let closure_5 = [];
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0, arg1) {
  let tmp = arg1;
  if (arg1) {
    tmp = !set.has(arg0);
  }
  let obj = data(9205);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  let tmp3Result = tmp3(5383);
  const games = tmp3Result.useGames(tmp7);
  tmp3Result = tmp3(589);
  const items = [closure_2];
  const items1 = [tmp7];
  const stateFromStores = tmp3Result.useStateFromStores(items, () => data.some((closure_0) => null == game.getGame(closure_0) && !game.hasNoData(closure_0) && !game.didFetchingFail(closure_0)), items1);
  data(589);
  const items2 = [closure_2, closure_3];
  [][0] = tmp7;
  if (tmp) {
    obj = { isFetching: null, similarGames: null };
    obj[0] = null == error && null == data || isLoading || stateFromStores;
    obj[1] = tmp11;
    const tmp14 = null == error && null == data || isLoading || stateFromStores;
  } else {
    obj = { isFetching: false, similarGames: null };
    obj[1] = closure_6;
  }
  return obj;
};