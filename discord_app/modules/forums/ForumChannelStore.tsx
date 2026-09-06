// discord_app/modules/forums/ForumChannelStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import ForumChannelAnalyticsManagerDefault from "tracking/ForumChannelAnalyticsManager.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
let set = new Set();
let obj = {
  layoutType: fn(1967).ForumLayout.LIST,
  sortOrder: fn(1966).ThreadSortOrder.CREATION_DATE,
  tagFilter: set,
  tagSetting: fn(1968).ThreadSearchTagSetting.MATCH_SOME,
};
let closure_6 = function ForumChannelStoreState(set, get) {
  obj = Object.create(new.target.prototype);
  obj.channelStates = {};
  obj.setChannelState = function setChannelState(channelId, arg1) {
    value = channelStates.get();
    const channelState = channelStates.getChannelState(channelId);
    channelStates = {};
    const merged = Object.assign(value.channelStates);
    channelStates = {};
    const merged1 = Object.assign(channelState);
    const merged2 = Object.assign(arg1);
    channelStates[channelId] = channelStates;
    channelStates(dependencyMap[4]).batchUpdates(() => {
      channelStates = { channelStates };
      return channelStates.set(channelStates);
    });
  };
  obj.getChannelState = function getChannelState(channelId) {
    if (null == channelId) {
      return obj;
    } else {
      let tmp6 = obj.get().channelStates[channelId];
      if (null == tmp6) {
        const channel = ChannelStore.getChannel(channelId);
        _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
        obj = {
          layoutType: channel.getDefaultLayout(),
          sortOrder: channel.getDefaultSortOrder(),
          tagFilter: set,
          tagSetting: channel.getDefaultTagSetting(),
        };
        tmp6 = obj;
      }
      return tmp6;
    }
  };
  obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
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
    ForumChannelAnalyticsManagerDefault.setFilterTagIds(set);
  };
  obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
    obj = { sortOrder };
    obj.setChannelState(channelId, obj);
    ForumChannelAnalyticsManagerDefault.setSortOrder(sortOrder);
  };
  obj.setLayoutType = function setLayoutType(channelId, c7) {
    obj = { layoutType: c7 };
    obj.setChannelState(channelId, obj);
    ForumChannelAnalyticsManagerDefault.setLayout(c7);
  };
  obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
    obj = { tagSetting };
    obj.setChannelState(channelId, obj);
    ForumChannelAnalyticsManagerDefault.setTagSetting(tagSetting);
  };
  obj.set = set;
  obj.get = get;
  return obj;
}.prototype;
const module_560 = fn(560);
let closure_7 = module_560.create((set, get) => {
  if (typeof closure_6 === "function") {
    obj = Object.create(tmp.prototype);
    obj.channelStates = {};
    obj.setChannelState = function setChannelState(channelId, arg1) {
      value = channelStates.get();
      const channelState = channelStates.getChannelState(channelId);
      channelStates = {};
      const merged = Object.assign(value.channelStates);
      channelStates = {};
      const merged1 = Object.assign(channelState);
      const merged2 = Object.assign(arg1);
      channelStates[channelId] = channelStates;
      channelStates(dependencyMap[4]).batchUpdates(() => {
        channelStates = { channelStates };
        return channelStates.set(channelStates);
      });
    };
    obj.getChannelState = function getChannelState(channelId) {
      if (null == channelId) {
        return obj;
      } else {
        let tmp6 = obj.get().channelStates[channelId];
        if (null == tmp6) {
          const channel = ChannelStore.getChannel(channelId);
          _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
          obj = {
            layoutType: channel.getDefaultLayout(),
            sortOrder: channel.getDefaultSortOrder(),
            tagFilter: set,
            tagSetting: channel.getDefaultTagSetting(),
          };
          tmp6 = obj;
        }
        return tmp6;
      }
    };
    obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
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
      ForumChannelAnalyticsManagerDefault.setFilterTagIds(set);
    };
    obj.setSortOrder = function setSortOrder(channelId, sortOrder) {
      obj = { sortOrder };
      obj.setChannelState(channelId, obj);
      ForumChannelAnalyticsManagerDefault.setSortOrder(sortOrder);
    };
    obj.setLayoutType = function setLayoutType(channelId, c7) {
      obj = { layoutType: c7 };
      obj.setChannelState(channelId, obj);
      ForumChannelAnalyticsManagerDefault.setLayout(c7);
    };
    obj.setTagSetting = function setTagSetting(channelId, tagSetting) {
      obj = { tagSetting };
      obj.setChannelState(channelId, obj);
      ForumChannelAnalyticsManagerDefault.setTagSetting(tagSetting);
    };
    obj.set = set;
    obj.get = get;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  _require = parent_id;
  obj = closure_7();
  const items = [ChannelStore];
  if (null == obj2.useStateFromStores(items, () => ChannelStore.getChannel(closure_0))) {
    let channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_7;
}
