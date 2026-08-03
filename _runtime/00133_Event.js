import _classCallCheck from "_classCallCheck";
import setPlatformObject from "setPlatformObject";

const Event = arg1;
class Event {
  constructor(arg0, arg1) {
    self = this;
    tmp = outer1_2(this, Event);
    this._defaultPrevented = false;
    tmp2 = Event;
    tmp3 = closure_1;
    this[require("SymbolResult1").COMPOSED_PATH_KEY] = [];
    this[require("SymbolResult1").CURRENT_TARGET_KEY] = null;
    this[require("SymbolResult1").EVENT_PHASE_KEY] = Event.NONE;
    this[require("SymbolResult1").IN_PASSIVE_LISTENER_FLAG_KEY] = false;
    this[require("SymbolResult1").IS_TRUSTED_KEY] = false;
    this[require("SymbolResult1").STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
    this[require("SymbolResult1").STOP_PROPAGATION_FLAG_KEY] = false;
    this[require("SymbolResult1").TARGET_KEY] = null;
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
      tmp20 = arg1;
      if (null != arg1) {
        if (typeof arg1 !== "ay") {
          if (typeof arg1 === "HAS_APPLICATION") {
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
      if (arg1 != null) {
        bubbles = arg1.bubbles;
      }
      self._bubbles = Boolean(bubbles);
      cancelable = undefined;
      if (arg1 != null) {
        cancelable = arg1.cancelable;
      }
      self._cancelable = Boolean(cancelable);
      composed = undefined;
      if (arg1 != null) {
        composed = arg1.composed;
      }
      self._composed = Boolean(composed);
      nowResult = undefined;
      if (arg1 != null) {
        nowResult = arg1[require("SymbolResult1").EVENT_INIT_TIMESTAMP_KEY];
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
let tmp2 = require("_createClass")(Event, items);
Object.defineProperty(tmp2, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2.prototype, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2.prototype, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2.prototype, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2, "BUBBLING_PHASE", { enumerable: true, value: 3 });
Object.defineProperty(tmp2.prototype, "BUBBLING_PHASE", { enumerable: true, value: 3 });
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;