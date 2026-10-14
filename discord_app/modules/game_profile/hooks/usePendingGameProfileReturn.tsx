// === Module 12706: usePendingGameProfileReturn ===

// Module 12706 (usePendingGameProfileReturn)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8883 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8889 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2020 */;
import GameProfileStore from "GameProfileStore" /* 8891 */;

require = fn;
const AVATAR_SIZE = fn(1085).AVATAR_SIZE;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingGameProfileReturn(channelId) {
  const cResult = channelId(576).c(21);
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
  let obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  const tmp8 = _slicedToArray(stateFromStores1.useState(null), 2);
  dependencyMap = tmp8[1];
  _slicedToArray = tmp9;
  if (cResult[3] === (null != stateFromStores && tmp8[0] === stateFromStores)) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GameStore];
      cResult[6] = items1;
      let tmp11 = items1;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== stateFromStores) {
      class A {
        constructor() {
          tmp = closure_1;
          gameId = undefined;
          if (closure_1 != null) {
            gameId = tmp.gameId;
          }
          game = null;
          if (null != gameId) {
            tmp4 = closure_5;
            game = closure_5.getGame(tmp.gameId);
          }
          return game;
        }
      }
      cResult[7] = stateFromStores;
      cResult[8] = A;
    } else {
      class A {
        constructor() {
          tmp = closure_1;
          gameId = undefined;
          if (closure_1 != null) {
            gameId = tmp.gameId;
          }
          game = null;
          if (null != gameId) {
            tmp4 = closure_5;
            game = closure_5.getGame(tmp.gameId);
          }
          return game;
        }
      }
    }
    stateFromStores1 = tmp(504).useStateFromStores(tmp11, A);
    if (cResult[9] !== stateFromStores1) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
      cResult[9] = stateFromStores1;
      cResult[10] = O;
    } else {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
    }
    if (cResult[11] !== undefined) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
      tmp18[0] = tmp16;
      cResult[11] = tmp16;
      cResult[12] = tmp18;
    } else {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
    }
    const effect = obj3.useEffect(O, tmp18);
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
    }
    if (null != stateFromStores1) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
        }
      }
    }
    return null;
  }
  class S {
    constructor() {
      tmp = closure_1;
      tmp2 = null == closure_1 || closure_3;
      if (!tmp2) {
        tmp3 = closure_2;
        tmp4 = closure_2(tmp);
        tmp5 = closure_1;
        tmp6 = closure_2;
        obj = closure_1(closure_2[8]);
        obj1 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
        ({ gameId: obj2.gameId, source } = tmp);
        if (source == null) {
          tmp7 = closure_0;
          source = closure_0(tmp6[9]).GameProfileSources.AnnouncementChannelReturn;
        }
        obj1.source = source;
        ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = tmp);
        returnToGameProfileResult = obj.returnToGameProfile(obj1);
      }
      return;
    }
  }
  cResult[3] = null != stateFromStores && tmp8[0] === stateFromStores;
  cResult[4] = stateFromStores;
  cResult[5] = S;
  obj3 = stateFromStores1;
  const tmpResult = channelId(504);
}) : (function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  _slicedToArray = undefined;
  let stateFromStores1;
  const items = [GameProfileStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
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
  const tmp4 = _slicedToArray(stateFromStores1.useState(null), 2);
  dependencyMap = tmp4[1];
  _slicedToArray = tmp5;
  const items1 = [stateFromStores, null != stateFromStores && tmp4[0] === stateFromStores];
  const callback = obj2.useCallback(() => {
    if (!tmp2) {
      closure_2(stateFromStores);
      const obj3 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
      ({ gameId: obj2.gameId, source } = stateFromStores);
      if (source == null) {
        source = GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn;
      }
      obj3.source = source;
      ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = stateFromStores);
      GameProfileActionCreatorsDefault.returnToGameProfile(obj3);
    }
    tmp2 = null == stateFromStores || closure_3;
  }, items1);
  let obj = channelId(504);
  const items2 = [GameStore];
  stateFromStores1 = channelId(504).useStateFromStores(items2, () => {
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
  const effect = obj2.useEffect(() => {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return null != id ? (() => stateFromStores(closure_2[8]).clearGameProfilePendingReturn(id.id)) : undefined;
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
      let obj3 = { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, isReturning: tmp5, onReturnToGameProfile: callback };
      return obj3;
    }
  }
  return null;
});