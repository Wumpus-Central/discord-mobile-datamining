// _runtime/metro/05563__.js
import "noop";
import { jsx } from "jsxProd";
import { _isNativeReflectConstruct } from "../05560__isNativeReflectConstruct.js";


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
  return jsx(_isNativeReflectConstruct, { delayLongPress: num, extraButtonProps });
};