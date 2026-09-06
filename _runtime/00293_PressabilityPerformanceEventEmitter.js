// === Module 293: PressabilityPerformanceEventEmitter ===

// Module 293 (PressabilityPerformanceEventEmitter)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class PressabilityPerformanceEventEmitter {
  constructor() {
    tmp = closure_0(this, PressabilityPerformanceEventEmitter);
    this._listeners = [];
    return;
  }
}
_classCallCheck = PressabilityPerformanceEventEmitter;
const entry = {
  key: "addListener",
  value: function addListener(arg0) {
    const _listeners = this._listeners;
    _listeners.push(arg0);
  }
};
const items = [
  entry,
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const _listeners = this._listeners;
      const index = _listeners.indexOf(arg0);
      if (index > -1) {
        const _listeners1 = this._listeners;
        _listeners1.splice(index, 1);
      }
    }
  },
  {
    key: "emitEvent",
    value: function emitEvent(fn) {
      if (0 !== this._listeners.length) {
        closure_0 = fn();
        const _listeners = tmp._listeners;
        const item = _listeners.forEach((fn) => fn(closure_0));
      }
    }
  }
];

export default new _createClassDefault(PressabilityPerformanceEventEmitter, items)();