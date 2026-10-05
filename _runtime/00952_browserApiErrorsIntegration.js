// _runtime/00952_browserApiErrorsIntegration.js
import _mod904 from "metro/00904__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

let hasOwnProperty;

function _wrapTimeFunction(arg0) {
  let closure_0 = arg0;
  return function () {
    let obj2;
    let obj3;
    const items = [...arguments];
    const first = items[0];
    const obj = { mechanism: obj2 };
    obj2 = { handled: false, type: "auto.browser.browserapierrors." + obj3.getFunctionName(closure_0) };
    const wrap = _mod904.wrap;
    _mod904;
    obj3 = registerSpanErrorInstrumentation;
    items[0] = wrap(first, obj);
    return closure_0.apply(this, items);
  };
}
function _wrapRAF(arg0) {
  let closure_0 = arg0;
  return function (arg0) {
    let obj2;
    let obj3;
    let obj4;
    const apply = closure_0.apply;
    const obj = { mechanism: obj2 };
    obj2 = { data: obj3, handled: false, type: "auto.browser.browserapierrors.requestAnimationFrame" };
    obj3 = { handler: obj4.getFunctionName(closure_0) };
    const wrap = _mod904.wrap;
    _mod904;
    obj4 = registerSpanErrorInstrumentation;
    const items = [wrap(arg0, obj)];
    return apply(this, items);
  };
}
function _wrapXHR(arg0) {
  let closure_0 = arg0;
  return function () {
    const self = this;
    const items = ["onload", "onerror", "onprogress", "onreadystatechange"];
    const items1 = [...arguments];
    const item = items.forEach((item) => {
      closure_0 = item;
      const tmp2 = item in self && typeof self[item] === "function";
      if (tmp2) {
        let obj = closure_2_0(closure_2_1[0]);
        obj.fill(self, item, (arg0) => {
          let obj2;
          let obj3;
          let obj4;
          const obj = { mechanism: obj2 };
          obj2 = { data: obj3, handled: false, type: "auto.browser.browserapierrors.xhr." + closure_0 };
          obj3 = { handler: obj4.getFunctionName(arg0) };
          obj4 = self(closure_2_1[0]);
          const obj5 = self(closure_2_1[0]);
          const originalFunction = obj5.getOriginalFunction(arg0);
          if (originalFunction) {
            const data = obj.mechanism.data;
            const tmpResult = self(closure_2_1[0]);
            data.handler = tmpResult.getFunctionName(originalFunction);
          }
          const tmpResult2 = self(closure_2_1[1]);
          return tmpResult2.wrap(arg0, obj);
        });
      }
    });
    return closure_0.apply(this, items1);
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "BroadcastChannel",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "SharedWorker",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
];

export const browserApiErrorsIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
  };
  const merged = Object.assign(obj);
  let obj3 = {
    name: "BrowserApiErrors",
    setupOnce() {
      let tmp = obj2;
      if (obj2.setTimeout) {
        let obj = registerSpanErrorInstrumentation;
        const str = "setTimeout";
        obj.fill(_mod904.WINDOW, "setTimeout", _wrapTimeFunction);
      }
      if (tmp.setInterval) {
        obj2 = registerSpanErrorInstrumentation;
        obj2.fill(_mod904.WINDOW, "setInterval", _wrapTimeFunction);
      }
      if (tmp.requestAnimationFrame) {
        let obj3 = registerSpanErrorInstrumentation;
        obj3.fill(_mod904.WINDOW, "requestAnimationFrame", _wrapRAF);
      }
      const _XMLHttpRequest = tmp.XMLHttpRequest && "XMLHttpRequest" in _mod904.WINDOW;
      if (_XMLHttpRequest) {
        let obj4 = registerSpanErrorInstrumentation;
        const _XMLHttpRequest2 = XMLHttpRequest;
        obj4.fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      let eventTarget = tmp.eventTarget;
      if (eventTarget) {
        const _Array = Array;
        if (!Array.isArray(eventTarget)) {
          eventTarget = closure_2;
        }
        const item = eventTarget.forEach((item) => {
          let closure_0 = item;
          let closure_1 = closure_1_0;
          let tmp3 = obj2(dependencyMap[1]).WINDOW[item];
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
            const tmpResult = obj2(dependencyMap[0]);
            tmpResult.fill(
              prototype,
              "addEventListener",
              (target) =>
                function (arg0, handleEvent, arg2) {
                  let obj3;
                  let obj4;
                  let obj6;
                  let obj7;
                  let obj8;
                  function isEventListenerObject(handleEvent) {
                    return typeof handleEvent.handleEvent === "function";
                  }
                  function unregisterOriginalCallback(self, arg1, handleEvent) {
                    const tmp =
                      self &&
                      typeof self === "object" &&
                      "removeEventListener" in self &&
                      typeof self.removeEventListener === "function";
                    if (tmp) {
                      const removed = self.removeEventListener(arg1, handleEvent);
                    }
                  }
                  try {
                    if (isEventListenerObject(handleEvent)) {
                      const obj = { mechanism: obj2 };
                      obj2 = { data: obj3, handled: false, type: "auto.browser.browserapierrors.handleEvent" };
                      const tmp3 = closure_3_0(closure_3_1[1]);
                      const wrap = tmp3.wrap;
                      obj3 = { handler: obj4.getFunctionName(handleEvent), target };
                      handleEvent = handleEvent.handleEvent;
                      obj4 = closure_3_0(closure_3_1[0]);
                      handleEvent.handleEvent = wrap(handleEvent, obj);
                    }
                  } catch (err) {}
                  const self = this;
                  if (closure_1.unregisterOriginalCallbacks) {
                    unregisterOriginalCallback(self, arg0, handleEvent);
                  }
                  const items = [arg0, ,];
                  const apply = target.apply;
                  const obj5 = { mechanism: obj6 };
                  obj6 = { data: obj7, handled: false, type: "auto.browser.browserapierrors.addEventListener" };
                  obj7 = { handler: obj8.getFunctionName(handleEvent), target };
                  const wrap2 = closure_3_0(closure_3_1[1]).wrap;
                  closure_3_0(closure_3_1[1]);
                  obj8 = closure_3_0(closure_3_1[0]);
                  items[1] = wrap2(handleEvent, obj5);
                  items[2] = arg2;
                  return apply(self, items);
                },
            );
            const tmpResult2 = obj2(dependencyMap[0]);
            tmpResult2.fill(prototype, "removeEventListener", (arg0) => {
              let closure_0 = arg0;
              return function (arg0, __sentry_wrapped__, arg2) {
                const self = this;
                try {
                  __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
                  if (__sentry_wrapped__) {
                    closure_0.call(self, arg0, tmp, arg2);
                  }
                  return closure_0.call(self, arg0, __sentry_wrapped__, arg2);
                } catch (err) {}
              };
            });
          }
        });
      }
    },
  };
  return obj3;
});
