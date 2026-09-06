// discord_app/modules/game_profile/hooks/useSimilarGames.tsx
import GameStore from "../../games/GameStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
fn(8761).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  const hasItem = set.has(arg0);
  let obj = data(8760);
  const similarGameIds = obj.useSimilarGameIds(arg0, !hasItem);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  let tmp3Result = tmp3(7309);
  const games = tmp3Result.useGames(tmp7);
  tmp3Result = tmp3(504);
  const items = [GameStore];
  const items1 = [tmp7];
  const stateFromStores = tmp3Result.useStateFromStores(
    items,
    () => data.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)),
    items1,
  );
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp7;
  if (hasItem) {
    obj = { isFetching: false, similarGames };
  } else {
    obj = { isFetching: (null == error && null == data) || isLoading || stateFromStores, similarGames: tmp11 };
    const tmp13 = (null == error && null == data) || isLoading || stateFromStores;
  }
  return obj;
}
