// === Module 16725: conjureReminderSlot ===

// Module 16725 (conjureReminderSlot)
import react2 from "react" /* 576 */;
import useConjureWindowFocusedDefault from "useConjureWindowFocused" /* 16183 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 16652 */;
import conjurePublishCard from "conjurePublishCard" /* 16724 */;
import conjureIdeasOffer from "conjureIdeasOffer" /* 16726 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set;

let metroImportDefault;
let metroRequire;
const f126209 = (item) => {
  const obj = { leaving: true };
  const merged = Object.assign(item);
  return obj;
};
function selectConjureReminder(arr, unseen) {
  if (unseen.unseen) {
    return { shown: null, nextDueAt: null };
  } else {
    const found = arr.filter((eligible) => eligible.eligible);
    const first = found.sort((priority, priority2) => priority2.priority - priority.priority)[0];
    if (null == first) {
      return { shown: null, nextDueAt: null };
    } else {
      let obj2;
      const _Math3 = Math;
      let num = unseen.lastMessageAt;
      const _Math2 = Math;
      const now = unseen.now;
      const clock = first.clock;
      const max2 = Math.max;
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
      if ("visit" === clock) {
        num4 = unseen.visitStartedAt;
      }
      const _Math = Math;
      const sum = unseen.now + Math.max(0, first.idleDelayMs - max(0, now - max2(num, num2, num3, num4)));
      if (sum <= unseen.now) {
        obj2 = { shown: first.key, nextDueAt: null };
        const obj = { shown: first.key, nextDueAt: null };
      } else {
        obj2 = { shown: null, nextDueAt: sum };
      }
      return obj2;
    }
  }
}
function nextReminderClockState(projectId, projectId2, now) {
  let bound;
  let bound2;
  let lastActivityAt;
  let tmp66;
  if (projectId.projectId !== projectId2.projectId) {
    const tmp59 = now();
    const obj3 = { now: tmp59, visitStartedAt: tmp59, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp66, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
    const merged = Object.assign(projectId2);
    bound = null;
    if (null != projectId2.messageAt) {
      const _Math3 = Math;
      bound = Math.min(projectId2.messageAt, tmp59);
    }
    tmp66 = null;
    if (!projectId2.visible) {
      tmp66 = tmp59;
    }
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
    const obj = { now: tmp };
    const merged1 = Object.assign(projectId);
    let tmp5 = obj;
    if (projectId.draftHasText !== projectId2.draftHasText) {
      const obj4 = { lastActivityAt: tmp, outdatedUpdating: projectId2.publishing && obj.outdatedUpdating };
      const merged2 = Object.assign(obj);
      ({ draftHasText: obj2.draftHasText, draftHasText: obj2.draftTyped } = projectId2);
      tmp5 = obj4;
    }
    let tmp9 = tmp5;
    if (projectId.publishing !== projectId2.publishing) {
      let outdatedUpdating = tmp5.outdatedUpdating;
      if (outdatedUpdating) {
        outdatedUpdating = projectId2.publishing || projectId2.drift;
      }
      const obj5 = { publishing: projectId2.publishing, lastActivityAt, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: projectId2.publishing && tmp5.outdatedUpdating };
      const merged3 = Object.assign(tmp5);
      lastActivityAt = tmp;
      if (outdatedUpdating) {
        lastActivityAt = tmp5.lastActivityAt;
      }
      tmp9 = obj5;
    }
    let tmp14 = tmp9;
    if (projectId.drift !== projectId2.drift) {
      const obj6 = { drift: projectId2.drift };
      const merged4 = Object.assign(tmp9);
      let tmp18 = obj6;
      if (!projectId2.drift) {
        const obj7 = { outdatedShown: false, outdatedBackoff: 0 };
        const merged5 = Object.assign(obj6);
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
      const obj8 = { messageAt: projectId2.messageAt, lastMessageAt: bound1 };
      const merged6 = Object.assign(tmp14);
      let tmp28 = obj8;
      if (obj8.outdatedShown) {
        tmp28 = obj8;
        if (!obj8.publishing) {
          const _Math2 = Math;
          const obj9 = { outdatedShown: false, outdatedBackoff: bound2 };
          bound2 = Math.min(obj8.outdatedBackoff + 1, items.length - 1);
          const merged7 = Object.assign(obj8);
          tmp28 = obj9;
        }
      }
      let tmp35 = tmp28;
      if (!tmp28.publishing) {
        const obj10 = { outdatedUpdating: false };
        const merged8 = Object.assign(tmp28);
        tmp35 = obj10;
      }
      tmp22 = tmp35;
      const tmp39 = projectId2.visible || null == projectId.messageAt;
      if (!tmp39) {
        const obj11 = { unseen: true };
        const merged9 = Object.assign(tmp35);
        tmp22 = obj11;
      }
    }
    let tmp43 = tmp22;
    if (projectId.visible !== projectId2.visible) {
      let obj29;
      const obj12 = { visible: projectId2.visible };
      const merged10 = Object.assign(tmp22);
      if (projectId2.visible) {
        let tmp49;
        let hiddenAt = projectId.hiddenAt;
        if (hiddenAt == null) {
          hiddenAt = tmp;
        }
        if (tmp - hiddenAt >= c9) {
          const obj13 = { visitStartedAt: tmp };
          const merged11 = Object.assign(obj12);
          tmp49 = obj13;
        } else {
          tmp49 = obj12;
          if (obj12.unseen) {
            const obj14 = { seenAt: tmp };
            const merged12 = Object.assign(obj12);
            tmp49 = obj14;
          }
        }
        const obj15 = { hiddenAt: null, unseen: false };
        const merged13 = Object.assign(tmp49);
        obj29 = obj15;
      } else {
        obj29 = { hiddenAt: tmp, unseen: false };
        const merged14 = Object.assign(obj12);
      }
      tmp43 = obj29;
    }
    return tmp43;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ isStrandedSegment: metroRequire, turnSettled: metroImportDefault } = ConjureChatStore);
let items = [60000, 180000, 600000];
let c9 = 600000;
let obj = {
  key: "outdated",
  priority: 2,
  idleDelayMs: 60000,
  backoffDelaysMs: items,
  clock: "persistent",
  eligible(outdatedUpdating) {
    let draftTyped;
    let publish;
    let showsOutdatedNoticeResult;
    ({ publish, draftTyped } = outdatedUpdating);
    if (outdatedUpdating.outdatedUpdating) {
      let isUpdate;
      if (publish != null) {
        isUpdate = publish.isUpdate;
      }
      showsOutdatedNoticeResult = true === isUpdate;
    } else {
      showsOutdatedNoticeResult = !draftTyped;
      if (showsOutdatedNoticeResult) {
        const obj = conjurePublishCard;
        showsOutdatedNoticeResult = obj.showsOutdatedNotice(publish);
      }
    }
    return showsOutdatedNoticeResult;
  }
};
let items1 = [
  obj,
  {
    key: "ideas",
    priority: 1,
    idleDelayMs: 60000,
    clock: "visit",
    eligible(arg0) {
      let draftHasText;
      let publish;
      let turn;
      ({ turn, publish, draftHasText } = arg0);
      let isIdeasOfferTurnResult = !draftHasText;
      if (isIdeasOfferTurnResult) {
        let publishing;
        if (publish != null) {
          publishing = publish.publishing;
        }
        isIdeasOfferTurnResult = true !== publishing;
      }
      if (isIdeasOfferTurnResult) {
        const obj = conjureIdeasOffer;
        isIdeasOfferTurnResult = obj.isIdeasOfferTurn(turn);
      }
      if (isIdeasOfferTurnResult) {
        let result = null != turn.publishCta;
        if (result) {
          const obj2 = conjurePublishCard;
          result = obj2.isConjurePublishCtaVisible(publish);
        }
        isIdeasOfferTurnResult = !result;
      }
      return isIdeasOfferTurnResult;
    }
  }
];
const map = new Map();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arr, arg2) => {
  let closure_0;
  let closure_2;
  let closure_4;
  let messageAt;
  let nextDueAt;
  let outdatedBackoff;
  let shown;
  let tmp32;
  let tmp33;
  let tmp45;
  let tmp50;
  const f126211 = (key) => {
    let num;
    const obj = { idleDelayMs: num, eligible: null != react && key.eligible(tmp6) };
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
      num = idleDelayMs;
    } else {
      num = 0;
    }
    null != react && key.eligible(tmp6);
    return obj;
  };
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(30);
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
  }
  if (cResult[0] === arg2) {
    if (cResult[1] === arr) {
      if (cResult[2] === arg0) {
        let publishing;
        const tmp10 = cResult[3];
        if (tmp2 != null) {
          publishing = tmp2.publishing;
        }
        if (tmp10 === publishing) {
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp17;
          let tmp18;
          let state;
          const tmp12 = cResult[4];
          if (tmp2 != null) {
            const status = tmp2.status;
            if (status != null) {
              state = status.state;
            }
          }
          if (tmp12 === state) {
            tmp14 = cResult[5];
            tmp15 = cResult[6];
            tmp16 = cResult[7];
            tmp17 = cResult[8];
            tmp18 = cResult[9];
          }
          if (cResult[10] === tmp14) {
            if (cResult[11] === tmp15) {
              if (cResult[12] === tmp16) {
                if (cResult[13] === tmp17) {
                  if (cResult[14] === tmp18) {
                    let tmp28;
                    if (cResult[15] === tmp3) {
                      tmp28 = cResult[16];
                    }
                    importDefault = tmp28;
                    if (cResult[17] !== tmp28) {
                      class T {
                        constructor() {
                          let bound;
                          let tmp5;
                          const timestamp = Date.now();
                          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                          const merged = Object.assign(messageAt);
                          bound = null;
                          if (null != messageAt.messageAt) {
                            const _Math = Math;
                            bound = Math.min(messageAt.messageAt, timestamp);
                          }
                          tmp5 = null;
                          if (!messageAt.visible) {
                            tmp5 = timestamp;
                          }
                          return obj;
                        }
                      }
                      cResult[17] = tmp28;
                      cResult[18] = T;
                    } else {
                      class T {
                        constructor() {
                          let bound;
                          let tmp5;
                          const timestamp = Date.now();
                          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                          const merged = Object.assign(messageAt);
                          bound = null;
                          if (null != messageAt.messageAt) {
                            const _Math = Math;
                            bound = Math.min(messageAt.messageAt, timestamp);
                          }
                          tmp5 = null;
                          if (!messageAt.visible) {
                            tmp5 = timestamp;
                          }
                          return obj;
                        }
                      }
                    }
                    [tmp32, tmp33] = react.useState(T);
                    dependencyMap = tmp33;
                    let _Date = Date;
                    _slicedToArray(react.useState(T), 2);
                    const tmp36 = nextReminderClockState(tmp32, tmp28, Date.now);
                    _slicedToArray = tmp36;
                    let tmp37 = null;
                    if (null != tmp5) {
                      class T {
                        constructor() {
                          let bound;
                          let tmp5;
                          const timestamp = Date.now();
                          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                          const merged = Object.assign(messageAt);
                          bound = null;
                          if (null != messageAt.messageAt) {
                            const _Math = Math;
                            bound = Math.min(messageAt.messageAt, timestamp);
                          }
                          tmp5 = null;
                          if (!messageAt.visible) {
                            tmp5 = timestamp;
                          }
                          return obj;
                        }
                      }
                      if (!tmp38) {
                        class T {
                          constructor() {
                            let bound;
                            let tmp5;
                            const timestamp = Date.now();
                            const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                            const merged = Object.assign(messageAt);
                            bound = null;
                            if (null != messageAt.messageAt) {
                              const _Math = Math;
                              bound = Math.min(messageAt.messageAt, timestamp);
                            }
                            tmp5 = null;
                            if (!messageAt.visible) {
                              tmp5 = timestamp;
                            }
                            return obj;
                          }
                        }
                        if (tmp39 != null) {
                          class T {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                              const merged = Object.assign(messageAt);
                              bound = null;
                              if (null != messageAt.messageAt) {
                                const _Math = Math;
                                bound = Math.min(messageAt.messageAt, timestamp);
                              }
                              tmp5 = null;
                              if (!messageAt.visible) {
                                tmp5 = timestamp;
                              }
                              return obj;
                            }
                          }
                        }
                        if (undefined == null) {
                          class T {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                              const merged = Object.assign(messageAt);
                              bound = null;
                              if (null != messageAt.messageAt) {
                                const _Math = Math;
                                bound = Math.min(messageAt.messageAt, timestamp);
                              }
                              tmp5 = null;
                              if (!messageAt.visible) {
                                tmp5 = timestamp;
                              }
                              return obj;
                            }
                          }
                        }
                      }
                      tmp37 = null;
                      if (!tmp38) {
                        class T {
                          constructor() {
                            let bound;
                            let tmp5;
                            const timestamp = Date.now();
                            const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                            const merged = Object.assign(messageAt);
                            bound = null;
                            if (null != messageAt.messageAt) {
                              const _Math = Math;
                              bound = Math.min(messageAt.messageAt, timestamp);
                            }
                            tmp5 = null;
                            if (!messageAt.visible) {
                              tmp5 = timestamp;
                            }
                            return obj;
                          }
                        }
                        tmp41[0] = tmp5;
                        tmp41[1] = tmp2;
                        tmp41[2] = arg2;
                        tmp41[3] = tmp36.draftTyped && arg2;
                        tmp41[4] = tmp36.outdatedUpdating;
                        tmp37 = tmp41;
                      }
                    }
                    react = tmp37;
                    ({ shown, nextDueAt } = selectConjureReminder(items1.map(f126211), tmp36));
                    selectConjureReminder(items1.map(f126211), tmp36);
                    if ("outdated" === shown) {
                      class T {
                        constructor() {
                          let bound;
                          let tmp5;
                          const timestamp = Date.now();
                          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                          const merged = Object.assign(messageAt);
                          bound = null;
                          if (null != messageAt.messageAt) {
                            const _Math = Math;
                            bound = Math.min(messageAt.messageAt, timestamp);
                          }
                          tmp5 = null;
                          if (!messageAt.visible) {
                            tmp5 = timestamp;
                          }
                          return obj;
                        }
                      }
                      if (cResult[19] === arg0) {
                        class T {
                          constructor() {
                            let bound;
                            let tmp5;
                            const timestamp = Date.now();
                            const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                            const merged = Object.assign(messageAt);
                            bound = null;
                            if (null != messageAt.messageAt) {
                              const _Math = Math;
                              bound = Math.min(messageAt.messageAt, timestamp);
                            }
                            tmp5 = null;
                            if (!messageAt.visible) {
                              tmp5 = timestamp;
                            }
                            return obj;
                          }
                        }
                        if (cResult[22] !== arg0) {
                          class T {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                              const merged = Object.assign(messageAt);
                              bound = null;
                              if (null != messageAt.messageAt) {
                                const _Math = Math;
                                bound = Math.min(messageAt.messageAt, timestamp);
                              }
                              tmp5 = null;
                              if (!messageAt.visible) {
                                tmp5 = timestamp;
                              }
                              return obj;
                            }
                          }
                          tmp47[0] = arg0;
                          cResult[22] = arg0;
                          class E {
                            constructor() {
                              if (null != nextDueAt) {
                                const _setTimeout = setTimeout;
                                const _Math = Math;
                                const _Date = Date;
                                const timeout = setTimeout(() => closure_1_2((arg0) => {
                                  const obj = { now: Date.now() };
                                  const merged = Object.assign(arg0);
                                  return obj;
                                }), Math.max(0, tmp - Date.now()));
                                return () => clearTimeout(closure_0);
                              }
                            }
                          }
                          cResult[23] = tmp47;
                        } else {
                          class T {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                              const merged = Object.assign(messageAt);
                              bound = null;
                              if (null != messageAt.messageAt) {
                                const _Math = Math;
                                bound = Math.min(messageAt.messageAt, timestamp);
                              }
                              tmp5 = null;
                              if (!messageAt.visible) {
                                tmp5 = timestamp;
                              }
                              return obj;
                            }
                          }
                        }
                        const effect = obj3.useEffect(tmp45, tmp47);
                        if (cResult[24] === nextDueAt) {
                          class T {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                              const merged = Object.assign(messageAt);
                              bound = null;
                              if (null != messageAt.messageAt) {
                                const _Math = Math;
                                bound = Math.min(messageAt.messageAt, timestamp);
                              }
                              tmp5 = null;
                              if (!messageAt.visible) {
                                tmp5 = timestamp;
                              }
                              return obj;
                            }
                          }
                          if (cResult[27] === tmp36.now) {
                            class T {
                              constructor() {
                                let bound;
                                let tmp5;
                                const timestamp = Date.now();
                                const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                                const merged = Object.assign(messageAt);
                                bound = null;
                                if (null != messageAt.messageAt) {
                                  const _Math = Math;
                                  bound = Math.min(messageAt.messageAt, timestamp);
                                }
                                tmp5 = null;
                                if (!messageAt.visible) {
                                  tmp5 = timestamp;
                                }
                                return obj;
                              }
                            }
                            const effect1 = obj3.useEffect(E, tmp50);
                            return shown;
                          }
                          items = [nextDueAt, ];
                          class E {
                            constructor() {
                              if (null != nextDueAt) {
                                const _setTimeout = setTimeout;
                                const _Math = Math;
                                const _Date = Date;
                                const timeout = setTimeout(() => closure_1_2((arg0) => {
                                  const obj = { now: Date.now() };
                                  const merged = Object.assign(arg0);
                                  return obj;
                                }), Math.max(0, tmp - Date.now()));
                                return () => clearTimeout(closure_0);
                              }
                            }
                          }
                          cResult[27] = tmp36.now;
                          cResult[28] = nextDueAt;
                          cResult[29] = items;
                          tmp50 = items;
                        }
                        class E {
                          constructor() {
                            if (null != nextDueAt) {
                              const _setTimeout = setTimeout;
                              const _Math = Math;
                              const _Date = Date;
                              const timeout = setTimeout(() => closure_1_2((arg0) => {
                                const obj = { now: Date.now() };
                                const merged = Object.assign(arg0);
                                return obj;
                              }), Math.max(0, tmp - Date.now()));
                              return () => clearTimeout(closure_0);
                            }
                          }
                        }
                        cResult[24] = nextDueAt;
                        cResult[25] = tmp33;
                        cResult[26] = E;
                      }
                      const fn = function k() {
                        function onActivity() {
                          closure_1_2((arg0) => {
                            const obj = { outdatedUpdating: true };
                            const merged = Object.assign(arg0);
                            return obj;
                          });
                        }
                        set = map.get(onActivity);
                        const tmp = onActivity;
                        if (set == null) {
                          const _Set = Set;
                          const self = this;
                          const self2 = this;
                          set = new Set();
                        }
                        const result = map.set(tmp, set);
                        set.add(onActivity);
                        return () => {
                          set.delete(onActivity);
                          if (0 === set.size) {
                            map.delete(closure_0);
                          }
                        };
                      };
                      cResult[20] = tmp33;
                      cResult[21] = fn;
                      tmp45 = fn;
                    }
                    if (tmp36 !== tmp32) {
                      class T {
                        constructor() {
                          let bound;
                          let tmp5;
                          const timestamp = Date.now();
                          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
                          const merged = Object.assign(messageAt);
                          bound = null;
                          if (null != messageAt.messageAt) {
                            const _Math = Math;
                            bound = Math.min(messageAt.messageAt, timestamp);
                          }
                          tmp5 = null;
                          if (!messageAt.visible) {
                            tmp5 = timestamp;
                          }
                          return obj;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = { projectId: tmp14, draftHasText: tmp15, publishing: tmp16, drift: tmp17, messageAt: tmp18, visible: tmp3 };
          let num = 10;
          cResult[10] = tmp14;
          cResult[11] = tmp15;
          cResult[12] = tmp16;
          cResult[13] = tmp17;
          cResult[14] = tmp18;
          cResult[15] = tmp3;
          cResult[16] = obj2;
          tmp28 = obj2;
        }
      }
    }
  }
  const atResult = arr.at(-1);
  if (tmp2 != null) {
    class T {
      constructor() {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
        const merged = Object.assign(messageAt);
        bound = null;
        if (null != messageAt.messageAt) {
          const _Math = Math;
          bound = Math.min(messageAt.messageAt, timestamp);
        }
        tmp5 = null;
        if (!messageAt.visible) {
          tmp5 = timestamp;
        }
        return obj;
      }
    }
  }
  if (tmp2 != null) {
    class T {
      constructor() {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
        const merged = Object.assign(messageAt);
        bound = null;
        if (null != messageAt.messageAt) {
          const _Math = Math;
          bound = Math.min(messageAt.messageAt, timestamp);
        }
        tmp5 = null;
        if (!messageAt.visible) {
          tmp5 = timestamp;
        }
        return obj;
      }
    }
    if (tmp21 != null) {
      class T {
        constructor() {
          let bound;
          let tmp5;
          const timestamp = Date.now();
          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
          const merged = Object.assign(messageAt);
          bound = null;
          if (null != messageAt.messageAt) {
            const _Math = Math;
            bound = Math.min(messageAt.messageAt, timestamp);
          }
          tmp5 = null;
          if (!messageAt.visible) {
            tmp5 = timestamp;
          }
          return obj;
        }
      }
    }
  }
  let maxResult = null;
  if (null != atResult) {
    class T {
      constructor() {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
        const merged = Object.assign(messageAt);
        bound = null;
        if (null != messageAt.messageAt) {
          const _Math = Math;
          bound = Math.min(messageAt.messageAt, timestamp);
        }
        tmp5 = null;
        if (!messageAt.visible) {
          tmp5 = timestamp;
        }
        return obj;
      }
    }
    const finished_at = atResult.finished_at;
    let _Math = Math;
    class E {
      constructor() {
        if (null != nextDueAt) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          const _Date = Date;
          const timeout = setTimeout(() => closure_1_2((arg0) => {
            const obj = { now: Date.now() };
            const merged = Object.assign(arg0);
            return obj;
          }), Math.max(0, tmp - Date.now()));
          return () => clearTimeout(closure_0);
        }
      }
    }
    if (finished_at == null) {
      class T {
        constructor() {
          let bound;
          let tmp5;
          const timestamp = Date.now();
          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
          const merged = Object.assign(messageAt);
          bound = null;
          if (null != messageAt.messageAt) {
            const _Math = Math;
            bound = Math.min(messageAt.messageAt, timestamp);
          }
          tmp5 = null;
          if (!messageAt.visible) {
            tmp5 = timestamp;
          }
          return obj;
        }
      }
    }
    const settled_at = atResult.settled_at;
    if (settled_at == null) {
      class T {
        constructor() {
          let bound;
          let tmp5;
          const timestamp = Date.now();
          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
          const merged = Object.assign(messageAt);
          bound = null;
          if (null != messageAt.messageAt) {
            const _Math = Math;
            bound = Math.min(messageAt.messageAt, timestamp);
          }
          tmp5 = null;
          if (!messageAt.visible) {
            tmp5 = timestamp;
          }
          return obj;
        }
      }
    }
    maxResult = max(tmp23, finished_at, settled_at);
  }
  cResult[0] = arg2;
  cResult[1] = arr;
  cResult[2] = arg0;
  if (tmp2 != null) {
    class T {
      constructor() {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
        const merged = Object.assign(messageAt);
        bound = null;
        if (null != messageAt.messageAt) {
          const _Math = Math;
          bound = Math.min(messageAt.messageAt, timestamp);
        }
        tmp5 = null;
        if (!messageAt.visible) {
          tmp5 = timestamp;
        }
        return obj;
      }
    }
  }
  cResult[3] = undefined;
  if (tmp2 != null) {
    class T {
      constructor() {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
        const merged = Object.assign(messageAt);
        bound = null;
        if (null != messageAt.messageAt) {
          const _Math = Math;
          bound = Math.min(messageAt.messageAt, timestamp);
        }
        tmp5 = null;
        if (!messageAt.visible) {
          tmp5 = timestamp;
        }
        return obj;
      }
    }
    if (tmp25 != null) {
      class T {
        constructor() {
          let bound;
          let tmp5;
          const timestamp = Date.now();
          const obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
          const merged = Object.assign(messageAt);
          bound = null;
          if (null != messageAt.messageAt) {
            const _Math = Math;
            bound = Math.min(messageAt.messageAt, timestamp);
          }
          tmp5 = null;
          if (!messageAt.visible) {
            tmp5 = timestamp;
          }
          return obj;
        }
      }
    }
  }
  cResult[4] = undefined;
  cResult[5] = arg0;
  cResult[6] = arg2;
  cResult[7] = true === undefined;
  cResult[8] = "changes" === undefined;
  cResult[9] = maxResult;
  tmp18 = maxResult;
  tmp17 = tmp27;
  tmp16 = tmp26;
  tmp15 = arg2;
  tmp14 = arg0;
}) : ((projectId, arr, draftHasText) => {
  let closure_2;
  let maxResult;
  let nextDueAt;
  let obj;
  let obj3;
  let outdatedBackoff;
  let publishing;
  let shown;
  let state;
  let tmp15;
  let tmp16;
  const f126214 = () => {
    let bound;
    let tmp5;
    const timestamp = Date.now();
    obj = { now: timestamp, visitStartedAt: timestamp, draftTyped: false, lastActivityAt: null, lastMessageAt: bound, seenAt: null, unseen: false, hiddenAt: tmp5, outdatedShown: false, outdatedBackoff: 0, outdatedUpdating: false };
    const merged = Object.assign(obj);
    bound = null;
    if (null != obj.messageAt) {
      const _Math = Math;
      bound = Math.min(tmp.messageAt, timestamp);
    }
    tmp5 = null;
    if (!obj.visible) {
      tmp5 = timestamp;
    }
    return obj;
  };
  const f126215 = (key) => {
    let num;
    obj = { idleDelayMs: num, eligible: null != obj3 && key.eligible(tmp6) };
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
      num = idleDelayMs;
    } else {
      num = 0;
    }
    null != obj3 && key.eligible(tmp6);
    return obj;
  };
  let closure_0 = projectId;
  let tmp = obj(16652)(projectId);
  let diff = arr.length - 1;
  let tmp4 = null;
  const tmp2 = obj(16183)();
  if (0 <= diff) {
    while (true) {
      let tmp5 = arr[diff];
      let tmp6 = diff;
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
  }
  const atResult = arr.at(-1);
  obj = { projectId, draftHasText, publishing: true === publishing, drift: "changes" === state, messageAt: maxResult, visible: tmp2 };
  publishing = undefined;
  if (tmp != null) {
    publishing = tmp.publishing;
  }
  state = undefined;
  if (tmp != null) {
    const status = tmp.status;
    if (status != null) {
      state = status.state;
    }
  }
  maxResult = null;
  if (null != atResult) {
    let num = atResult.finished_at;
    let _Math = Math;
    const created_at = atResult.created_at;
    if (num == null) {
      num = 0;
    }
    let num2 = atResult.settled_at;
    if (num2 == null) {
      num2 = 0;
    }
    maxResult = max(created_at, num, num2);
  }
  [tmp15, tmp16] = obj3.useState(f126214);
  dependencyMap = tmp16;
  _slicedToArray(obj3.useState(f126214), 2);
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
  ({ shown, nextDueAt } = selectConjureReminder(items1.map(f126215), tmp17));
  selectConjureReminder(items1.map(f126215), tmp17);
  if ("outdated" === shown) {
    if (!tmp17.outdatedShown) {
      const obj4 = { outdatedShown: true };
      let merged = Object.assign(tmp17);
      tmp16(obj4);
    }
    items = [projectId];
    const effect = obj2.useEffect(function() {
      function onActivity() {
        closure_1_2((arg0) => {
          obj = { outdatedUpdating: true };
          const merged = Object.assign(arg0);
          return obj;
        });
      }
      set = map.get(onActivity);
      const tmp = onActivity;
      if (set == null) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
      }
      const result = map.set(tmp, set);
      set.add(onActivity);
      return () => {
        set.delete(onActivity);
        if (0 === set.size) {
          map.delete(projectId);
        }
      };
    }, items);
    items1 = [nextDueAt, tmp17.now];
    const effect1 = obj2.useEffect(() => {
      let closure_0;
      if (null != nextDueAt) {
        const _setTimeout = setTimeout;
        const _Math = Math;
        const _Date = Date;
        const timeout = setTimeout(() => closure_1_2((arg0) => {
          obj = { now: Date.now() };
          const merged = Object.assign(arg0);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((key) => {
  let arr2;
  let first;
  let tmp13;
  let tmp16;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [arr2, tmp5] = react.useState(first);
  let closure_0 = tmp5;
  _slicedToArray(react.useState(first), 2);
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
    const mapped = found1.map(f126209);
    let tmp9 = mapped;
    if (null != key) {
      items1 = [];
      const obj3 = { key, leaving: false };
      items1[HermesBuiltin.arraySpread(items1, mapped, 0)] = obj3;
      tmp9 = items1;
    }
    tmp5(tmp9);
  }
  if (cResult[1] !== arr2) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(leaving) {
        return leaving.leaving;
      };
      cResult[3] = fn;
      tmp14 = fn;
    } else {
      tmp14 = cResult[3];
    }
    const someResult = arr2.some(tmp14);
    cResult[1] = arr2;
    cResult[2] = someResult;
    tmp13 = someResult;
  } else {
    tmp13 = cResult[2];
  }
  let closure_1 = tmp13;
  if (cResult[4] !== tmp13) {
    const fn2 = function p() {
      if (closure_1) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
        return () => clearTimeout(closure_0);
      }
    };
    cResult[4] = tmp13;
    cResult[5] = fn2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === tmp13) {
    let tmp17;
    if (cResult[7] === arr2) {
      tmp17 = cResult[8];
    }
    const effect = react.useEffect(tmp16, tmp17);
    return arr2;
  }
  const items2 = [tmp13, arr2];
  cResult[6] = tmp13;
  cResult[7] = arr2;
  cResult[8] = items2;
  tmp17 = items2;
}) : ((key) => {
  let arr;
  let tmp3;
  const f126222 = (leaving) => leaving.leaving;
  [arr, tmp3] = react.useState([]);
  let closure_0 = tmp3;
  _slicedToArray(react.useState([]), 2);
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
    const mapped = found1.map(f126209);
    let tmp7 = mapped;
    if (null != key) {
      items = [];
      const obj2 = { key, leaving: false };
      items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj2;
      tmp7 = items;
    }
    tmp3(tmp7);
  }
  items1 = [arr.some(f126222), arr];
  arr.some(f126222);
  const effect = react.useEffect(() => {
    if (closure_1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return arr;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp9;
  let useReducedMotion;
  const obj = stateFromStores(576);
  const cResult = obj.c(8);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  [tmp9, importDefault] = react.useState(1);
  _slicedToArray(react.useState(1), 2);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function l() {
      let closure_0;
      let interval;
      if (!interval) {
        const _setInterval = setInterval;
        interval = setInterval(() => closure_1_1((arg0) => arg0 % 3 + 1), 400);
        return () => clearInterval(closure_0);
      }
    };
    items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp11 = items1;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[5] === tmp9) {
    let tmp13;
    if (cResult[6] === stateFromStores) {
      tmp13 = cResult[7];
    }
    return tmp13;
  }
  let num5 = 3;
  const repeat = ".".repeat;
  if (!stateFromStores) {
    num5 = tmp9;
  }
  const repeatResult = repeat(num5);
  cResult[5] = tmp9;
  cResult[6] = stateFromStores;
  cResult[7] = repeatResult;
  tmp13 = repeatResult;
}) : (() => {
  let closure_1;
  let first;
  let stateFromStores;
  let useReducedMotion;
  items = [AccessibilityStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [first, closure_1] = react.useState(1);
  items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let closure_0;
    let interval;
    if (!interval) {
      const _setInterval = setInterval;
      interval = setInterval(() => closure_1_1((arg0) => arg0 % 3 + 1), 400);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let num = 3;
  const repeat = ".".repeat;
  if (!stateFromStores) {
    num = first;
  }
  return repeat(num);
});
function reminderSlotTurn(View) {
  let diff = View.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = View[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("user" === tmp2.role) {
          break;
        } else if (metroImportDefault(tmp2)) {
          return tmp2;
        } else if (!metroRequire(View, diff)) {
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
  const _Math = Math;
  const created_at = finished_at.created_at;
  if (num == null) {
    num = 0;
  }
  let num2 = finished_at.settled_at;
  if (num2 == null) {
    num2 = 0;
  }
  return max(created_at, num, num2);
}
function clampToObserved(arg0, arg1) {
  return Math.min(arg0, arg1);
}
function nextReminderLayers(arr, key) {
  let closure_0 = key;
  const found = arr.filter((key) => key.key !== closure_0);
  const mapped = found.map(f126209);
  let tmp3 = mapped;
  if (null != key) {
    items = [];
    const obj = { key, leaving: false };
    items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj;
    tmp3 = items;
  }
  return tmp3;
}
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
  const value = map.get(projectId);
  if (value != null) {
    const item = value.forEach((fn) => fn());
  }
};
export const useConjureReminder = tmp4;
export { nextReminderLayers };
export const useConjureReminderLayers = tmp5;
export const useConjureUpdatingDots = tmp6;