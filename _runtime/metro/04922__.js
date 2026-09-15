// _runtime/metro/04922__.js
import _mod1307 from "01307__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1307(sum);
}
