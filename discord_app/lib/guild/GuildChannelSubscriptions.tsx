// === Module 6097: reset ===

// Module 6097 (reset)
import set from "set" /* 2 */;
import privDefault from "priv" /* 1405 */;

let result = set.fileFinishedImporting("lib/guild/GuildChannelSubscriptions.tsx");
class GuildChannelSubscriptions {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    obj._onChange = global;
    return obj;
  }
}
const prototype = GuildChannelSubscriptions.prototype;
prototype["reset"] = function reset() {
  this._subscriptions = {};
};
prototype["get"] = function get(arg0) {
  const obj = {};
  const item = this._get(arg0).forEach((arg0, arg1) => {
    obj[arg1] = arg0;
  });
  return obj;
};
prototype["_get"] = function _get(arg0) {
  let tmp = this._subscriptions[arg0];
  if (tmp == null) {
    tmp = new privDefault({ max: 5 });
  }
  return tmp;
};
prototype["clear"] = function clear(arg0) {
  delete tmp2[tmp];
};
prototype["subscribe"] = function subscribe(arg0, arg1, arg2) {
  const self = this;
  const _getResult = this._get(arg0);
  obj = obj(12);
  const isEqualResult = obj.isEqual(_getResult.get(arg1), arg2);
  let flag = !isEqualResult;
  if (!isEqualResult) {
    const result = _getResult.set(arg1, arg2);
    self._subscriptions[arg0] = _getResult;
    obj = {};
    const item = _getResult.forEach((arg0, arg1) => {
      obj[arg1] = arg0;
    });
    self._onChange(arg0, obj);
    flag = true;
  }
  return flag;
};
const items = [[0, 99]];

export default GuildChannelSubscriptions;
export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = items;