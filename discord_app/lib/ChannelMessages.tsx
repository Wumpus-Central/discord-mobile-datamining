// === Module 5272: ChannelMessages ===

// Module 5272 (ChannelMessages)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Client from "Client" /* 4491 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import SortedArrayUtilsAll from "SortedArrayUtils" /* 5274 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 5275 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

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
  messageRecord = MessageRecordUtils.createMessageRecord(id);
}
({ MAX_MESSAGES_PER_CHANNEL: closure_4, MAX_LOADED_MESSAGES: hasOwnProperty, MAX_MESSAGE_CACHE_SIZE: metroRequire, TRUNCATED_MESSAGE_VIEW_SIZE: closure_7, MessageStates: closure_8 } = Constants);
const logger = new LoggerDefault("ChannelMessages");
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
  if (typeof MessageCache === "function") {
    let obj = Object.create(MessageCache.prototype);
    obj._messages = [];
    obj._map = {};
    obj._wasAtEdge = false;
    obj._isCacheBefore = tmp;
    obj = {};
    const merged = Object.assign(self._map);
    obj._map = obj;
    const items = [];
    HermesBuiltin.arraySpread(self._messages, 0);
    obj._messages = items;
    obj._wasAtEdge = self._wasAtEdge;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  closure_0 = arg0;
  this._messages = _modDef12.filter(this._messages, (id) => id.id !== closure_0);
  delete tmp[tmp2];
};
prototype["removeMany"] = function removeMany(arg0) {
  const self = this;
  closure_0 = arg0;
  _modDef12.each(arg0, (arg0) => {
    delete tmp2[tmp];
  });
  const _messages = this._messages;
  this._messages = _messages.filter((id) => -1 === closure_0.indexOf(id.id));
};
prototype["replace"] = function replace(arg0, id) {
  const self = this;
  if (null != this._map[arg0]) {
    const _map = self._map;
    delete tmp[tmp2];
    self._map[id.id] = id;
    ({ _messages: _messages2, _messages } = self);
    _messages[_messages2.indexOf(tmp3)] = id;
  }
};
prototype["update"] = function update(arg0, fn) {
  const self = this;
  if (null != this._map[arg0]) {
    const tmp3 = fn(tmp);
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
prototype["cache"] = function cache(arg0) {
  const self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (0 === self.length) {
    self._wasAtEdge = flag;
  }
  if (self._messages.length + arg0.length > timestampProducer) {
    self._wasAtEdge = false;
    if (arg0.length > timestampProducer) {
      const slice = arg0.slice;
      if (self._isCacheBefore) {
        self._messages = slice(arg0.length - timestampProducer);
      } else {
        self._messages = slice(0, timestampProducer);
      }
      self._map = {};
      const _messages = self._messages;
      const item = _messages.forEach((id) => {
        self._map[id.id] = id;
        return id;
      });
    } else {
      const diff = timestampProducer - arg0.length;
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
    HermesBuiltin.arraySpread(arg0, HermesBuiltin.arraySpread(self._messages, 0));
    let tmp7 = items;
  } else {
    HermesBuiltin.arraySpread(self._messages, HermesBuiltin.arraySpread(arg0, 0));
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
  const self = this;
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
  const item = substr.forEach((item) => {
    delete tmp3[tmp2];
    return tmp;
  });
  return substr;
};
let ChannelMessages;
class ChannelMessages {
  constructor(arg0) {
    merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
    merged[2] = closure_0(closure_3[4]).JumpType.ANIMATED;
    merged[21] = [];
    tmp2 = MessageCache;
    if (typeof MessageCache === "function") {
      obj = Object.create(tmp2.prototype);
      obj._messages = [];
      obj._map = {};
      flag = false;
      obj._wasAtEdge = false;
      flag2 = true;
      obj._isCacheBefore = true;
      merged[22] = obj;
      tmp4 = new.target;
      if (typeof tmp2 === "function") {
        tmp5 = global;
        obj1 = Object.create(tmp2.prototype);
        obj1._messages = [];
        obj1._map = {};
        obj1._wasAtEdge = false;
        obj1._isCacheBefore = false;
        merged[23] = obj1;
        merged[24] = {};
        merged.channelId = global;
        return merged;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype2 = ChannelMessages.prototype;
ChannelMessages["forEach"] = function forEach(arg0) {
  const item = _modDef12.forEach(ChannelMessages._channelMessages, arg0);
};
ChannelMessages["get"] = function get(arg0) {
  return ChannelMessages._channelMessages[arg0];
};
ChannelMessages["hasPresent"] = function hasPresent(arg0) {
  value = ChannelMessages.get(arg0);
  return null != value && value.hasPresent();
};
ChannelMessages["getOrCreate"] = function getOrCreate(channelId) {
  let tmp2 = ChannelMessages._channelMessages[channelId];
  if (null == tmp2) {
    if (typeof ChannelMessages === "function") {
      const merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
      merged[2] = Client.JumpType.ANIMATED;
      merged[21] = [];
      if (typeof MessageCache === "function") {
        let obj = Object.create(MessageCache.prototype);
        obj._messages = [];
        obj._map = {};
        obj._wasAtEdge = false;
        obj._isCacheBefore = true;
        merged[22] = obj;
        if (typeof MessageCache === "function") {
          obj = Object.create(MessageCache.prototype);
          obj._messages = [];
          obj._map = {};
          obj._wasAtEdge = false;
          obj._isCacheBefore = false;
          merged[23] = obj;
          merged[24] = {};
          merged.channelId = channelId;
          ChannelMessages._channelMessages[channelId] = merged;
          tmp2 = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
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
prototype2["mutate"] = function mutate(ready) {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (typeof ChannelMessages === "function") {
    const merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
    merged[2] = Client.JumpType.ANIMATED;
    merged[21] = [];
    if (typeof MessageCache === "function") {
      let obj = Object.create(MessageCache.prototype);
      obj._messages = [];
      obj._map = {};
      obj._wasAtEdge = false;
      obj._isCacheBefore = true;
      merged[22] = obj;
      if (typeof MessageCache === "function") {
        obj = Object.create(MessageCache.prototype);
        obj._messages = [];
        obj._map = {};
        obj._wasAtEdge = false;
        obj._isCacheBefore = false;
        merged[23] = obj;
        merged[24] = {};
        merged.channelId = tmp;
        const _array = self._array;
        if (flag) {
          const items = [];
          HermesBuiltin.arraySpread(_array, 0);
          let tmp10 = items;
        } else {
          tmp10 = _array;
        }
        merged._array = tmp10;
        const _map = self._map;
        if (flag) {
          obj = {};
          const merged1 = Object.assign(_map);
          let tmp14 = obj;
        } else {
          tmp14 = _map;
        }
        merged._map = tmp14;
        const _after = self._after;
        if (flag) {
          let cloneResult = _after.clone();
        } else {
          cloneResult = _after;
        }
        merged._after = cloneResult;
        const _before = self._before;
        if (flag) {
          let cloneResult1 = _before.clone();
        } else {
          cloneResult1 = _before;
        }
        merged._before = cloneResult1;
        const _Function = Function;
        if (ready instanceof Function) {
          ({ ready: tmp2.ready, jumpType: tmp2.jumpType, jumpTargetId: tmp2.jumpTargetId, jumpTargetOffset: tmp2.jumpTargetOffset, jumpSequenceId: tmp2.jumpSequenceId, jumped: tmp2.jumped, jumpedToPresent: tmp2.jumpedToPresent, jumpFlash: tmp2.jumpFlash, jumpReturnTargetId: tmp2.jumpReturnTargetId, onJumpComplete: tmp2.onJumpComplete, focusTargetId: tmp2.focusTargetId, focusSequenceId: tmp2.focusSequenceId, hasMoreBefore: tmp2.hasMoreBefore, hasMoreAfter: tmp2.hasMoreAfter, loadingMore: tmp2.loadingMore, revealedMessageId: tmp2.revealedMessageId, cached: tmp2.cached, hasFetched: tmp2.hasFetched, error: tmp2.error, initialScrollSequenceId: tmp2.initialScrollSequenceId, suppressRowAnimationSequenceId: tmp2.suppressRowAnimationSequenceId } = self);
          ready(merged);
        } else if (typeof ready === "object") {
          if (undefined !== ready.ready) {
            ready = true === ready.ready;
          } else {
            ready = self.ready;
          }
          merged.ready = ready;
          merged.jumpType = undefined !== ready.jumpType ? ready.jumpType : self.jumpType;
          merged.jumpTargetId = undefined !== ready.jumpTargetId ? ready.jumpTargetId : self.jumpTargetId;
          merged.jumpTargetOffset = undefined !== ready.jumpTargetOffset ? ready.jumpTargetOffset : self.jumpTargetOffset;
          merged.jumpSequenceId = undefined !== ready.jumpSequenceId ? ready.jumpSequenceId : self.jumpSequenceId;
          if (undefined !== ready.jumped) {
            let jumped = true === ready.jumped;
          } else {
            jumped = self.jumped;
          }
          merged.jumped = jumped;
          if (undefined !== ready.jumpedToPresent) {
            let jumpedToPresent = true === ready.jumpedToPresent;
          } else {
            jumpedToPresent = self.jumpedToPresent;
          }
          merged.jumpedToPresent = jumpedToPresent;
          if (undefined !== ready.jumpFlash) {
            let jumpFlash = true === ready.jumpFlash;
          } else {
            jumpFlash = self.jumpFlash;
          }
          merged.jumpFlash = jumpFlash;
          merged.jumpReturnTargetId = undefined !== ready.jumpReturnTargetId ? ready.jumpReturnTargetId : self.jumpReturnTargetId;
          merged.focusTargetId = undefined !== ready.focusTargetId ? ready.focusTargetId : self.focusTargetId;
          merged.focusSequenceId = undefined !== ready.focusSequenceId ? ready.focusSequenceId : self.focusSequenceId;
          if (undefined !== ready.hasMoreBefore) {
            let hasMoreBefore = true === ready.hasMoreBefore;
          } else {
            hasMoreBefore = self.hasMoreBefore;
          }
          merged.hasMoreBefore = hasMoreBefore;
          if (undefined !== ready.hasMoreAfter) {
            let hasMoreAfter = true === ready.hasMoreAfter;
          } else {
            hasMoreAfter = self.hasMoreAfter;
          }
          merged.hasMoreAfter = hasMoreAfter;
          merged.loadingMore = undefined !== ready.loadingMore ? ready.loadingMore : self.loadingMore;
          merged.revealedMessageId = undefined !== ready.revealedMessageId ? ready.revealedMessageId : self.revealedMessageId;
          merged.cached = undefined !== ready.cached ? ready.cached : self.cached;
          merged.hasFetched = undefined !== ready.hasFetched ? ready.hasFetched : self.hasFetched;
          merged.error = undefined !== ready.error ? ready.error : self.error;
          merged.onJumpComplete = undefined !== ready.onJumpComplete ? ready.onJumpComplete : self.onJumpComplete;
          merged.initialScrollSequenceId = undefined !== ready.initialScrollSequenceId ? ready.initialScrollSequenceId : self.initialScrollSequenceId;
          merged.suppressRowAnimationSequenceId = undefined !== ready.suppressRowAnimationSequenceId ? ready.suppressRowAnimationSequenceId : self.suppressRowAnimationSequenceId;
        }
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
prototype2["forEach"] = function forEach(call, arg1) {
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
prototype2["forAll"] = function forAll(arg0, arg1) {
  const _before = this._before;
  const item = _before.forEach(arg0, arg1);
  const _array = this._array;
  const item1 = _array.forEach(arg0, arg1);
  const _after = this._after;
  const item2 = _after.forEach(arg0, arg1);
};
prototype2["findOldest"] = function findOldest(isTermsFormField) {
  const self = this;
  let found = _modDef12.find(this._before._messages, isTermsFormField);
  if (found == null) {
    let tmpResult = _modDef12;
    found = tmpResult.find(self._array, isTermsFormField);
  }
  if (found == null) {
    tmpResult = _modDef12;
    found = tmpResult.find(self._after._messages, isTermsFormField);
  }
  return found;
};
prototype2["findNewest"] = function findNewest(arg0) {
  const self = this;
  let findLastResult = _modDef12.findLast(this._after._messages, arg0);
  if (findLastResult == null) {
    let tmpResult = _modDef12;
    findLastResult = tmpResult.findLast(self._array, arg0);
  }
  if (findLastResult == null) {
    tmpResult = _modDef12;
    findLastResult = tmpResult.findLast(self._before._messages, arg0);
  }
  return findLastResult;
};
prototype2["map"] = function map(arg0, arg1) {
  const _array = this._array;
  return _array.map(arg0, arg1);
};
prototype2["first"] = function first() {
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
      value = _before.get(arg0);
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
  value = this.get(id);
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
prototype2["getManyAfter"] = function getManyAfter(arg0, arg1, fn) {
  const self = this;
  value = this.get(arg0);
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
            let tmp5 = null == fn;
            if (!tmp5) {
              tmp5 = fn(self._array[tmp4]);
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
prototype2["getManyBefore"] = function getManyBefore(arg0, arg1, fn) {
  const self = this;
  value = this.get(arg0);
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
            let tmp5 = null == fn;
            if (!tmp5) {
              tmp5 = fn(self._array[tmp4]);
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
prototype2["hasAnyAfter"] = function hasAnyAfter(id, fn, arg2) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  const self = this;
  value = this.get(id);
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
          while (!fn(self._array[tmp4])) {
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
  closure_0 = arg0;
  closure_1 = -1;
  const _array = this._array;
  const found = _array.find((id, index) => {
    let flag = id.id === closure_0;
    if (flag) {
      closure_1 = index;
      flag = true;
    }
    return flag;
  });
  return closure_1;
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
prototype2["update"] = function update(arg0, fn) {
  const self = this;
  closure_0 = arg0;
  closure_1 = fn;
  const id = tmp;
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
    closure_3 = fn(tmp);
    return self.mutate((_map) => {
      _map._map[id.id] = closure_3;
      ({ _array: _array2, _array } = _map);
      _array[_array2.indexOf(id)] = closure_3;
    }, true);
  }
};
prototype2["replace"] = function replace(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  const id = arg1;
  closure_2 = tmp;
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
  closure_0 = arg0;
  return this.mutate((_array) => {
    delete tmp2[tmp];
    _array = _array._array;
    _array._array = _array.filter((id) => id.id !== closure_1_0);
    const _before = _array._before;
    _before.remove(closure_0);
    const _after = _array._after;
    _after.remove(closure_0);
  }, true);
};
prototype2["removeMany"] = function removeMany(arr) {
  const self = this;
  closure_0 = arr;
  let self2 = this;
  if (arr.some((item) => self.has(item))) {
    self2 = self.mutate((_array) => {
      self(dependencyMap[3]).each(_array, (arg0) => {
        delete tmp2[tmp];
      });
      _array = _array._array;
      _array._array = _array.filter((id) => -1 === _array.indexOf(id.id));
      const _before = _array._before;
      _before.removeMany(_array);
      const _after = _array._after;
      _after.removeMany(_array);
    }, true);
  }
  return self2;
};
prototype2["merge"] = function merge(arg0) {
  closure_0 = arg0;
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
prototype2["_merge"] = function _merge(arr) {
  const self = this;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const found = arr.filter((id) => {
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
prototype2["mergeDelta"] = function mergeDelta() {
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
    const item = items.forEach((id) => set.add(id.id));
    const item1 = items1.forEach((id) => set.add(id.id));
    const _array = _before._array;
    const found = _array.filter((id) => !set.has(id.id));
    const mapped = items.map((item) => set(4783).createMessageRecord(item));
    const combined = found.concat(mapped, items1.map((item) => set(4783).createMessageRecord(item)));
    _before._array = combined.sort((id, id2) => items1(11).compare(id.id, id2.id));
  });
};
prototype2["_clearMessages"] = function _clearMessages() {
  this._array = [];
  this._map = {};
};
prototype2["reset"] = function reset(_array) {
  return this.mutate((_before) => {
    _array = _before;
    _before._array = _array;
    _before._map = {};
    const item = _array.forEach((id) => {
      _map._map[id.id] = id;
      return id;
    });
    _before = _before._before;
    _before.clear();
    const _after = _before._after;
    _after.clear();
  });
};
prototype2["truncateTop"] = function truncateTop(React5) {
  if (flag === undefined) {
    flag = true;
  }
  const self = this;
  const diff = this._array.length - React5;
  c0 = diff;
  let self2 = this;
  if (diff > 0) {
    self2 = self.mutate((_map) => {
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
prototype2["truncateBottom"] = function truncateBottom(React5) {
  return this;
};
prototype2["jumpToPresent"] = function jumpToPresent(arg0) {
  closure_0 = arg0;
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
    let ANIMATED = closure_1_4;
    if (closure_1_4 == null) {
      ANIMATED = Client.JumpType.ANIMATED;
    }
    jumpSequenceId.jumpType = ANIMATED;
    jumpSequenceId.jumpTargetId = jumpTargetId;
    let num = 0;
    if (null != jumpTargetId) {
      num = 0;
      if (null != importAll) {
        num = importAll;
      }
    }
    jumpSequenceId.jumpTargetOffset = num;
    jumpSequenceId.jumpSequenceId = jumpSequenceId.jumpSequenceId + 1;
    let tmp3 = closure_1_5;
    if (closure_1_5 == null) {
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
  const focusTargetId = messageId;
  return this.mutate((focusSequenceId) => {
    focusSequenceId.focusTargetId = focusTargetId;
    focusSequenceId.focusSequenceId = focusSequenceId.focusSequenceId + 1;
    focusSequenceId.ready = true;
    focusSequenceId.loadingMore = false;
  }, false);
};
prototype2["loadFromCache"] = function loadFromCache(arg0, limit) {
  closure_0 = arg0;
  closure_1 = limit;
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
  if (this.length <= hasOwnProperty) {
    return self;
  } else if (arg0) {
    let truncateBottomResult = self.truncateBottom(React5);
  } else {
    truncateBottomResult = self;
    if (arg1) {
      truncateBottomResult = self.truncateTop(React5);
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
  value = null;
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
          const messageRecord = messageRecord1(4783).createMessageRecord(nonce);
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
    messageRecord1 = messageRecord1(4783).createMessageRecord(nonce);
    const lastResult = self.last();
    if (null != lastResult) {
      if (obj2.compare(nonce.id, lastResult.id) < 0) {
        if (tmp8Result.getConfig({ location: "receiveMessage" }).enabled) {
          let mutation = self.mutate((_map) => {
            _map._map[messageRecord1.id] = messageRecord1;
            if (null != _map._map[messageRecord1.id]) {
              ({ _array: _array2, _array } = _map);
              _array[_array2.indexOf(tmp2)] = messageRecord1;
            } else {
              SortedArrayUtilsAll.insert(_map._array, messageRecord1, (id, id2) => closure_1_1(closure_1_3[5]).compare(id.id, id2.id));
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
      obj2 = SnowflakeUtilsDefault;
    }
    const items = [messageRecord1];
    mutation = self.merge(items);
    let obj = messageRecord1(4783);
  }
};
prototype2["receivePushNotification"] = function receivePushNotification(message, isConnectedResult) {
  const self = this;
  value = null;
  if (null != message.nonce) {
    value = self.get(message.nonce, true);
  }
  if (null != value) {
    return self;
  } else if (null != self.get(message.id, true)) {
    return self;
  } else {
    let obj = IOSPushNotificationRawPayloadFixExperiment;
    const result = obj.isIOSPushNotificationRawPayloadFixExperimentEnabled();
    let tmp5 = !result;
    if (result) {
      tmp5 = !isConnectedResult;
    }
    obj = { ready: true, cached: tmp5 };
    const mutation = self.mutate(obj);
    const items = [mergeMessage(self, message)];
    return mutation.merge(items);
  }
};
prototype2["receiveReactionInAppNotification"] = function receiveReactionInAppNotification(nonce) {
  const self = this;
  value = null;
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
  obj.jumpedToPresent = flag;
  let messageId;
  if (jump != null) {
    messageId = jump.messageId;
  }
  if (messageId == null) {
    messageId = null;
  }
  obj.jumpTargetId = messageId;
  let num;
  if (jump != null) {
    num = jump.offset;
  }
  if (num == null) {
    num = 0;
  }
  obj.jumpTargetOffset = num;
  let returnMessageId;
  if (jump != null) {
    returnMessageId = jump.returnMessageId;
  }
  if (returnMessageId == null) {
    returnMessageId = null;
  }
  obj.jumpReturnTargetId = returnMessageId;
  let onJumpComplete;
  if (jump != null) {
    onJumpComplete = jump.onJumpComplete;
  }
  if (onJumpComplete == null) {
    onJumpComplete = null;
  }
  obj.onJumpComplete = onJumpComplete;
  obj.ready = null == jump && self.ready;
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
  let obj = _modDef12(items);
  const reversed = obj.reverse();
  const valueResult = reversed.map((item) => MessageRecordUtils.createMessageRecord(item)).value();
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
        jumpType = Client.JumpType.ANIMATED;
      }
      obj = { ready: true, loadingMore: false, jumpType, jumpFlash: null, jumped: null, jumpedToPresent: null, jumpTargetId: null, jumpTargetOffset: null, jumpSequenceId: null, jumpReturnTargetId: null, onJumpComplete: null, hasMoreBefore: null, hasMoreAfter: null, cached: null, hasFetched: null, error: false, initialScrollSequenceId: null, suppressRowAnimationSequenceId: null };
      let flag8;
      if (jump != null) {
        flag8 = jump.flash;
      }
      if (flag8 == null) {
        flag8 = false;
      }
      obj.jumpFlash = flag8;
      obj.jumped = null != jump;
      let flag9;
      if (jump != null) {
        flag9 = jump.present;
      }
      if (flag9 == null) {
        flag9 = false;
      }
      obj.jumpedToPresent = flag9;
      let messageId;
      if (jump != null) {
        messageId = jump.messageId;
      }
      if (messageId == null) {
        messageId = null;
      }
      obj.jumpTargetId = messageId;
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
      obj.jumpTargetOffset = num;
      if (null != jump) {
        if (!flag5) {
          let jumpSequenceId = mergeResult.jumpSequenceId + 1;
        }
        obj.jumpSequenceId = jumpSequenceId;
        let returnMessageId;
        if (jump != null) {
          returnMessageId = jump.returnMessageId;
        }
        if (returnMessageId == null) {
          returnMessageId = null;
        }
        obj.jumpReturnTargetId = returnMessageId;
        let onJumpComplete;
        if (jump != null) {
          onJumpComplete = jump.onJumpComplete;
        }
        if (onJumpComplete == null) {
          onJumpComplete = null;
        }
        obj.onJumpComplete = onJumpComplete;
        let hasMoreBefore = flag3;
        if (null == jump) {
          hasMoreBefore = flag3;
          if (flag2) {
            hasMoreBefore = mergeResult.hasMoreBefore;
          }
        }
        obj.hasMoreBefore = hasMoreBefore;
        let hasMoreAfter = flag4;
        if (null == jump) {
          hasMoreAfter = flag4;
          if (flag) {
            hasMoreAfter = mergeResult.hasMoreAfter;
          }
        }
        obj.hasMoreAfter = hasMoreAfter;
        obj.cached = flag6;
        obj.hasFetched = newMessages.hasFetched;
        const initialScrollSequenceId = mergeResult.initialScrollSequenceId;
        if (cached) {
          let sum = initialScrollSequenceId + 1;
        } else {
          sum = initialScrollSequenceId;
        }
        obj.initialScrollSequenceId = sum;
        const suppressRowAnimationSequenceId = mergeResult.suppressRowAnimationSequenceId;
        if (cached) {
          let sum1 = suppressRowAnimationSequenceId + 1;
        } else {
          sum1 = suppressRowAnimationSequenceId;
        }
        obj.suppressRowAnimationSequenceId = sum1;
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
              logger.info("loadComplete: merging with SEND_FAILED messages for channelId=" + self.channelId);
              mergeResult1 = resetResult.merge(found1);
            }
            mergeResult = mergeResult1;
            if (found.length > 0) {
              const _HermesInternal2 = HermesInternal;
              logger.info("loadComplete: merging with SENDING messages for channelId=" + self.channelId);
              mergeResult = mergeResult1.merge(found);
            }
          }
        }
      }
    }
  }
  logger.info("loadComplete: resetting state for channelId=" + self.channelId + ", sending.length=" + found.length);
  mergeResult = resetResult;
  const iter = reversed.map((item) => MessageRecordUtils.createMessageRecord(item));
  tmp4 = found.length > 0 || found1.length > 0;
};
prototype2["addCachedMessages"] = function addCachedMessages(messages, stale) {
  const self = this;
  let obj = reversed(5276);
  const result = obj.requireSortedDescending(messages);
  const mapped = messages.map((item) => mergeMessage(self, item));
  reversed = mapped.reverse();
  const _array = this._array;
  const found = _array.filter((item) => !reversed.some((id) => id.id === item.id));
  let item = found.forEach((item) => SortedArrayUtilsAll.insert(reversed, item, (id, id2) => self(closure_1_3[5]).compare(id.id, id2.id)));
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
  obj.initialScrollSequenceId = sum;
  return self.reset(reversed).mutate(obj);
};
ChannelMessages._channelMessages = {};
let result = size.fileFinishedImporting("lib/ChannelMessages.tsx");

export default ChannelMessages;
export const flatMapChannelMessages = function flatMapChannelMessages(arr) {
  return arr.flatMap((_array) => _array._array);
};