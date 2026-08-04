// discord_app/modules/game_profile/hooks/useSimilarGames.tsx
import map from "map";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_4 } from "set";

let require = arg1;
let closure_5 = [];
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0, arg1) {
  let data;
  let error;
  let isLoading;
  let tmp = arg1;
  if (arg1) {
    tmp = !set.has(arg0);
  }
  let obj = require(8666) /* _getShopCollection */;
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  require = tmp7;
  let tmp3Result = tmp3(5910);
  const games = tmp3Result.useGames(tmp7);
  tmp3Result = tmp3(589);
  const items = [map];
  const items1 = [tmp7];
  const stateFromStores = tmp3Result.useStateFromStores(items, () => tmp7.some((gameId) => null == game.getGame(gameId) && !game.hasNoData(gameId) && !game.didFetchingFail(gameId)), items1);
  require(589) /* initialize */;
  const items2 = [map, mergeGuildAvatar];
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