// === Module 133: Event ===

// Module 133 (Event)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const Event = fn;
class Event {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, Event);
    this._defaultPrevented = false;
    tmp2 = closure_0;
    tmp3 = closure_1;
    this[closure_0(closure_1[2]).COMPOSED_PATH_KEY] = [];
    this[closure_0(closure_1[2]).CURRENT_TARGET_KEY] = null;
    this[closure_0(closure_1[2]).EVENT_PHASE_KEY] = Event.NONE;
    this[closure_0(closure_1[2]).IN_PASSIVE_LISTENER_FLAG_KEY] = false;
    this[closure_0(closure_1[2]).IS_TRUSTED_KEY] = false;
    this[closure_0(closure_1[2]).STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
    this[closure_0(closure_1[2]).STOP_PROPAGATION_FLAG_KEY] = false;
    this[closure_0(closure_1[2]).TARGET_KEY] = null;
    if (arguments.length < 1) {
      tmp15 = globalThis;
      _TypeError2 = TypeError;
      tmp16 = new.target;
      str2 = "Failed to construct 'Event': 1 argument required, but only 0 present.";
      tmp17 = new.target;
      typeError = new TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
      tmp19 = typeError;
      throw typeError;
    } else {
      tmp20 = fn;
      if (null != fn) {
        if (typeof fn !== "object") {
          if (typeof fn !== "function") {
            tmp10 = globalThis;
            _TypeError = TypeError;
            tmp11 = new.target;
            str = "Failed to construct 'Event': The provided value is not of type 'EventInit'.";
            tmp12 = new.target;
            typeError1 = new TypeError("Failed to construct 'Event': The provided value is not of type 'EventInit'.");
            tmp14 = typeError1;
            throw typeError1;
          }
        }
      }
      tmp4 = global;
      tmp5 = globalThis;
      _String = String;
      self._type = String(global);
      bubbles = undefined;
      if (fn != null) {
        bubbles = fn.bubbles;
      }
      self._bubbles = Boolean(bubbles);
      cancelable = undefined;
      if (fn != null) {
        cancelable = fn.cancelable;
      }
      self._cancelable = Boolean(cancelable);
      composed = undefined;
      if (fn != null) {
        composed = fn.composed;
      }
      self._composed = Boolean(composed);
      nowResult = undefined;
      if (fn != null) {
        nowResult = fn[tmp2(undefined, tmp3[2]).EVENT_INIT_TIMESTAMP_KEY];
      }
      if (undefined === nowResult) {
        _performance = performance;
        nowResult = performance.now();
      }
      self._timeStamp = nowResult;
      return;
    }
  }
}
const items = [
  {
    key: "bubbles",
    get() {
      return this._bubbles;
    }
  },
  {
    key: "cancelable",
    get() {
      return this._cancelable;
    }
  },
  {
    key: "composed",
    get() {
      return this._composed;
    }
  },
  {
    key: "currentTarget",
    get() {
      return Event(134).getCurrentTarget(this);
    }
  },
  {
    key: "defaultPrevented",
    get() {
      return this._defaultPrevented;
    }
  },
  {
    key: "eventPhase",
    get() {
      return Event(134).getEventPhase(this);
    }
  },
  {
    key: "isTrusted",
    get() {
      return Event(134).getIsTrusted(this);
    }
  },
  {
    key: "target",
    get() {
      return Event(134).getTarget(this);
    }
  },
  {
    key: "timeStamp",
    get() {
      return this._timeStamp;
    }
  },
  {
    key: "type",
    get() {
      return this._type;
    }
  },
  {
    key: "composedPath",
    value: function composedPath() {
      const composedPath = Event(134).getComposedPath(this);
      return composedPath.slice();
    }
  },
  {
    key: "preventDefault",
    value: function preventDefault() {
      const self = this;
      if (this._cancelable) {
        if (obj.getInPassiveListenerFlag(self)) {
          const _console = console;
          const _Error = Error;
          const error = new Error("Unable to preventDefault inside passive event listener invocation.");
          console.error(error);
        } else {
          self._defaultPrevented = true;
        }
        obj = Event(134);
      }
    }
  },
  {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const result = Event(134).setStopPropagationFlag(this, true);
      const obj = Event(134);
      const result1 = Event(134).setStopImmediatePropagationFlag(this, true);
    }
  },
  {
    key: "stopPropagation",
    value: function stopPropagation() {
      const result = Event(134).setStopPropagationFlag(this, true);
    }
  }
];
let tmp2 = _createClassDefault(Event, items);
Object.defineProperty(tmp2, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2.prototype, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2.prototype, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2.prototype, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2, "BUBBLING_PHASE", { enumerable: true, value: 3 });
Object.defineProperty(tmp2.prototype, "BUBBLING_PHASE", { enumerable: true, value: 3 });
const module_126 = fn(126);
module_126.setPlatformObject(tmp2);

export default tmp2;