// === Module 16164: RTCConnectionDesyncHooks ===

// Module 16164 (RTCConnectionDesyncHooks)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 13566 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, clearTimeoutResult, dependencyMap, num, set;

function syncChannelVoiceStates(stateFromStores, arg1) {
  if (null != stateFromStores) {
    if (0 !== stateFromStores.length) {
      const items = [];
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const iter = arg1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr = items.push(nextResult);
        let addResult = set.add(nextResult.user.id);
        continue;
      }
      if (stateFromStores != null) {
        const item = stateFromStores.forEach((item) => {
          const splice = items.splice;
          const obj = _mod12;
          splice(obj.sortedIndexBy(items, item, (comparator) => comparator.comparator), 0, item);
        });
      }
      return items;
    }
  }
  return arg1;
}
let react = react_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === stateFromStores) {
    let tmp9;
    if (cResult[4] === arg1) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = syncChannelVoiceStates(stateFromStores, arg1);
  cResult[3] = stateFromStores;
  cResult[4] = arg1;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let desyncedVoiceStates = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
    }
    return desyncedVoiceStates;
  });
  const items1 = [stateFromStores, arg1];
  return react.useMemo(() => syncChannelVoiceStates(stateFromStores, closure_1), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionDesyncStore, RTCConnectionStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let desyncedParticipants = null;
    if (closure_0 === RTCConnectionStore.getChannelId()) {
      desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
    }
    return desyncedParticipants;
  });
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let items;
  const obj = items(576);
  const cResult = obj.c(3);
  const arr = closure_9(arg0);
  if (cResult[0] === arr) {
    let tmp3;
    if (cResult[1] === arg1) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4 = arg1;
  if (null != arr) {
    tmp4 = arg1;
    if (0 !== arr.length) {
      items = [];
      HermesBuiltin.arraySpread(items, arg1, 0);
      const item = arr.forEach((item) => {
        const splice = items.splice;
        let obj = closure_2_0(closure_2_1[6]);
        splice(obj.sortedIndexBy(items, item, (arg0) => {
          const obj = items(closure_1_1[10]);
          return obj.sortKey(arg0);
        }), 0, item);
      });
      tmp4 = items;
    }
  }
  cResult[0] = arr;
  cResult[1] = arg1;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((arg0, arg1) => {
  let closure_0 = arg1;
  const tmp = closure_9(arg0);
  let closure_1 = tmp;
  let items = [tmp, arg1];
  return react.useMemo(() => {
    let tmp3 = closure_0;
    if (null != closure_1) {
      tmp3 = closure_0;
      if (0 !== closure_1.length) {
        const items = [];
        HermesBuiltin.arraySpread(items, closure_0, 0);
        const item = closure_1.forEach((item) => {
          const splice = items.splice;
          let obj = closure_2_0(closure_2_1[6]);
          splice(obj.sortedIndexBy(items, item, (arg0) => {
            const obj = items(closure_1_1[10]);
            return obj.sortKey(arg0);
          }), 0, item);
        });
        tmp3 = items;
      }
    }
    return tmp3;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  let ref;
  let stateFromStores2;
  let stateFromStores3;
  let tmp13;
  let tmp16;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  dependencyMap = arg1;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(23);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function f() {
      return AuthenticationStore.getId() === closure_1;
    };
    cResult[1] = arg1;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores2];
    const fn2 = function y() {
      return stateFromStores2.getChannelId();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  react = react.useRef(null);
  [tmp13, AuthenticationStore] = stateFromStores1(react.useState(false), 2);
  stateFromStores1(react.useState(false), 2);
  const tmp14 = stateFromStores1(react.useState(false), 2);
  let closure_5 = tmp14[1];
  const first1 = tmp14[0];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores2, stateFromStores3];
    cResult[5] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === arg0) {
    let tmp19;
    let tmp21;
    if (cResult[7] === arg1) {
      tmp19 = cResult[8];
    }
    const tmpResult5 = require("get initialized");
    stateFromStores2 = tmpResult5.useStateFromStores(tmp16, tmp19);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [stateFromStores2, stateFromStores3];
      cResult[9] = items3;
      tmp21 = items3;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] === arg0) {
      let tmp24;
      let tmp27;
      let tmp26;
      if (cResult[11] === arg1) {
        tmp24 = cResult[12];
      }
      const tmpResult6 = require("get initialized");
      stateFromStores3 = tmpResult6.useStateFromStores(tmp21, tmp24);
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
            const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
            return tmp2;
          }
        }
        tmp27 = items4;
        tmp26 = fn4;
      } else {
        tmp26 = cResult[14];
        tmp27 = cResult[15];
      }
      const effect = obj4.useEffect(tmp26, tmp27);
      if (cResult[16] === arg0) {
        let tmp29;
        let tmp30;
        let tmp34;
        if (cResult[17] === stateFromStores1) {
          tmp29 = cResult[18];
          tmp30 = cResult[19];
        }
        const effect1 = obj4.useEffect(tmp29, tmp30);
        if (cResult[20] !== stateFromStores3) {
          class K {
            constructor() {
              tmp = closure_7;
              if (tmp) {
                tmp3 = null;
                if (null == closure_3.current) {
                  tmp6 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp2.current = setTimeout(() => {
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
              tmp5 = closure_4(false);
              return;
            }
          }
          const items5 = [stateFromStores3];
          cResult[20] = stateFromStores3;
          cResult[21] = K;
          class M {
            constructor() {
              const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
              return tmp2;
            }
          }
          tmp34 = items5;
        } else {
          class K {
            constructor() {
              tmp = closure_7;
              if (tmp) {
                tmp3 = null;
                if (null == closure_3.current) {
                  tmp6 = globalThis;
                  _setTimeout = setTimeout;
                  num = 250;
                  tmp2.current = setTimeout(() => {
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
              tmp5 = closure_4(false);
              return;
            }
          }
          tmp34 = cResult[22];
        }
        const effect2 = obj4.useEffect(K, tmp34);
        return !stateFromStores && first1 && tmp13;
      }
      const fn5 = function w() {
        if (stateFromStores1 !== closure_0) {
          closure_5(false);
        }
      };
      class M {
        constructor() {
          const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
          return tmp2;
        }
      }
      tmp31[0] = arg0;
      tmp31[1] = stateFromStores1;
      cResult[16] = arg0;
      cResult[17] = stateFromStores1;
      cResult[18] = fn5;
      cResult[19] = tmp31;
      tmp30 = tmp31;
      tmp29 = fn5;
    }
    class M {
      constructor() {
        const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
        return tmp2;
      }
    }
    cResult[10] = arg0;
    cResult[11] = arg1;
    cResult[12] = M;
    tmp24 = M;
  }
  const fn3 = function p() {
    const isUserConnectedResult = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && RTCConnectionStore.isUserConnected(closure_1);
    return isUserConnectedResult;
  };
  cResult[6] = arg0;
  cResult[7] = arg1;
  cResult[8] = fn3;
  tmp19 = fn3;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let ref;
  let stateFromStores2;
  let stateFromStores3;
  let tmp4;
  let tmp6;
  _require = arg0;
  dependencyMap = arg1;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const items1 = [stateFromStores2];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores2.getChannelId());
  react = react.useRef(null);
  [tmp4, AuthenticationStore] = stateFromStores1(react.useState(false), 2);
  const tmp3 = stateFromStores1(react.useState(false), 2);
  [tmp6, RTCConnectionDesyncStore] = stateFromStores1(react.useState(false), 2);
  const items2 = [stateFromStores2, stateFromStores3];
  const tmp5 = stateFromStores1(react.useState(false), 2);
  const obj3 = require("get initialized");
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const isUserConnectedResult = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && RTCConnectionStore.isUserConnected(closure_1);
    return isUserConnectedResult;
  });
  const items3 = [stateFromStores2, stateFromStores3];
  const obj4 = require("get initialized");
  stateFromStores3 = obj4.useStateFromStores(items3, () => {
    const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = react.useEffect(() => {
    if (stateFromStores2) {
      RTCConnectionDesyncStore(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = react.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      RTCConnectionDesyncStore(false);
    }
  }, items5);
  const items6 = [stateFromStores3];
  const effect2 = react.useEffect(() => {
    if (stateFromStores3) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
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
  return !stateFromStores && tmp6 && tmp4;
});
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = tmp2;
export const useDesyncedChannelParticipants = tmp3;
export const useEnsureSyncedChannelParticipants = tmp4;
export const useIsRTCDisconnectedUIVisible = tmp5;