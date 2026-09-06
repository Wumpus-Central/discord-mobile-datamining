// _runtime/00922_InteractionManager.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const InteractionManager = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = 0;
class InteractionManager {
  constructor() {
    self = this;
    tmp = InteractionManager;
    tmp2 = c2(this, InteractionManager);
    __init = InteractionManager.prototype.__init;
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
    },
  },
  {
    key: "_resetInteractions",
    value: function _resetInteractions() {
      const interactionCount = InteractionManager(921).getInteractionCount();
      this._longestInteractionList.length = 0;
      const _longestInteractionMap = this._longestInteractionMap;
      _longestInteractionMap.clear();
    },
  },
  {
    key: "_estimateP98LongestInteraction",
    value: function _estimateP98LongestInteraction() {
      const diff = this._longestInteractionList.length - 1;
      const obj = InteractionManager(921);
      return this._longestInteractionList[
        Math.min(Math, diff, Math.floor(Math, (obj.getInteractionCount(obj) - closure_3) / 50))
      ];
    },
  },
  {
    key: "_processEntry",
    value: function _processEntry(interactionId) {
      const self = this;
      const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
      if (_onBeforeProcessingEntry != null) {
        const result = _onBeforeProcessingEntry(interactionId);
      }
      if (interactionId.interactionId) {
        const _longestInteractionList = self._longestInteractionList;
        const _longestInteractionMap = self._longestInteractionMap;
        value = _longestInteractionMap.get(interactionId.interactionId);
        if (value) {
          if (interactionId.duration > value._latency) {
            const items = [interactionId];
            value.entries = items;
            value._latency = interactionId.duration;
            let obj = value;
          } else {
            obj = value;
            if (tmp6) {
              const entries = value.entries;
              entries.push(interactionId);
              obj = value;
            }
            tmp6 = interactionId.duration === value._latency && interactionId.startTime === value.entries[0].startTime;
          }
        } else {
          obj = { id: interactionId.interactionId, entries: null, _latency: null };
          const items1 = [interactionId];
          obj.entries = items1;
          obj._latency = interactionId.duration;
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
        const atResult = _longestInteractionList.at(-1);
      }
    },
  },
];

export const InteractionManager = _createClass(InteractionManager, items);
