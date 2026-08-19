// discord_app/modules/guild_profile/hooks/useGuildProfileGames.tsx
import noop from "../../../../_runtime/00019_noop.js";
import getOfficialApplicationId from "../../games/GameRecord.tsx";
import handleLoadMessages from "../../games/GameStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(games) {
  let stateFromStoresArray;
  games = games.games;
  let obj = games(stateFromStoresArray[4]);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  games(stateFromStoresArray[5]);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    const items2 = [games];
    memo.useMemo(() => {
      const map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp8 = new closure_1_3(item10012);
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [closure_4];
    stateFromStoresArray = tmp(tmp2[4]).useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((item, index) => {
        let game = closure_1_4.getGame(item);
        if (game == null) {
          game = closure_1.get(item);
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
  tmp = games;
  tmp2 = stateFromStoresArray;
};
export const useAllGuildProfileGames = function useAllGuildProfileGames(profile) {
  const games = profile.games;
  const items = [closure_5];
  const stateFromStores = games(589).useStateFromStores(items, () => authenticated.isAuthenticated());
  games(5378);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp5(items1);
    const items2 = [games];
    dependencyMap = React.useMemo(() => {
      const map = new Map();
      if (null == games) {
        return map;
      } else {
        for (const item10012 of tmp) {
          let tmp8 = new closure_1_3(item10012);
          let result = map.set(item10012.id, tmp8);
          continue;
        }
        return map;
      }
    }, items2);
    const items3 = [closure_4];
    return tmp(589).useStateFromStoresArray(items3, () => {
      const gameApplicationIds = games.gameApplicationIds;
      const mapped = gameApplicationIds.map((item, index) => {
        let game = closure_1_4.getGame(item);
        if (game == null) {
          game = closure_1.get(item);
        }
        return game;
      });
      return mapped.filter(games(stateFromStoresArray[6]).isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
  const obj = games(589);
  tmp = games;
};