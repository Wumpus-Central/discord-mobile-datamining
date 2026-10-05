// discord_app/modules/message_previews/useLatestChannelMessage.tsx
import react from "../../../_runtime/00019_react.js";
import MessagePreviewManagerDefault from "MessagePreviewManager.tsx";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import MessagePreviewStore from "MessagePreviewStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guild_id;

let _slicedToArray = _slicedToArray_mod;
const useEffect = react.useEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, arg1) => {
      let closure_0;
      let closure_3;
      let first;
      let id;
      let tmp2 = id;
      let obj = require("react");
      const cResult = obj.c(9);
      const tmp = _require;
      _require = tmp4;
      guild_id = guild_id.guild_id;
      id = guild_id.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MessagePreviewStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        if (cResult[2] === (undefined !== arg1 && arg1)) {
          let tmp7;
          if (cResult[3] === guild_id) {
            tmp7 = cResult[4];
          }
          const tmpResult = tmp(tmp2[5]);
          const tmp11 = _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp7), 2)[1];
          _slicedToArray = tmp11;
          if (cResult[5] === id) {
            let tmp12;
            let tmp13;
            if (cResult[6] === tmp11) {
              tmp12 = cResult[7];
              tmp13 = cResult[8];
            }
            useEffect(tmp12, tmp13);
            return tmp10;
          }
          const fn2 = function p() {
            const tmp2 = null == id || closure_3;
            if (!tmp2) {
              const obj = MessagePreviewManagerDefault;
              obj.addWant(id);
            }
          };
          let items1 = [id, tmp11];
          cResult[5] = id;
          cResult[6] = tmp11;
          cResult[7] = fn2;
          cResult[8] = items1;
          tmp13 = items1;
          tmp12 = fn2;
        }
      }
      const fn = function c() {
        let items1;
        if (closure_0) {
          const items = [null, true];
          items1 = items;
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
    }
  : (arg0) => {
      let c1;
      let closure_3;
      let id;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      c1 = undefined;
      id = undefined;
      _slicedToArray = undefined;
      ({ guild_id: c1, id } = arg0);
      let obj = flag(id[5]);
      let items = [MessagePreviewStore];
      let tmp = _slicedToArray(
        obj.useStateFromStoresArray(items, () => {
          let items1;
          const tmp = flag;
          if (tmp) {
            const items = [null, true];
            items1 = items;
          } else {
            items1 = [MessagePreviewStore.message(c1, id), MessagePreviewStore.isLatest(c1, id)];
          }
          return items1;
        }),
        2,
      );
      _slicedToArray = tmp3;
      let items1 = [id, tmp[1]];
      const first = tmp[0];
      useEffect(() => {
        const tmp2 = null == id || closure_3;
        if (!tmp2) {
          const obj = MessagePreviewManagerDefault;
          obj.addWant(id);
        }
      }, items1);
      return first;
    };
const result = size.fileFinishedImporting("modules/message_previews/useLatestChannelMessage.tsx");

export default tmp2;
