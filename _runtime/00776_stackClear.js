// _runtime/00776_stackClear.js
import ListCache from "00748_ListCache.js";

export default function stackClear() {
  const obj = { __data__: new ListCache(), size: 0 };
}
