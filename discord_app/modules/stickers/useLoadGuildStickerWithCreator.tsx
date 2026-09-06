// discord_app/modules/stickers/useLoadGuildStickerWithCreator.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";
import GuildStickersStore from "GuildStickersStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  _require = arg0;
  [tmp2, dependencyMap] = _slicedToArray(noop.useState("loading"), 2);
  let obj = require("initialize");
  const items = [GuildStickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStickersStore.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = noop.useEffect(() => {
    closure_2 = async function _fetch() {
      closure_0 = tmp3;
      await abortController(signal[6]).fetchGuildStickersWithCreator(closure_0, signal);
      if (1 === tmp7) {
        c3 = 0;
        v2("error");
        closure_128_0 = null;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v2("success");
        closure_128_0 = null;
        c3 = 0;
      }
      return arg1;
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    (function fetch() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      dependencyMap("loading");
      if (abortController != null) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === tmp2) {
    obj = {
      status: tmp2,
      stickers: stateFromStores.map((user_id) => {
        user = user.getUser(user_id.user_id);
        let tmp2 = user_id;
        if (null != user) {
          const obj = {};
          const merged = Object.assign(user_id);
          obj.user = user;
          tmp2 = obj;
        }
        return tmp2;
      }),
    };
  } else {
    obj = { status: tmp2 };
  }
  return obj;
}
