// === Module 6789: GuildChannelSubscriptions ===

// Module 6789 (GuildChannelSubscriptions)
import _modDef12 from "module_12" /* 12 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("lib/guild/GuildChannelSubscriptions.tsx");
class GuildChannelSubscriptions {
  constructor(_onChange) {
    const merged = Object.assign({ _subscriptions: null });
    merged[0] = {};
    merged._onChange = _onChange;
    return merged;
  }
  reset() {
    this._subscriptions = {};
  }
  get(arg0) {
    const obj = {};
    const _getResult = this._get(arg0);
    const item = _getResult.forEach((item, index) => {
      obj2[index] = item;
    });
    return obj;
  }
  _get(arg0) {
    let tmp = this._subscriptions[arg0];
    if (tmp == null) {
      const self = this;
      const self2 = this;
      tmp = new LRUCacheDefault({ max: 5 });
    }
    return tmp;
  }
  clear(arg0) {
    delete this._subscriptions[arg0];
  }
  subscribe(arg0, arg1, arg2) {
    const self = this;
    const _getResult = this._get(arg0);
    const obj = _modDef12;
    let flag = !obj.isEqual(_getResult.get(arg1), arg2);
    obj.isEqual(_getResult.get(arg1), arg2);
    if (flag) {
      const result = _getResult.set(arg1, arg2);
      self._subscriptions[arg0] = _getResult;
      const obj2 = {};
      const _onChange = self._onChange;
      const item = _getResult.forEach((item, index) => {
        obj2[index] = item;
      });
      _onChange(arg0, obj2);
      flag = true;
    }
    return flag;
  }
}
const prototype = GuildChannelSubscriptions.prototype;
const items = [[0, 99]];

export default GuildChannelSubscriptions;
export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = items;