// === Module 16164: RTCConnectionDesyncHooks ===

// Module 16164 (RTCConnectionDesyncHooks)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 13566 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const require = globalThis.__r;

require = fn;
function syncChannelVoiceStates(stateFromStores, arg1) {
  if (null != stateFromStores) {
    if (0 !== stateFromStores.length) {
      const items = [];
      const _Set = Set;
      const set = new Set();
      const iter = arg1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr = items.push(nextResult);
        let addResult = set.add(nextResult.user.id);
        continue;
      }
      if (stateFromStores != null) {
        const item = stateFromStores.forEach((item) => {
          items.splice(_mod12.sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
        });
      }
      return items;
    }
  }
  return arg1;
}
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let desyncedParticipants = null;
      if (closure_0 === RTCConnectionStore.getChannelId()) {
        desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
      }
      return desyncedParticipants;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  return require("initialize").useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
});
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let desyncedVoiceStates = null;
      if (closure_0 === RTCConnectionStore.getChannelId()) {
        desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
      }
      return desyncedVoiceStates;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === arg1) {
      let tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = syncChannelVoiceStates(stateFromStores, arg1);
  cResult[3] = stateFromStores;
  cResult[4] = arg1;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const tmpResult = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  const items1 = [stateFromStores, arg1];
  return noop.useMemo(() => syncChannelVoiceStates(stateFromStores, closure_1), items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = items(576).c(3);
  const arr = closure_9(arg0);
  if (cResult[0] === arr) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  let tmp3 = arg1;
  if (null != arr) {
    tmp3 = arg1;
    if (0 !== arr.length) {
      items = [];
      HermesBuiltin.arraySpread(arg1, 0);
      const item = arr.forEach((item) => {
        items.splice(items(closure_1[6]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[10]).sortKey(arg0)), 0, item);
      });
      tmp3 = items;
    }
  }
  cResult[0] = arr;
  cResult[1] = arg1;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((arg0, arg1) => {
  closure_0 = arg1;
  const tmp = closure_9(arg0);
  closure_1 = tmp;
  let items = [tmp, arg1];
  return noop.useMemo(() => {
    let tmp2 = items;
    if (null != closure_1) {
      tmp2 = tmp;
      if (0 !== closure_1.length) {
        items = [];
        HermesBuiltin.arraySpread(tmp, 0);
        const item = closure_1.forEach((item) => {
          items.splice(items(closure_1[6]).sortedIndexBy(items, item, (arg0) => items(closure_1_1[10]).sortKey(arg0)), 0, item);
        });
        tmp2 = items;
      }
    }
    return tmp2;
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = tmp2;
export const useDesyncedChannelParticipants = tmp3;
export const useEnsureSyncedChannelParticipants = tmp4;
export const useIsRTCDisconnectedUIVisible = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(23);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function f() {
      return AuthenticationStore.getId() === closure_1;
    };
    cResult[1] = arg1;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2];
    const fn2 = function y() {
      return stateFromStores2.getChannelId();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  noop = noop.useRef(null);
  const tmpResult4 = require("initialize");
  [r10054, AuthenticationStore] = stateFromStores1(noop.useState(false), 2);
  const tmp12 = stateFromStores1(noop.useState(false), 2);
  closure_5 = stateFromStores1(noop.useState(false), 2)[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores2, stateFromStores3];
    cResult[5] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === arg0) {
    if (cResult[7] === arg1) {
      let tmp17 = cResult[8];
    }
    stateFromStores2 = tmp(504).useStateFromStores(tmp14, tmp17);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [stateFromStores2, stateFromStores3];
      cResult[9] = items3;
      let tmp19 = items3;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === arg0) {
      if (cResult[11] === arg1) {
        let tmp22 = cResult[12];
      }
      stateFromStores3 = tmp(504).useStateFromStores(tmp19, tmp22);
      if (cResult[13] !== stateFromStores2) {
        const fn4 = function j() {
          if (stateFromStores2) {
            closure_5(true);
          }
        };
        const items4 = [stateFromStores2];
        cResult[13] = stateFromStores2;
        cResult[14] = fn4;
        class M {
          constructor() {
            tmp = closure_1;
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_0;
              tmp2 = null != closure_0;
            }
            if (tmp2) {
              tmp4 = closure_6;
              tmp5 = closure_0;
              tmp2 = closure_6.getChannelId() === closure_0;
            }
            if (tmp2) {
              tmp6 = closure_7;
              tmp7 = closure_0;
              tmp2 = null != closure_7.isInChannel(closure_0, tmp);
            }
            if (tmp2) {
              tmp8 = closure_6;
              tmp2 = !closure_6.isUserConnected(tmp);
            }
            return tmp2;
          }
        }
        let tmp25 = items4;
        let tmp24 = fn4;
      } else {
        tmp24 = cResult[14];
        tmp25 = cResult[15];
      }
      const effect = obj4.useEffect(tmp24, tmp25);
      if (cResult[16] === arg0) {
        if (cResult[17] === stateFromStores1) {
          let tmp27 = cResult[18];
          let tmp28 = cResult[19];
        }
        const effect1 = obj4.useEffect(tmp27, tmp28);
        if (cResult[20] !== stateFromStores3) {
          class K {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
          const items5 = [stateFromStores3];
          cResult[20] = stateFromStores3;
          cResult[21] = K;
          class M {
            constructor() {
              tmp = closure_1;
              tmp2 = null != closure_1;
              if (tmp2) {
                tmp3 = closure_0;
                tmp2 = null != closure_0;
              }
              if (tmp2) {
                tmp4 = closure_6;
                tmp5 = closure_0;
                tmp2 = closure_6.getChannelId() === closure_0;
              }
              if (tmp2) {
                tmp6 = closure_7;
                tmp7 = closure_0;
                tmp2 = null != closure_7.isInChannel(closure_0, tmp);
              }
              if (tmp2) {
                tmp8 = closure_6;
                tmp2 = !closure_6.isUserConnected(tmp);
              }
              return tmp2;
            }
          }
          let tmp32 = items5;
        } else {
          class K {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
          tmp32 = cResult[22];
        }
        const effect2 = obj4.useEffect(K, tmp32);
        if (!stateFromStores) {
          class K {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
        }
        if (!stateFromStores) {
          class K {
            constructor() {
              if (closure_7) {
                tmp2 = null;
                if (null == closure_3.current) {
                  tmp5 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp.current = setTimeout(() => {
                    ref.current = null;
                    closure_1_4(true);
                  }, 250);
                }
                return () => {
                  clearTimeout(ref.current);
                  ref.current = null;
                };
              }
              clearTimeoutResult = clearTimeout(closure_3.current);
              closure_3.current = null;
              tmp4 = closure_4(false);
              return;
            }
          }
        }
        return !stateFromStores;
      }
      const fn5 = function w() {
        if (stateFromStores1 !== closure_0) {
          closure_5(false);
        }
      };
      class M {
        constructor() {
          tmp = closure_1;
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_0;
            tmp2 = null != closure_0;
          }
          if (tmp2) {
            tmp4 = closure_6;
            tmp5 = closure_0;
            tmp2 = closure_6.getChannelId() === closure_0;
          }
          if (tmp2) {
            tmp6 = closure_7;
            tmp7 = closure_0;
            tmp2 = null != closure_7.isInChannel(closure_0, tmp);
          }
          if (tmp2) {
            tmp8 = closure_6;
            tmp2 = !closure_6.isUserConnected(tmp);
          }
          return tmp2;
        }
      }
      tmp29[0] = arg0;
      tmp29[1] = stateFromStores1;
      cResult[16] = arg0;
      cResult[17] = stateFromStores1;
      cResult[18] = fn5;
      cResult[19] = tmp29;
      tmp28 = tmp29;
      tmp27 = fn5;
      const tmpResult6 = tmp(504);
    }
    class M {
      constructor() {
        tmp = closure_1;
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_0;
          tmp2 = null != closure_0;
        }
        if (tmp2) {
          tmp4 = closure_6;
          tmp5 = closure_0;
          tmp2 = closure_6.getChannelId() === closure_0;
        }
        if (tmp2) {
          tmp6 = closure_7;
          tmp7 = closure_0;
          tmp2 = null != closure_7.isInChannel(closure_0, tmp);
        }
        if (tmp2) {
          tmp8 = closure_6;
          tmp2 = !closure_6.isUserConnected(tmp);
        }
        return tmp2;
      }
    }
    cResult[10] = arg0;
    cResult[11] = arg1;
    cResult[12] = M;
    tmp22 = M;
    const tmpResult5 = tmp(504);
  }
  const fn3 = function p() {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, closure_1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(closure_1);
    }
    return isUserConnectedResult;
  };
  cResult[6] = arg0;
  cResult[7] = arg1;
  cResult[8] = fn3;
  tmp17 = fn3;
  const tmp13 = stateFromStores1(noop.useState(false), 2);
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const obj = require("initialize");
  const items1 = [stateFromStores2];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores2.getChannelId());
  noop = noop.useRef(null);
  const obj2 = require("initialize");
  [tmp4, AuthenticationStore] = stateFromStores1(noop.useState(false), 2);
  const tmp3 = stateFromStores1(noop.useState(false), 2);
  [tmp6, RTCConnectionDesyncStore] = stateFromStores1(noop.useState(false), 2);
  const tmp5 = stateFromStores1(noop.useState(false), 2);
  const items2 = [stateFromStores2, stateFromStores3];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let isUserConnectedResult = null != closure_1;
    if (isUserConnectedResult) {
      isUserConnectedResult = null != closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = null != VoiceStateStore.isInChannel(closure_0, closure_1);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = RTCConnectionStore.isUserConnected(closure_1);
    }
    return isUserConnectedResult;
  });
  const obj3 = require("initialize");
  const items3 = [stateFromStores2, stateFromStores3];
  stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      tmp2 = RTCConnectionStore.getChannelId() === closure_0;
    }
    if (tmp2) {
      tmp2 = null != VoiceStateStore.isInChannel(closure_0, closure_1);
    }
    if (tmp2) {
      tmp2 = !RTCConnectionStore.isUserConnected(closure_1);
    }
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = noop.useEffect(() => {
    if (stateFromStores2) {
      RTCConnectionDesyncStore(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      RTCConnectionDesyncStore(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = noop.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
        }, 250);
      }
      return () => {
        clearTimeout(ref.current);
        ref.current = null;
      };
    }
    clearTimeout(ref.current);
    ref.current = null;
    AuthenticationStore(false);
  }, items6);
  let tmp12 = !stateFromStores;
  if (!stateFromStores) {
    tmp12 = tmp6;
  }
  if (tmp12) {
    tmp12 = tmp4;
  }
  return tmp12;
});