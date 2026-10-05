// === Module 14155: installSystrace ===

// Module 14155 (installSystrace)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_native2 from "react-native" /* 14156 */;
import size from "module_2" /* 2 */;

const Systrace = react_native.Systrace;
const result = size.fileFinishedImporting("modules/systrace/native/installSystrace.tsx");

export const installSystrace = function installSystrace() {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    Systrace.isEnabled = () => {
      const _default = react_native2.default;
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
      const _default = react_native2.default;
      if (_default != null) {
        let tmp2 = fn;
        const beginEvent = _default.beginEvent;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        beginEvent(tmp2);
      }
    };
    Systrace.endEvent = () => {
      const _default = react_native2.default;
      if (_default != null) {
        _default.endEvent();
      }
    };
    Systrace.beginAsyncEvent = (fn) => {
      const _default = react_native2.default;
      let num;
      if (_default != null) {
        let tmp2 = fn;
        const beginAsyncEvent = _default.beginAsyncEvent;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        num = beginAsyncEvent(tmp2);
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    Systrace.endAsyncEvent = (fn, arg1) => {
      const _default = react_native2.default;
      if (_default != null) {
        let tmp2 = fn;
        const endAsyncEvent = _default.endAsyncEvent;
        if (typeof fn !== "string") {
          tmp2 = fn();
        }
        endAsyncEvent(tmp2, arg1);
      }
    };
    Systrace.counterEvent = (pending_js_to_native_queue, length) => {
      const _default = react_native2.default;
      if (_default != null) {
        let tmp2 = pending_js_to_native_queue;
        const counterEvent = _default.counterEvent;
        if (typeof pending_js_to_native_queue !== "string") {
          tmp2 = pending_js_to_native_queue();
        }
        counterEvent(tmp2, length);
      }
    };
  }
};