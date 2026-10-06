// === Module 16203: RTCConnectionDesyncHooks ===

// Module 16203 (RTCConnectionDesyncHooks)
import _mod12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import VoiceConnectFeedbackExperimentDefault from "VoiceConnectFeedbackExperiment" /* 16204 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionDesyncStore from "RTCConnectionDesyncStore" /* 13582 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

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
let _slicedToArray = _slicedToArray_mod;
const RTCConnectionStates = Constants.RTCConnectionStates;
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
    const fn = function l() {
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
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  const items = [RTCConnectionDesyncStore, RTCConnectionStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
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
    const fn = function s() {
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
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let items;
  const obj = items(576);
  const cResult = obj.c(3);
  const arr = closure_11(arg0);
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
        let obj = closure_2_0(closure_2_2[7]);
        splice(obj.sortedIndexBy(items, item, (arg0) => {
          const obj = items(closure_1_2[11]);
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
  const tmp = closure_11(arg0);
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
          let obj = closure_2_0(closure_2_2[7]);
          splice(obj.sortedIndexBy(items, item, (arg0) => {
            const obj = items(closure_1_2[11]);
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return AuthenticationStore.getId() === closure_0;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useIsSelfDisconnectedUIVisible" };
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const obj4 = VoiceConnectFeedbackExperimentDefault;
  const showSelfConnectingUI = obj4.useConfig(tmp8).showSelfConnectingUI;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RTCConnectionStore];
    const fn2 = function h() {
      return RTCConnectionStore.getState();
    };
    cResult[4] = items1;
    cResult[5] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RTCConnectionStore];
    const fn3 = function y() {
      return RTCConnectionStore.getWasEverRtcConnected();
    };
    cResult[6] = items2;
    cResult[7] = fn3;
    tmp14 = fn3;
    tmp13 = items2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult4 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = tmpResult4.useStateFromStores(tmp13, tmp14);
  }
  if (stateFromStores) {
    stateFromStores = stateFromStores1 !== RTCConnectionStates.RTC_CONNECTED;
  }
  if (stateFromStores) {
    stateFromStores = showSelfConnectingUI;
  }
  return stateFromStores;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj2 = VoiceConnectFeedbackExperimentDefault;
  const showSelfConnectingUI = obj2.useConfig({ location: "useIsSelfDisconnectedUIVisible" }).showSelfConnectingUI;
  const items1 = [RTCConnectionStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => RTCConnectionStore.getState());
  const items2 = [RTCConnectionStore];
  const obj4 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = obj4.useStateFromStores(items2, () => RTCConnectionStore.getWasEverRtcConnected());
  }
  if (stateFromStores) {
    stateFromStores = stateFromStores1 !== RTCConnectionStates.RTC_CONNECTED;
  }
  if (stateFromStores) {
    stateFromStores = showSelfConnectingUI;
  }
  return stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let channelId;
  let closure_0;
  let closure_5;
  let first;
  let first1;
  let ref;
  let stateFromStores1;
  let tmp13;
  let tmp16;
  let tmp28;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  let closure_1 = arg1;
  let tmp2 = stateFromStores1;
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
    const items1 = [RTCConnectionStore];
    class I {
      constructor() {
        return channelId.getChannelId();
      }
    }
    cResult[3] = items1;
    cResult[4] = I;
    tmp9 = I;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult4 = require("get initialized");
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  _slicedToArray = react.useRef(null);
  const tmp12 = _slicedToArray(react.useState(false), 2);
  [tmp13, react] = tmp12;
  [first1, AuthenticationStore] = react.useState(false);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RTCConnectionStore, ];
    class I {
      constructor() {
        return channelId.getChannelId();
      }
    }
    items2[1] = VoiceStateStore;
    cResult[5] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === arg0) {
    let tmp18;
    let tmp20;
    if (cResult[7] === arg1) {
      tmp18 = cResult[8];
    }
    const tmpResult5 = require("get initialized");
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp16, tmp18);
    class I {
      constructor() {
        return channelId.getChannelId();
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [RTCConnectionStore, ];
      class I {
        constructor() {
          return channelId.getChannelId();
        }
      }
      items3[1] = VoiceStateStore;
      cResult[9] = items3;
      tmp20 = items3;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === arg0) {
      let tmp22;
      let tmp25;
      if (cResult[11] === arg1) {
        tmp22 = cResult[12];
      }
      const tmpResult6 = require("get initialized");
      const stateFromStores3 = tmpResult6.useStateFromStores(tmp20, tmp22);
      class I {
        constructor() {
          return channelId.getChannelId();
        }
      }
      if (cResult[13] !== stateFromStores2) {
        class M {
          constructor() {
            if (RTCConnectionDesyncStore) {
              closure_5(true);
            }
          }
        }
        const items4 = [stateFromStores2];
        class I {
          constructor() {
            return channelId.getChannelId();
          }
        }
        cResult[13] = stateFromStores2;
        cResult[14] = M;
        class B {
          constructor() {
            if (stateFromStores1 !== closure_0) {
              closure_5(false);
            }
          }
        }
        cResult[15] = items4;
        tmp25 = items4;
      } else {
        class M {
          constructor() {
            if (RTCConnectionDesyncStore) {
              closure_5(true);
            }
          }
        }
        tmp25 = cResult[15];
      }
      const effect = react.useEffect(M, tmp25);
      if (cResult[16] === arg0) {
        class M {
          constructor() {
            if (RTCConnectionDesyncStore) {
              closure_5(true);
            }
          }
        }
        const effect1 = react.useEffect(B, tmp28);
        if (cResult[20] !== stateFromStores3) {
          class M {
            constructor() {
              if (RTCConnectionDesyncStore) {
                closure_5(true);
              }
            }
          }
          const items5 = [stateFromStores3];
          class I {
            constructor() {
              return channelId.getChannelId();
            }
          }
          cResult[20] = stateFromStores3;
          cResult[21] = tmp32;
          class B {
            constructor() {
              if (stateFromStores1 !== closure_0) {
                closure_5(false);
              }
            }
          }
          cResult[22] = items5;
        } else {
          class M {
            constructor() {
              if (RTCConnectionDesyncStore) {
                closure_5(true);
              }
            }
          }
        }
        class I {
          constructor() {
            return channelId.getChannelId();
          }
        }
        return !stateFromStores && first1 && tmp13;
      }
      class B {
        constructor() {
          if (stateFromStores1 !== closure_0) {
            closure_5(false);
          }
        }
      }
      const items6 = [arg0, stateFromStores1];
      cResult[16] = arg0;
      cResult[17] = stateFromStores1;
      cResult[18] = B;
      cResult[19] = items6;
      tmp28 = items6;
    }
    const fn3 = function w() {
      const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
      return tmp2;
    };
    cResult[10] = arg0;
    cResult[11] = arg1;
    cResult[12] = fn3;
    tmp22 = fn3;
  }
  const fn2 = function _() {
    const isUserConnectedResult = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && RTCConnectionStore.isUserConnected(closure_1);
    return isUserConnectedResult;
  };
  cResult[6] = arg0;
  cResult[7] = arg1;
  cResult[8] = fn2;
  tmp18 = fn2;
}) : ((arg0, arg1) => {
  let closure_0;
  let ref;
  let stateFromStores1;
  let stateFromStores3;
  let tmp4;
  let tmp6;
  _require = arg0;
  let closure_1 = arg1;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_1);
  const items1 = [stateFromStores3];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores3.getChannelId());
  _slicedToArray = react.useRef(null);
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, react] = tmp3;
  [tmp6, AuthenticationStore] = _slicedToArray(react.useState(false), 2);
  const items2 = [stateFromStores3, VoiceStateStore];
  const tmp5 = _slicedToArray(react.useState(false), 2);
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const isUserConnectedResult = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && RTCConnectionStore.isUserConnected(closure_1);
    return isUserConnectedResult;
  });
  const items3 = [stateFromStores3, VoiceStateStore];
  const obj4 = require("get initialized");
  stateFromStores3 = obj4.useStateFromStores(items3, () => {
    const tmp2 = null != closure_1 && null != closure_0 && RTCConnectionStore.getChannelId() === closure_0 && null != VoiceStateStore.isInChannel(closure_0, closure_1) && !RTCConnectionStore.isUserConnected(closure_1);
    return tmp2;
  });
  const items4 = [stateFromStores2];
  const effect = react.useEffect(() => {
    if (stateFromStores2) {
      AuthenticationStore(true);
    }
  }, items4);
  const items5 = [arg0, stateFromStores1];
  const effect1 = react.useEffect(() => {
    if (stateFromStores1 !== closure_0) {
      AuthenticationStore(false);
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
    react(false);
  }, items6);
  return !stateFromStores && tmp6 && tmp4;
});
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = tmp2;
export const useDesyncedChannelParticipants = tmp3;
export const useEnsureSyncedChannelParticipants = tmp4;
export const useIsSelfDisconnectedUIVisible = tmp5;
export const useIsRTCDisconnectedUIVisible = tmp6;