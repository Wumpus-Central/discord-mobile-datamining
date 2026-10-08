// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef4659 from "../../../../_runtime/metro/04659__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

const require = globalThis.__r;

const require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMessageRequestTimestampText(id) {
      _require = id;
      const cResult = require("c").c(7);
      const obj = require("c");
      const tmp = _require;
      const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function n() {
          return ReadStateStore.lastMessageId(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj2 = require("useMessageRequestPreview");
      const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === messageRequestPreview) {
          let tmp9 = cResult[5];
          let tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
          tmp9 = tmp10;
        }
        return tmp9;
      }
      const obj3 = { lastMessageId: stateFromStores };
      const tmpResult = tmp(504);
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj3);
      if (obj3.loaded) {
        if (null != message) {
          let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
        }
        let str = "";
        let calendarResult;
        if (null != extractTimestampResult) {
          calendarResult = _modDef4659(extractTimestampResult).calendar();
          str = forResult;
          const obj7 = _modDef4659(extractTimestampResult);
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
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
      }
      forResult = Symbol.for("react.early_return_sentinel");
    }
  : function useMessageRequestTimestampText(arg0) {
      _require = arg0;
      const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(arg0);
      const obj2 = { lastMessageId: null };
      const obj = require("useMessageRequestPreview");
      const items = [ReadStateStore];
      obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj2);
      if (obj2.loaded) {
        if (null != message) {
          let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
        }
        let str = "";
        if (null != extractTimestampResult) {
          str = _modDef4659(extractTimestampResult).calendar();
          const obj6 = _modDef4659(extractTimestampResult);
        }
        return str;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
      }
      const obj3 = require("initialize");
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = tmp2;
export const useMessageRequestRelativeTimestampText = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMessageRequestRelativeTimestampText(id) {
      _require = id;
      const cResult = require("c").c(7);
      const obj = require("c");
      const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(id);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function n() {
          return ReadStateStore.lastMessageId(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj2 = require("useMessageRequestPreview");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === messageRequestPreview) {
          let tmp9 = cResult[5];
          let tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
          tmp9 = tmp10;
        }
        return tmp9;
      }
      const obj3 = { lastMessageId: stateFromStores };
      const tmpResult = require("initialize");
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj3);
      if (obj3.loaded) {
        if (null != message) {
          let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
        }
        let str = "";
        let timestampString;
        if (null != extractTimestampResult) {
          timestampString = tmp(7895).getTimestampString(extractTimestampResult);
          str = forResult;
          const tmpResult2 = tmp(7895);
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
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
      }
      forResult = Symbol.for("react.early_return_sentinel");
    }
  : function useMessageRequestRelativeTimestampText(arg0) {
      _require = arg0;
      const messageRequestPreview = require("useMessageRequestPreview").useMessageRequestPreview(arg0);
      const obj2 = { lastMessageId: null };
      const obj = require("useMessageRequestPreview");
      const tmp = _require;
      const items = [ReadStateStore];
      obj2.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
      const merged = Object.assign(messageRequestPreview);
      ({ lastMessageId, message } = obj2);
      if (obj2.loaded) {
        if (null != message) {
          let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
        }
        let str = "";
        if (null != extractTimestampResult) {
          str = tmp(7895).getTimestampString(extractTimestampResult);
          const tmpResult = tmp(7895);
        }
        return str;
      }
      extractTimestampResult = null;
      if (null != lastMessageId) {
        extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
      }
      const obj3 = require("initialize");
    };
