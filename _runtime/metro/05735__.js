// _runtime/metro/05735__.js
import noopAll from "../00019_noop.js";
import _isNativeReflectConstructDefault from "../05732__isNativeReflectConstruct.js";
import { jsx } from "../react/00021_jsxProd.js";

noopAll;

export default function _default(delayLongPress) {
  let num = delayLongPress.delayLongPress;
  if (num === undefined) {
    num = 600;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const merged = Object.assign(delayLongPress, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(_isNativeReflectConstructDefault, { delayLongPress: num, extraButtonProps });
};