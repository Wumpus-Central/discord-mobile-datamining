// discord_app/lib/ChannelMessages.tsx
import ME from "ME";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
function mergeMessage(self, id) {
  let messageRecord = self.get(id.id);
  if (null != messageRecord) {
    let num = 0;
    if (null != messageRecord.editedTimestamp) {
      num = +messageRecord.editedTimestamp;
    }
    let num2 = 0;
    if (null != id.edited_timestamp) {
      const _Date = Date;
      const date = new Date(id.edited_timestamp);
      num2 = +date;
    }
    let tmp7 = num2 > num;
    if (num >= num2) {
      const embeds = id.embeds;
      let num3;
      if (embeds != null) {
        num3 = embeds.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp7 = messageRecord.embeds.length < num3;
    }
    if (!tmp7) {
      tmp7 = messageRecord.content !== id.content;
    }
    return messageRecord;
  }
  messageRecord = require(4413) /* createMinimalMessageRecord */.createMessageRecord(id);
}
({ MAX_MESSAGES_PER_CHANNEL: c4, MAX_LOADED_MESSAGES: c5, MAX_MESSAGE_CACHE_SIZE: closure_6, TRUNCATED_MESSAGE_VIEW_SIZE: error, MessageStates: metroImportAll } = ME);
let c9 = new require("apply")("ChannelMessages");
let MessageCache;
class MessageCache {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj._messages = [];
    obj._map = {};
    obj._wasAtEdge = false;
    obj._isCacheBefore = global;
    return obj;
  }
}
const prototype = MessageCache.prototype;
prototype["clone"] = function clone() {
  const self = this;
  if (typeof MessageCache !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(MessageCache.prototype);
  obj._messages = [];
  obj._map = {};
  obj._wasAtEdge = false;
  obj._isCacheBefore = this._isCacheBefore;
  obj = {};
  const merged = Object.assign(self._map);
  obj._map = obj;
  const items = [...self._messages];
  obj._messages = items;
  obj._wasAtEdge = self._wasAtEdge;
  return obj;
};
Object.defineProperty(prototype, "wasAtEdge", {
  get: function wasAtEdge() {
    return this._wasAtEdge;
  },
  set: undefined
});
Object.defineProperty(prototype, "wasAtEdge", {
  get: undefined,
  set: function wasAtEdge(_wasAtEdge) {
    this._wasAtEdge = _wasAtEdge;
  }
});
Object.defineProperty(prototype, "length", {
  get: function length() {
    return this._messages.length;
  },
  set: undefined
});
prototype["clear"] = function clear() {
  this._map = {};
  this._messages = [];
  this._wasAtEdge = false;
};
prototype["remove"] = function remove(arg0) {
  let closure_0 = arg0;
  this._messages = importDefault(12).filter(this._messages, (id) => id.id !== closure_0);
  delete tmp[tmp2];
};
prototype["removeMany"] = function removeMany(arg0) {
  const self = this;
  let closure_0 = arg0;
  self(12).each(arg0, (arg0) => {
    delete tmp2[tmp];
  });
  const _messages = this._messages;
  this._messages = _messages.filter((id) => -1 === closure_0.indexOf(id.id));
};
prototype["replace"] = function replace(arg0, id) {
  let _messages;
  let _messages2;
  const self = this;
  if (null != this._map[arg0]) {
    const _map = self._map;
    delete tmp[tmp2];
    self._map[id.id] = id;
    ({ _messages: _messages2, _messages } = self);
    _messages[_messages2.indexOf(tmp3)] = id;
  }
};
prototype["update"] = function update(arg0, arg1) {
  let _messages;
  let _messages2;
  const self = this;
  if (null != this._map[arg0]) {
    const tmp3 = arg1(tmp);
    self._map[tmp.id] = tmp3;
    ({ _messages: _messages2, _messages } = self);
    _messages[_messages2.indexOf(tmp)] = tmp3;
  }
};
prototype["has"] = function has(arg0) {
  return null != this._map[arg0];
};
prototype["get"] = function get(arg0) {
  return this._map[arg0];
};
prototype["forEach"] = function forEach(arg0, arg1) {
  const _messages = this._messages;
  const item = _messages.forEach(arg0, arg1);
};
prototype["cache"] = function cache(_array, arg1) {
  let self = this;
  self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (0 === self.length) {
    self._wasAtEdge = flag;
  }
  if (self._messages.length + _array.length > closure_6) {
    self._wasAtEdge = false;
    if (_array.length > tmp) {
      const slice = _array.slice;
      if (self._isCacheBefore) {
        self._messages = slice(_array.length - tmp);
      } else {
        self._messages = slice(0, tmp);
      }
      self._map = {};
      const _messages = self._messages;
      const item = _messages.forEach((id) => {
        self._map[id.id] = id;
        return id;
      });
    } else {
      const diff = tmp - _array.length;
      const _messages1 = self._messages;
      const slice2 = _messages1.slice;
      if (self._isCacheBefore) {
        const _Math = Math;
        self._messages = slice2(Math.max(self._messages.length - diff, 0));
      } else {
        self._messages = slice2(0, diff);
      }
    }
  }
  const items = [];
  if (self._isCacheBefore) {
    HermesBuiltin.arraySpread(_array, HermesBuiltin.arraySpread(self._messages, 0));
    let tmp7 = items;
  } else {
    HermesBuiltin.arraySpread(self._messages, HermesBuiltin.arraySpread(_array, 0));
    tmp7 = items;
  }
  self._messages = tmp7;
  self._map = {};
  const _messages2 = self._messages;
  const item1 = _messages2.forEach((id) => {
    self._map[id.id] = id;
    return id;
  });
};
prototype["extractAll"] = function extractAll() {
  this._messages = [];
  this._map = {};
  return this._messages;
};
prototype["extract"] = function extract(arg0) {
  let self = this;
  self = this;
  const _Math = Math;
  if (this._isCacheBefore) {
    const maxResult = _Math.max(self.length - arg0, 0);
    const _messages = self._messages;
    let substr = _messages.slice(maxResult, self.length);
    const _messages1 = self._messages;
    _messages1.splice(maxResult);
  } else {
    const _messages2 = self._messages;
    substr = _messages2.slice(0, _Math.min(arg0, self.length));
    const _messages3 = self._messages;
    _messages3.splice(0, arg0);
  }
  const item = substr.forEach((arg0) => {
    delete tmp3[tmp2];
    return tmp;
  });
  return substr;
};
let ChannelMessages;
class ChannelMessages {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[2] = require("GuildThemeSourcePreference").JumpType.ANIMATED;
    obj[21] = [];
    tmp2 = MessageCache;
    if (typeof MessageCache !== "fileFinishedImporting") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj1 = Object.create(tmp2.prototype);
    obj1._messages = [];
    obj1._map = {};
    obj1._wasAtEdge = false;
    obj1._isCacheBefore = true;
    obj[22] = obj1;
    if (typeof tmp2 !== "fileFinishedImporting") {
      str2 = "Trying to call a non-function";
      throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    obj2 = Object.create(tmp2.prototype);
    obj2._messages = [];
    obj2._map = {};
    obj2._wasAtEdge = false;
    obj2._isCacheBefore = false;
    obj[23] = obj2;
    obj[24] = {};
    obj.channelId = global;
    return obj;
  }
}
const prototype2 = ChannelMessages.prototype;
ChannelMessages["forEach"] = function forEach(arg0) {
  const item = importDefault(12).forEach(ChannelMessages._channelMessages, arg0);
};
ChannelMessages["get"] = function get(arg0) {
  return ChannelMessages._channelMessages[arg0];
};
ChannelMessages["hasPresent"] = function hasPresent(arg0) {
  const value = ChannelMessages.get(arg0);
  return null != value && value.hasPresent();
};
ChannelMessages["getOrCreate"] = function getOrCreate(channelId) {
  let tmp2 = ChannelMessages._channelMessages[channelId];
  if (null == tmp2) {
    if (typeof tmp !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(tmp.prototype);
    obj[2] = require(4125) /* GuildThemeSourcePreference */.JumpType.ANIMATED;
    obj[21] = [];
    if (typeof MessageCache !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp6.prototype);
    obj._messages = [];
    obj._map = {};
    obj._wasAtEdge = false;
    obj._isCacheBefore = true;
    obj[22] = obj;
    if (typeof MessageCache !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const obj1 = Object.create(MessageCache.prototype);
    obj1._messages = [];
    obj1._map = {};
    obj1._wasAtEdge = false;
    obj1._isCacheBefore = false;
    obj[23] = obj1;
    obj[24] = {};
    obj.channelId = channelId;
    tmp._channelMessages[channelId] = obj;
    tmp2 = obj;
  }
  return tmp2;
};
ChannelMessages["clear"] = function clear(arg0) {
  delete tmp2[tmp];
};
ChannelMessages["clearCache"] = function clearCache(arg0) {
  if (null != ChannelMessages._channelMessages[arg0]) {
    const self = this;
    const _before = tmp._before;
    _before.clear();
    const _after = tmp._after;
    _after.clear();
    this.commit(tmp);
  }
};
ChannelMessages["commit"] = function commit(channelId) {
  ChannelMessages._channelMessages[channelId.channelId] = channelId;
};
prototype2["mutate"] = function mutate(ready, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (typeof ChannelMessages !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(ChannelMessages.prototype);
  obj[2] = require(4125) /* GuildThemeSourcePreference */.JumpType.ANIMATED;
  obj[21] = [];
  if (typeof MessageCache !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(tmp3.prototype);
  obj._messages = [];
  obj._map = {};
  obj._wasAtEdge = false;
  obj._isCacheBefore = true;
  obj[22] = obj;
  if (typeof MessageCache !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj1 = Object.create(MessageCache.prototype);
  obj1._messages = [];
  obj1._map = {};
  obj1._wasAtEdge = false;
  obj1._isCacheBefore = false;
  obj[23] = obj1;
  obj[24] = {};
  obj.channelId = this.channelId;
  const _array = self._array;
  if (flag) {
    const items = [];
    HermesBuiltin.arraySpread(_array, 0);
    let tmp6 = items;
  } else {
    tmp6 = _array;
  }
  obj._array = tmp6;
  const _map = self._map;
  if (flag) {
    obj = {};
    const merged = Object.assign(_map);
    let tmp10 = obj;
  } else {
    tmp10 = _map;
  }
  obj._map = tmp10;
  const _after = self._after;
  if (flag) {
    let cloneResult = _after.clone();
  } else {
    cloneResult = _after;
  }
  obj._after = cloneResult;
  const _before = self._before;
  if (flag) {
    let cloneResult1 = _before.clone();
  } else {
    cloneResult1 = _before;
  }
  obj._before = cloneResult1;
  if (ready instanceof Function) {
    ({ ready: tmp2.ready, jumpType: tmp2.jumpType, jumpTargetId: tmp2.jumpTargetId, jumpTargetOffset: tmp2.jumpTargetOffset, jumpSequenceId: tmp2.jumpSequenceId, jumped: tmp2.jumped, jumpedToPresent: tmp2.jumpedToPresent, jumpFlash: tmp2.jumpFlash, jumpReturnTargetId: tmp2.jumpReturnTargetId, onJumpComplete: tmp2.onJumpComplete, focusTargetId: tmp2.focusTargetId, focusSequenceId: tmp2.focusSequenceId, hasMoreBefore: tmp2.hasMoreBefore, hasMoreAfter: tmp2.hasMoreAfter, loadingMore: tmp2.loadingMore, revealedMessageId: tmp2.revealedMessageId, cached: tmp2.cached, hasFetched: tmp2.hasFetched, error: tmp2.error, initialScrollSequenceId: tmp2.initialScrollSequenceId, suppressRowAnimationSequenceId: tmp2.suppressRowAnimationSequenceId } = self);
    ready(obj);
  } else if (typeof ready !== "window") {
    if (undefined !== ready.ready) {
      ready = true === ready.ready;
    } else {
      ready = self.ready;
    }
    obj.ready = ready;
    obj.jumpType = undefined !== ready.jumpType ? ready.jumpType : self.jumpType;
    obj.jumpTargetId = undefined !== ready.jumpTargetId ? ready.jumpTargetId : self.jumpTargetId;
    obj.jumpTargetOffset = undefined !== ready.jumpTargetOffset ? ready.jumpTargetOffset : self.jumpTargetOffset;
    obj.jumpSequenceId = undefined !== ready.jumpSequenceId ? ready.jumpSequenceId : self.jumpSequenceId;
    if (undefined !== ready.jumped) {
      let jumped = true === ready.jumped;
    } else {
      jumped = self.jumped;
    }
    obj.jumped = jumped;
    if (undefined !== ready.jumpedToPresent) {
      let jumpedToPresent = true === ready.jumpedToPresent;
    } else {
      jumpedToPresent = self.jumpedToPresent;
    }
    obj.jumpedToPresent = jumpedToPresent;
    if (undefined !== ready.jumpFlash) {
      let jumpFlash = true === ready.jumpFlash;
    } else {
      jumpFlash = self.jumpFlash;
    }
    obj.jumpFlash = jumpFlash;
    obj.jumpReturnTargetId = undefined !== ready.jumpReturnTargetId ? ready.jumpReturnTargetId : self.jumpReturnTargetId;
    obj.focusTargetId = undefined !== ready.focusTargetId ? ready.focusTargetId : self.focusTargetId;
    obj.focusSequenceId = undefined !== ready.focusSequenceId ? ready.focusSequenceId : self.focusSequenceId;
    if (undefined !== ready.hasMoreBefore) {
      let hasMoreBefore = true === ready.hasMoreBefore;
    } else {
      hasMoreBefore = self.hasMoreBefore;
    }
    obj.hasMoreBefore = hasMoreBefore;
    if (undefined !== ready.hasMoreAfter) {
      let hasMoreAfter = true === ready.hasMoreAfter;
    } else {
      hasMoreAfter = self.hasMoreAfter;
    }
    obj.hasMoreAfter = hasMoreAfter;
    obj.loadingMore = undefined !== ready.loadingMore ? ready.loadingMore : self.loadingMore;
    obj.revealedMessageId = undefined !== ready.revealedMessageId ? ready.revealedMessageId : self.revealedMessageId;
    obj.cached = undefined !== ready.cached ? ready.cached : self.cached;
    obj.hasFetched = undefined !== ready.hasFetched ? ready.hasFetched : self.hasFetched;
    obj.error = undefined !== ready.error ? ready.error : self.error;
    obj.onJumpComplete = undefined !== ready.onJumpComplete ? ready.onJumpComplete : self.onJumpComplete;
    obj.initialScrollSequenceId = undefined !== ready.initialScrollSequenceId ? ready.initialScrollSequenceId : self.initialScrollSequenceId;
    obj.suppressRowAnimationSequenceId = undefined !== ready.suppressRowAnimationSequenceId ? ready.suppressRowAnimationSequenceId : self.suppressRowAnimationSequenceId;
  }
  return obj;
};
Object.defineProperty(prototype2, "length", {
  get: function length() {
    return this._array.length;
  },
  set: undefined
});
prototype2["toArray"] = function toArray() {
  const items = [...this._array];
  return items;
};
prototype2["forEach"] = function forEach(call) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const _array = this._array;
  if (flag) {
    let diff = _array.length - 1;
    if (0 <= diff) {
      call = call.call;
      if (false !== (typeof call === "unknown" ? call(_array[diff], diff) : call(arg1, _array[diff], diff))) {
        const diff1 = diff - 1;
        while (0 <= diff1) {
          let call2 = call.call;
          let tmp5 = _array[diff1];
          diff = diff1;
          if (false === (typeof call2 === "unknown" ? call(tmp5, diff1) : call2(arg1, tmp5, diff1))) {
            break;
          }
        }
      }
    }
  } else {
    const item = _array.forEach(call, arg1);
  }
};
prototype2["reduce"] = function reduce(arg0, arg1) {
  const _array = this._array;
  return _array.reduce(arg0, arg1);
};
prototype2["some"] = function some(arg0, arg1) {
  const _array = this._array;
  return _array.some(arg0, arg1);
};
prototype2["filter"] = function filter(arg0, arg1) {
  const _array = this._array;
  return _array.filter(arg0, arg1);
};
prototype2["forAll"] = function forAll(arg0) {
  const _before = this._before;
  const item = _before.forEach(arg0, arg1);
  const _array = this._array;
  const item1 = _array.forEach(arg0, arg1);
  const _after = this._after;
  const item2 = _after.forEach(arg0, arg1);
};
prototype2["findOldest"] = function findOldest(isTermsFormField) {
  const self = this;
  let found = importDefault(12).find(this._before._messages, isTermsFormField);
  if (found == null) {
    let tmpResult = tmp(12);
    found = tmpResult.find(self._array, isTermsFormField);
  }
  if (found == null) {
    tmpResult = tmp(12);
    found = tmpResult.find(self._after._messages, isTermsFormField);
  }
  return found;
};
prototype2["findNewest"] = function findNewest(arg0) {
  const self = this;
  let findLastResult = importDefault(12).findLast(this._after._messages, arg0);
  if (findLastResult == null) {
    let tmpResult = tmp(12);
    findLastResult = tmpResult.findLast(self._array, arg0);
  }
  if (findLastResult == null) {
    tmpResult = tmp(12);
    findLastResult = tmpResult.findLast(self._before._messages, arg0);
  }
  return findLastResult;
};
prototype2["map"] = function map(arg0, arg1) {
  const _array = this._array;
  return _array.map(arg0, arg1);
};
prototype2["first"] = function first(closure_4, closure_2, _exports2, firstResult, arg4, _exports2, firstResult2) {
  return this._array[0];
};
prototype2["last"] = function last() {
  return this._array[this._array.length - 1];
};
prototype2["get"] = function get(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  let tmp2 = tmp;
  if (null == this._map[arg0]) {
    tmp2 = tmp;
    if (flag) {
      const _before = self._before;
      let value = _before.get(arg0);
      if (value == null) {
        const _after = self._after;
        value = _after.get(arg0);
      }
      tmp2 = value;
    }
  }
  return tmp2;
};
prototype2["getByIndex"] = function getByIndex(arg0) {
  return this._array[arg0];
};
prototype2["getAfter"] = function getAfter(id) {
  const self = this;
  const value = this.get(id);
  if (null == value) {
    return null;
  } else {
    const _array = self._array;
    const index = _array.indexOf(value);
    let tmp3 = null;
    if (-1 !== index) {
      tmp3 = null;
      if (index !== self.length - 1) {
        tmp3 = self._array[index + 1];
      }
    }
    return tmp3;
  }
};
prototype2["getManyAfter"] = function getManyAfter(arg0, arg1, arg2) {
  const self = this;
  const value = this.get(arg0);
  if (null == value) {
    return null;
  } else {
    const _array = self._array;
    const index = _array.indexOf(value);
    if (-1 === index) {
      return null;
    } else {
      const items = [];
      const sum = index + 1;
      if (sum < self.length) {
        let tmp4 = sum;
        if (-1 === arg1) {
          while (true) {
            let tmp5 = null == arg2;
            let tmp6 = tmp4;
            if (!tmp5) {
              tmp5 = arg2(self._array[tmp4]);
            }
            if (tmp5) {
              let arr = items.push(self._array[tmp4]);
            }
            let sum1 = tmp4 + 1;
            if (sum1 >= self.length) {
              break;
            } else {
              tmp4 = sum1;
              if (tmp3) {
                continue;
              } else {
                tmp4 = sum1;
                if (items.length >= arg1) {
                  break;
                }
              }
              continue;
            }
          }
        } else {
          tmp4 = sum;
        }
      }
      return items;
    }
  }
};
prototype2["getManyBefore"] = function getManyBefore(arg0, arg1, arg2) {
  const self = this;
  const value = this.get(arg0);
  if (null == value) {
    return null;
  } else {
    const _array = self._array;
    const index = _array.indexOf(value);
    if (-1 === index) {
      return null;
    } else {
      const items = [];
      const diff = index - 1;
      if (0 <= diff) {
        let tmp4 = diff;
        if (-1 === arg1) {
          while (true) {
            let tmp5 = null == arg2;
            let tmp6 = tmp4;
            if (!tmp5) {
              tmp5 = arg2(self._array[tmp4]);
            }
            if (tmp5) {
              let arr = items.unshift(self._array[tmp4]);
            }
            let diff1 = tmp4 - 1;
            if (0 > diff1) {
              break;
            } else {
              tmp4 = diff1;
              if (tmp3) {
                continue;
              } else {
                tmp4 = diff1;
                if (items.length >= arg1) {
                  break;
                }
              }
              continue;
            }
          }
        } else {
          tmp4 = diff;
        }
      }
      return items;
    }
  }
};
prototype2["hasAnyAfter"] = function hasAnyAfter(id, arg1, arg2) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  const self = this;
  const value = this.get(id);
  if (null == value) {
    return false;
  } else {
    const _array = self._array;
    const index = _array.indexOf(value);
    if (-1 === index) {
      return false;
    } else {
      const sum = index + 1;
      if (sum < self.length) {
        let tmp4 = sum;
        if (-1 === num) {
          while (!arg1(self._array[tmp4])) {
            let sum1 = tmp4 + 1;
            if (sum1 < self.length) {
              tmp4 = sum1;
              if (tmp3) {
                continue;
              } else {
                tmp4 = sum1;
              }
              continue;
            }
          }
          return true;
        } else {
          tmp4 = sum;
        }
      }
      return false;
    }
  }
};
prototype2["has"] = function has(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const self = this;
  let tmp = null != this._map[arg0];
  if (!tmp) {
    if (flag) {
      const _before = self._before;
      let hasItem = _before.has(arg0);
      if (!hasItem) {
        const _after = self._after;
        hasItem = _after.has(arg0);
      }
      flag = hasItem;
    }
    tmp = flag;
  }
  return tmp;
};
prototype2["indexOf"] = function indexOf(arg0) {
  let closure_0 = arg0;
  let c1 = -1;
  const _array = this._array;
  const found = _array.find((id) => {
    let flag = id.id === closure_0;
    if (flag) {
      let closure_1 = arg1;
      flag = true;
    }
    return flag;
  });
  return c1;
};
prototype2["hasPresent"] = function hasPresent() {
  const self = this;
  return this._after.length > 0 && self._after.wasAtEdge || !self.hasMoreAfter;
};
prototype2["hasBeforeCached"] = function hasBeforeCached(before) {
  const self = this;
  if (this.length > 0) {
    if (self._before.length > 0) {
      const firstResult = self.first();
      let tmp3 = null != firstResult;
      if (tmp3) {
        tmp3 = firstResult.id === before;
      }
      return tmp3;
    }
  }
  return false;
};
prototype2["hasAfterCached"] = function hasAfterCached(after) {
  const self = this;
  if (this.length > 0) {
    if (self._after.length > 0) {
      const lastResult = self.last();
      let tmp3 = null != lastResult;
      if (tmp3) {
        tmp3 = lastResult.id === after;
      }
      return tmp3;
    }
  }
  return false;
};
prototype2["update"] = function update(arg0, arg1) {
  const self = this;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const importAll = tmp;
  if (null == this._map[arg0]) {
    let _before = self._before;
    if (_before.has(arg0)) {
      let mutation = self.mutate((_before) => {
        _before = _before._before;
        return _before.update(closure_0, closure_1);
      }, true);
    } else {
      let _after = self._after;
      mutation = self;
      if (_after.has(arg0)) {
        mutation = self.mutate((_after) => {
          _after = _after._after;
          return _after.update(closure_0, closure_1);
        }, true);
      }
    }
    return mutation;
  } else {
    let closure_3 = arg1(tmp);
    return self.mutate((_map) => {
      let _array;
      let _array2;
      _map._map[tmp.id] = closure_3;
      ({ _array: _array2, _array } = _map);
      _array[_array2.indexOf(tmp)] = closure_3;
    }, true);
  }
};
prototype2["replace"] = function replace(arg0, arg1) {
  const self = this;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const importAll = tmp;
  if (null == this._map[arg0]) {
    const _before = self._before;
    if (_before.has(arg0)) {
      let mutation = self.mutate((_before) => _before._before.replace(closure_0, closure_1), true);
    } else {
      const _after = self._after;
      mutation = self;
      if (_after.has(arg0)) {
        mutation = self.mutate((_after) => _after._after.replace(closure_0, closure_1), true);
      }
    }
  } else {
    return self.mutate((_map) => {
      delete tmp2[tmp];
      _map._map[id.id] = id;
      const _array = _map._array;
      _map._array[_array.indexOf(closure_2)] = id;
    }, true);
  }
};
prototype2["remove"] = function remove(arg0) {
  let closure_0 = arg0;
  return this.mutate((_array) => {
    delete tmp2[tmp];
    _array = _array._array;
    _array._array = _array.filter((id) => id.id !== closure_0);
    const _before = _array._before;
    _before.remove(closure_0);
    const _after = _array._after;
    _after.remove(closure_0);
  }, true);
};
prototype2["removeMany"] = function removeMany(arr) {
  let self = this;
  self = this;
  let closure_0 = arr;
  let self2 = this;
  if (arr.some((arg0) => self.has(arg0))) {
    self2 = self.mutate((_array) => {
      let closure_0 = _array;
      self(outer1_3[3]).each(closure_0, (arg0) => {
        delete tmp2[tmp];
      });
      _array = _array._array;
      _array._array = _array.filter((id) => -1 === _array.indexOf(id.id));
      const _before = _array._before;
      _before.removeMany(closure_0);
      const _after = _array._after;
      _after.removeMany(closure_0);
    }, true);
  }
  return self2;
};
prototype2["merge"] = function merge(arg0) {
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  return this.mutate((_merge) => {
    _merge._merge(closure_0, flag, flag2);
  }, true);
};
prototype2["_merge"] = function _merge(arr, flag, flag2) {
  let self = this;
  self = this;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const found = arr.filter((id) => {
    let _array;
    let _array2;
    self._map[id.id] = id;
    let flag = null == tmp2;
    if (!flag) {
      ({ _array: _array2, _array } = self);
      _array[_array2.indexOf(tmp2)] = id;
      flag = false;
    }
    return flag;
  });
  if (!flag2) {
    const items = [];
    if (flag) {
      HermesBuiltin.arraySpread(self._array, HermesBuiltin.arraySpread(found, 0));
      let tmp7 = items;
    } else {
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(self._array, 0));
      tmp7 = items;
    }
    self._array = tmp7;
  } else {
    flag ? self._before : self._after.clear();
    const obj = flag ? self._before : self._after;
  }
};
prototype2["mergeDelta"] = function mergeDelta(new_messages, modified_messages, deleted_message_ids) {
  let items = new_messages;
  if (new_messages === undefined) {
    items = [];
  }
  let items1 = modified_messages;
  if (modified_messages === undefined) {
    items1 = [];
  }
  let items2 = deleted_message_ids;
  if (deleted_message_ids === undefined) {
    items2 = [];
  }
  return this.mutate((_before) => {
    _before = _before._before;
    _before.clear();
    const _after = _before._after;
    _after.clear();
    const set = new Set(items2);
    const item = set.forEach((id) => set.add(id.id));
    const item1 = items1.forEach((id) => set.add(id.id));
    const _array = _before._array;
    const found = _array.filter((id) => !set.has(id.id));
    const mapped = set.map((message) => set(4413).createMessageRecord(message));
    const combined = found.concat(mapped, items1.map((message) => set(4413).createMessageRecord(message)));
    _before._array = combined.sort((id, id2) => callback(11).compare(id.id, id2.id));
  });
};
prototype2["_clearMessages"] = function _clearMessages() {
  this._array = [];
  this._map = {};
};
prototype2["reset"] = function reset(arg0) {
  let closure_0 = arg0;
  return this.mutate((_before) => {
    let closure_0 = _before;
    _before._array = closure_0;
    _before._map = {};
    const item = closure_0.forEach((id) => {
      _map._map[id.id] = id;
      return id;
    });
    _before = _before._before;
    _before.clear();
    const _after = _before._after;
    _after.clear();
  });
};
prototype2["truncateTop"] = function truncateTop(closure_4, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const self = this;
  let c0;
  const diff = this._array.length - closure_4;
  c0 = diff;
  let self2 = this;
  if (diff > 0) {
    self2 = self.mutate((_map) => {
      let _array;
      let _before;
      let tmp3 = c0;
      let num = 0;
      if (0 < c0) {
        do {
          _map = _map._map;
          let id = _map._array[num].id;
          delete tmp2[tmp];
          num = num + 1;
          tmp3 = c0;
        } while (num < c0);
      }
      ({ _before, _array } = _map);
      _before.cache(_array.slice(0, tmp3), !_map.hasMoreBefore);
      _array = _map._array;
      _map._array = _array.slice(tmp3);
      _map.hasMoreBefore = true;
    }, flag);
  }
  return self2;
};
prototype2["truncateBottom"] = function truncateBottom(closure_4, arg1) {
  return this;
};
prototype2["jumpToPresent"] = function jumpToPresent(arg0) {
  let closure_0 = arg0;
  return this.mutate((_after) => {
    _after = _after._after;
    const extractAllResult = _after.extractAll();
    _after.hasMoreAfter = false;
    const bound = Math.max(extractAllResult.length - closure_0, 0);
    const substr = extractAllResult.slice(bound);
    extractAllResult.splice(bound);
    const _before = _after._before;
    _before.cache(_after._array);
    const _before2 = _after._before;
    _before2.cache(extractAllResult);
    _after._clearMessages();
    _after._merge(substr);
    _after.hasMoreBefore = _after._before.length > 0;
    _after.jumped = true;
    _after.jumpTargetId = null;
    _after.jumpTargetOffset = 0;
    _after.jumpedToPresent = true;
    _after.jumpFlash = false;
    _after.jumpReturnTargetId = null;
    _after.jumpSequenceId = _after.jumpSequenceId + 1;
    _after.onJumpComplete = null;
    _after.ready = true;
    _after.loadingMore = false;
  }, true);
};
prototype2["jumpToMessage"] = function jumpToMessage(arg0) {
  let closure_4;
  let closure_5;
  let flash;
  let importAll;
  let require;
  let returnTargetId;
  ({ messageId: require, flash } = arg0);
  if (flash === undefined) {
    flash = true;
  }
  ({ offset: importAll, returnTargetId } = arg0);
  if (returnTargetId === undefined) {
    returnTargetId = null;
  }
  ({ jumpType: closure_4, onJumpComplete: closure_5 } = arg0);
  return this.mutate((jumpSequenceId) => {
    jumpSequenceId.jumped = true;
    jumpSequenceId.jumpedToPresent = false;
    let ANIMATED = closure_4;
    if (closure_4 == null) {
      ANIMATED = outer1_0(returnTargetId[4]).JumpType.ANIMATED;
    }
    jumpSequenceId.jumpType = ANIMATED;
    jumpSequenceId.jumpTargetId = closure_0;
    let num = 0;
    if (null != closure_0) {
      num = 0;
      if (null != closure_2) {
        num = closure_2;
      }
    }
    jumpSequenceId.jumpTargetOffset = num;
    jumpSequenceId.jumpSequenceId = jumpSequenceId.jumpSequenceId + 1;
    let tmp3 = closure_5;
    if (closure_5 == null) {
      tmp3 = null;
    }
    jumpSequenceId.onJumpComplete = tmp3;
    jumpSequenceId.jumpFlash = flash;
    jumpSequenceId.jumpReturnTargetId = returnTargetId;
    jumpSequenceId.ready = true;
    jumpSequenceId.loadingMore = false;
  }, false);
};
prototype2["focusOnMessage"] = function focusOnMessage(messageId) {
  let closure_0 = messageId;
  return this.mutate((focusSequenceId) => {
    focusSequenceId.focusTargetId = closure_0;
    focusSequenceId.focusSequenceId = focusSequenceId.focusSequenceId + 1;
    focusSequenceId.ready = true;
    focusSequenceId.loadingMore = false;
  }, false);
};
prototype2["loadFromCache"] = function loadFromCache(arg0, limit) {
  let closure_0 = arg0;
  let closure_1 = limit;
  return this.mutate((_before) => {
    const arr = closure_0 ? _before._before : _before._after;
    _before._merge(arr.extract(closure_1), closure_0);
    if (closure_0) {
      _before.hasMoreBefore = tmp3;
    } else {
      _before.hasMoreAfter = tmp3;
    }
    _before.ready = true;
    _before.loadingMore = false;
  }, true);
};
prototype2["truncate"] = function truncate(arg0, arg1) {
  const self = this;
  if (this.length <= closure_5) {
    return self;
  } else if (arg0) {
    let truncateBottomResult = self.truncateBottom(closure_7);
  } else {
    truncateBottomResult = self;
    if (arg1) {
      truncateBottomResult = self.truncateTop(closure_7);
    }
  }
};
prototype2["receiveMessage"] = function receiveMessage(nonce) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const self = this;
  let messageRecord1;
  let value = null;
  if (null != nonce.nonce) {
    value = self.get(nonce.nonce, true);
  }
  if (null != value) {
    const author = nonce.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    const author2 = value.author;
    let id1;
    if (author2 != null) {
      id1 = author2.id;
    }
    if (id === id1) {
      if (null != nonce.nonce) {
        if (value.id === nonce.nonce) {
          const messageRecord = messageRecord1(4413).createMessageRecord(nonce);
          if (null != value.interactionData) {
            messageRecord.interactionData = value.interactionData;
          }
          return self.replace(nonce.nonce, messageRecord);
        }
      }
    }
  }
  if (self.hasMoreAfter) {
    if (self._after.wasAtEdge) {
      self._after.wasAtEdge = false;
    }
    return self;
  } else {
    messageRecord1 = messageRecord1(4413).createMessageRecord(nonce);
    const lastResult = self.last();
    if (null != lastResult) {
      if (obj2.compare(nonce.id, lastResult.id) < 0) {
        if (tmp8Result.getConfig({ location: "receiveMessage" }).enabled) {
          let mutation = self.mutate((_map) => {
            let _array;
            let _array2;
            _map._map[messageRecord1.id] = messageRecord1;
            if (null != _map._map[messageRecord1.id]) {
              ({ _array: _array2, _array } = _map);
              _array[_array2.indexOf(tmp2)] = tmp;
            } else {
              outer1_2(outer1_3[7]).insert(_map._array, tmp, (id, id2) => callback(table[5]).compare(id.id, id2.id));
              const obj = outer1_2(outer1_3[7]);
            }
          }, true);
        }
        if (flag) {
          let truncateTopResult = mutation.truncateTop(closure_4, false);
        } else {
          truncateTopResult = mutation;
          if (self.length > closure_5) {
            truncateTopResult = mutation.truncateBottom(closure_4, false);
          }
        }
        return truncateTopResult;
      }
      obj2 = importDefault(11);
      const tmp8 = importDefault;
    }
    const items = [messageRecord1];
    mutation = self.merge(items);
    let obj = messageRecord1(4413);
  }
};
prototype2["receivePushNotification"] = function receivePushNotification(closure_1, closure_2) {
  const self = this;
  let value = null;
  if (null != closure_1.nonce) {
    value = self.get(closure_1.nonce, true);
  }
  if (null != value) {
    return self;
  } else if (null != self.get(closure_1.id, true)) {
    return self;
  } else {
    let obj = require(4867) /* isIOSPushNotificationRawPayloadFixExperimentEnabled */;
    const result = obj.isIOSPushNotificationRawPayloadFixExperimentEnabled();
    let tmp5 = !result;
    if (result) {
      tmp5 = !closure_2;
    }
    obj = { ready: true, cached: null };
    obj[1] = tmp5;
    const mutation = self.mutate(obj);
    const items = [mergeMessage(self, closure_1)];
    return mutation.merge(items);
  }
};
prototype2["receiveReactionInAppNotification"] = function receiveReactionInAppNotification(nonce) {
  const self = this;
  let value = null;
  if (null != nonce.nonce) {
    value = self.get(nonce.nonce, true);
  }
  let mergeResult = self;
  if (null == value) {
    const mutation = self.mutate({ ready: true, cached: true });
    const items = [mergeMessage(self, nonce)];
    mergeResult = mutation.merge(items);
  }
  return mergeResult;
};
prototype2["loadStart"] = function loadStart(jump) {
  const self = this;
  const obj = { loadingMore: true, jumped: null != jump, jumpedToPresent: null, jumpTargetId: null, jumpTargetOffset: null, jumpReturnTargetId: null, onJumpComplete: null, ready: null };
  let flag;
  if (jump != null) {
    flag = jump.present;
  }
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  let messageId;
  if (jump != null) {
    messageId = jump.messageId;
  }
  if (messageId == null) {
    messageId = null;
  }
  obj[3] = messageId;
  let num;
  if (jump != null) {
    num = jump.offset;
  }
  if (num == null) {
    num = 0;
  }
  obj[4] = num;
  let returnMessageId;
  if (jump != null) {
    returnMessageId = jump.returnMessageId;
  }
  if (returnMessageId == null) {
    returnMessageId = null;
  }
  obj[5] = returnMessageId;
  let onJumpComplete;
  if (jump != null) {
    onJumpComplete = jump.onJumpComplete;
  }
  if (onJumpComplete == null) {
    onJumpComplete = null;
  }
  obj[6] = onJumpComplete;
  obj[7] = null == jump && self.ready;
  return this.mutate(obj);
};
prototype2["loadComplete"] = function loadComplete(newMessages) {
  const items = [...newMessages.newMessages];
  let flag = newMessages.isBefore;
  if (flag == null) {
    flag = false;
  }
  let flag2 = newMessages.isAfter;
  if (flag2 == null) {
    flag2 = false;
  }
  let jump = newMessages.jump;
  if (jump == null) {
    jump = null;
  }
  let flag3 = newMessages.hasMoreBefore;
  if (flag3 == null) {
    flag3 = false;
  }
  let flag4 = newMessages.hasMoreAfter;
  if (flag4 == null) {
    flag4 = false;
  }
  let flag5 = newMessages.avoidInitialScroll;
  if (flag5 == null) {
    flag5 = false;
  }
  let flag6 = newMessages.cached;
  if (flag6 == null) {
    flag6 = false;
  }
  const self = this;
  let obj = importDefault(12)(items);
  const reversed = obj.reverse();
  const valueResult = reversed.map((message) => callback(table[2]).createMessageRecord(message)).value();
  if (flag) {
    if (null == jump) {
      if (self.ready) {
        let mergeResult = self.merge(valueResult, flag, true);
      }
      let cached = !flag6;
      if (!flag6) {
        cached = mergeResult.cached;
      }
      if (cached) {
        cached = !flag5;
      }
      let jumpType;
      if (jump != null) {
        jumpType = jump.jumpType;
      }
      if (jumpType == null) {
        jumpType = require(4125) /* GuildThemeSourcePreference */.JumpType.ANIMATED;
      }
      obj = { ready: true, loadingMore: false, jumpType: null, jumpFlash: null, jumped: null, jumpedToPresent: null, jumpTargetId: null, jumpTargetOffset: null, jumpSequenceId: null, jumpReturnTargetId: null, onJumpComplete: null, hasMoreBefore: null, hasMoreAfter: null, cached: null, hasFetched: null, error: false, initialScrollSequenceId: null, suppressRowAnimationSequenceId: null };
      obj[2] = jumpType;
      let flag8;
      if (jump != null) {
        flag8 = jump.flash;
      }
      if (flag8 == null) {
        flag8 = false;
      }
      obj[3] = flag8;
      obj[4] = null != jump;
      let flag9;
      if (jump != null) {
        flag9 = jump.present;
      }
      if (flag9 == null) {
        flag9 = false;
      }
      obj[5] = flag9;
      let messageId;
      if (jump != null) {
        messageId = jump.messageId;
      }
      if (messageId == null) {
        messageId = null;
      }
      obj[6] = messageId;
      let num = 0;
      if (null != jump) {
        num = 0;
        if (null != jump.messageId) {
          num = 0;
          if (null != jump.offset) {
            num = jump.offset;
          }
        }
      }
      obj[7] = num;
      if (null != jump) {
        if (!flag5) {
          let jumpSequenceId = mergeResult.jumpSequenceId + 1;
        }
        obj[8] = jumpSequenceId;
        let returnMessageId;
        if (jump != null) {
          returnMessageId = jump.returnMessageId;
        }
        if (returnMessageId == null) {
          returnMessageId = null;
        }
        obj[9] = returnMessageId;
        let onJumpComplete;
        if (jump != null) {
          onJumpComplete = jump.onJumpComplete;
        }
        if (onJumpComplete == null) {
          onJumpComplete = null;
        }
        obj[10] = onJumpComplete;
        let hasMoreBefore = flag3;
        if (null == jump) {
          hasMoreBefore = flag3;
          if (flag2) {
            hasMoreBefore = mergeResult.hasMoreBefore;
          }
        }
        obj[11] = hasMoreBefore;
        let hasMoreAfter = flag4;
        if (null == jump) {
          hasMoreAfter = flag4;
          if (flag) {
            hasMoreAfter = mergeResult.hasMoreAfter;
          }
        }
        obj[12] = hasMoreAfter;
        obj[13] = flag6;
        obj[14] = newMessages.hasFetched;
        const initialScrollSequenceId = mergeResult.initialScrollSequenceId;
        if (cached) {
          let sum = initialScrollSequenceId + 1;
        } else {
          sum = initialScrollSequenceId;
        }
        obj[16] = sum;
        const suppressRowAnimationSequenceId = mergeResult.suppressRowAnimationSequenceId;
        if (cached) {
          let sum1 = suppressRowAnimationSequenceId + 1;
        } else {
          sum1 = suppressRowAnimationSequenceId;
        }
        obj[17] = sum1;
        return mergeResult.mutate(obj);
      }
      jumpSequenceId = mergeResult.jumpSequenceId;
    }
  }
  const _array = self._array;
  const found = _array.filter((state) => state.state === constants.SENDING);
  const _array1 = self._array;
  const found1 = _array1.filter((state) => state.state === constants.SEND_FAILED);
  const resetResult = self.reset(valueResult);
  if (tmp4) {
    if (!flag) {
      if (!flag2) {
        let messageId1;
        if (jump != null) {
          messageId1 = jump.messageId;
        }
        if (null == messageId1) {
          let offset;
          if (jump != null) {
            offset = jump.offset;
          }
          if (null == offset) {
            let mergeResult1 = resetResult;
            if (found1.length > 0) {
              const _HermesInternal = HermesInternal;
              tmp3.info("loadComplete: merging with SEND_FAILED messages for channelId=" + self.channelId);
              mergeResult1 = resetResult.merge(found1);
            }
            mergeResult = mergeResult1;
            if (found.length > 0) {
              const _HermesInternal2 = HermesInternal;
              tmp3.info("loadComplete: merging with SENDING messages for channelId=" + self.channelId);
              mergeResult = mergeResult1.merge(found);
            }
          }
        }
      }
    }
  }
  tmp3.info("loadComplete: resetting state for channelId=" + self.channelId + ", sending.length=" + found.length);
  mergeResult = resetResult;
};
prototype2["addCachedMessages"] = function addCachedMessages(messages, stale) {
  let self = this;
  self = this;
  let obj = reversed(4868);
  const result = obj.requireSortedDescending(messages);
  const mapped = messages.map((arg0) => outer1_10(self, arg0));
  reversed = mapped.reverse();
  const _array = this._array;
  const found = _array.filter((arg0) => {
    let closure_0 = arg0;
    return !closure_0.some((id) => id.id === id.id);
  });
  const item = found.forEach((arg0) => outer1_2(outer1_3[7]).insert(reversed, arg0, (id, id2) => callback(table[5]).compare(id.id, id2.id)));
  let cached = !stale;
  if (!stale) {
    cached = self.cached;
  }
  obj = { ready: true, cached: stale, error: false, initialScrollSequenceId: null };
  const initialScrollSequenceId = self.initialScrollSequenceId;
  if (cached) {
    let sum = initialScrollSequenceId + 1;
  } else {
    sum = initialScrollSequenceId;
  }
  obj[3] = sum;
  return self.reset(reversed).mutate(obj);
};
ChannelMessages._channelMessages = {};
let tmp3 = new require("apply")("ChannelMessages");
let result = require("createMinimalMessageRecord").fileFinishedImporting("lib/ChannelMessages.tsx");

export default ChannelMessages;
export const flatMapChannelMessages = function flatMapChannelMessages(arr) {
  return arr.flatMap((_array) => _array._array);
};