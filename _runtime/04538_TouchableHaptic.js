// _runtime/04538_TouchableHaptic.js
import _mod17 from "metro/00017__.js";
import _mod19 from "metro/00019__.js";
import jsxProd from "react/00021_jsxProd.js";
import _modDef4531 from "metro/04531__.js";

_mod19.useCallback;
const Pressable = _mod17.Pressable;
const jsx = jsxProd.jsx;

export const TouchableHaptic = function TouchableHaptic(hapticType) {
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
  const merged = Object.assign(
    hapticType,
    Object.assign({ hapticType: 0, hapticTrigger: 0, hapticOptions: 0, onPressIn: 0, onPress: 0, onLongPress: 0 }),
  );
  const items = [impactMedium, hapticOptions];
  const tmp4 = onPressIn(() => {
    _modDef4531.trigger(impactMedium, hapticOptions);
  }, items);
  closure_6 = tmp4;
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
  const merged1 = Object.assign(merged);
  return onLongPress(onPress, {
    onPressIn: tmp5,
    onPress: onPressIn((arg0) => {
      if ("onPress" === str) {
        closure_6();
      }
      if (onPress != null) {
        tmp3(arg0);
      }
    }, items2),
    onLongPress: onPressIn((arg0) => {
      if ("onLongPress" === str) {
        closure_6();
      }
      if (onLongPress != null) {
        tmp3(arg0);
      }
    }, items3),
  });
};
