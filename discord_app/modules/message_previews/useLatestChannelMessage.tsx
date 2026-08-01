// === Module 14354: useLatestChannelMessage ===

// Module 14354 (useLatestChannelMessage)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default function useLatestChannelMessage(arg0) {
  let c1;
  let id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  let callback;
  ({ guild_id: c1, id } = arg0);
  let items = [initialize];
  const tmp = callback(flag(id[3]).useStateFromStoresArray(items, () => {
    if (flag) {
      const items = [null, true];
      let items1 = items;
    } else {
      items1 = [outer1_5.message(c1, id), outer1_5.isLatest(c1, id)];
    }
    return items1;
  }), 2);
  callback = tmp2;
  let items1 = [id, tmp[1]];
  useEffect(() => {
    let tmp2 = null == id;
    if (!tmp2) {
      tmp2 = c3;
    }
    if (!tmp2) {
      _undefined(id[4]).addWant(id);
      const obj = _undefined(id[4]);
    }
  }, items1);
  return tmp[0];
};