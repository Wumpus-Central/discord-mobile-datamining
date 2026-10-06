// === Module 5591: GuildMemberRequester ===

// Module 5591 (GuildMemberRequester)
import _modDef12 from "module_12" /* 12 */;
import Timers from "Timers" /* 2046 */;
import size from "module_2" /* 2 */;

let set, set2;

class GuildMemberRequestState {
  constructor(_guildId, arg1) {
    let closure_0 = _guildId;
    let closure_1 = arg1;
    const merged = Object.assign({ _pendingRequests: null, _sentRequests: null, _unacknowledgedRequests: null });
    merged[0] = new Set();
    new Set();
    merged[1] = new Set();
    new Set();
    merged[2] = new Set();
    merged._guildId = _guildId;
    merged._guildMemberExists = (arg0) => tmp12(closure_0, arg0);
    new Set();
    return merged;
  }
  acknowledge(arg0) {
    const _unacknowledgedRequests = this._unacknowledgedRequests;
    _unacknowledgedRequests.delete(arg0);
    const _pendingRequests = this._pendingRequests;
    _pendingRequests.delete(arg0);
  }
  flushRequests(fn) {
    const self = this;
    if (0 !== this._pendingRequests.size) {
      const items = [];
      const _pendingRequests1 = self._pendingRequests;
      const item = _pendingRequests1.forEach((item) => {
        if (!self._guildMemberExists(item)) {
          const _unacknowledgedRequests = self._unacknowledgedRequests;
          _unacknowledgedRequests.add(item);
          const _sentRequests = self._sentRequests;
          _sentRequests.add(item);
          items.push(item);
        }
      });
      if (items.length > 0) {
        fn(self._guildId, items);
      }
      const _pendingRequests = self._pendingRequests;
      _pendingRequests.clear();
    }
  }
  requestUnacknowledged() {
    const self = this;
    let tmp = 0 !== this._unacknowledgedRequests.size;
    if (tmp) {
      const prop = self._unacknowledgedRequests;
      const item = prop.forEach((item) => {
        if (self._guildMemberExists(item)) {
          const _unacknowledgedRequests = self._unacknowledgedRequests;
          _unacknowledgedRequests.delete(item);
        } else {
          const _pendingRequests = self._pendingRequests;
          _pendingRequests.add(item);
        }
      });
      tmp = 0 !== self._pendingRequests.size && undefined;
    }
    return tmp;
  }
  request(arg0) {
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
  }
}
const prototype = GuildMemberRequestState.prototype;
const result = size.fileFinishedImporting("lib/guild/GuildMemberRequester.tsx");
class GuildMemberRequester {
  constructor(_guildMemberExists, _onChange) {
    const obj = Object.create(new.target.prototype);
    obj._guildStates = {};
    const delayedCall = new Timers.DelayedCall(0, () => obj.flushRequests());
    obj._flush = delayedCall;
    obj._guildMemberExists = _guildMemberExists;
    obj._onChange = _onChange;
    return obj;
  }
  reset() {
    this._guildStates = {};
    const _flush = this._flush;
    _flush.cancel();
  }
  request(_guildId, arg1) {
    const _getGuildStateResult = this._getGuildState(_guildId);
    if (false !== _getGuildStateResult.request(arg1)) {
      const _flush = this._flush;
      _flush.delay(false);
    }
  }
  acknowledge(_guildId, arg1) {
    const _getGuildStateResult = this._getGuildState(_guildId);
    _getGuildStateResult.acknowledge(arg1);
  }
  flushRequests() {
    const self = this;
    const arr = _modDef12;
    const item = arr.forEach(this._guildStates, (flushRequests) => flushRequests.flushRequests(self._onChange));
  }
  requestUnacknowledged() {
    const arr = _modDef12;
    if (arr.reduce(this._guildStates, (arg0, requestUnacknowledged) => {
      const tmp = false !== requestUnacknowledged.requestUnacknowledged() || arg0;
      return tmp;
    }, false)) {
      const _flush = this._flush;
      _flush.delay();
    }
  }
  _getGuildState(_guildId) {
    let tmp = this._guildStates[_guildId];
    if (null == tmp) {
      const self7 = this;
      if (typeof GuildMemberRequestState === "function") {
        let closure_0 = _guildId;
        let closure_1 = tmp12;
        const merged = Object.assign({ _pendingRequests: null, _sentRequests: null, _unacknowledgedRequests: null });
        const _Set = Set;
        const self = this;
        const self2 = this;
        merged[0] = new Set();
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set();
        merged[1] = new Set();
        const _Set3 = Set;
        const self5 = this;
        const self6 = this;
        const set1 = new Set();
        merged[2] = new Set();
        merged._guildId = _guildId;
        merged._guildMemberExists = (arg0) => tmp12(closure_0, arg0);
        tmp10[_guildId] = merged;
        tmp = merged;
        set2 = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp;
  }
  getDebugState(arg0) {
    let closure_0 = arg0;
    const pendingRequestGuildIds = [];
    const unacknowledgedRequestGuildIds = [];
    const sentRequestGuildIds = [];
    const arr4 = _modDef12;
    const item = arr4.forEach(this._guildStates, (_pendingRequests) => {
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
  }
}
const prototype2 = GuildMemberRequester.prototype;

export default GuildMemberRequester;