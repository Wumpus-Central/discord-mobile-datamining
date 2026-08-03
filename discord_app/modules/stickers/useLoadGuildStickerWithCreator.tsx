// === Module 16499: useLoadGuildStickersWithCreator ===

// Module 16499 (useLoadGuildStickersWithCreator)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import parseServerGuildSticker from "parseServerGuildSticker";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  let dependencyMap;
  let tmp2;
  const _require = arg0;
  [tmp2, dependencyMap] = callback(React.useState("loading"), 2);
  let obj = _require(589);
  const items = [parseServerGuildSticker];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = outer2_2(function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let c0 = tmp3;
                let c3 = 1;
                let obj1 = outer2_0(outer2_1[6]);
                v0 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.fetchGuildStickersWithCreator(outer1_0, v0);
                return obj1;
              }
            } else {
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
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp19) {
            let initialize = tmp19;
            if (tmp4 === c3) {
              c4 = tmp2;
              throw tmp19;
            } else {
              v0 = tmp;
            }
          }
        }
      });
      const _fetch = tmp;
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
    obj[1] = stateFromStores.map((user_id) => {
      user = user.getUser(user_id.user_id);
      let tmp2 = user_id;
      if (null != user) {
        const obj = {};
        const merged = Object.assign(user_id);
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