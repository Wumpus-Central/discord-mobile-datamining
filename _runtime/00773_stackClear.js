// _runtime/00773_stackClear.js
import ListCache from "00745_ListCache.js";

export default function stackClear() {
  const obj = { __data__: new ListCache(), size: 0 };
}
