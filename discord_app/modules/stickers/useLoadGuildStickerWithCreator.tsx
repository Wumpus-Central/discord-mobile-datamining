// === Module 16797: useLoadGuildStickersWithCreator ===

// Module 16797 (useLoadGuildStickersWithCreator)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import parseServerGuildSticker from "parseServerGuildSticker" /* 6770 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  const _require = arg0;
  [tmp2, dependencyMap] = callback(React.useState("loading"), 2);
  let obj = _require(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = closure_2_2(function*() {
        c0 = tmp3;
        c3 = 1;
        obj1 = abortController(signal[6]);
        yield obj1.fetchGuildStickersWithCreator(closure_1_0, v0);
        if (1 === tmp7) {
          c3 = 0;
          v0("error");
          c0 = null;
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          v0("success");
          c0 = null;
          c3 = 0;
        }
        c3 = 0;
        return arg1;
      });
      closure_2 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    (function fetch() {
      const self = this;
      const apply = _fetch.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      signal("loading");
      if (abortController != null) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === tmp2) {
    obj = { status: null, stickers: null };
    obj[0] = tmp2;
    obj[1] = stateFromStores.map((item, index) => {
      user = user.getUser(item.user_id);
      let tmp2 = item;
      if (null != user) {
        const obj = {};
        const merged = Object.assign(item);
        obj.user = user;
        tmp2 = obj;
      }
      return tmp2;
    });
  } else {
    obj = { status: null };
    obj[0] = tmp2;
  }
  return obj;
};