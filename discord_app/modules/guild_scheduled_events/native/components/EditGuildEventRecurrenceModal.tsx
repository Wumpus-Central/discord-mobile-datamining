// === Module 9211: EditGuildEventRecurrenceModal ===

// Module 9211 (EditGuildEventRecurrenceModal)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import Text_Text from "Text/Text" /* 4892 */;
import useEventExceptionDefault from "useEventException" /* 9202 */;
import saveGuildEventRecurrenceDefault from "saveGuildEventRecurrence" /* 9212 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9214 */;
import LazyAPIPromiseDefault from "LazyAPIPromise" /* 9217 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 9218 */;
import EditGuildEventStepContainerDefault from "EditGuildEventStepContainer" /* 9219 */;
import GuildEventScheduleDefault from "GuildEventSchedule" /* 9220 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, cardStyle: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.cardStyle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj2);
let onChange = { TIME: "TIME" };
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildEvent) => {
  const cResult = require("c").c(46);
  guildEvent = guildEvent.guildEvent;
  _require = guildEvent;
  const onCloseModal = guildEvent.onCloseModal;
  const recurrenceId = guildEvent.recurrenceId;
  error();
  let obj = require("c");
  const tmp5 = onCloseModal;
  ({ left, right } = onCloseModal(1618)());
  const tmp7 = onCloseModal(9202)(recurrenceId, guildEvent.id);
  dependencyMap = tmp7;
  if (cResult[0] === tmp7) {
    if (cResult[1] === guildEvent) {
      if (cResult[2] === recurrenceId) {
        let tmp8 = cResult[3];
      }
      asyncGeneratorStep = tmp8;
      const tmp12 = schedule(noop.useState(tmp8), 2);
      schedule = tmp12[0];
      noop = tmp12[1];
      const tmp15 = schedule(noop.useState(null), 2);
      const first1 = tmp15[0];
      closure_8 = tmp15[1];
      if (cResult[4] === tmp7) {
        if (cResult[5] === guildEvent) {
          if (cResult[6] === recurrenceId) {
            if (cResult[7] === schedule) {
              let tmp18 = cResult[8];
            }
            const tmp11Result = tmp11(tmp5(9217)(tmp18), 2);
            const first2 = tmp11Result[0];
            error = tmp11Result[1].error;
            if (cResult[9] === tmp8) {
              if (cResult[10] === onCloseModal) {
                if (cResult[11] === first2) {
                  if (cResult[12] === schedule) {
                    let tmp21 = cResult[13];
                  }
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn = function w(arg0) {
                      ({ startDate, endDate } = arg0);
                      let addResult = endDate;
                      if (tmp) {
                        addResult = startDate.clone().add(1, "hour");
                        const cloneResult = startDate.clone();
                      }
                      closure_6({ startDate, endDate: addResult });
                      closure_8(null);
                    };
                    cResult[14] = fn;
                    let tmp23 = fn;
                  } else {
                    tmp23 = cResult[14];
                  }
                  onChange = tmp23;
                  if (cResult[15] !== error) {
                    class H {
                      constructor() {
                        obj = error;
                        anyErrorMessage = undefined;
                        tmp = closure_8;
                        if (error != null) {
                          anyErrorMessage = obj.getAnyErrorMessage();
                        }
                        if (anyErrorMessage == null) {
                          anyErrorMessage = null;
                        }
                        tmpResult = tmp(anyErrorMessage);
                        return;
                      }
                    }
                    let items = [error];
                    cResult[15] = error;
                    cResult[16] = H;
                    cResult[17] = items;
                    let tmp25 = items;
                  } else {
                    class H {
                      constructor() {
                        obj = error;
                        anyErrorMessage = undefined;
                        tmp = closure_8;
                        if (error != null) {
                          anyErrorMessage = obj.getAnyErrorMessage();
                        }
                        if (anyErrorMessage == null) {
                          anyErrorMessage = null;
                        }
                        tmpResult = tmp(anyErrorMessage);
                        return;
                      }
                    }
                    tmp25 = cResult[17];
                  }
                  const effect = obj4.useEffect(H, tmp25);
                  const _Symbol2 = Symbol;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    class H {
                      constructor() {
                        obj = error;
                        anyErrorMessage = undefined;
                        tmp = closure_8;
                        if (error != null) {
                          anyErrorMessage = obj.getAnyErrorMessage();
                        }
                        if (anyErrorMessage == null) {
                          anyErrorMessage = null;
                        }
                        tmpResult = tmp(anyErrorMessage);
                        return;
                      }
                    }
                    const stringResult = obj5.string(tmp(1126).t["R3BPH+"]);
                    cResult[18] = stringResult;
                  } else {
                    class H {
                      constructor() {
                        obj = error;
                        anyErrorMessage = undefined;
                        tmp = closure_8;
                        if (error != null) {
                          anyErrorMessage = obj.getAnyErrorMessage();
                        }
                        if (anyErrorMessage == null) {
                          anyErrorMessage = null;
                        }
                        tmpResult = tmp(anyErrorMessage);
                        return;
                      }
                    }
                  }
                  if (cResult[19] === tmp21) {
                    class H {
                      constructor() {
                        obj = error;
                        anyErrorMessage = undefined;
                        tmp = closure_8;
                        if (error != null) {
                          anyErrorMessage = obj.getAnyErrorMessage();
                        }
                        if (anyErrorMessage == null) {
                          anyErrorMessage = null;
                        }
                        tmpResult = tmp(anyErrorMessage);
                        return;
                      }
                    }
                    action = tmp30;
                    if (cResult[22] !== onCloseModal) {
                      class X {
                        constructor() {
                          obj = { screen: null, onClose: null };
                          tmp = closure_1(closure_3[17]);
                          obj.screen = closure_0(closure_3[18]).EditGuildEventScreens.DETAILS;
                          obj.onClose = onCloseModal;
                          return jsx(tmp, obj);
                        }
                      }
                      cResult[22] = onCloseModal;
                      cResult[23] = X;
                    } else {
                      class X {
                        constructor() {
                          obj = { screen: null, onClose: null };
                          tmp = closure_1(closure_3[17]);
                          obj.screen = closure_0(closure_3[18]).EditGuildEventScreens.DETAILS;
                          obj.onClose = onCloseModal;
                          return jsx(tmp, obj);
                        }
                      }
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          return null;
                        }
                      }
                      cResult[24] = Y;
                    } else {
                      class Y {
                        constructor() {
                          return null;
                        }
                      }
                    }
                    if (cResult[25] === tmp30) {
                      class Y {
                        constructor() {
                          return null;
                        }
                      }
                    }
                    class Z {
                      constructor() {
                        tmp = jsxs;
                        tmp2 = closure_3;
                        obj = { action: closure_12, children: null };
                        tmp3 = closure_1(closure_3[19]);
                        tmp4 = jsx;
                        obj1 = { guildEvent: closure_0, recurrenceId, schedule: closure_5, onChange: closure_11 };
                        items = [, ];
                        items[0] = jsx(closure_1(closure_3[20]), obj1);
                        tmp4Result = null;
                        if (null != closure_7) {
                          tmp7 = closure_0;
                          obj4 = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
                          obj4.children = tmp5;
                          tmp4Result = tmp4(closure_0(tmp2[21]).Text, obj4);
                        }
                        items[1] = tmp4Result;
                        obj.children = items;
                        return tmp(tmp3, obj);
                      }
                    }
                    cResult[25] = tmp30;
                    cResult[26] = first1;
                    cResult[27] = guildEvent;
                    cResult[28] = recurrenceId;
                    class B {
                      constructor() {
                        obj = closure_2(closure_3[12]);
                        result = obj.dismissGlobalKeyboard();
                        return closure_1(closure_3[13])(closure_0, recurrenceId, closure_5, closure_3);
                      }
                    }
                    cResult[29] = schedule;
                    cResult[30] = Z;
                  }
                  let obj2 = { size: "md", text: null, onPress: null, disabled: null };
                  class B {
                    constructor() {
                      obj = closure_2(closure_3[12]);
                      result = obj.dismissGlobalKeyboard();
                      return closure_1(closure_3[13])(closure_0, recurrenceId, closure_5, closure_3);
                    }
                  }
                  obj2.onPress = tmp21;
                  obj2.disabled = null != first1;
                  const tmp32 = closure_8(tmp(5601).Button, obj2);
                  cResult[19] = tmp21;
                  cResult[20] = null != first1;
                  cResult[21] = tmp32;
                }
              }
            }
            _require = asyncGeneratorStep(async () => {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      c0 = 0;
                      if (obj2.areSchedulesIdentical(schedule, closure_1_4)) {
                        v1();
                        c2 = 3;
                      } else {
                        v1 = 1;
                        c2 = 1;
                        const obj5 = { value: first2(), done: false };
                        return obj5;
                      }
                      obj2 = v0(closure_3[11]);
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    if (null != value) {
                      v1();
                    }
                  }
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            });
            function handleSave() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            cResult[9] = tmp8;
            cResult[10] = onCloseModal;
            cResult[11] = first2;
            class B {
              constructor() {
                obj = closure_2(closure_3[12]);
                result = obj.dismissGlobalKeyboard();
                return closure_1(closure_3[13])(closure_0, recurrenceId, closure_5, closure_3);
              }
            }
            cResult[12] = schedule;
            cResult[13] = handleSave;
            tmp21 = handleSave;
          }
        }
      }
      class B {
        constructor() {
          obj = closure_2(closure_3[12]);
          result = obj.dismissGlobalKeyboard();
          return closure_1(closure_3[13])(closure_0, recurrenceId, closure_5, closure_3);
        }
      }
      cResult[4] = tmp7;
      cResult[5] = guildEvent;
      cResult[6] = recurrenceId;
      cResult[7] = schedule;
      cResult[8] = B;
      tmp18 = B;
      obj4 = noop;
      tmp11 = schedule;
    }
  }
  const tmp6 = onCloseModal(1618)();
  const baseScheduleForRecurrence = require("ScheduleUtils").getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  const tmpResult = require("ScheduleUtils");
  const scheduleForRecurrenceWithException = require("ScheduleUtils").getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp7);
  cResult[0] = tmp7;
  cResult[1] = guildEvent;
  cResult[2] = recurrenceId;
  cResult[3] = scheduleForRecurrenceWithException;
  tmp8 = scheduleForRecurrenceWithException;
  const tmpResult2 = require("ScheduleUtils");
}) : ((guildEvent) => {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  schedule = undefined;
  noop = undefined;
  let error;
  onChange = async function _handleSave2() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const v0 = 0;
            if (obj2.areSchedulesIdentical(schedule, scheduleForRecurrenceWithException)) {
              onClose();
              c2 = 3;
            } else {
              c1 = 1;
              c2 = 1;
              const obj5 = { value: options(), done: false };
              return obj5;
            }
            obj2 = v0(closure_1_3[11]);
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (null != value) {
            closure_128_1();
          }
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c2 = tmp;
        throw tmp13;
      }
    }
  };
  function handleScheduleChange(arg0) {
    ({ startDate, endDate } = arg0);
    let addResult = endDate;
    if (tmp) {
      addResult = startDate.clone().add(1, "hour");
      const cloneResult = startDate.clone();
    }
    _undefined({ startDate, endDate: addResult });
    closure_8(null);
  }
  const tmp = error();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp3 = useEventExceptionDefault(recurrenceId, guildEvent.id);
  dependencyMap = tmp3;
  const tmp2 = useSafeAreaInsetsDefault();
  const baseScheduleForRecurrence = guildEvent(9198).getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj = guildEvent(9198);
  const scheduleForRecurrenceWithException = guildEvent(9198).getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp3);
  let obj2 = guildEvent(9198);
  [c5, c6] = schedule(noop.useState(scheduleForRecurrenceWithException), 2);
  const tmp7 = schedule(noop.useState(null), 2);
  const first = tmp7[0];
  closure_8 = tmp7[1];
  const tmp9 = schedule(LazyAPIPromiseDefault(() => {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, closure_3);
  }), 2);
  closure_9 = tmp9[0];
  error = tmp9[1].error;
  let items = [error];
  const effect = noop.useEffect(() => {
    let anyErrorMessage;
    if (error != null) {
      anyErrorMessage = error.getAnyErrorMessage();
    }
    if (anyErrorMessage == null) {
      anyErrorMessage = null;
    }
    closure_8(anyErrorMessage);
  }, items);
  let obj3 = { size: "md", text: null, onPress: null, disabled: null };
  const intl = guildEvent(1126).intl;
  obj3.text = intl.string(guildEvent(1126).t["R3BPH+"]);
  obj3.onPress = function handleSave() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3.disabled = null != first;
  action = closure_8(guildEvent(5601).Button, obj3);
  let obj5 = {
    style: null,
    children: closure_8(guildEvent(6503).Navigator, {
      screens: {
        [closure_11.TIME]: {
          title: "",
          customNavbar() {
            const obj = { screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS, onClose };
            return closure_2_8(EditGuildEventModalNavbarDefault, obj);
          },
          headerLeft() {
            return null;
          },
          render() {
            const obj = { action, children: null };
            const items = [closure_2_8(GuildEventScheduleDefault, { guildEvent, recurrenceId, schedule, onChange: handleScheduleChange }), ];
            let tmp4Result = null;
            if (null != first) {
              const obj3 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp5 };
              tmp4Result = closure_2_8(Text_Text.Text, obj3);
            }
            items[1] = tmp4Result;
            obj.children = items;
            return options(EditGuildEventStepContainerDefault, obj);
          },
          fullscreen: true
        }
      },
      initialRouteName: onChange.TIME,
      cardShadowEnabled: false,
      cardOverlayEnabled: false,
      cardStyle: tmp.cardStyle
    })
  };
  const items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj5.style = items1;
  return closure_8(first, obj5);
});