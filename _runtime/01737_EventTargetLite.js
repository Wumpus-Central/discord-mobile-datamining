// _runtime/01737_EventTargetLite.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck_mod from "metro/00041__classCallCheck.js";

let _classCallCheck = _classCallCheck_mod;
class EventTargetLite {
  constructor() {
    tmp = closure_0(this, EventTargetLite);
    map = new Map();
    this.eventListeners = map;
    return;
  }
}
_classCallCheck = EventTargetLite;
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    const eventListeners = this.eventListeners;
    value = eventListeners.get(arg0);
    if (undefined === value) {
      const _Set = Set;
      const set = new Set();
      const eventListeners2 = this.eventListeners;
      const result = eventListeners2.set(arg0, set);
      value = set;
    }
    value.add(arg1);
  },
};
const items = [
  entry,
  {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1) {
      const eventListeners = this.eventListeners;
      value = eventListeners.get(arg0);
      if (value != null) {
        value.delete(arg1);
      }
    },
  },
  {
    key: "__dispatch",
    value: function __dispatch(loadend, arg1) {
      const self = this;
      const obj = { type: loadend, target: this, loaded: 0, total: 0, lengthComputable: false };
      const merged = Object.assign(arg1);
      const tmp2 = this["on" + loadend];
      if (typeof tmp2 === "function") {
        self.invokeListener(tmp2, obj);
      }
      const eventListeners = self.eventListeners;
      value = eventListeners.get(loadend);
      if (undefined !== value) {
        const _Array = Array;
        const arr = Array.from(value);
        for (const item10022 of arr) {
          let invokeListenerResult1 = self.invokeListener(item10022, obj);
          continue;
        }
      }
    },
  },
  {
    key: "invokeListener",
    value: function invokeListener(item10022, arg1) {
      try {
        const self = this;
        const call = item10022.call;
        if (typeof call === "unknown") {
          item10022(arg1);
        } else {
          call(self, arg1);
        }
      } catch (tmp4) {
        const _console = console;
        console.error(tmp4);
      }
    },
  },
];

export const EventTargetLite = _createClassDefault(EventTargetLite, items);
