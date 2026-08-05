// _runtime/metro/05421__.js
import { jsx } from "jsxProd";
import { _isNativeReflectConstruct } from "../05420__isNativeReflectConstruct.js";


export default require("noop").forwardRef((delayLongPress, ref) => {
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
  return jsx(_isNativeReflectConstruct, { ref, delayLongPress: num, extraButtonProps });
});