// === Module 229: get type ===

// Module 229 (get type)
let map, set;

class Event {
  constructor(eventTarget, event) {
    let closure_0;
    let num;
    let timeStamp;
    const obj = { eventTarget, event, eventPhase: 2, currentTarget: eventTarget, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp };
    timeStamp = event.timeStamp;
    set = weakMap.set;
    if (!timeStamp) {
      const _Date = Date;
      timeStamp = Date.now();
    }
    const self = this;
    const result = set(this, obj);
    Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
    const keys = Object.keys(event);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp5 = keys[num];
      if (!(tmp5 in self)) {
        let _Object = Object;
        weakMap = tmp5;
        let obj2 = {
          get() {
                const value = weakMap.get(this);
                console.assert(null != value, "'this' is expected an Event object, but got", this);
                return value.event[closure_1_0];
              },
          set(arg0) {
                const value = weakMap.get(this);
                console.assert(null != value, "'this' is expected an Event object, but got", this);
                value.event[closure_1_0] = arg0;
              },
          configurable: true,
          enumerable: true
        };
        let definePropertyResult1 = Object.defineProperty(self, tmp5, obj2);
      }
    }
  }
}
function getWrapper(prototypeOf) {
  let obj4;
  if (null != prototypeOf) {
    const _Object2 = Object;
    if (prototypeOf !== Object.prototype) {
      let value = weakMap1.get(prototypeOf);
      if (null == value) {
        const _Object3 = Object;
        const tmp9 = getWrapper(Object.getPrototypeOf(prototypeOf));
        weakMap = tmp9;
        const _Object4 = Object;
        const keys = Object.keys(prototypeOf);
        let tmp4 = tmp9;
        if (0 !== keys.length) {
          class CustomEvent {
            constructor(arg0, arg1) {
              closure_0.call(this, arg0, arg1);
            }
          }
          const _Object5 = Object;
          const obj2 = { constructor: obj4 };
          obj4 = { value: CustomEvent, configurable: true, writable: true };
          CustomEvent.prototype = Object.create(tmp9.prototype, obj2);
          let num = 0;
          tmp4 = CustomEvent;
          if (0 < keys.length) {
            class CustomEvent {
              constructor(arg0, arg1) {
                closure_0.call(this, arg0, arg1);
              }
            }
            while (true) {
              class CustomEvent {
                constructor(arg0, arg1) {
                  closure_0.call(this, arg0, arg1);
                }
              }
              if (!(tmp in tmp9.prototype)) {
                let obj5;
                class CustomEvent {
                  constructor(arg0, arg1) {
                    closure_0.call(this, arg0, arg1);
                  }
                }
                let _Object = Object;
                let prototype = CustomEvent.prototype;
                if (typeof Object.getOwnPropertyDescriptor(prototypeOf, tmp).value === "function") {
                  class CustomEvent {
                    constructor(arg0, arg1) {
                      closure_0.call(this, arg0, arg1);
                    }
                  }
                  let obj = {
                    value() {
                                      const value = weakMap.get(this);
                                      console.assert(null != value, "'this' is expected an Event object, but got", this);
                                      const event = value.event;
                                      const obj = event[closure_1_0];
                                      return obj(...arguments);
                                    },
                    configurable: true,
                    enumerable: true
                  };
                  obj5 = obj;
                } else {
                  class CustomEvent {
                    constructor(arg0, arg1) {
                      closure_0.call(this, arg0, arg1);
                    }
                  }
                  obj5 = {
                    get() {
                                      const value = weakMap.get(this);
                                      console.assert(null != value, "'this' is expected an Event object, but got", this);
                                      return value.event[closure_1_0];
                                    },
                    set(arg0) {
                                      const value = weakMap.get(this);
                                      console.assert(null != value, "'this' is expected an Event object, but got", this);
                                      value.event[closure_1_0] = arg0;
                                    },
                    configurable: true,
                    enumerable: true
                  };
                }
                let definePropertyResult = defineProperty(prototype, tmp, obj5);
              }
              num = num + 1;
              tmp4 = CustomEvent;
              if (num >= keys.length) {
                class CustomEvent {
                  constructor(arg0, arg1) {
                    closure_0.call(this, arg0, arg1);
                  }
                }
              } else {
                class CustomEvent {
                  constructor(arg0, arg1) {
                    closure_0.call(this, arg0, arg1);
                  }
                }
              }
            }
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
    const self = this;
    const self2 = this;
    const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
    throw typeError;
  } else {
    return value;
  }
}
class EventTarget {
  constructor() {
    let length;
    let length2;
    let length3;
    let obj3;
    let obj5;
    let tmp;
    let tmp2;
    if (this instanceof EventTarget) {
      const _Map = Map;
      const self5 = this;
      const self6 = this;
      set = weakMap2.set;
      map = new Map();
      let result = set(tmp, map);
    } else {
      if (1 === arguments.length) {
        const tmp3 = globalThis;
        const _Array = Array;
        if (Array.isArray(arguments[0])) {
          const first = arguments[0];
          class CustomEventTarget {
            constructor() {
              _EventTarget.call(this);
            }
          }
          const _Object3 = Object;
          const obj2 = { constructor: obj3 };
          obj3 = { value: CustomEventTarget, configurable: true, writable: true };
          CustomEventTarget.prototype = Object.create(tmp2.prototype, obj2);
          let num6 = 0;
          if (0 < first.length) {
            do {
              let tmp12 = first[num6];
              let _Object4 = Object;
              let _HermesInternal2 = HermesInternal;
              let closure_0 = tmp12;
              let obj4 = {
                get() {
                            const value = weakMap2.get(this);
                            if (null == value) {
                              const _TypeError = TypeError;
                              const self = this;
                              const self2 = this;
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
                            if (!tmp2) {
                              tmp2 = null !== tmp && typeof tmp === "object";
                            }
                            if (!tmp2) {
                              tmp = null;
                            }
                            const value = weakMap2.get(this);
                            if (null == value) {
                              const _TypeError = TypeError;
                              const self = this;
                              const self2 = this;
                              const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                              throw typeError;
                            } else {
                              const value2 = value.get(closure_0);
                              let iter = value2;
                              let tmp11 = null;
                              let tmp12 = null;
                              if (null != value2) {
                                do {
                                  let tmp6 = iter;
                                  if (3 === iter.listenerType) {
                                    if (null !== tmp11) {
                                      tmp11.next = iter.next;
                                      tmp6 = tmp11;
                                    } else if (null !== iter.next) {
                                      let result = value.set(closure_0, iter.next);
                                      tmp6 = tmp11;
                                    } else {
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
                                const obj = { listener: tmp, listenerType: 3, passive: false, once: false, next: null };
                                if (null === tmp12) {
                                  const result1 = value.set(closure_0, obj);
                                } else {
                                  tmp12.next = obj;
                                }
                              }
                            }
                          },
                configurable: true,
                enumerable: true
              };
              let definePropertyResult = Object.defineProperty(CustomEventTarget.prototype, "on" + tmp12, obj4);
              num6 = num6 + 1;
              length3 = first.length;
            } while (num6 < length3);
          }
          return CustomEventTarget;
        }
      }
      if (arguments.length > 0) {
        class CustomEventTarget {
          constructor() {
            _EventTarget.call(this);
          }
        }
        const self3 = this;
        const self4 = this;
        const arr = new Array(arguments.length);
        let num4 = 0;
        if (0 < arguments.length) {
          do {
            arr[num4] = arguments[num4];
            num4 = num4 + 1;
            length = arguments.length;
          } while (num4 < length);
        }
        const _Object = Object;
        let obj = { constructor: obj5 };
        obj5 = { value: CustomEventTarget, configurable: true, writable: true };
        CustomEventTarget.prototype = Object.create(EventTarget.prototype, obj);
        let num5 = 0;
        if (0 < arr.length) {
          do {
            let tmp10 = arr[num5];
            let _Object2 = Object;
            let _HermesInternal = HermesInternal;
            closure_0 = tmp10;
            let obj6 = {
              get() {
                        const value = weakMap2.get(this);
                        if (null == value) {
                          const _TypeError = TypeError;
                          const self = this;
                          const self2 = this;
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
                        if (!tmp2) {
                          tmp2 = null !== tmp && typeof tmp === "object";
                        }
                        if (!tmp2) {
                          tmp = null;
                        }
                        const value = weakMap2.get(this);
                        if (null == value) {
                          const _TypeError = TypeError;
                          const self = this;
                          const self2 = this;
                          const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
                          throw typeError;
                        } else {
                          const value2 = value.get(closure_0);
                          let iter = value2;
                          let tmp11 = null;
                          let tmp12 = null;
                          if (null != value2) {
                            do {
                              let tmp6 = iter;
                              if (3 === iter.listenerType) {
                                if (null !== tmp11) {
                                  tmp11.next = iter.next;
                                  tmp6 = tmp11;
                                } else if (null !== iter.next) {
                                  let result = value.set(closure_0, iter.next);
                                  tmp6 = tmp11;
                                } else {
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
                            const obj = { listener: tmp, listenerType: 3, passive: false, once: false, next: null };
                            if (null === tmp12) {
                              const result1 = value.set(closure_0, obj);
                            } else {
                              tmp12.next = obj;
                            }
                          }
                        }
                      },
              configurable: true,
              enumerable: true
            };
            let definePropertyResult1 = Object.defineProperty(CustomEventTarget.prototype, "on" + tmp10, obj6);
            num5 = num5 + 1;
            length2 = arr.length;
          } while (num5 < length2);
        }
        return CustomEventTarget;
      } else {
        let tmp4 = globalThis;
        class CustomEventTarget {
          constructor() {
            _EventTarget.call(this);
          }
        }
        let self = this;
        let self2 = this;
        let typeError = new TypeError("Cannot call a class as a function");
        let tmp6 = typeError;
        throw typeError;
      }
    }
  }
}
let weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let obj = {
  composedPath() {
    let items;
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    const currentTarget = value.currentTarget;
    if (null == currentTarget) {
      items = [];
    } else {
      items = [currentTarget];
    }
    return items;
  },
  stopPropagation() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    value.stopped = true;
    if (typeof value.event.stopPropagation === "function") {
      const event = value.event;
      event.stopPropagation();
    }
  },
  stopImmediatePropagation() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    value.stopped = true;
    value.immediateStopped = true;
    if (typeof value.event.stopImmediatePropagation === "function") {
      const event = value.event;
      const result = event.stopImmediatePropagation();
    }
  },
  preventDefault() {
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
  },
  initEvent() {

  }
};
Object.defineProperty(obj, "type", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.event.type;
  },
  set: undefined
});
Object.defineProperty(obj, "target", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "currentTarget", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.currentTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "NONE", { get: () => 0, set: undefined });
Object.defineProperty(obj, "CAPTURING_PHASE", { get: () => 1, set: undefined });
Object.defineProperty(obj, "AT_TARGET", { get: () => 2, set: undefined });
Object.defineProperty(obj, "BUBBLING_PHASE", { get: () => 3, set: undefined });
Object.defineProperty(obj, "eventPhase", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventPhase;
  },
  set: undefined
});
Object.defineProperty(obj, "bubbles", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.bubbles);
  },
  set: undefined
});
Object.defineProperty(obj, "cancelable", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.cancelable);
  },
  set: undefined
});
Object.defineProperty(obj, "defaultPrevented", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.canceled;
  },
  set: undefined
});
Object.defineProperty(obj, "composed", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return Boolean(value.event.composed);
  },
  set: undefined
});
Object.defineProperty(obj, "timeStamp", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.timeStamp;
  },
  set: undefined
});
Object.defineProperty(obj, "srcElement", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "cancelBubble", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return value.stopped;
  },
  set: function(arg0) {
    const tmp = arg0;
    if (tmp) {
      const self = this;
      const value = weakMap.get(this);
      const _console = console;
      console.assert(null != value, "'this' is expected an Event object, but got", this);
      value.stopped = true;
      if (typeof value.event.cancelBubble === "boolean") {
        value.event.cancelBubble = true;
      }
    }
  }
});
Object.defineProperty(obj, "returnValue", {
  get: function() {
    const value = weakMap.get(this);
    console.assert(null != value, "'this' is expected an Event object, but got", this);
    return !value.canceled;
  },
  set: function(arg0) {
    const tmp = arg0;
    if (!tmp) {
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
        let tmp7 = typeof console !== "undefined";
        if (typeof console !== "undefined") {
          const _console4 = console;
          tmp7 = typeof console.error === "function";
        }
        if (tmp7) {
          const _console3 = console;
          console.error("Unable to preventDefault inside passive event listener invocation.", value.passiveListener);
        }
      }
    }
  }
});
Event.prototype = obj;
let obj2 = { value: Event, configurable: true, writable: true };
let definePropertyResult1 = Object.defineProperty(Event.prototype, "constructor", obj2);
let tmp4 = typeof window !== "undefined";
if (typeof window !== "undefined") {
  const _window2 = window;
  class Event {
    constructor(eventTarget, event) {
      let closure_0;
      let num;
      let timeStamp;
      const obj = { eventTarget, event, eventPhase: 2, currentTarget: eventTarget, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp };
      timeStamp = event.timeStamp;
      set = weakMap.set;
      if (!timeStamp) {
        const _Date = Date;
        timeStamp = Date.now();
      }
      const self = this;
      const result = set(this, obj);
      Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      const keys = Object.keys(event);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp5 = keys[num];
        if (!(tmp5 in self)) {
          let _Object = Object;
          weakMap = tmp5;
          let obj2 = {
            get() {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  return value.event[closure_1_0];
                },
            set(arg0) {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  value.event[closure_1_0] = arg0;
                },
            configurable: true,
            enumerable: true
          };
          let definePropertyResult1 = Object.defineProperty(self, tmp5, obj2);
        }
      }
    }
  }
}
if (tmp4) {
  let _Object = Object;
  class Event {
    constructor(eventTarget, event) {
      let closure_0;
      let num;
      let timeStamp;
      const obj = { eventTarget, event, eventPhase: 2, currentTarget: eventTarget, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp };
      timeStamp = event.timeStamp;
      set = weakMap.set;
      if (!timeStamp) {
        const _Date = Date;
        timeStamp = Date.now();
      }
      const self = this;
      const result = set(this, obj);
      Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      const keys = Object.keys(event);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp5 = keys[num];
        if (!(tmp5 in self)) {
          let _Object = Object;
          weakMap = tmp5;
          let obj2 = {
            get() {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  return value.event[closure_1_0];
                },
            set(arg0) {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  value.event[closure_1_0] = arg0;
                },
            configurable: true,
            enumerable: true
          };
          let definePropertyResult1 = Object.defineProperty(self, tmp5, obj2);
        }
      }
    }
  }
  Object.setPrototypeOf(Event.prototype, window.Event.prototype);
  const _window = window;
  let result = weakMap1.set(window.Event.prototype, Event);
}
const weakMap2 = new WeakMap();
EventTarget.prototype = {
  addEventListener(arg0, listener, capture) {
    let BooleanResult;
    if (null != listener) {
      if (typeof listener !== "function") {
        const tmp = null !== listener && typeof listener === "object";
        if (!tmp) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("'listener' should be a function or an object.");
          throw typeError;
        }
      }
      const self3 = this;
      const value = weakMap2.get(this);
      if (null == value) {
        const _TypeError2 = TypeError;
        const self4 = this;
        const self5 = this;
        const typeError1 = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError1;
      } else {
        let _BooleanResult;
        let BooleanResult1 = null !== capture && typeof capture === "object";
        const _Boolean = Boolean;
        if (BooleanResult1) {
          _BooleanResult = _Boolean(capture.capture);
        } else {
          _BooleanResult = _Boolean(capture);
        }
        let num = 2;
        if (_BooleanResult) {
          num = 1;
        }
        const obj = { listener, listenerType: num, passive: BooleanResult, once: BooleanResult1, next: null };
        BooleanResult = BooleanResult1;
        if (BooleanResult) {
          const _Boolean2 = Boolean;
          BooleanResult = Boolean(capture.passive);
        }
        if (BooleanResult1) {
          const _Boolean3 = Boolean;
          BooleanResult1 = Boolean(capture.once);
        }
        const value2 = value.get(arg0);
        if (undefined !== value2) {
          let iter = value2;
          let tmp13 = null;
          if (null != value2) {
            while (true) {
              let tmp14 = iter;
              if (iter.listener === listener) {
                if (iter.listenerType === num) {
                  break;
                }
              }
              iter = iter.next;
              tmp13 = tmp14;
            }
          }
          tmp13.next = obj;
        } else {
          const result = value.set(arg0, obj);
        }
      }
    }
  },
  removeEventListener(arg0, arg1, capture) {
    if (null != arg1) {
      const self3 = this;
      const value = weakMap2.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError;
      } else {
        let _BooleanResult;
        const _Boolean = Boolean;
        const tmp = null !== capture && typeof capture === "object";
        if (tmp) {
          _BooleanResult = _Boolean(capture.capture);
        } else {
          _BooleanResult = _Boolean(capture);
        }
        let num = 2;
        if (_BooleanResult) {
          num = 1;
        }
        const value2 = value.get(arg0);
        let iter = value2;
        let tmp6 = null;
        if (null != value2) {
          while (true) {
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
      }
    }
  },
  dispatchEvent(type) {
    function wrapEvent(self, type) {
      const tmp = new getWrapper(Object.getPrototypeOf(type))(self, type);
      return tmp;
    }
    function setEventPhase(arg0, arg1) {
      const value = weakMap.get(arg0);
      console.assert(null != value, "'this' is expected an Event object, but got", arg0);
      value.eventPhase = 0;
    }
    function setCurrentTarget(arg0, arg1) {
      const value = weakMap.get(arg0);
      console.assert(null != value, "'this' is expected an Event object, but got", arg0);
      value.currentTarget = null;
    }
    if (null != type) {
      if (typeof type.type === "string") {
        const self = this;
        const obj = getListeners(this);
        type = type.type;
        let iter = obj.get(type);
        if (null == iter) {
          return true;
        } else {
          const tmp22 = wrapEvent(self, type);
          let tmp15 = null;
          if (null != iter) {
            let tmp = tmp15;
            let tmp3 = iter;
            if (iter.once) {
              if (null !== tmp15) {
                tmp15.next = iter.next;
                tmp3 = tmp15;
              } else if (null !== iter.next) {
                const result = obj.set(type, iter.next);
                tmp3 = tmp15;
              } else {
                obj.delete(type);
                tmp3 = tmp15;
              }
            }
            let listener1 = null;
            if (iter.passive) {
              listener1 = iter.listener;
            }
            setPassiveListener(tmp22, listener1);
            if (typeof iter.listener === "function") {
              try {
                const listener2 = iter.listener;
                listener2.call(self, tmp22);
              } catch (tmp11) {
                const _console = console;
                let tmp12 = typeof console !== "undefined";
                if (tmp12) {
                  const _console3 = console;
                  tmp12 = typeof console.error === "function";
                }
                if (tmp12) {
                  const _console2 = console;
                  console.error(tmp11);
                }
              }
            } else {
              const tmp9 = 3 !== iter.listenerType && typeof iter.listener.handleEvent === "function";
              if (tmp9) {
                const listener = iter.listener;
                listener.handleEvent(tmp22);
              }
            }
            if (!isStopped(tmp22)) {
              iter = iter.next;
              tmp15 = tmp3;
            }
          }
          setPassiveListener(tmp22, null);
          setEventPhase(tmp22, 0);
          setCurrentTarget(tmp22, null);
          return !tmp22.defaultPrevented;
        }
      }
    }
    const typeError = new TypeError("\"event.type\" should be a string.");
    throw typeError;
  }
};
let obj3 = { value: EventTarget, configurable: true, writable: true };
Object.defineProperty(EventTarget.prototype, "constructor", obj3);
let tmp9 = typeof window !== "undefined";
if (typeof window !== "undefined") {
  const _window3 = window;
  class Event {
    constructor(eventTarget, event) {
      let closure_0;
      let num;
      let timeStamp;
      const obj = { eventTarget, event, eventPhase: 2, currentTarget: eventTarget, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp };
      timeStamp = event.timeStamp;
      set = weakMap.set;
      if (!timeStamp) {
        const _Date = Date;
        timeStamp = Date.now();
      }
      const self = this;
      const result = set(this, obj);
      Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      const keys = Object.keys(event);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp5 = keys[num];
        if (!(tmp5 in self)) {
          let _Object = Object;
          weakMap = tmp5;
          let obj2 = {
            get() {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  return value.event[closure_1_0];
                },
            set(arg0) {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  value.event[closure_1_0] = arg0;
                },
            configurable: true,
            enumerable: true
          };
          let definePropertyResult1 = Object.defineProperty(self, tmp5, obj2);
        }
      }
    }
  }
}
if (tmp9) {
  let _Object2 = Object;
  class Event {
    constructor(eventTarget, event) {
      let closure_0;
      let num;
      let timeStamp;
      const obj = { eventTarget, event, eventPhase: 2, currentTarget: eventTarget, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp };
      timeStamp = event.timeStamp;
      set = weakMap.set;
      if (!timeStamp) {
        const _Date = Date;
        timeStamp = Date.now();
      }
      const self = this;
      const result = set(this, obj);
      Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
      const keys = Object.keys(event);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp5 = keys[num];
        if (!(tmp5 in self)) {
          let _Object = Object;
          weakMap = tmp5;
          let obj2 = {
            get() {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  return value.event[closure_1_0];
                },
            set(arg0) {
                  const value = weakMap.get(this);
                  console.assert(null != value, "'this' is expected an Event object, but got", this);
                  value.event[closure_1_0] = arg0;
                },
            configurable: true,
            enumerable: true
          };
          let definePropertyResult1 = Object.defineProperty(self, tmp5, obj2);
        }
      }
    }
  }
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}
function defineEventAttribute(prototype, abort) {
  let closure_0 = abort;
  const obj = {
    get() {
      const value = weakMap2.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
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
      if (!tmp2) {
        tmp2 = null !== tmp && typeof tmp === "object";
      }
      if (!tmp2) {
        tmp = null;
      }
      const value = weakMap2.get(this);
      if (null == value) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
        throw typeError;
      } else {
        const value2 = value.get(closure_0);
        let iter = value2;
        let tmp11 = null;
        let tmp12 = null;
        if (null != value2) {
          do {
            let tmp6 = iter;
            if (3 === iter.listenerType) {
              if (null !== tmp11) {
                tmp11.next = iter.next;
                tmp6 = tmp11;
              } else if (null !== iter.next) {
                let result = value.set(closure_0, iter.next);
                tmp6 = tmp11;
              } else {
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
          const obj = { listener: tmp, listenerType: 3, passive: false, once: false, next: null };
          if (null === tmp12) {
            const result1 = value.set(closure_0, obj);
          } else {
            tmp12.next = obj;
          }
        }
      }
    },
    configurable: true,
    enumerable: true
  };
  Object.defineProperty(prototype, "on" + abort, obj);
}
module.exports.default = EventTarget;
module.exports.EventTarget = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;

export { defineEventAttribute };
export { EventTarget };
export default EventTarget;