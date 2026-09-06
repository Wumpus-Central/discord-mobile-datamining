// discord_app/lib/guild/GuildSubscriptions.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import Constants from "../../Constants.tsx";
import FavoritesUtils from "../../modules/favorites/FavoritesUtils.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import GuildMemberSubscriptionsDefault from "GuildMemberSubscriptions.tsx";
import GuildChannelSubscriptions from "GuildChannelSubscriptions.tsx";
import GuildThreadSubscriptionsDefault from "GuildThreadSubscriptions.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ME = Constants.ME;
const result = size.fileFinishedImporting("lib/guild/GuildSubscriptions.tsx");
class GuildSubscriptions {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp2 = new closure_1(closure_2[2])((guildId, members) => {
      obj = { members };
      return obj._enqueue(guildId, obj);
    });
    obj._members = tmp2;
    tmp3 = new closure_1(closure_2[3])((guildId, channels) => {
      obj = { channels };
      return obj._enqueue(guildId, obj);
    });
    obj._channels = tmp3;
    tmp4 = new closure_1(closure_2[4])((guildId, thread_member_lists) => {
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
    delayedCall = new closure_0(closure_2[5]).DelayedCall(0, () => obj.flush());
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
  const obj = {
    typing: null,
    threads: null,
    activities: null,
    members: null,
    member_updates: null,
    channels: null,
    thread_member_lists: null,
  };
  const _typing = this._typing;
  obj.typing = _typing.has(arg0);
  const _threads = this._threads;
  obj.threads = _threads.has(arg0);
  const _activities = this._activities;
  obj.activities = _activities.has(arg0);
  const _members = this._members;
  obj.members = _members.get(arg0);
  const _memberUpdates = this._memberUpdates;
  obj.member_updates = _memberUpdates.has(arg0);
  const _channels = this._channels;
  obj.channels = _channels.get(arg0);
  const _threadMemberLists = this._threadMemberLists;
  obj.thread_member_lists = _threadMemberLists.get(arg0);
  return obj;
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
  const item = _modDef12.forEach(this._pending, (arg0, arg1) => {
    const _subscribed = self._subscribed;
    _subscribed.add(arg1);
  });
  this._onChange(this._pending);
  this._pending = {};
};
prototype["subscribeUser"] = function subscribeUser(guildId, userId) {
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
  }
  if (tmp) {
    const self = this;
    const _members = this._members;
    const subscription = _members.subscribe(guildId, userId);
  }
};
prototype["unsubscribeUser"] = function unsubscribeUser(guildId, userId) {
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
  }
  if (tmp) {
    const self = this;
    const _members = this._members;
    _members.unsubscribe(guildId, userId);
  }
};
prototype["subscribeChannel"] = function subscribeChannel(guildId, arg1, arg2) {
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guild_id);
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
    tmp = !FavoritesUtils.isFavoritesGuildId(guildId);
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
export const MINIMUM_RANGE = GuildChannelSubscriptions.MINIMUM_RANGE;
export const DEFAULT_RANGES = GuildChannelSubscriptions.DEFAULT_RANGES;
