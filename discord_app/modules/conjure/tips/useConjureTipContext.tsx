// === Module 12288: useConjureTipContext ===

// Module 12288 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12285 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12291 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(arg0, arr, arg2, onAskForIdeas, arg4) {
  _require = arg0;
  importDefault = arr;
  const cResult = require("c").c(42);
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
    cResult[3] = atResult;
    cResult[4] = entryActivityAtResult;
    let tmp10 = entryActivityAtResult;
    let tmp9 = atResult;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  let tmpResult = require("initialize");
  const conjureTipClock = require("conjureTipClock").useConjureTipClock(tmp10, arg4);
  if (cResult[5] !== arr) {
    const newestSettledTurnResult = tmp(tmp2[5]).newestSettledTurn(arr);
    let tmp17 = null;
    if (null != newestSettledTurnResult) {
      tmp17 = null;
      if (!tmpResult8.hasOpenAsk(newestSettledTurnResult)) {
        tmp17 = newestSettledTurnResult;
      }
      tmpResult8 = tmp(tmp2[5]);
    }
    cResult[5] = arr;
    cResult[6] = tmp17;
    let tmp14 = tmp17;
    const tmpResult7 = tmp(tmp2[5]);
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arg2) {
    if (cResult[8] === tmp10) {
      if (cResult[9] === arr) {
        let type;
        if (tmp9 != null) {
          const projectEvent = tmp9.projectEvent;
          if (projectEvent != null) {
            type = projectEvent.type;
          }
        }
        if (cResult[10] === type) {
          if (cResult[11] === conjureTipClock) {
            if (cResult[12] === arg0) {
              if (cResult[13] === tmp4) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === stateFromStores) {
                    let tmp20 = cResult[16];
                    let tmp21 = cResult[17];
                    class P {
                      constructor(arg0) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[7]);
                        conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
                        result = null;
                        if (null != conjureTipShownAtResult) {
                          tmpResult = tmp(tmp2[7]);
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
                        }
                        return result;
                      }
                    }
                    let tmp23 = cResult[19];
                    let tmp24 = cResult[20];
                    let tmp25 = cResult[21];
                    let tmp26 = cResult[22];
                    let tmp27 = cResult[23];
                  }
                  if (cResult[24] === arr) {
                    if (cResult[25] === arg0) {
                      if (cResult[26] === stateFromStores) {
                        let tmp35 = cResult[27];
                      }
                      if (cResult[28] !== arg0) {
                        class E {
                          constructor(arg0) {
                            obj = closure_0(closure_2[8]);
                            return obj.isConjureTipDismissed(arg0, closure_0);
                          }
                        }
                        class P {
                          constructor(arg0) {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[7]);
                            conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
                            result = null;
                            if (null != conjureTipShownAtResult) {
                              tmpResult = tmp(tmp2[7]);
                              tmp5 = closure_1;
                              tmp6 = closure_2;
                              result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
                            }
                            return result;
                          }
                        }
                        cResult[29] = E;
                      } else {
                        class E {
                          constructor(arg0) {
                            obj = closure_0(closure_2[8]);
                            return obj.isConjureTipDismissed(arg0, closure_0);
                          }
                        }
                      }
                      class P {
                        constructor(arg0) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[7]);
                          conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
                          result = null;
                          if (null != conjureTipShownAtResult) {
                            tmpResult = tmp(tmp2[7]);
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
                          }
                          return result;
                        }
                      }
                      if (cResult[30] === onAskForIdeas) {
                        class E {
                          constructor(arg0) {
                            obj = closure_0(closure_2[8]);
                            return obj.isConjureTipDismissed(arg0, closure_0);
                          }
                        }
                      }
                      const obj2 = { projectId: tmp22, turn: tmp23, publish: tmp24, draftHasText: tmp25, idleMs: tmp26, hasPublished: tmp27, justRemixed: tmp20, publishedSinceLastMessage: tmp21, messagesSinceShown: tmp35, isDismissed: E, onAskForIdeas };
                      cResult[30] = onAskForIdeas;
                      cResult[31] = tmp20;
                      cResult[32] = tmp21;
                      cResult[33] = tmp35;
                      cResult[34] = E;
                      cResult[35] = tmp22;
                      cResult[36] = tmp23;
                      cResult[37] = tmp24;
                      cResult[38] = tmp25;
                      cResult[39] = tmp26;
                      cResult[40] = tmp27;
                      cResult[41] = obj2;
                    }
                  }
                  class P {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[7]);
                      conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
                      result = null;
                      if (null != conjureTipShownAtResult) {
                        tmpResult = tmp(tmp2[7]);
                        tmp5 = closure_1;
                        tmp6 = closure_2;
                        result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
                      }
                      return result;
                    }
                  }
                  cResult[24] = arr;
                  cResult[25] = arg0;
                  cResult[26] = stateFromStores;
                  cResult[27] = P;
                  tmp35 = P;
                }
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
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    class P {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[7]);
        conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
        result = null;
        if (null != conjureTipShownAtResult) {
          tmpResult = tmp(tmp2[7]);
          tmp5 = closure_1;
          tmp6 = closure_2;
          result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
        }
        return result;
      }
    }
    created_at = arr[diff].created_at;
  }
  let num9 = 0;
  if (null != tmp10) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    num9 = Math.max(0, conjureTipClock - tmp10);
  }
  if (tmp9 != null) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    class P {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[7]);
        conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
        result = null;
        if (null != conjureTipShownAtResult) {
          tmpResult = tmp(tmp2[7]);
          tmp5 = closure_1;
          tmp6 = closure_2;
          result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
        }
        return result;
      }
    }
  }
  let tmp32 = null != created_at;
  if (tmp32) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    tmp32 = 0 === obj7.countOwnMessagesSince(arr, created_at, stateFromStores);
  }
  cResult[7] = arg2;
  cResult[8] = tmp10;
  cResult[9] = arr;
  if (tmp9 != null) {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        return obj.isConjureTipDismissed(arg0, closure_0);
      }
    }
    class P {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[7]);
        conjureTipShownAtResult = obj.conjureTipShownAt(closure_0, arg0);
        result = null;
        if (null != conjureTipShownAtResult) {
          tmpResult = tmp(tmp2[7]);
          tmp5 = closure_1;
          tmp6 = closure_2;
          result = tmpResult.countOwnMessagesSince(closure_1, conjureTipShownAtResult, closure_2);
        }
        return result;
      }
    }
  }
  cResult[10] = undefined;
  cResult[11] = conjureTipClock;
  cResult[12] = arg0;
  cResult[13] = tmp4;
  cResult[14] = tmp14;
  cResult[15] = stateFromStores;
  cResult[16] = "remixed" === undefined;
  cResult[17] = tmp32;
  cResult[18] = arg0;
  cResult[19] = tmp14;
  cResult[20] = tmp4;
  cResult[21] = arg2;
  cResult[22] = num9;
  cResult[23] = null != created_at;
  tmp27 = tmp30;
  tmp26 = num9;
  tmp25 = arg2;
  tmp24 = tmp4;
  tmp23 = tmp14;
  tmp21 = tmp32;
  tmp20 = tmp34;
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
  const obj2 = { projectId, turn: tmp9, publish: tmp2, draftHasText, idleMs: null, hasPublished: null, justRemixed: null, publishedSinceLastMessage: null, messagesSinceShown: null, isDismissed: null, onAskForIdeas: null };
  let num = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  obj2.idleMs = num;
  obj2.hasPublished = null != created_at;
  let type;
  if (atResult != null) {
    const projectEvent = atResult.projectEvent;
    if (projectEvent != null) {
      type = projectEvent.type;
    }
  }
  obj2.justRemixed = "remixed" === type;
  let tmp15 = null != created_at;
  if (tmp15) {
    tmp15 = 0 === tmp3(tmp[7]).countOwnMessagesSince(arr, created_at, stateFromStores);
    const tmp3Result8 = tmp3(tmp[7]);
  }
  obj2.publishedSinceLastMessage = tmp15;
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