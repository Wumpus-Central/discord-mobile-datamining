// === Module 5438: ChannelMessages ===

// Module 5438 (ChannelMessages)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import flow_Client from "flow/Client" /* 4793 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import EnsureReceivedMessagesAddedInOrderExperimentDefault from "EnsureReceivedMessagesAddedInOrderExperiment" /* 5439 */;
import SortedArrayUtilsAll from "SortedArrayUtils" /* 5440 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 5441 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function isPending(state) {
  return state.state === metroImportAll.SENDING || state.state === tmp.SEND_FAILED;
}
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
      self = this;
      const self2 = this;
      num2 = +new Date(id.edited_timestamp);
      const date = new Date(id.edited_timestamp);
    }
    let tmp5 = num2 > num;
    if (num >= num2) {
      const embeds = id.embeds;
      let num3;
      const length = messageRecord.embeds.length;
      if (embeds != null) {
        num3 = embeds.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp5 = length < num3;
    }
    if (!tmp5) {
      tmp5 = messageRecord.content !== id.content;
    }
    return messageRecord;
  }
  const obj = MessageRecordUtils;
  messageRecord = obj.createMessageRecord(id);
}
({ MAX_MESSAGES_PER_CHANNEL: closure_4, MAX_LOADED_MESSAGES: hasOwnProperty, MAX_MESSAGE_CACHE_SIZE: metroRequire, TRUNCATED_MESSAGE_VIEW_SIZE: metroImportDefault, MessageStates: metroImportAll } = Constants);
let tmp3 = new LoggerDefault("ChannelMessages");
const React4 = tmp3;
class MessageCache {
  constructor(_isCacheBefore) {
    const obj = Object.create(new.target.prototype);
    obj._messages = [];
    obj._map = {};
    obj._wasAtEdge = false;
    obj._isCacheBefore = _isCacheBefore;
    return obj;
  }
  clone() {
    const self = this;
    if (typeof MessageCache === "function") {
      const obj2 = Object.create(MessageCache.prototype);
      obj2._messages = [];
      obj2._map = {};
      obj2._wasAtEdge = false;
      obj2._isCacheBefore = tmp2;
      const obj = {};
      const merged = Object.assign(self._map);
      obj2._map = obj;
      const items = [];
      HermesBuiltin.arraySpread(items, self._messages, 0);
      obj2._messages = items;
      obj2._wasAtEdge = self._wasAtEdge;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  clear() {
    this._map = {};
    this._messages = [];
    this._wasAtEdge = false;
  }
  remove(arg0) {
    let closure_0 = arg0;
    const arr = _modDef12;
    this._messages = arr.filter(this._messages, (id) => id.id !== closure_0);
    delete this._map[arg0];
  }
  removeMany(arg0) {
    const self = this;
    let closure_0 = arg0;
    const obj = _modDef12;
    obj.each(arg0, (arg0) => {
      delete self._map[arg0];
    });
    const _messages = this._messages;
    this._messages = _messages.filter((id) => -1 === closure_0.indexOf(id.id));
  }
  replace(arg0, id) {
    let _messages;
    let _messages2;
    const self = this;
    if (null != this._map[arg0]) {
      delete self._map[tmp];
      self._map[id.id] = id;
      ({ _messages: _messages2, _messages } = self);
      _messages[_messages2.indexOf(this._map[arg0])] = id;
    }
  }
  update(arg0, fn) {
    let _messages;
    let _messages2;
    const self = this;
    if (null != this._map[arg0]) {
      const tmp3 = fn(this._map[arg0]);
      self._map[this._map[arg0].id] = tmp3;
      ({ _messages: _messages2, _messages } = self);
      _messages[_messages2.indexOf(this._map[arg0])] = tmp3;
    }
  }
  has(arg0) {
    return null != this._map[arg0];
  }
  get(arg0) {
    return this._map[arg0];
  }
  forEach(arg0, arg1) {
    const _messages = this._messages;
    const item = _messages.forEach(arg0, arg1);
  }
  cache(arg0) {
    let tmp8;
    const self = this;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (0 === self.length) {
      self._wasAtEdge = flag;
    }
    if (self._messages.length + arg0.length > metroRequire) {
      self._wasAtEdge = false;
      if (arg0.length > metroRequire) {
        const slice = arg0.slice;
        if (self._isCacheBefore) {
          self._messages = slice(arg0.length - metroRequire);
        } else {
          self._messages = slice(0, metroRequire);
        }
        self._map = {};
        const _messages = self._messages;
        const item = _messages.forEach((id) => {
          self._map[id.id] = id;
          return id;
        });
      } else {
        const diff = metroRequire - arg0.length;
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
      HermesBuiltin.arraySpread(items, arg0, HermesBuiltin.arraySpread(items, self._messages, 0));
      tmp8 = items;
    } else {
      HermesBuiltin.arraySpread(items, self._messages, HermesBuiltin.arraySpread(items, arg0, 0));
      tmp8 = items;
    }
    self._messages = tmp8;
    self._map = {};
    const _messages2 = self._messages;
    const item1 = _messages2.forEach((id) => {
      self._map[id.id] = id;
      return id;
    });
  }
  extractAll() {
    this._messages = [];
    this._map = {};
    return this._messages;
  }
  extract(arg0) {
    let substr;
    const self = this;
    const _Math = Math;
    if (this._isCacheBefore) {
      const maxResult = _Math.max(self.length - arg0, 0);
      const _messages = self._messages;
      substr = _messages.slice(maxResult, self.length);
      const _messages1 = self._messages;
      _messages1.splice(maxResult);
    } else {
      const _messages2 = self._messages;
      substr = _messages2.slice(0, _Math.min(arg0, self.length));
      const _messages3 = self._messages;
      _messages3.splice(0, arg0);
    }
    const item = substr.forEach((item) => {
      delete self._map[item.id];
      return tmp;
    });
    return substr;
  }
}
const prototype = MessageCache.prototype;
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
class ChannelMessages {
  constructor(channelId) {
    const merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
    merged[2] = flow_Client.JumpType.ANIMATED;
    merged[21] = [];
    if (typeof MessageCache === "function") {
      const obj = Object.create(MessageCache.prototype);
      obj._messages = [];
      obj._map = {};
      obj._wasAtEdge = false;
      obj._isCacheBefore = true;
      merged[22] = obj;
      const self = this;
      if (typeof MessageCache === "function") {
        const obj2 = Object.create(MessageCache.prototype);
        obj2._messages = [];
        obj2._map = {};
        obj2._wasAtEdge = false;
        obj2._isCacheBefore = false;
        merged[23] = obj2;
        merged[24] = {};
        merged.channelId = channelId;
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static forEach(arg0) {
    const arr = _modDef12;
    const item = arr.forEach(ChannelMessages._channelMessages, arg0);
  }
  static get(arg0) {
    return ChannelMessages._channelMessages[arg0];
  }
  static hasPresent(arg0) {
    const value = ChannelMessages.get(arg0);
    const tmp = null != value && value.hasPresent();
    return tmp;
  }
  static getOrCreate(channelId) {
    let tmp2 = ChannelMessages._channelMessages[channelId];
    if (null == tmp2) {
      const self3 = this;
      if (typeof ChannelMessages === "function") {
        const merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
        merged[2] = flow_Client.JumpType.ANIMATED;
        merged[21] = [];
        const self = this;
        if (typeof MessageCache === "function") {
          const obj = Object.create(MessageCache.prototype);
          obj._messages = [];
          obj._map = {};
          obj._wasAtEdge = false;
          obj._isCacheBefore = true;
          merged[22] = obj;
          const self2 = this;
          if (typeof MessageCache === "function") {
            const obj2 = Object.create(MessageCache.prototype);
            obj2._messages = [];
            obj2._map = {};
            obj2._wasAtEdge = false;
            obj2._isCacheBefore = false;
            merged[23] = obj2;
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
  }
  static clear(arg0) {
    delete ChannelMessages._channelMessages[arg0];
  }
  static clearCache(arg0) {
    if (null != ChannelMessages._channelMessages[arg0]) {
      const self = this;
      const _before = tmp._before;
      _before.clear();
      const _after = tmp._after;
      _after.clear();
      this.commit(ChannelMessages._channelMessages[arg0]);
    }
  }
  static commit(channelId) {
    ChannelMessages._channelMessages[channelId.channelId] = channelId;
  }
  mutate(ready) {
    const self = this;
    if (typeof ChannelMessages === "function") {
      const merged = Object.assign({ ready: false, cached: false, jumpType: null, jumpTargetId: null, jumpTargetOffset: 0, jumpSequenceId: 1, jumped: false, jumpedToPresent: false, jumpFlash: true, jumpReturnTargetId: null, onJumpComplete: null, focusTargetId: null, focusSequenceId: 1, initialScrollSequenceId: 0, suppressRowAnimationSequenceId: 0, hasMoreBefore: true, hasMoreAfter: false, loadingMore: false, revealedMessageId: null, hasFetched: false, error: false, _array: null, _before: null, _after: null, _map: null });
      merged[2] = flow_Client.JumpType.ANIMATED;
      merged[21] = [];
      const self2 = this;
      if (typeof MessageCache === "function") {
        const obj3 = Object.create(MessageCache.prototype);
        obj3._messages = [];
        obj3._map = {};
        obj3._wasAtEdge = false;
        obj3._isCacheBefore = true;
        merged[22] = obj3;
        const self3 = this;
        if (typeof MessageCache === "function") {
          let tmp9;
          let tmp13;
          let cloneResult;
          let cloneResult1;
          const obj4 = Object.create(MessageCache.prototype);
          obj4._messages = [];
          obj4._map = {};
          obj4._wasAtEdge = false;
          obj4._isCacheBefore = false;
          merged[23] = obj4;
          merged[24] = {};
          merged.channelId = tmp2;
          const _array = self._array;
          if (flag) {
            const items = [];
            HermesBuiltin.arraySpread(items, _array, 0);
            tmp9 = items;
          } else {
            tmp9 = _array;
          }
          merged._array = tmp9;
          const _map = self._map;
          if (flag) {
            const obj = {};
            const merged1 = Object.assign(_map);
            tmp13 = obj;
          } else {
            tmp13 = _map;
          }
          merged._map = tmp13;
          const _after = self._after;
          if (flag) {
            cloneResult = _after.clone();
          } else {
            cloneResult = _after;
          }
          merged._after = cloneResult;
          const _before = self._before;
          if (flag) {
            cloneResult1 = _before.clone();
          } else {
            cloneResult1 = _before;
          }
          merged._before = cloneResult1;
          const _Function = Function;
          if (ready instanceof Function) {
            ({ ready: tmp3.ready, jumpType: tmp3.jumpType, jumpTargetId: tmp3.jumpTargetId, jumpTargetOffset: tmp3.jumpTargetOffset, jumpSequenceId: tmp3.jumpSequenceId, jumped: tmp3.jumped, jumpedToPresent: tmp3.jumpedToPresent, jumpFlash: tmp3.jumpFlash, jumpReturnTargetId: tmp3.jumpReturnTargetId, onJumpComplete: tmp3.onJumpComplete, focusTargetId: tmp3.focusTargetId, focusSequenceId: tmp3.focusSequenceId, hasMoreBefore: tmp3.hasMoreBefore, hasMoreAfter: tmp3.hasMoreAfter, loadingMore: tmp3.loadingMore, revealedMessageId: tmp3.revealedMessageId, cached: tmp3.cached, hasFetched: tmp3.hasFetched, error: tmp3.error, initialScrollSequenceId: tmp3.initialScrollSequenceId, suppressRowAnimationSequenceId: tmp3.suppressRowAnimationSequenceId } = self);
            ready(merged);
          } else if (typeof ready === "object") {
            let jumped;
            let jumpedToPresent;
            let jumpFlash;
            let hasMoreBefore;
            let hasMoreAfter;
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
              jumped = true === ready.jumped;
            } else {
              jumped = self.jumped;
            }
            merged.jumped = jumped;
            if (undefined !== ready.jumpedToPresent) {
              jumpedToPresent = true === ready.jumpedToPresent;
            } else {
              jumpedToPresent = self.jumpedToPresent;
            }
            merged.jumpedToPresent = jumpedToPresent;
            if (undefined !== ready.jumpFlash) {
              jumpFlash = true === ready.jumpFlash;
            } else {
              jumpFlash = self.jumpFlash;
            }
            merged.jumpFlash = jumpFlash;
            merged.jumpReturnTargetId = undefined !== ready.jumpReturnTargetId ? ready.jumpReturnTargetId : self.jumpReturnTargetId;
            merged.focusTargetId = undefined !== ready.focusTargetId ? ready.focusTargetId : self.focusTargetId;
            merged.focusSequenceId = undefined !== ready.focusSequenceId ? ready.focusSequenceId : self.focusSequenceId;
            if (undefined !== ready.hasMoreBefore) {
              hasMoreBefore = true === ready.hasMoreBefore;
            } else {
              hasMoreBefore = self.hasMoreBefore;
            }
            merged.hasMoreBefore = hasMoreBefore;
            if (undefined !== ready.hasMoreAfter) {
              hasMoreAfter = true === ready.hasMoreAfter;
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
  }
  toArray() {
    const items = [...this._array];
    return items;
  }
  forEach(call, arg1) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    const _array = this._array;
    if (flag) {
      let diff = _array.length - 1;
      if (0 <= diff) {
        if (false !== call.call(arg1, _array[diff], diff)) {
          const diff1 = diff - 1;
          while (0 <= diff1) {
            diff = diff1;
            if (false === call.call(arg1, _array[diff1], diff1)) {
              break;
            }
          }
        }
      }
    } else {
      const item = _array.forEach(call, arg1);
    }
  }
  reduce(arg0, arg1) {
    const _array = this._array;
    return _array.reduce(arg0, arg1);
  }
  some(arg0, arg1) {
    const _array = this._array;
    return _array.some(arg0, arg1);
  }
  filter(arg0, arg1) {
    const _array = this._array;
    return _array.filter(arg0, arg1);
  }
  forAll(arg0, arg1) {
    const _before = this._before;
    const item = _before.forEach(arg0, arg1);
    const _array = this._array;
    const item1 = _array.forEach(arg0, arg1);
    const _after = this._after;
    const item2 = _after.forEach(arg0, arg1);
  }
  findOldest(isTermsFormField) {
    const self = this;
    const arr = _modDef12;
    let found = arr.find(this._before._messages, isTermsFormField);
    if (found == null) {
      const tmpResult = _modDef12;
      found = tmpResult.find(self._array, isTermsFormField);
    }
    if (found == null) {
      const tmpResult2 = _modDef12;
      found = tmpResult2.find(self._after._messages, isTermsFormField);
    }
    return found;
  }
  findNewest(arg0) {
    const self = this;
    const obj = _modDef12;
    let findLastResult = obj.findLast(this._after._messages, arg0);
    if (findLastResult == null) {
      const tmpResult = _modDef12;
      findLastResult = tmpResult.findLast(self._array, arg0);
    }
    if (findLastResult == null) {
      const tmpResult2 = _modDef12;
      findLastResult = tmpResult2.findLast(self._before._messages, arg0);
    }
    return findLastResult;
  }
  map(arg0, arg1) {
    const _array = this._array;
    return _array.map(arg0, arg1);
  }
  first() {
    return this._array[0];
  }
  last() {
    return this._array[this._array.length - 1];
  }
  get(arg0) {
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
  }
  getByIndex(arg0) {
    return this._array[arg0];
  }
  getAfter(id) {
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
  }
  getManyAfter(arg0, arg1, fn) {
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
  }
  getManyBefore(arg0, arg1, fn) {
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
  }
  hasAnyAfter(id, fn, arg2) {
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
  }
  has(arg0) {
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
  }
  indexOf(arg0) {
    let closure_0 = arg0;
    let c1 = -1;
    const _array = this._array;
    const found = _array.find((id, index) => {
      let flag = id.id === closure_0;
      if (flag) {
        c1 = index;
        flag = true;
      }
      return flag;
    });
    return c1;
  }
  hasPresent() {
    const self = this;
    return this._after.length > 0 && self._after.wasAtEdge || !self.hasMoreAfter;
  }
  hasBeforeCached(before) {
    const self = this;
    if (this.length > 0) {
      if (self._before.length > 0) {
        const firstResult = self.first();
        return null != firstResult && firstResult.id === before;
      }
    }
    return false;
  }
  hasAfterCached(after) {
    const self = this;
    if (this.length > 0) {
      if (self._after.length > 0) {
        const lastResult = self.last();
        return null != lastResult && lastResult.id === after;
      }
    }
    return false;
  }
  update(arg0, fn) {
    const self = this;
    let closure_0 = arg0;
    let closure_1 = fn;
    const id = tmp;
    if (null == this._map[arg0]) {
      let mutation;
      let _before = self._before;
      if (_before.has(arg0)) {
        mutation = self.mutate((_before) => {
          _before = _before._before;
          return _before.update(closure_0, fn);
        }, true);
      } else {
        let _after = self._after;
        mutation = self;
        if (_after.has(arg0)) {
          mutation = self.mutate((_after) => {
            _after = _after._after;
            return _after.update(closure_0, fn);
          }, true);
        }
      }
      return mutation;
    } else {
      let closure_3 = fn(tmp);
      return self.mutate((_map) => {
        let _array;
        let _array2;
        _map._map[id.id] = closure_3;
        ({ _array: _array2, _array } = _map);
        _array[_array2.indexOf(id)] = closure_3;
      }, true);
    }
  }
  replace(arg0, arg1) {
    let mutation1;
    const self = this;
    let closure_0 = arg0;
    const id = arg1;
    let closure_2 = tmp;
    if (null == this._map[arg0]) {
      let mutation;
      const _before = self._before;
      if (_before.has(arg0)) {
        mutation = self.mutate((_before) => {
          const str = _before._before;
          return str.replace(closure_0, id);
        }, true);
      } else {
        const _after = self._after;
        mutation = self;
        if (_after.has(arg0)) {
          mutation = self.mutate((_after) => {
            const str = _after._after;
            return str.replace(closure_0, id);
          }, true);
        }
      }
      mutation1 = mutation;
    } else {
      mutation1 = self.mutate((_map) => {
        delete _map._map[closure_0];
        _map._map[id.id] = id;
        const _array = _map._array;
        _map._array[_array.indexOf(closure_2)] = id;
      }, true);
    }
    return mutation1;
  }
  remove(arg0) {
    let closure_0 = arg0;
    return this.mutate((_array) => {
      delete _array._map[closure_0];
      _array = _array._array;
      _array._array = _array.filter((id) => id.id !== closure_1_0);
      const _before = _array._before;
      _before.remove(closure_0);
      const _after = _array._after;
      _after.remove(closure_0);
    }, true);
  }
  removeMany(arr) {
    const self = this;
    let closure_0 = arr;
    let self2 = this;
    if (arr.some((item) => self.has(item))) {
      self2 = self.mutate((_array) => {
        const obj = self(dependencyMap[3]);
        obj.each(_array, (arg0) => {
          delete _array._map[arg0];
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
  }
  merge(arg0) {
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
  }
  _merge(arr) {
    let flag;
    let tmp8;
    const self = this;
    if (flag === undefined) {
      flag = false;
    }
    const found = arr.filter((id) => {
      let _array;
      let _array2;
      self._map[id.id] = id;
      let flag = null == tmp2;
      if (!flag) {
        ({ _array: _array2, _array } = self);
        _array[_array2.indexOf(self._map[id.id])] = id;
        flag = false;
      }
      return flag;
    });
    if (flag2) {
      const obj = flag ? self._before : self._after;
      obj.clear();
    }
    const items = [];
    if (flag) {
      HermesBuiltin.arraySpread(items, self._array, HermesBuiltin.arraySpread(items, found, 0));
      tmp8 = items;
    } else {
      HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, self._array, 0));
      tmp8 = items;
    }
    self._array = tmp8;
  }
  mergeDelta() {
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
      set = new Set(items2);
      const item = items.forEach((id) => set.add(id.id));
      const item1 = items1.forEach((id) => set.add(id.id));
      const _array = _before._array;
      const found = _array.filter((id) => !set.has(id.id));
      const concat = found.concat;
      const mapped = items.map((item) => {
        const obj = items(closure_1_3[2]);
        return obj.createMessageRecord(item);
      });
      const combined = concat(mapped, items1.map((item) => {
        const obj = items(closure_1_3[2]);
        return obj.createMessageRecord(item);
      }));
      _before._array = combined.sort((id, id2) => {
        const obj = items1(closure_1_3[5]);
        return obj.compare(id.id, id2.id);
      });
    });
  }
  _clearMessages() {
    this._array = [];
    this._map = {};
  }
  reset(_array) {
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
  }
  truncateTop(metroImportDefault) {
    let flag;
    if (flag === undefined) {
      flag = true;
    }
    const self = this;
    const diff = this._array.length - metroImportDefault;
    let c0 = diff;
    let self2 = this;
    if (diff > 0) {
      self2 = self.mutate((hasMoreBefore) => {
        let _array;
        let _before;
        let tmp = c0;
        let num = 0;
        if (0 < c0) {
          do {
            delete hasMoreBefore._map[hasMoreBefore._array[num].id];
            num = num + 1;
            tmp = c0;
          } while (num < c0);
        }
        ({ _before, _array } = hasMoreBefore);
        _before.cache(_array.slice(0, tmp), !hasMoreBefore.hasMoreBefore);
        const _array1 = hasMoreBefore._array;
        hasMoreBefore._array = _array1.slice(tmp);
        hasMoreBefore.hasMoreBefore = true;
      }, flag);
    }
    return self2;
  }
  truncateBottom(metroImportDefault) {
    return this;
  }
  jumpToPresent(arg0) {
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
  }
  jumpToMessage(arg0) {
    let closure_4;
    let closure_5;
    let flash;
    let jumpTargetId;
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
        ANIMATED = flow_Client.JumpType.ANIMATED;
      }
      jumpSequenceId.jumpType = ANIMATED;
      jumpSequenceId.jumpTargetId = require;
      let num = 0;
      if (null != require) {
        num = 0;
        if (null != importAll) {
          num = importAll;
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
  }
  focusOnMessage(messageId) {
    const focusTargetId = messageId;
    return this.mutate((focusSequenceId) => {
      focusSequenceId.focusTargetId = focusTargetId;
      focusSequenceId.focusSequenceId = focusSequenceId.focusSequenceId + 1;
      focusSequenceId.ready = true;
      focusSequenceId.loadingMore = false;
    }, false);
  }
  loadFromCache(arg0, limit) {
    let closure_0 = arg0;
    let closure_1 = limit;
    return this.mutate((_before) => {
      const arr = closure_0 ? _before._before : _before._after;
      _before._merge(arr.extract(limit), closure_0);
      if (closure_0) {
        _before.hasMoreBefore = arr.length > 0 || !arr.wasAtEdge;
      } else {
        _before.hasMoreAfter = arr.length > 0 || !arr.wasAtEdge;
      }
      _before.ready = true;
      _before.loadingMore = false;
    }, true);
  }
  truncate(arg0, arg1) {
    const self = this;
    let self2 = this;
    if (this.length > hasOwnProperty) {
      let truncateBottomResult;
      const tmp = arg0;
      if (tmp) {
        truncateBottomResult = self.truncateBottom(metroImportDefault);
      } else {
        truncateBottomResult = self;
        if (arg1) {
          truncateBottomResult = self.truncateTop(metroImportDefault);
        }
      }
      self2 = truncateBottomResult;
    }
    return self2;
  }
  receiveMessage(nonce) {
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
            const obj4 = messageRecord1(5118);
            const messageRecord = obj4.createMessageRecord(nonce);
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
      let obj = messageRecord1(5118);
      messageRecord1 = obj.createMessageRecord(nonce);
      const lastResult = self.last();
      if (null != lastResult) {
        const obj5 = SnowflakeUtilsDefault;
        if (obj5.compare(nonce.id, lastResult.id) < 0) {
          const tmp8 = messageRecord1.state === constants.SENDING || messageRecord1.state === tmp18.SEND_FAILED;
          if (!tmp8) {
            const _array = self._array;
            if (!_array.some(isPending)) {
              let mutation;
              let truncateTopResult;
              const tmp16Result = EnsureReceivedMessagesAddedInOrderExperimentDefault;
              if (tmp16Result.getConfig({ location: "receiveMessage" }).enabled) {
                mutation = self.mutate((_map) => {
                  let _array;
                  let _array2;
                  _map._map[messageRecord1.id] = messageRecord1;
                  if (null != _map._map[messageRecord1.id]) {
                    ({ _array: _array2, _array } = _map);
                    _array[_array2.indexOf(_map._map[messageRecord1.id])] = messageRecord1;
                  } else {
                    let obj = SortedArrayUtilsAll;
                    obj.insert(_map._array, messageRecord1, (id, id2) => {
                      const obj = closure_1_1(closure_1_3[5]);
                      return obj.compare(id.id, id2.id);
                    });
                  }
                }, true);
              }
              if (flag) {
                truncateTopResult = mutation.truncateTop(closure_4, false);
              } else {
                truncateTopResult = mutation;
                if (self.length > closure_5) {
                  truncateTopResult = mutation.truncateBottom(closure_4, false);
                }
              }
              return truncateTopResult;
            }
          }
        }
      }
      const items = [messageRecord1];
      mutation = self.merge(items);
    }
  }
  receivePushNotification(message, isConnectedResult) {
    const self = this;
    let value = null;
    if (null != message.nonce) {
      value = self.get(message.nonce, true);
    }
    if (null != value) {
      return self;
    } else if (null != self.get(message.id, true)) {
      return self;
    } else {
      const obj = IOSPushNotificationRawPayloadFixExperiment;
      const result = obj.isIOSPushNotificationRawPayloadFixExperimentEnabled();
      let tmp5 = !result;
      if (result) {
        tmp5 = !isConnectedResult;
      }
      const obj2 = { ready: true, cached: tmp5 };
      const mutation = self.mutate(obj2);
      const merge = mutation.merge;
      const items = [mergeMessage(self, message)];
      return merge(items);
    }
  }
  receiveReactionInAppNotification(nonce) {
    const self = this;
    let value = null;
    if (null != nonce.nonce) {
      value = self.get(nonce.nonce, true);
    }
    let mergeResult = self;
    if (null == value) {
      const mutation = self.mutate({ ready: true, cached: true });
      const merge = mutation.merge;
      const items = [mergeMessage(self, nonce)];
      mergeResult = merge(items);
    }
    return mergeResult;
  }
  loadStart(jump) {
    let flag;
    let messageId;
    let num;
    let onJumpComplete;
    let returnMessageId;
    const self = this;
    const obj = { loadingMore: true, jumped: null != jump, jumpedToPresent: flag, jumpTargetId: messageId, jumpTargetOffset: num, jumpReturnTargetId: returnMessageId, onJumpComplete, ready: null == jump && self.ready };
    flag = undefined;
    const mutate = this.mutate;
    if (jump != null) {
      flag = jump.present;
    }
    if (flag == null) {
      flag = false;
    }
    messageId = undefined;
    if (jump != null) {
      messageId = jump.messageId;
    }
    if (messageId == null) {
      messageId = null;
    }
    num = undefined;
    if (jump != null) {
      num = jump.offset;
    }
    if (num == null) {
      num = 0;
    }
    returnMessageId = undefined;
    if (jump != null) {
      returnMessageId = jump.returnMessageId;
    }
    if (returnMessageId == null) {
      returnMessageId = null;
    }
    onJumpComplete = undefined;
    if (jump != null) {
      onJumpComplete = jump.onJumpComplete;
    }
    if (onJumpComplete == null) {
      onJumpComplete = null;
    }
    return mutate(obj);
  }
  loadComplete(newMessages) {
    let flag8;
    let flag9;
    let id;
    let mergeResult;
    let messageId;
    let num;
    let requestStartTime;
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
    let obj = requestStartTime(12)(items);
    const reversed = obj.reverse();
    const iter = reversed.map((item) => {
      const obj = id(dependencyMap[2]);
      return obj.createMessageRecord(item);
    });
    const valueResult = iter.value();
    if (flag) {
      if (null == jump) {
        if (self.ready) {
          mergeResult = self.merge(valueResult, flag, true);
        }
        let jumpType;
        const mutate = mergeResult.mutate;
        if (jump != null) {
          jumpType = jump.jumpType;
        }
        if (jumpType == null) {
          jumpType = id(4793).JumpType.ANIMATED;
        }
        let obj2 = { ready: true, loadingMore: false, jumpType, jumpFlash: flag8, jumped: null != jump, jumpedToPresent: flag9, jumpTargetId: messageId, jumpTargetOffset: num, jumpSequenceId: null, jumpReturnTargetId: null, onJumpComplete: null, hasMoreBefore: null, hasMoreAfter: null, cached: null, hasFetched: null, error: false, initialScrollSequenceId: null, suppressRowAnimationSequenceId: null };
        flag8 = undefined;
        if (jump != null) {
          flag8 = jump.flash;
        }
        if (flag8 == null) {
          flag8 = false;
        }
        flag9 = undefined;
        if (jump != null) {
          flag9 = jump.present;
        }
        if (flag9 == null) {
          flag9 = false;
        }
        messageId = undefined;
        if (jump != null) {
          messageId = jump.messageId;
        }
        if (messageId == null) {
          messageId = null;
        }
        num = 0;
        if (null != jump) {
          num = 0;
          if (null != jump.messageId) {
            num = 0;
            if (null != jump.offset) {
              num = jump.offset;
            }
          }
        }
        if (null != jump) {
          let jumpSequenceId;
          let sum;
          let sum1;
          if (!flag5) {
            jumpSequenceId = mergeResult.jumpSequenceId + 1;
          }
          obj2.jumpSequenceId = jumpSequenceId;
          let returnMessageId;
          if (jump != null) {
            returnMessageId = jump.returnMessageId;
          }
          if (returnMessageId == null) {
            returnMessageId = null;
          }
          obj2.jumpReturnTargetId = returnMessageId;
          let onJumpComplete;
          if (jump != null) {
            onJumpComplete = jump.onJumpComplete;
          }
          if (onJumpComplete == null) {
            onJumpComplete = null;
          }
          obj2.onJumpComplete = onJumpComplete;
          let hasMoreBefore = flag3;
          if (null == jump) {
            hasMoreBefore = flag3;
            if (flag2) {
              hasMoreBefore = mergeResult.hasMoreBefore;
            }
          }
          obj2.hasMoreBefore = hasMoreBefore;
          let hasMoreAfter = flag4;
          if (null == jump) {
            hasMoreAfter = flag4;
            if (flag) {
              hasMoreAfter = mergeResult.hasMoreAfter;
            }
          }
          obj2.hasMoreAfter = hasMoreAfter;
          obj2.cached = flag6;
          obj2.hasFetched = newMessages.hasFetched;
          const initialScrollSequenceId = mergeResult.initialScrollSequenceId;
          if (!flag6 && mergeResult.cached && !flag5) {
            sum = initialScrollSequenceId + 1;
          } else {
            sum = initialScrollSequenceId;
          }
          obj2.initialScrollSequenceId = sum;
          const suppressRowAnimationSequenceId = mergeResult.suppressRowAnimationSequenceId;
          if (!flag6 && mergeResult.cached && !flag5) {
            sum1 = suppressRowAnimationSequenceId + 1;
          } else {
            sum1 = suppressRowAnimationSequenceId;
          }
          obj2.suppressRowAnimationSequenceId = sum1;
          return mutate(obj2);
        }
        jumpSequenceId = mergeResult.jumpSequenceId;
      }
    }
    const _array = self._array;
    const found = _array.filter((state) => state.state === constants.SENDING);
    const _array1 = self._array;
    const found1 = _array1.filter((state) => state.state === constants.SEND_FAILED);
    id = undefined;
    if (valueResult[valueResult.length - 1] != null) {
      id = tmp3.id;
    }
    requestStartTime = newMessages.requestStartTime;
    if (null != id) {
      let found2;
      if (null != requestStartTime) {
        const _array2 = self._array;
        found2 = _array2.filter((state) => {
          let tmp = state.state === metroImportAll.SENT;
          if (tmp) {
            const obj = SnowflakeUtilsDefault;
            tmp = obj.compare(state.id, id) > 0;
          }
          if (tmp) {
            const obj2 = SnowflakeUtilsDefault;
            tmp = obj2.extractTimestamp(state.id) >= requestStartTime;
          }
          return tmp;
        });
      }
      const tmp5 = found.length > 0 || found1.length > 0 || found2.length > 0;
      const resetResult = self.reset(valueResult);
      if (tmp5) {
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
                if (found2.length > 0) {
                  const _HermesInternal = HermesInternal;
                  logger.info("loadComplete: merging with " + found2.length + " message(s) received during the fetch for channelId=" + self.channelId);
                  mergeResult1 = resetResult.merge(found2);
                }
                let mergeResult2 = mergeResult1;
                if (found1.length > 0) {
                  const _HermesInternal2 = HermesInternal;
                  logger.info("loadComplete: merging with SEND_FAILED messages for channelId=" + self.channelId);
                  mergeResult2 = mergeResult1.merge(found1);
                }
                mergeResult = mergeResult2;
                if (found.length > 0) {
                  const _HermesInternal4 = HermesInternal;
                  logger.info("loadComplete: merging with SENDING messages for channelId=" + self.channelId);
                  mergeResult = mergeResult2.merge(found);
                }
              }
            }
          }
        }
      }
      const _HermesInternal3 = HermesInternal;
      logger.info("loadComplete: resetting state for channelId=" + self.channelId + ", sending.length=" + found.length);
      mergeResult = resetResult;
    }
    found2 = [];
  }
  addCachedMessages(messages, stale) {
    let reversed;
    let sum;
    const self = this;
    let obj = reversed(5442);
    const result = obj.requireSortedDescending(messages);
    const mapped = messages.map((item) => mergeMessage(self, item));
    reversed = mapped.reverse();
    const _array = this._array;
    const found = _array.filter((item) => {
      let closure_0 = item;
      return !reversed.some((id) => id.id === id.id);
    });
    const found1 = found.filter((state) => !(state.state === constants.SENDING || state.state === tmp.SEND_FAILED));
    const item = found1.forEach((item) => {
      let obj = SortedArrayUtilsAll;
      return obj.insert(reversed, item, (id, id2) => {
        const obj = self(closure_1_3[5]);
        return obj.compare(id.id, id2.id);
      });
    });
    const items = [...found.filter(isPending)];
    reversed.push.apply(items);
    const initialScrollSequenceId = self.initialScrollSequenceId;
    const obj2 = { ready: true, cached: stale, error: false, initialScrollSequenceId: sum };
    const tmp4 = !stale && self.cached;
    const mutate = self.reset(reversed).mutate;
    self.reset(reversed);
    if (tmp4) {
      sum = initialScrollSequenceId + 1;
    } else {
      sum = initialScrollSequenceId;
    }
    return mutate(obj2);
  }
}
Object.defineProperty(ChannelMessages.prototype, "length", {
  get: function length() {
    return this._array.length;
  },
  set: undefined
});
ChannelMessages._channelMessages = {};
let result = size.fileFinishedImporting("lib/ChannelMessages.tsx");

export default ChannelMessages;
export const flatMapChannelMessages = function flatMapChannelMessages(arr) {
  return arr.flatMap((_array) => _array._array);
};