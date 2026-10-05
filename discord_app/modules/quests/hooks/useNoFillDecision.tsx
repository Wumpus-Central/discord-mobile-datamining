// discord_app/modules/quests/hooks/useNoFillDecision.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import QuestStore from "../QuestStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, num, tmp, tmp3;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      let closure_0;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(16);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const obj3 = stateFromStores(15020);
      const enableNoFill = obj3.useConfig(tmp4).enableNoFill;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AdDeliveryStore];
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        class S {
          constructor() {
            return AdDeliveryStore.getNoFillForPlacement(closure_0);
          }
        }
        const items1 = [arg0];
        cResult[3] = arg0;
        cResult[4] = S;
        cResult[5] = items1;
        tmp8 = items1;
      } else {
        class S {
          constructor() {
            return AdDeliveryStore.getNoFillForPlacement(closure_0);
          }
        }
        tmp8 = cResult[5];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp5, S, tmp8);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return AdDeliveryStore.getNoFillForPlacement(closure_0);
          }
        }
        const items2 = [QuestStore];
        const fn = function _() {
          return null != QuestStore.questEnrollmentBlockedUntil;
        };
        cResult[6] = items2;
        cResult[7] = fn;
        tmp11 = fn;
        tmp10 = items2;
      } else {
        class S {
          constructor() {
            return AdDeliveryStore.getNoFillForPlacement(closure_0);
          }
        }
        tmp11 = cResult[7];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
      [tmp14, dependencyMap] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      if (cResult[8] !== stateFromStores) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp3 = globalThis;
              _Date = Date;
              sum = tmp.fetchedAt + tmp.ttlMillis;
              _setTimeout = setTimeout;
              _Math = Math;
              num = 0;
              closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const items3 = [stateFromStores];
        cResult[8] = stateFromStores;
        cResult[9] = I;
        cResult[10] = items3;
        tmp16 = items3;
      } else {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp3 = globalThis;
              _Date = Date;
              sum = tmp.fetchedAt + tmp.ttlMillis;
              _setTimeout = setTimeout;
              _Math = Math;
              num = 0;
              closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        tmp16 = cResult[10];
      }
      const effect = react.useEffect(I, tmp16);
      if (cResult[11] === enableNoFill) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp3 = globalThis;
              _Date = Date;
              sum = tmp.fetchedAt + tmp.ttlMillis;
              _setTimeout = setTimeout;
              _Math = Math;
              num = 0;
              closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
      }
      let tmp18 = null;
      if (enableNoFill) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp3 = globalThis;
              _Date = Date;
              sum = tmp.fetchedAt + tmp.ttlMillis;
              _setTimeout = setTimeout;
              _Math = Math;
              num = 0;
              closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        if (null != stateFromStores) {
          class I {
            constructor() {
              tmp = closure_1;
              if (null != closure_1) {
                tmp3 = globalThis;
                _Date = Date;
                sum = tmp.fetchedAt + tmp.ttlMillis;
                _setTimeout = setTimeout;
                _Math = Math;
                num = 0;
                closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          if (stateFromStores.decisionId !== tmp14) {
            class I {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp3 = globalThis;
                  _Date = Date;
                  sum = tmp.fetchedAt + tmp.ttlMillis;
                  _setTimeout = setTimeout;
                  _Math = Math;
                  num = 0;
                  closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
            tmp18 = null;
            if (obj7.getIsEligibleForQuests()) {
              class I {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp3 = globalThis;
                    _Date = Date;
                    sum = tmp.fetchedAt + tmp.ttlMillis;
                    _setTimeout = setTimeout;
                    _Math = Math;
                    num = 0;
                    closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
                    return () => clearTimeout(closure_0);
                  } else {
                    return;
                  }
                }
              }
              if (!stateFromStores1) {
                class I {
                  constructor() {
                    tmp = closure_1;
                    if (null != closure_1) {
                      tmp3 = globalThis;
                      _Date = Date;
                      sum = tmp.fetchedAt + tmp.ttlMillis;
                      _setTimeout = setTimeout;
                      _Math = Math;
                      num = 0;
                      closure_0 = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
                      return () => clearTimeout(closure_0);
                    } else {
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
      cResult[11] = enableNoFill;
      cResult[12] = tmp14;
      cResult[13] = stateFromStores1;
      cResult[14] = stateFromStores;
      cResult[15] = tmp18;
    }
  : (arg0, location) => {
      let closure_0;
      let closure_2;
      let first;
      let stateFromStores;
      _require = arg0;
      const obj = stateFromStores(15020);
      const obj2 = { location };
      const enableNoFill = obj.useConfig(obj2).enableNoFill;
      const items = [AdDeliveryStore];
      const items1 = [arg0];
      const obj3 = require("get initialized");
      stateFromStores = obj3.useStateFromStores(items, () => AdDeliveryStore.getNoFillForPlacement(closure_0), items1);
      const items2 = [QuestStore];
      const obj4 = require("get initialized");
      const stateFromStores1 = obj4.useStateFromStores(items2, () => null != QuestStore.questEnrollmentBlockedUntil);
      [first, dependencyMap] = react.useState(null);
      const items3 = [stateFromStores];
      const effect = react.useEffect(() => {
        let decisionId;
        if (null != stateFromStores) {
          const _Date = Date;
          const sum = stateFromStores.fetchedAt + stateFromStores.ttlMillis;
          const _setTimeout = setTimeout;
          const _Math = Math;
          const timeout = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
          return () => clearTimeout(closure_0);
        }
      }, items3);
      let tmp8 = null;
      const tmp2 = _require;
      if (enableNoFill) {
        tmp8 = null;
        if (null != stateFromStores) {
          tmp8 = null;
          if (stateFromStores.decisionId !== first) {
            tmp8 = null;
            const tmp2Result = tmp2(10912);
            if (tmp2Result.getIsEligibleForQuests()) {
              tmp8 = null;
              if (!stateFromStores1) {
                tmp8 = stateFromStores;
              }
            }
          }
        }
      }
      return tmp8;
    };
const result = size.fileFinishedImporting("modules/quests/hooks/useNoFillDecision.tsx");

export default tmp2;
