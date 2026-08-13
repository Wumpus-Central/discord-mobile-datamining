// _runtime/04321_TouchableHaptic.js
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

require("noop").useCallback;

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
  const merged = Object.assign(hapticType, Object.create(null));
  let c6;
  const items = [impactMedium, hapticOptions];
  const tmp4 = onPressIn(() => {
    str(hapticOptions[4]).trigger(impactMedium, hapticOptions);
  }, items);
  c6 = tmp4;
  const items1 = [str, tmp4, onPressIn];
  const items2 = [str, tmp4, onPress];
  const items3 = [str, tmp4, onLongPress];
  const tmp5 = onPressIn((arg0) => {
    if ("onPressIn" === str) {
      _undefined();
    }
    if (onPressIn != null) {
      tmp3(arg0);
    }
  }, items1);
  const tmp6 = onPressIn((arg0) => {
    if ("onPress" === str) {
      _undefined();
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
        _undefined();
      }
      if (onPress != null) {
        tmp3(arg0);
      }
    }, items2),
    onLongPress: onPressIn((arg0) => {
      if ("onLongPress" === str) {
        _undefined();
      }
      if (onLongPress != null) {
        tmp3(arg0);
      }
    }, items3)
  });
};