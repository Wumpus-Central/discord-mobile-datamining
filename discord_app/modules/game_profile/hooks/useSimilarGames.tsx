// === Module 9717: useSimilarGames ===

// Module 9717 (useSimilarGames)
import useGameProfileObscured from "useGameProfileObscured" /* 8806 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9445 */;
import useGameArtwork from "useGameArtwork" /* 9504 */;
import GameStore from "GameStore" /* 2143 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
fn(9584).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = !set.has(arg0);
  }
  const similarGameIds = data(9583).useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp6 = closure_5;
  } else {
    tmp6 = data;
  }
  data = tmp6;
  const obj = data(9583);
  const games = data(7604).useGames(tmp6);
  const tmp3Result = data(7604);
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
export function isShowableSimilarGame(game, nsfwAllowed) {
  let gameIsAcceptableResult = useShouldOpenGameProfileModal.gameIsAcceptable(game);
  if (gameIsAcceptableResult) {
    gameIsAcceptableResult = !useGameProfileObscured.isGameProfileObscured(game, nsfwAllowed);
    const tmpResult = useGameProfileObscured;
  }
  if (gameIsAcceptableResult) {
    gameIsAcceptableResult = useGameArtwork.hasGameArtwork(game);
    const tmpResult2 = useGameArtwork;
  }
  return gameIsAcceptableResult;
}