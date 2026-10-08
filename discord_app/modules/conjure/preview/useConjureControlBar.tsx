// discord_app/modules/conjure/preview/useConjureControlBar.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";

const require = globalThis.__r;

const require = fn;
const interruptTurn = fn(13072).interruptTurn;
let c6 = 2400;
let c7 = 5000;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureControlPhase(arg0) {
      const cResult = first(576).c(3);
      const obj = first(576);
      [tmp3, tmp4] = noop.useState(arg0);
      [first] = noop.useState(false);
      dependencyMap = tmp7;
      if (arg0 !== tmp3) {
        tmp4(arg0);
        tmp7(!arg0);
      }
      if (cResult[0] !== first) {
        const fn = function n() {
          if (timeout) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => closure_1_1(false), closure_1_6);
            return () => clearTimeout(closure_0);
          }
        };
        const items = [first];
        cResult[0] = first;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp11 = items;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[1];
        tmp11 = cResult[2];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      let str = "controlling";
      if (!arg0) {
        let str2 = "idle";
        if (first) {
          str2 = "handoff";
        }
        str = str2;
      }
      return str;
    }
  : function useConjureControlPhase(arg0) {
      [tmp2, tmp3] = noop.useState(arg0);
      [first] = noop.useState(false);
      closure_1 = tmp6;
      if (arg0 !== tmp2) {
        tmp3(arg0);
        tmp6(!arg0);
      }
      const items = [first];
      const effect = noop.useEffect(() => {
        if (timeout) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => closure_1_1(false), closure_1_6);
          return () => clearTimeout(closure_0);
        }
      }, items);
      let str = "controlling";
      if (!arg0) {
        let str2 = "idle";
        if (first) {
          str2 = "handoff";
        }
        str = str2;
      }
      return str;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/useConjureControlBar.tsx");

export const CONJURE_CONTROL_HANDOFF_MS = 2400;
export const CONJURE_CONTROL_STOP_RETRY_MS = 5000;
export const useConjureControlPhase = tmp2;
export const useConjureControlStop = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureControlStop(arg0) {
      _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureChatStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          let isThinkingResult = null != closure_0;
          if (isThinkingResult) {
            isThinkingResult = ConjureChatStore.isThinking(tmp);
          }
          return isThinkingResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      [first1] = noop.useState(false);
      _slicedToArray = tmp10;
      const tmp11 = _slicedToArray(noop.useState(stateFromStores), 2);
      if (stateFromStores !== tmp11[0]) {
        tmp11[1](stateFromStores);
        if (!stateFromStores) {
          tmp10(false);
        }
      }
      if (cResult[3] !== first1) {
        class S {
          constructor() {
            if (closure_1) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              tmp2 = closure_1_7;
              closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const items1 = [first1];
        cResult[3] = first1;
        cResult[4] = S;
        cResult[5] = items1;
        let tmp15 = items1;
      } else {
        class S {
          constructor() {
            if (closure_1) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              tmp2 = closure_1_7;
              closure_0 = setTimeout(() => closure_1_2(false), closure_1_7);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        tmp15 = cResult[5];
      }
      const effect = noop.useEffect(S, tmp15);
      if (cResult[6] !== arg0) {
        class T {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              flag = true;
              tmp3 = closure_2(true);
              tmp4 = interruptTurn;
              tmp5 = interruptTurn(tmp);
            }
            return;
          }
        }
        cResult[6] = arg0;
        cResult[7] = T;
      } else {
        class T {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              flag = true;
              tmp3 = closure_2(true);
              tmp4 = interruptTurn;
              tmp5 = interruptTurn(tmp);
            }
            return;
          }
        }
      }
      if (stateFromStores) {
        class T {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              flag = true;
              tmp3 = closure_2(true);
              tmp4 = interruptTurn;
              tmp5 = interruptTurn(tmp);
            }
            return;
          }
        }
      }
      if (cResult[8] === first1) {
        class T {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              flag = true;
              tmp3 = closure_2(true);
              tmp4 = interruptTurn;
              tmp5 = interruptTurn(tmp);
            }
            return;
          }
        }
        return obj2;
      }
      obj2 = { stop: null, stopping: first1 };
      cResult[8] = first1;
      cResult[9] = null;
      cResult[10] = obj2;
      const tmpResult = require("initialize");
    }
  : function useConjureControlStop(arg0) {
      _require = arg0;
      const items = [ConjureChatStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        let isThinkingResult = null != closure_0;
        if (isThinkingResult) {
          isThinkingResult = ConjureChatStore.isThinking(tmp);
        }
        return isThinkingResult;
      });
      [stopping] = noop.useState(false);
      _slicedToArray = tmp4;
      const tmp5 = _slicedToArray(noop.useState(stateFromStores), 2);
      if (stateFromStores !== tmp5[0]) {
        tmp5[1](stateFromStores);
        if (!stateFromStores) {
          tmp4(false);
        }
      }
      const items1 = [stopping];
      const effect = noop.useEffect(() => {
        if (stopping) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_1_2(false), closure_1_7);
          return () => clearTimeout(closure_0);
        }
      }, items1);
      const items2 = [arg0];
      let stop = null;
      if (stateFromStores) {
        stop = noop.useCallback(() => {
          if (null != closure_0) {
            closure_2(true);
            interruptTurn(tmp);
          }
        }, items2);
      }
      return { stop, stopping };
    };
