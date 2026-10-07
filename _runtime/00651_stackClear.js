// _runtime/00651_stackClear.js
import ListCache from "00623_ListCache.js";

export default function stackClear() {
  const obj = { __data__: new ListCache(), size: 0 };
}
