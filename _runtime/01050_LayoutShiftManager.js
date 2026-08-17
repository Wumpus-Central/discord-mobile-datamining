// _runtime/01050_LayoutShiftManager.js
import LayoutShiftManager from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LayoutShiftManager {
  constructor() {
    self = this;
    tmp = LayoutShiftManager;
    tmp2 = LayoutShiftManager(this, LayoutShiftManager);
    __init = LayoutShiftManager.prototype.__init;
    call = __init.call;
    if (typeof call === "unknown") {
      __initResult = __init();
    } else {
      callResult = call(self);
    }
    __init2 = tmp.prototype.__init2;
    call2 = __init2.call;
    if (typeof call2 === "unknown") {
      __init2Result = __init2();
    } else {
      call2Result = call2(self);
    }
    return;
  }
}
let items = [
  {
    key: "__init",
    value: function __init() {
      this._sessionValue = 0;
    }
  },
  {
    key: "__init2",
    value: function __init2() {
      this._sessionEntries = [];
    }
  },
  {
    key: "_processEntry",
    value: function _processEntry(hadRecentInput) {
      if (!hadRecentInput.hadRecentInput) {
        const self = this;
        const first = this._sessionEntries[0];
        if (this._sessionValue) {
          if (first) {
            if (tmp2) {
              if (hadRecentInput.startTime - tmp2.startTime < 1000) {
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
    }
  }
];

export const LayoutShiftManager = _createClass(LayoutShiftManager, items);