// === Module 16704: conjureReminderSlot ===

// Module 16704 (conjureReminderSlot)
import c from "c" /* 576 */;
import useConjureWindowFocusedDefault from "useConjureWindowFocused" /* 16144 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 16614 */;
import conjurePublishCard from "conjurePublishCard" /* 16703 */;
import conjureIdeasOffer from "conjureIdeasOffer" /* 16705 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function selectConjureReminder(arr, unseen) {
  if (unseen.unseen) {
    return { shown: null, nextDueAt: null };
  } else {
    const found = arr.filter((eligible) => eligible.eligible);
    const first = found.sort((priority, priority2) => priority2.priority - priority.priority)[0];
    if (null == first) {
      return { shown: null, nextDueAt: null };
    } else {
      const _Math2 = Math;
      let num = unseen.lastMessageAt;
      if (num == null) {
        num = -Infinity;
      }
      let num2 = unseen.lastActivityAt;
      if (num2 == null) {
        num2 = -Infinity;
      }
      let num3 = unseen.seenAt;
      if (num3 == null) {
        num3 = -Infinity;
      }
      let num4 = -Infinity;
      if ("visit" === first.clock) {
        num4 = unseen.visitStartedAt;
      }
      const _Math = Math;
      const sum = unseen.now + Math.max(0, first.idleDelayMs - Math.max(0, unseen.now - Math.max(num, num2, num3, num4)));
      if (sum <= unseen.now) {
        const obj = { shown: first.key, nextDueAt: null };
        let obj2 = obj;
      } else {
        obj2 = { shown: null, nextDueAt: sum };
      }
      return obj2;
    }
  }
}
function nextReminderClockState(projectId, projectId2, now) {
  if (projectId.projectId !== projectId2.projectId) {
    const tmp54 = now();
    const obj3 = {};
    const merged = Object.assign(projectId2);
    obj3.now = tmp54;
    obj3.visitStartedAt = tmp54;
    obj3.draftTyped = false;
    obj3.lastActivityAt = null;
    let bound = null;
    if (null != projectId2.messageAt) {
      const _Math3 = Math;
      bound = Math.min(projectId2.messageAt, tmp54);
    }
    obj3.lastMessageAt = bound;
    obj3.seenAt = null;
    obj3.unseen = false;
    let tmp61 = null;
    if (!projectId2.visible) {
      tmp61 = tmp54;
    }
    obj3.hiddenAt = tmp61;
    obj3.outdatedShown = false;
    obj3.outdatedBackoff = 0;
    return obj3;
  } else {
    if (projectId.draftHasText === projectId2.draftHasText) {
      if (projectId.publishing === projectId2.publishing) {
        if (projectId.drift === projectId2.drift) {
          if (projectId.messageAt === projectId2.messageAt) {
            if (projectId.visible === projectId2.visible) {
              return projectId;
            }
          }
        }
      }
    }
    const tmp = now();
    const obj = {};
    const merged1 = Object.assign(projectId);
    obj.now = tmp;
    let tmp5 = obj;
    if (projectId.draftHasText !== projectId2.draftHasText) {
      const obj4 = {};
      const merged2 = Object.assign(obj);
      ({ draftHasText: obj2.draftHasText, draftHasText: obj2.draftTyped } = projectId2);
      obj4.lastActivityAt = tmp;
      tmp5 = obj4;
    }
    let tmp9 = tmp5;
    if (projectId.publishing !== projectId2.publishing) {
      const obj5 = {};
      const merged3 = Object.assign(tmp5);
      obj5.publishing = projectId2.publishing;
      obj5.lastActivityAt = tmp;
      obj5.outdatedShown = false;
      obj5.outdatedBackoff = 0;
      tmp9 = obj5;
    }
    let tmp13 = tmp9;
    if (projectId.drift !== projectId2.drift) {
      const obj6 = {};
      const merged4 = Object.assign(tmp9);
      obj6.drift = projectId2.drift;
      let tmp17 = obj6;
      if (!projectId2.drift) {
        const obj7 = {};
        const merged5 = Object.assign(obj6);
        obj7.outdatedShown = false;
        obj7.outdatedBackoff = 0;
        tmp17 = obj7;
      }
      tmp13 = tmp17;
    }
    let tmp21 = tmp13;
    if (projectId.messageAt !== projectId2.messageAt) {
      let bound1 = null;
      if (null != projectId2.messageAt) {
        const _Math = Math;
        bound1 = Math.min(projectId2.messageAt, tmp);
      }
      const obj8 = {};
      const merged6 = Object.assign(tmp13);
      obj8.messageAt = projectId2.messageAt;
      obj8.lastMessageAt = bound1;
      let tmp27 = obj8;
      if (obj8.outdatedShown) {
        tmp27 = obj8;
        if (!obj8.publishing) {
          const _Math2 = Math;
          const obj9 = {};
          const bound2 = Math.min(obj8.outdatedBackoff + 1, items.length - 1);
          const merged7 = Object.assign(obj8);
          obj9.outdatedShown = false;
          obj9.outdatedBackoff = bound2;
          tmp27 = obj9;
        }
      }
      tmp21 = tmp27;
      if (!tmp34) {
        const obj10 = {};
        const merged8 = Object.assign(tmp27);
        obj10.unseen = true;
        tmp21 = obj10;
      }
      tmp34 = projectId2.visible || null == projectId.messageAt;
    }
    if (projectId.visible === projectId2.visible) {
      return tmp21;
    } else {
      let obj11 = {};
      const merged9 = Object.assign(tmp21);
      obj11.visible = projectId2.visible;
      if (!projectId2.visible) {
        const obj12 = {};
        const merged10 = Object.assign(obj11);
        obj12.hiddenAt = tmp;
        obj12.unseen = false;
      }
      let hiddenAt = projectId.hiddenAt;
      let flag6 = null;
      if (hiddenAt == null) {
        hiddenAt = tmp;
      }
      if (tmp - hiddenAt >= c8) {
        const obj13 = {};
        obj11 = Object.assign(obj11);
        obj13.visitStartedAt = tmp;
        let tmp43 = obj13;
      } else {
        tmp43 = obj11;
        if (obj11.unseen) {
          const obj14 = {};
          const merged11 = Object.assign(obj11);
          obj14.seenAt = tmp;
          tmp43 = obj14;
        }
      }
      const obj27 = {};
      const merged12 = Object.assign(tmp43);
      obj27.hiddenAt = flag6;
      flag6 = false;
      obj27.unseen = false;
    }
  }
}
const ConjureChatStore = fn(12905);
({ isStrandedSegment: hasOwnProperty, turnSettled: metroRequire } = ConjureChatStore);
let items = [60000, 180000, 600000];
let c8 = 600000;
let items1 = [
  {
    key: "outdated",
    priority: 2,
    idleDelayMs: 60000,
    backoffDelaysMs: items,
    clock: "persistent",
    eligible(draftTyped) {
      draftTyped = draftTyped.draftTyped;
      let showsOutdatedNoticeResult = !draftTyped;
      if (!draftTyped) {
        showsOutdatedNoticeResult = conjurePublishCard.showsOutdatedNotice(tmp);
      }
      return showsOutdatedNoticeResult;
    }
  },
  {
    key: "ideas",
    priority: 1,
    idleDelayMs: 60000,
    clock: "visit",
    eligible(arg0) {
      ({ turn, publish, draftHasText } = arg0);
      let isIdeasOfferTurnResult = !draftHasText;
      if (!draftHasText) {
        let publishing;
        if (publish != null) {
          publishing = publish.publishing;
        }
        isIdeasOfferTurnResult = true !== publishing;
      }
      if (isIdeasOfferTurnResult) {
        isIdeasOfferTurnResult = conjureIdeasOffer.isIdeasOfferTurn(turn);
      }
      if (isIdeasOfferTurnResult) {
        let result = null != turn.publishCta;
        if (result) {
          result = conjurePublishCard.isConjurePublishCtaVisible(publish);
        }
        isIdeasOfferTurnResult = !result;
      }
      return isIdeasOfferTurnResult;
    }
  }
];
const map = new Map();
fn(558);
const ReactCompilerGating = fn(558);
let obj = {
  key: "outdated",
  priority: 2,
  idleDelayMs: 60000,
  backoffDelaysMs: items,
  clock: "persistent",
  eligible(draftTyped) {
    draftTyped = draftTyped.draftTyped;
    let showsOutdatedNoticeResult = !draftTyped;
    if (!draftTyped) {
      showsOutdatedNoticeResult = conjurePublishCard.showsOutdatedNotice(tmp);
    }
    return showsOutdatedNoticeResult;
  }
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arr, arg2) => {
  _require = arg0;
  const cResult = require("c").c(30);
  const tmp2 = useConjurePublishActionDefault(arg0);
  const tmp3 = useConjureWindowFocusedDefault();
  let diff = arr.length - 1;
  let tmp5 = null;
  if (0 <= diff) {
    while (true) {
      let tmp6 = arr[diff];
      if ("publish_notice" === tmp6.kind) {
        diff = diff - 1;
        tmp5 = null;
        if (0 > diff) {
          break;
        }
      } else {
        tmp5 = null;
        if ("user" === tmp6.role) {
          break;
        } else {
          tmp5 = tmp6;
          if (closure_6(tmp6)) {
            break;
          } else {
            tmp5 = null;
            if (!nextDueAt(arr, diff)) {
              break;
            }
          }
        }
      }
      break;
    }
  }
  if (cResult[0] === arg2) {
    if (cResult[1] === arr) {
      if (cResult[2] === arg0) {
        let publishing;
        if (tmp2 != null) {
          publishing = tmp2.publishing;
        }
        if (cResult[3] === publishing) {
          state = undefined;
          if (tmp2 != null) {
            const status = tmp2.status;
            if (status != null) {
              state = status.state;
            }
          }
          if (cResult[4] === state) {
            let tmp12 = cResult[5];
            let tmp13 = cResult[6];
            let tmp14 = cResult[7];
            let tmp15 = cResult[8];
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp12) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp14) {
                if (cResult[13] === tmp15) {
                  if (cResult[14] === tmp16) {
                    if (cResult[15] === tmp3) {
                      let tmp24 = cResult[16];
                    }
                    importDefault = tmp24;
                    if (cResult[17] !== tmp24) {
                      class R {
                        constructor() {
                          tmp = closure_1;
                          timestamp = Date.now();
                          obj = {};
                          merged = Object.assign(closure_1);
                          obj.now = timestamp;
                          obj.visitStartedAt = timestamp;
                          obj.draftTyped = false;
                          obj.lastActivityAt = null;
                          bound = null;
                          if (null != closure_1.messageAt) {
                            _Math = Math;
                            bound = Math.min(tmp.messageAt, timestamp);
                          }
                          obj.lastMessageAt = bound;
                          obj.seenAt = null;
                          obj.unseen = false;
                          tmp5 = null;
                          if (!tmp.visible) {
                            tmp5 = timestamp;
                          }
                          obj.hiddenAt = tmp5;
                          obj.outdatedShown = false;
                          obj.outdatedBackoff = 0;
                          return obj;
                        }
                      }
                      cResult[17] = tmp24;
                      cResult[18] = R;
                    } else {
                      class R {
                        constructor() {
                          tmp = closure_1;
                          timestamp = Date.now();
                          obj = {};
                          merged = Object.assign(closure_1);
                          obj.now = timestamp;
                          obj.visitStartedAt = timestamp;
                          obj.draftTyped = false;
                          obj.lastActivityAt = null;
                          bound = null;
                          if (null != closure_1.messageAt) {
                            _Math = Math;
                            bound = Math.min(tmp.messageAt, timestamp);
                          }
                          obj.lastMessageAt = bound;
                          obj.seenAt = null;
                          obj.unseen = false;
                          tmp5 = null;
                          if (!tmp.visible) {
                            tmp5 = timestamp;
                          }
                          obj.hiddenAt = tmp5;
                          obj.outdatedShown = false;
                          obj.outdatedBackoff = 0;
                          return obj;
                        }
                      }
                    }
                    [tmp28, tmp29] = noop.useState(R);
                    dependencyMap = tmp29;
                    let _Date = Date;
                    const tmp32 = nextReminderClockState(tmp28, tmp24, Date.now);
                    _slicedToArray = tmp32;
                    let tmp33 = null;
                    if (null != tmp5) {
                      class R {
                        constructor() {
                          tmp = closure_1;
                          timestamp = Date.now();
                          obj = {};
                          merged = Object.assign(closure_1);
                          obj.now = timestamp;
                          obj.visitStartedAt = timestamp;
                          obj.draftTyped = false;
                          obj.lastActivityAt = null;
                          bound = null;
                          if (null != closure_1.messageAt) {
                            _Math = Math;
                            bound = Math.min(tmp.messageAt, timestamp);
                          }
                          obj.lastMessageAt = bound;
                          obj.seenAt = null;
                          obj.unseen = false;
                          tmp5 = null;
                          if (!tmp.visible) {
                            tmp5 = timestamp;
                          }
                          obj.hiddenAt = tmp5;
                          obj.outdatedShown = false;
                          obj.outdatedBackoff = 0;
                          return obj;
                        }
                      }
                      if (!tmp34) {
                        class R {
                          constructor() {
                            tmp = closure_1;
                            timestamp = Date.now();
                            obj = {};
                            merged = Object.assign(closure_1);
                            obj.now = timestamp;
                            obj.visitStartedAt = timestamp;
                            obj.draftTyped = false;
                            obj.lastActivityAt = null;
                            bound = null;
                            if (null != closure_1.messageAt) {
                              _Math = Math;
                              bound = Math.min(tmp.messageAt, timestamp);
                            }
                            obj.lastMessageAt = bound;
                            obj.seenAt = null;
                            obj.unseen = false;
                            tmp5 = null;
                            if (!tmp.visible) {
                              tmp5 = timestamp;
                            }
                            obj.hiddenAt = tmp5;
                            obj.outdatedShown = false;
                            obj.outdatedBackoff = 0;
                            return obj;
                          }
                        }
                        if (tmp35 != null) {
                          class R {
                            constructor() {
                              tmp = closure_1;
                              timestamp = Date.now();
                              obj = {};
                              merged = Object.assign(closure_1);
                              obj.now = timestamp;
                              obj.visitStartedAt = timestamp;
                              obj.draftTyped = false;
                              obj.lastActivityAt = null;
                              bound = null;
                              if (null != closure_1.messageAt) {
                                _Math = Math;
                                bound = Math.min(tmp.messageAt, timestamp);
                              }
                              obj.lastMessageAt = bound;
                              obj.seenAt = null;
                              obj.unseen = false;
                              tmp5 = null;
                              if (!tmp.visible) {
                                tmp5 = timestamp;
                              }
                              obj.hiddenAt = tmp5;
                              obj.outdatedShown = false;
                              obj.outdatedBackoff = 0;
                              return obj;
                            }
                          }
                        }
                        if (undefined == null) {
                          class R {
                            constructor() {
                              tmp = closure_1;
                              timestamp = Date.now();
                              obj = {};
                              merged = Object.assign(closure_1);
                              obj.now = timestamp;
                              obj.visitStartedAt = timestamp;
                              obj.draftTyped = false;
                              obj.lastActivityAt = null;
                              bound = null;
                              if (null != closure_1.messageAt) {
                                _Math = Math;
                                bound = Math.min(tmp.messageAt, timestamp);
                              }
                              obj.lastMessageAt = bound;
                              obj.seenAt = null;
                              obj.unseen = false;
                              tmp5 = null;
                              if (!tmp.visible) {
                                tmp5 = timestamp;
                              }
                              obj.hiddenAt = tmp5;
                              obj.outdatedShown = false;
                              obj.outdatedBackoff = 0;
                              return obj;
                            }
                          }
                        }
                      }
                      tmp33 = null;
                      if (!tmp34) {
                        class R {
                          constructor() {
                            tmp = closure_1;
                            timestamp = Date.now();
                            obj = {};
                            merged = Object.assign(closure_1);
                            obj.now = timestamp;
                            obj.visitStartedAt = timestamp;
                            obj.draftTyped = false;
                            obj.lastActivityAt = null;
                            bound = null;
                            if (null != closure_1.messageAt) {
                              _Math = Math;
                              bound = Math.min(tmp.messageAt, timestamp);
                            }
                            obj.lastMessageAt = bound;
                            obj.seenAt = null;
                            obj.unseen = false;
                            tmp5 = null;
                            if (!tmp.visible) {
                              tmp5 = timestamp;
                            }
                            obj.hiddenAt = tmp5;
                            obj.outdatedShown = false;
                            obj.outdatedBackoff = 0;
                            return obj;
                          }
                        }
                        tmp37[0] = tmp5;
                        tmp37[1] = tmp2;
                        tmp37[2] = arg2;
                        tmp37[3] = tmp32.draftTyped && arg2;
                        tmp33 = tmp37;
                      }
                    }
                    noop = tmp33;
                    const obj3 = noop;
                    const tmp27 = _slicedToArray(noop.useState(R), 2);
                    ({ shown, nextDueAt } = selectConjureReminder(items1.map((backoffDelaysMs) => {
                      const obj = {};
                      const merged = Object.assign(backoffDelaysMs);
                      backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
                      let idleDelayMs;
                      if (backoffDelaysMs != null) {
                        idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
                      }
                      if (idleDelayMs == null) {
                        idleDelayMs = backoffDelaysMs.idleDelayMs;
                      }
                      obj.idleDelayMs = idleDelayMs;
                      obj.eligible = null != closure_4 && backoffDelaysMs.eligible(tmp4);
                      return obj;
                    }), tmp32));
                    if ("outdated" === shown) {
                      class R {
                        constructor() {
                          tmp = closure_1;
                          timestamp = Date.now();
                          obj = {};
                          merged = Object.assign(closure_1);
                          obj.now = timestamp;
                          obj.visitStartedAt = timestamp;
                          obj.draftTyped = false;
                          obj.lastActivityAt = null;
                          bound = null;
                          if (null != closure_1.messageAt) {
                            _Math = Math;
                            bound = Math.min(tmp.messageAt, timestamp);
                          }
                          obj.lastMessageAt = bound;
                          obj.seenAt = null;
                          obj.unseen = false;
                          tmp5 = null;
                          if (!tmp.visible) {
                            tmp5 = timestamp;
                          }
                          obj.hiddenAt = tmp5;
                          obj.outdatedShown = false;
                          obj.outdatedBackoff = 0;
                          return obj;
                        }
                      }
                      if (cResult[19] === arg0) {
                        class R {
                          constructor() {
                            tmp = closure_1;
                            timestamp = Date.now();
                            obj = {};
                            merged = Object.assign(closure_1);
                            obj.now = timestamp;
                            obj.visitStartedAt = timestamp;
                            obj.draftTyped = false;
                            obj.lastActivityAt = null;
                            bound = null;
                            if (null != closure_1.messageAt) {
                              _Math = Math;
                              bound = Math.min(tmp.messageAt, timestamp);
                            }
                            obj.lastMessageAt = bound;
                            obj.seenAt = null;
                            obj.unseen = false;
                            tmp5 = null;
                            if (!tmp.visible) {
                              tmp5 = timestamp;
                            }
                            obj.hiddenAt = tmp5;
                            obj.outdatedShown = false;
                            obj.outdatedBackoff = 0;
                            return obj;
                          }
                        }
                        if (cResult[22] !== arg0) {
                          class R {
                            constructor() {
                              tmp = closure_1;
                              timestamp = Date.now();
                              obj = {};
                              merged = Object.assign(closure_1);
                              obj.now = timestamp;
                              obj.visitStartedAt = timestamp;
                              obj.draftTyped = false;
                              obj.lastActivityAt = null;
                              bound = null;
                              if (null != closure_1.messageAt) {
                                _Math = Math;
                                bound = Math.min(tmp.messageAt, timestamp);
                              }
                              obj.lastMessageAt = bound;
                              obj.seenAt = null;
                              obj.unseen = false;
                              tmp5 = null;
                              if (!tmp.visible) {
                                tmp5 = timestamp;
                              }
                              obj.hiddenAt = tmp5;
                              obj.outdatedShown = false;
                              obj.outdatedBackoff = 0;
                              return obj;
                            }
                          }
                          tmp43[0] = arg0;
                          class D {
                            constructor() {
                              onActivity = function onActivity() {
                                closure_0 = Date.now();
                                closure_1_2((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj.now = lastActivityAt;
                                  obj.lastActivityAt = lastActivityAt;
                                  return obj;
                                });
                              };
                              obj = closure_1_12;
                              tmp = onActivity;
                              value = closure_1_12.get(onActivity);
                              if (value == null) {
                                tmp2 = globalThis;
                                _Set = Set;
                                tmp3 = new.target;
                                tmp4 = new.target;
                                value = new Set();
                              }
                              closure_1 = value;
                              result = obj.set(tmp, value);
                              addResult = value.add(onActivity);
                              return () => {
                                set.delete(onActivity);
                                if (0 === set.size) {
                                  map.delete(closure_0);
                                }
                              };
                            }
                          }
                          cResult[22] = arg0;
                          cResult[23] = tmp43;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_1;
                              timestamp = Date.now();
                              obj = {};
                              merged = Object.assign(closure_1);
                              obj.now = timestamp;
                              obj.visitStartedAt = timestamp;
                              obj.draftTyped = false;
                              obj.lastActivityAt = null;
                              bound = null;
                              if (null != closure_1.messageAt) {
                                _Math = Math;
                                bound = Math.min(tmp.messageAt, timestamp);
                              }
                              obj.lastMessageAt = bound;
                              obj.seenAt = null;
                              obj.unseen = false;
                              tmp5 = null;
                              if (!tmp.visible) {
                                tmp5 = timestamp;
                              }
                              obj.hiddenAt = tmp5;
                              obj.outdatedShown = false;
                              obj.outdatedBackoff = 0;
                              return obj;
                            }
                          }
                        }
                        class D {
                          constructor() {
                            onActivity = function onActivity() {
                              closure_0 = Date.now();
                              closure_1_2((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj.now = lastActivityAt;
                                obj.lastActivityAt = lastActivityAt;
                                return obj;
                              });
                            };
                            obj = closure_1_12;
                            tmp = onActivity;
                            value = closure_1_12.get(onActivity);
                            if (value == null) {
                              tmp2 = globalThis;
                              _Set = Set;
                              tmp3 = new.target;
                              tmp4 = new.target;
                              value = new Set();
                            }
                            closure_1 = value;
                            result = obj.set(tmp, value);
                            addResult = value.add(onActivity);
                            return () => {
                              set.delete(onActivity);
                              if (0 === set.size) {
                                map.delete(closure_0);
                              }
                            };
                          }
                        }
                        if (cResult[24] === nextDueAt) {
                          class R {
                            constructor() {
                              tmp = closure_1;
                              timestamp = Date.now();
                              obj = {};
                              merged = Object.assign(closure_1);
                              obj.now = timestamp;
                              obj.visitStartedAt = timestamp;
                              obj.draftTyped = false;
                              obj.lastActivityAt = null;
                              bound = null;
                              if (null != closure_1.messageAt) {
                                _Math = Math;
                                bound = Math.min(tmp.messageAt, timestamp);
                              }
                              obj.lastMessageAt = bound;
                              obj.seenAt = null;
                              obj.unseen = false;
                              tmp5 = null;
                              if (!tmp.visible) {
                                tmp5 = timestamp;
                              }
                              obj.hiddenAt = tmp5;
                              obj.outdatedShown = false;
                              obj.outdatedBackoff = 0;
                              return obj;
                            }
                          }
                          if (cResult[27] === tmp32.now) {
                            class R {
                              constructor() {
                                tmp = closure_1;
                                timestamp = Date.now();
                                obj = {};
                                merged = Object.assign(closure_1);
                                obj.now = timestamp;
                                obj.visitStartedAt = timestamp;
                                obj.draftTyped = false;
                                obj.lastActivityAt = null;
                                bound = null;
                                if (null != closure_1.messageAt) {
                                  _Math = Math;
                                  bound = Math.min(tmp.messageAt, timestamp);
                                }
                                obj.lastMessageAt = bound;
                                obj.seenAt = null;
                                obj.unseen = false;
                                tmp5 = null;
                                if (!tmp.visible) {
                                  tmp5 = timestamp;
                                }
                                obj.hiddenAt = tmp5;
                                obj.outdatedShown = false;
                                obj.outdatedBackoff = 0;
                                return obj;
                              }
                            }
                            const effect = obj3.useEffect(tmp44, tmp46);
                            class D {
                              constructor() {
                                onActivity = function onActivity() {
                                  closure_0 = Date.now();
                                  closure_1_2((arg0) => {
                                    const obj = {};
                                    const merged = Object.assign(arg0);
                                    obj.now = lastActivityAt;
                                    obj.lastActivityAt = lastActivityAt;
                                    return obj;
                                  });
                                };
                                obj = closure_1_12;
                                tmp = onActivity;
                                value = closure_1_12.get(onActivity);
                                if (value == null) {
                                  tmp2 = globalThis;
                                  _Set = Set;
                                  tmp3 = new.target;
                                  tmp4 = new.target;
                                  value = new Set();
                                }
                                closure_1 = value;
                                result = obj.set(tmp, value);
                                addResult = value.add(onActivity);
                                return () => {
                                  set.delete(onActivity);
                                  if (0 === set.size) {
                                    map.delete(closure_0);
                                  }
                                };
                              }
                            }
                          }
                          class D {
                            constructor() {
                              onActivity = function onActivity() {
                                closure_0 = Date.now();
                                closure_1_2((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj.now = lastActivityAt;
                                  obj.lastActivityAt = lastActivityAt;
                                  return obj;
                                });
                              };
                              obj = closure_1_12;
                              tmp = onActivity;
                              value = closure_1_12.get(onActivity);
                              if (value == null) {
                                tmp2 = globalThis;
                                _Set = Set;
                                tmp3 = new.target;
                                tmp4 = new.target;
                                value = new Set();
                              }
                              closure_1 = value;
                              result = obj.set(tmp, value);
                              addResult = value.add(onActivity);
                              return () => {
                                set.delete(onActivity);
                                if (0 === set.size) {
                                  map.delete(closure_0);
                                }
                              };
                            }
                          }
                          tmp46[0] = nextDueAt;
                          tmp46[1] = tmp32.now;
                          cResult[27] = tmp32.now;
                          cResult[28] = nextDueAt;
                          cResult[29] = tmp46;
                        }
                        const fn = function x() {
                          if (null != nextDueAt) {
                            const _setTimeout = setTimeout;
                            const _Math = Math;
                            const _Date = Date;
                            const timeout = setTimeout(() => closure_1_2((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj.now = Date.now();
                              return obj;
                            }), Math.max(0, tmp - Date.now()));
                            return () => clearTimeout(closure_0);
                          }
                        };
                        cResult[24] = nextDueAt;
                        cResult[25] = tmp29;
                        cResult[26] = fn;
                        tmp44 = fn;
                      }
                      class D {
                        constructor() {
                          onActivity = function onActivity() {
                            closure_0 = Date.now();
                            closure_1_2((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj.now = lastActivityAt;
                              obj.lastActivityAt = lastActivityAt;
                              return obj;
                            });
                          };
                          obj = closure_1_12;
                          tmp = onActivity;
                          value = closure_1_12.get(onActivity);
                          if (value == null) {
                            tmp2 = globalThis;
                            _Set = Set;
                            tmp3 = new.target;
                            tmp4 = new.target;
                            value = new Set();
                          }
                          closure_1 = value;
                          result = obj.set(tmp, value);
                          addResult = value.add(onActivity);
                          return () => {
                            set.delete(onActivity);
                            if (0 === set.size) {
                              map.delete(closure_0);
                            }
                          };
                        }
                      }
                      cResult[19] = arg0;
                      cResult[20] = tmp29;
                      cResult[21] = D;
                    }
                    if (tmp32 !== tmp28) {
                      class R {
                        constructor() {
                          tmp = closure_1;
                          timestamp = Date.now();
                          obj = {};
                          merged = Object.assign(closure_1);
                          obj.now = timestamp;
                          obj.visitStartedAt = timestamp;
                          obj.draftTyped = false;
                          obj.lastActivityAt = null;
                          bound = null;
                          if (null != closure_1.messageAt) {
                            _Math = Math;
                            bound = Math.min(tmp.messageAt, timestamp);
                          }
                          obj.lastMessageAt = bound;
                          obj.seenAt = null;
                          obj.unseen = false;
                          tmp5 = null;
                          if (!tmp.visible) {
                            tmp5 = timestamp;
                          }
                          obj.hiddenAt = tmp5;
                          obj.outdatedShown = false;
                          obj.outdatedBackoff = 0;
                          return obj;
                        }
                      }
                    }
                    const tmp40 = selectConjureReminder(items1.map((backoffDelaysMs) => {
                      const obj = {};
                      const merged = Object.assign(backoffDelaysMs);
                      backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
                      let idleDelayMs;
                      if (backoffDelaysMs != null) {
                        idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
                      }
                      if (idleDelayMs == null) {
                        idleDelayMs = backoffDelaysMs.idleDelayMs;
                      }
                      obj.idleDelayMs = idleDelayMs;
                      obj.eligible = null != closure_4 && backoffDelaysMs.eligible(tmp4);
                      return obj;
                    }), tmp32);
                  }
                }
              }
            }
          }
          const obj2 = { projectId: tmp12, draftHasText: tmp13, publishing: tmp14, drift: tmp15, messageAt: tmp16, visible: tmp3 };
          cResult[10] = tmp12;
          cResult[11] = tmp13;
          cResult[12] = tmp14;
          cResult[13] = tmp15;
          cResult[14] = tmp16;
          cResult[15] = tmp3;
          cResult[16] = obj2;
          tmp24 = obj2;
        }
      }
    }
  }
  const atResult = arr.at(-1);
  if (tmp2 != null) {
    class R {
      constructor() {
        tmp = closure_1;
        timestamp = Date.now();
        obj = {};
        merged = Object.assign(closure_1);
        obj.now = timestamp;
        obj.visitStartedAt = timestamp;
        obj.draftTyped = false;
        obj.lastActivityAt = null;
        bound = null;
        if (null != closure_1.messageAt) {
          _Math = Math;
          bound = Math.min(tmp.messageAt, timestamp);
        }
        obj.lastMessageAt = bound;
        obj.seenAt = null;
        obj.unseen = false;
        tmp5 = null;
        if (!tmp.visible) {
          tmp5 = timestamp;
        }
        obj.hiddenAt = tmp5;
        obj.outdatedShown = false;
        obj.outdatedBackoff = 0;
        return obj;
      }
    }
  }
  if (tmp2 != null) {
    class R {
      constructor() {
        tmp = closure_1;
        timestamp = Date.now();
        obj = {};
        merged = Object.assign(closure_1);
        obj.now = timestamp;
        obj.visitStartedAt = timestamp;
        obj.draftTyped = false;
        obj.lastActivityAt = null;
        bound = null;
        if (null != closure_1.messageAt) {
          _Math = Math;
          bound = Math.min(tmp.messageAt, timestamp);
        }
        obj.lastMessageAt = bound;
        obj.seenAt = null;
        obj.unseen = false;
        tmp5 = null;
        if (!tmp.visible) {
          tmp5 = timestamp;
        }
        obj.hiddenAt = tmp5;
        obj.outdatedShown = false;
        obj.outdatedBackoff = 0;
        return obj;
      }
    }
    class D {
      constructor() {
        onActivity = function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.now = lastActivityAt;
            obj.lastActivityAt = lastActivityAt;
            return obj;
          });
        };
        obj = closure_1_12;
        tmp = onActivity;
        value = closure_1_12.get(onActivity);
        if (value == null) {
          tmp2 = globalThis;
          _Set = Set;
          tmp3 = new.target;
          tmp4 = new.target;
          value = new Set();
        }
        closure_1 = value;
        result = obj.set(tmp, value);
        addResult = value.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
  }
  let bound = null;
  if (null != atResult) {
    class R {
      constructor() {
        tmp = closure_1;
        timestamp = Date.now();
        obj = {};
        merged = Object.assign(closure_1);
        obj.now = timestamp;
        obj.visitStartedAt = timestamp;
        obj.draftTyped = false;
        obj.lastActivityAt = null;
        bound = null;
        if (null != closure_1.messageAt) {
          _Math = Math;
          bound = Math.min(tmp.messageAt, timestamp);
        }
        obj.lastMessageAt = bound;
        obj.seenAt = null;
        obj.unseen = false;
        tmp5 = null;
        if (!tmp.visible) {
          tmp5 = timestamp;
        }
        obj.hiddenAt = tmp5;
        obj.outdatedShown = false;
        obj.outdatedBackoff = 0;
        return obj;
      }
    }
    const finished_at = atResult.finished_at;
    class D {
      constructor() {
        onActivity = function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.now = lastActivityAt;
            obj.lastActivityAt = lastActivityAt;
            return obj;
          });
        };
        obj = closure_1_12;
        tmp = onActivity;
        value = closure_1_12.get(onActivity);
        if (value == null) {
          tmp2 = globalThis;
          _Set = Set;
          tmp3 = new.target;
          tmp4 = new.target;
          value = new Set();
        }
        closure_1 = value;
        result = obj.set(tmp, value);
        addResult = value.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
    if (finished_at == null) {
      class R {
        constructor() {
          tmp = closure_1;
          timestamp = Date.now();
          obj = {};
          merged = Object.assign(closure_1);
          obj.now = timestamp;
          obj.visitStartedAt = timestamp;
          obj.draftTyped = false;
          obj.lastActivityAt = null;
          bound = null;
          if (null != closure_1.messageAt) {
            _Math = Math;
            bound = Math.min(tmp.messageAt, timestamp);
          }
          obj.lastMessageAt = bound;
          obj.seenAt = null;
          obj.unseen = false;
          tmp5 = null;
          if (!tmp.visible) {
            tmp5 = timestamp;
          }
          obj.hiddenAt = tmp5;
          obj.outdatedShown = false;
          obj.outdatedBackoff = 0;
          return obj;
        }
      }
    }
    const settled_at = atResult.settled_at;
    if (settled_at == null) {
      class R {
        constructor() {
          tmp = closure_1;
          timestamp = Date.now();
          obj = {};
          merged = Object.assign(closure_1);
          obj.now = timestamp;
          obj.visitStartedAt = timestamp;
          obj.draftTyped = false;
          obj.lastActivityAt = null;
          bound = null;
          if (null != closure_1.messageAt) {
            _Math = Math;
            bound = Math.min(tmp.messageAt, timestamp);
          }
          obj.lastMessageAt = bound;
          obj.seenAt = null;
          obj.unseen = false;
          tmp5 = null;
          if (!tmp.visible) {
            tmp5 = timestamp;
          }
          obj.hiddenAt = tmp5;
          obj.outdatedShown = false;
          obj.outdatedBackoff = 0;
          return obj;
        }
      }
    }
    bound = Math.max(atResult.created_at, finished_at, settled_at);
  }
  cResult[0] = arg2;
  cResult[1] = arr;
  cResult[2] = arg0;
  if (tmp2 != null) {
    class R {
      constructor() {
        tmp = closure_1;
        timestamp = Date.now();
        obj = {};
        merged = Object.assign(closure_1);
        obj.now = timestamp;
        obj.visitStartedAt = timestamp;
        obj.draftTyped = false;
        obj.lastActivityAt = null;
        bound = null;
        if (null != closure_1.messageAt) {
          _Math = Math;
          bound = Math.min(tmp.messageAt, timestamp);
        }
        obj.lastMessageAt = bound;
        obj.seenAt = null;
        obj.unseen = false;
        tmp5 = null;
        if (!tmp.visible) {
          tmp5 = timestamp;
        }
        obj.hiddenAt = tmp5;
        obj.outdatedShown = false;
        obj.outdatedBackoff = 0;
        return obj;
      }
    }
  }
  cResult[3] = undefined;
  if (tmp2 != null) {
    class R {
      constructor() {
        tmp = closure_1;
        timestamp = Date.now();
        obj = {};
        merged = Object.assign(closure_1);
        obj.now = timestamp;
        obj.visitStartedAt = timestamp;
        obj.draftTyped = false;
        obj.lastActivityAt = null;
        bound = null;
        if (null != closure_1.messageAt) {
          _Math = Math;
          bound = Math.min(tmp.messageAt, timestamp);
        }
        obj.lastMessageAt = bound;
        obj.seenAt = null;
        obj.unseen = false;
        tmp5 = null;
        if (!tmp.visible) {
          tmp5 = timestamp;
        }
        obj.hiddenAt = tmp5;
        obj.outdatedShown = false;
        obj.outdatedBackoff = 0;
        return obj;
      }
    }
    class D {
      constructor() {
        onActivity = function onActivity() {
          closure_0 = Date.now();
          closure_1_2((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.now = lastActivityAt;
            obj.lastActivityAt = lastActivityAt;
            return obj;
          });
        };
        obj = closure_1_12;
        tmp = onActivity;
        value = closure_1_12.get(onActivity);
        if (value == null) {
          tmp2 = globalThis;
          _Set = Set;
          tmp3 = new.target;
          tmp4 = new.target;
          value = new Set();
        }
        closure_1 = value;
        result = obj.set(tmp, value);
        addResult = value.add(onActivity);
        return () => {
          set.delete(onActivity);
          if (0 === set.size) {
            map.delete(closure_0);
          }
        };
      }
    }
  }
  cResult[4] = undefined;
  cResult[5] = arg0;
  cResult[6] = arg2;
  cResult[7] = true === undefined;
  cResult[8] = "changes" === undefined;
  cResult[9] = bound;
  tmp16 = bound;
  tmp15 = tmp23;
  tmp14 = tmp22;
  tmp13 = arg2;
  tmp12 = arg0;
  let obj = require("c");
}) : ((projectId, arr, draftHasText) => {
  closure_0 = projectId;
  const tmp = obj(16614)(projectId);
  let diff = arr.length - 1;
  let tmp4 = null;
  if (0 <= diff) {
    while (true) {
      let tmp5 = arr[diff];
      if ("publish_notice" === tmp5.kind) {
        diff = diff - 1;
        tmp4 = null;
        if (0 > diff) {
          break;
        }
      } else {
        tmp4 = null;
        if ("user" === tmp5.role) {
          break;
        } else {
          tmp4 = tmp5;
          if (closure_6(tmp5)) {
            break;
          } else {
            tmp4 = null;
            if (!nextDueAt(arr, diff)) {
              break;
            }
          }
        }
      }
      break;
    }
  }
  const atResult = arr.at(-1);
  obj = { projectId, draftHasText, publishing: null, drift: null, messageAt: null, visible: null };
  let publishing;
  if (tmp != null) {
    publishing = tmp.publishing;
  }
  obj.publishing = true === publishing;
  state = undefined;
  if (tmp != null) {
    const status = tmp.status;
    if (status != null) {
      state = status.state;
    }
  }
  obj.drift = "changes" === state;
  let bound = null;
  if (null != atResult) {
    let num = atResult.finished_at;
    if (num == null) {
      num = 0;
    }
    let num2 = atResult.settled_at;
    if (num2 == null) {
      num2 = 0;
    }
    bound = Math.max(atResult.created_at, num, num2);
  }
  obj.messageAt = bound;
  obj.visible = obj(16144)();
  const tmp2 = obj(16144)();
  [tmp15, tmp16] = obj3.useState(() => {
    const timestamp = Date.now();
    obj = {};
    const merged = Object.assign(obj);
    obj.now = timestamp;
    obj.visitStartedAt = timestamp;
    obj.draftTyped = false;
    obj.lastActivityAt = null;
    let bound = null;
    if (null != obj.messageAt) {
      const _Math = Math;
      bound = Math.min(tmp.messageAt, timestamp);
    }
    obj.lastMessageAt = bound;
    obj.seenAt = null;
    obj.unseen = false;
    let tmp5 = null;
    if (!obj.visible) {
      tmp5 = timestamp;
    }
    obj.hiddenAt = tmp5;
    obj.outdatedShown = false;
    obj.outdatedBackoff = 0;
    return obj;
  });
  dependencyMap = tmp16;
  const tmp17 = nextReminderClockState(tmp15, obj, Date.now);
  _slicedToArray = tmp17;
  let tmp18 = null;
  if (null != tmp4) {
    let tmp19 = null != tmp4.awaitingUser || null != tmp4.secretRequest || null != tmp4.settingsRequest;
    if (!tmp19) {
      const intake = tmp4.intake;
      let num3;
      if (intake != null) {
        num3 = intake.questions.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp19 = num3 > 0;
    }
    tmp18 = null;
    if (!tmp19) {
      obj3 = { turn: tmp4, publish: tmp, draftHasText, draftTyped: tmp17.draftTyped && draftHasText };
      tmp18 = obj3;
    }
  }
  obj3 = tmp18;
  const tmp14 = _slicedToArray(obj3.useState(() => {
    const timestamp = Date.now();
    obj = {};
    const merged = Object.assign(obj);
    obj.now = timestamp;
    obj.visitStartedAt = timestamp;
    obj.draftTyped = false;
    obj.lastActivityAt = null;
    let bound = null;
    if (null != obj.messageAt) {
      const _Math = Math;
      bound = Math.min(tmp.messageAt, timestamp);
    }
    obj.lastMessageAt = bound;
    obj.seenAt = null;
    obj.unseen = false;
    let tmp5 = null;
    if (!obj.visible) {
      tmp5 = timestamp;
    }
    obj.hiddenAt = tmp5;
    obj.outdatedShown = false;
    obj.outdatedBackoff = 0;
    return obj;
  }), 2);
  ({ shown, nextDueAt } = selectConjureReminder(items1.map((backoffDelaysMs) => {
    obj = {};
    const merged = Object.assign(backoffDelaysMs);
    backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
    let idleDelayMs;
    if (backoffDelaysMs != null) {
      idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
    }
    if (idleDelayMs == null) {
      idleDelayMs = backoffDelaysMs.idleDelayMs;
    }
    obj.idleDelayMs = idleDelayMs;
    obj.eligible = null != obj3 && backoffDelaysMs.eligible(tmp4);
    return obj;
  }), tmp17));
  if ("outdated" === shown) {
    if (!tmp17.outdatedShown) {
      const obj4 = {};
      let merged = Object.assign(tmp17);
      obj4.outdatedShown = true;
      tmp16(obj4);
    }
    items = [projectId];
    const effect = obj2.useEffect(() => {
      function onActivity() {
        closure_0 = Date.now();
        closure_1_2((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj.now = lastActivityAt;
          obj.lastActivityAt = lastActivityAt;
          return obj;
        });
      }
      let set = map.get(onActivity);
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      const result = map.set(onActivity, set);
      set.add(onActivity);
      return () => {
        set.delete(onActivity);
        if (0 === set.size) {
          map.delete(closure_0);
        }
      };
    }, items);
    items1 = [nextDueAt, tmp17.now];
    const effect1 = obj2.useEffect(() => {
      if (null != nextDueAt) {
        const _setTimeout = setTimeout;
        const _Math = Math;
        const _Date = Date;
        const timeout = setTimeout(() => closure_1_2((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj.now = Date.now();
          return obj;
        }), Math.max(0, tmp - Date.now()));
        return () => clearTimeout(closure_0);
      }
    }, items1);
    return shown;
  }
  if (tmp17 !== tmp15) {
    tmp16(tmp17);
  }
  const tmp20 = selectConjureReminder(items1.map((backoffDelaysMs) => {
    obj = {};
    const merged = Object.assign(backoffDelaysMs);
    backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
    let idleDelayMs;
    if (backoffDelaysMs != null) {
      idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
    }
    if (idleDelayMs == null) {
      idleDelayMs = backoffDelaysMs.idleDelayMs;
    }
    obj.idleDelayMs = idleDelayMs;
    obj.eligible = null != obj3 && backoffDelaysMs.eligible(tmp4);
    return obj;
  }), tmp17);
});
function reminderSlotTurn(View) {
  let diff = View.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = View[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("user" === tmp2.role) {
          break;
        } else if (timestampProducer(tmp2)) {
          return tmp2;
        } else if (!hasOwnProperty(View, diff)) {
          return null;
        }
      }
      diff = diff - 1;
    }
    return null;
  }
  return null;
}
function hasOpenAsk(awaitingUser) {
  let tmp = null != awaitingUser.awaitingUser || null != awaitingUser.secretRequest || null != awaitingUser.settingsRequest;
  if (!tmp) {
    const intake = awaitingUser.intake;
    let num;
    if (intake != null) {
      num = intake.questions.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp = num > 0;
  }
  return tmp;
}
function reminderActivityAt(finished_at) {
  let num = finished_at.finished_at;
  if (num == null) {
    num = 0;
  }
  let num2 = finished_at.settled_at;
  if (num2 == null) {
    num2 = 0;
  }
  return Math.max(finished_at.created_at, num, num2);
}
function clampToObserved(arg0, arg1) {
  return Math.min(arg0, arg1);
}
function nextReminderLayers(arr, key) {
  closure_0 = key;
  const found = arr.filter((key) => key.key !== closure_0);
  const mapped = found.map((item) => {
    const obj = {};
    const merged = Object.assign(item);
    obj.leaving = true;
    return obj;
  });
  let tmp2 = mapped;
  if (null != key) {
    items = [];
    const obj = { key, leaving: false };
    items[HermesBuiltin.arraySpread(mapped, 0)] = obj;
    tmp2 = items;
  }
  return tmp2;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/reminders/conjureReminderSlot.tsx");

export const CONJURE_REMINDER_IDLE_DELAY_MS = 60000;
export const CONJURE_OUTDATED_BACKOFF_MS = items;
export const CONJURE_REMINDER_LONG_ABSENCE_MS = 600000;
export const CONJURE_REMINDER_ENTER_MS = 280;
export const CONJURE_REMINDER_EXIT_MS = 180;
export const CONJURE_REMINDERS = items1;
export { reminderSlotTurn };
export { hasOpenAsk };
export { reminderActivityAt };
export { clampToObserved };
export { selectConjureReminder };
export const markConjureReminderActivity = function markConjureReminderActivity(projectId) {
  value = map.get(projectId);
  if (value != null) {
    const item = value.forEach((fn) => fn());
  }
};
export const useConjureReminder = tmp4;
export { nextReminderLayers };
export const useConjureReminderLayers = ReactCompilerGating.isReactCompilerEnabled() ? ((key) => {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [arr2, tmp4] = noop.useState(first);
  closure_0 = tmp4;
  const found = arr2.find((leaving) => !leaving.leaving);
  key = undefined;
  if (found != null) {
    key = found.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== key) {
    closure_0 = key;
    const found1 = arr2.filter((key) => key.key !== closure_0);
    const mapped = found1.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.leaving = true;
      return obj;
    });
    let tmp8 = mapped;
    if (null != key) {
      items1 = [];
      const obj3 = { key, leaving: false };
      items1[HermesBuiltin.arraySpread(mapped, 0)] = obj3;
      tmp8 = items1;
    }
    tmp4(tmp8);
  }
  if (cResult[1] !== arr2) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(leaving) {
        return leaving.leaving;
      };
      cResult[3] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[3];
    }
    const someResult = arr2.some(tmp13);
    cResult[1] = arr2;
    cResult[2] = someResult;
  } else {
    closure_1 = tmp12;
    if (cResult[4] !== cResult[2]) {
      class A {
        constructor() {
          if (closure_1) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 180;
            closure_0 = setTimeout(() => closure_0(() => { ... }), 180);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
      cResult[4] = tmp12;
      cResult[5] = A;
    } else {
      class A {
        constructor() {
          if (closure_1) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 180;
            closure_0 = setTimeout(() => closure_0(() => { ... }), 180);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
    }
    if (cResult[6] === cResult[2]) {
      class A {
        constructor() {
          if (closure_1) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 180;
            closure_0 = setTimeout(() => closure_0(() => { ... }), 180);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
      const effect = noop.useEffect(A, tmp17);
      return arr2;
    }
    const items2 = [cResult[2], arr2];
    cResult[6] = cResult[2];
    cResult[7] = arr2;
    cResult[8] = items2;
    tmp17 = items2;
  }
  const tmp3 = _slicedToArray(noop.useState(first), 2);
}) : ((key) => {
  [arr, tmp2] = noop.useState([]);
  closure_0 = tmp2;
  const found = arr.find((leaving) => !leaving.leaving);
  key = undefined;
  if (found != null) {
    key = found.key;
  }
  if (key == null) {
    key = null;
  }
  if (key !== key) {
    closure_0 = key;
    const found1 = arr.filter((key) => key.key !== closure_0);
    const mapped = found1.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.leaving = true;
      return obj;
    });
    let tmp6 = mapped;
    if (null != key) {
      items = [];
      const obj2 = { key, leaving: false };
      items[HermesBuiltin.arraySpread(mapped, 0)] = obj2;
      tmp6 = items;
    }
    tmp2(tmp6);
  }
  const someResult = arr.some((leaving) => leaving.leaving);
  importDefault = someResult;
  items1 = [someResult, arr];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return arr;
});