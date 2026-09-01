// _runtime/00293_PressabilityPerformanceEventEmitter.js
import _createClassDefault from "metro/00042__createClass.js";
import PressabilityPerformanceEventEmitter from "metro/00041__classCallCheck.js";

class PressabilityPerformanceEventEmitter {
  constructor() {
    tmp = PressabilityPerformanceEventEmitter(this, PressabilityPerformanceEventEmitter);
    this._listeners = [];
    return;
  }
}
const items = [
  {
    key: "addListener",
    value: function addListener(arg0) {
      const _listeners = this._listeners;
      _listeners.push(arg0);
    },
  },
  {
    key: "removeListener",
    value: function removeListener(arg0) {
      const _listeners = this._listeners;
      const index = _listeners.indexOf(arg0);
      if (index > -1) {
        const _listeners1 = this._listeners;
        _listeners1.splice(index, 1);
      }
    },
  },
  {
    key: "emitEvent",
    value: function emitEvent(arg0) {
      if (0 !== this._listeners.length) {
        closure_0 = arg0();
        const _listeners = tmp._listeners;
        const item = _listeners.forEach((arg0) => arg0(closure_0));
      }
    },
  },
];

export default new _createClassDefault(PressabilityPerformanceEventEmitter, items)();
