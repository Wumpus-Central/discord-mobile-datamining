// === Module 6800: GuildThreadSubscriptions ===

// Module 6800 (GuildThreadSubscriptions)
import LRUCacheDefault from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

let set;

let result = size.fileFinishedImporting("lib/guild/GuildThreadSubscriptions.tsx");
class GuildThreadSubscriptions {
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
    const _getResult = this._get(arg0);
    return _getResult.keys();
  }
  getSubscribedThreadIds() {
    set = new Set();
    for (const key10010 in this._subscriptions) {
      let obj2 = this._subscriptions[key10010];
      let keys = obj2.keys();
      for (const item10012 of keys) {
        let addResult = set.add(item10012);
        continue;
      }
    }
    return set;
  }
  _get(arg0) {
    let tmp = this._subscriptions[arg0];
    if (tmp == null) {
      const self = this;
      const self2 = this;
      tmp = new LRUCacheDefault({ max: 3, updateAgeOnGet: true });
    }
    return tmp;
  }
  clear(arg0) {
    const self = this;
    if (arg0 in this._subscriptions) {
      delete self._subscriptions[tmp];
      self._onChange(arg0, []);
    }
  }
  subscribe(arg0, arg1, arg2) {
    let flag;
    const self = this;
    const _getResult = this._get(arg0);
    if (_getResult.has(arg1)) {
      const _Date3 = Date;
      const result = _getResult.set(arg1, Date.now());
      flag = false;
    } else {
      const tmp3 = null != arg2 && _getResult.has(arg2);
      if (tmp3) {
        const _Date = Date;
        const result1 = _getResult.set(arg2, Date.now());
      }
      const _Date2 = Date;
      const result2 = _getResult.set(arg1, Date.now());
      self._subscriptions[arg0] = _getResult;
      self._onChange(arg0, _getResult.keys());
      flag = true;
    }
    return flag;
  }
  unsubscribe(arg0, arg1) {
    const self = this;
    if (arg0 in this._subscriptions) {
      let flag2 = obj.has(arg1);
      if (flag2) {
        self._subscriptions[arg0].del(arg1);
        self._onChange(arg0, self._subscriptions[arg0].keys());
        flag2 = true;
      }
      return flag2;
    } else {
      return false;
    }
  }
}
const prototype = GuildThreadSubscriptions.prototype;

export default GuildThreadSubscriptions;