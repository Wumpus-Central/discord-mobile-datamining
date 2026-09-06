// === Module 941: _wrapTimeFunction ===

// Module 941 (_wrapTimeFunction)
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

function _wrapTimeFunction(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    let obj = { mechanism: null };
    obj = { handled: false, type: "auto.browser.browserapierrors." + registerSpanErrorInstrumentation.getFunctionName(closure_0) };
    obj.mechanism = obj;
    items[0] = obj.wrap(items[0], obj);
    return closure_0.apply(this, items);
  };
}
function _wrapRAF(arg0) {
  closure_0 = arg0;
  return function(arg0) {
    let obj = { mechanism: null };
    obj = { data: null, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" };
    const obj1 = { handler: registerSpanErrorInstrumentation.getFunctionName(closure_0) };
    obj.data = obj1;
    obj.mechanism = obj;
    const items = [obj.wrap(arg0, obj)];
    return closure_0.apply(this, items);
  };
}
function _wrapXHR(arg0) {
  closure_0 = arg0;
  return function() {
    const self = this;
    const items = ["onload", "onerror", "onprogress", "onreadystatechange"];
    const items1 = [...arguments];
    const item = items.forEach((item) => {
      _self = item;
      if (tmp2) {
        _self(dependencyMap[0]).fill(tmp, item, (arg0) => {
          let obj = { mechanism: null };
          obj = { data: null, handled: false, type: null };
          obj = { handler: self(682).getFunctionName(arg0) };
          obj.data = obj;
          obj.type = "auto.browser.browserapierrors.xhr." + closure_0;
          obj.mechanism = obj;
          const obj4 = self(682);
          const originalFunction = self(682).getOriginalFunction(arg0);
          if (originalFunction) {
            let tmpResult = tmp(682);
            obj.mechanism.data.handler = tmpResult.getFunctionName(originalFunction);
          }
          tmpResult = tmp(893);
          return tmpResult.wrap(arg0, obj);
        });
        let obj = _self(dependencyMap[0]);
      }
    });
    return _self.apply(this, items1);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];

export const browserApiErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration((mechanism) => {
  if (mechanism === undefined) {
    mechanism = {};
  }
  mechanism = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, unregisterOriginalCallbacks: false };
  const merged = Object.assign(mechanism);
  mechanism = {
    name: "BrowserApiErrors",
    setupOnce() {
      if (obj.setTimeout) {
        obj = registerSpanErrorInstrumentation;
        obj.fill(ignoreNextOnError.WINDOW, "setTimeout", _wrapTimeFunction);
      }
      if (obj.setInterval) {
        registerSpanErrorInstrumentation.fill(ignoreNextOnError.WINDOW, "setInterval", _wrapTimeFunction);
      }
      if (obj.requestAnimationFrame) {
        registerSpanErrorInstrumentation.fill(ignoreNextOnError.WINDOW, "requestAnimationFrame", _wrapRAF);
      }
      let _XMLHttpRequest = tmp.XMLHttpRequest;
      if (_XMLHttpRequest) {
        _XMLHttpRequest = "XMLHttpRequest" in ignoreNextOnError.WINDOW;
      }
      if (_XMLHttpRequest) {
        const _XMLHttpRequest2 = XMLHttpRequest;
        registerSpanErrorInstrumentation.fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      let eventTarget = tmp.eventTarget;
      if (eventTarget) {
        const _Array = Array;
        if (!Array.isArray(eventTarget)) {
          eventTarget = closure_2;
        }
        const item = eventTarget.forEach((item) => {
          closure_0 = item;
          closure_1 = mechanism;
          const tmp3 = obj(dependencyMap[1]).WINDOW[item];
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
            let tmpResult = tmp(tmp2[0]);
            tmpResult.fill(prototype, "addEventListener", (target) => function(arg0, handleEvent, arg2) {
              try {
                if ((function isEventListenerObject() { ... })(handleEvent)) {
                  mechanism = closure_3_0(893);
                  mechanism = { mechanism: null };
                  mechanism = { data: null, handled: false, type: "auto.browser.browserapierrors.handleEvent" };
                  const obj1 = { handler: null, target: null };
                  let obj4 = closure_3_0(682);
                  obj1.handler = obj4.getFunctionName(handleEvent);
                  obj1.target = target;
                  mechanism.data = obj1;
                  mechanism.mechanism = mechanism;
                  handleEvent.handleEvent = mechanism.wrap(handleEvent.handleEvent, mechanism);
                }
                const self = this;
                if (closure_1.unregisterOriginalCallbacks) {
                  (function unregisterOriginalCallback() { ... })(self, arg0, handleEvent);
                }
                const items = [arg0, , ];
                const obj2 = { mechanism: null };
                const obj3 = { data: null, handled: false, type: "auto.browser.browserapierrors.addEventListener" };
                obj4 = { handler: null, target: null };
                const obj6 = closure_3_0(893);
                obj4.handler = closure_3_0(682).getFunctionName(handleEvent);
                obj4.target = target;
                obj3.data = obj4;
                obj2.mechanism = obj3;
                items[1] = obj6.wrap(handleEvent, obj2);
                items[2] = arg2;
                return target.apply(self, items);
              } catch (err) {
              }
            });
            tmpResult = tmp(tmp2[0]);
            tmpResult.fill(prototype, "removeEventListener", (arg0) => {
              closure_0 = arg0;
              return function(arg0, __sentry_wrapped__, arg2) {
                const self = this;
                try {
                  __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
                  if (__sentry_wrapped__) {
                    const call = closure_0.call;
                    if (typeof call === "unknown") {
                      tmp2(arg0, __sentry_wrapped__, arg2);
                    } else {
                      call(self, arg0, tmp, arg2);
                    }
                  }
                  const call2 = closure_0.call;
                  if (typeof call2 === "unknown") {
                    let call2Result = tmp4(arg0, __sentry_wrapped__, arg2);
                  } else {
                    call2Result = call2(self, arg0, __sentry_wrapped__, arg2);
                  }
                  return call2Result;
                } catch (err) {
                }
              };
            });
          }
        });
      }
    }
  };
  return mechanism;
});