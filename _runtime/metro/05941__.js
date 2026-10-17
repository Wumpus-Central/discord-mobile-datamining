// _runtime/metro/05941__.js
import _mod1333 from "01333__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1333(sum);
}
