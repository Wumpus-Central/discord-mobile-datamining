// discord_app/modules/game_profile/hooks/usePendingGameProfileReturn.tsx
import Constants from "../../../Constants.tsx";
import GameProfileAnalyticUtils from "../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../GameProfileActionCreators.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../../games/GameStore.tsx";
import GameProfileStore from "../GameProfileStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId;

const AVATAR_SIZE = Constants.AVATAR_SIZE;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let stateFromStores1;
      let tmp6;
      let tmp9;
      let tmp2 = stateFromStores1;
      let obj = channelId(stateFromStores1[5]);
      const cResult = obj.c(19);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function f() {
          const pendingReturn = GameProfileStore.getPendingReturn();
          let tmp2 = null;
          if (null != pendingReturn) {
            tmp2 = null;
            if (pendingReturn.channelId === channelId) {
              tmp2 = pendingReturn;
            }
          }
          return tmp2;
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(tmp2[6]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        class S {
          constructor() {
            if (null != stateFromStores) {
              const obj = {
                gameId: stateFromStores.gameId,
                source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn,
                initialScrollOffset: stateFromStores.initialScrollOffset,
              };
              const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
              GameProfileActionCreatorsDefault;
              returnToGameProfile(obj);
            }
          }
        }
        cResult[3] = stateFromStores;
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            if (null != stateFromStores) {
              const obj = {
                gameId: stateFromStores.gameId,
                source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn,
                initialScrollOffset: stateFromStores.initialScrollOffset,
              };
              const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
              GameProfileActionCreatorsDefault;
              returnToGameProfile(obj);
            }
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            if (null != stateFromStores) {
              const obj = {
                gameId: stateFromStores.gameId,
                source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn,
                initialScrollOffset: stateFromStores.initialScrollOffset,
              };
              const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
              GameProfileActionCreatorsDefault;
              returnToGameProfile(obj);
            }
          }
        }
        const items1 = [GameStore];
        cResult[5] = items1;
        tmp9 = items1;
      } else {
        class S {
          constructor() {
            if (null != stateFromStores) {
              const obj = {
                gameId: stateFromStores.gameId,
                source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn,
                initialScrollOffset: stateFromStores.initialScrollOffset,
              };
              const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
              GameProfileActionCreatorsDefault;
              returnToGameProfile(obj);
            }
          }
        }
      }
      if (cResult[6] !== stateFromStores) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = R;
      } else {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      const tmpResult2 = channelId(tmp2[6]);
      stateFromStores1 = tmpResult2.useStateFromStores(tmp9, R);
      if (cResult[8] !== stateFromStores1) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
        cResult[8] = stateFromStores1;
        cResult[9] = tmp13;
      } else {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      if (stateFromStores1 != null) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      if (cResult[10] !== undefined) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
        tmp16[0] = undefined;
        cResult[10] = undefined;
        cResult[11] = tmp16;
      } else {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      const effect = react.useEffect(tmp13, tmp16);
      if (stateFromStores1 != null) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      if (null != stateFromStores1) {
        class R {
          constructor() {
            let gameId;
            if (stateFromStores != null) {
              gameId = stateFromStores.gameId;
            }
            let game = null;
            if (null != gameId) {
              game = GameStore.getGame(stateFromStores.gameId);
            }
            return game;
          }
        }
      }
      return null;
    }
  : (channelId) => {
      let name;
      channelId = channelId.channelId;
      let stateFromStores1;
      let obj = channelId(stateFromStores1[6]);
      const items = [GameProfileStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const pendingReturn = GameProfileStore.getPendingReturn();
        let tmp2 = null;
        if (null != pendingReturn) {
          tmp2 = null;
          if (pendingReturn.channelId === channelId) {
            tmp2 = pendingReturn;
          }
        }
        return tmp2;
      });
      const items1 = [stateFromStores];
      const callback = react.useCallback(() => {
        if (null != stateFromStores) {
          const obj = {
            gameId: stateFromStores.gameId,
            source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn,
            initialScrollOffset: stateFromStores.initialScrollOffset,
          };
          const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
          GameProfileActionCreatorsDefault;
          returnToGameProfile(obj);
        }
      }, items1);
      const items2 = [GameStore];
      const obj2 = channelId(stateFromStores1[6]);
      stateFromStores1 = obj2.useStateFromStores(items2, () => {
        let gameId;
        if (stateFromStores != null) {
          gameId = stateFromStores.gameId;
        }
        let game = null;
        if (null != gameId) {
          game = GameStore.getGame(stateFromStores.gameId);
        }
        return game;
      });
      let id;
      const useEffect = react.useEffect;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      const items3 = [id];
      const effect = useEffect(() => {
        let id;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        return null != id
          ? () => {
              const obj = stateFromStores(stateFromStores1[7]);
              return obj.clearGameProfilePendingReturn(id.id);
            }
          : undefined;
      }, items3);
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      if (null != stateFromStores1) {
        if (null != name) {
          let iconURL;
          if (stateFromStores1 != null) {
            iconURL = stateFromStores1.getIconURL(AVATAR_SIZE);
          }
          return { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, onReturnToGameProfile: callback };
        }
      }
      return null;
    };
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default tmp2;
