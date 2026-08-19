// === Module 11177: set ===

// Module 11177 (set)
import _modDef38 from "module_38" /* 38 */;
import setFilterTagIdsDefault from "setFilterTagIds" /* 7519 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import keys from "keys" /* 644 */;

const require = fn;
let set = new Set();
let obj = { layoutType: require("set").ForumLayout.LIST, sortOrder: require("set").ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: require("set").ThreadSearchTagSetting.MATCH_SOME };
let closure_6 = function ForumChannelStoreState(set, get) {
  obj = Object.create(new.target.prototype);
  obj.channelStates = {};
  obj.setChannelState = function setChannelState(channelId, arg1) {
    const value = obj.get();
    const channelState = obj.getChannelState(channelId);
    const merged = Object.assign(value.channelStates);
    obj = {};
    const merged1 = Object.assign(channelState);
    const merged2 = Object.assign(arg1);
    obj[channelId] = obj;
    obj(dependencyMap[4]).batchUpdates(() => {
      obj = { channelStates: obj };
      return obj.set(obj);
    });
  };
  obj.getChannelState = function getChannelState(channelId) {
    if (null == channelId) {
      return closure_1_5;
    } else {
      let tmp6 = obj.get().channelStates[channelId];
      if (null == tmp6) {
        const channel = closure_1_3.getChannel(channelId);
        _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
        obj = { layoutType: null, sortOrder: null, tagFilter: null, tagSetting: null };
        obj[0] = channel.getDefaultLayout();
        obj[1] = channel.getDefaultSortOrder();
        obj[2] = set;
        obj[3] = channel.getDefaultTagSetting();
        tmp6 = obj;
      }
      return tmp6;
    }
  };
  obj.toggleTagFilter = function toggleTagFilter(channelId) {
    set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = function setTagFilter(id, set) {
    obj = { tagFilter: set };
    obj.setChannelState(id, obj);
    setFilterTagIdsDefault.setFilterTagIds(set);
  };
  obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
    obj = { sortOrder };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setSortOrder(sortOrder);
  };
  obj.setLayoutType = function setLayoutType(channelId, c7) {
    obj = { layoutType: c7 };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setLayout(c7);
  };
  obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
    obj = { tagSetting };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setTagSetting(tagSetting);
  };
  obj.set = set;
  obj.get = get;
  return obj;
}.prototype;
let closure_7 = keys.create((set, get) => {
  if (typeof ctor !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(ctor.prototype);
  obj.channelStates = {};
  obj.setChannelState = function setChannelState(channelId, arg1) {
    const value = obj.get();
    const channelState = obj.getChannelState(channelId);
    const merged = Object.assign(value.channelStates);
    obj = {};
    const merged1 = Object.assign(channelState);
    const merged2 = Object.assign(arg1);
    obj[channelId] = obj;
    obj(dependencyMap[4]).batchUpdates(() => {
      obj = { channelStates: obj };
      return obj.set(obj);
    });
  };
  obj.getChannelState = function getChannelState(channelId) {
    if (null == channelId) {
      return closure_1_5;
    } else {
      let tmp6 = obj.get().channelStates[channelId];
      if (null == tmp6) {
        const channel = closure_1_3.getChannel(channelId);
        _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
        obj = { layoutType: null, sortOrder: null, tagFilter: null, tagSetting: null };
        obj[0] = channel.getDefaultLayout();
        obj[1] = channel.getDefaultSortOrder();
        obj[2] = set;
        obj[3] = channel.getDefaultTagSetting();
        tmp6 = obj;
      }
      return tmp6;
    }
  };
  obj.toggleTagFilter = function toggleTagFilter(channelId) {
    set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = function setTagFilter(id, set) {
    obj = { tagFilter: set };
    obj.setChannelState(id, obj);
    setFilterTagIdsDefault.setFilterTagIds(set);
  };
  obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
    obj = { sortOrder };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setSortOrder(sortOrder);
  };
  obj.setLayoutType = function setLayoutType(channelId, c7) {
    obj = { layoutType: c7 };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setLayout(c7);
  };
  obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
    obj = { tagSetting };
    obj.setChannelState(channelId, obj);
    setFilterTagIdsDefault.setTagSetting(tagSetting);
  };
  obj.set = set;
  obj.get = get;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  const _require = parent_id;
  obj = callback();
  const items = [closure_3];
  if (null == obj2.useStateFromStores(items, () => closure_1_3.getChannel(closure_0))) {
    let channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_7;
}