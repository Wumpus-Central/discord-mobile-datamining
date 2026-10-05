// _runtime/00933_InteractionManager.js
import _mod932 from "metro/00932__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = 0;
class InteractionManager {
  constructor() {
    const self = this;
    _classCallCheck(this, InteractionManager);
    const __init = InteractionManager.prototype.__init;
    __init.call(self);
    const __init2 = InteractionManager.prototype.__init2;
    __init2.call(self);
  }
}
const entry = {
  key: "__init",
  value: function __init() {
    this._longestInteractionList = [];
  },
};
let items = [
  entry,
  {
    key: "__init2",
    value: function __init2() {
      this._longestInteractionMap = new Map();
      new Map();
    },
  },
  {
    key: "_resetInteractions",
    value: function _resetInteractions() {
      const obj = _mod932;
      const interactionCount = obj.getInteractionCount();
      this._longestInteractionList.length = 0;
      const _longestInteractionMap = this._longestInteractionMap;
      _longestInteractionMap.clear();
    },
  },
  {
    key: "_estimateP98LongestInteraction",
    value: function _estimateP98LongestInteraction() {
      const diff = this._longestInteractionList.length - 1;
      const obj = _mod932;
      return this._longestInteractionList[
        min(Math, diff, floor(Math, (obj.getInteractionCount(obj) - closure_3) / 50))
      ];
    },
  },
  {
    key: "_processEntry",
    value: function _processEntry(interactionId) {
      let items1;
      const self = this;
      const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
      if (_onBeforeProcessingEntry != null) {
        const result = _onBeforeProcessingEntry(interactionId);
      }
      if (interactionId.interactionId) {
        let obj;
        const _longestInteractionList = self._longestInteractionList;
        const _longestInteractionMap = self._longestInteractionMap;
        _longestInteractionList.at(-1);
        const value = _longestInteractionMap.get(interactionId.interactionId);
        if (value) {
          if (interactionId.duration > value._latency) {
            const items = [interactionId];
            value.entries = items;
            value._latency = interactionId.duration;
            obj = value;
          } else {
            obj = value;
            const tmp6 =
              interactionId.duration === value._latency && interactionId.startTime === value.entries[0].startTime;
            if (tmp6) {
              const entries = value.entries;
              entries.push(interactionId);
              obj = value;
            }
          }
        } else {
          obj = { id: interactionId.interactionId, entries: items1, _latency: interactionId.duration };
          items1 = [interactionId];
          const _longestInteractionMap2 = self._longestInteractionMap;
          const result1 = _longestInteractionMap2.set(obj.id, obj);
          const prop = self._longestInteractionList;
          prop.push(obj);
        }
        const _longestInteractionList2 = self._longestInteractionList;
        const sorted = _longestInteractionList2.sort((_latency, _latency2) => _latency2._latency - _latency._latency);
        if (self._longestInteractionList.length > 10) {
          const prop1 = self._longestInteractionList;
          const spliceResult = prop1.splice(10);
          for (const item10060 of spliceResult) {
            let _longestInteractionMap3 = self._longestInteractionMap;
            let deleteResult = _longestInteractionMap3.delete(item10060.id);
            continue;
          }
        }
        const _onAfterProcessingINPCandidate = self._onAfterProcessingINPCandidate;
        if (_onAfterProcessingINPCandidate != null) {
          const result2 = _onAfterProcessingINPCandidate(obj);
        }
      }
    },
  },
];
const InteractionManager_export = _createClass(InteractionManager, items);

export { InteractionManager_export as InteractionManager };
