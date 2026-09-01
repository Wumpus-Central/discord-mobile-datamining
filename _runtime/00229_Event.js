// _runtime/00229_Event.js
class Event {
  constructor(arg0, arg1) {
    obj = {
      eventTarget: global,
      event: require,
      eventPhase: 2,
      currentTarget: global,
      canceled: false,
      stopped: false,
      immediateStopped: false,
      passiveListener: null,
      timeStamp: null,
    };
    timeStamp = require.timeStamp;
    tmp = closure_0;
    if (!timeStamp) {
      tmp2 = globalThis;
      _Date = Date;
      timeStamp = Date.now();
    }
    self = this;
    obj[8] = timeStamp;
    result = closure_0.set(this, obj);
    definePropertyResult = Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
    keys = Object.keys(require);
    for (let num = 0; num < keys.length; num = num + 1) {
      tmp5 = keys[num];
      tmp6 = num;
      if (!(tmp5 in self)) {
        _Object = Object;
        closure_0 = tmp5;
        obj = { get: null, set: null, configurable: true, enumerable: true };
        obj[0] = function get() {
          const value = store.get(this);
          console.assert(null != value, "'this' is expected an Event object, but got", this);
          return value.event[store];
        };
        obj[1] = function set(arg0) {
          const value = store.get(this);
          console.assert(null != value, "'this' is expected an Event object, but got", this);
          value.event[store] = arg0;
        };
        definePropertyResult1 = Object.defineProperty(self, tmp5, obj);
      }
    }
    return;
  }
}
function getWrapper(prototypeOf) {
  if (null != prototypeOf) {
    const _Object2 = Object;
    if (prototypeOf !== Object.prototype) {
      let value = weakMap1.get(prototypeOf);
      if (null == value) {
        const _Object3 = Object;
        const tmp9 = getWrapper(Object.getPrototypeOf(prototypeOf));
        closure_0 = tmp9;
        const _Object4 = Object;
        const keys = Object.keys(prototypeOf);
        let tmp4 = tmp9;
        if (0 !== keys.length) {
          class CustomEvent {
            constructor(arg0, arg1) {
              self = this;
              tmp = closure_0;
              call = closure_0.call;
              if (typeof call === "unknown") {
                tmpResult = tmp(prototypeOf, arg1);
              } else {
                callResult = call(self, prototypeOf, arg1);
              }
              return;
            }
          }
          const _Object5 = Object;
          let obj = { constructor: null };
          obj = { value: null, configurable: true, writable: true };
          obj[0] = CustomEvent;
          obj[0] = obj;
          CustomEvent.prototype = Object.create(tmp9.prototype, obj);
          tmp4 = CustomEvent;
          if (0 < keys.length) {
            class CustomEvent {
              constructor(arg0, arg1) {
                self = this;
                tmp = closure_0;
                call = closure_0.call;
                if (typeof call === "unknown") {
                  tmpResult = tmp(prototypeOf, arg1);
                } else {
                  callResult = call(self, prototypeOf, arg1);
                }
                return;
              }
            }
            while (tmp in tmp9.prototype) {
              class CustomEvent {
                constructor(arg0, arg1) {
                  self = this;
                  tmp = closure_0;
                  call = closure_0.call;
                  if (typeof call === "unknown") {
                    tmpResult = tmp(prototypeOf, arg1);
                  } else {
                    callResult = call(self, prototypeOf, arg1);
                  }
                  return;
                }
              }
              tmp4 = CustomEvent;
              if (num < keys.length) {
                class CustomEvent {
                  constructor(arg0, arg1) {
                    self = this;
                    tmp = closure_0;
                    call = closure_0.call;
                    if (typeof call === "unknown") {
                      tmpResult = tmp(prototypeOf, arg1);
                    } else {
                      callResult = call(self, prototypeOf, arg1);
                    }
                    return;
                  }
                }
              }
            }
            const _Object = Object;
            if (typeof Object.getOwnPropertyDescriptor(prototypeOf, tmp).value === "function") {
              class CustomEvent {
                constructor(arg0, arg1) {
                  self = this;
                  tmp = closure_0;
                  call = closure_0.call;
                  if (typeof call === "unknown") {
                    tmpResult = tmp(prototypeOf, arg1);
                  } else {
                    callResult = call(self, prototypeOf, arg1);
                  }
                  return;
                }
              }
              obj = { value: null, configurable: true, enumerable: true };
              obj[0] = function value() {
                const value = store.get(this);
                console.assert(null != value, "'this' is expected an Event object, but got", this);
                const event = value.event;
                const apply = tmp3.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(event);
                } else {
                  applyArgumentsResult = apply(event, arguments);
                }
                return applyArgumentsResult;
              };
              obj1 = obj;
            } else {
              class CustomEvent {
                constructor(arg0, arg1) {
                  self = this;
                  tmp = closure_0;
                  call = closure_0.call;
                  if (typeof call === "unknown") {
                    tmpResult = tmp(prototypeOf, arg1);
                  } else {
                    callResult = call(self, prototypeOf, arg1);
                  }
                  return;
                }
              }
              obj1 = { get: null, set: null, configurable: true, enumerable: true };
              obj1[0] = function get() {
                const value = store.get(this);
                console.assert(null != value, "'this' is expected an Event object, but got", this);
                return value.event[store];
              };
              obj1[1] = function set(arg0) {
                const value = store.get(this);
                console.assert(null != value, "'this' is expected an Event object, but got", this);
                value.event[store] = arg0;
              };
            }
            Object.defineProperty(CustomEvent.prototype, tmp, obj1);
          }
        }
        const result = weakMap1.set(prototypeOf, tmp4);
        value = tmp4;
      }
      return value;
    }
  }
  return Event;
}
function isStopped(arg0) {
  const value = weakMap.get(arg0);
  console.assert(null != value, "'this' is expected an Event object, but got", arg0);
  return value.immediateStopped;
}
function setPassiveListener(arg0, passiveListener) {
  const value = weakMap.get(arg0);
  console.assert(null != value, "'this' is expected an Event object, but got", arg0);
  value.passiveListener = passiveListener;
}
function getListeners(arg0) {
  const value = weakMap2.get(arg0);
  if (null == value) {
    const _TypeError = TypeError;
    const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
    throw typeError;
  } else {
    return value;
  }
}
class EventTarget {
  constructor() {
    if (this instanceof EventTarget) {
      tmp18 = closure_6;
      tmp19 = globalThis;
      _Map = Map;
      tmp20 = new.target;
      tmp21 = new.target;
      map = new Map();
      tmp23 = map;
      result = closure_6.set(tmp, map);
      return;
    } else {
      num = 1;
      if (1 === arguments.length) {
        tmp3 = globalThis;
        _Array = Array;
        num2 = 0;
        if (Array.isArray(arguments[0])) {
          first = arguments[0];
          class CustomEventTarget {
            constructor() {
              self = this;
              tmp = closure_8;
              call = closure_8.call;
              if (typeof call === "unknown") {
                tmpResult = tmp();
              } else {
                callResult = call(self);
              }
              return;
            }
          }
          _Object3 = Object;
          obj = { constructor: null };
          obj1 = { value: null, configurable: true, writable: true };
          obj1[0] = CustomEventTarget;
          obj[0] = obj1;
          CustomEventTarget.prototype = Object.create(tmp2.prototype, obj);
          str3 = "on";
          num6 = 0;
          if (0 < first.length) {
            do {
              tmp16 = first[num6];
              _Object4 = Object;
              _HermesInternal2 = HermesInternal;
              closure_0 = tmp16;
              obj2 = { get: null, set: null, configurable: true, enumerable: true };
              obj2[0] = function get() {
                const value = closure_1_6.get(this);
                if (null == value) {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                  throw typeError;
                } else {
                  let iter = value.get(closure_0);
                  if (null != iter) {
                    while (3 !== iter.listenerType) {
                      iter = iter.next;
                    }
                    return iter.listener;
                  }
                  return null;
                }
              };
              obj2[1] = function set(fn) {
                let tmp = fn;
                let tmp2 = typeof fn === "function";
                if (typeof fn !== "function") {
                  tmp2 = null !== tmp && typeof tmp === "object";
                  const tmp3 = null !== tmp && typeof tmp === "object";
                }
                if (!tmp2) {
                  tmp = null;
                }
                let value = closure_1_6.get(this);
                if (null == value) {
                  const _TypeError = TypeError;
                  const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                  throw typeError;
                } else {
                  value = value.get(closure_0);
                  let iter = value;
                  let tmp11 = null;
                  let tmp12 = null;
                  if (null != value) {
                    do {
                      let tmp4 = iter;
                      let tmp5 = tmp11;
                      let tmp6 = iter;
                      if (3 === iter.listenerType) {
                        if (null !== tmp11) {
                          tmp11.next = iter.next;
                          tmp6 = tmp11;
                        } else if (null !== iter.next) {
                          let tmp9 = closure_0;
                          let result = value.set(closure_0, iter.next);
                          tmp6 = tmp11;
                        } else {
                          let tmp7 = closure_0;
                          let deleteResult = value.delete(closure_0);
                          tmp6 = tmp11;
                        }
                      }
                      iter = iter.next;
                      tmp11 = tmp6;
                      tmp12 = tmp6;
                    } while (null != iter);
                  }
                  if (null !== tmp) {
                    const obj = { listener: null, listenerType: 3, passive: false, once: false, next: null };
                    obj[0] = tmp;
                    if (null === tmp12) {
                      const result1 = value.set(closure_0, obj);
                    } else {
                      tmp12.next = obj;
                    }
                  }
                }
              };
              definePropertyResult = Object.defineProperty(CustomEventTarget.prototype, "on" + tmp16, obj2);
              num6 = num6 + 1;
              length3 = first.length;
            } while (num6 < length3);
          }
          return CustomEventTarget;
        }
      }
      num3 = 0;
      if (arguments.length > 0) {
        tmp9 = globalThis;
        class CustomEventTarget {
          constructor() {
            self = this;
            tmp = closure_8;
            call = closure_8.call;
            if (typeof call === "unknown") {
              tmpResult = tmp();
            } else {
              callResult = call(self);
            }
            return;
          }
        }
        tmp10 = new.target;
        tmp11 = new.target;
        arr = new Array(arguments.length);
        tmp12 = arr;
        num4 = 0;
        if (0 < arguments.length) {
          do {
            arr[num4] = arguments[num4];
            num4 = num4 + 1;
            length = arguments.length;
          } while (num4 < length);
        }
        class CustomEventTarget {
          constructor() {
            self = this;
            tmp = closure_8;
            call = closure_8.call;
            if (typeof call === "unknown") {
              tmpResult = tmp();
            } else {
              callResult = call(self);
            }
            return;
          }
        }
        _Object = Object;
        tmp13 = EventTarget;
        obj = { constructor: null };
        obj3 = { value: null, configurable: true, writable: true };
        obj3[0] = CustomEventTarget;
        obj[0] = obj3;
        CustomEventTarget.prototype = Object.create(EventTarget.prototype, obj);
        str2 = "on";
        num5 = 0;
        if (0 < arr.length) {
          do {
            tmp14 = arr[num5];
            _Object2 = Object;
            _HermesInternal = HermesInternal;
            closure_0 = tmp14;
            obj4 = { get: null, set: null, configurable: true, enumerable: true };
            obj4[0] = function get() {
              const value = closure_1_6.get(this);
              if (null == value) {
                const _TypeError = TypeError;
                const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                throw typeError;
              } else {
                let iter = value.get(closure_0);
                if (null != iter) {
                  while (3 !== iter.listenerType) {
                    iter = iter.next;
                  }
                  return iter.listener;
                }
                return null;
              }
            };
            obj4[1] = function set(fn) {
              let tmp = fn;
              let tmp2 = typeof fn === "function";
              if (typeof fn !== "function") {
                tmp2 = null !== tmp && typeof tmp === "object";
                const tmp3 = null !== tmp && typeof tmp === "object";
              }
              if (!tmp2) {
                tmp = null;
              }
              let value = closure_1_6.get(this);
              if (null == value) {
                const _TypeError = TypeError;
                const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                throw typeError;
              } else {
                value = value.get(closure_0);
                let iter = value;
                let tmp11 = null;
                let tmp12 = null;
                if (null != value) {
                  do {
                    let tmp4 = iter;
                    let tmp5 = tmp11;
                    let tmp6 = iter;
                    if (3 === iter.listenerType) {
                      if (null !== tmp11) {
                        tmp11.next = iter.next;
                        tmp6 = tmp11;
                      } else if (null !== iter.next) {
                        let tmp9 = closure_0;
                        let result = value.set(closure_0, iter.next);
                        tmp6 = tmp11;
                      } else {
                        let tmp7 = closure_0;
                        let deleteResult = value.delete(closure_0);
                        tmp6 = tmp11;
                      }
                    }
                    iter = iter.next;
                    tmp11 = tmp6;
                    tmp12 = tmp6;
                  } while (null != iter);
                }
                if (null !== tmp) {
                  const obj = { listener: null, listenerType: 3, passive: false, once: false, next: null };
                  obj[0] = tmp;
                  if (null === tmp12) {
                    const result1 = value.set(closure_0, obj);
                  } else {
                    tmp12.next = obj;
                  }
                }
              }
            };
            definePropertyResult1 = Object.defineProperty(CustomEventTarget.prototype, "on" + tmp14, obj4);
            num5 = num5 + 1;
            length2 = arr.length;
          } while (num5 < length2);
        }
        return CustomEventTarget;
      } else {
        tmp4 = globalThis;
        class CustomEventTarget {
          constructor() {
            self = this;
            tmp = closure_8;
            call = closure_8.call;
            if (typeof call === "unknown") {
              tmpResult = tmp();
            } else {
              callResult = call(self);
            }
            return;
          }
        }
        tmp5 = new.target;
        str = "Cannot call a class as a function";
        tmp6 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp8 = typeError;
        throw typeError;
      }
    }
  }
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let obj = {};
Object.defineProperty(obj, "type", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.event.type;
  },
  set: undefined,
});
Object.defineProperty(obj, "target", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventTarget;
  },
  set: undefined,
});
Object.defineProperty(obj, "currentTarget", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.currentTarget;
  },
  set: undefined,
});
obj.composedPath = function composedPath() {
  const value = weakMap.get(this);
  console.assert(null != value, "'this' is expected an Event object, but got", this);
  const currentTarget = value.currentTarget;
  if (null == currentTarget) {
    let items = [];
  } else {
    items = [currentTarget];
  }
  return items;
};
Object.defineProperty(obj, "NONE", { get: () => 0, set: undefined });
Object.defineProperty(obj, "CAPTURING_PHASE", { get: () => 1, set: undefined });
Object.defineProperty(obj, "AT_TARGET", { get: () => 2, set: undefined });
Object.defineProperty(obj, "BUBBLING_PHASE", { get: () => 3, set: undefined });
Object.defineProperty(obj, "eventPhase", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventPhase;
  },
  set: undefined,
});
obj.stopPropagation = function stopPropagation() {
  const value = weakMap.get(this);
  console.assert(null != value, "'this' is expected an Event object, but got", this);
  value.stopped = true;
  if (typeof value.event.stopPropagation === "function") {
    const event = value.event;
    event.stopPropagation();
  }
};
obj.stopImmediatePropagation = function stopImmediatePropagation() {
  const value = weakMap.get(this);
  console.assert(null != value, "'this' is expected an Event object, but got", this);
  value.stopped = true;
  value.immediateStopped = true;
  if (typeof value.event.stopImmediatePropagation === "function") {
    const event = value.event;
    const result = event.stopImmediatePropagation();
  }
};
Object.defineProperty(obj, "bubbles", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.bubbles);
  },
  set: undefined,
});
Object.defineProperty(obj, "cancelable", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.cancelable);
  },
  set: undefined,
});
obj.preventDefault = function preventDefault() {
  const value = weakMap.get(this);
  console.assert(null != value, "'this' is expected an Event object, but got", this);
  if (null == value.passiveListener) {
    if (value.event.cancelable) {
      value.canceled = true;
      if (typeof value.event.preventDefault === "function") {
        const event = value.event;
        event.preventDefault();
      }
    }
  } else {
    const _console = console;
    let tmp3 = typeof console !== "undefined";
    if (typeof console !== "undefined") {
      const _console3 = console;
      tmp3 = typeof console.error === "function";
    }
    if (tmp3) {
      const _console2 = console;
      console.error("Unable to preventDefault inside passive event listener invocation.", value.passiveListener);
    }
  }
};
Object.defineProperty(obj, "defaultPrevented", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.canceled;
  },
  set: undefined,
});
Object.defineProperty(obj, "composed", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.composed);
  },
  set: undefined,
});
Object.defineProperty(obj, "timeStamp", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.timeStamp;
  },
  set: undefined,
});
Object.defineProperty(obj, "srcElement", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventTarget;
  },
  set: undefined,
});
Object.defineProperty(obj, "cancelBubble", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.stopped;
  },
  set: function (arg0) {
    if (arg0) {
      const self = this;
      const value = weakMap.get(this);
      const _console = console;
      console.assert(null != value, "'this' is expected an Event object, but got", this);
      value.stopped = true;
      if (typeof value.event.cancelBubble === "boolean") {
        value.event.cancelBubble = true;
      }
    }
  },
});
Object.defineProperty(obj, "returnValue", {
  get: function () {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return !value.canceled;
  },
  set: function (arg0) {
    if (!arg0) {
      const self = this;
      const value = weakMap.get(this);
      const _console = console;
      console.assert(null != value, "'this' is expected an Event object, but got", this);
      if (null == value.passiveListener) {
        if (value.event.cancelable) {
          value.canceled = true;
          if (typeof value.event.preventDefault === "function") {
            const event = value.event;
            event.preventDefault();
          }
        }
      } else {
        const _console2 = console;
        let tmp6 = typeof console !== "undefined";
        if (typeof console !== "undefined") {
          const _console4 = console;
          tmp6 = typeof console.error === "function";
        }
        if (tmp6) {
          const _console3 = console;
          console.error("Unable to preventDefault inside passive event listener invocation.", value.passiveListener);
        }
      }
    }
  },
});
obj.initEvent = function initEvent() {};
Event.prototype = obj;
obj = { value: Event, configurable: true, writable: true };
Object.defineProperty(Event.prototype, "constructor", obj);
if (typeof window !== "undefined") {
  const _window2 = window;
  class Event {
    constructor(arg0, arg1) {
      obj = {
        eventTarget: global,
        event: require,
        eventPhase: 2,
        currentTarget: global,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: null,
      };
      timeStamp = require.timeStamp;
      tmp = closure_0;
      if (!timeStamp) {
        tmp2 = globalThis;
        _Date = Date;
        timeStamp = Date.now();
      }
      self = this;
      obj[8] = timeStamp;
      result = closure_0.set(this, obj);
      definePropertyResult = Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      keys = Object.keys(require);
      for (let num = 0; num < keys.length; num = num + 1) {
        tmp5 = keys[num];
        tmp6 = num;
        if (!(tmp5 in self)) {
          _Object = Object;
          closure_0 = tmp5;
          obj = { get: null, set: null, configurable: true, enumerable: true };
          obj[0] = function get() {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            return value.event[store];
          };
          obj[1] = function set(arg0) {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            value.event[store] = arg0;
          };
          definePropertyResult1 = Object.defineProperty(self, tmp5, obj);
        }
      }
      return;
    }
  }
}
if (tmp4) {
  let _Object = Object;
  class Event {
    constructor(arg0, arg1) {
      obj = {
        eventTarget: global,
        event: require,
        eventPhase: 2,
        currentTarget: global,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: null,
      };
      timeStamp = require.timeStamp;
      tmp = closure_0;
      if (!timeStamp) {
        tmp2 = globalThis;
        _Date = Date;
        timeStamp = Date.now();
      }
      self = this;
      obj[8] = timeStamp;
      result = closure_0.set(this, obj);
      definePropertyResult = Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      keys = Object.keys(require);
      for (let num = 0; num < keys.length; num = num + 1) {
        tmp5 = keys[num];
        tmp6 = num;
        if (!(tmp5 in self)) {
          _Object = Object;
          closure_0 = tmp5;
          obj = { get: null, set: null, configurable: true, enumerable: true };
          obj[0] = function get() {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            return value.event[store];
          };
          obj[1] = function set(arg0) {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            value.event[store] = arg0;
          };
          definePropertyResult1 = Object.defineProperty(self, tmp5, obj);
        }
      }
      return;
    }
  }
  Object.setPrototypeOf(Event.prototype, window.Event.prototype);
  const _window = window;
  let result = weakMap1.set(window.Event.prototype, Event);
}
const weakMap2 = new WeakMap();
EventTarget.prototype = {
  addEventListener(arg0, fn, obj) {
    if (null != fn) {
      if (typeof fn !== "function") {
        if (!tmp) {
          const _TypeError = TypeError;
          const typeError = new TypeError("'listener' should be a function or an object.");
          throw typeError;
        }
        tmp = null !== fn && typeof fn === "object";
      }
      const self = this;
      let value = weakMap2.get(this);
      if (null == value) {
        const _TypeError2 = TypeError;
        const typeError1 = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError1;
      } else {
        let BooleanResult1 = null !== obj && typeof obj === "object";
        const _Boolean = Boolean;
        if (BooleanResult1) {
          let _BooleanResult = _Boolean(obj.capture);
        } else {
          _BooleanResult = _Boolean(obj);
        }
        let num = 2;
        if (_BooleanResult) {
          num = 1;
        }
        obj = { listener: null, listenerType: null, passive: null, once: null, next: null };
        obj[0] = fn;
        obj[1] = num;
        let BooleanResult = BooleanResult1;
        if (BooleanResult1) {
          const _Boolean2 = Boolean;
          BooleanResult = Boolean(obj.passive);
        }
        obj[2] = BooleanResult;
        if (BooleanResult1) {
          const _Boolean3 = Boolean;
          BooleanResult1 = Boolean(obj.once);
        }
        obj[3] = BooleanResult1;
        value = value.get(arg0);
        if (undefined !== value) {
          let iter = value;
          let tmp15 = null;
          if (null != value) {
            while (true) {
              let tmp16 = iter;
              if (iter.listener === fn) {
                if (iter.listenerType === num) {
                  break;
                }
              }
              iter = iter.next;
              tmp15 = tmp16;
            }
          }
          tmp15.next = obj;
        } else {
          const result = value.set(arg0, obj);
        }
      }
    }
  },
  removeEventListener(arg0, arg1, obj) {
    if (null != arg1) {
      const self = this;
      let value = weakMap2.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError;
      } else {
        const _Boolean = Boolean;
        if (tmp) {
          let _BooleanResult = _Boolean(obj.capture);
        } else {
          _BooleanResult = _Boolean(obj);
        }
        let num = 2;
        if (_BooleanResult) {
          num = 1;
        }
        value = value.get(arg0);
        let iter = value;
        let tmp6 = null;
        if (null != value) {
          while (true) {
            let tmp8 = tmp6;
            let tmp7 = iter;
            if (iter.listener === arg1) {
              if (iter.listenerType === num) {
                break;
              }
            }
            iter = iter.next;
            tmp6 = tmp7;
          }
          if (null !== tmp6) {
            const next = iter.next;
            tmp6.next = next;
          } else if (null !== iter.next) {
            const result = value.set(arg0, iter.next);
          } else {
            value.delete(arg0);
          }
        }
        tmp = null !== obj && typeof obj === "object";
      }
    }
  },
  dispatchEvent(type) {
    if (null != type) {
      if (typeof type.type === "string") {
        const self = this;
        const obj = getListeners(this);
        type = type.type;
        let iter = obj.get(type);
        if (null == iter) {
          return true;
        } else {
          const tmp24 = (function wrapEvent(self, type) {
            return new callback(Object.getPrototypeOf(type))(self, type);
          })(self, type);
          let tmp17 = null;
          if (null != iter) {
            let tmp4 = iter;
            if (iter.once) {
              if (null !== tmp17) {
                tmp17.next = iter.next;
                tmp4 = tmp17;
              } else if (null !== iter.next) {
                const result = obj.set(type, iter.next);
                tmp4 = tmp17;
              } else {
                obj.delete(type);
                tmp4 = tmp17;
              }
            }
            let listener = null;
            if (iter.passive) {
              listener = iter.listener;
            }
            setPassiveListener(tmp24, listener);
            if (typeof iter.listener === "function") {
              try {
                const listener2 = iter.listener;
                const call = listener2.call;
                if (typeof call === "unknown") {
                  listener2(tmp24);
                } else {
                  call(self, tmp24);
                }
              } catch (tmp13) {
                const _console = tmp.console;
                let tmp14 = typeof _console !== "undefined";
                if (typeof _console !== "undefined") {
                  tmp14 = typeof tmp.console.error === "function";
                }
                if (tmp14) {
                  const _console2 = tmp.console;
                  _console2.error(tmp13);
                }
              }
            } else {
              if (tmp10) {
                listener = iter.listener;
                listener.handleEvent(tmp24);
              }
              tmp10 = 3 !== iter.listenerType && typeof iter.listener.handleEvent === "function";
            }
            if (!isStopped(tmp24)) {
              iter = iter.next;
              tmp17 = tmp4;
            }
            const tmp7 = setPassiveListener;
          }
          setPassiveListener(tmp24, null);
          (function setEventPhase(arg0, arg1) {
            const value = store.get(arg0);
            console.assert(null != value, "'this' is expected an Event object, but got", arg0);
            value.eventPhase = 0;
          })(tmp24, 0);
          (function setCurrentTarget(arg0, arg1) {
            const value = store.get(arg0);
            console.assert(null != value, "'this' is expected an Event object, but got", arg0);
            value.currentTarget = null;
          })(tmp24, null);
          return !tmp24.defaultPrevented;
        }
      }
    }
    const typeError = new TypeError('"event.type" should be a string.');
    throw typeError;
  },
};
Object.defineProperty(EventTarget.prototype, "constructor", { value: EventTarget, configurable: true, writable: true });
if (typeof window !== "undefined") {
  const _window3 = window;
  class Event {
    constructor(arg0, arg1) {
      obj = {
        eventTarget: global,
        event: require,
        eventPhase: 2,
        currentTarget: global,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: null,
      };
      timeStamp = require.timeStamp;
      tmp = closure_0;
      if (!timeStamp) {
        tmp2 = globalThis;
        _Date = Date;
        timeStamp = Date.now();
      }
      self = this;
      obj[8] = timeStamp;
      result = closure_0.set(this, obj);
      definePropertyResult = Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      keys = Object.keys(require);
      for (let num = 0; num < keys.length; num = num + 1) {
        tmp5 = keys[num];
        tmp6 = num;
        if (!(tmp5 in self)) {
          _Object = Object;
          closure_0 = tmp5;
          obj = { get: null, set: null, configurable: true, enumerable: true };
          obj[0] = function get() {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            return value.event[store];
          };
          obj[1] = function set(arg0) {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            value.event[store] = arg0;
          };
          definePropertyResult1 = Object.defineProperty(self, tmp5, obj);
        }
      }
      return;
    }
  }
}
if (tmp9) {
  let _Object2 = Object;
  class Event {
    constructor(arg0, arg1) {
      obj = {
        eventTarget: global,
        event: require,
        eventPhase: 2,
        currentTarget: global,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: null,
      };
      timeStamp = require.timeStamp;
      tmp = closure_0;
      if (!timeStamp) {
        tmp2 = globalThis;
        _Date = Date;
        timeStamp = Date.now();
      }
      self = this;
      obj[8] = timeStamp;
      result = closure_0.set(this, obj);
      definePropertyResult = Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      keys = Object.keys(require);
      for (let num = 0; num < keys.length; num = num + 1) {
        tmp5 = keys[num];
        tmp6 = num;
        if (!(tmp5 in self)) {
          _Object = Object;
          closure_0 = tmp5;
          obj = { get: null, set: null, configurable: true, enumerable: true };
          obj[0] = function get() {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            return value.event[store];
          };
          obj[1] = function set(arg0) {
            const value = store.get(this);
            console.assert(null != value, "'this' is expected an Event object, but got", this);
            value.event[store] = arg0;
          };
          definePropertyResult1 = Object.defineProperty(self, tmp5, obj);
        }
      }
      return;
    }
  }
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}
function defineEventAttribute(prototype, abort) {
  closure_0 = abort;
  Object.defineProperty(prototype, "on" + abort, {
    get() {
      const value = closure_1_6.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError;
      } else {
        let iter = value.get(closure_0);
        if (null != iter) {
          while (3 !== iter.listenerType) {
            iter = iter.next;
          }
          return iter.listener;
        }
        return null;
      }
    },
    set(fn) {
      let tmp = fn;
      let tmp2 = typeof fn === "function";
      if (typeof fn !== "function") {
        tmp2 = null !== tmp && typeof tmp === "object";
        const tmp3 = null !== tmp && typeof tmp === "object";
      }
      if (!tmp2) {
        tmp = null;
      }
      let value = closure_1_6.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError;
      } else {
        value = value.get(closure_0);
        let iter = value;
        let tmp11 = null;
        let tmp12 = null;
        if (null != value) {
          do {
            let tmp4 = iter;
            let tmp5 = tmp11;
            let tmp6 = iter;
            if (3 === iter.listenerType) {
              if (null !== tmp11) {
                tmp11.next = iter.next;
                tmp6 = tmp11;
              } else if (null !== iter.next) {
                let tmp9 = closure_0;
                let result = value.set(closure_0, iter.next);
                tmp6 = tmp11;
              } else {
                let tmp7 = closure_0;
                let deleteResult = value.delete(closure_0);
                tmp6 = tmp11;
              }
            }
            iter = iter.next;
            tmp11 = tmp6;
            tmp12 = tmp6;
          } while (null != iter);
        }
        if (null !== tmp) {
          const obj = { listener: null, listenerType: 3, passive: false, once: false, next: null };
          obj[0] = tmp;
          if (null === tmp12) {
            const result1 = value.set(closure_0, obj);
          } else {
            tmp12.next = obj;
          }
        }
      }
    },
    configurable: true,
    enumerable: true,
  });
}
module.exports.default = EventTarget;
module.exports.EventTarget = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;

export { defineEventAttribute };
export { EventTarget };
export default EventTarget;
