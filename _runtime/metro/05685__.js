// _runtime/metro/05685__.js
import _mod1331 from "01331__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1331(sum);
}
