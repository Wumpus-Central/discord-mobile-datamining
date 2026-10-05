// _runtime/00651_stackClear.js
import ListCache from "00623_ListCache.js";

export default function stackClear() {
  ({ __data__: new ListCache(), size: 0 });
  new ListCache();
}
