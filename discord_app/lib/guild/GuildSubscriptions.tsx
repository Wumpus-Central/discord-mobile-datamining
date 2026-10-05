// === Module 6787: GuildSubscriptions ===

// Module 6787 (GuildSubscriptions)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import Timers from "Timers" /* 2046 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import GuildMemberSubscriptionsDefault from "GuildMemberSubscriptions" /* 6788 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 6789 */;
import GuildThreadSubscriptionsDefault from "GuildThreadSubscriptions" /* 6790 */;
import size from "module_2" /* 2 */;

const GuildChannelSubscriptionsDefault = GuildChannelSubscriptions;

const ME = Constants.ME;
const result = size.fileFinishedImporting("lib/guild/GuildSubscriptions.tsx");
class GuildSubscriptions {
  constructor(_onChange) {
    const f93277 = (guildId1, members) => {
      obj = { members };
      return obj._enqueue(guildId1, obj);
    };
    const f93278 = (guildId1, channels) => {
      obj = { channels };
      return obj._enqueue(guildId1, obj);
    };
    const f93279 = (guildId1, thread_member_lists) => {
      obj = { thread_member_lists };
      return obj._enqueue(guildId1, obj);
    };
    let obj = Object.create(new.target.prototype);
    obj._members = new GuildMemberSubscriptionsDefault(f93277);
    new GuildMemberSubscriptionsDefault(f93277);
    obj._channels = new GuildChannelSubscriptionsDefault(f93278);
    new GuildChannelSubscriptionsDefault(f93278);
    obj._threadMemberLists = new GuildThreadSubscriptionsDefault(f93279);
    new GuildThreadSubscriptionsDefault(f93279);
    obj._typing = new Set();
    new Set();
    obj._threads = new Set();
    new Set();
    obj._activities = new Set();
    new Set();
    obj._memberUpdates = new Set();
    new Set();
    obj._subscribed = new Set();
    obj._pending = {};
    new Set();
    const delayedCall = new Timers.DelayedCall(0, () => obj.flush());
    obj._flush = delayedCall;
    obj._onChange = _onChange;
    return obj;
  }
  _enqueue(guildId1, arg1) {
    const _pending = this._pending;
    const obj = {};
    const merged = Object.assign(this._pending[guildId1]);
    const merged1 = Object.assign(arg1);
    _pending[guildId1] = obj;
    const _flush = this._flush;
    _flush.delay();
  }
  reset() {
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
  }
  get(arg0) {
    let _activities;
    let _channels;
    let _memberUpdates;
    let _members;
    let _threadMemberLists;
    let _threads;
    let _typing;
    const obj = { typing: _typing.has(arg0), threads: _threads.has(arg0), activities: _activities.has(arg0), members: _members.get(arg0), member_updates: _memberUpdates.has(arg0), channels: _channels.get(arg0), thread_member_lists: _threadMemberLists.get(arg0) };
    _typing = this._typing;
    _threads = this._threads;
    _activities = this._activities;
    _members = this._members;
    _memberUpdates = this._memberUpdates;
    _channels = this._channels;
    _threadMemberLists = this._threadMemberLists;
    return obj;
  }
  getSubscribedThreadIds() {
    const _threadMemberLists = this._threadMemberLists;
    return _threadMemberLists.getSubscribedThreadIds();
  }
  isSubscribedToThreads(arg0) {
    const _threads = this._threads;
    return _threads.has(arg0);
  }
  isSubscribedToAnyMember(arg0) {
    const _members = this._members;
    let flag = _members.isSubscribedToAnyMember(arg0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isSubscribedToMemberUpdates(arg0) {
    let flag = this.get(arg0).member_updates;
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  forEach(arg0) {
    const _subscribed = this._subscribed;
    const item = _subscribed.forEach(arg0);
  }
  clearWithoutFlushing(id, c0) {
    const self = this;
    let hasItem = !c0;
    const tmp = id;
    if (!c0) {
      const _threads = self._threads;
      hasItem = _threads.has(id);
    }
    if (!hasItem) {
      const _subscribed = self._subscribed;
      _subscribed.delete(id);
    }
    delete self._pending[tmp];
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
  }
  flush() {
    const self = this;
    const arr = _modDef12;
    const item = arr.forEach(this._pending, (arg0, arg1) => {
      const _subscribed = self._subscribed;
      _subscribed.add(arg1);
    });
    this._onChange(this._pending);
    this._pending = {};
  }
  subscribeUser(guildId, userId) {
    let tmp = null != guildId && "null" !== guildId && guildId !== ME && "undefined" !== guildId;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId);
    }
    if (tmp) {
      const self = this;
      const _members = this._members;
      const subscription = _members.subscribe(guildId, userId);
    }
  }
  unsubscribeUser(guildId, userId) {
    let tmp = null != guildId && "null" !== guildId && guildId !== ME && "undefined" !== guildId;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId);
    }
    if (tmp) {
      const self = this;
      const _members = this._members;
      _members.unsubscribe(guildId, userId);
    }
  }
  subscribeChannel(guildId, arg1, arg2) {
    let tmp = null != guildId && "null" !== guildId && guildId !== ME && "undefined" !== guildId;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId);
    }
    let subscription = tmp;
    if (subscription) {
      const self = this;
      const _channels = this._channels;
      subscription = _channels.subscribe(guildId, arg1, arg2);
    }
    return subscription;
  }
  subscribeToMemberUpdates(guildId) {
    let tmp = null != guildId && "null" !== guildId && guildId !== ME && "undefined" !== guildId;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId);
    }
    if (tmp) {
      const self = this;
      this._enqueue(guildId, { member_updates: true });
      const _memberUpdates = this._memberUpdates;
      _memberUpdates.add(guildId);
    } else {
      return false;
    }
  }
  unsubscribeFromMemberUpdates(guildId) {
    let tmp = null != guildId && "null" !== guildId && guildId !== ME && "undefined" !== guildId;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId);
    }
    if (tmp) {
      const self = this;
      this._enqueue(guildId, { member_updates: false });
    } else {
      return false;
    }
  }
  subscribeThreadMemberList(guildId1, channelId, channelId2) {
    let tmp = null != guildId1 && "null" !== guildId1 && guildId1 !== ME && "undefined" !== guildId1;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId1);
    }
    let subscription = tmp;
    if (subscription) {
      const self = this;
      const _threadMemberLists = this._threadMemberLists;
      subscription = _threadMemberLists.subscribe(guildId1, channelId, channelId2);
    }
    return subscription;
  }
  unsubscribeThreadMemberList(guild_id, id) {
    let tmp = null != guild_id && "null" !== guild_id && guild_id !== ME && "undefined" !== guild_id;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guild_id);
    }
    let unsubscribeResult = tmp;
    if (unsubscribeResult) {
      const self = this;
      const _threadMemberLists = this._threadMemberLists;
      unsubscribeResult = _threadMemberLists.unsubscribe(guild_id, id);
    }
    return unsubscribeResult;
  }
  subscribeToGuild(guildId1) {
    this._subscribeToFeature(guildId1, this._typing, { typing: true });
    this._subscribeToFeature(guildId1, this._activities, { activities: true });
    this._subscribeToFeature(guildId1, this._threads, { threads: true });
  }
  _subscribeToFeature(guildId1, _activities, arg2) {
    let tmp = null != guildId1 && "null" !== guildId1 && guildId1 !== ME && "undefined" !== guildId1;
    if (tmp) {
      const obj = FavoritesUtils;
      tmp = !obj.isFavoritesGuildId(guildId1);
    }
    if (tmp) {
      if (!_activities.has(guildId1)) {
        const self = this;
        _activities.add(guildId1);
        this._enqueue(guildId1, arg2);
      }
    }
  }
}
const prototype = GuildSubscriptions.prototype;

export default GuildSubscriptions;
export const MINIMUM_RANGE = GuildChannelSubscriptions.MINIMUM_RANGE;
export const DEFAULT_RANGES = GuildChannelSubscriptions.DEFAULT_RANGES;