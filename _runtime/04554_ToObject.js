// _runtime/04554_ToObject.js
import { RequireObjectCoercible } from "04555_RequireObjectCoercible.js";
import { 00549__ } from "metro/00549__.js";

export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return 00549__(arg0);
};