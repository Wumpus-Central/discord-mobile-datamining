// _runtime/00640_stackClear.js
import ListCache from "00612_ListCache.js";

export default function stackClear() {
  const obj = { __data__: new ListCache(), size: 0 };
}
