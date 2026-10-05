// _runtime/00926_LayoutShiftManager.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LayoutShiftManager {
  constructor() {
    const self = this;
    _classCallCheck(this, LayoutShiftManager);
    const __init = LayoutShiftManager.prototype.__init;
    __init.call(self);
    const __init2 = LayoutShiftManager.prototype.__init2;
    __init2.call(self);
  }
}
const entry = {
  key: "__init",
  value: function __init() {
    this._sessionValue = 0;
  },
};
let items = [
  entry,
  {
    key: "__init2",
    value: function __init2() {
      this._sessionEntries = [];
    },
  },
  {
    key: "_processEntry",
    value: function _processEntry(hadRecentInput) {
      if (!hadRecentInput.hadRecentInput) {
        const self = this;
        const first = this._sessionEntries[0];
        if (this._sessionValue) {
          if (first) {
            if (this._sessionEntries[this._sessionEntries.length - 1]) {
              if (hadRecentInput.startTime - this._sessionEntries[this._sessionEntries.length - 1].startTime < 1000) {
                if (hadRecentInput.startTime - first.startTime < 5000) {
                  self._sessionValue = self._sessionValue + hadRecentInput.value;
                  const _sessionEntries = self._sessionEntries;
                  _sessionEntries.push(hadRecentInput);
                }
                const _onAfterProcessingUnexpectedShift = self._onAfterProcessingUnexpectedShift;
                if (_onAfterProcessingUnexpectedShift != null) {
                  const result = _onAfterProcessingUnexpectedShift(hadRecentInput);
                }
              }
            }
          }
        }
        self._sessionValue = hadRecentInput.value;
        const items = [hadRecentInput];
        self._sessionEntries = items;
      }
    },
  },
];
const LayoutShiftManager_export = _createClass(LayoutShiftManager, items);

export { LayoutShiftManager_export as LayoutShiftManager };
