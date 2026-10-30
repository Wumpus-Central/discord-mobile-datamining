// _runtime/metro/06490__.js
import _mod1319 from "01319__.js";

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return _mod1319(sum);
}
