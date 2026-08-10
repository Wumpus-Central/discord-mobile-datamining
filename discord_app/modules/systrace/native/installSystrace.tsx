// discord_app/modules/systrace/native/installSystrace.tsx
import { Systrace } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/systrace/native/installSystrace.tsx");

export const installSystrace = function installSystrace() {
  if (obj.isAndroid()) {
    Systrace.isEnabled = () => {
      const _default = callback(13667).default;
      let flag;
      if (_default != null) {
        flag = _default.isEnabled();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    Systrace.beginEvent = (fn) => {
      const _default = callback(13667).default;
      if (_default != null) {
        let tmp2 = fn;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        _default.beginEvent(tmp2);
      }
    };
    Systrace.endEvent = () => {
      const _default = callback(13667).default;
      if (_default != null) {
        _default.endEvent();
      }
    };
    Systrace.beginAsyncEvent = (fn) => {
      const _default = callback(13667).default;
      let num;
      if (_default != null) {
        let tmp2 = fn;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        num = _default.beginAsyncEvent(tmp2);
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    Systrace.endAsyncEvent = (fn) => {
      const _default = callback(13667).default;
      if (_default != null) {
        let tmp2 = fn;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        _default.endAsyncEvent(tmp2, arg1);
      }
    };
    Systrace.counterEvent = (pending_js_to_native_queue, length) => {
      const _default = callback(13667).default;
      if (_default != null) {
        let tmp2 = pending_js_to_native_queue;
        if (typeof pending_js_to_native_queue !== "string") {
          tmp2 = pending_js_to_native_queue();
        }
        _default.counterEvent(tmp2, length);
      }
    };
  }
};