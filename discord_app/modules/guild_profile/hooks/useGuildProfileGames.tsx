// discord_app/modules/guild_profile/hooks/useGuildProfileGames.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameRecord from "../../games/GameRecord.tsx";
import GameStore from "../../games/GameStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(games) {
  _require = games;
  let stateFromStoresArray;
  games = games.games;
  let obj = require("initialize");
  let items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  require("useGame");
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    closure_129_0 = games;
    const items2 = [games];
    stateFromStoresArray = memo.useMemo(() => {
      const map = new Map();
      if (null == closure_0) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp5 = new.target;
          let tmp6 = new.target;
          let tmp8 = new GameRecord(item10012);
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [GameStore];
    stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = stateFromStoresArray.get(item);
        }
        return game;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    });
    const items4 = [stateFromStoresArray, games.gameActivity];
    memo = memo.useMemo(() => {
      const items = [...stateFromStoresArray];
      return items.sort((arg0, arg1) => {
        let num;
        if (dependencyMap[arg0.id] != null) {
          num = tmp2.score;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (dependencyMap[arg1.id] != null) {
          num2 = tmp3.score;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        if (num !== num2) {
          num3 = num2 - num;
        }
        return num3;
      });
    }, items4);
    obj = { gamesToDisplay: null, lastGameToDisplay: null, remainingGames: null };
    const items5 = [memo];
    obj.gamesToDisplay = memo.useMemo(() => memo.slice(0, 5), items5);
    const items6 = [memo];
    obj.lastGameToDisplay = memo.useMemo(() => {
      let tmp = memo[5];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }, items6);
    const items7 = [memo];
    obj.remainingGames = memo.useMemo(() => memo.slice(5), items7);
    return obj;
  }
  items1 = games.gameApplicationIds;
}
export const useAllGuildProfileGames = function useAllGuildProfileGames(profile) {
  _require = profile;
  const games = profile.games;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => authenticated.isAuthenticated());
  require("useGame");
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    closure_129_0 = games;
    const items2 = [games];
    dependencyMap = noop.useMemo(() => {
      const map = new Map();
      if (null == closure_0) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp5 = new.target;
          let tmp6 = new.target;
          let tmp8 = new GameRecord(item10012);
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [GameStore];
    return require("initialize").useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = stateFromStoresArray.get(item);
        }
        return game;
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
};
