// _runtime/01065_instrumentDOM.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import WINDOW2 from "01039_WINDOW.js";

require = arg1;
let dependencyMap = arg6;
function instrumentDOM() {
  if (WINDOW2.WINDOW.document) {
    const bindResult = tmp(817).triggerHandlers.bind(null, "dom");
    require = bindResult;
    dependencyMap = true;
    const fn = (event) => {
      if (event) {
        if (!event._sentryCaptured) {
          const tmp = (function getEventTarget(target) {
            try {
              return target.target;
            } catch (err) {
              return null;
            }
          })(event);
          let tmp2 = "keypress" === event.type;
          if (tmp2) {
            let tagName;
            if (tmp != null) {
              tagName = tmp.tagName;
            }
            let tmp5 = !tagName;
            if (tagName) {
              let tmp6 = "INPUT" !== tmp.tagName;
              if (tmp6) {
                tmp6 = "TEXTAREA" !== tmp.tagName;
              }
              if (tmp6) {
                tmp6 = !tmp.isContentEditable;
              }
              tmp5 = tmp6;
            }
            tmp2 = tmp5;
          }
          if (!tmp2) {
            let obj = callback(flag[0]);
            const result = obj.addNonEnumerableProperty(event, "_sentryCaptured", true);
            let tmp10 = tmp;
            if (tmp) {
              tmp10 = !tmp._sentryId;
            }
            if (tmp10) {
              callback(tmp8[0]);
              const tmp7Result = callback(tmp8[0]);
              const result1 = tmp7Result.addNonEnumerableProperty(tmp, "_sentryId", tmp7Result.uuid4());
            }
            let str6 = "input";
            if ("keypress" !== event.type) {
              str6 = event.type;
            }
            if (!(function isSimilarToLastCapturedEvent(type) {
              if (type.type !== closure_3) {
                return false;
              } else {
                try {
                  if (type.target) {
                    if (type.target._sentryId === closure_4) {
                      return true;
                    }
                  }
                  return false;
                } catch (err) {
                }
              }
            })(event)) {
              obj = { event: null, name: null, global: null };
              obj[0] = event;
              obj[1] = str6;
              obj[2] = flag;
              callback(obj);
              type = event.type;
              _sentryId = undefined;
              if (tmp) {
                _sentryId = tmp._sentryId;
              }
            }
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            const WINDOW = callback(tmp8[1]).WINDOW;
            timeout = WINDOW.setTimeout(() => {
              c4 = undefined;
              c3 = undefined;
            }, 1000);
          }
        }
      }
    };
    const _document = tmp(1039).WINDOW.document;
    const listener = _document.addEventListener("click", fn, false);
    const _document2 = tmp(1039).WINDOW.document;
    const listener1 = _document2.addEventListener("keypress", fn, false);
    const items = ["EventTarget", "Node"];
    const item = items.forEach((item, index) => {
      const tmp3 = bindResult(_true[1]).WINDOW[item];
      let prototype;
      if (tmp3 != null) {
        prototype = tmp3.prototype;
      }
      let hasOwnPropertyResult;
      if (prototype != null) {
        const hasOwnProperty = prototype.hasOwnProperty;
        if (hasOwnProperty != null) {
          hasOwnPropertyResult = hasOwnProperty("addEventListener");
        }
      }
      if (hasOwnPropertyResult) {
        let tmpResult = bindResult(_true[0]);
        tmpResult.fill(prototype, "addEventListener", (arg0) => {
          closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              try {
                let prop = self.__sentry_instrumentation_handlers__;
                if (!prop) {
                  prop = {};
                }
                self.__sentry_instrumentation_handlers__ = prop;
                let obj = prop[arg0];
                if (!obj) {
                  obj = { refCount: 0 };
                }
                prop[arg0] = obj;
                if (!obj.handler) {
                  const tmp4 = closure_2_6(callback);
                  tmp.handler = tmp4;
                  const call = callback.call;
                  if (typeof call === "unknown") {
                    callback(arg0, tmp4, arg2);
                  } else {
                    call(self, arg0, tmp4, arg2);
                  }
                }
                obj.refCount = obj.refCount + 1;
              } catch (err) {
              }
            }
            const call2 = callback.call;
            if (typeof call2 === "unknown") {
              let call2Result = callback(arg0, arg1, arg2);
            } else {
              call2Result = call2(self, arg0, arg1, arg2);
            }
            return call2Result;
          };
        });
        tmpResult = bindResult(_true[0]);
        tmpResult.fill(prototype, "removeEventListener", (arg0) => {
          closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              try {
                let prop = self.__sentry_instrumentation_handlers__;
                if (!prop) {
                  prop = {};
                }
                let tmp7 = tmp6;
                if (prop[arg0]) {
                  tmp7.refCount = tmp7.refCount - 1;
                  if (tmp7.refCount > 0) {
                    const _Object = Object;
                    if (0 === Object.keys(prop).length) {
                      delete tmp3[tmp];
                    }
                  } else {
                    const call = callback.call;
                    let handler = tmp7.handler;
                    if (typeof call === "unknown") {
                      handler = callback(arg0, handler, arg2);
                    } else {
                      call(self, arg0, handler, arg2);
                    }
                    tmp7.handler = undefined;
                    tmp7 = prop;
                    delete tmp4[tmp2];
                  }
                }
              } catch (err) {
              }
            }
            const call2 = callback.call;
            if (typeof call2 === "unknown") {
              let call2Result = callback(arg0, arg1, arg2);
            } else {
              call2Result = call2(self, arg0, arg1, arg2);
            }
            return call2Result;
          };
        });
      }
    });
    const triggerHandlers = tmp(817).triggerHandlers;
  }
}
function makeDOMEventHandler(arg0) {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return (event) => {
    if (event) {
      if (!event._sentryCaptured) {
        const tmp = (function getEventTarget(target) {
          try {
            return target.target;
          } catch (err) {
            return null;
          }
        })(event);
        let tmp2 = "keypress" === event.type;
        if (tmp2) {
          let tagName;
          if (tmp != null) {
            tagName = tmp.tagName;
          }
          let tmp5 = !tagName;
          if (tagName) {
            let tmp6 = "INPUT" !== tmp.tagName;
            if (tmp6) {
              tmp6 = "TEXTAREA" !== tmp.tagName;
            }
            if (tmp6) {
              tmp6 = !tmp.isContentEditable;
            }
            tmp5 = tmp6;
          }
          tmp2 = tmp5;
        }
        if (!tmp2) {
          let obj = callback(flag[0]);
          const result = obj.addNonEnumerableProperty(event, "_sentryCaptured", true);
          let tmp10 = tmp;
          if (tmp) {
            tmp10 = !tmp._sentryId;
          }
          if (tmp10) {
            callback(tmp8[0]);
            const tmp7Result = callback(tmp8[0]);
            const result1 = tmp7Result.addNonEnumerableProperty(tmp, "_sentryId", tmp7Result.uuid4());
          }
          let str6 = "input";
          if ("keypress" !== event.type) {
            str6 = event.type;
          }
          if (!(function isSimilarToLastCapturedEvent(type) {
            if (type.type !== closure_3) {
              return false;
            } else {
              try {
                if (type.target) {
                  if (type.target._sentryId === closure_4) {
                    return true;
                  }
                }
                return false;
              } catch (err) {
              }
            }
          })(event)) {
            obj = { event: null, name: null, global: null };
            obj[0] = event;
            obj[1] = str6;
            obj[2] = flag;
            callback(obj);
            type = event.type;
            _sentryId = undefined;
            if (tmp) {
              _sentryId = tmp._sentryId;
            }
          }
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const WINDOW = callback(tmp8[1]).WINDOW;
          timeout = WINDOW.setTimeout(() => {
            c4 = undefined;
            c3 = undefined;
          }, 1000);
        }
      }
    }
  };
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addClickKeypressInstrumentationHandler = function addClickKeypressInstrumentationHandler(arg0) {
  registerSpanErrorInstrumentation.addHandler("dom", arg0);
  registerSpanErrorInstrumentation.maybeInstrument("dom", instrumentDOM);
};
arg5.instrumentDOM = instrumentDOM;