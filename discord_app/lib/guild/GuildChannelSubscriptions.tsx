// discord_app/lib/guild/GuildChannelSubscriptions.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import privDefault from "../../../_runtime/01437_priv.js";
import size from "../../../_runtime/metro/00002__.js";

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
    obj[index] = item;
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
  let obj = _modDef12;
  const isEqualResult = obj.isEqual(_getResult.get(arg1), arg2);
  let flag = !isEqualResult;
  if (!isEqualResult) {
    const result = _getResult.set(arg1, arg2);
    self._subscriptions[arg0] = _getResult;
    obj = {};
    const item = _getResult.forEach((item, index) => {
      obj[index] = item;
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
