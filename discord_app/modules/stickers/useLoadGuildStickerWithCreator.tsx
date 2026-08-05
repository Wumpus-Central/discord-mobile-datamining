// discord_app/modules/stickers/useLoadGuildStickerWithCreator.tsx
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import parseServerGuildSticker from "parseServerGuildSticker";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  let dependencyMap;
  let tmp2;
  const _require = arg0;
  [tmp2, dependencyMap] = callback(React.useState("loading"), 2);
  let obj = _initialize;
  const items = [parseServerGuildSticker];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = outer2_2(function*() {
        let c0 = tmp3;
        let c3 = 1;
        const obj1 = outer2_0(outer2_1[6]);
        yield obj1.fetchGuildStickersWithCreator(outer1_0, v0);
        if (1 === tmp7) {
          c3 = 0;
          v0("error");
          c0 = null;
          let c4 = 3;
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