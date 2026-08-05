// discord_app/modules/game_mentions/hooks/useGameMentionData.tsx
import handleLoadMessages from "handleLoadMessages";
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { shallowEqual } from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import { useGameProfileObscured } from "../../game_profile/hooks/useGameProfileObscured.tsx";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionData.tsx");

export const getGameMentionData = function getGameMentionData(closure_0) {
  let media;
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
  const items = [handleLoadMessages, set, mergeGuildAvatar];
  const items1 = [gameId];
  return _initialize.useStateFromStores(items, () => {
    let media;
    const currentUser = outer1_5.getCurrentUser();
    const game = outer1_3.getGame(gameId);
    const gameById = outer1_4.getGameById(gameId);
    if (null != game) {
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (!obj2.isGameProfileObscured(game, nsfwAllowed)) {
        let obj = { gameId: null, gameName: null, gameIcon: null };
        obj[0] = tmp;
        ({ name: obj3[1], media } = game);
        let icon;
        if (media != null) {
          icon = media.icon;
        }
        obj[2] = icon;
        let tmp5 = obj;
      }
      obj2 = gameId(outer1_2[3]);
    } else if (null != gameById) {
      obj = { gameId: null, gameName: null, gameIcon: null };
      obj[0] = tmp;
      ({ name: obj[1], icon: obj[2] } = gameById);
      tmp5 = obj;
    }
    return tmp5;
  }, items1, shallowEqual);
};