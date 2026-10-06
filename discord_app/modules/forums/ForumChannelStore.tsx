// === Module 11629: ForumChannelStore ===

// Module 11629 (ForumChannelStore)
import _modDef38 from "module_38" /* 38 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ForumLayout from "ForumLayout" /* 2062 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 2063 */;
import ForumChannelAnalyticsManagerDefault from "ForumChannelAnalyticsManager" /* 7411 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function setChannelState(channelId, arg1) {
  let channelStates;
  const value = channelStates.get();
  const channelState = channelStates.getChannelState(channelId);
  channelStates = {};
  const merged = Object.assign(value.channelStates);
  const obj2 = {};
  const merged1 = Object.assign(channelState);
  const merged2 = Object.assign(arg1);
  channelStates[channelId] = obj2;
  const obj3 = channelStates(dependencyMap[4]);
  obj3.batchUpdates(() => {
    channelStates = { channelStates };
    return channelStates.set(channelStates);
  });
}
function getChannelState(channelId) {
  if (null == channelId) {
    return obj;
  } else {
    let tmp6 = obj.get().channelStates[channelId];
    if (null == tmp6) {
      const channel = ChannelStore.getChannel(channelId);
      _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
      obj = { layoutType: channel.getDefaultLayout(), sortOrder: channel.getDefaultSortOrder(), tagFilter: set, tagSetting: channel.getDefaultTagSetting() };
      tmp6 = obj;
    }
    return tmp6;
  }
}
function setTagFilter(id, set) {
  obj = { tagFilter: set };
  obj.setChannelState(id, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setFilterTagIds(set);
}
function setSortOrder(channelId, sortOrder) {
  obj = { sortOrder };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setSortOrder(sortOrder);
}
function setLayoutType(channelId, c7) {
  obj = { layoutType };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setLayout(layoutType);
}
function setTagSetting(channelId, tagSetting) {
  obj = { tagSetting };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setTagSetting(tagSetting);
}
let set = new Set();
let obj = { layoutType: ForumLayout.ForumLayout.LIST, sortOrder: ThreadSortOrder.ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME };
function ForumChannelStoreState(set, get) {
  obj = Object.create(new.target.prototype);
  obj.channelStates = {};
  obj.setChannelState = setChannelState;
  obj.getChannelState = getChannelState;
  obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
    set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = setTagFilter;
  obj.setSortOrder = setSortOrder;
  obj.setLayoutType = setLayoutType;
  obj.setTagSetting = setTagSetting;
  obj.set = set;
  obj.get = get;
  return obj;
}
let closure_7 = module_570.create((set, get) => {
  let layoutType;
  if (typeof ForumChannelStoreState === "function") {
    obj = Object.create(tmp.prototype);
    obj.channelStates = {};
    obj.setChannelState = setChannelState;
    obj.getChannelState = getChannelState;
    obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
      set = new Set(obj.getChannelState(channelId).tagFilter);
      if (set.has(arg1)) {
        set.delete(arg1);
      } else {
        set.add(arg1);
      }
      obj.setTagFilter(channelId, set);
    };
    obj.setTagFilter = setTagFilter;
    obj.setSortOrder = setSortOrder;
    obj.setLayoutType = setLayoutType;
    obj.setTagSetting = setTagSetting;
    obj.set = set;
    obj.get = get;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let channelState;
  let first;
  let tmp6;
  _require = channelId;
  obj = require("react");
  const cResult = obj.c(3);
  const obj2 = closure_7();
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  if (null == tmpResult.useStateFromStores(first, tmp6)) {
    channelState = obj;
  } else {
    channelState = obj2.getChannelState(channelId);
  }
  return channelState;
}) : ((channelId) => {
  let channelState;
  _require = channelId;
  obj = closure_7();
  const items = [ChannelStore];
  const obj2 = require("get initialized");
  if (null == obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId))) {
    channelState = obj;
  } else {
    channelState = obj.getChannelState(channelId);
  }
  return channelState;
});
const result = size.fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = tmp3;
export function useForumChannelStoreApi() {
  return closure_7;
}