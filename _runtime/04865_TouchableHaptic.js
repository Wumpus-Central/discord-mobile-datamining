// === Module 4865: TouchableHaptic ===

// Module 4865 (TouchableHaptic)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4858 from "module_4858" /* 4858 */;

react.useCallback;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;

export const TouchableHaptic = function TouchableHaptic(hapticType) {
  let hapticOptions;
  let impactMedium = hapticType.hapticType;
  if (impactMedium === undefined) {
    impactMedium = impactMedium(hapticOptions[3]).HapticFeedbackTypes.impactMedium;
  }
  let str = hapticType.hapticTrigger;
  if (str === undefined) {
    str = "onPressIn";
  }
  hapticOptions = hapticType.hapticOptions;
  const onPressIn = hapticType.onPressIn;
  const onPress = hapticType.onPress;
  const onLongPress = hapticType.onLongPress;
  const merged = Object.assign(hapticType, Object.assign({ hapticType: 0, hapticTrigger: 0, hapticOptions: 0, onPressIn: 0, onPress: 0, onLongPress: 0 }));
  const items = [impactMedium, hapticOptions];
  const tmp4 = onPressIn(() => {
    const obj = _modDef4858;
    obj.trigger(impactMedium, hapticOptions);
  }, items);
  let closure_6 = tmp4;
  const items1 = [str, tmp4, onPressIn];
  const items2 = [str, tmp4, onPress];
  const items3 = [str, tmp4, onLongPress];
  const tmp5 = onPressIn((arg0) => {
    if ("onPressIn" === str) {
      closure_6();
    }
    if (onPressIn != null) {
      tmp3(arg0);
    }
  }, items1);
  const tmp6 = onPressIn((arg0) => {
    if ("onPress" === str) {
      closure_6();
    }
    if (onPress != null) {
      tmp3(arg0);
    }
  }, items2);
  let obj = {
    onPressIn: tmp5,
    onPress: tmp6,
    onLongPress: onPressIn((arg0) => {
      if ("onLongPress" === str) {
        closure_6();
      }
      if (onLongPress != null) {
        tmp3(arg0);
      }
    }, items3)
  };
  const merged1 = Object.assign(merged);
  return onLongPress(onPress, obj);
};