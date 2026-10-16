// === Module 12071: useConjureTipContext ===

// Module 12071 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12068 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12074 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(arg0, arr, arg2, onAskForIdeas, arg4) {
  _require = arg0;
  importDefault = arr;
  const cResult = require("c").c(38);
  const tmp4 = require("useConjurePublishAction")(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== arr) {
    const atResult = arr.at(-1);
    let entryActivityAtResult = null;
    if (null != atResult) {
      entryActivityAtResult = tmp(tmp2[5]).entryActivityAt(atResult);
      const tmpResult5 = tmp(tmp2[5]);
    }
    cResult[2] = arr;
    cResult[3] = entryActivityAtResult;
    let tmp9 = entryActivityAtResult;
  } else {
    tmp9 = cResult[3];
  }
  let tmpResult = require("initialize");
  const conjureTipClock = require("conjureTipClock").useConjureTipClock(tmp9, arg4);
  if (cResult[4] !== arr) {
    const newestSettledTurnResult = tmp(tmp2[5]).newestSettledTurn(arr);
    let tmp16 = null;
    if (null != newestSettledTurnResult) {
      tmp16 = null;
      if (!tmpResult8.hasOpenAsk(newestSettledTurnResult)) {
        tmp16 = newestSettledTurnResult;
      }
      tmpResult8 = tmp(tmp2[5]);
    }
    cResult[4] = arr;
    cResult[5] = tmp16;
    let tmp13 = tmp16;
    const tmpResult7 = tmp(tmp2[5]);
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === arg2) {
    if (cResult[7] === tmp9) {
      if (cResult[8] === arr) {
        if (cResult[9] === conjureTipClock) {
          if (cResult[10] === arg0) {
            if (cResult[11] === tmp4) {
              if (cResult[12] === tmp13) {
                if (cResult[13] === stateFromStores) {
                  let tmp17 = cResult[14];
                  let tmp18 = cResult[15];
                  let tmp19 = cResult[16];
                  let tmp20 = cResult[17];
                  let tmp21 = cResult[18];
                  let tmp22 = cResult[19];
                  let tmp23 = cResult[20];
                }
                if (cResult[21] === arr) {
                  if (cResult[22] === arg0) {
                    if (cResult[23] === stateFromStores) {
                      let tmp28 = cResult[24];
                    }
                    if (cResult[25] !== arg0) {
                      class P {
                        constructor(arg0) {
                          obj = closure_0(closure_2[8]);
                          return obj.isConjureTipDismissed(arg0, closure_0);
                        }
                      }
                      cResult[25] = arg0;
                      cResult[26] = P;
                    } else {
                      class P {
                        constructor(arg0) {
                          obj = closure_0(closure_2[8]);
                          return obj.isConjureTipDismissed(arg0, closure_0);
                        }
                      }
                    }
                    if (cResult[27] === onAskForIdeas) {
                      class P {
                        constructor(arg0) {
                          obj = closure_0(closure_2[8]);
                          return obj.isConjureTipDismissed(arg0, closure_0);
                        }
                      }
                    }
                    const obj2 = { projectId: tmp18, turn: tmp19, publish: tmp20, draftHasText: tmp21, idleMs: tmp22, hasPublished: tmp23, publishedSinceLastMessage: tmp17, messagesSinceShown: tmp28, isDismissed: P, onAskForIdeas };
                    cResult[27] = onAskForIdeas;
                    cResult[28] = tmp17;
                    cResult[29] = tmp28;
                    cResult[30] = P;
                    cResult[31] = tmp18;
                    cResult[32] = tmp19;
                    cResult[33] = tmp20;
                    cResult[34] = tmp21;
                    cResult[35] = tmp22;
                    cResult[36] = tmp23;
                    cResult[37] = obj2;
                  }
                }
                const fn2 = function y(id) {
                  const conjureTipShownAtResult = conjureTipImpressions.conjureTipShownAt(closure_0, id);
                  let result = null;
                  if (null != conjureTipShownAtResult) {
                    result = conjureTipImpressions.countOwnMessagesSince(closure_1, conjureTipShownAtResult, stateFromStores);
                    const tmpResult = conjureTipImpressions;
                  }
                  return result;
                };
                cResult[21] = arr;
                cResult[22] = arg0;
                cResult[23] = stateFromStores;
                cResult[24] = fn2;
                tmp28 = fn2;
              }
            }
          }
        }
      }
    }
  }
  const diff = arr.length - 1;
  let created_at = null;
  if (0 <= diff) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    while ("publish_notice" !== arr[diff].kind) {
      class P {
        constructor(arg0) {
          obj = closure_0(closure_2[8]);
          return obj.isConjureTipDismissed(arg0, closure_0);
        }
      }
      created_at = null;
      if (0 <= diff) {
        class P {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            return obj.isConjureTipDismissed(arg0, closure_0);
          }
        }
      }
    }
    created_at = arr[diff].created_at;
  }
  let num8 = 0;
  if (null != tmp9) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    num8 = Math.max(0, conjureTipClock - tmp9);
  }
  let tmp27 = null != created_at;
  if (tmp27) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    tmp27 = 0 === obj7.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  cResult[6] = arg2;
  cResult[7] = tmp9;
  cResult[8] = arr;
  cResult[9] = conjureTipClock;
  cResult[10] = arg0;
  cResult[11] = tmp4;
  cResult[12] = tmp13;
  cResult[13] = stateFromStores;
  cResult[14] = tmp27;
  cResult[15] = arg0;
  cResult[16] = tmp13;
  cResult[17] = tmp4;
  cResult[18] = arg2;
  cResult[19] = num8;
  cResult[20] = null != created_at;
  tmp17 = tmp27;
  tmp23 = tmp26;
  tmp22 = num8;
  tmp21 = arg2;
  tmp20 = tmp4;
  tmp19 = tmp13;
  tmp18 = arg0;
  const tmpResult6 = require("conjureTipClock");
}) : (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  _require = projectId;
  importDefault = arr;
  const tmp2 = require("useConjurePublishAction")(projectId);
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const atResult = arr.at(-1);
  let entryActivityAtResult = null;
  if (null != atResult) {
    entryActivityAtResult = tmp3(tmp[5]).entryActivityAt(atResult);
    const tmp3Result = tmp3(tmp[5]);
  }
  const obj = require("initialize");
  const conjureTipClock = require("conjureTipClock").useConjureTipClock(entryActivityAtResult, arg4);
  const tmp3Result5 = require("conjureTipClock");
  const newestSettledTurnResult = require("conjureTipTurn").newestSettledTurn(arr);
  let tmp9 = null;
  if (null != newestSettledTurnResult) {
    tmp9 = null;
    if (!tmp3Result7.hasOpenAsk(newestSettledTurnResult)) {
      tmp9 = newestSettledTurnResult;
    }
    tmp3Result7 = tmp3(tmp[5]);
  }
  let diff = arr.length - 1;
  let created_at = null;
  if (0 <= diff) {
    while ("publish_notice" !== arr[diff].kind) {
      diff = diff - 1;
      created_at = null;
    }
    created_at = arr[diff].created_at;
  }
  const obj2 = { projectId, turn: tmp9, publish: tmp2, draftHasText, idleMs: null, hasPublished: null, publishedSinceLastMessage: null, messagesSinceShown: null, isDismissed: null, onAskForIdeas: null };
  let num = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  obj2.idleMs = num;
  obj2.hasPublished = null != created_at;
  let tmp14 = null != created_at;
  if (tmp14) {
    tmp14 = 0 === tmp3(tmp[7]).countOwnMessagesSince(arr, created_at, stateFromStores);
    const tmp3Result8 = tmp3(tmp[7]);
  }
  obj2.publishedSinceLastMessage = tmp14;
  obj2.messagesSinceShown = function messagesSinceShown(id) {
    const conjureTipShownAtResult = conjureTipImpressions.conjureTipShownAt(closure_0, id);
    let result = null;
    if (null != conjureTipShownAtResult) {
      result = conjureTipImpressions.countOwnMessagesSince(closure_1, conjureTipShownAtResult, stateFromStores);
      const tmpResult = conjureTipImpressions;
    }
    return result;
  };
  obj2.isDismissed = function isDismissed(forEach) {
    return conjureTipDismissals.isConjureTipDismissed(forEach, closure_0);
  };
  obj2.onAskForIdeas = onAskForIdeas;
  return obj2;
});