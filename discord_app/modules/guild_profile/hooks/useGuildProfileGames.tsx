// === Module 11963: useGuildProfileGames ===

// Module 11963 (useGuildProfileGames)
import noop from "noop";
import applicationId from "applicationId";
import map from "map";
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
let result = require("map").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(games) {
  let stateFromStoresArray;
  games = games.games;
  let obj = games(stateFromStoresArray[4]);
  let items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  games(stateFromStoresArray[5]);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    const items2 = [games];
    stateFromStoresArray = memo.useMemo(() => {
      const map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp4 = outer1_3;
          let tmp5 = new.target;
          let tmp6 = new.target;
          let tmp7 = item10012;
          let tmp8 = new outer1_3(item10012);
          let tmp9 = tmp8;
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [map];
    stateFromStoresArray = games(stateFromStoresArray[4]).useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((gameId) => {
        let game = outer1_4.getGame(gameId);
        if (game == null) {
          game = closure_1.get(gameId);
        }
        return game;
      });
      return mapped.filter(games(stateFromStoresArray[6]).isNotNullish);
    });
    const items4 = [stateFromStoresArray, games.gameActivity];
    memo = memo.useMemo(() => {
      const items = [...stateFromStoresArray];
      return items.sort((arg0, arg1) => {
        let num;
        if (table[arg0.id] != null) {
          num = tmp2.score;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (table[arg1.id] != null) {
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
    obj[0] = memo.useMemo(() => memo.slice(0, 5), items5);
    const items6 = [memo];
    obj[1] = memo.useMemo(() => {
      let tmp = memo[5];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }, items6);
    const items7 = [memo];
    obj[2] = memo.useMemo(() => memo.slice(5), items7);
    return obj;
  }
  items1 = games.gameApplicationIds;
};
export const useAllGuildProfileGames = function useAllGuildProfileGames(profile) {
  let games = profile;
  games = profile.games;
  const items = [fetchFingerprint];
  const stateFromStores = games(589).useStateFromStores(items, () => authenticated.isAuthenticated());
  games(5910);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    const items2 = [games];
    const dependencyMap = React.useMemo(() => {
      const map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp4 = outer1_3;
          let tmp5 = new.target;
          let tmp6 = new.target;
          let tmp7 = item10012;
          let tmp8 = new outer1_3(item10012);
          let tmp9 = tmp8;
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [map];
    return games(589).useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((gameId) => {
        let game = outer1_4.getGame(gameId);
        if (game == null) {
          game = closure_1.get(gameId);
        }
        return game;
      });
      return mapped.filter(games(stateFromStoresArray[6]).isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
};