// === Module 6098: _enqueue ===

// Module 6098 (_enqueue)
import set5 from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import ME2 from "ME" /* 676 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1912 */;
import resetDefault from "reset" /* 6099 */;
import reset from "reset" /* 6100 */;
import resetDefault2 from "reset" /* 6100 */;
import resetDefault3 from "reset" /* 6101 */;

const ME = ME2.ME;
const result = set5.fileFinishedImporting("lib/guild/GuildSubscriptions.tsx");
class GuildSubscriptions {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp2 = new require("reset")((guildId, members) => {
      obj = { members };
      return obj._enqueue(guildId, obj);
    });
    obj._members = tmp2;
    tmp3 = new require("reset")((guildId, channels) => {
      obj = { channels };
      return obj._enqueue(guildId, obj);
    });
    obj._channels = tmp3;
    tmp4 = new require("reset")((guildId, thread_member_lists) => {
      obj = { thread_member_lists };
      return obj._enqueue(guildId, obj);
    });
    obj._threadMemberLists = tmp4;
    set = new Set();
    obj._typing = set;
    set1 = new Set();
    obj._threads = set1;
    set2 = new Set();
    obj._activities = set2;
    set3 = new Set();
    obj._memberUpdates = set3;
    set4 = new Set();
    obj._subscribed = set4;
    obj._pending = {};
    delayedCall = new require("start").DelayedCall(0, () => obj.flush());
    obj._flush = delayedCall;
    obj._onChange = global;
    return obj;
  }
}
const prototype = GuildSubscriptions.prototype;
prototype["_enqueue"] = function _enqueue(guildId, arg1) {
  const merged = Object.assign(this._pending[guildId]);
  const merged1 = Object.assign(arg1);
  this._pending[guildId] = {};
  const _flush = this._flush;
  _flush.delay();
};
prototype["reset"] = function reset() {
  const _subscribed = this._subscribed;
  _subscribed.clear();
  this._pending = {};
  const _members = this._members;
  _members.reset();
  const _memberUpdates = this._memberUpdates;
  _memberUpdates.clear();
  const _channels = this._channels;
  _channels.reset();
  const _threadMemberLists = this._threadMemberLists;
  _threadMemberLists.reset();
  const _typing = this._typing;
  _typing.clear();
  const _threads = this._threads;
  _threads.clear();
  const _activities = this._activities;
  _activities.clear();
};
prototype["get"] = function get(arg0) {
  ({ _typing, _threads, _activities, _members, _memberUpdates, _channels, _threadMemberLists } = this);
  return { typing: _typing.has(arg0), threads: _threads.has(arg0), activities: _activities.has(arg0), members: _members.get(arg0), member_updates: _memberUpdates.has(arg0), channels: _channels.get(arg0), thread_member_lists: _threadMemberLists.get(arg0) };
};
prototype["getSubscribedThreadIds"] = function getSubscribedThreadIds() {
  const _threadMemberLists = this._threadMemberLists;
  return _threadMemberLists.getSubscribedThreadIds();
};
prototype["isSubscribedToThreads"] = function isSubscribedToThreads(arg0) {
  const _threads = this._threads;
  return _threads.has(arg0);
};
prototype["isSubscribedToAnyMember"] = function isSubscribedToAnyMember(arg0) {
  const _members = this._members;
  let flag = _members.isSubscribedToAnyMember(arg0);
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isSubscribedToMemberUpdates"] = function isSubscribedToMemberUpdates(arg0) {
  let flag = this.get(arg0).member_updates;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["forEach"] = function forEach(arg0) {
  const _subscribed = this._subscribed;
  const item = _subscribed.forEach(arg0);
};
prototype["clearWithoutFlushing"] = function clearWithoutFlushing(id, c0) {
  const self = this;
  let hasItem = !c0;
  if (!c0) {
    const _threads = self._threads;
    hasItem = _threads.has(id);
  }
  if (!hasItem) {
    const _subscribed = self._subscribed;
    _subscribed.delete(id);
  }
  delete tmp2[tmp];
  const _members = self._members;
  _members.clear(id);
  const _channels = self._channels;
  _channels.clear(id);
  const _threadMemberLists = self._threadMemberLists;
  _threadMemberLists.clear(id);
  const _typing = self._typing;
  _typing.delete(id);
  const _memberUpdates = self._memberUpdates;
  _memberUpdates.delete(id);
  if (c0) {
    const _threads2 = self._threads;
    _threads2.delete(id);
  }
  const _activities = self._activities;
  _activities.delete(id);
};
prototype["flush"] = function flush() {
  const self = this;
  const item = applyDefault.forEach(this._pending, (arg0, arg1) => {
    const _subscribed = self._subscribed;
    _subscribed.add(arg1);
  });
  this._onChange(this._pending);
  this._pending = {};
};
prototype["subscribeUser"] = function subscribeUser(closure_0, userId) {
  let tmp = null != closure_0;
  if (tmp) {
    tmp = "null" !== closure_0;
  }
  if (tmp) {
    tmp = closure_0 !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== closure_0;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(closure_0);
    const obj = getFavoritesAwareGuildName;
  }
  if (tmp) {
    const self = this;
    const _members = this._members;
    const subscription = _members.subscribe(closure_0, userId);
  }
};
prototype["unsubscribeUser"] = function unsubscribeUser(closure_0, userId) {
  let tmp = null != closure_0;
  if (tmp) {
    tmp = "null" !== closure_0;
  }
  if (tmp) {
    tmp = closure_0 !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== closure_0;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(closure_0);
    const obj = getFavoritesAwareGuildName;
  }
  if (tmp) {
    const self = this;
    const _members = this._members;
    _members.unsubscribe(closure_0, userId);
  }
};
prototype["subscribeChannel"] = function subscribeChannel(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = "null" !== guildId;
  }
  if (tmp) {
    tmp = guildId !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guildId;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
    const obj = getFavoritesAwareGuildName;
  }
  let subscription = tmp;
  if (subscription) {
    const self = this;
    const _channels = this._channels;
    subscription = _channels.subscribe(guildId, arg1, arg2);
  }
  return subscription;
};
prototype["subscribeToMemberUpdates"] = function subscribeToMemberUpdates(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = "null" !== guildId;
  }
  if (tmp) {
    tmp = guildId !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guildId;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
    const obj = getFavoritesAwareGuildName;
  }
  if (tmp) {
    const self = this;
    this._enqueue(guildId, { member_updates: true });
    const _memberUpdates = this._memberUpdates;
    _memberUpdates.add(guildId);
  } else {
    return false;
  }
};
prototype["unsubscribeFromMemberUpdates"] = function unsubscribeFromMemberUpdates(guildId) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = "null" !== guildId;
  }
  if (tmp) {
    tmp = guildId !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guildId;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
    const obj = getFavoritesAwareGuildName;
  }
  if (tmp) {
    const self = this;
    this._enqueue(guildId, { member_updates: false });
  } else {
    return false;
  }
};
prototype["subscribeThreadMemberList"] = function subscribeThreadMemberList(guildId, channelId, channelId2) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = "null" !== guildId;
  }
  if (tmp) {
    tmp = guildId !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guildId;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
    const obj = getFavoritesAwareGuildName;
  }
  let subscription = tmp;
  if (subscription) {
    const self = this;
    const _threadMemberLists = this._threadMemberLists;
    subscription = _threadMemberLists.subscribe(guildId, channelId, channelId2);
  }
  return subscription;
};
prototype["unsubscribeThreadMemberList"] = function unsubscribeThreadMemberList(guild_id, id) {
  let tmp = null != guild_id;
  if (tmp) {
    tmp = "null" !== guild_id;
  }
  if (tmp) {
    tmp = guild_id !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guild_id;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guild_id);
    const obj = getFavoritesAwareGuildName;
  }
  let unsubscribeResult = tmp;
  if (unsubscribeResult) {
    const self = this;
    const _threadMemberLists = this._threadMemberLists;
    unsubscribeResult = _threadMemberLists.unsubscribe(guild_id, id);
  }
  return unsubscribeResult;
};
prototype["subscribeToGuild"] = function subscribeToGuild(guildId) {
  this._subscribeToFeature(guildId, this._typing, { typing: true });
  this._subscribeToFeature(guildId, this._activities, { activities: true });
  this._subscribeToFeature(guildId, this._threads, { threads: true });
};
prototype["_subscribeToFeature"] = function _subscribeToFeature(guildId, _activities, arg2) {
  let tmp = null != guildId;
  if (tmp) {
    tmp = "null" !== guildId;
  }
  if (tmp) {
    tmp = guildId !== ME;
  }
  if (tmp) {
    tmp = "undefined" !== guildId;
  }
  if (tmp) {
    tmp = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
    const obj = getFavoritesAwareGuildName;
  }
  if (tmp) {
    if (!_activities.has(guildId)) {
      const self = this;
      _activities.add(guildId);
      this._enqueue(guildId, arg2);
    }
  }
};

export default GuildSubscriptions;
export const MINIMUM_RANGE = reset.MINIMUM_RANGE;
export const DEFAULT_RANGES = reset.DEFAULT_RANGES;