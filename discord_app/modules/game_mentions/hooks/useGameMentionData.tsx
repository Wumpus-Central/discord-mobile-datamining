// === Module 5107: useGameMentionData ===

// Module 5107 (useGameMentionData)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import useGameProfileObscured from "useGameProfileObscured" /* 5111 */;
import GameStore from "GameStore" /* 1916 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5108 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
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
      let obj = { gameId, gameName: null, gameIcon: null };
      ({ name: obj3.gameName, media } = game);
      let icon;
      if (media != null) {
        icon = media.icon;
      }
      obj.gameIcon = icon;
      let tmp4 = obj;
    }
    obj2 = useGameProfileObscured;
  } else if (null != gameById) {
    obj = { gameId, gameName: null, gameIcon: null };
    ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
    tmp4 = obj;
  }
  return tmp4;
};
export const useGameMentionData = function useGameMentionData(gameId) {
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
        let obj = { gameId, gameName: null, gameIcon: null };
        ({ name: obj3.gameName, media } = game);
        let icon;
        if (media != null) {
          icon = media.icon;
        }
        obj.gameIcon = icon;
        let tmp5 = obj;
      }
      obj2 = useGameProfileObscured;
    } else if (null != gameById) {
      obj = { gameId, gameName: null, gameIcon: null };
      ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
      tmp5 = obj;
    }
    return tmp5;
  }, items1, discord_common_shallowEqualDefault);
};