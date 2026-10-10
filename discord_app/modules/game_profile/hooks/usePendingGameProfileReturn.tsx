// discord_app/modules/game_profile/hooks/usePendingGameProfileReturn.tsx
import GameProfileAnalyticUtils from "../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../GameProfileActionCreators.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../../games/GameStore.tsx";
import GameProfileStore from "../GameProfileStore.tsx";

require = fn;
const AVATAR_SIZE = fn(1085).AVATAR_SIZE;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function usePendingGameProfileReturn(channelId) {
      const cResult = channelId(stateFromStores1[5]).c(19);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameProfileStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = channelId(stateFromStores1[5]);
      const stateFromStores = channelId(stateFromStores1[6]).useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        class P {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[7]);
              obj1 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
              ({ gameId: obj2.gameId, source } = tmp);
              if (source == null) {
                tmp4 = closure_0;
                source = closure_0(tmp3[8]).GameProfileSources.AnnouncementChannelReturn;
              }
              obj1.source = source;
              ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = tmp);
              returnToGameProfileResult = obj.returnToGameProfile(obj1);
            }
            return;
          }
        }
        cResult[3] = stateFromStores;
        cResult[4] = P;
      } else {
        class P {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[7]);
              obj1 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
              ({ gameId: obj2.gameId, source } = tmp);
              if (source == null) {
                tmp4 = closure_0;
                source = closure_0(tmp3[8]).GameProfileSources.AnnouncementChannelReturn;
              }
              obj1.source = source;
              ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = tmp);
              returnToGameProfileResult = obj.returnToGameProfile(obj1);
            }
            return;
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[7]);
              obj1 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
              ({ gameId: obj2.gameId, source } = tmp);
              if (source == null) {
                tmp4 = closure_0;
                source = closure_0(tmp3[8]).GameProfileSources.AnnouncementChannelReturn;
              }
              obj1.source = source;
              ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = tmp);
              returnToGameProfileResult = obj.returnToGameProfile(obj1);
            }
            return;
          }
        }
        const items1 = [GameStore];
        cResult[5] = items1;
        const tmp9 = items1;
      } else {
        class P {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[7]);
              obj1 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
              ({ gameId: obj2.gameId, source } = tmp);
              if (source == null) {
                tmp4 = closure_0;
                source = closure_0(tmp3[8]).GameProfileSources.AnnouncementChannelReturn;
              }
              obj1.source = source;
              ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = tmp);
              returnToGameProfileResult = obj.returnToGameProfile(obj1);
            }
            return;
          }
        }
      }
      if (cResult[6] !== stateFromStores) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = R;
      } else {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      const tmpResult = channelId(stateFromStores1[6]);
      stateFromStores1 = channelId(stateFromStores1[6]).useStateFromStores(tmp9, R);
      if (cResult[8] !== stateFromStores1) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
        cResult[8] = stateFromStores1;
        cResult[9] = tmp13;
      } else {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      if (stateFromStores1 != null) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      if (cResult[10] !== undefined) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
        tmp16[0] = tmp14;
        cResult[10] = tmp14;
        cResult[11] = tmp16;
      } else {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      const effect = noop.useEffect(tmp13, tmp16);
      if (stateFromStores1 != null) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      if (null != stateFromStores1) {
        class R {
          constructor() {
            tmp = closure_1;
            gameId = undefined;
            if (closure_1 != null) {
              gameId = tmp.gameId;
            }
            game = null;
            if (null != gameId) {
              tmp4 = closure_4;
              game = closure_4.getGame(tmp.gameId);
            }
            return game;
          }
        }
      }
      return null;
    }
  : function usePendingGameProfileReturn(channelId) {
      channelId = channelId.channelId;
      let stateFromStores1;
      const items = [GameProfileStore];
      const stateFromStores = channelId(stateFromStores1[6]).useStateFromStores(items, () => {
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
      const callback = noop.useCallback(() => {
        if (null != stateFromStores) {
          const obj3 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
          ({ gameId: obj2.gameId, source } = stateFromStores);
          if (source == null) {
            source = GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn;
          }
          obj3.source = source;
          ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = stateFromStores);
          GameProfileActionCreatorsDefault.returnToGameProfile(obj3);
        }
      }, items1);
      let obj = channelId(stateFromStores1[6]);
      const items2 = [GameStore];
      stateFromStores1 = channelId(stateFromStores1[6]).useStateFromStores(items2, () => {
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
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      const items3 = [id];
      const effect = noop.useEffect(() => {
        let id;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        return null != id ? () => stateFromStores(stateFromStores1[7]).clearGameProfilePendingReturn(id.id) : undefined;
      }, items3);
      if (stateFromStores1 != null) {
        const name = stateFromStores1.name;
      }
      if (null != stateFromStores1) {
        if (null != name) {
          let iconURL;
          if (stateFromStores1 != null) {
            iconURL = stateFromStores1.getIconURL(AVATAR_SIZE);
          }
          let obj3 = {
            gameId: stateFromStores1.id,
            gameName: name,
            gameIconUrl: iconURL,
            onReturnToGameProfile: callback,
          };
          return obj3;
        }
      }
      return null;
    };
