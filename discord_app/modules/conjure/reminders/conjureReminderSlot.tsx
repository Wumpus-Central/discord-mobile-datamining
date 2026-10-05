// discord_app/modules/conjure/reminders/conjureReminderSlot.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useConjureWindowFocusedDefault from "../shared/useConjureWindowFocused.native.tsx";
import useConjurePublishActionDefault from "../publish/useConjurePublishAction.tsx";
import conjurePublishCard from "../publish/conjurePublishCard.tsx";
import conjureIdeasOffer from "conjureIdeasOffer.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set;

let hasOwnProperty;
let metroRequire;
const f126052 = (item) => {
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
  let tmp61;
  if (projectId.projectId !== projectId2.projectId) {
    const tmp54 = now();
    const obj3 = {
      now: tmp54,
      visitStartedAt: tmp54,
      draftTyped: false,
      lastActivityAt: null,
      lastMessageAt: bound,
      seenAt: null,
      unseen: false,
      hiddenAt: tmp61,
      outdatedShown: false,
      outdatedBackoff: 0,
    };
    const merged = Object.assign(projectId2);
    bound = null;
    if (null != projectId2.messageAt) {
      const _Math3 = Math;
      bound = Math.min(projectId2.messageAt, tmp54);
    }
    tmp61 = null;
    if (!projectId2.visible) {
      tmp61 = tmp54;
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
      const obj4 = { lastActivityAt: tmp };
      const merged2 = Object.assign(obj);
      ({ draftHasText: obj2.draftHasText, draftHasText: obj2.draftTyped } = projectId2);
      tmp5 = obj4;
    }
    let tmp9 = tmp5;
    if (projectId.publishing !== projectId2.publishing) {
      const obj5 = { publishing: projectId2.publishing, lastActivityAt: tmp, outdatedShown: false, outdatedBackoff: 0 };
      const merged3 = Object.assign(tmp5);
      tmp9 = obj5;
    }
    let tmp13 = tmp9;
    if (projectId.drift !== projectId2.drift) {
      const obj6 = { drift: projectId2.drift };
      const merged4 = Object.assign(tmp9);
      let tmp17 = obj6;
      if (!projectId2.drift) {
        const obj7 = { outdatedShown: false, outdatedBackoff: 0 };
        const merged5 = Object.assign(obj6);
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
      const obj8 = { messageAt: projectId2.messageAt, lastMessageAt: bound1 };
      const merged6 = Object.assign(tmp13);
      let tmp27 = obj8;
      if (obj8.outdatedShown) {
        tmp27 = obj8;
        if (!obj8.publishing) {
          const _Math2 = Math;
          const obj9 = { outdatedShown: false, outdatedBackoff: bound2 };
          bound2 = Math.min(obj8.outdatedBackoff + 1, items.length - 1);
          const merged7 = Object.assign(obj8);
          tmp27 = obj9;
        }
      }
      tmp21 = tmp27;
      const tmp34 = projectId2.visible || null == projectId.messageAt;
      if (!tmp34) {
        const obj10 = { unseen: true };
        const merged8 = Object.assign(tmp27);
        tmp21 = obj10;
      }
    }
    let tmp38 = tmp21;
    if (projectId.visible !== projectId2.visible) {
      let obj27;
      const obj11 = { visible: projectId2.visible };
      const merged9 = Object.assign(tmp21);
      if (projectId2.visible) {
        let tmp44;
        let hiddenAt = projectId.hiddenAt;
        if (hiddenAt == null) {
          hiddenAt = tmp;
        }
        if (tmp - hiddenAt >= c8) {
          const obj12 = { visitStartedAt: tmp };
          const merged10 = Object.assign(obj11);
          tmp44 = obj12;
        } else {
          tmp44 = obj11;
          if (obj11.unseen) {
            const obj13 = { seenAt: tmp };
            const merged11 = Object.assign(obj11);
            tmp44 = obj13;
          }
        }
        const obj14 = { hiddenAt: null, unseen: false };
        const merged12 = Object.assign(tmp44);
        obj27 = obj14;
      } else {
        obj27 = { hiddenAt: tmp, unseen: false };
        const merged13 = Object.assign(obj11);
      }
      tmp38 = obj27;
    }
    return tmp38;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ isStrandedSegment: hasOwnProperty, turnSettled: metroRequire } = ConjureChatStore);
let items = [60000, 180000, 600000];
let c8 = 600000;
let obj = {
  key: "outdated",
  priority: 2,
  idleDelayMs: 60000,
  backoffDelaysMs: items,
  clock: "persistent",
  eligible(draftTyped) {
    let showsOutdatedNoticeResult = !draftTyped.draftTyped;
    if (showsOutdatedNoticeResult) {
      const obj = conjurePublishCard;
      showsOutdatedNoticeResult = obj.showsOutdatedNotice(tmp);
    }
    return showsOutdatedNoticeResult;
  },
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
    },
  },
];
const map = new Map();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arr, arg2) => {
      let closure_2;
      let closure_4;
      let messageAt;
      let nextDueAt;
      let outdatedBackoff;
      let shown;
      let tmp30;
      let tmp31;
      let tmp46;
      const f126054 = (backoffDelaysMs) => {
        let idleDelayMs;
        const obj = { idleDelayMs, eligible: null != react && backoffDelaysMs.eligible(tmp4) };
        const merged = Object.assign(backoffDelaysMs);
        backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
        idleDelayMs = undefined;
        if (backoffDelaysMs != null) {
          idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
        }
        if (idleDelayMs == null) {
          idleDelayMs = backoffDelaysMs.idleDelayMs;
        }
        null != react && backoffDelaysMs.eligible(tmp4);
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
                        let tmp26;
                        if (cResult[15] === tmp3) {
                          tmp26 = cResult[16];
                        }
                        importDefault = tmp26;
                        if (cResult[17] !== tmp26) {
                          class R {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = {
                                now: timestamp,
                                visitStartedAt: timestamp,
                                draftTyped: false,
                                lastActivityAt: null,
                                lastMessageAt: bound,
                                seenAt: null,
                                unseen: false,
                                hiddenAt: tmp5,
                                outdatedShown: false,
                                outdatedBackoff: 0,
                              };
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
                          cResult[17] = tmp26;
                          cResult[18] = R;
                        } else {
                          class R {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = {
                                now: timestamp,
                                visitStartedAt: timestamp,
                                draftTyped: false,
                                lastActivityAt: null,
                                lastMessageAt: bound,
                                seenAt: null,
                                unseen: false,
                                hiddenAt: tmp5,
                                outdatedShown: false,
                                outdatedBackoff: 0,
                              };
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
                        [tmp30, tmp31] = react.useState(R);
                        dependencyMap = tmp31;
                        let _Date = Date;
                        _slicedToArray(react.useState(R), 2);
                        const tmp34 = nextReminderClockState(tmp30, tmp26, Date.now);
                        _slicedToArray = tmp34;
                        let tmp35 = null;
                        const obj3 = react;
                        if (null != tmp5) {
                          class R {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = {
                                now: timestamp,
                                visitStartedAt: timestamp,
                                draftTyped: false,
                                lastActivityAt: null,
                                lastMessageAt: bound,
                                seenAt: null,
                                unseen: false,
                                hiddenAt: tmp5,
                                outdatedShown: false,
                                outdatedBackoff: 0,
                              };
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
                          if (!tmp36) {
                            class R {
                              constructor() {
                                let bound;
                                let tmp5;
                                const timestamp = Date.now();
                                const obj = {
                                  now: timestamp,
                                  visitStartedAt: timestamp,
                                  draftTyped: false,
                                  lastActivityAt: null,
                                  lastMessageAt: bound,
                                  seenAt: null,
                                  unseen: false,
                                  hiddenAt: tmp5,
                                  outdatedShown: false,
                                  outdatedBackoff: 0,
                                };
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
                            if (tmp37 != null) {
                              class R {
                                constructor() {
                                  let bound;
                                  let tmp5;
                                  const timestamp = Date.now();
                                  const obj = {
                                    now: timestamp,
                                    visitStartedAt: timestamp,
                                    draftTyped: false,
                                    lastActivityAt: null,
                                    lastMessageAt: bound,
                                    seenAt: null,
                                    unseen: false,
                                    hiddenAt: tmp5,
                                    outdatedShown: false,
                                    outdatedBackoff: 0,
                                  };
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
                              class R {
                                constructor() {
                                  let bound;
                                  let tmp5;
                                  const timestamp = Date.now();
                                  const obj = {
                                    now: timestamp,
                                    visitStartedAt: timestamp,
                                    draftTyped: false,
                                    lastActivityAt: null,
                                    lastMessageAt: bound,
                                    seenAt: null,
                                    unseen: false,
                                    hiddenAt: tmp5,
                                    outdatedShown: false,
                                    outdatedBackoff: 0,
                                  };
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
                          tmp35 = null;
                          if (!tmp36) {
                            class R {
                              constructor() {
                                let bound;
                                let tmp5;
                                const timestamp = Date.now();
                                const obj = {
                                  now: timestamp,
                                  visitStartedAt: timestamp,
                                  draftTyped: false,
                                  lastActivityAt: null,
                                  lastMessageAt: bound,
                                  seenAt: null,
                                  unseen: false,
                                  hiddenAt: tmp5,
                                  outdatedShown: false,
                                  outdatedBackoff: 0,
                                };
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
                            tmp39[0] = tmp5;
                            tmp39[1] = tmp2;
                            tmp39[2] = arg2;
                            tmp39[3] = tmp34.draftTyped && arg2;
                            tmp35 = tmp39;
                          }
                        }
                        react = tmp35;
                        ({ shown, nextDueAt } = selectConjureReminder(items1.map(f126054), tmp34));
                        selectConjureReminder(items1.map(f126054), tmp34);
                        if ("outdated" === shown) {
                          class R {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = {
                                now: timestamp,
                                visitStartedAt: timestamp,
                                draftTyped: false,
                                lastActivityAt: null,
                                lastMessageAt: bound,
                                seenAt: null,
                                unseen: false,
                                hiddenAt: tmp5,
                                outdatedShown: false,
                                outdatedBackoff: 0,
                              };
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
                            class R {
                              constructor() {
                                let bound;
                                let tmp5;
                                const timestamp = Date.now();
                                const obj = {
                                  now: timestamp,
                                  visitStartedAt: timestamp,
                                  draftTyped: false,
                                  lastActivityAt: null,
                                  lastMessageAt: bound,
                                  seenAt: null,
                                  unseen: false,
                                  hiddenAt: tmp5,
                                  outdatedShown: false,
                                  outdatedBackoff: 0,
                                };
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
                              class R {
                                constructor() {
                                  let bound;
                                  let tmp5;
                                  const timestamp = Date.now();
                                  const obj = {
                                    now: timestamp,
                                    visitStartedAt: timestamp,
                                    draftTyped: false,
                                    lastActivityAt: null,
                                    lastMessageAt: bound,
                                    seenAt: null,
                                    unseen: false,
                                    hiddenAt: tmp5,
                                    outdatedShown: false,
                                    outdatedBackoff: 0,
                                  };
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
                              tmp45[0] = arg0;
                              class D {
                                constructor() {
                                  function onActivity() {
                                    closure_0 = Date.now();
                                    closure_1_2((arg0) => {
                                      const obj = { now: lastActivityAt, lastActivityAt };
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
                                }
                              }
                              cResult[22] = arg0;
                              cResult[23] = tmp45;
                            } else {
                              class R {
                                constructor() {
                                  let bound;
                                  let tmp5;
                                  const timestamp = Date.now();
                                  const obj = {
                                    now: timestamp,
                                    visitStartedAt: timestamp,
                                    draftTyped: false,
                                    lastActivityAt: null,
                                    lastMessageAt: bound,
                                    seenAt: null,
                                    unseen: false,
                                    hiddenAt: tmp5,
                                    outdatedShown: false,
                                    outdatedBackoff: 0,
                                  };
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
                            class D {
                              constructor() {
                                function onActivity() {
                                  closure_0 = Date.now();
                                  closure_1_2((arg0) => {
                                    const obj = { now: lastActivityAt, lastActivityAt };
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
                              }
                            }
                            if (cResult[24] === nextDueAt) {
                              class R {
                                constructor() {
                                  let bound;
                                  let tmp5;
                                  const timestamp = Date.now();
                                  const obj = {
                                    now: timestamp,
                                    visitStartedAt: timestamp,
                                    draftTyped: false,
                                    lastActivityAt: null,
                                    lastMessageAt: bound,
                                    seenAt: null,
                                    unseen: false,
                                    hiddenAt: tmp5,
                                    outdatedShown: false,
                                    outdatedBackoff: 0,
                                  };
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
                              if (cResult[27] === tmp34.now) {
                                class R {
                                  constructor() {
                                    let bound;
                                    let tmp5;
                                    const timestamp = Date.now();
                                    const obj = {
                                      now: timestamp,
                                      visitStartedAt: timestamp,
                                      draftTyped: false,
                                      lastActivityAt: null,
                                      lastMessageAt: bound,
                                      seenAt: null,
                                      unseen: false,
                                      hiddenAt: tmp5,
                                      outdatedShown: false,
                                      outdatedBackoff: 0,
                                    };
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
                                const effect = obj3.useEffect(tmp46, tmp48);
                                class D {
                                  constructor() {
                                    function onActivity() {
                                      closure_0 = Date.now();
                                      closure_1_2((arg0) => {
                                        const obj = { now: lastActivityAt, lastActivityAt };
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
                                  }
                                }
                              }
                              class D {
                                constructor() {
                                  function onActivity() {
                                    closure_0 = Date.now();
                                    closure_1_2((arg0) => {
                                      const obj = { now: lastActivityAt, lastActivityAt };
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
                                }
                              }
                              tmp48[0] = nextDueAt;
                              tmp48[1] = tmp34.now;
                              cResult[27] = tmp34.now;
                              cResult[28] = nextDueAt;
                              cResult[29] = tmp48;
                            }
                            const fn = function x() {
                              if (null != nextDueAt) {
                                const _setTimeout = setTimeout;
                                const _Math = Math;
                                const _Date = Date;
                                const timeout = setTimeout(
                                  () =>
                                    closure_1_2((arg0) => {
                                      const obj = { now: Date.now() };
                                      const merged = Object.assign(arg0);
                                      return obj;
                                    }),
                                  Math.max(0, tmp - Date.now()),
                                );
                                return () => clearTimeout(closure_0);
                              }
                            };
                            cResult[24] = nextDueAt;
                            cResult[25] = tmp31;
                            cResult[26] = fn;
                            tmp46 = fn;
                          }
                          class D {
                            constructor() {
                              function onActivity() {
                                closure_0 = Date.now();
                                closure_1_2((arg0) => {
                                  const obj = { now: lastActivityAt, lastActivityAt };
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
                            }
                          }
                          cResult[19] = arg0;
                          cResult[20] = tmp31;
                          cResult[21] = D;
                        }
                        if (tmp34 !== tmp30) {
                          class R {
                            constructor() {
                              let bound;
                              let tmp5;
                              const timestamp = Date.now();
                              const obj = {
                                now: timestamp,
                                visitStartedAt: timestamp,
                                draftTyped: false,
                                lastActivityAt: null,
                                lastMessageAt: bound,
                                seenAt: null,
                                unseen: false,
                                hiddenAt: tmp5,
                                outdatedShown: false,
                                outdatedBackoff: 0,
                              };
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
              const obj2 = {
                projectId: tmp14,
                draftHasText: tmp15,
                publishing: tmp16,
                drift: tmp17,
                messageAt: tmp18,
                visible: tmp3,
              };
              cResult[10] = tmp14;
              cResult[11] = tmp15;
              cResult[12] = tmp16;
              cResult[13] = tmp17;
              cResult[14] = tmp18;
              cResult[15] = tmp3;
              cResult[16] = obj2;
              tmp26 = obj2;
            }
          }
        }
      }
      const atResult = arr.at(-1);
      if (tmp2 != null) {
        class R {
          constructor() {
            let bound;
            let tmp5;
            const timestamp = Date.now();
            const obj = {
              now: timestamp,
              visitStartedAt: timestamp,
              draftTyped: false,
              lastActivityAt: null,
              lastMessageAt: bound,
              seenAt: null,
              unseen: false,
              hiddenAt: tmp5,
              outdatedShown: false,
              outdatedBackoff: 0,
            };
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
        class R {
          constructor() {
            let bound;
            let tmp5;
            const timestamp = Date.now();
            const obj = {
              now: timestamp,
              visitStartedAt: timestamp,
              draftTyped: false,
              lastActivityAt: null,
              lastMessageAt: bound,
              seenAt: null,
              unseen: false,
              hiddenAt: tmp5,
              outdatedShown: false,
              outdatedBackoff: 0,
            };
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
        class D {
          constructor() {
            function onActivity() {
              closure_0 = Date.now();
              closure_1_2((arg0) => {
                const obj = { now: lastActivityAt, lastActivityAt };
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
          }
        }
      }
      let maxResult = null;
      if (null != atResult) {
        class R {
          constructor() {
            let bound;
            let tmp5;
            const timestamp = Date.now();
            const obj = {
              now: timestamp,
              visitStartedAt: timestamp,
              draftTyped: false,
              lastActivityAt: null,
              lastMessageAt: bound,
              seenAt: null,
              unseen: false,
              hiddenAt: tmp5,
              outdatedShown: false,
              outdatedBackoff: 0,
            };
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
        class D {
          constructor() {
            function onActivity() {
              closure_0 = Date.now();
              closure_1_2((arg0) => {
                const obj = { now: lastActivityAt, lastActivityAt };
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
          }
        }
        const created_at = atResult.created_at;
        if (finished_at == null) {
          class R {
            constructor() {
              let bound;
              let tmp5;
              const timestamp = Date.now();
              const obj = {
                now: timestamp,
                visitStartedAt: timestamp,
                draftTyped: false,
                lastActivityAt: null,
                lastMessageAt: bound,
                seenAt: null,
                unseen: false,
                hiddenAt: tmp5,
                outdatedShown: false,
                outdatedBackoff: 0,
              };
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
          class R {
            constructor() {
              let bound;
              let tmp5;
              const timestamp = Date.now();
              const obj = {
                now: timestamp,
                visitStartedAt: timestamp,
                draftTyped: false,
                lastActivityAt: null,
                lastMessageAt: bound,
                seenAt: null,
                unseen: false,
                hiddenAt: tmp5,
                outdatedShown: false,
                outdatedBackoff: 0,
              };
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
        maxResult = max(created_at, finished_at, settled_at);
      }
      cResult[0] = arg2;
      cResult[1] = arr;
      cResult[2] = arg0;
      if (tmp2 != null) {
        class R {
          constructor() {
            let bound;
            let tmp5;
            const timestamp = Date.now();
            const obj = {
              now: timestamp,
              visitStartedAt: timestamp,
              draftTyped: false,
              lastActivityAt: null,
              lastMessageAt: bound,
              seenAt: null,
              unseen: false,
              hiddenAt: tmp5,
              outdatedShown: false,
              outdatedBackoff: 0,
            };
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
        class R {
          constructor() {
            let bound;
            let tmp5;
            const timestamp = Date.now();
            const obj = {
              now: timestamp,
              visitStartedAt: timestamp,
              draftTyped: false,
              lastActivityAt: null,
              lastMessageAt: bound,
              seenAt: null,
              unseen: false,
              hiddenAt: tmp5,
              outdatedShown: false,
              outdatedBackoff: 0,
            };
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
        class D {
          constructor() {
            function onActivity() {
              closure_0 = Date.now();
              closure_1_2((arg0) => {
                const obj = { now: lastActivityAt, lastActivityAt };
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
      tmp17 = tmp25;
      tmp16 = tmp24;
      tmp15 = arg2;
      tmp14 = arg0;
    }
  : (projectId, arr, draftHasText) => {
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
      const f126057 = () => {
        let bound;
        let tmp5;
        const timestamp = Date.now();
        obj = {
          now: timestamp,
          visitStartedAt: timestamp,
          draftTyped: false,
          lastActivityAt: null,
          lastMessageAt: bound,
          seenAt: null,
          unseen: false,
          hiddenAt: tmp5,
          outdatedShown: false,
          outdatedBackoff: 0,
        };
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
      const f126058 = (backoffDelaysMs) => {
        let idleDelayMs;
        obj = { idleDelayMs, eligible: null != obj3 && backoffDelaysMs.eligible(tmp4) };
        const merged = Object.assign(backoffDelaysMs);
        backoffDelaysMs = backoffDelaysMs.backoffDelaysMs;
        idleDelayMs = undefined;
        if (backoffDelaysMs != null) {
          idleDelayMs = backoffDelaysMs[outdatedBackoff.outdatedBackoff];
        }
        if (idleDelayMs == null) {
          idleDelayMs = backoffDelaysMs.idleDelayMs;
        }
        null != obj3 && backoffDelaysMs.eligible(tmp4);
        return obj;
      };
      let closure_0 = projectId;
      let tmp = obj(16614)(projectId);
      let diff = arr.length - 1;
      let tmp4 = null;
      const tmp2 = obj(16144)();
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
      obj = {
        projectId,
        draftHasText,
        publishing: true === publishing,
        drift: "changes" === state,
        messageAt: maxResult,
        visible: tmp2,
      };
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
      [tmp15, tmp16] = obj3.useState(f126057);
      dependencyMap = tmp16;
      _slicedToArray(obj3.useState(f126057), 2);
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
      ({ shown, nextDueAt } = selectConjureReminder(items1.map(f126058), tmp17));
      selectConjureReminder(items1.map(f126058), tmp17);
      if ("outdated" === shown) {
        if (!tmp17.outdatedShown) {
          const obj4 = { outdatedShown: true };
          let merged = Object.assign(tmp17);
          tmp16(obj4);
        }
        items = [projectId];
        const effect = obj2.useEffect(function () {
          function onActivity() {
            let closure_0 = Date.now();
            closure_1_2((arg0) => {
              obj = { now: lastActivityAt, lastActivityAt };
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
            const timeout = setTimeout(
              () =>
                closure_1_2((arg0) => {
                  obj = { now: Date.now() };
                  const merged = Object.assign(arg0);
                  return obj;
                }),
              Math.max(0, tmp - Date.now()),
            );
            return () => clearTimeout(closure_0);
          }
        }, items1);
        return shown;
      }
      if (tmp17 !== tmp15) {
        tmp16(tmp17);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (key) => {
      let arr2;
      let first;
      let items2;
      let tmp13;
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
        const mapped = found1.map(f126052);
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
          const fn = function u(leaving) {
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
        class A {
          constructor() {
            if (closure_1) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 180;
              closure_0 = setTimeout(
                () =>
                  closure_0(() => {
                    /* body not rendered: F153484 */
                  }),
                180,
              );
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        cResult[4] = tmp13;
        cResult[5] = A;
      } else {
        class A {
          constructor() {
            if (closure_1) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 180;
              closure_0 = setTimeout(
                () =>
                  closure_0(() => {
                    /* body not rendered: F153484 */
                  }),
                180,
              );
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
      }
      if (cResult[6] === tmp13) {
        class A {
          constructor() {
            if (closure_1) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 180;
              closure_0 = setTimeout(
                () =>
                  closure_0(() => {
                    /* body not rendered: F153484 */
                  }),
                180,
              );
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const effect = react.useEffect(A, items2);
        return arr2;
      }
      items2 = [tmp13, arr2];
      cResult[6] = tmp13;
      cResult[7] = arr2;
      cResult[8] = items2;
    }
  : (key) => {
      let arr;
      let tmp3;
      const f126065 = (leaving) => leaving.leaving;
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
        const mapped = found1.map(f126052);
        let tmp7 = mapped;
        if (null != key) {
          items = [];
          let obj2 = { key, leaving: false };
          items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj2;
          tmp7 = items;
        }
        tmp3(tmp7);
      }
      items1 = [arr.some(f126065), arr];
      arr.some(f126065);
      const effect = react.useEffect(() => {
        if (closure_1) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_0((arr) => arr.filter((leaving) => !leaving.leaving)), 180);
          return () => clearTimeout(closure_0);
        }
      }, items1);
      return arr;
    };
function reminderSlotTurn(View) {
  let diff = View.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = View[diff];
      if ("publish_notice" !== tmp2.kind) {
        if ("user" === tmp2.role) {
          break;
        } else if (metroRequire(tmp2)) {
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
  let tmp =
    null != awaitingUser.awaitingUser || null != awaitingUser.secretRequest || null != awaitingUser.settingsRequest;
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
  const mapped = found.map(f126052);
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
