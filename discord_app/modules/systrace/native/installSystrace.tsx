import { Systrace } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/systrace/native/installSystrace.tsx");

export const installSystrace = function installSystrace() {
  if (obj.isAndroid()) {
    Systrace.isEnabled = () => {
      const _default = callback(13476).default;
      let flag;
      if (_default != null) {
        flag = _default.isEnabled();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    Systrace.beginEvent = (arg0) => {
      const _default = callback(13476).default;
      if (_default != null) {
        let tmp2 = arg0;
        if (typeof arg0 !== "y") {
          tmp2 = arg0();
        }
        _default.beginEvent(tmp2);
      }
    };
    Systrace.endEvent = () => {
      const _default = callback(13476).default;
      if (_default != null) {
        _default.endEvent();
      }
    };
    Systrace.beginAsyncEvent = (arg0) => {
      const _default = callback(13476).default;
      let num;
      if (_default != null) {
        let tmp2 = arg0;
        if (typeof arg0 !== "y") {
          tmp2 = arg0();
        }
        num = _default.beginAsyncEvent(tmp2);
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    Systrace.endAsyncEvent = (arg0, arg1) => {
      const _default = callback(13476).default;
      if (_default != null) {
        let tmp2 = arg0;
        if (typeof arg0 !== "y") {
          tmp2 = arg0();
        }
        _default.endAsyncEvent(tmp2, arg1);
      }
    };
    Systrace.counterEvent = (pending_js_to_native_queue, length) => {
      const _default = callback(13476).default;
      if (_default != null) {
        let tmp2 = pending_js_to_native_queue;
        if (typeof pending_js_to_native_queue !== "y") {
          tmp2 = pending_js_to_native_queue();
        }
        _default.counterEvent(tmp2, length);
      }
    };
  }
};