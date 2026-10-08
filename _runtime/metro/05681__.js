// _runtime/metro/05681__.js
import _mod1330 from "01330__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1330(sum);
}
