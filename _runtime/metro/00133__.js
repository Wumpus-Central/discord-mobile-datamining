// === Module 133: ? ===

// Module 133
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import module_126 from "module_126" /* 126 */;

const require = globalThis.__r;

class Event {
  constructor(arg0, bubbles) {
    const self = this;
    _classCallCheck(this, Event);
    this._defaultPrevented = false;
    this[require("COMPOSED_PATH_KEY").COMPOSED_PATH_KEY] = [];
    this[require("COMPOSED_PATH_KEY").CURRENT_TARGET_KEY] = null;
    this[require("COMPOSED_PATH_KEY").EVENT_PHASE_KEY] = Event.NONE;
    this[require("COMPOSED_PATH_KEY").IN_PASSIVE_LISTENER_FLAG_KEY] = false;
    this[require("COMPOSED_PATH_KEY").IS_TRUSTED_KEY] = false;
    this[require("COMPOSED_PATH_KEY").STOP_IMMEDIATE_PROPAGATION_FLAG_KEY] = false;
    this[require("COMPOSED_PATH_KEY").STOP_PROPAGATION_FLAG_KEY] = false;
    this[require("COMPOSED_PATH_KEY").TARGET_KEY] = null;
    if (arguments.length < 1) {
      const _TypeError2 = TypeError;
      const self4 = this;
      const self5 = this;
      const typeError = new TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
      throw typeError;
    } else {
      if (null != bubbles) {
        if (typeof bubbles !== "object") {
          if (typeof bubbles !== "function") {
            const _TypeError = TypeError;
            const self2 = this;
            const self3 = this;
            const typeError1 = new TypeError("Failed to construct 'Event': The provided value is not of type 'EventInit'.");
            throw typeError1;
          }
        }
      }
      const _String = String;
      self._type = String(arg0);
      bubbles = undefined;
      const _Boolean = Boolean;
      if (bubbles != null) {
        bubbles = bubbles.bubbles;
      }
      self._bubbles = _Boolean(bubbles);
      let cancelable;
      const _Boolean2 = Boolean;
      if (bubbles != null) {
        cancelable = bubbles.cancelable;
      }
      self._cancelable = _Boolean2(cancelable);
      let composed;
      const _Boolean3 = Boolean;
      if (bubbles != null) {
        composed = bubbles.composed;
      }
      self._composed = _Boolean3(composed);
      let nowResult;
      if (bubbles != null) {
        nowResult = bubbles[require("COMPOSED_PATH_KEY").EVENT_INIT_TIMESTAMP_KEY];
      }
      if (undefined === nowResult) {
        const _performance = performance;
        nowResult = performance.now();
      }
      self._timeStamp = nowResult;
    }
  }
}
let obj = {
  key: "bubbles",
  get() {
    return this._bubbles;
  }
};
const items = [
  obj,
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
      const obj = require("COMPOSED_PATH_KEY");
      return obj.getCurrentTarget(this);
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
      const obj = require("COMPOSED_PATH_KEY");
      return obj.getEventPhase(this);
    }
  },
  {
    key: "isTrusted",
    get() {
      const obj = require("COMPOSED_PATH_KEY");
      return obj.getIsTrusted(this);
    }
  },
  {
    key: "target",
    get() {
      const obj = require("COMPOSED_PATH_KEY");
      return obj.getTarget(this);
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
      const obj = require("COMPOSED_PATH_KEY");
      const composedPath = obj.getComposedPath(this);
      return composedPath.slice();
    }
  },
  {
    key: "preventDefault",
    value: function preventDefault() {
      const self = this;
      if (this._cancelable) {
        const obj = require("COMPOSED_PATH_KEY");
        if (obj.getInPassiveListenerFlag(self)) {
          const _console = console;
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error1 = new Error("Unable to preventDefault inside passive event listener invocation.");
          error(error1);
        } else {
          self._defaultPrevented = true;
        }
      }
    }
  },
  {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      const obj = require("COMPOSED_PATH_KEY");
      const result = obj.setStopPropagationFlag(this, true);
      const obj2 = require("COMPOSED_PATH_KEY");
      const result1 = obj2.setStopImmediatePropagationFlag(this, true);
    }
  },
  {
    key: "stopPropagation",
    value: function stopPropagation() {
      const obj = require("COMPOSED_PATH_KEY");
      const result = obj.setStopPropagationFlag(this, true);
    }
  }
];
const tmp2 = _createClassDefault(Event, items);
Object.defineProperty(tmp2, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2.prototype, "NONE", { enumerable: true, value: 0 });
Object.defineProperty(tmp2, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2.prototype, "CAPTURING_PHASE", { enumerable: true, value: 1 });
Object.defineProperty(tmp2, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2.prototype, "AT_TARGET", { enumerable: true, value: 2 });
Object.defineProperty(tmp2, "BUBBLING_PHASE", { enumerable: true, value: 3 });
Object.defineProperty(tmp2.prototype, "BUBBLING_PHASE", { enumerable: true, value: 3 });
module_126.setPlatformObject(tmp2);

export default tmp2;