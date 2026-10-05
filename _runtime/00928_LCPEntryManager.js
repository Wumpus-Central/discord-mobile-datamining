// _runtime/00928_LCPEntryManager.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

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
  },
};
const items = [entry];
const LCPEntryManager_export = _createClass(LCPEntryManager, items);

export { LCPEntryManager_export as LCPEntryManager };
