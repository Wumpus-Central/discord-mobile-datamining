// discord_app/modules/game_mentions/hooks/useGameMentionData.tsx
import shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import useGameProfileObscured from "../../game_profile/hooks/useGameProfileObscured.tsx";
import handleLoadMessages from "../../games/GameStore.tsx";
import set from "../../games/autocomplete/GameAutocompleteStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionData.tsx");

export const getGameMentionData = function getGameMentionData(closure_0) {
  currentUser = currentUser.getCurrentUser();
  game = game.getGame(closure_0);
  gameById = gameById.getGameById(closure_0);
  if (null != game) {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
      let obj = { gameId: null, gameName: null, gameIcon: null };
      obj[0] = closure_0;
      ({ name: obj3[1], media } = game);
      let icon;
      if (media != null) {
        icon = media.icon;
      }
      obj[2] = icon;
      let tmp4 = obj;
    }
    obj2 = useGameProfileObscured;
  } else if (null != gameById) {
    obj = { gameId: null, gameName: null, gameIcon: null };
    obj[0] = closure_0;
    ({ name: obj[1], icon: obj[2] } = gameById);
    tmp4 = obj;
  }
  return tmp4;
};
export const useGameMentionData = function useGameMentionData(gameId) {
  const _require = gameId;
  const items = [closure_3, closure_4, closure_5];
  const items1 = [gameId];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const currentUser = closure_1_5.getCurrentUser();
    const game = closure_1_3.getGame(gameId);
    const gameById = closure_1_4.getGameById(gameId);
    if (null != game) {
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
        let obj = { gameId: null, gameName: null, gameIcon: null };
        obj[0] = gameId;
        ({ name: obj3[1], media } = game);
        let icon;
        if (media != null) {
          icon = media.icon;
        }
        obj[2] = icon;
        let tmp5 = obj;
      }
      obj2 = gameId(dependencyMap[3]);
    } else if (null != gameById) {
      obj = { gameId: null, gameName: null, gameIcon: null };
      obj[0] = gameId;
      ({ name: obj[1], icon: obj[2] } = gameById);
      tmp5 = obj;
    }
    return tmp5;
  }, items1, shallowEqualDefault);
};