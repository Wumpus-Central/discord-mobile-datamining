// _runtime/metro/04919__.js
import _mod1306 from "01306__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1306(sum);
}
