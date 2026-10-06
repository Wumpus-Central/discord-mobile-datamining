// === Module 9291: EditGuildEventDetails ===

// Module 9291 (EditGuildEventDetails)
import intl8 from "intl" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import _modDef4467 from "module_4467" /* 4467 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9214 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let metroImportAll;
function assertGuildEventDetailsValid(guildEvent) {
  if (0 === guildEvent.name.length) {
    const _Error = Error;
    const intl = intl8.intl;
    const self = this;
    const self2 = this;
    const error = new Error(intl.string(intl8.t.GoV0uR));
    throw error;
  }
}
let react = react_mod;
let closure_6 = GuildScheduledEventStore.isGuildScheduledEventActive;
let constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ error: { paddingVertical: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildEvent) => {
  let addResult3;
  let closure_5;
  let description;
  let entityType;
  let initialGuildEvent;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  let items;
  let items1;
  let name;
  let onChange;
  let scheduledEndTime;
  let scheduledStartTime;
  let tmp33;
  let tmp5;
  const tmp = guildEvent;
  let obj = guildEvent(scheduledEndTime[8]);
  const cResult = obj.c(75);
  guildEvent = guildEvent.guildEvent;
  ({ initialGuildEvent, onChange } = guildEvent);
  const tmp4 = closure_11();
  ({ name, description, entityType, scheduledStartTime } = guildEvent);
  scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  if (cResult[0] !== scheduledStartTime) {
    const tmp7 = onChange(scheduledEndTime[9])(scheduledStartTime);
    cResult[0] = scheduledStartTime;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  react = tmp5;
  if (cResult[2] === scheduledEndTime) {
    let tmp8;
    if (cResult[3] === scheduledStartTime) {
      tmp8 = cResult[4];
    }
    const before = tmp8;
    if (cResult[5] === recurrenceRule) {
      let tmp10;
      let tmp15;
      let tmp18;
      let tmp21;
      let tmp24;
      let tmp29;
      if (cResult[6] === scheduledStartTime) {
        tmp10 = cResult[7];
      }
      const tmp12 = recurrenceRule(react.useState(tmp10), 2);
      const first = tmp12[0];
      let closure_8 = tmp12[1];
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = onChange(scheduledEndTime[9])();
        cResult[8] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        let obj4 = onChange(tmp2[9])();
        let addResult = obj4.add(tmp(tmp2[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
        cResult[9] = addResult;
        tmp18 = addResult;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] !== tmp5) {
        const obj5 = onChange(scheduledEndTime[9])(tmp5);
        const addResult1 = obj5.add(15, "minutes");
        cResult[10] = tmp5;
        cResult[11] = addResult1;
        tmp21 = addResult1;
      } else {
        tmp21 = cResult[11];
      }
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = onChange(scheduledEndTime[9])();
        const addResult2 = obj6.add(tmp(scheduledEndTime[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
        cResult[12] = addResult2;
        tmp24 = addResult2;
      } else {
        tmp24 = cResult[12];
      }
      const ref = obj3.useRef(null);
      if (cResult[13] !== initialGuildEvent) {
        const tmp31 = before(initialGuildEvent);
        cResult[13] = initialGuildEvent;
        cResult[14] = tmp31;
        tmp29 = tmp31;
      } else {
        tmp29 = cResult[14];
      }
      let closure_10 = tmp29;
      [tmp33, closure_11] = recurrenceRule(react.useState(null), 2);
      recurrenceRule(react.useState(null), 2);
      const tmpResult = tmp(scheduledEndTime[11]);
      navigation = tmpResult.useNavigation();
      if (cResult[15] === guildEvent) {
        let tmp35;
        let tmp36;
        if (cResult[16] === navigation) {
          tmp35 = cResult[17];
        }
        if (cResult[18] !== onChange) {
          const fn2 = function $(arg0) {
            closure_11(null);
            onChange(arg0);
          };
          cResult[18] = onChange;
          cResult[19] = fn2;
          tmp36 = fn2;
        } else {
          tmp36 = cResult[19];
        }
        let closure_13 = tmp36;
        if (cResult[20] === tmp8) {
          if (cResult[21] === tmp36) {
            if (cResult[22] === tmp29) {
              if (cResult[23] === first) {
                let tmp37;
                let tmp38;
                if (cResult[24] === scheduledEndTime) {
                  tmp37 = cResult[25];
                }
                if (cResult[26] !== tmp36) {
                  function ie(toISOString) {
                    const obj = { scheduledEndTime: toISOString.toISOString() };
                    closure_13(obj);
                  }
                  cResult[26] = tmp36;
                  cResult[27] = ie;
                  tmp38 = ie;
                } else {
                  tmp38 = cResult[27];
                }
                if (cResult[28] === onChange) {
                  let tmp39;
                  if (cResult[29] === tmp5) {
                    tmp39 = cResult[30];
                  }
                  if (cResult[31] === tmp33) {
                    let tmp40;
                    let tmp42;
                    if (cResult[32] === tmp4) {
                      tmp40 = cResult[33];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl = tmp(tmp2[6]).intl;
                      const stringResult = intl.string(tmp(scheduledEndTime[6]).t.PDTjLN);
                      cResult[34] = stringResult;
                      tmp42 = stringResult;
                    } else {
                      tmp42 = cResult[34];
                    }
                    if (cResult[35] === tmp35) {
                      let tmp45;
                      if (cResult[36] === null != tmp33) {
                        tmp45 = cResult[37];
                      }
                      if (cResult[38] === tmp40) {
                        let tmp48;
                        let tmp52;
                        let tmp53;
                        let tmp58;
                        if (cResult[39] === tmp45) {
                          tmp48 = cResult[40];
                        }
                        const _Symbol5 = Symbol;
                        if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                          function ve() {
                            const timerId = setTimeout(() => {
                              if (null != ref.current) {
                                const current = ref.current;
                                current.scrollToEnd();
                              }
                            }, 100);
                          }
                          cResult[41] = ve;
                          tmp52 = ve;
                        } else {
                          tmp52 = cResult[41];
                        }
                        const _Symbol6 = Symbol;
                        if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj7 = { title: intl2.string(tmp(scheduledEndTime[6]).t.GG6vbr), subtitle: intl3.string(tmp(scheduledEndTime[6]).t.q5lgwV) };
                          const tmp56 = onChange(scheduledEndTime[17]);
                          intl2 = tmp(tmp2[6]).intl;
                          intl3 = tmp(tmp2[6]).intl;
                          const tmp57 = closure_8(tmp56, obj7);
                          cResult[42] = tmp57;
                          tmp53 = tmp57;
                        } else {
                          tmp53 = cResult[42];
                        }
                        if (cResult[43] !== tmp36) {
                          function he(name) {
                            const obj = { name };
                            return closure_13(obj);
                          }
                          cResult[43] = tmp36;
                          cResult[44] = he;
                          tmp58 = he;
                        } else {
                          tmp58 = cResult[44];
                        }
                        if (cResult[45] === name) {
                          let tmp59;
                          let tmp63;
                          let tmp62;
                          if (cResult[46] === tmp58) {
                            tmp59 = cResult[47];
                          }
                          const _Symbol7 = Symbol;
                          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(tmp2[6]).intl;
                            const stringResult1 = intl4.string(tmp(scheduledEndTime[6]).t.kKOIwJ);
                            const intl5 = tmp(tmp2[6]).intl;
                            const stringResult2 = intl5.string(tmp(scheduledEndTime[6]).t["6dGmCD"]);
                            cResult[48] = stringResult1;
                            cResult[49] = stringResult2;
                            tmp63 = stringResult2;
                            tmp62 = stringResult1;
                          } else {
                            tmp62 = cResult[48];
                            tmp63 = cResult[49];
                          }
                          if (cResult[50] === tmp37) {
                            if (cResult[51] === tmp29) {
                              let tmp66;
                              if (cResult[52] === tmp5) {
                                tmp66 = cResult[53];
                              }
                              if (cResult[54] === tmp8) {
                                if (cResult[55] === entityType) {
                                  if (cResult[56] === tmp38) {
                                    let tmp69;
                                    if (cResult[57] === tmp21) {
                                      tmp69 = cResult[58];
                                    }
                                    if (cResult[59] === tmp39) {
                                      if (cResult[60] === recurrenceRule) {
                                        let tmp72;
                                        if (cResult[61] === tmp5) {
                                          tmp72 = cResult[62];
                                        }
                                        if (description == null) {
                                          description = "";
                                        }
                                        if (cResult[63] !== tmp36) {
                                          class Ae {
                                            constructor(description) {
                                              const obj = { description };
                                              return closure_13(obj);
                                            }
                                          }
                                          cResult[63] = tmp36;
                                          cResult[64] = Ae;
                                        } else {
                                          class Ae {
                                            constructor(description) {
                                              const obj = { description };
                                              return closure_13(obj);
                                            }
                                          }
                                        }
                                        if (cResult[65] === description) {
                                          class Ae {
                                            constructor(description) {
                                              const obj = { description };
                                              return closure_13(obj);
                                            }
                                          }
                                          if (cResult[68] === tmp48) {
                                            class Ae {
                                              constructor(description) {
                                                const obj = { description };
                                                return closure_13(obj);
                                              }
                                            }
                                          }
                                          const obj8 = { action: tmp48, ref, children: items };
                                          items = [tmp53, tmp59, tmp66, tmp69, tmp72, tmp76];
                                          cResult[68] = tmp48;
                                          cResult[69] = tmp59;
                                          cResult[70] = tmp66;
                                          cResult[71] = tmp69;
                                          cResult[72] = tmp72;
                                          cResult[73] = tmp76;
                                          cResult[74] = closure_10(onChange(scheduledEndTime[19]), obj8);
                                          const tmp82 = closure_10(onChange(scheduledEndTime[19]), obj8);
                                        }
                                        const obj9 = { description, onChange: Ae, onFocus: tmp52 };
                                        cResult[65] = description;
                                        cResult[66] = Ae;
                                        cResult[67] = closure_8(tmp(scheduledEndTime[18]).GuildEventDescription, obj9);
                                        const tmp78 = closure_8(tmp(scheduledEndTime[18]).GuildEventDescription, obj9);
                                      }
                                    }
                                    const obj10 = { startDate: tmp5, recurrenceRule, onRecurrenceChange: tmp39 };
                                    const tmp74 = closure_8(tmp(scheduledEndTime[18]).GuildEventRecurrence, obj10);
                                    cResult[59] = tmp39;
                                    cResult[60] = recurrenceRule;
                                    cResult[61] = tmp5;
                                    cResult[62] = tmp74;
                                    tmp72 = tmp74;
                                  }
                                }
                              }
                              let tmp71 = entityType === first.EXTERNAL;
                              if (tmp71) {
                                class Ae {
                                  constructor(description) {
                                    const obj = { description };
                                    return closure_13(obj);
                                  }
                                }
                                const obj11 = { date: tmp8, onChange: tmp38, minimumDate: tmp21, maximumDate: tmp24, dateLabel: intl6.string(tmp(scheduledEndTime[6]).t.CTLgZJ), timeLabel: intl7.string(tmp(scheduledEndTime[6]).t.j2RuXF) };
                                const GuildEventDatetime = tmp(tmp2[18]).GuildEventDatetime;
                                intl6 = tmp(tmp2[6]).intl;
                                intl7 = tmp(tmp2[6]).intl;
                                tmp71 = closure_8(GuildEventDatetime, obj11);
                              }
                              cResult[54] = tmp8;
                              cResult[55] = entityType;
                              cResult[56] = tmp38;
                              cResult[57] = tmp21;
                              cResult[58] = tmp71;
                              tmp69 = tmp71;
                            }
                          }
                          const obj12 = { date: tmp5, onChange: tmp37, disabled: tmp29, minimumDate: tmp15, maximumDate: tmp18, dateLabel: tmp62, timeLabel: tmp63 };
                          const tmp68 = closure_8(tmp(scheduledEndTime[18]).GuildEventDatetime, obj12);
                          cResult[50] = tmp37;
                          cResult[51] = tmp29;
                          cResult[52] = tmp5;
                          cResult[53] = tmp68;
                          tmp66 = tmp68;
                        }
                        const obj13 = { topic: name, onChange: tmp58 };
                        const tmp61 = closure_8(tmp(scheduledEndTime[18]).GuildEventTopic, obj13);
                        cResult[45] = name;
                        cResult[46] = tmp58;
                        cResult[47] = tmp61;
                        tmp59 = tmp61;
                      }
                      const obj14 = { children: items1 };
                      items1 = [tmp40, tmp45];
                      const tmp51 = closure_10(ref, obj14);
                      cResult[38] = tmp40;
                      cResult[39] = tmp45;
                      cResult[40] = tmp51;
                      tmp48 = tmp51;
                    }
                    const obj15 = { text: tmp42, variant: "primary", onPress: tmp35, disabled: null != tmp33 };
                    const tmp47 = closure_8(tmp(scheduledEndTime[16]).Button, obj15);
                    cResult[35] = tmp35;
                    cResult[36] = null != tmp33;
                    cResult[37] = tmp47;
                    tmp45 = tmp47;
                  }
                  let tmp41 = null;
                  if (null != tmp33) {
                    class Ae {
                      constructor(description) {
                        const obj = { description };
                        return closure_13(obj);
                      }
                    }
                    const obj16 = { style: tmp4.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp33 };
                    tmp41 = closure_8(tmp(tmp2[15]).Text, obj16);
                  }
                  cResult[31] = tmp33;
                  cResult[32] = tmp4;
                  cResult[33] = tmp41;
                  tmp40 = tmp41;
                }
                function le(c7) {
                  let obj;
                  if (null != closure_5) {
                    const obj2 = { recurrenceRule: obj.recurrenceOptionToRecurrenceRule(c7, tmp) };
                    obj = ScheduleUtils;
                    onChange(obj2);
                    closure_8(c7);
                  }
                }
                cResult[28] = onChange;
                cResult[29] = tmp5;
                cResult[30] = le;
                tmp39 = le;
              }
            }
          }
        }
        function ne(toISOString) {
          if (closure_10) {
            const intl = intl8.intl;
            return closure_11(intl.string(intl8.t.nKIaRG));
          } else {
            const obj = { scheduledStartTime: toISOString.toISOString() };
            const isBeforeResult = null != scheduledEndTime && before.isBefore(toISOString);
            if (isBeforeResult) {
              const obj2 = _modDef4467(toISOString);
              const addResult = obj2.add(1, "hour");
              obj.scheduledEndTime = addResult.toISOString();
            }
            const tmp9 = null != toISOString && null != first;
            if (tmp9) {
              const obj4 = ScheduleUtils;
              obj.recurrenceRule = obj4.recurrenceOptionToRecurrenceRule(first, toISOString);
            }
            closure_13(obj);
          }
        }
        cResult[20] = tmp8;
        cResult[21] = tmp36;
        cResult[22] = tmp29;
        cResult[23] = first;
        cResult[24] = scheduledEndTime;
        cResult[25] = ne;
        tmp37 = ne;
      }
      class Y {
        constructor() {
          const obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          try {
            closure_11(null);
            assertGuildEventDetailsValid(guildEvent);
            navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
          } catch (tmp12) {
            closure_11(tmp12.message);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(tmp12.message);
          }
        }
      }
      cResult[15] = guildEvent;
      cResult[16] = navigation;
      cResult[17] = Y;
      tmp35 = Y;
    }
    const fn = function x() {
      const obj = ScheduleUtils;
      return obj.recurrenceRuleToOption(_modDef4467(scheduledStartTime), recurrenceRule);
    };
    cResult[5] = recurrenceRule;
    cResult[6] = scheduledStartTime;
    cResult[7] = fn;
    tmp10 = fn;
  }
  if (null != scheduledEndTime) {
    class Ae {
      constructor(description) {
        const obj = { description };
        return closure_13(obj);
      }
    }
    addResult3 = onChange(tmp2[9])(scheduledEndTime);
  } else {
    class Ae {
      constructor(description) {
        const obj = { description };
        return closure_13(obj);
      }
    }
    let obj2 = onChange(tmp2[9])(scheduledStartTime);
    addResult3 = obj2.add(1, "hour");
  }
  cResult[2] = scheduledEndTime;
  cResult[3] = scheduledStartTime;
  cResult[4] = addResult3;
  tmp8 = addResult3;
}) : ((guildEvent) => {
  let _undefined;
  let _undefined2;
  let c11;
  let c7;
  let c8;
  let description;
  let entityType;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let items4;
  let name;
  let scheduledStartTime;
  let tmp12;
  const f100175 = () => {
    const obj = ScheduleUtils;
    return obj.recurrenceRuleToOption(_modDef4467(scheduledStartTime), recurrenceRule);
  };
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  constants = undefined;
  c8 = undefined;
  c11 = undefined;
  const initialGuildEvent = guildEvent.initialGuildEvent;
  ({ description, scheduledStartTime } = guildEvent);
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  const tmp = c11();
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef4467(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    let addResult;
    if (null != scheduledEndTime) {
      addResult = _modDef4467(tmp);
    } else {
      const obj = _modDef4467(scheduledStartTime);
      addResult = obj.add(1, "hour");
    }
    return addResult;
  }, items1);
  [c7, c8] = recurrenceRule(memo.useState(f100175), 2);
  const tmp4 = recurrenceRule(memo.useState(f100175), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[9])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[9])();
    return obj.add(guildEvent(scheduledEndTime[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  }, []);
  const memo4 = memo.useMemo(() => {
    const obj = _modDef4467(memo);
    return obj.add(15, "minutes");
  }, items2);
  const memo5 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[9])();
    return obj.add(guildEvent(scheduledEndTime[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  }, []);
  const ref = memo.useRef(null);
  const tmp10 = memo1(initialGuildEvent);
  let closure_10 = tmp10;
  [tmp12, c11] = recurrenceRule(memo.useState(null), 2);
  recurrenceRule(memo.useState(null), 2);
  let obj = guildEvent(scheduledEndTime[11]);
  navigation = obj.useNavigation();
  let tmp17 = null;
  const tmp16 = ref;
  if (null != tmp12) {
    let obj2 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp17 = c8(tmp13(tmp14[15]).Text, obj2);
  }
  const obj3 = { children: items3 };
  items3 = [tmp17, ];
  let obj4 = {
    text: intl.string(guildEvent(tmp14[6]).t.PDTjLN),
    variant: "primary",
    onPress() {
      const obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      try {
        _undefined2(null);
        assertGuildEventDetailsValid(guildEvent);
        navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
      } catch (tmp12) {
        _undefined2(tmp12.message);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(tmp12.message);
      }
    },
    disabled: null != tmp12
  };
  const Button = tmp13(tmp14[16]).Button;
  intl = tmp13(tmp14[6]).intl;
  items3[1] = c8(Button, obj4);
  const obj5 = { action: closure_10(tmp16, obj3), ref, children: items4 };
  const obj6 = { title: intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr), subtitle: intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV) };
  const tmp21 = onChange(scheduledEndTime[19]);
  const tmp22 = onChange(scheduledEndTime[17]);
  intl2 = tmp13(tmp14[6]).intl;
  intl3 = tmp13(tmp14[6]).intl;
  items4 = [c8(tmp22, obj6), , , , , ];
  const obj7 = {
    topic: name,
    onChange(name) {
      const obj = { name };
      _undefined2(null);
      onChange(obj);
    }
  };
  items4[1] = c8(guildEvent(scheduledEndTime[18]).GuildEventTopic, obj7);
  const obj8 = {
    date: memo,
    onChange(toISOString) {
      if (closure_10) {
        const intl = intl8.intl;
        return _undefined2(intl.string(intl8.t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: toISOString.toISOString() };
        const isBeforeResult = null != scheduledEndTime && memo1.isBefore(toISOString);
        if (isBeforeResult) {
          const obj2 = _modDef4467(toISOString);
          const addResult = obj2.add(1, "hour");
          obj.scheduledEndTime = addResult.toISOString();
        }
        const tmp9 = null != toISOString && null != c7;
        if (tmp9) {
          const obj4 = ScheduleUtils;
          obj.recurrenceRule = obj4.recurrenceOptionToRecurrenceRule(c7, toISOString);
        }
        _undefined2(null);
        onChange(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ),
    timeLabel: intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp13(tmp14[18]).GuildEventDatetime;
  intl4 = tmp13(tmp14[6]).intl;
  intl5 = tmp13(tmp14[6]).intl;
  items4[2] = c8(GuildEventDatetime, obj8);
  let tmp19Result = entityType === constants.EXTERNAL;
  if (tmp19Result) {
    const obj9 = {
      date: memo1,
      onChange(toISOString) {
          const obj = { scheduledEndTime: toISOString.toISOString() };
          _undefined2(null);
          onChange(obj);
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: intl6.string(guildEvent(scheduledEndTime[6]).t.CTLgZJ),
      timeLabel: intl7.string(guildEvent(scheduledEndTime[6]).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp13(tmp14[18]).GuildEventDatetime;
    intl6 = tmp13(tmp14[6]).intl;
    intl7 = tmp13(tmp14[6]).intl;
    tmp19Result = tmp19(GuildEventDatetime2, obj9);
  }
  items4[3] = tmp19Result;
  const obj10 = {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange(c7) {
      let obj;
      if (null != memo) {
        const obj2 = { recurrenceRule: obj.recurrenceOptionToRecurrenceRule(c7, tmp) };
        obj = ScheduleUtils;
        onChange(obj2);
        _undefined(c7);
      }
    }
  };
  items4[4] = c8(guildEvent(scheduledEndTime[18]).GuildEventRecurrence, obj10);
  const GuildEventDescription = tmp13(tmp14[18]).GuildEventDescription;
  if (description == null) {
    description = "";
  }
  const obj11 = {
    description,
    onChange(description) {
      const obj = { description };
      _undefined2(null);
      onChange(obj);
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  items4[5] = c8(GuildEventDescription, obj11);
  return closure_10(tmp21, obj5);
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default tmp3;