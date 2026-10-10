// === Module 8646: EditGuildEventDetails ===

// Module 8646 (EditGuildEventDetails)
import util from "util" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1894 */;
import _modDef4702 from "module_4702" /* 4702 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8519 */;
import ScheduleUtils from "ScheduleUtils" /* 8520 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function assertGuildEventDetailsValid(guildEvent) {
  if (0 === guildEvent.name.length) {
    const _Error = Error;
    const intl = util.intl;
    const error = new Error(intl.string(util.t.GoV0uR));
    throw error;
  }
}
let closure_6 = fn(6054).isGuildScheduledEventActive;
let constants = fn(2071).GuildScheduledEventEntityTypes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles({ error: { paddingVertical: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildEventDetails(guildEvent) {
  const cResult = guildEvent(scheduledEndTime[8]).c(75);
  guildEvent = guildEvent.guildEvent;
  ({ initialGuildEvent, onChange } = guildEvent);
  const tmp4 = closure_11();
  ({ name, description, entityType, scheduledStartTime } = guildEvent);
  scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  if (cResult[0] !== scheduledStartTime) {
    const tmp7 = onChange(tmp2[9])(scheduledStartTime);
    cResult[0] = scheduledStartTime;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  noop = tmp5;
  if (cResult[2] === scheduledEndTime) {
    if (cResult[3] === scheduledStartTime) {
      const before = tmp8;
      if (cResult[5] === recurrenceRule) {
        if (cResult[6] === scheduledStartTime) {
          let tmp10 = cResult[7];
        }
        const tmp12 = recurrenceRule(noop.useState(tmp10), 2);
        const first = tmp12[0];
        closure_8 = tmp12[1];
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = onChange(tmp2[9])();
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let addResult = onChange(tmp2[9])().add(tmp(tmp2[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
          cResult[9] = addResult;
          let tmp18 = addResult;
          let obj4 = onChange(tmp2[9])();
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] !== tmp5) {
          const addResult1 = onChange(tmp2[9])(tmp5).add(15, "minutes");
          cResult[10] = tmp5;
          cResult[11] = addResult1;
          let tmp21 = addResult1;
          const obj5 = onChange(tmp2[9])(tmp5);
        } else {
          tmp21 = cResult[11];
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const addResult2 = onChange(tmp2[9])().add(tmp(tmp2[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
          cResult[12] = addResult2;
          let tmp24 = addResult2;
          const obj6 = onChange(tmp2[9])();
        } else {
          tmp24 = cResult[12];
        }
        const ref = noop.useRef(null);
        if (cResult[13] !== initialGuildEvent) {
          const tmp31 = before(initialGuildEvent);
          cResult[13] = initialGuildEvent;
          cResult[14] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[14];
        }
        closure_10 = tmp29;
        [tmp33, closure_11] = recurrenceRule(noop.useState(null), 2);
        const tmp11Result = recurrenceRule(noop.useState(null), 2);
        const navigation = tmp(tmp2[11]).useNavigation();
        if (cResult[15] === guildEvent) {
          if (cResult[16] === navigation) {
            let tmp35 = cResult[17];
          }
          if (cResult[18] !== onChange) {
            function handleChangeEvent(arg0) {
              closure_1_11(null);
              onChange(arg0);
            }
            cResult[18] = onChange;
            cResult[19] = handleChangeEvent;
            let tmp36 = handleChangeEvent;
          } else {
            tmp36 = cResult[19];
          }
          closure_13 = tmp36;
          if (cResult[20] === tmp8) {
            if (cResult[21] === tmp36) {
              if (cResult[22] === tmp29) {
                if (cResult[23] === first) {
                  if (cResult[24] === scheduledEndTime) {
                    let tmp37 = cResult[25];
                  }
                  if (cResult[26] !== tmp36) {
                    function handleChangeEventEndTime(toISOString) {
                      closure_13({ scheduledEndTime: toISOString.toISOString() });
                    }
                    cResult[26] = tmp36;
                    cResult[27] = handleChangeEventEndTime;
                    let tmp38 = handleChangeEventEndTime;
                  } else {
                    tmp38 = cResult[27];
                  }
                  if (cResult[28] === onChange) {
                    if (cResult[29] === tmp5) {
                      let tmp39 = cResult[30];
                    }
                    if (cResult[31] === tmp33) {
                      if (cResult[32] === tmp4) {
                        let tmp40 = cResult[33];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                        let intl = tmp(tmp2[6]).intl;
                        const stringResult = intl.string(tmp(tmp2[6]).t.PDTjLN);
                        cResult[34] = stringResult;
                        let tmp42 = stringResult;
                      } else {
                        tmp42 = cResult[34];
                      }
                      if (cResult[35] === tmp35) {
                        if (cResult[36] === tmp44) {
                          let tmp45 = cResult[37];
                        }
                        if (cResult[38] === tmp40) {
                          if (cResult[39] === tmp45) {
                            let tmp48 = cResult[40];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                            function onFocus() {
                              const timerId = setTimeout(() => {
                                if (null != ref.current) {
                                  const current = ref.current;
                                  current.scrollToEnd();
                                }
                              }, 100);
                            }
                            cResult[41] = onFocus;
                            let tmp52 = onFocus;
                          } else {
                            tmp52 = cResult[41];
                          }
                          const _Symbol6 = Symbol;
                          if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj7 = { title: null, subtitle: null };
                            const intl2 = tmp(tmp2[6]).intl;
                            obj7.title = intl2.string(tmp(tmp2[6]).t.GG6vbr);
                            const intl3 = tmp(tmp2[6]).intl;
                            obj7.subtitle = intl3.string(tmp(tmp2[6]).t.q5lgwV);
                            const tmp57 = closure_8(onChange(tmp2[17]), obj7);
                            cResult[42] = tmp57;
                            let tmp53 = tmp57;
                            const tmp56 = onChange(tmp2[17]);
                          } else {
                            tmp53 = cResult[42];
                          }
                          if (cResult[43] !== tmp36) {
                            function ge(name) {
                              return closure_13({ name });
                            }
                            cResult[43] = tmp36;
                            cResult[44] = ge;
                            let tmp58 = ge;
                          } else {
                            tmp58 = cResult[44];
                          }
                          if (cResult[45] === name) {
                            if (cResult[46] === tmp58) {
                              let tmp59 = cResult[47];
                            }
                            const _Symbol7 = Symbol;
                            if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl4 = tmp(tmp2[6]).intl;
                              const stringResult1 = intl4.string(tmp(tmp2[6]).t.kKOIwJ);
                              const intl5 = tmp(tmp2[6]).intl;
                              const stringResult2 = intl5.string(tmp(tmp2[6]).t["6dGmCD"]);
                              cResult[48] = stringResult1;
                              cResult[49] = stringResult2;
                              let tmp63 = stringResult2;
                              let tmp62 = stringResult1;
                            } else {
                              tmp62 = cResult[48];
                              tmp63 = cResult[49];
                            }
                            if (cResult[50] === tmp37) {
                              if (cResult[51] === tmp29) {
                                if (cResult[52] === tmp5) {
                                  let tmp66 = cResult[53];
                                }
                                if (cResult[54] === tmp8) {
                                  if (cResult[55] === entityType) {
                                    if (cResult[56] === tmp38) {
                                      if (cResult[57] === tmp21) {
                                        let tmp69 = cResult[58];
                                      }
                                      if (cResult[59] === tmp39) {
                                        if (cResult[60] === recurrenceRule) {
                                          if (cResult[61] === tmp5) {
                                            let tmp72 = cResult[62];
                                          }
                                          if (description == null) {
                                            description = "";
                                          }
                                          if (cResult[63] !== tmp36) {
                                            class Ae {
                                              constructor(arg0) {
                                                obj = { description: guildEvent };
                                                return closure_13(obj);
                                              }
                                            }
                                            cResult[63] = tmp36;
                                            cResult[64] = Ae;
                                          } else {
                                            class Ae {
                                              constructor(arg0) {
                                                obj = { description: guildEvent };
                                                return closure_13(obj);
                                              }
                                            }
                                          }
                                          if (cResult[65] === description) {
                                            class Ae {
                                              constructor(arg0) {
                                                obj = { description: guildEvent };
                                                return closure_13(obj);
                                              }
                                            }
                                            if (cResult[68] === tmp48) {
                                              class Ae {
                                                constructor(arg0) {
                                                  obj = { description: guildEvent };
                                                  return closure_13(obj);
                                                }
                                              }
                                            }
                                            const obj8 = { action: tmp48, ref, children: null };
                                            const items = [tmp53, tmp59, tmp66, tmp69, tmp72, tmp76];
                                            obj8.children = items;
                                            const tmp82 = closure_10(onChange(tmp2[19]), obj8);
                                            cResult[68] = tmp48;
                                            cResult[69] = tmp59;
                                            cResult[70] = tmp66;
                                            cResult[71] = tmp69;
                                            cResult[72] = tmp72;
                                            cResult[73] = tmp76;
                                            cResult[74] = tmp82;
                                          }
                                          const obj9 = { description, onChange: Ae, onFocus: tmp52 };
                                          const tmp78 = closure_8(tmp(tmp2[18]).GuildEventDescription, obj9);
                                          cResult[65] = description;
                                          cResult[66] = Ae;
                                          cResult[67] = tmp78;
                                        }
                                      }
                                      const obj10 = { startDate: tmp5, recurrenceRule, onRecurrenceChange: tmp39 };
                                      const tmp74 = closure_8(tmp(tmp2[18]).GuildEventRecurrence, obj10);
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
                                    constructor(arg0) {
                                      obj = { description: guildEvent };
                                      return closure_13(obj);
                                    }
                                  }
                                  const obj11 = { date: tmp8, onChange: tmp38, minimumDate: tmp21, maximumDate: tmp24, dateLabel: null, timeLabel: null };
                                  const intl6 = tmp(tmp2[6]).intl;
                                  obj11.dateLabel = intl6.string(tmp(tmp2[6]).t.CTLgZJ);
                                  const intl7 = tmp(tmp2[6]).intl;
                                  obj11.timeLabel = intl7.string(tmp(tmp2[6]).t.j2RuXF);
                                  tmp71 = closure_8(tmp(tmp2[18]).GuildEventDatetime, obj11);
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
                            const tmp68 = closure_8(tmp(tmp2[18]).GuildEventDatetime, obj12);
                            cResult[50] = tmp37;
                            cResult[51] = tmp29;
                            cResult[52] = tmp5;
                            cResult[53] = tmp68;
                            tmp66 = tmp68;
                          }
                          const obj13 = { topic: name, onChange: tmp58 };
                          const tmp61 = closure_8(tmp(tmp2[18]).GuildEventTopic, obj13);
                          cResult[45] = name;
                          cResult[46] = tmp58;
                          cResult[47] = tmp61;
                          tmp59 = tmp61;
                        }
                        const obj14 = { children: null };
                        const items1 = [tmp40, tmp45];
                        obj14.children = items1;
                        const tmp51 = closure_10(ref, obj14);
                        cResult[38] = tmp40;
                        cResult[39] = tmp45;
                        cResult[40] = tmp51;
                        tmp48 = tmp51;
                      }
                      const obj15 = { text: tmp42, variant: "primary", onPress: tmp35, disabled: null != tmp33 };
                      const tmp47 = closure_8(tmp(tmp2[16]).Button, obj15);
                      cResult[35] = tmp35;
                      cResult[36] = null != tmp33;
                      cResult[37] = tmp47;
                      tmp45 = tmp47;
                    }
                    let tmp41 = null;
                    if (null != tmp33) {
                      class Ae {
                        constructor(arg0) {
                          obj = { description: guildEvent };
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
                  function handleRecurrenceChange(c7) {
                    if (null != closure_5) {
                      const obj2 = { recurrenceRule: ScheduleUtils.recurrenceOptionToRecurrenceRule(c7, tmp) };
                      onChange(obj2);
                      closure_8(c7);
                    }
                  }
                  cResult[28] = onChange;
                  cResult[29] = tmp5;
                  cResult[30] = handleRecurrenceChange;
                  tmp39 = handleRecurrenceChange;
                }
              }
            }
          }
          function handleChangeEventStartTime(toISOString) {
            if (closure_10) {
              const intl = util.intl;
              return closure_1_11(intl.string(util.t.nKIaRG));
            } else {
              const obj = { scheduledStartTime: toISOString.toISOString() };
              let isBeforeResult = null != scheduledEndTime;
              if (isBeforeResult) {
                isBeforeResult = before.isBefore(toISOString);
              }
              if (isBeforeResult) {
                const obj2 = _modDef4702(toISOString);
                obj.scheduledEndTime = _modDef4702(toISOString).add(1, "hour").toISOString();
                const addResult = _modDef4702(toISOString).add(1, "hour");
              }
              let tmp8 = null != toISOString;
              if (tmp8) {
                tmp8 = null != first;
              }
              if (tmp8) {
                obj.recurrenceRule = ScheduleUtils.recurrenceOptionToRecurrenceRule(first, toISOString);
              }
              closure_13(obj);
            }
          }
          cResult[20] = tmp8;
          cResult[21] = tmp36;
          cResult[22] = tmp29;
          cResult[23] = first;
          cResult[24] = scheduledEndTime;
          cResult[25] = handleChangeEventStartTime;
          tmp37 = handleChangeEventStartTime;
        }
        function handleNext() {
          const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          try {
            closure_1_11(null);
            assertGuildEventDetailsValid(guildEvent);
            navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
          } catch (tmp14) {
            closure_1_11(tmp14.message);
            const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(tmp14.message);
          }
        }
        cResult[15] = guildEvent;
        cResult[16] = navigation;
        cResult[17] = handleNext;
        tmp35 = handleNext;
        const tmpResult = tmp(tmp2[11]);
      }
      const fn = function x() {
        return ScheduleUtils.recurrenceRuleToOption(_modDef4702(scheduledStartTime), recurrenceRule);
      };
      cResult[5] = recurrenceRule;
      cResult[6] = scheduledStartTime;
      cResult[7] = fn;
      tmp10 = fn;
    }
  }
  if (null != scheduledEndTime) {
    class Ae {
      constructor(arg0) {
        obj = { description: guildEvent };
        return closure_13(obj);
      }
    }
    let addResult3 = onChange(tmp2[9])(scheduledEndTime);
  } else {
    class Ae {
      constructor(arg0) {
        obj = { description: guildEvent };
        return closure_13(obj);
      }
    }
    addResult3 = onChange(tmp2[9])(scheduledStartTime).add(1, "hour");
    let obj2 = onChange(tmp2[9])(scheduledStartTime);
  }
  cResult[2] = scheduledEndTime;
  cResult[3] = scheduledStartTime;
  cResult[4] = addResult3;
  let obj = guildEvent(scheduledEndTime[8]);
}) : (function EditGuildEventDetails(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  constants = undefined;
  c8 = undefined;
  c11 = undefined;
  ({ description, scheduledStartTime } = guildEvent);
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef4702(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = _modDef4702(tmp);
    } else {
      addResult = _modDef4702(scheduledStartTime).add(1, "hour");
      const obj = _modDef4702(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const tmp = c11();
  [c7, c8] = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef4702(scheduledStartTime), recurrenceRule)), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[9])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => onChange(scheduledEndTime[9])().add(guildEvent(scheduledEndTime[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = memo.useMemo(() => _modDef4702(memo).add(15, "minutes"), items2);
  const memo5 = memo.useMemo(() => onChange(scheduledEndTime[9])().add(guildEvent(scheduledEndTime[10]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  const ref = memo.useRef(null);
  const tmp10 = memo1(guildEvent.initialGuildEvent);
  closure_10 = tmp10;
  const tmp4 = recurrenceRule(memo.useState(() => ScheduleUtils.recurrenceRuleToOption(_modDef4702(scheduledStartTime), recurrenceRule)), 2);
  [tmp12, c11] = recurrenceRule(memo.useState(null), 2);
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  const navigation = guildEvent(scheduledEndTime[11]).useNavigation();
  let tmp17 = null;
  if (null != tmp12) {
    let obj2 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp17 = c8(tmp13(tmp14[15]).Text, obj2);
  }
  const obj3 = { children: null };
  const items3 = [tmp17, ];
  let obj4 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp13(tmp14[6]).intl;
  obj4.text = intl.string(guildEvent(scheduledEndTime[6]).t.PDTjLN);
  obj4.onPress = function handleNext() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    try {
      _undefined2(null);
      assertGuildEventDetailsValid(guildEvent);
      navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
    } catch (tmp14) {
      _undefined2(tmp14.message);
      const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp14.message);
    }
  };
  obj4.disabled = null != tmp12;
  items3[1] = c8(guildEvent(scheduledEndTime[16]).Button, obj4);
  obj3.children = items3;
  let obj = guildEvent(scheduledEndTime[11]);
  const obj5 = { action: closure_10(ref, obj3), ref, children: null };
  const tmp15Result = closure_10(ref, obj3);
  const obj6 = { title: null, subtitle: null };
  const tmp21 = onChange(scheduledEndTime[19]);
  const intl2 = tmp13(tmp14[6]).intl;
  obj6.title = intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr);
  const intl3 = tmp13(tmp14[6]).intl;
  obj6.subtitle = intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV);
  const items4 = [
    c8(onChange(scheduledEndTime[17]), obj6),
    c8(guildEvent(scheduledEndTime[18]).GuildEventTopic, {
      topic: name,
      onChange(name) {
        _undefined2(null);
        onChange({ name });
      }
    }),
  ,
  ,
  ,

  ];
  const obj8 = {
    date: memo,
    onChange: function handleChangeEventStartTime(toISOString) {
      if (closure_10) {
        const intl = util.intl;
        return _undefined2(intl.string(util.t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: toISOString.toISOString() };
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          isBeforeResult = memo1.isBefore(toISOString);
        }
        if (isBeforeResult) {
          const obj2 = _modDef4702(toISOString);
          obj.scheduledEndTime = _modDef4702(toISOString).add(1, "hour").toISOString();
          const addResult = _modDef4702(toISOString).add(1, "hour");
        }
        let tmp8 = null != toISOString;
        if (tmp8) {
          tmp8 = null != c7;
        }
        if (tmp8) {
          obj.recurrenceRule = ScheduleUtils.recurrenceOptionToRecurrenceRule(c7, toISOString);
        }
        _undefined2(null);
        onChange(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: null,
    timeLabel: null
  };
  const intl4 = tmp13(tmp14[6]).intl;
  obj8.dateLabel = intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ);
  const intl5 = tmp13(tmp14[6]).intl;
  obj8.timeLabel = intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"]);
  items4[2] = c8(guildEvent(scheduledEndTime[18]).GuildEventDatetime, obj8);
  let tmp19Result = entityType === constants.EXTERNAL;
  if (tmp19Result) {
    const obj9 = {
      date: memo1,
      onChange: function handleChangeEventEndTime(toISOString) {
          _undefined2(null);
          onChange({ scheduledEndTime: toISOString.toISOString() });
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: null,
      timeLabel: null
    };
    const intl6 = tmp13(tmp14[6]).intl;
    obj9.dateLabel = intl6.string(tmp13(tmp14[6]).t.CTLgZJ);
    const intl7 = tmp13(tmp14[6]).intl;
    obj9.timeLabel = intl7.string(tmp13(tmp14[6]).t.j2RuXF);
    tmp19Result = tmp19(tmp13(tmp14[18]).GuildEventDatetime, obj9);
  }
  items4[3] = tmp19Result;
  items4[4] = c8(guildEvent(scheduledEndTime[18]).GuildEventRecurrence, {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange: function handleRecurrenceChange(c7) {
      if (null != memo) {
        const obj2 = { recurrenceRule: ScheduleUtils.recurrenceOptionToRecurrenceRule(c7, tmp) };
        onChange(obj2);
        _undefined(c7);
      }
    }
  });
  if (description == null) {
    description = "";
  }
  items4[5] = c8(guildEvent(scheduledEndTime[18]).GuildEventDescription, {
    description,
    onChange(description) {
      _undefined2(null);
      onChange({ description });
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  });
  obj5.children = items4;
  return closure_10(tmp21, obj5);
});