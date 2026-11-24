// === Module 5323: ? ===

// Module 5323
import _modDef5320 from "module_5320" /* 5320 */;
import noop from "module_19" /* 19 */;

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
  return jsx(_modDef5320, { delayLongPress: num, extraButtonProps });
};