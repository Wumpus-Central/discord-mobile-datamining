// discord_app/modules/game_mentions/hooks/useGameMentionData.tsx
import shallowEqualDefault from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import useGameProfileObscured from "../../game_profile/hooks/useGameProfileObscured.tsx";
import GameStore from "../../games/GameStore.tsx";
import GameAutocompleteStore from "../../games/autocomplete/GameAutocompleteStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gameId) => {
      let first;
      let tmp8;
      let tmp9;
      _require = gameId;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameStore, GameAutocompleteStore, UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== gameId) {
        const fn = function c() {
          let icon;
          let media;
          let tmp5;
          const currentUser = UserStore.getCurrentUser();
          const game = GameStore.getGame(gameId);
          const gameById = GameAutocompleteStore.getGameById(gameId);
          if (null != game) {
            let nsfwAllowed;
            const isGameProfileObscured = useGameProfileObscured.isGameProfileObscured;
            useGameProfileObscured;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            if (!isGameProfileObscured(game, nsfwAllowed)) {
              const obj3 = { gameId, gameName: null, gameIcon: icon };
              ({ name: obj2.gameName, media } = game);
              icon = undefined;
              if (media != null) {
                icon = media.icon;
              }
              tmp5 = obj3;
            }
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp8, tmp9, shallowEqualDefault);
    }
  : (gameId) => {
      _require = gameId;
      let obj = require("get initialized");
      const items = [GameStore, GameAutocompleteStore, UserStore];
      const items1 = [gameId];
      return obj.useStateFromStores(
        items,
        () => {
          let icon;
          let media;
          let tmp5;
          const currentUser = UserStore.getCurrentUser();
          const game = GameStore.getGame(gameId);
          const gameById = GameAutocompleteStore.getGameById(gameId);
          if (null != game) {
            let nsfwAllowed;
            const isGameProfileObscured = useGameProfileObscured.isGameProfileObscured;
            useGameProfileObscured;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            if (!isGameProfileObscured(game, nsfwAllowed)) {
              const obj3 = { gameId, gameName: null, gameIcon: icon };
              ({ name: obj2.gameName, media } = game);
              icon = undefined;
              if (media != null) {
                icon = media.icon;
              }
              tmp5 = obj3;
            }
          } else if (null != gameById) {
            const obj = { gameId, gameName: null, gameIcon: null };
            ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
            tmp5 = obj;
          }
          return tmp5;
        },
        items1,
        shallowEqualDefault,
      );
    };
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionData.tsx");

export const getGameMentionData = function getGameMentionData(gameId) {
  let icon;
  let media;
  let tmp4;
  const currentUser = UserStore.getCurrentUser();
  const game = GameStore.getGame(gameId);
  const gameById = GameAutocompleteStore.getGameById(gameId);
  if (null != game) {
    let nsfwAllowed;
    const isGameProfileObscured = useGameProfileObscured.isGameProfileObscured;
    useGameProfileObscured;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (!isGameProfileObscured(game, nsfwAllowed)) {
      const obj3 = { gameId, gameName: null, gameIcon: icon };
      ({ name: obj2.gameName, media } = game);
      icon = undefined;
      if (media != null) {
        icon = media.icon;
      }
      tmp4 = obj3;
    }
  } else if (null != gameById) {
    const obj = { gameId, gameName: null, gameIcon: null };
    ({ name: obj.gameName, icon: obj.gameIcon } = gameById);
    tmp4 = obj;
  }
  return tmp4;
};
export const useGameMentionData = tmp2;
