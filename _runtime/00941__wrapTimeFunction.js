// === Module 941: _wrapTimeFunction ===

// Module 941 (_wrapTimeFunction)
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

function _wrapTimeFunction(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const obj2 = { mechanism: null };
    const obj3 = { handled: false, type: null };
    const obj = ignoreNextOnError;
    obj3.type = "auto.browser.browserapierrors." + registerSpanErrorInstrumentation.getFunctionName(closure_0);
    obj2.mechanism = obj3;
    items[0] = obj.wrap(items[0], obj2);
    return closure_0.apply(this, items);
  };
}
function _wrapRAF(arg0) {
  closure_0 = arg0;
  return function(arg0) {
    const obj2 = { mechanism: null };
    const obj3 = { data: null, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" };
    const obj4 = { handler: null };
    const obj = ignoreNextOnError;
    obj4.handler = registerSpanErrorInstrumentation.getFunctionName(closure_0);
    obj3.data = obj4;
    obj2.mechanism = obj3;
    const items = [obj.wrap(arg0, obj2)];
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
        _self(dependencyMap[0]).fill(self, item, (arg0) => {
          const obj = { mechanism: null };
          const obj2 = { data: null, handled: false, type: null };
          const obj3 = { handler: self(682).getFunctionName(arg0) };
          obj2.data = obj3;
          obj2.type = "auto.browser.browserapierrors.xhr." + closure_0;
          obj.mechanism = obj2;
          const obj4 = self(682);
          const originalFunction = self(682).getOriginalFunction(arg0);
          if (originalFunction) {
            obj.mechanism.data.handler = self(682).getFunctionName(originalFunction);
            const tmpResult = self(682);
          }
          const obj5 = self(682);
          return self(893).wrap(arg0, obj);
        });
        let obj = _self(dependencyMap[0]);
      }
      tmp2 = item in self && typeof self[item] === "function";
    });
    return _self.apply(this, items1);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];

export const browserApiErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, unregisterOriginalCallbacks: false };
  const merged = Object.assign(obj);
  return {
    name: "BrowserApiErrors",
    setupOnce() {
      if (obj2.setTimeout) {
        registerSpanErrorInstrumentation.fill(ignoreNextOnError.WINDOW, "setTimeout", _wrapTimeFunction);
      }
      if (obj2.setInterval) {
        obj2 = registerSpanErrorInstrumentation;
        obj2.fill(ignoreNextOnError.WINDOW, "setInterval", _wrapTimeFunction);
      }
      if (obj2.requestAnimationFrame) {
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
          closure_1 = closure_1_0;
          const tmp3 = obj2(dependencyMap[1]).WINDOW[item];
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
            obj2(dependencyMap[0]).fill(prototype, "addEventListener", (target) => function(arg0, handleEvent, arg2) {
              try {
                if ((function isEventListenerObject() { ... })(handleEvent)) {
                  obj2 = { mechanism: null };
                  const obj3 = { data: null, handled: false, type: "auto.browser.browserapierrors.handleEvent" };
                  const obj4 = { handler: null, target: null };
                  const obj = closure_3_0(893);
                  obj4.handler = closure_3_0(682).getFunctionName(handleEvent);
                  obj4.target = target;
                  obj3.data = obj4;
                  obj2.mechanism = obj3;
                  handleEvent.handleEvent = obj.wrap(handleEvent.handleEvent, obj2);
                  const obj5 = closure_3_0(682);
                }
                const self = this;
                if (closure_1.unregisterOriginalCallbacks) {
                  (function unregisterOriginalCallback() { ... })(self, arg0, handleEvent);
                }
                const items = [arg0, , ];
                const obj7 = { mechanism: null };
                const obj8 = { data: null, handled: false, type: "auto.browser.browserapierrors.addEventListener" };
                const obj9 = { handler: null, target: null };
                const obj6 = closure_3_0(893);
                obj9.handler = closure_3_0(682).getFunctionName(handleEvent);
                obj9.target = target;
                obj8.data = obj9;
                obj7.mechanism = obj8;
                items[1] = obj6.wrap(handleEvent, obj7);
                items[2] = arg2;
                return target.apply(self, items);
              } catch (err) {
              }
            });
            const tmpResult = obj2(dependencyMap[0]);
            obj2(dependencyMap[0]).fill(prototype, "removeEventListener", (arg0) => {
              closure_0 = arg0;
              return function(arg0, __sentry_wrapped__, arg2) {
                const self = this;
                try {
                  __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
                  if (__sentry_wrapped__) {
                    const call = closure_0.call;
                    if (typeof call === "unknown") {
                      closure_0(arg0, __sentry_wrapped__, arg2);
                    } else {
                      call(self, arg0, tmp, arg2);
                    }
                  }
                  const call2 = closure_0.call;
                  if (typeof call2 === "unknown") {
                    let call2Result = closure_0(arg0, __sentry_wrapped__, arg2);
                  } else {
                    call2Result = call2(self, arg0, __sentry_wrapped__, arg2);
                  }
                  return call2Result;
                } catch (err) {
                }
              };
            });
            const tmpResult2 = obj2(dependencyMap[0]);
          }
        });
      }
    }
  };
});