// _runtime/00941__wrapTimeFunction.js
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";

function _wrapTimeFunction(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    let obj = callback(closure_1_1[1]);
    obj = { mechanism: null };
    obj = { handled: false, type: "auto.browser.browserapierrors." + callback(closure_1_1[0]).getFunctionName(callback) };
    obj[0] = obj;
    items[0] = obj.wrap(items[0], obj);
    return callback.apply(this, items);
  };
}
function _wrapRAF(arg0) {
  closure_0 = arg0;
  return function(arg0) {
    let obj = callback(closure_1_1[1]);
    obj = { mechanism: null };
    obj = { data: null, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" };
    obj1 = { handler: callback(closure_1_1[0]).getFunctionName(callback) };
    obj[0] = obj1;
    obj[0] = obj;
    const items = [obj.wrap(arg0, obj)];
    return callback.apply(this, items);
  };
}
function _wrapXHR(arg0) {
  closure_0 = arg0;
  return function() {
    const self = this;
    const items = ["onload", "onerror", "onprogress", "onreadystatechange"];
    const items1 = [...arguments];
    const item = items.forEach((arg0) => {
      closure_0 = arg0;
      if (tmp2) {
        self(closure_1_1[0]).fill(tmp, arg0, (arg0) => {
          let obj = { mechanism: null };
          obj = { data: null, handled: false, type: null };
          obj = { handler: callback(closure_1_1[0]).getFunctionName(arg0) };
          obj[0] = obj;
          obj[2] = "auto.browser.browserapierrors.xhr." + callback;
          obj[0] = obj;
          const obj4 = callback(closure_1_1[0]);
          const originalFunction = callback(closure_1_1[0]).getOriginalFunction(arg0);
          if (originalFunction) {
            let tmpResult = tmp(tmp2[0]);
            obj.mechanism.data.handler = tmpResult.getFunctionName(originalFunction);
          }
          tmpResult = tmp(tmp2[1]);
          return tmpResult.wrap(arg0, obj);
        });
        let obj = self(closure_1_1[0]);
      }
    });
    return self.apply(this, items1);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];

export const browserApiErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = undefined;
  obj = { XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true, unregisterOriginalCallbacks: false };
  const merged = Object.assign(obj);
  obj = {
    name: "BrowserApiErrors",
    setupOnce() {
      if (obj.setTimeout) {
        obj = obj(closure_1_1[0]);
        obj.fill(obj(closure_1_1[1]).WINDOW, "setTimeout", closure_1_3);
      }
      if (obj.setInterval) {
        obj(closure_1_1[0]).fill(obj(closure_1_1[1]).WINDOW, "setInterval", closure_1_3);
        let obj2 = obj(closure_1_1[0]);
      }
      if (obj.requestAnimationFrame) {
        obj(closure_1_1[0]).fill(obj(closure_1_1[1]).WINDOW, "requestAnimationFrame", closure_1_4);
        let obj3 = obj(closure_1_1[0]);
      }
      let _XMLHttpRequest = tmp.XMLHttpRequest;
      if (_XMLHttpRequest) {
        _XMLHttpRequest = "XMLHttpRequest" in obj(closure_1_1[1]).WINDOW;
      }
      if (_XMLHttpRequest) {
        const _XMLHttpRequest2 = XMLHttpRequest;
        obj(closure_1_1[0]).fill(XMLHttpRequest.prototype, "send", closure_1_5);
        let obj4 = obj(closure_1_1[0]);
      }
      let eventTarget = tmp.eventTarget;
      if (eventTarget) {
        const _Array = Array;
        if (!Array.isArray(eventTarget)) {
          eventTarget = closure_1_2;
        }
        const item = eventTarget.forEach((arg0) => {
          closure_0 = arg0;
          closure_1 = closure_0;
          const tmp3 = closure_1_0(closure_1_1[1]).WINDOW[arg0];
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
            let tmpResult = tmp(tmp2[0]);
            tmpResult.fill(prototype, "addEventListener", (arg0) => {
              closure_0 = arg0;
              return function(arg0, handleEvent) {
                try {
                  if ((function isEventListenerObject() { ... })(handleEvent)) {
                    obj = callback(893);
                    obj = { mechanism: null };
                    obj = { data: null, handled: false, type: "auto.browser.browserapierrors.handleEvent" };
                    obj1 = { handler: null, target: null };
                    let obj4 = callback(682);
                    obj1[0] = obj4.getFunctionName(handleEvent);
                    obj1[1] = callback;
                    obj[0] = obj1;
                    obj[0] = obj;
                    handleEvent.handleEvent = obj.wrap(handleEvent.handleEvent, obj);
                  }
                  const self = this;
                  if (closure_1_1.unregisterOriginalCallbacks) {
                    (function unregisterOriginalCallback() { ... })(self, arg0, handleEvent);
                  }
                  const items = [arg0, , ];
                  const obj2 = { mechanism: null };
                  const obj3 = { data: null, handled: false, type: "auto.browser.browserapierrors.addEventListener" };
                  obj4 = { handler: null, target: null };
                  const obj6 = callback(893);
                  obj4[0] = callback(682).getFunctionName(handleEvent);
                  obj4[1] = callback;
                  obj3[0] = obj4;
                  obj2[0] = obj3;
                  items[1] = obj6.wrap(handleEvent, obj2);
                  items[2] = arg2;
                  return callback.apply(self, items);
                } catch (err) {
                }
              };
            });
            tmpResult = tmp(tmp2[0]);
            tmpResult.fill(prototype, "removeEventListener", (arg0) => {
              closure_0 = arg0;
              return function(arg0, __sentry_wrapped__) {
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
  return obj;
});