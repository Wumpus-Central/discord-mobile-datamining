// === Module 6970: GuildChannelSubscriptions ===

// Module 6970 (GuildChannelSubscriptions)
import _modDef12 from "module_12" /* 12 */;
import privDefault from "priv" /* 1456 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("lib/guild/GuildChannelSubscriptions.tsx");
class GuildChannelSubscriptions {
  constructor(arg0) {
    merged = Object.assign({ _subscriptions: null });
    merged[0] = {};
    merged._onChange = global;
    return merged;
  }
}
const prototype = GuildChannelSubscriptions.prototype;
prototype["reset"] = function reset() {
  this._subscriptions = {};
};
prototype["get"] = function get(arg0) {
  const obj = {};
  const item = this._get(arg0).forEach((item, index) => {
    obj2[index] = item;
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
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const self = this;
  const _getResult = this._get(arg0);
  value = _getResult.get(arg1);
  let tmp2 = !flag;
  if (flag) {
    tmp2 = null == value;
  }
  if (tmp2) {
    const isEqualResult = _modDef12.isEqual(value, arg2);
    let flag2 = !isEqualResult;
    if (!isEqualResult) {
      const result = _getResult.set(arg1, arg2);
      self._subscriptions[arg0] = _getResult;
      const item = _getResult.forEach((item, index) => {
        obj2[index] = item;
      });
      self._onChange(arg0, {});
      flag2 = true;
      const obj2 = {};
    }
    tmp2 = flag2;
  }
  return tmp2;
};
const items = [[0, 99]];

export default GuildChannelSubscriptions;
export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = items;