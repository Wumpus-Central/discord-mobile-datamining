// _runtime/metro/06283__.js
import Fragment from "../react/00021_Fragment.js";
import TOUCHABLE_STATEDefault from "../06280_TOUCHABLE_STATE.js";
import react from "../00019_react.js";

const jsx = Fragment.jsx;

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
  TOUCHABLE_STATEDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 delayLongPress={num} extraButtonProps={extraButtonProps} />;
}
