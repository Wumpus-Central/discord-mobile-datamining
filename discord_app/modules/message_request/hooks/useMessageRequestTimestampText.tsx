// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let extractTimestampResult;
      let first;
      let lastMessageId;
      let message;
      let tmp10;
      let tmp7;
      let tmp9;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(7);
      const obj2 = require("useMessageRequestPreview");
      const messageRequestPreview = obj2.useMessageRequestPreview(id);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function l() {
          return ReadStateStore.lastMessageId(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === messageRequestPreview) {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
          tmp9 = tmp10;
        }
        return tmp9;
      }
      const obj3 = { lastMessageId: stateFromStores };
      const forResult = Symbol.for("react.early_return_sentinel");
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj3);
      if (obj3.loaded) {
        if (null != message) {
          const obj6 = SnowflakeUtilsDefault;
          extractTimestampResult = obj6.extractTimestamp(message.id);
        }
        let str = "";
        let calendarResult;
        if (null != extractTimestampResult) {
          const obj7 = _modDef4461(extractTimestampResult);
          calendarResult = obj7.calendar();
          str = forResult;
        }
        cResult[3] = stateFromStores;
        cResult[4] = messageRequestPreview;
        cResult[5] = calendarResult;
        cResult[6] = str;
        tmp10 = str;
        tmp9 = calendarResult;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        const obj5 = SnowflakeUtilsDefault;
        extractTimestampResult = obj5.extractTimestamp(lastMessageId);
      }
    }
  : (arg0) => {
      let extractTimestampResult;
      let id;
      let items;
      let lastMessageId;
      let message;
      let obj3;
      _require = arg0;
      const obj = require("useMessageRequestPreview");
      const messageRequestPreview = obj.useMessageRequestPreview(arg0);
      const obj2 = { lastMessageId: obj3.useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id)) };
      items = [ReadStateStore];
      obj3 = require("get initialized");
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj2);
      if (obj2.loaded) {
        if (null != message) {
          const obj5 = SnowflakeUtilsDefault;
          extractTimestampResult = obj5.extractTimestamp(message.id);
        }
        let str = "";
        if (null != extractTimestampResult) {
          const obj6 = _modDef4461(extractTimestampResult);
          str = obj6.calendar();
        }
        return str;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        const obj4 = SnowflakeUtilsDefault;
        extractTimestampResult = obj4.extractTimestamp(lastMessageId);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let extractTimestampResult;
      let first;
      let lastMessageId;
      let message;
      let tmp10;
      let tmp7;
      let tmp9;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(7);
      const obj2 = require("useMessageRequestPreview");
      const messageRequestPreview = obj2.useMessageRequestPreview(id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function l() {
          return ReadStateStore.lastMessageId(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === messageRequestPreview) {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
          tmp9 = tmp10;
        }
        return tmp9;
      }
      const obj3 = { lastMessageId: stateFromStores };
      const forResult = Symbol.for("react.early_return_sentinel");
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj3);
      if (obj3.loaded) {
        if (null != message) {
          const obj6 = SnowflakeUtilsDefault;
          extractTimestampResult = obj6.extractTimestamp(message.id);
        }
        let str = "";
        let timestampString;
        if (null != extractTimestampResult) {
          const tmpResult2 = require("ThreadUtils");
          timestampString = tmpResult2.getTimestampString(extractTimestampResult);
          str = forResult;
        }
        cResult[3] = stateFromStores;
        cResult[4] = messageRequestPreview;
        cResult[5] = timestampString;
        cResult[6] = str;
        tmp10 = str;
        tmp9 = timestampString;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        const obj5 = SnowflakeUtilsDefault;
        extractTimestampResult = obj5.extractTimestamp(lastMessageId);
      }
    }
  : (arg0) => {
      let extractTimestampResult;
      let id;
      let items;
      let lastMessageId;
      let message;
      let obj3;
      _require = arg0;
      const obj = require("useMessageRequestPreview");
      const messageRequestPreview = obj.useMessageRequestPreview(arg0);
      const obj2 = { lastMessageId: obj3.useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id)) };
      items = [ReadStateStore];
      obj3 = require("get initialized");
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj2);
      const tmp = _require;
      if (obj2.loaded) {
        if (null != message) {
          const obj5 = SnowflakeUtilsDefault;
          extractTimestampResult = obj5.extractTimestamp(message.id);
        }
        let str = "";
        if (null != extractTimestampResult) {
          const tmpResult = tmp(7409);
          str = tmpResult.getTimestampString(extractTimestampResult);
        }
        return str;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        const obj4 = SnowflakeUtilsDefault;
        extractTimestampResult = obj4.extractTimestamp(lastMessageId);
      }
    };
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = tmp2;
export const useMessageRequestRelativeTimestampText = tmp3;
