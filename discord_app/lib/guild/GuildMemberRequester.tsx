// discord_app/lib/guild/GuildMemberRequester.tsx
import set3 from "../../../_runtime/00002_set.js";
import applyDefault from "../../../_runtime/00012_apply.js";

class GuildMemberRequestState {
  constructor(arg0, arg1) {
    closure_0 = global;
    closure_1 = require;
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[0] = set;
    set1 = new Set();
    obj[1] = set1;
    set2 = new Set();
    obj[2] = set2;
    obj._guildId = global;
    obj._guildMemberExists = (arg0) => _guildMemberExists(closure_0, arg0);
    return obj;
  }
}
const prototype = GuildMemberRequestState.prototype;
prototype["acknowledge"] = function acknowledge(arg0) {
  const _unacknowledgedRequests = this._unacknowledgedRequests;
  _unacknowledgedRequests.delete(arg0);
  const _pendingRequests = this._pendingRequests;
  _pendingRequests.delete(arg0);
};
prototype["flushRequests"] = function flushRequests(arg0) {
  let self = this;
  self = this;
  if (0 !== this._pendingRequests.size) {
    const items = [];
    let _pendingRequests = self._pendingRequests;
    const item = _pendingRequests.forEach((arg0) => {
      if (!self._guildMemberExists(arg0)) {
        const _unacknowledgedRequests = tmp._unacknowledgedRequests;
        _unacknowledgedRequests.add(arg0);
        const _sentRequests = tmp._sentRequests;
        _sentRequests.add(arg0);
        items.push(arg0);
      }
    });
    if (items.length > 0) {
      arg0(self._guildId, items);
    }
    _pendingRequests = self._pendingRequests;
    _pendingRequests.clear();
  }
};
prototype["requestUnacknowledged"] = function requestUnacknowledged() {
  let self = this;
  self = this;
  let tmp = 0 !== this._unacknowledgedRequests.size;
  if (tmp) {
    const prop = self._unacknowledgedRequests;
    const item = prop.forEach((arg0) => {
      if (self._guildMemberExists(arg0)) {
        const _unacknowledgedRequests = tmp._unacknowledgedRequests;
        _unacknowledgedRequests.delete(arg0);
      } else {
        const _pendingRequests = tmp._pendingRequests;
        _pendingRequests.add(arg0);
      }
    });
    tmp = 0 !== self._pendingRequests.size && undefined;
    const tmp3 = 0 !== self._pendingRequests.size && undefined;
  }
  return tmp;
};
prototype["request"] = function request(arg0) {
  const self = this;
  if (!this._guildMemberExists(arg0)) {
    const _sentRequests = self._sentRequests;
    if (!_sentRequests.has(arg0)) {
      const _pendingRequests = self._pendingRequests;
      if (!_pendingRequests.has(arg0)) {
        const _pendingRequests2 = self._pendingRequests;
        _pendingRequests2.add(arg0);
      }
    }
  }
  return false;
};
const result = set3.fileFinishedImporting("lib/guild/GuildMemberRequester.tsx");
class GuildMemberRequester {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._guildStates = {};
    delayedCall = new require("start").DelayedCall(0, () => obj.flushRequests());
    obj._flush = delayedCall;
    obj._guildMemberExists = global;
    obj._onChange = require;
    return obj;
  }
}
const prototype2 = GuildMemberRequester.prototype;
prototype2["reset"] = function reset() {
  this._guildStates = {};
  const _flush = this._flush;
  _flush.cancel();
};
prototype2["request"] = function request(_guildId) {
  if (false !== _getGuildStateResult.request(arg1)) {
    const _flush = this._flush;
    _flush.delay(false);
  }
};
prototype2["acknowledge"] = function acknowledge(_guildId) {
  this._getGuildState(_guildId).acknowledge(arg1);
};
prototype2["flushRequests"] = function flushRequests() {
  const self = this;
  const item = applyDefault.forEach(this._guildStates, (flushRequests) => flushRequests.flushRequests(self._onChange));
};
prototype2["requestUnacknowledged"] = function requestUnacknowledged() {
  if (arr.reduce(this._guildStates, (arg0, requestUnacknowledged) => false !== requestUnacknowledged.requestUnacknowledged() || arg0, false)) {
    const _flush = this._flush;
    _flush.delay();
  }
};
prototype2["_getGuildState"] = function _getGuildState(_guildId) {
  const self = this;
  let tmp = this._guildStates[_guildId];
  if (null == tmp) {
    if (typeof GuildMemberRequestState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = _guildId;
    const _guildMemberExists = self._guildMemberExists;
    const obj = Object.create(GuildMemberRequestState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[0] = set;
    const _Set2 = Set;
    const set1 = new Set();
    obj[1] = set1;
    const _Set3 = Set;
    const set2 = new Set();
    obj[2] = set2;
    obj._guildId = _guildId;
    obj._guildMemberExists = (arg0) => _guildMemberExists(closure_0, arg0);
    self._guildStates[_guildId] = obj;
    tmp = obj;
    const tmp16 = GuildMemberRequestState;
  }
  return tmp;
};
prototype2["getDebugState"] = function getDebugState(arg0) {
  closure_0 = arg0;
  const pendingRequestGuildIds = [];
  const unacknowledgedRequestGuildIds = [];
  const sentRequestGuildIds = [];
  const item = pendingRequestGuildIds(unacknowledgedRequestGuildIds[1]).forEach(this._guildStates, (_pendingRequests) => {
    _pendingRequests = _pendingRequests._pendingRequests;
    if (_pendingRequests.has(closure_0)) {
      pendingRequestGuildIds.push(_pendingRequests._guildId);
    }
    const _unacknowledgedRequests = _pendingRequests._unacknowledgedRequests;
    if (_unacknowledgedRequests.has(closure_0)) {
      unacknowledgedRequestGuildIds.push(_pendingRequests._guildId);
    }
    const _sentRequests = _pendingRequests._sentRequests;
    if (_sentRequests.has(closure_0)) {
      sentRequestGuildIds.push(_pendingRequests._guildId);
    }
  });
  return { pendingRequestGuildIds, unacknowledgedRequestGuildIds, sentRequestGuildIds };
};

export default GuildMemberRequester;