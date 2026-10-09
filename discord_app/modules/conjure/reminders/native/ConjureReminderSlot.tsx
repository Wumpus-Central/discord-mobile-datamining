// discord_app/modules/conjure/reminders/native/ConjureReminderSlot.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import conjureReminderSlot from "../conjureReminderSlot.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let obj = { duration: fn(17154).CONJURE_REMINDER_ENTER_MS, easing: null };
const Easing = fn(4811).Easing;
obj.easing = Easing.out(fn(4811).Easing.ease);
let obj2 = { duration: fn(17154).CONJURE_REMINDER_EXIT_MS, easing: null };
const Easing2 = fn(4811).Easing;
obj2.easing = Easing2.in(fn(4811).Easing.ease);
const styles = StyleSheet.create({
  slot: { overflow: "hidden" },
  layer: { position: "absolute", top: 0, left: 0, right: 0 },
});
const __initData = {
  code: "function ConjureReminderSlotTsx1(){const{height}=this.__closure;return{height:height.get()};}",
};
const __initData2 = {
  code: "function ConjureReminderSlotTsx2(){const{height}=this.__closure;return{height:height.get()};}",
};
fn(558);
const __initData3 = {
  code: "function ConjureReminderSlotTsx3(){const{opacity,rise}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:rise.get()}]};}",
};
const __initData4 = {
  code: "function ConjureReminderSlotTsx4(){const{opacity,rise}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:rise.get()}]};}",
};
const ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReminderLayer(reminderKey) {
      const cResult = reminderKey(onMeasure[8]).c(17);
      reminderKey = reminderKey.reminderKey;
      const leaving = reminderKey.leaving;
      onMeasure = reminderKey.onMeasure;
      const children = reminderKey.children;
      obj = reminderKey(onMeasure[8]);
      const tmp = reminderKey;
      const sharedValue = reminderKey(onMeasure[6]).useSharedValue(0);
      obj2 = reminderKey(onMeasure[6]);
      const sharedValue1 = reminderKey(onMeasure[6]).useSharedValue(6);
      if (cResult[0] === leaving) {
        if (cResult[1] === sharedValue) {
          if (cResult[2] === sharedValue1) {
            let tmp6 = cResult[3];
            let tmp7 = cResult[4];
          }
          const effect = sharedValue1.useEffect(tmp6, tmp7);
          const fn2 = function w() {
            obj = { opacity: sharedValue.get(), transform: null };
            const items = [{ translateY: sharedValue1.get() }];
            obj.transform = items;
            return obj;
          };
          const obj4 = { opacity: sharedValue, rise: sharedValue1 };
          fn2.__closure = obj4;
          fn2.__workletHash = 15997281547509;
          fn2.__initData = __initData3;
          const animatedStyle = tmp(tmp2[6]).useAnimatedStyle(fn2);
          if (cResult[5] === onMeasure) {
            if (cResult[6] === reminderKey) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] !== animatedStyle) {
              let items = [closure_9.layer, animatedStyle];
              cResult[8] = animatedStyle;
              cResult[9] = items;
              let tmp13 = items;
            } else {
              tmp13 = cResult[9];
            }
            let tmp15;
            if (!leaving) {
              tmp15 = tmp12;
            }
            let str = "auto";
            let str2 = "auto";
            if (leaving) {
              str2 = "none";
            }
            if (leaving) {
              str = "no-hide-descendants";
            }
            if (cResult[10] === children) {
              if (cResult[11] === leaving) {
                if (cResult[12] === tmp13) {
                  if (cResult[13] === tmp15) {
                    if (cResult[14] === str2) {
                      if (cResult[15] === str) {
                        let tmp16 = cResult[16];
                      }
                      return tmp16;
                    }
                  }
                }
              }
            }
            const obj5 = {
              style: tmp13,
              onLayout: tmp15,
              pointerEvents: str2,
              accessibilityElementsHidden: leaving,
              importantForAccessibility: str,
              children,
            };
            const tmp19 = jsx(leaving(tmp2[6]).View, {
              style: tmp13,
              onLayout: tmp15,
              pointerEvents: str2,
              accessibilityElementsHidden: leaving,
              importantForAccessibility: str,
              children,
            });
            cResult[10] = children;
            cResult[11] = leaving;
            cResult[12] = tmp13;
            cResult[13] = tmp15;
            cResult[14] = str2;
            cResult[15] = str;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
          const fn3 = function k(nativeEvent) {
            return onMeasure(reminderKey, nativeEvent.nativeEvent.layout.height);
          };
          cResult[5] = onMeasure;
          cResult[6] = reminderKey;
          cResult[7] = fn3;
          tmp12 = fn3;
          const tmpResult = tmp(tmp2[6]);
        }
      }
      const fn = function s() {
        const withTiming = timing.withTiming;
        if (leaving) {
          const result = set(withTiming(0, obj2));
        } else {
          const result1 = set(withTiming(1, obj));
          obj = timing;
          const result2 = sharedValue1.set(obj.withTiming(0, obj));
        }
        return () => {
          reminderKey(onMeasure[6]).cancelAnimation(sharedValue);
          obj = reminderKey(onMeasure[6]);
          reminderKey(onMeasure[6]).cancelAnimation(sharedValue1);
        };
      };
      const items1 = [leaving, sharedValue, sharedValue1];
      cResult[0] = leaving;
      cResult[1] = sharedValue;
      cResult[2] = sharedValue1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj3 = reminderKey(onMeasure[6]);
    }
  : function ReminderLayer(reminderKey) {
      reminderKey = reminderKey.reminderKey;
      const leaving = reminderKey.leaving;
      onMeasure = reminderKey.onMeasure;
      const sharedValue = reminderKey(onMeasure[6]).useSharedValue(0);
      obj = reminderKey(onMeasure[6]);
      const sharedValue1 = reminderKey(onMeasure[6]).useSharedValue(6);
      let items = [leaving, sharedValue, sharedValue1];
      const effect = sharedValue1.useEffect(() => {
        const withTiming = timing.withTiming;
        if (leaving) {
          const result = set(withTiming(0, obj2));
        } else {
          const result1 = set(withTiming(1, obj));
          obj = timing;
          const result2 = sharedValue1.set(obj.withTiming(0, obj));
        }
        return () => {
          reminderKey(onMeasure[6]).cancelAnimation(sharedValue);
          obj = reminderKey(onMeasure[6]);
          reminderKey(onMeasure[6]).cancelAnimation(sharedValue1);
        };
      }, items);
      obj2 = reminderKey(onMeasure[6]);
      const fn = function f() {
        obj = { opacity: sharedValue.get(), transform: null };
        const items = [{ translateY: sharedValue1.get() }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { opacity: sharedValue, rise: sharedValue1 };
      fn.__workletHash = 9660771065874;
      fn.__initData = __initData4;
      const items1 = [onMeasure, reminderKey];
      const animatedStyle = reminderKey(onMeasure[6]).useAnimatedStyle(fn);
      const callback = sharedValue1.useCallback(
        (nativeEvent) => onMeasure(reminderKey, nativeEvent.nativeEvent.layout.height),
        items1,
      );
      const obj4 = {
        style: null,
        onLayout: null,
        pointerEvents: null,
        accessibilityElementsHidden: null,
        importantForAccessibility: null,
        children: null,
      };
      const items2 = [closure_9.layer, animatedStyle];
      obj4.style = items2;
      let tmp7;
      if (!leaving) {
        tmp7 = callback;
      }
      obj4.onLayout = tmp7;
      let str = "auto";
      let str2 = "auto";
      if (leaving) {
        str2 = "none";
      }
      obj4.pointerEvents = str2;
      obj4.accessibilityElementsHidden = leaving;
      if (leaving) {
        str = "no-hide-descendants";
      }
      obj4.importantForAccessibility = str;
      obj4.children = reminderKey.children;
      return jsx(leaving(onMeasure[6]).View, {
        style: null,
        onLayout: null,
        pointerEvents: null,
        accessibilityElementsHidden: null,
        importantForAccessibility: null,
        children: null,
      });
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/reminders/native/ConjureReminderSlot.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureReminderSlot(reminder) {
      const cResult = renderReminder(576).c(19);
      ({ style, renderReminder } = reminder);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [onMeasure];
        const fn = function v() {
          return onMeasure.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      obj = renderReminder(576);
      const stateFromStores = renderReminder(504).useStateFromStores(tmp4, tmp5);
      const tmpResult = renderReminder(504);
      const conjureReminderLayers = renderReminder(17154).useConjureReminderLayers(reminder.reminder);
      const found = conjureReminderLayers.find((leaving) => !leaving.leaving);
      let key;
      if (found != null) {
        key = found.key;
      }
      if (key == null) {
        key = null;
      }
      const obj4 = sharedValue;
      const tmpResult4 = renderReminder(17154);
      [tmp11, dependencyMap] = num3(sharedValue.useState(null), 2);
      num3 = 0;
      if (null != key) {
        let key1;
        if (tmp11 != null) {
          key1 = tmp11.key;
        }
        let height = null;
        if (key1 === key) {
          height = tmp11.height;
        }
        num3 = height;
      }
      const tmp10 = num3(sharedValue.useState(null), 2);
      sharedValue = renderReminder(4811).useSharedValue(0);
      if (cResult[2] === sharedValue) {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === num3) {
            let tmp15 = cResult[5];
            let tmp16 = cResult[6];
          }
          const effect = obj4.useEffect(tmp15, tmp16);
          const fn3 = function x() {
            return { height: sharedValue.get() };
          };
          obj2 = { height: sharedValue };
          fn3.__closure = obj2;
          fn3.__workletHash = 13312603429755;
          fn3.__initData = __initData;
          const animatedStyle = renderReminder(4811).useAnimatedStyle(fn3);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0, arg1) {
                closure_0 = reminder;
                closure_1 = Math.round(arg1);
                tmp = closure_2((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    obj = { key: tmp3, height };
                    tmp = obj;
                  }
                  return tmp;
                });
                return;
              }
            }
            cResult[7] = I;
          } else {
            class I {
              constructor(arg0, arg1) {
                closure_0 = reminder;
                closure_1 = Math.round(arg1);
                tmp = closure_2((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    obj = { key: tmp3, height };
                    tmp = obj;
                  }
                  return tmp;
                });
                return;
              }
            }
          }
          onMeasure = I;
          if (cResult[8] === animatedStyle) {
            class I {
              constructor(arg0, arg1) {
                closure_0 = reminder;
                closure_1 = Math.round(arg1);
                tmp = closure_2((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    obj = { key: tmp3, height };
                    tmp = obj;
                  }
                  return tmp;
                });
                return;
              }
            }
            if (cResult[11] === conjureReminderLayers) {
              class I {
                constructor(arg0, arg1) {
                  closure_0 = reminder;
                  closure_1 = Math.round(arg1);
                  tmp = closure_2((arg0) => {
                    let tmp = arg0;
                    let key;
                    if (arg0 != null) {
                      key = tmp.key;
                    }
                    if (key !== closure_0) {
                      obj = { key: tmp3, height };
                      tmp = obj;
                    }
                    return tmp;
                  });
                  return;
                }
              }
            }
            if (cResult[14] !== renderReminder) {
              class O {
                constructor(arg0) {
                  obj = {
                    reminderKey: reminder.key,
                    leaving: reminder.leaving,
                    onMeasure: closure_5,
                    children: renderReminder(reminder.key),
                  };
                  return jsx(ReminderLayer, obj, reminder.key);
                }
              }
              cResult[14] = renderReminder;
              cResult[15] = O;
            } else {
              class O {
                constructor(arg0) {
                  obj = {
                    reminderKey: reminder.key,
                    leaving: reminder.leaving,
                    onMeasure: closure_5,
                    children: renderReminder(reminder.key),
                  };
                  return jsx(ReminderLayer, obj, reminder.key);
                }
              }
            }
            const mapped = conjureReminderLayers.map(O);
            cResult[11] = conjureReminderLayers;
            cResult[12] = renderReminder;
            cResult[13] = mapped;
          }
          const items1 = [closure_9.slot, style, animatedStyle];
          cResult[8] = animatedStyle;
          cResult[9] = style;
          cResult[10] = items1;
          const tmpResult6 = renderReminder(4811);
        }
      }
      const fn2 = function w() {
        if (null != num3) {
          if (num3 > 0) {
            const result = sharedValue.set(timing.withTiming(num3, obj));
          } else {
            let num2 = 0;
            if (!stateFromStores) {
              obj = ReanimatedRexport;
              obj2 = timing;
              num2 = obj.withDelay(conjureReminderSlot.CONJURE_REMINDER_EXIT_MS, obj2.withTiming(0, obj2));
            }
            const result1 = sharedValue.set(num2);
          }
          return () => renderReminder(4811).cancelAnimation(sharedValue);
        }
      };
      const items2 = [sharedValue, num3, stateFromStores];
      cResult[2] = sharedValue;
      cResult[3] = stateFromStores;
      cResult[4] = num3;
      cResult[5] = fn2;
      cResult[6] = items2;
      tmp16 = items2;
      tmp15 = fn2;
      const tmpResult5 = renderReminder(4811);
    }
  : function ConjureReminderSlot(renderReminder) {
      renderReminder = renderReminder.renderReminder;
      dependencyMap = undefined;
      let num;
      let sharedValue;
      onMeasure = undefined;
      ({ style, reminder } = renderReminder);
      const items = [onMeasure];
      const stateFromStores = renderReminder(504).useStateFromStores(items, () => onMeasure.useReducedMotion);
      obj = renderReminder(504);
      const conjureReminderLayers = renderReminder(17154).useConjureReminderLayers(reminder);
      const found = conjureReminderLayers.find((leaving) => !leaving.leaving);
      let key;
      if (found != null) {
        key = found.key;
      }
      if (key == null) {
        key = null;
      }
      obj2 = renderReminder(17154);
      [tmp7, c2] = num(sharedValue.useState(null), 2);
      num = 0;
      if (null != key) {
        let key1;
        if (tmp7 != null) {
          key1 = tmp7.key;
        }
        let height = null;
        if (key1 === key) {
          height = tmp7.height;
        }
        num = height;
      }
      const tmp6 = num(sharedValue.useState(null), 2);
      sharedValue = renderReminder(4811).useSharedValue(0);
      const items1 = [sharedValue, num, stateFromStores];
      const effect = obj3.useEffect(() => {
        if (null != num) {
          if (tmp > 0) {
            const result = sharedValue.set(timing.withTiming(tmp, obj));
          } else {
            let num2 = 0;
            if (!stateFromStores) {
              obj = ReanimatedRexport;
              obj2 = timing;
              num2 = obj.withDelay(conjureReminderSlot.CONJURE_REMINDER_EXIT_MS, obj2.withTiming(0, obj2));
            }
            const result1 = sharedValue.set(num2);
          }
          return () => renderReminder(c2[6]).cancelAnimation(sharedValue);
        }
      }, items1);
      const tmpResult = renderReminder(4811);
      class M {
        constructor() {
          obj = { height: closure_4.get() };
          return obj;
        }
      }
      M.__closure = { height: sharedValue };
      M.__workletHash = 5124855589272;
      M.__initData = __initData2;
      const animatedStyle = renderReminder(4811).useAnimatedStyle(M);
      onMeasure = obj3.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        const height = Math.round(arg1);
        _undefined((arg0) => {
          let tmp = arg0;
          let key;
          if (arg0 != null) {
            key = tmp.key;
          }
          if (key !== closure_0) {
            obj = { key: tmp3, height };
            tmp = obj;
          }
          return tmp;
        });
      }, []);
      const obj4 = {
        style: null,
        accessibilityLiveRegion: "polite",
        children: conjureReminderLayers.map((key) => (
          <closure_14 key={key.key} reminderKey={key.key} leaving={key.leaving} onMeasure={onMeasure}>
            {renderReminder(key.key)}
          </closure_14>
        )),
      };
      const items2 = [closure_9.slot, style, animatedStyle];
      obj4.style = items2;
      return jsx(stateFromStores(4811).View, {
        style: null,
        accessibilityLiveRegion: "polite",
        children: conjureReminderLayers.map((key) => (
          <closure_14 key={key.key} reminderKey={key.key} leaving={key.leaving} onMeasure={onMeasure}>
            {renderReminder(key.key)}
          </closure_14>
        )),
      });
    };
