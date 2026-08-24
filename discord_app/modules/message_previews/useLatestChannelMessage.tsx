// === Module 14664: useLatestChannelMessage ===

// Module 14664 (useLatestChannelMessage)
import closure_3 from "_slicedToArray" /* 32 */;
import { useEffect } from "noop" /* 19 */;
import closure_5 from "initialize" /* 13265 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  let callback;
  ({ guild_id: c1, id } = arg0);
  let items = [closure_5];
  const tmp = callback(flag(id[3]).useStateFromStoresArray(items, () => {
    if (flag) {
      const items = [null, true];
      let items1 = items;
    } else {
      items1 = [closure_1_5.message(c1, id), closure_1_5.isLatest(c1, id)];
    }
    return items1;
  }), 2);
  callback = tmp2;
  let items1 = [id, tmp[1]];
  useEffect(() => {
    let tmp2 = null == id;
    if (!tmp2) {
      tmp2 = closure_3;
    }
    if (!tmp2) {
      _undefined(id[4]).addWant(id);
      const obj = _undefined(id[4]);
    }
  }, items1);
  return tmp[0];
};