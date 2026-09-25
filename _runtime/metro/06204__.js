// _runtime/metro/06204__.js
import _modDef6201 from "06201__.js";
import noop from "00019__.js";

const jsx = fn(21).jsx;

export default function _default(delayLongPress) {
  let num = delayLongPress.delayLongPress;
  if (num === undefined) {
    num = 600;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const merged = Object.assign(delayLongPress, Object.assign({ delayLongPress: 0, extraButtonProps: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_modDef6201, { delayLongPress: num, extraButtonProps });
}
