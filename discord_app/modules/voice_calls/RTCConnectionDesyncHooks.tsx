// discord_app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import VoiceConnectFeedbackExperimentDefault from "VoiceConnectFeedbackExperiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionDesyncStore from "../../stores/RTCConnectionDesyncStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

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
          items.splice(
            _mod12.sortedIndexBy(items, item, (comparator) => comparator.comparator),
            0,
            item,
          );
        });
      }
      return items;
    }
  }
  return arg1;
}
const RTCConnectionStates = fn(1085).RTCConnectionStates;
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDesyncedChannelParticipants(arg0) {
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
        const fn = function s() {
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
    }
  : function useDesyncedChannelParticipants(arg0) {
      _require = arg0;
      const items = [RTCConnectionDesyncStore, RTCConnectionStore];
      return require("initialize").useStateFromStores(items, () => {
        let desyncedParticipants = null;
        if (closure_0 === RTCConnectionStore.getChannelId()) {
          desyncedParticipants = RTCConnectionDesyncStore.getDesyncedParticipants();
        }
        return desyncedParticipants;
      });
    };
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEnsureSyncedChannelVoiceStates(arg0, arg1) {
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
        const fn = function o() {
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
    }
  : function useEnsureSyncedChannelVoiceStates(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [RTCConnectionDesyncStore, RTCConnectionStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => {
        let desyncedVoiceStates = null;
        if (closure_0 === RTCConnectionStore.getChannelId()) {
          desyncedVoiceStates = RTCConnectionDesyncStore.getDesyncedVoiceStates();
        }
        return desyncedVoiceStates;
      });
      const items1 = [stateFromStores, arg1];
      return noop.useMemo(() => syncChannelVoiceStates(stateFromStores, closure_1), items1);
    };
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEnsureSyncedChannelParticipants(arg0, arg1) {
      const cResult = items(576).c(3);
      const arr = closure_11(arg0);
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
            items.splice(
              items(dependencyMap[7]).sortedIndexBy(items, item, (arg0) => items(closure_1_2[11]).sortKey(arg0)),
              0,
              item,
            );
          });
          tmp3 = items;
        }
      }
      cResult[0] = arr;
      cResult[1] = arg1;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : function useEnsureSyncedChannelParticipants(arg0, arg1) {
      closure_0 = arg1;
      const tmp = closure_11(arg0);
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
              items.splice(
                items(dependencyMap[7]).sortedIndexBy(items, item, (arg0) => items(closure_1_2[11]).sortKey(arg0)),
                0,
                item,
              );
            });
            tmp2 = items;
          }
        }
        return tmp2;
      }, items);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsSelfDisconnectedUIVisible(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return AuthenticationStore.getId() === closure_0;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      let showSelfConnectingUI = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "useIsSelfDisconnectedUIVisible" };
        cResult[3] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[3];
      }
      const tmpResult = require("initialize");
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [RTCConnectionStore];
        const fn2 = function h() {
          return RTCConnectionStore.getState();
        };
        cResult[4] = items1;
        cResult[5] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const obj4 = VoiceConnectFeedbackExperimentDefault;
      const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [RTCConnectionStore];
        const fn3 = function v() {
          return RTCConnectionStore.getWasEverRtcConnected();
        };
        cResult[6] = items2;
        cResult[7] = fn3;
        let tmp13 = fn3;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult3 = require("initialize");
      if (showSelfConnectingUI) {
        showSelfConnectingUI = tmpResult4.useStateFromStores(tmp12, tmp13);
      }
      if (showSelfConnectingUI) {
        showSelfConnectingUI = stateFromStores !== RTCConnectionStates.RTC_CONNECTED;
      }
      if (showSelfConnectingUI) {
        showSelfConnectingUI = obj4.useConfig(tmp7).showSelfConnectingUI;
      }
      return showSelfConnectingUI;
    }
  : function useIsSelfDisconnectedUIVisible(arg0) {
      _require = arg0;
      const items = [AuthenticationStore];
      let showSelfConnectingUI = require("initialize").useStateFromStores(
        items,
        () => AuthenticationStore.getId() === closure_0,
      );
      const obj = require("initialize");
      const obj2 = VoiceConnectFeedbackExperimentDefault;
      const items1 = [RTCConnectionStore];
      const stateFromStores = require("initialize").useStateFromStores(items1, () => RTCConnectionStore.getState());
      const obj3 = require("initialize");
      const items2 = [RTCConnectionStore];
      if (showSelfConnectingUI) {
        showSelfConnectingUI = obj4.useStateFromStores(items2, () => RTCConnectionStore.getWasEverRtcConnected());
      }
      if (showSelfConnectingUI) {
        showSelfConnectingUI = stateFromStores !== RTCConnectionStates.RTC_CONNECTED;
      }
      if (showSelfConnectingUI) {
        showSelfConnectingUI = obj2.useConfig({ location: "useIsSelfDisconnectedUIVisible" }).showSelfConnectingUI;
      }
      return showSelfConnectingUI;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/RTCConnectionDesyncHooks.tsx");

export const useEnsureSyncedChannelVoiceStates = tmp2;
export const useDesyncedChannelParticipants = tmp3;
export const useEnsureSyncedChannelParticipants = tmp4;
export const useIsSelfDisconnectedUIVisible = tmp5;
export const useIsRTCDisconnectedUIVisible = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsRTCDisconnectedUIVisible(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(23);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
        cResult[1] = arg1;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, C);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
        const items1 = [RTCConnectionStore];
        class I {
          constructor() {
            return closure_7.getChannelId();
          }
        }
        cResult[3] = items1;
        cResult[4] = I;
        let tmp9 = I;
        const tmp8 = items1;
      } else {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
        tmp9 = cResult[4];
      }
      const tmpResult = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
      _slicedToArray = noop.useRef(null);
      const tmpResult4 = require("initialize");
      [r10054, noop] = noop.useState(false);
      const tmp11 = _slicedToArray(noop.useState(false), 2);
      AuthenticationStore = _slicedToArray(noop.useState(false), 2)[1];
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
        const items2 = [RTCConnectionStore];
        class I {
          constructor() {
            return closure_7.getChannelId();
          }
        }
        items2[1] = VoiceStateStore;
        cResult[5] = items2;
        const tmp13 = items2;
      } else {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
      }
      if (cResult[6] === arg0) {
        class C {
          constructor() {
            return closure_5.getId() === closure_1;
          }
        }
        const stateFromStores2 = tmp(tmp2[10]).useStateFromStores(tmp13, fn);
        class I {
          constructor() {
            return closure_7.getChannelId();
          }
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              return closure_5.getId() === closure_1;
            }
          }
          const items3 = [RTCConnectionStore];
          class I {
            constructor() {
              return closure_7.getChannelId();
            }
          }
          items3[1] = VoiceStateStore;
          cResult[9] = items3;
          const tmp15 = items3;
        } else {
          class C {
            constructor() {
              return closure_5.getId() === closure_1;
            }
          }
        }
        if (cResult[10] === arg0) {
          class C {
            constructor() {
              return closure_5.getId() === closure_1;
            }
          }
          const stateFromStores3 = tmp(tmp2[10]).useStateFromStores(tmp15, tmp16);
          class I {
            constructor() {
              return closure_7.getChannelId();
            }
          }
          if (cResult[13] !== stateFromStores2) {
            class M {
              constructor() {
                if (closure_6) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            const items4 = [stateFromStores2];
            class I {
              constructor() {
                return closure_7.getChannelId();
              }
            }
            cResult[13] = stateFromStores2;
            cResult[14] = M;
            class B {
              constructor() {
                if (closure_2 !== closure_0) {
                  tmp = closure_5;
                  flag = false;
                  tmp2 = closure_5(false);
                }
                return;
              }
            }
            cResult[15] = items4;
            let tmp19 = items4;
          } else {
            class M {
              constructor() {
                if (closure_6) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            tmp19 = cResult[15];
          }
          const effect = noop.useEffect(M, tmp19);
          if (cResult[16] === arg0) {
            class M {
              constructor() {
                if (closure_6) {
                  tmp = closure_5;
                  flag = true;
                  tmp2 = closure_5(true);
                }
                return;
              }
            }
            const effect1 = noop.useEffect(B, tmp22);
            if (cResult[20] !== stateFromStores3) {
              class M {
                constructor() {
                  if (closure_6) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                  }
                  return;
                }
              }
              const items5 = [stateFromStores3];
              class I {
                constructor() {
                  return closure_7.getChannelId();
                }
              }
              cResult[20] = stateFromStores3;
              cResult[21] = tmp26;
              class B {
                constructor() {
                  if (closure_2 !== closure_0) {
                    tmp = closure_5;
                    flag = false;
                    tmp2 = closure_5(false);
                  }
                  return;
                }
              }
              cResult[22] = items5;
            } else {
              class M {
                constructor() {
                  if (closure_6) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                  }
                  return;
                }
              }
            }
            class I {
              constructor() {
                return closure_7.getChannelId();
              }
            }
            if (!stateFromStores) {
              class M {
                constructor() {
                  if (closure_6) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                  }
                  return;
                }
              }
            }
            if (tmp27) {
              class M {
                constructor() {
                  if (closure_6) {
                    tmp = closure_5;
                    flag = true;
                    tmp2 = closure_5(true);
                  }
                  return;
                }
              }
            }
            class B {
              constructor() {
                if (closure_2 !== closure_0) {
                  tmp = closure_5;
                  flag = false;
                  tmp2 = closure_5(false);
                }
                return;
              }
            }
            tmp27 = !stateFromStores;
          }
          class B {
            constructor() {
              if (closure_2 !== closure_0) {
                tmp = closure_5;
                flag = false;
                tmp2 = closure_5(false);
              }
              return;
            }
          }
          const items6 = [arg0, stateFromStores1];
          cResult[16] = arg0;
          cResult[17] = stateFromStores1;
          cResult[18] = B;
          cResult[19] = items6;
          tmp22 = items6;
          const tmpResult6 = tmp(tmp2[10]);
        }
        const fn2 = function w() {
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
        };
        cResult[10] = arg0;
        cResult[11] = arg1;
        cResult[12] = fn2;
        tmp16 = fn2;
        const tmpResult5 = tmp(tmp2[10]);
      }
      fn = function _() {
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
      cResult[8] = fn;
      const tmp12 = _slicedToArray(noop.useState(false), 2);
    }
  : function useIsRTCDisconnectedUIVisible(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [AuthenticationStore];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => AuthenticationStore.getId() === closure_1,
      );
      const obj = require("initialize");
      const items1 = [stateFromStores3];
      stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores3.getChannelId());
      _slicedToArray = noop.useRef(null);
      const obj2 = require("initialize");
      [tmp4, noop] = noop.useState(false);
      const tmp3 = _slicedToArray(noop.useState(false), 2);
      [tmp6, AuthenticationStore] = noop.useState(false);
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      const items2 = [stateFromStores3, VoiceStateStore];
      const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
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
      const items3 = [stateFromStores3, VoiceStateStore];
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
          AuthenticationStore(true);
        }
      }, items4);
      const items5 = [arg0, stateFromStores1];
      const effect1 = noop.useEffect(() => {
        if (stateFromStores1 !== closure_0) {
          AuthenticationStore(false);
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
        noop(false);
      }, items6);
      let tmp12 = !stateFromStores;
      if (!stateFromStores) {
        tmp12 = tmp6;
      }
      if (tmp12) {
        tmp12 = tmp4;
      }
      return tmp12;
    };
