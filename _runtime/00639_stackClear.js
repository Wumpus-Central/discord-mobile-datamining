// _runtime/00639_stackClear.js
import ListCache from "00611_ListCache.js";

export default function stackClear() {
  const obj = { __data__: new ListCache(), size: 0 };
}
