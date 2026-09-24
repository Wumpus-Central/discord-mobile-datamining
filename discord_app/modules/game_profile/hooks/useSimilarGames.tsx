// discord_app/modules/game_profile/hooks/useSimilarGames.tsx
import GameStore from "../../games/GameStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
fn(9121).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  const hasItem = set.has(arg0);
  const similarGameIds = data(9120).useSimilarGameIds(arg0, !hasItem);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const obj = data(9120);
  const tmp2 = !hasItem;
  const games = data(7639).useGames(tmp7);
  const tmp3Result = data(7639);
  const items = [GameStore];
  const items1 = [tmp7];
  const stateFromStores = data(504).useStateFromStores(
    items,
    () => data.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
    items1,
  );
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp7;
  if (hasItem) {
    const obj2 = { isFetching: false, similarGames };
    let obj3 = obj2;
  } else {
    obj3 = { isFetching: (null == error && null == data) || isLoading || stateFromStores, similarGames: tmp11 };
    const tmp13 = (null == error && null == data) || isLoading || stateFromStores;
  }
  return obj3;
}
