// discord_app/lib/guild/GuildThreadSubscriptions.tsx
import { priv } from "../../../_runtime/01386_priv.js";
let result = require("set").fileFinishedImporting("lib/guild/GuildThreadSubscriptions.tsx");
class GuildThreadSubscriptions {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    obj._onChange = global;
    return obj;
  }
}
const prototype = GuildThreadSubscriptions.prototype;
prototype["reset"] = function reset() {
  this._subscriptions = {};
};
prototype["get"] = function get(arg0) {
  return this._get(arg0).keys();
};
prototype["getSubscribedThreadIds"] = function getSubscribedThreadIds() {
  const set = new Set();
  for (const key10010 in this._subscriptions) {
    let tmp3 = key10010;
    let obj2 = this._subscriptions[key10010];
    let keys = obj2.keys();
    let tmp5 = keys;
    let tmp = keys;
    for (const item10012 of keys) {
      let addResult = set.add(item10012);
      continue;
    }
  }
  return set;
};
prototype["_get"] = function _get(arg0) {
  let tmp = this._subscriptions[arg0];
  if (tmp == null) {
    tmp = new priv({ max: 3, updateAgeOnGet: true });
  }
  return tmp;
};
prototype["clear"] = function clear(arg0) {
  const self = this;
  if (arg0 in this._subscriptions) {
    const _subscriptions = self._subscriptions;
    delete tmp[tmp2];
    self._onChange(arg0, []);
  }
};
prototype["subscribe"] = function subscribe(arg0, arg1, arg2) {
  const self = this;
  const _getResult = this._get(arg0);
  if (_getResult.has(arg1)) {
    const _Date3 = Date;
    const result = _getResult.set(arg1, Date.now());
    let flag = false;
  } else {
    if (tmp3) {
      const _Date = Date;
      const result1 = _getResult.set(arg2, Date.now());
    }
    const _Date2 = Date;
    const result2 = _getResult.set(arg1, Date.now());
    self._subscriptions[arg0] = _getResult;
    self._onChange(arg0, _getResult.keys());
    flag = true;
    tmp3 = null != arg2 && _getResult.has(arg2);
  }
  return flag;
};
prototype["unsubscribe"] = function unsubscribe(arg0, arg1) {
  const self = this;
  if (arg0 in this._subscriptions) {
    let flag2 = obj.has(arg1);
    if (flag2) {
      obj.del(arg1);
      self._onChange(arg0, obj.keys());
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
};

export default GuildThreadSubscriptions;