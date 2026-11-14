// === Module 10464: useSimilarGames ===

// Module 10464 (useSimilarGames)
import useGameArtwork from "useGameArtwork" /* 10322 */;
import GameProfileVisibilityUtils from "GameProfileVisibilityUtils" /* 10465 */;
import GameStore from "GameStore" /* 2141 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
fn(10413).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = !set.has(arg0);
  }
  const similarGameIds = data(10412).useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp6 = closure_5;
  } else {
    tmp6 = data;
  }
  data = tmp6;
  const obj = data(10412);
  const games = data(9533).useGames(tmp6);
  const tmp3Result = data(9533);
  items = [GameStore];
  const items1 = [tmp6];
  const stateFromStores = data(504).useStateFromStores(items, () => data.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items1);
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp6;
  if (tmp) {
    const obj2 = { isFetching: null == error && null == data || isLoading || stateFromStores, similarGames: tmp10 };
    let obj3 = obj2;
    const tmp12 = null == error && null == data || isLoading || stateFromStores;
  } else {
    obj3 = { isFetching: false, similarGames };
  }
  return obj3;
};
export function isShowableSimilarGame(media, nsfwAllowed) {
  let isGameDisplayableResult = GameProfileVisibilityUtils.isGameDisplayable(media, nsfwAllowed);
  if (isGameDisplayableResult) {
    isGameDisplayableResult = useGameArtwork.hasGameArtwork(media);
    const tmpResult = useGameArtwork;
  }
  return isGameDisplayableResult;
}