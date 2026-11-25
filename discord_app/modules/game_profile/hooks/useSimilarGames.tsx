// === Module 14171: useSimilarGames ===

// Module 14171 (useSimilarGames)
import useGameArtwork from "useGameArtwork" /* 8755 */;
import GameProfileVisibilityUtils from "GameProfileVisibilityUtils" /* 14172 */;
import GameStore from "GameStore" /* 2140 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
fn(14165).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = !set.has(arg0);
  }
  const similarGameIds = data(14164).useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp6 = closure_5;
  } else {
    tmp6 = data;
  }
  data = tmp6;
  const obj = data(14164);
  const games = data(8677).useGames(tmp6);
  const tmp3Result = data(8677);
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