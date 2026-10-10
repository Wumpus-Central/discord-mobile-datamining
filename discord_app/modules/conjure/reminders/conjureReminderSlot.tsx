// === Module 17224: conjureReminderSlot ===

// Module 17224 (conjureReminderSlot)
import c from "c" /* 576 */;
import useConjureWindowFocusedDefault from "useConjureWindowFocused" /* 11426 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 17110 */;
import conjurePublishCard from "conjurePublishCard" /* 17223 */;
import conjureIdeasOffer from "conjureIdeasOffer" /* 17225 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

const require = globalThis.__r;

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
    const tmp59 = now();
    const obj3 = {};
    const merged = Object.assign(projectId2);
    obj3.now = tmp59;
    obj3.visitStartedAt = tmp59;
    obj3.draftTyped = false;
    obj3.lastActivityAt = null;
    let bound = null;
    if (null != projectId2.messageAt) {
      const _Math3 = Math;
      bound = Math.min(projectId2.messageAt, tmp59);
    }
    obj3.lastMessageAt = bound;
    obj3.seenAt = null;
    obj3.unseen = false;
    let tmp66 = null;
    if (!projectId2.visible) {
      tmp66 = tmp59;
    }
    obj3.hiddenAt = tmp66;
    obj3.outdatedShown = false;
    obj3.outdatedBackoff = 0;
    obj3.outdatedUpdating = false;
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
      obj4.outdatedUpdating = projectId2.publishing && obj.outdatedUpdating;
      tmp5 = obj4;
    }
    let tmp9 = tmp5;
    if (projectId.publishing !== projectId2.publishing) {
      let outdatedUpdating = tmp5.outdatedUpdating;
      if (outdatedUpdating) {
        outdatedUpdating = projectId2.publishing || projectId2.drift;
        const tmp10 = projectId2.publishing || projectId2.drift;
      }
      const obj5 = {};
      const merged3 = Object.assign(tmp5);
      obj5.publishing = projectId2.publishing;
      let lastActivityAt = tmp;
      if (outdatedUpdating) {
        lastActivityAt = tmp5.lastActivityAt;
      }
      obj5.lastActivityAt = lastActivityAt;
      obj5.outdatedShown = false;
      obj5.outdatedBackoff = 0;
      obj5.outdatedUpdating = projectId2.publishing && tmp5.outdatedUpdating;
      tmp9 = obj5;
    }
    let tmp14 = tmp9;
    if (projectId.drift !== projectId2.drift) {
      const obj6 = {};
      const merged4 = Object.assign(tmp9);
      obj6.drift = projectId2.drift;
      let tmp18 = obj6;
      if (!projectId2.drift) {
        const obj7 = {};
        const merged5 = Object.assign(obj6);
        obj7.outdatedShown = false;
        obj7.outdatedBackoff = 0;
        tmp18 = obj7;
      }
      tmp14 = tmp18;
    }
    let tmp22 = tmp14;
    if (projectId.messageAt !== projectId2.messageAt) {
      let bound1 = null;
      if (null != projectId2.messageAt) {
        const _Math = Math;
        bound1 = Math.min(projectId2.messageAt, tmp);
      }
      const obj8 = {};
      const merged6 = Object.assign(tmp14);
      obj8.messageAt = projectId2.messageAt;
      obj8.lastMessageAt = bound1;
      let tmp28 = obj8;
      if (obj8.outdatedShown) {
        tmp28 = obj8;
        if (!obj8.publishing) {
          const _Math2 = Math;
          const obj9 = {};
          const bound2 = Math.min(obj8.outdatedBackoff + 1, items.length - 1);
          const merged7 = Object.assign(obj8);
          obj9.outdatedShown = false;
          obj9.outdatedBackoff = bound2;
          tmp28 = obj9;
        }
      }
      let tmp35 = tmp28;
      if (!tmp28.publishing) {
        const obj10 = {};
        const merged8 = Object.assign(tmp28);
        obj10.outdatedUpdating = false;
        tmp35 = obj10;
      }
      tmp22 = tmp35;
      if (!tmp39) {
        const obj11 = {};
        const merged9 = Object.assign(tmp35);
        obj11.unseen = true;
        tmp22 = obj11;
      }
      tmp39 = projectId2.visible || null == projectId.messageAt;
    }
    if (projectId.visible === projectId2.visible) {
      return tmp22;
    } else {
      let obj12 = {};
      const merged10 = Object.assign(tmp22);
      obj12.visible = projectId2.visible;
      if (!projectId2.visible) {
        const obj13 = {};
        const merged11 = Object.assign(obj12);
        obj13.hiddenAt = tmp;
        obj13.unseen = false;
      }
      let hiddenAt = projectId.hiddenAt;
      let flag7 = null;
      if (hiddenAt == null) {
        hiddenAt = tmp;
      }
      if (tmp - hiddenAt >= c9) {
        const obj14 = {};
        obj12 = Object.assign(obj12);
        obj14.visitStartedAt = tmp;
        let tmp48 = obj14;
      } else {
        tmp48 = obj12;
        if (obj12.unseen) {
          const obj15 = {};
          const merged12 = Object.assign(obj12);
          obj15.seenAt = tmp;
          tmp48 = obj15;
        }
      }
      const obj29 = {};
      const merged13 = Object.assign(tmp48);
      obj29.hiddenAt = flag7;
      flag7 = false;
      obj29.unseen = false;
    }
  }
}
const ConjureChatStore = fn(12996);
({ isStrandedSegment: metroRequire, turnSettled: closure_7 } = ConjureChatStore);
let items = [60000, 180000, 600000];
let c9 = 600000;
let items1 = [
  {
    key: "outdated",
    priority: 2,
    idleDelayMs: 60000,
    backoffDelaysMs: items,
    clock: "persistent",
    eligible(outdatedUpdating) {
      ({ publish, draftTyped } = outdatedUpdating);
      if (outdatedUpdating.outdatedUpdating) {
        let isUpdate;
        if (publish != null) {
          isUpdate = publish.isUpdate;
        }
        let showsOutdatedNoticeResult = true === isUpdate;
      } else {
        showsOutdatedNoticeResult = !draftTyped;
        if (!draftTyped) {
          showsOutdatedNoticeResult = conjurePublishCard.showsOutdatedNotice(publish);
        }
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
let ReactCompilerGating = fn(558);
let obj = {
  key: "outdated",
  priority: 2,
  idleDelayMs: 60000,
  backoffDelaysMs: items,
  clock: "persistent",
  eligible(outdatedUpdating) {
    ({ publish, draftTyped } = outdatedUpdating);
    if (outdatedUpdating.outdatedUpdating) {
      let isUpdate;
      if (publish != null) {
        isUpdate = publish.isUpdate;
      }
      let showsOutdatedNoticeResult = true === isUpdate;
    } else {
      showsOutdatedNoticeResult = !draftTyped;
      if (!draftTyped) {
        showsOutdatedNoticeResult = conjurePublishCard.showsOutdatedNotice(publish);
      }
    }
    return showsOutdatedNoticeResult;
  }
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureReminder(arg0, arr, arg2) {
  _require = arg0;
  const cResult = require("c").c(30);
  const tmp2 = useConjurePublishActionDefault(arg0);
  const tmp3 = useConjureWindowFocusedDefault();
  let diff = arr.length - 1;
  let tmp5 = null;
  if (0 <= diff) {
    while (true) {
      let tmp6 = arr[diff];
      if ("publish_notice" !== tmp6.kind) {
        if ("project_event" !== tmp6.kind) {
          tmp5 = null;
          if ("user" === tmp6.role) {
            break;
          } else {
            tmp5 = tmp6;
            if (closure_7(tmp6)) {
              break;
            } else {
              tmp5 = null;
              if (!closure_6(arr, diff)) {
                break;
              }
            }
          }
        }
        break;
      }
      diff = diff - 1;
      tmp5 = null;
      if (0 > diff) {
        break;
      }
    }
  }
  if (cResult[0] === arg2) {
    if (cResult[1] === arr) {
      if (cResult[2] === arg0) {
        let isUpdate;
        if (tmp2 != null) {
          isUpdate = tmp2.isUpdate;
        }
        if (cResult[3] === isUpdate) {
          let publishing;
          if (tmp2 != null) {
            publishing = tmp2.publishing;
          }
          if (cResult[4] === publishing) {
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
                      let tmp22 = cResult[16];
                    }
                    importDefault = tmp22;
                    if (cResult[17] !== tmp22) {
                      class T {
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
                          obj.outdatedUpdating = false;
                          return obj;
                        }
                      }
                      cResult[17] = tmp22;
                      cResult[18] = T;
                    } else {
                      class T {
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
                          obj.outdatedUpdating = false;
                          return obj;
                        }
                      }
                    }
                    [tmp26, tmp27] = noop.useState(T);
                    dependencyMap = tmp27;
                    let _Date = Date;
                    const tmp30 = nextReminderClockState(tmp26, tmp22, Date.now);
                    _slicedToArray = tmp30;
                    let tmp31 = null;
                    if (null != tmp5) {
                      class T {
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
                          obj.outdatedUpdating = false;
                          return obj;
                        }
                      }
                      if (!tmp32) {
                        class T {
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
                            obj.outdatedUpdating = false;
                            return obj;
                          }
                        }
                        if (tmp33 != null) {
                          class T {
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
                              obj.outdatedUpdating = false;
                              return obj;
                            }
                          }
                        }
                        if (undefined == null) {
                          class T {
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
                              obj.outdatedUpdating = false;
                              return obj;
                            }
                          }
                        }
                      }
                      tmp31 = null;
                      if (!tmp32) {
                        class T {
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
                            obj.outdatedUpdating = false;
                            return obj;
                          }
                        }
                        tmp35[0] = tmp5;
                        tmp35[1] = tmp2;
                        tmp35[2] = arg2;
                        tmp35[3] = tmp30.draftTyped && arg2;
                        tmp35[4] = tmp30.outdatedUpdating;
                        tmp31 = tmp35;
                      }
                    }
                    noop = tmp31;
                    const tmp25 = _slicedToArray(noop.useState(T), 2);
                    ({ shown, nextDueAt } = selectConjureReminder(items1.map((key) => {
                      const obj = {};
                      const merged = Object.assign(key);
                      if ("outdated" !== key.key) {
                        const backoffDelaysMs = key.backoffDelaysMs;
                        let idleDelayMs;
                        if (backoffDelaysMs != null) {
                          idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
                        }
                        if (idleDelayMs == null) {
                          idleDelayMs = key.idleDelayMs;
                        }
                        let num = idleDelayMs;
                      } else {
                        num = 0;
                      }
                      obj.idleDelayMs = num;
                      obj.eligible = null != closure_4 && key.eligible(tmp6);
                      return obj;
                    }), tmp30));
                    if ("outdated" === shown) {
                      class T {
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
                          obj.outdatedUpdating = false;
                          return obj;
                        }
                      }
                      if (cResult[19] === arg0) {
                        class T {
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
                            obj.outdatedUpdating = false;
                            return obj;
                          }
                        }
                        if (cResult[22] !== arg0) {
                          class T {
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
                              obj.outdatedUpdating = false;
                              return obj;
                            }
                          }
                          tmp41[0] = arg0;
                          cResult[22] = arg0;
                          class C {
                            constructor() {
                              if (null != nextDueAt) {
                                tmp2 = globalThis;
                                _setTimeout = setTimeout;
                                _Math = Math;
                                _Date = Date;
                                num = 0;
                                closure_0 = setTimeout(() => closure_1_2((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj.now = Date.now();
                                  return obj;
                                }), Math.max(0, tmp - Date.now()));
                                return () => clearTimeout(closure_0);
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[23] = tmp41;
                        } else {
                          class T {
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
                              obj.outdatedUpdating = false;
                              return obj;
                            }
                          }
                        }
                        const effect = obj3.useEffect(tmp39, tmp41);
                        if (cResult[24] === nextDueAt) {
                          class T {
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
                              obj.outdatedUpdating = false;
                              return obj;
                            }
                          }
                          if (cResult[27] === tmp30.now) {
                            class T {
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
                                obj.outdatedUpdating = false;
                                return obj;
                              }
                            }
                            const effect1 = obj3.useEffect(C, tmp44);
                            return shown;
                          }
                          items = [nextDueAt, ];
                          class C {
                            constructor() {
                              if (null != nextDueAt) {
                                tmp2 = globalThis;
                                _setTimeout = setTimeout;
                                _Math = Math;
                                _Date = Date;
                                num = 0;
                                closure_0 = setTimeout(() => closure_1_2((arg0) => {
                                  const obj = {};
                                  const merged = Object.assign(arg0);
                                  obj.now = Date.now();
                                  return obj;
                                }), Math.max(0, tmp - Date.now()));
                                return () => clearTimeout(closure_0);
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[27] = tmp30.now;
                          cResult[28] = nextDueAt;
                          cResult[29] = items;
                          tmp44 = items;
                        }
                        class C {
                          constructor() {
                            if (null != nextDueAt) {
                              tmp2 = globalThis;
                              _setTimeout = setTimeout;
                              _Math = Math;
                              _Date = Date;
                              num = 0;
                              closure_0 = setTimeout(() => closure_1_2((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj.now = Date.now();
                                return obj;
                              }), Math.max(0, tmp - Date.now()));
                              return () => clearTimeout(closure_0);
                            } else {
                              return;
                            }
                          }
                        }
                        cResult[24] = nextDueAt;
                        cResult[25] = tmp27;
                        cResult[26] = C;
                      }
                      const fn = function w() {
                        function onActivity() {
                          closure_1_2((arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj.outdatedUpdating = true;
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
                      };
                      cResult[20] = tmp27;
                      cResult[21] = fn;
                      tmp39 = fn;
                    }
                    if (tmp30 !== tmp26) {
                      class T {
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
                          obj.outdatedUpdating = false;
                          return obj;
                        }
                      }
                    }
                    const tmp38 = selectConjureReminder(items1.map((key) => {
                      const obj = {};
                      const merged = Object.assign(key);
                      if ("outdated" !== key.key) {
                        const backoffDelaysMs = key.backoffDelaysMs;
                        let idleDelayMs;
                        if (backoffDelaysMs != null) {
                          idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
                        }
                        if (idleDelayMs == null) {
                          idleDelayMs = key.idleDelayMs;
                        }
                        let num = idleDelayMs;
                      } else {
                        num = 0;
                      }
                      obj.idleDelayMs = num;
                      obj.eligible = null != closure_4 && key.eligible(tmp6);
                      return obj;
                    }), tmp30);
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
          tmp22 = obj2;
        }
      }
    }
  }
  const atResult = arr.at(-1);
  if (tmp2 != null) {
    class T {
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
        obj.outdatedUpdating = false;
        return obj;
      }
    }
  }
  if (tmp2 != null) {
    class T {
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
        obj.outdatedUpdating = false;
        return obj;
      }
    }
  }
  let bound = null;
  if (null != atResult) {
    class T {
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
        obj.outdatedUpdating = false;
        return obj;
      }
    }
    const finished_at = atResult.finished_at;
    class C {
      constructor() {
        if (null != nextDueAt) {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          _Math = Math;
          _Date = Date;
          num = 0;
          closure_0 = setTimeout(() => closure_1_2((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.now = Date.now();
            return obj;
          }), Math.max(0, tmp - Date.now()));
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    if (finished_at == null) {
      class T {
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
          obj.outdatedUpdating = false;
          return obj;
        }
      }
    }
    const settled_at = atResult.settled_at;
    if (settled_at == null) {
      class T {
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
          obj.outdatedUpdating = false;
          return obj;
        }
      }
    }
    bound = Math.max(tmp19, finished_at, settled_at);
  }
  cResult[0] = arg2;
  cResult[1] = arr;
  cResult[2] = arg0;
  if (tmp2 != null) {
    class T {
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
        obj.outdatedUpdating = false;
        return obj;
      }
    }
  }
  cResult[3] = undefined;
  if (tmp2 != null) {
    class T {
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
        obj.outdatedUpdating = false;
        return obj;
      }
    }
  }
  cResult[4] = undefined;
  cResult[5] = arg0;
  cResult[6] = arg2;
  cResult[7] = true === undefined;
  cResult[8] = true === undefined;
  cResult[9] = bound;
  tmp16 = bound;
  tmp15 = tmp21;
  tmp14 = tmp20;
  tmp13 = arg2;
  tmp12 = arg0;
  let obj = require("c");
}) : (function useConjureReminder(projectId, arr, draftHasText) {
  closure_0 = projectId;
  const tmp = obj(17110)(projectId);
  let diff = arr.length - 1;
  let tmp4 = null;
  if (0 <= diff) {
    while (true) {
      let tmp5 = arr[diff];
      if ("publish_notice" !== tmp5.kind) {
        if ("project_event" !== tmp5.kind) {
          tmp4 = null;
          if ("user" === tmp5.role) {
            break;
          } else {
            tmp4 = tmp5;
            if (closure_7(tmp5)) {
              break;
            } else {
              tmp4 = null;
              if (!closure_6(arr, diff)) {
                break;
              }
            }
          }
        }
        break;
      }
      diff = diff - 1;
      tmp4 = null;
      if (0 > diff) {
        break;
      }
    }
  }
  const atResult = arr.at(-1);
  obj = { projectId, draftHasText, publishing: null, drift: null, messageAt: null, visible: null };
  let publishing;
  if (tmp != null) {
    publishing = tmp.publishing;
  }
  obj.publishing = true === publishing;
  let isUpdate;
  if (tmp != null) {
    isUpdate = tmp.isUpdate;
  }
  obj.drift = true === isUpdate;
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
  obj.visible = obj(11426)();
  const tmp2 = obj(11426)();
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
    obj.outdatedUpdating = false;
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
      obj3 = { turn: tmp4, publish: tmp, draftHasText, draftTyped: tmp17.draftTyped && draftHasText, outdatedUpdating: tmp17.outdatedUpdating };
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
    obj.outdatedUpdating = false;
    return obj;
  }), 2);
  ({ shown, nextDueAt } = selectConjureReminder(items1.map((key) => {
    obj = {};
    const merged = Object.assign(key);
    if ("outdated" !== key.key) {
      const backoffDelaysMs = key.backoffDelaysMs;
      let idleDelayMs;
      if (backoffDelaysMs != null) {
        idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
      }
      if (idleDelayMs == null) {
        idleDelayMs = key.idleDelayMs;
      }
      let num = idleDelayMs;
    } else {
      num = 0;
    }
    obj.idleDelayMs = num;
    obj.eligible = null != obj3 && key.eligible(tmp6);
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
        closure_1_2((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj.outdatedUpdating = true;
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
  const tmp20 = selectConjureReminder(items1.map((key) => {
    obj = {};
    const merged = Object.assign(key);
    if ("outdated" !== key.key) {
      const backoffDelaysMs = key.backoffDelaysMs;
      let idleDelayMs;
      if (backoffDelaysMs != null) {
        idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
      }
      if (idleDelayMs == null) {
        idleDelayMs = key.idleDelayMs;
      }
      let num = idleDelayMs;
    } else {
      num = 0;
    }
    obj.idleDelayMs = num;
    obj.eligible = null != obj3 && key.eligible(tmp6);
    return obj;
  }), tmp17);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureReminderLayers(key) {
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
      const fn = function l(leaving) {
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
      const fn2 = function p() {
        if (closure_1) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
          return () => clearTimeout(closure_0);
        }
      };
      cResult[4] = tmp12;
      cResult[5] = fn2;
      let tmp16 = fn2;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] === cResult[2]) {
      if (cResult[7] === arr2) {
        let tmp17 = cResult[8];
      }
      const effect = noop.useEffect(tmp16, tmp17);
      return arr2;
    }
    const items2 = [cResult[2], arr2];
    cResult[6] = cResult[2];
    cResult[7] = arr2;
    cResult[8] = items2;
    tmp17 = items2;
  }
  const tmp3 = _slicedToArray(noop.useState(first), 2);
}) : (function useConjureReminderLayers(key) {
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
function reminderSlotTurn(arg0) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arg0[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("project_event" !== tmp2.kind) {
          if ("user" === tmp2.role) {
            break;
          } else if (React5(tmp2)) {
            return tmp2;
          } else if (!timestampProducer(arg0, diff)) {
            return null;
          }
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
export const useConjureReminderLayers = tmp5;
export const useConjureUpdatingDots = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureUpdatingDots(arg0) {
  const cResult = require("c").c(9);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  const tmpResult = require("initialize");
  [tmp10, dependencyMap] = noop.useState(1);
  if (cResult[2] === (undefined !== arg0 && arg0)) {
    if (cResult[3] === stateFromStores) {
      let tmp11 = cResult[4];
      let tmp12 = cResult[5];
    }
    const effect = noop.useEffect(tmp11, tmp12);
    if (cResult[6] === tmp10) {
      if (cResult[7] === stateFromStores) {
        let tmp14 = cResult[8];
      }
      return tmp14;
    }
    let num3 = 3;
    if (!stateFromStores) {
      num3 = tmp10;
    }
    const repeatResult = ".".repeat(num3);
    cResult[6] = tmp10;
    cResult[7] = stateFromStores;
    cResult[8] = repeatResult;
    tmp14 = repeatResult;
  }
  const fn2 = function f() {
    if (!stateFromStores) {
      if (!interval) {
        const _setInterval = setInterval;
        interval = setInterval(() => closure_1_2((arg0) => arg0 % 3 + 1), 400);
        return () => clearInterval(closure_0);
      }
    }
  };
  items1 = [stateFromStores, undefined !== arg0 && arg0];
  cResult[2] = undefined !== arg0 && arg0;
  cResult[3] = stateFromStores;
  cResult[4] = fn2;
  cResult[5] = items1;
  tmp12 = items1;
  tmp11 = fn2;
  const tmp9 = _slicedToArray(noop.useState(1), 2);
}) : (function useConjureUpdatingDots() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  items = [AccessibilityStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = _slicedToArray(noop.useState(1), 2);
  dependencyMap = tmp2[1];
  items1 = [stateFromStores, flag];
  const effect = noop.useEffect(() => {
    if (!stateFromStores) {
      if (!interval) {
        const _setInterval = setInterval;
        interval = setInterval(() => closure_1_2((arg0) => arg0 % 3 + 1), 400);
        return () => clearInterval(closure_0);
      }
    }
  }, items1);
  let num = 3;
  if (!stateFromStores) {
    num = tmp2[0];
  }
  return ".".repeat(num);
});