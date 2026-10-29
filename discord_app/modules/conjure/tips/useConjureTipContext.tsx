// === Module 12424: useConjureTipContext ===

// Module 12424 (useConjureTipContext)
import conjureTipImpressions from "conjureTipImpressions" /* 12423 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12427 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  _require = projectId;
  importDefault = arr;
  const cResult = require("c").c(31);
  const tmp4 = require("useConjurePublishAction")(projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [id];
    const fn = function p() {
      const currentUser = id.getCurrentUser();
      id = undefined;
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
      const tmpResult8 = tmp(tmp2[5]);
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
      if (!tmpResult11.hasOpenAsk(newestSettledTurnResult)) {
        tmp17 = newestSettledTurnResult;
      }
      tmpResult11 = tmp(tmp2[5]);
    }
    cResult[5] = arr;
    cResult[6] = tmp17;
    let tmp14 = tmp17;
    const tmpResult10 = tmp(tmp2[5]);
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arr) {
    if (cResult[8] === stateFromStores) {
      let tmp18 = cResult[9];
    }
    let type;
    if (tmp9 != null) {
      const projectEvent = tmp9.projectEvent;
      if (projectEvent != null) {
        type = projectEvent.type;
      }
    }
    let projectEvent1 = null;
    if ("remixed" === type) {
      projectEvent1 = tmp9.projectEvent;
    }
    id = undefined;
    if (projectEvent1 != null) {
      id = projectEvent1.id;
    }
    if (id == null) {
      id = tmp18;
    }
    let num11 = 0;
    if (null != tmp10) {
      const _Math = Math;
      num11 = Math.max(0, conjureTipClock - tmp10);
    }
    if (cResult[10] !== arr) {
      const hasNoTurnsResult = tmp(tmp2[5]).hasNoTurns(arr);
      cResult[10] = arr;
      cResult[11] = hasNoTurnsResult;
      let tmp27 = hasNoTurnsResult;
      const tmpResult12 = tmp(tmp2[5]);
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] === arr) {
      if (cResult[13] === projectId) {
        if (cResult[14] === stateFromStores) {
          let tmp29 = cResult[15];
        }
        if (cResult[16] === id) {
          if (cResult[17] === projectId) {
            let tmp30 = cResult[18];
          }
          if (cResult[19] === draftHasText) {
            if (cResult[20] === id) {
              if (cResult[21] === onAskForIdeas) {
                if (cResult[22] === projectId) {
                  if (cResult[23] === tmp4) {
                    if (cResult[24] === num11) {
                      if (cResult[25] === tmp26) {
                        if (cResult[26] === tmp27) {
                          if (cResult[27] === tmp29) {
                            if (cResult[28] === tmp30) {
                              if (cResult[29] === tmp14) {
                                let tmp33 = cResult[30];
                              }
                              return tmp33;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = { projectId, turn: tmp14, publish: tmp4, draftHasText, idleMs: num11, justRemixed: tmp26, noTurnsYet: tmp27, ideasIntroAnchorId: id, messagesSinceShown: tmp29, isDismissed: tmp30, onAskForIdeas };
          cResult[19] = draftHasText;
          cResult[20] = id;
          cResult[21] = onAskForIdeas;
          cResult[22] = projectId;
          cResult[23] = tmp4;
          cResult[24] = num11;
          cResult[25] = tmp26;
          cResult[26] = tmp27;
          cResult[27] = tmp29;
          cResult[28] = tmp30;
          cResult[29] = tmp14;
          cResult[30] = obj2;
          tmp33 = obj2;
        }
        const fn3 = function _(forEach) {
          return conjureTipDismissals.isConjureTipDismissed(forEach, closure_0, id);
        };
        cResult[16] = id;
        cResult[17] = projectId;
        cResult[18] = fn3;
        tmp30 = fn3;
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
    cResult[12] = arr;
    cResult[13] = projectId;
    cResult[14] = stateFromStores;
    cResult[15] = fn2;
    tmp29 = fn2;
  }
  const tmpResult9 = require("conjureTipClock");
  const newestPublishResult = require("conjureTipTurn").newestPublish(arr);
  let update;
  if (newestPublishResult != null) {
    const publishNotice = newestPublishResult.publishNotice;
    if (publishNotice != null) {
      update = publishNotice.update;
    }
  }
  let id1 = null;
  if (false === update) {
    id1 = null;
    if (0 === tmpResult14.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
      id1 = newestPublishResult.id;
    }
    tmpResult14 = tmp(tmp2[7]);
  }
  cResult[7] = arr;
  cResult[8] = stateFromStores;
  cResult[9] = id1;
  tmp18 = id1;
}) : (function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  _require = projectId;
  importDefault = arr;
  const tmp2 = require("useConjurePublishAction")(projectId);
  const items = [id1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const currentUser = id1.getCurrentUser();
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
  const tmp3Result7 = require("conjureTipClock");
  const newestSettledTurnResult = require("conjureTipTurn").newestSettledTurn(arr);
  let tmp9 = null;
  if (null != newestSettledTurnResult) {
    tmp9 = null;
    if (!tmp3Result9.hasOpenAsk(newestSettledTurnResult)) {
      tmp9 = newestSettledTurnResult;
    }
    tmp3Result9 = tmp3(tmp[5]);
  }
  const tmp3Result8 = require("conjureTipTurn");
  const newestPublishResult = require("conjureTipTurn").newestPublish(arr);
  let update;
  if (newestPublishResult != null) {
    const publishNotice = newestPublishResult.publishNotice;
    if (publishNotice != null) {
      update = publishNotice.update;
    }
  }
  let id = null;
  if (false === update) {
    id = null;
    if (0 === tmp3Result11.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
      id = newestPublishResult.id;
    }
    tmp3Result11 = tmp3(tmp[7]);
  }
  let type;
  if (atResult != null) {
    const projectEvent = atResult.projectEvent;
    if (projectEvent != null) {
      type = projectEvent.type;
    }
  }
  let projectEvent1 = null;
  if ("remixed" === type) {
    projectEvent1 = atResult.projectEvent;
  }
  id1 = undefined;
  if (projectEvent1 != null) {
    id1 = projectEvent1.id;
  }
  if (id1 == null) {
    id1 = id;
  }
  const obj2 = { projectId, turn: tmp9, publish: tmp2, draftHasText, idleMs: null, justRemixed: null, noTurnsYet: null, ideasIntroAnchorId: null, messagesSinceShown: null, isDismissed: null, onAskForIdeas: null };
  let num2 = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num2 = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  obj2.idleMs = num2;
  obj2.justRemixed = null != projectEvent1;
  const tmp3Result10 = require("conjureTipTurn");
  obj2.noTurnsYet = require("conjureTipTurn").hasNoTurns(arr);
  obj2.ideasIntroAnchorId = id1;
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
    return conjureTipDismissals.isConjureTipDismissed(forEach, closure_0, id1);
  };
  obj2.onAskForIdeas = onAskForIdeas;
  return obj2;
});