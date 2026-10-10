// === Module 8234: useGameMentionData ===

// Module 8234 (useGameMentionData)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import useGameProfileObscured from "useGameProfileObscured" /* 8237 */;
import GameStore from "GameStore" /* 2020 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8235 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionData.tsx");

export const getGameMentionData = function getGameMentionData(gameId) {
  const currentUser = UserStore.getCurrentUser();
  const game = GameStore.getGame(gameId);
  const gameById = GameAutocompleteStore.getGameById(gameId);
  if (null != game) {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
      const obj4 = { gameId, gameName: null, gameIcon: null };
      ({ name: obj3.gameName, media } = game);
      let icon;
      if (media != null) {
        icon = media.icon;
      }
      obj4.gameIcon = icon;
      let tmp4 = obj4;
    }
    obj2 = useGameProfileObscured;
  } else if (null != gameById) {
    const obj = { gameId, gameName: null, gameIcon: null };
    ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
    tmp4 = obj;
  }
  return tmp4;
};
export const useGameMentionData = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameMentionData(gameId) {
  _require = gameId;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore, GameAutocompleteStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gameId) {
    const fn = function c() {
      const currentUser = UserStore.getCurrentUser();
      const game = GameStore.getGame(gameId);
      const gameById = GameAutocompleteStore.getGameById(gameId);
      if (null != game) {
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
          const obj4 = { gameId, gameName: null, gameIcon: null };
          ({ name: obj3.gameName, media } = game);
          let icon;
          if (media != null) {
            icon = media.icon;
          }
          obj4.gameIcon = icon;
          let tmp5 = obj4;
        }
        obj2 = useGameProfileObscured;
      } else if (null != gameById) {
        const obj = { gameId, gameName: null, gameIcon: null };
        ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
        tmp5 = obj;
      }
      return tmp5;
    };
    const items1 = [gameId];
    cResult[1] = gameId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9, discord_common_shallowEqualDefault);
}) : (function useGameMentionData(gameId) {
  _require = gameId;
  const items = [GameStore, GameAutocompleteStore, UserStore];
  const items1 = [gameId];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    const game = GameStore.getGame(gameId);
    const gameById = GameAutocompleteStore.getGameById(gameId);
    if (null != game) {
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
        const obj4 = { gameId, gameName: null, gameIcon: null };
        ({ name: obj3.gameName, media } = game);
        let icon;
        if (media != null) {
          icon = media.icon;
        }
        obj4.gameIcon = icon;
        let tmp5 = obj4;
      }
      obj2 = useGameProfileObscured;
    } else if (null != gameById) {
      const obj = { gameId, gameName: null, gameIcon: null };
      ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
      tmp5 = obj;
    }
    return tmp5;
  }, items1, discord_common_shallowEqualDefault);
});