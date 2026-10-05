// discord_app/modules/quests/hooks/useNoFillDecision.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import QuestStore from "../QuestStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useNoFillDecision.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      _require = arg0;
      const cResult = require("c").c(16);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const obj = require("c");
      const enableNoFill = stateFromStores(15020).useConfig(tmp4).enableNoFill;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AdDeliveryStore];
        cResult[2] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        class S {
          constructor() {
            return closure_5.getNoFillForPlacement(closure_0);
          }
        }
        const items1 = [arg0];
        cResult[3] = arg0;
        cResult[4] = S;
        cResult[5] = items1;
        let tmp8 = items1;
      } else {
        class S {
          constructor() {
            return closure_5.getNoFillForPlacement(closure_0);
          }
        }
        tmp8 = cResult[5];
      }
      const obj3 = stateFromStores(15020);
      stateFromStores = require("initialize").useStateFromStores(tmp5, S, tmp8);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_5.getNoFillForPlacement(closure_0);
          }
        }
        const items2 = [QuestStore];
        const fn = function _() {
          return null != QuestStore.questEnrollmentBlockedUntil;
        };
        cResult[6] = items2;
        cResult[7] = fn;
        let tmp11 = fn;
        const tmp10 = items2;
      } else {
        class S {
          constructor() {
            return closure_5.getNoFillForPlacement(closure_0);
          }
        }
        tmp11 = cResult[7];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
      const tmpResult2 = require("initialize");
      [tmp14, dependencyMap] = noop.useState(null);
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
        let tmp16 = items3;
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
      const effect = noop.useEffect(I, tmp16);
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
      const tmp13 = _slicedToArray(noop.useState(null), 2);
    }
  : (arg0, location) => {
      _require = arg0;
      const obj = stateFromStores(15020);
      const obj2 = { location };
      const tmp2 = _require;
      const items = [AdDeliveryStore];
      const items1 = [arg0];
      stateFromStores = require("initialize").useStateFromStores(
        items,
        () => AdDeliveryStore.getNoFillForPlacement(closure_0),
        items1,
      );
      const obj3 = require("initialize");
      const items2 = [QuestStore];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items2,
        () => null != QuestStore.questEnrollmentBlockedUntil,
      );
      const tmp5 = _slicedToArray(noop.useState(null), 2);
      dependencyMap = tmp5[1];
      const items3 = [stateFromStores];
      const effect = noop.useEffect(() => {
        if (null != stateFromStores) {
          const _Date = Date;
          const sum = stateFromStores.fetchedAt + stateFromStores.ttlMillis;
          const _setTimeout = setTimeout;
          const _Math = Math;
          const timeout = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
          return () => clearTimeout(closure_0);
        }
      }, items3);
      let tmp7 = null;
      if (obj.useConfig(obj2).enableNoFill) {
        tmp7 = null;
        if (null != stateFromStores) {
          tmp7 = null;
          if (stateFromStores.decisionId !== tmp5[0]) {
            tmp7 = null;
            if (tmp2Result.getIsEligibleForQuests()) {
              tmp7 = null;
              if (!stateFromStores1) {
                tmp7 = stateFromStores;
              }
            }
            tmp2Result = tmp2(10912);
          }
        }
      }
      return tmp7;
    };
