// === Module 15528: useLatestChannelMessage ===

// Module 15528 (useLatestChannelMessage)
import MessagePreviewManagerDefault from "MessagePreviewManager" /* 15529 */;
import _slicedToArray from "module_32" /* 32 */;
import MessagePreviewStore from "message_previews/MessagePreviewStore" /* 13935 */;

const require = globalThis.__r;

const require = fn;
const useEffect = fn(19).useEffect;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useLatestChannelMessage(guild_id, arg1) {
  const cResult = require("c").c(9);
  _require = tmp4;
  guild_id = guild_id.guild_id;
  id = guild_id.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessagePreviewStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    if (cResult[2] === tmp4) {
      if (cResult[3] === guild_id) {
        let tmp7 = cResult[4];
      }
      const tmpResult = tmp(tmp2[5]);
      const tmp11 = _slicedToArray(tmp(tmp2[5]).useStateFromStoresArray(first, tmp7), 2)[1];
      _slicedToArray = tmp11;
      if (cResult[5] === id) {
        if (cResult[6] === tmp11) {
          let tmp12 = cResult[7];
          let tmp13 = cResult[8];
        }
        useEffect(tmp12, tmp13);
        return tmp10;
      }
      class L {
        constructor() {
          tmp2 = null == id;
          tmp = id;
          if (!tmp2) {
            tmp2 = closure_3;
          }
          if (!tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[6]);
            addWantResult = obj.addWant(tmp);
          }
          return;
        }
      }
      let items1 = [id, tmp11];
      cResult[5] = id;
      cResult[6] = tmp11;
      cResult[7] = L;
      cResult[8] = items1;
      tmp13 = items1;
      tmp12 = L;
      const tmp9 = _slicedToArray(tmp(tmp2[5]).useStateFromStoresArray(first, tmp7), 2);
    }
  }
  const fn = function c() {
    if (closure_0) {
      const items = [null, true];
      let items1 = items;
    } else {
      items1 = [MessagePreviewStore.message(guild_id, id), MessagePreviewStore.isLatest(guild_id, id)];
    }
    return items1;
  };
  cResult[1] = id;
  cResult[2] = undefined !== arg1 && arg1;
  cResult[3] = guild_id;
  cResult[4] = fn;
  tmp7 = fn;
  let obj = require("c");
  tmp = _require;
  tmp2 = id;
}) : (function useLatestChannelMessage(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c1 = undefined;
  id = undefined;
  _slicedToArray = undefined;
  ({ guild_id: c1, id } = arg0);
  let items = [MessagePreviewStore];
  const tmp = _slicedToArray(flag(id[5]).useStateFromStoresArray(items, () => {
    if (flag) {
      const items = [null, true];
      let items1 = items;
    } else {
      items1 = [MessagePreviewStore.message(c1, id), MessagePreviewStore.isLatest(c1, id)];
    }
    return items1;
  }), 2);
  _slicedToArray = tmp2;
  let items1 = [id, tmp[1]];
  useEffect(() => {
    let tmp2 = null == id;
    if (!tmp2) {
      tmp2 = closure_3;
    }
    if (!tmp2) {
      MessagePreviewManagerDefault.addWant(id);
    }
  }, items1);
  return tmp[0];
});