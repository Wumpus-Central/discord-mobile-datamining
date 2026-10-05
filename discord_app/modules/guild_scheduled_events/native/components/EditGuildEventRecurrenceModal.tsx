// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useEventExceptionDefault from "../../useEventException.tsx";
import saveGuildEventRecurrenceDefault from "../../saveGuildEventRecurrence.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import LazyAPIPromiseDefault from "../../../../utils/LazyAPIPromise.tsx";
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar.tsx";
import EditGuildEventStepContainerDefault from "EditGuildEventStepContainer.tsx";
import GuildEventScheduleDefault from "GuildEventSchedule.tsx";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, action, c1, c2, dependencyMap, guildEvent, schedule;

let c9;
let metroImportAll;
let obj2;
let obj3;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardStyle: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
let onChange = { TIME: "TIME" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildEvent) => {
      let closure_3;
      let closure_4;
      let closure_6;
      let error;
      let left;
      let obj5;
      let right;
      let tmp = guildEvent;
      const tmp2 = dependencyMap;
      let obj = guildEvent(576);
      const cResult = obj.c(46);
      guildEvent = guildEvent.guildEvent;
      const onCloseModal = guildEvent.onCloseModal;
      const recurrenceId = guildEvent.recurrenceId;
      error();
      const tmp5 = onCloseModal;
      ({ left, right } = onCloseModal(1618)());
      onCloseModal(1618)();
      const tmp7 = onCloseModal(9167)(recurrenceId, guildEvent.id);
      dependencyMap = tmp7;
      if (cResult[0] === tmp7) {
        if (cResult[1] === guildEvent) {
          let tmp8;
          if (cResult[2] === recurrenceId) {
            tmp8 = cResult[3];
          }
          _asyncToGenerator = tmp8;
          let obj4 = react;
          let num = 2;
          const tmp12 = schedule(react.useState(tmp8), 2);
          const tmp11 = schedule;
          schedule = tmp12[0];
          react = tmp12[1];
          const tmp15 = schedule(react.useState(null), 2);
          const first1 = tmp15[0];
          let closure_8 = tmp15[1];
          if (cResult[4] === tmp7) {
            if (cResult[5] === guildEvent) {
              if (cResult[6] === recurrenceId) {
                let tmp18;
                if (cResult[7] === schedule) {
                  tmp18 = cResult[8];
                }
                const tmp11Result = tmp11(tmp5(9182)(tmp18), 2);
                const first2 = tmp11Result[0];
                error = tmp11Result[1].error;
                if (cResult[9] === tmp8) {
                  if (cResult[10] === onCloseModal) {
                    if (cResult[11] === first2) {
                      let tmp21;
                      let tmp23;
                      let tmp25;
                      if (cResult[12] === schedule) {
                        tmp21 = cResult[13];
                      }
                      const _Symbol = Symbol;
                      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                        const fn = function w(arg0) {
                          let endDate;
                          let startDate;
                          ({ startDate, endDate } = arg0);
                          let addResult = endDate;
                          const tmp = null != startDate && null != endDate && endDate.isBefore(startDate);
                          if (tmp) {
                            const cloneResult = startDate.clone();
                            addResult = cloneResult.add(1, "hour");
                          }
                          closure_6({ startDate, endDate: addResult });
                          closure_8(null);
                        };
                        cResult[14] = fn;
                        tmp23 = fn;
                      } else {
                        tmp23 = cResult[14];
                      }
                      onChange = tmp23;
                      if (cResult[15] !== error) {
                        class H {
                          constructor() {
                            let anyErrorMessage;
                            if (error != null) {
                              anyErrorMessage = error.getAnyErrorMessage();
                            }
                            if (anyErrorMessage == null) {
                              anyErrorMessage = null;
                            }
                            closure_8(anyErrorMessage);
                          }
                        }
                        let items = [error];
                        cResult[15] = error;
                        cResult[16] = H;
                        cResult[17] = items;
                        tmp25 = items;
                      } else {
                        class H {
                          constructor() {
                            let anyErrorMessage;
                            if (error != null) {
                              anyErrorMessage = error.getAnyErrorMessage();
                            }
                            if (anyErrorMessage == null) {
                              anyErrorMessage = null;
                            }
                            closure_8(anyErrorMessage);
                          }
                        }
                        tmp25 = cResult[17];
                      }
                      const effect = obj4.useEffect(H, tmp25);
                      const _Symbol2 = Symbol;
                      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                        class H {
                          constructor() {
                            let anyErrorMessage;
                            if (error != null) {
                              anyErrorMessage = error.getAnyErrorMessage();
                            }
                            if (anyErrorMessage == null) {
                              anyErrorMessage = null;
                            }
                            closure_8(anyErrorMessage);
                          }
                        }
                        cResult[18] = obj5.string(tmp(1126).t["R3BPH+"]);
                        const stringResult = obj5.string(tmp(1126).t["R3BPH+"]);
                      } else {
                        class H {
                          constructor() {
                            let anyErrorMessage;
                            if (error != null) {
                              anyErrorMessage = error.getAnyErrorMessage();
                            }
                            if (anyErrorMessage == null) {
                              anyErrorMessage = null;
                            }
                            closure_8(anyErrorMessage);
                          }
                        }
                      }
                      if (cResult[19] === tmp21) {
                        class H {
                          constructor() {
                            let anyErrorMessage;
                            if (error != null) {
                              anyErrorMessage = error.getAnyErrorMessage();
                            }
                            if (anyErrorMessage == null) {
                              anyErrorMessage = null;
                            }
                            closure_8(anyErrorMessage);
                          }
                        }
                        action = tmp30;
                        if (cResult[22] !== onCloseModal) {
                          class X {
                            constructor() {
                              const obj = {
                                screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS,
                                onClose: onCloseModal,
                              };
                              const tmp = EditGuildEventModalNavbarDefault;
                              return metroImportAll(tmp, obj);
                            }
                          }
                          cResult[22] = onCloseModal;
                          cResult[23] = X;
                        } else {
                          class X {
                            constructor() {
                              const obj = {
                                screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS,
                                onClose: onCloseModal,
                              };
                              const tmp = EditGuildEventModalNavbarDefault;
                              return metroImportAll(tmp, obj);
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
                            let items;
                            const obj = { action, children: items };
                            items = [,];
                            const obj2 = { guildEvent, recurrenceId, schedule, onChange };
                            const tmp3 = EditGuildEventStepContainerDefault;
                            items[0] = metroImportAll(GuildEventScheduleDefault, obj2);
                            let tmp4Result = null;
                            if (null != first1) {
                              const obj3 = {
                                variant: "text-md/normal",
                                color: "text-feedback-critical",
                                children: tmp5,
                              };
                              tmp4Result = metroImportAll(Text_Text.Text, obj3);
                            }
                            items[1] = tmp4Result;
                            return React4(tmp3, obj);
                          }
                        }
                        cResult[25] = tmp30;
                        cResult[26] = first1;
                        cResult[27] = guildEvent;
                        cResult[28] = recurrenceId;
                        class B {
                          constructor() {
                            const obj = KeyboardManagerUtilsAll;
                            const result = obj.dismissGlobalKeyboard();
                            return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, first, closure_3);
                          }
                        }
                        cResult[29] = schedule;
                        cResult[30] = Z;
                      }
                      let obj2 = { size: "md", text: null, onPress: tmp21, disabled: null != first1 };
                      class B {
                        constructor() {
                          const obj = KeyboardManagerUtilsAll;
                          const result = obj.dismissGlobalKeyboard();
                          return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, first, closure_3);
                        }
                      }
                      cResult[19] = tmp21;
                      cResult[20] = null != first1;
                      cResult[21] = closure_8(tmp(5594).Button, obj2);
                      const tmp32 = closure_8(tmp(5594).Button, obj2);
                    }
                  }
                }
                _require = _asyncToGenerator(async () => {
                  let v1;
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
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
                          let c0 = 0;
                          const obj2 = v0(closure_2_3[11]);
                          if (obj2.areSchedulesIdentical(schedule, closure_1_4)) {
                            v1();
                          } else {
                            v1 = 1;
                            c2 = 1;
                            const obj5 = { value: first2(), done: false };
                            return obj5;
                          }
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else if (null != value) {
                        v1();
                      }
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    } catch (tmp12) {
                      c2 = 3;
                      throw tmp12;
                    }
                  }
                });
                function handleSave() {
                  return closure_0(...arguments);
                }
                cResult[9] = tmp8;
                cResult[10] = onCloseModal;
                cResult[11] = first2;
                class B {
                  constructor() {
                    const obj = KeyboardManagerUtilsAll;
                    const result = obj.dismissGlobalKeyboard();
                    return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, first, closure_3);
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
              const obj = KeyboardManagerUtilsAll;
              const result = obj.dismissGlobalKeyboard();
              return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, first, closure_3);
            }
          }
          cResult[4] = tmp7;
          cResult[5] = guildEvent;
          cResult[6] = recurrenceId;
          cResult[7] = schedule;
          cResult[8] = B;
          tmp18 = B;
        }
      }
      const tmpResult = tmp(9163);
      const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      const tmpResult2 = tmp(9163);
      const scheduleForRecurrenceWithException = tmpResult2.getScheduleForRecurrenceWithException(
        baseScheduleForRecurrence,
        tmp7,
      );
      cResult[0] = tmp7;
      cResult[1] = guildEvent;
      cResult[2] = recurrenceId;
      cResult[3] = scheduleForRecurrenceWithException;
      tmp8 = scheduleForRecurrenceWithException;
    }
  : (guildEvent) => {
      let _undefined;
      let c5;
      let c6;
      let closure_3;
      let intl;
      let items1;
      let left;
      let obj6;
      let onClose;
      let recurrenceId;
      let right;
      guildEvent = guildEvent.guildEvent;
      ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
      schedule = undefined;
      react = undefined;
      let error;
      let obj = function _handleSave2() {
        obj = _asyncToGenerator(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const obj2 = v0(closure_1_3[11]);
                  if (obj2.areSchedulesIdentical(schedule, scheduleForRecurrenceWithException)) {
                    onClose();
                  } else {
                    c1 = 1;
                    c2 = 1;
                    const obj5 = { value: closure_2_9(), done: false };
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else if (null != value) {
                closure_128_1();
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp12) {
              c2 = 3;
              throw tmp12;
            }
          }
        });
        return obj(...arguments);
      };
      function handleScheduleChange(arg0) {
        let endDate;
        let startDate;
        ({ startDate, endDate } = arg0);
        let addResult = endDate;
        const tmp = null != startDate && null != endDate && endDate.isBefore(startDate);
        if (tmp) {
          const cloneResult = startDate.clone();
          addResult = cloneResult.add(1, "hour");
        }
        _undefined({ startDate, endDate: addResult });
        closure_8(null);
      }
      let tmp = error();
      const tmp2 = useSafeAreaInsetsDefault();
      ({ left, right } = tmp2);
      let tmp3 = useEventExceptionDefault(recurrenceId, guildEvent.id);
      dependencyMap = tmp3;
      obj = guildEvent(9163);
      const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      let obj2 = guildEvent(9163);
      const scheduleForRecurrenceWithException = obj2.getScheduleForRecurrenceWithException(
        baseScheduleForRecurrence,
        tmp3,
      );
      [c5, c6] = schedule(react.useState(scheduleForRecurrenceWithException), 2);
      schedule(react.useState(scheduleForRecurrenceWithException), 2);
      const tmp7 = schedule(react.useState(null), 2);
      const first = tmp7[0];
      let closure_8 = tmp7[1];
      const tmp9 = schedule(
        LazyAPIPromiseDefault(() => {
          obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, closure_3);
        }),
        2,
      );
      let closure_9 = tmp9[0];
      error = tmp9[1].error;
      let items = [error];
      const effect = react.useEffect(() => {
        let anyErrorMessage;
        if (error != null) {
          anyErrorMessage = error.getAnyErrorMessage();
        }
        if (anyErrorMessage == null) {
          anyErrorMessage = null;
        }
        closure_8(anyErrorMessage);
      }, items);
      let obj3 = {
        size: "md",
        text: intl.string(guildEvent(1126).t["R3BPH+"]),
        onPress: function handleSave() {
          return obj(...arguments);
        },
        disabled: null != first,
      };
      const Button = guildEvent(5594).Button;
      intl = guildEvent(1126).intl;
      action = closure_8(Button, obj3);
      let obj4 = {
        title: "",
        customNavbar() {
          obj = { screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS, onClose: importDefault };
          const tmp = EditGuildEventModalNavbarDefault;
          return metroImportAll(tmp, obj);
        },
        headerLeft() {
          return null;
        },
        render() {
          let items;
          obj = { action, children: items };
          items = [,];
          const obj2 = { guildEvent, recurrenceId, schedule, onChange: handleScheduleChange };
          const tmp3 = EditGuildEventStepContainerDefault;
          items[0] = metroImportAll(GuildEventScheduleDefault, obj2);
          let tmp4Result = null;
          if (null != first) {
            const obj3 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp5 };
            tmp4Result = metroImportAll(Text_Text.Text, obj3);
          }
          items[1] = tmp4Result;
          return React4(tmp3, obj);
        },
        fullscreen: true,
      };
      let obj5 = { style: items1, children: closure_8(guildEvent(6496).Navigator, obj6) };
      items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
      obj6 = {
        screens: { [closure_11.TIME]: obj4 },
        initialRouteName: obj.TIME,
        cardShadowEnabled: false,
        cardOverlayEnabled: false,
        cardStyle: tmp.cardStyle,
      };
      return closure_8(first, obj5);
    };
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx",
);

export default tmp4;
