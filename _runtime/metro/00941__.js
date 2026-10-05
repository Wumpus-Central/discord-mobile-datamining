// === Module 941: ? ===

// Module 941
import _mod915 from "module_915" /* 915 */;

let _sentryId, c3, c4, hasOwnProperty;

let tmp;
const _mod693 = tmp(693);
function instrumentDOM() {
  let bindResult;
  const tmp = require;
  if (_mod915.WINDOW.document) {
    const str = "dom";
    let tmp3 = null;
    const triggerHandlers = _mod693.triggerHandlers;
    require = triggerHandlers.bind(null, "dom");
    let c1 = true;
    const fn = (event) => {
      let timeout;
      function getEventTarget(target) {
        try {
          return target.target;
        } catch (err) {
          return null;
        }
      }
      function isSimilarToLastCapturedEvent(type) {
        if (type.type !== c3) {
          return false;
        } else {
          try {
            if (type.target) {
              if (type.target._sentryId === c4) {
                return true;
              }
            }
            return false;
          } catch (err) {
          }
        }
      }
      const tmp = event;
      if (tmp) {
        if (!event._sentryCaptured) {
          const tmp2 = getEventTarget(event);
          let tmp3 = "keypress" === event.type;
          if (tmp3) {
            let tagName;
            if (tmp2 != null) {
              tagName = tmp2.tagName;
            }
            let tmp6 = !tagName;
            if (tagName) {
              tmp6 = "INPUT" !== tmp2.tagName && "TEXTAREA" !== tmp2.tagName && !tmp2.isContentEditable;
              const tmp7 = "INPUT" !== tmp2.tagName && "TEXTAREA" !== tmp2.tagName && !tmp2.isContentEditable;
            }
            tmp3 = tmp6;
          }
          if (!tmp3) {
            const obj = _mod693;
            const result = obj.addNonEnumerableProperty(event, "_sentryCaptured", true);
            const tmp11 = tmp2 && !tmp2._sentryId;
            if (tmp11) {
              const addNonEnumerableProperty = _mod693.addNonEnumerableProperty;
              _mod693;
              const tmp8Result2 = _mod693;
              const result1 = addNonEnumerableProperty(tmp2, "_sentryId", tmp8Result2.uuid4());
            }
            let str6 = "input";
            if ("keypress" !== event.type) {
              str6 = event.type;
            }
            if (!isSimilarToLastCapturedEvent(event)) {
              const obj2 = { event, name: str6, global: true };
              closure_0(obj2);
              type = event.type;
              _sentryId = undefined;
              if (tmp2) {
                _sentryId = tmp2._sentryId;
              }
            }
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            const WINDOW = _mod915.WINDOW;
            timeout = WINDOW.setTimeout(() => {
              c4 = undefined;
              c3 = undefined;
            }, 1000);
          }
        }
      }
    };
    triggerHandlers.bind(null, "dom");
    const _document = _mod915.WINDOW.document;
    const listener = _document.addEventListener("click", fn, false);
    const _document2 = _mod915.WINDOW.document;
    const listener1 = _document2.addEventListener("keypress", fn, false);
    const items = ["EventTarget", "Node"];
    const item = items.forEach((item) => {
      const tmp3 = _mod915.WINDOW[item];
      let prototype;
      if (tmp3 != null) {
        prototype = tmp3.prototype;
      }
      let hasOwnPropertyResult;
      if (prototype != null) {
        hasOwnProperty = prototype.hasOwnProperty;
        if (hasOwnProperty != null) {
          hasOwnPropertyResult = hasOwnProperty("addEventListener");
        }
      }
      if (hasOwnPropertyResult) {
        const tmpResult = _mod693;
        tmpResult.fill(prototype, "addEventListener", (arg0) => {
          let closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              try {
                const prop = self.__sentry_instrumentation_handlers__ || {};
                self.__sentry_instrumentation_handlers__ = prop;
                const obj = prop[arg0] || { refCount: 0 };
                prop[arg0] = obj;
                if (!obj.handler) {
                  const tmp4 = makeDOMEventHandler(closure_2_0);
                  obj.handler = tmp4;
                  closure_0.call(self, arg0, tmp4, arg2);
                }
                obj.refCount = obj.refCount + 1;
              } catch (err) {
              }
            }
            return closure_0.call(self, arg0, arg1, arg2);
          };
        });
        const tmpResult2 = _mod693;
        tmpResult2.fill(prototype, "removeEventListener", (arg0) => {
          let closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              try {
                const prop = self.__sentry_instrumentation_handlers__ || {};
                if (prop[arg0]) {
                  prop[arg0].refCount = prop[arg0].refCount - 1;
                  if (prop[arg0].refCount <= 0) {
                    const handler = tmp4.handler;
                    closure_0.call(self, arg0, handler, arg2);
                    prop[arg0].handler = undefined;
                    delete obj[tmp];
                  }
                  const _Object = Object;
                  if (0 === Object.keys(prop).length) {
                    delete self["__sentry_instrumentation_handlers__"];
                  }
                }
              } catch (err) {
              }
            }
            return closure_0.call(self, arg0, arg1, arg2);
          };
        });
      }
    });
  }
}
function makeDOMEventHandler(arg0) {
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return (event) => {
    let timeout;
    function getEventTarget(target) {
      try {
        return target.target;
      } catch (err) {
        return null;
      }
    }
    function isSimilarToLastCapturedEvent(type) {
      if (type.type !== c3) {
        return false;
      } else {
        try {
          if (type.target) {
            if (type.target._sentryId === c4) {
              return true;
            }
          }
          return false;
        } catch (err) {
        }
      }
    }
    const tmp = event;
    if (tmp) {
      if (!event._sentryCaptured) {
        const tmp2 = getEventTarget(event);
        let tmp3 = "keypress" === event.type;
        if (tmp3) {
          let tagName;
          if (tmp2 != null) {
            tagName = tmp2.tagName;
          }
          let tmp6 = !tagName;
          if (tagName) {
            tmp6 = "INPUT" !== tmp2.tagName && "TEXTAREA" !== tmp2.tagName && !tmp2.isContentEditable;
            const tmp7 = "INPUT" !== tmp2.tagName && "TEXTAREA" !== tmp2.tagName && !tmp2.isContentEditable;
          }
          tmp3 = tmp6;
        }
        if (!tmp3) {
          const obj = _mod693;
          const result = obj.addNonEnumerableProperty(event, "_sentryCaptured", true);
          const tmp11 = tmp2 && !tmp2._sentryId;
          if (tmp11) {
            const addNonEnumerableProperty = _mod693.addNonEnumerableProperty;
            _mod693;
            const tmp8Result2 = _mod693;
            const result1 = addNonEnumerableProperty(tmp2, "_sentryId", tmp8Result2.uuid4());
          }
          let str6 = "input";
          if ("keypress" !== event.type) {
            str6 = event.type;
          }
          if (!isSimilarToLastCapturedEvent(event)) {
            const obj2 = { event, name: str6, global: true };
            closure_0(obj2);
            type = event.type;
            _sentryId = undefined;
            if (tmp2) {
              _sentryId = tmp2._sentryId;
            }
          }
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const WINDOW = _mod915.WINDOW;
          timeout = WINDOW.setTimeout(() => {
            c4 = undefined;
            c3 = undefined;
          }, 1000);
        }
      }
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addClickKeypressInstrumentationHandler = function addClickKeypressInstrumentationHandler(arg0) {
  const obj = _mod693;
  obj.addHandler("dom", arg0);
  const obj2 = _mod693;
  obj2.maybeInstrument("dom", instrumentDOM);
};
export { instrumentDOM };