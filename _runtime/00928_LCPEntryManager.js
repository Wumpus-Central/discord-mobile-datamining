// === Module 928: LCPEntryManager ===

// Module 928 (LCPEntryManager)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LCPEntryManager {
  constructor() {
    _classCallCheck(this, LCPEntryManager);
  }
}
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
const LCPEntryManager_export = _createClass(LCPEntryManager, items);

export { LCPEntryManager_export as LCPEntryManager };