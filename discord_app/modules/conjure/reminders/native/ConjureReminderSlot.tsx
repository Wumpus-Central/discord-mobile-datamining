// discord_app/modules/conjure/reminders/native/ConjureReminderSlot.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import conjureReminderSlot from "../conjureReminderSlot.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, onMeasure, reminderKey, set, set2;

let Easing;
let Easing2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let obj = {
  duration: conjureReminderSlot.CONJURE_REMINDER_ENTER_MS,
  easing: Easing.out(ReanimatedRexport.Easing.ease),
};
Easing = ReanimatedRexport.Easing;
let obj2 = {
  duration: conjureReminderSlot.CONJURE_REMINDER_EXIT_MS,
  easing: Easing2.in(ReanimatedRexport.Easing.ease),
};
Easing2 = ReanimatedRexport.Easing;
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
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = {
  code: "function ConjureReminderSlotTsx3(){const{opacity,rise}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:rise.get()}]};}",
};
const __initData4 = {
  code: "function ConjureReminderSlotTsx4(){const{opacity,rise}=this.__closure;return{opacity:opacity.get(),transform:[{translateY:rise.get()}]};}",
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reminder) => {
      let num3;
      let renderReminder;
      let sharedValue;
      let style;
      let tmp11;
      let tmp26;
      let tmp4;
      let tmp5;
      obj = renderReminder(576);
      const cResult = obj.c(19);
      ({ style, renderReminder } = reminder);
      reminder = reminder.reminder;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [I];
        const fn = function v() {
          return I.useReducedMotion;
        };
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = renderReminder(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult4 = renderReminder(16725);
      const conjureReminderLayers = tmpResult4.useConjureReminderLayers(reminder);
      const found = conjureReminderLayers.find((leaving) => !leaving.leaving);
      let key;
      if (found != null) {
        key = found.key;
      }
      if (key == null) {
        key = null;
      }
      [tmp11, dependencyMap] = num3(sharedValue.useState(null), 2);
      num3(sharedValue.useState(null), 2);
      num3 = 0;
      const obj4 = sharedValue;
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
      const tmpResult5 = renderReminder(4618);
      sharedValue = tmpResult5.useSharedValue(0);
      if (cResult[2] === sharedValue) {
        if (cResult[3] === stateFromStores) {
          let tmp15;
          let tmp16;
          let tmp20;
          if (cResult[4] === num3) {
            tmp15 = cResult[5];
            tmp16 = cResult[6];
          }
          const effect = obj4.useEffect(tmp15, tmp16);
          const fn3 = function x() {
            obj = { height: sharedValue.get() };
            return obj;
          };
          obj2 = { height: sharedValue };
          fn3.__closure = obj2;
          fn3.__workletHash = 13312603429755;
          fn3.__initData = __initData;
          const tmpResult6 = renderReminder(4618);
          const animatedStyle = tmpResult6.useAnimatedStyle(fn3);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = Math.round(arg1);
                let tmp = dependencyMap((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    tmp = { key: tmp3, height };
                    obj = { key: tmp3, height };
                  }
                  return tmp;
                });
              }
            }
            cResult[7] = I;
            tmp20 = I;
          } else {
            class I {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = Math.round(arg1);
                let tmp = dependencyMap((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    tmp = { key: tmp3, height };
                    obj = { key: tmp3, height };
                  }
                  return tmp;
                });
              }
            }
          }
          I = tmp20;
          if (cResult[8] === animatedStyle) {
            class I {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = Math.round(arg1);
                let tmp = dependencyMap((arg0) => {
                  let tmp = arg0;
                  let key;
                  if (arg0 != null) {
                    key = tmp.key;
                  }
                  if (key !== closure_0) {
                    tmp = { key: tmp3, height };
                    obj = { key: tmp3, height };
                  }
                  return tmp;
                });
              }
            }
            if (cResult[11] === conjureReminderLayers) {
              class I {
                constructor(arg0, arg1) {
                  let closure_0 = arg0;
                  let closure_1 = Math.round(arg1);
                  let tmp = dependencyMap((arg0) => {
                    let tmp = arg0;
                    let key;
                    if (arg0 != null) {
                      key = tmp.key;
                    }
                    if (key !== closure_0) {
                      tmp = { key: tmp3, height };
                      obj = { key: tmp3, height };
                    }
                    return tmp;
                  });
                }
              }
              if (cResult[16] === tmp21) {
                class I {
                  constructor(arg0, arg1) {
                    let closure_0 = arg0;
                    let closure_1 = Math.round(arg1);
                    let tmp = dependencyMap((arg0) => {
                      let tmp = arg0;
                      let key;
                      if (arg0 != null) {
                        key = tmp.key;
                      }
                      if (key !== closure_0) {
                        tmp = { key: tmp3, height };
                        obj = { key: tmp3, height };
                      }
                      return tmp;
                    });
                  }
                }
                return tmp26;
              }
              const tmp29 = jsx(stateFromStores(4618).View, {
                style: tmp21,
                accessibilityLiveRegion: "polite",
                children: tmp23,
              });
              cResult[16] = tmp21;
              cResult[17] = tmp23;
              cResult[18] = tmp29;
              tmp26 = tmp29;
            }
            if (cResult[14] !== renderReminder) {
              class O {
                constructor(key) {
                  return (
                    <closure_14 key={key.key} reminderKey={key.key} leaving={key.leaving} onMeasure={I}>
                      {renderReminder(key.key)}
                    </closure_14>
                  );
                }
              }
              cResult[14] = renderReminder;
              cResult[15] = O;
            } else {
              class O {
                constructor(key) {
                  return (
                    <closure_14 key={key.key} reminderKey={key.key} leaving={key.leaving} onMeasure={I}>
                      {renderReminder(key.key)}
                    </closure_14>
                  );
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
        }
      }
      const fn2 = function w() {
        if (null != num3) {
          if (num3 > 0) {
            set2 = sharedValue.set;
            obj2 = timing;
            set2(obj2.withTiming(num3, obj));
          } else {
            let num2 = 0;
            set = sharedValue.set;
            if (!stateFromStores) {
              const withDelay = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              const CONJURE_REMINDER_EXIT_MS = conjureReminderSlot.CONJURE_REMINDER_EXIT_MS;
              obj = timing;
              num2 = withDelay(CONJURE_REMINDER_EXIT_MS, obj.withTiming(0, obj2));
            }
            const result = set(num2);
          }
          return () => {
            obj = renderReminder(dependencyMap[6]);
            return obj.cancelAnimation(sharedValue);
          };
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
    }
  : (renderReminder) => {
      let _undefined;
      let c2;
      let reminder;
      let style;
      let tmp7;
      renderReminder = renderReminder.renderReminder;
      dependencyMap = undefined;
      let num;
      let sharedValue;
      onMeasure = undefined;
      let tmp = renderReminder;
      ({ style, reminder } = renderReminder);
      obj = renderReminder(504);
      const items = [onMeasure];
      const stateFromStores = obj.useStateFromStores(items, () => onMeasure.useReducedMotion);
      obj2 = renderReminder(16725);
      const conjureReminderLayers = obj2.useConjureReminderLayers(reminder);
      const found = conjureReminderLayers.find((leaving) => !leaving.leaving);
      let key;
      if (found != null) {
        key = found.key;
      }
      if (key == null) {
        key = null;
      }
      const tmp6 = num(sharedValue.useState(null), 2);
      [tmp7, c2] = tmp6;
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
      const tmpResult = tmp(4618);
      sharedValue = tmpResult.useSharedValue(0);
      const items1 = [sharedValue, num, stateFromStores];
      const effect = obj3.useEffect(() => {
        if (null != num) {
          if (num > 0) {
            set2 = sharedValue.set;
            obj2 = timing;
            set2(obj2.withTiming(num, obj));
          } else {
            let num2 = 0;
            set = sharedValue.set;
            if (!stateFromStores) {
              const withDelay = ReanimatedRexport.withDelay;
              ReanimatedRexport;
              const CONJURE_REMINDER_EXIT_MS = conjureReminderSlot.CONJURE_REMINDER_EXIT_MS;
              obj = timing;
              num2 = withDelay(CONJURE_REMINDER_EXIT_MS, obj.withTiming(0, obj2));
            }
            const result = set(num2);
          }
          return () => {
            obj = renderReminder(c2[6]);
            return obj.cancelAnimation(sharedValue);
          };
        }
      }, items1);
      const tmpResult2 = tmp(4618);
      class C {
        constructor() {
          obj = { height: sharedValue.get() };
          return obj;
        }
      }
      C.__closure = { height: sharedValue };
      C.__workletHash = 5124855589272;
      C.__initData = __initData2;
      const animatedStyle = tmpResult2.useAnimatedStyle(C);
      onMeasure = obj3.useCallback((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = Math.round(arg1);
        let tmp = _undefined((arg0) => {
          let tmp = arg0;
          let key;
          if (arg0 != null) {
            key = tmp.key;
          }
          if (key !== closure_0) {
            tmp = { key: tmp3, height };
            obj = { key: tmp3, height };
          }
          return tmp;
        });
      }, []);
      const items2 = [closure_9.slot, style, animatedStyle];
      const View = stateFromStores(4618).View;
      return (
        <View style={items2} accessibilityLiveRegion="polite">
          {conjureReminderLayers.map((key) => (
            <closure_14 key={key.key} reminderKey={key.key} leaving={key.leaving} onMeasure={onMeasure}>
              {renderReminder(key.key)}
            </closure_14>
          ))}
        </View>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reminderKey) => {
      const tmp2 = onMeasure;
      obj = reminderKey(onMeasure[8]);
      const cResult = obj.c(17);
      const tmp = reminderKey;
      reminderKey = reminderKey.reminderKey;
      const leaving = reminderKey.leaving;
      onMeasure = reminderKey.onMeasure;
      const children = reminderKey.children;
      obj2 = reminderKey(onMeasure[6]);
      const sharedValue = obj2.useSharedValue(0);
      const obj3 = reminderKey(onMeasure[6]);
      const sharedValue1 = obj3.useSharedValue(6);
      if (cResult[0] === leaving) {
        if (cResult[1] === sharedValue) {
          let tmp6;
          let tmp7;
          if (cResult[2] === sharedValue1) {
            tmp6 = cResult[3];
            tmp7 = cResult[4];
          }
          const effect = sharedValue1.useEffect(tmp6, tmp7);
          const fn2 = function w() {
            let items;
            obj = { opacity: sharedValue.get(), transform: items };
            items = [{ translateY: sharedValue1.get() }];
            ({ translateY: sharedValue1.get() });
            return obj;
          };
          const obj4 = { opacity: sharedValue, rise: sharedValue1 };
          fn2.__closure = obj4;
          fn2.__workletHash = 15997281547509;
          fn2.__initData = __initData3;
          const tmpResult = tmp(tmp2[6]);
          const animatedStyle = tmpResult.useAnimatedStyle(fn2);
          if (cResult[5] === onMeasure) {
            let tmp12;
            let tmp13;
            if (cResult[6] === reminderKey) {
              tmp12 = cResult[7];
            }
            if (cResult[8] !== animatedStyle) {
              let items = [closure_9.layer, animatedStyle];
              cResult[8] = animatedStyle;
              cResult[9] = items;
              tmp13 = items;
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
                      let tmp16;
                      if (cResult[15] === str) {
                        tmp16 = cResult[16];
                      }
                      return tmp16;
                    }
                  }
                }
              }
            }
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
        }
      }
      const fn = function s() {
        const withTiming = timing.withTiming;
        timing;
        if (leaving) {
          const result = set(withTiming(0, obj2));
        } else {
          const result1 = set(withTiming(1, obj));
          set2 = sharedValue1.set;
          obj = timing;
          set2(obj.withTiming(0, obj));
        }
        return () => {
          obj = reminderKey(onMeasure[6]);
          obj.cancelAnimation(sharedValue);
          obj2 = reminderKey(onMeasure[6]);
          obj2.cancelAnimation(sharedValue1);
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
    }
  : (reminderKey) => {
      reminderKey = reminderKey.reminderKey;
      const leaving = reminderKey.leaving;
      onMeasure = reminderKey.onMeasure;
      const children = reminderKey.children;
      obj = reminderKey(onMeasure[6]);
      const sharedValue = obj.useSharedValue(0);
      obj2 = reminderKey(onMeasure[6]);
      const sharedValue1 = obj2.useSharedValue(6);
      let items = [leaving, sharedValue, sharedValue1];
      const effect = sharedValue1.useEffect(() => {
        const withTiming = timing.withTiming;
        timing;
        if (leaving) {
          const result = set(withTiming(0, obj2));
        } else {
          const result1 = set(withTiming(1, obj));
          set2 = sharedValue1.set;
          obj = timing;
          set2(obj.withTiming(0, obj));
        }
        return () => {
          obj = reminderKey(onMeasure[6]);
          obj.cancelAnimation(sharedValue);
          obj2 = reminderKey(onMeasure[6]);
          obj2.cancelAnimation(sharedValue1);
        };
      }, items);
      const fn = function f() {
        let items;
        obj = { opacity: sharedValue.get(), transform: items };
        items = [{ translateY: sharedValue1.get() }];
        ({ translateY: sharedValue1.get() });
        return obj;
      };
      fn.__closure = { opacity: sharedValue, rise: sharedValue1 };
      fn.__workletHash = 9660771065874;
      fn.__initData = __initData4;
      const items1 = [onMeasure, reminderKey];
      const obj3 = reminderKey(onMeasure[6]);
      const animatedStyle = obj3.useAnimatedStyle(fn);
      const callback = sharedValue1.useCallback(
        (nativeEvent) => onMeasure(reminderKey, nativeEvent.nativeEvent.layout.height),
        items1,
      );
      const items2 = [closure_9.layer, animatedStyle];
      let tmp7;
      const View = leaving(onMeasure[6]).View;
      if (!leaving) {
        tmp7 = callback;
      }
      let str = "auto";
      let str2 = "auto";
      if (leaving) {
        str2 = "none";
      }
      if (leaving) {
        str = "no-hide-descendants";
      }
      return (
        <View
          style={items2}
          onLayout={tmp7}
          pointerEvents={str2}
          accessibilityElementsHidden={leaving}
          importantForAccessibility={str}
        >
          {children}
        </View>
      );
    };
let result = size.fileFinishedImporting("modules/conjure/reminders/native/ConjureReminderSlot.tsx");

export default tmp2;
