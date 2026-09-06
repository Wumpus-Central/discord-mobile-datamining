// === Module 917: LCPEntryManager ===

// Module 917 (LCPEntryManager)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LCPEntryManager {
  constructor() {
    tmp = closure_0(this, LCPEntryManager);
    return;
  }
}
_classCallCheck = LCPEntryManager;
const entry = {
  key: "_processEntry",
  value: function _processEntry(arg0) {
    const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
    if (_onBeforeProcessingEntry != null) {
      const result = _onBeforeProcessingEntry(arg0);
    }
  }
};
const items = [entry];

export const LCPEntryManager = _createClass(LCPEntryManager, items);