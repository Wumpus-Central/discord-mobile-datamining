import ensureGuildLoaded from "ensureGuildLoaded";
import keys from "keys";
import set from "set";

const require = arg1;
let set = new Set();
let obj = { layoutType: require("set").ForumLayout.LIST, sortOrder: require("set").ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: require("set").ThreadSearchTagSetting.MATCH_SOME };
let closure_6 = function ForumChannelStoreState(set, get) {
  const obj = Object.create(new.target.prototype);
  obj.channelStates = {};
  obj.setChannelState = function setChannelState(channelId, arg1) {
    const value = obj.get();
    const channelState = obj.getChannelState(channelId);
    obj = {};
    const merged = Object.assign(value.channelStates);
    obj = {};
    const merged1 = Object.assign(channelState);
    const merged2 = Object.assign(arg1);
    obj[channelId] = obj;
    obj(outer1_2[4]).batchUpdates(() => {
      obj = { channelStates: obj };
      return obj.set(obj);
    });
  };
  obj.getChannelState = function getChannelState(channelId) {
    if (null == channelId) {
      return outer1_5;
    } else {
      let tmp6 = obj.get().channelStates[channelId];
      if (null == tmp6) {
        const channel = outer1_3.getChannel(channelId);
        outer1_1(outer1_2[5])(null != channel, "[Forum Channel Store] The channel should not be missing.");
        obj = { layoutType: null, sortOrder: null, tagFilter: null, tagSetting: null };
        obj[0] = channel.getDefaultLayout();
        obj[1] = channel.getDefaultSortOrder();
        obj[2] = outer1_4;
        obj[3] = channel.getDefaultTagSetting();
        tmp6 = obj;
      }
      return tmp6;
    }
  };
  obj.toggleTagFilter = function toggleTagFilter(channelId) {
    const set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = function setTagFilter(id, first) {
    const obj = { tagFilter: first };
    obj.setChannelState(id, obj);
    outer1_1(outer1_2[6]).setFilterTagIds(first);
  };
  obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
    const obj = { sortOrder };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setSortOrder(sortOrder);
  };
  obj.setLayoutType = function setLayoutType(channelId, layoutType) {
    const obj = { layoutType };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setLayout(layoutType);
  };
  obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
    const obj = { tagSetting };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setTagSetting(tagSetting);
  };
  obj.set = set;
  obj.get = get;
  return obj;
}.prototype;
let closure_7 = keys.create((set, get) => {
  if (typeof closure_6 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(closure_6.prototype);
  obj.channelStates = {};
  obj.setChannelState = function setChannelState(channelId, arg1) {
    const value = obj.get();
    const channelState = obj.getChannelState(channelId);
    obj = {};
    const merged = Object.assign(value.channelStates);
    obj = {};
    const merged1 = Object.assign(channelState);
    const merged2 = Object.assign(arg1);
    obj[channelId] = obj;
    obj(outer1_2[4]).batchUpdates(() => {
      obj = { channelStates: obj };
      return obj.set(obj);
    });
  };
  obj.getChannelState = function getChannelState(channelId) {
    if (null == channelId) {
      return outer1_5;
    } else {
      let tmp6 = obj.get().channelStates[channelId];
      if (null == tmp6) {
        const channel = outer1_3.getChannel(channelId);
        outer1_1(outer1_2[5])(null != channel, "[Forum Channel Store] The channel should not be missing.");
        obj = { layoutType: null, sortOrder: null, tagFilter: null, tagSetting: null };
        obj[0] = channel.getDefaultLayout();
        obj[1] = channel.getDefaultSortOrder();
        obj[2] = outer1_4;
        obj[3] = channel.getDefaultTagSetting();
        tmp6 = obj;
      }
      return tmp6;
    }
  };
  obj.toggleTagFilter = function toggleTagFilter(channelId) {
    const set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = function setTagFilter(id, first) {
    const obj = { tagFilter: first };
    obj.setChannelState(id, obj);
    outer1_1(outer1_2[6]).setFilterTagIds(first);
  };
  obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
    const obj = { sortOrder };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setSortOrder(sortOrder);
  };
  obj.setLayoutType = function setLayoutType(channelId, layoutType) {
    const obj = { layoutType };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setLayout(layoutType);
  };
  obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
    const obj = { tagSetting };
    obj.setChannelState(channelId, obj);
    outer1_1(outer1_2[6]).setTagSetting(tagSetting);
  };
  obj.set = set;
  obj.get = get;
  return obj;
});
const result = set.fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  const _require = parent_id;
  const obj = callback();
  const items = [ensureGuildLoaded];
  if (null == obj2.useStateFromStores(items, () => outer1_3.getChannel(closure_0))) {
    let channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_7;
}