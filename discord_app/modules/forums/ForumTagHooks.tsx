// === Module 6122: useAvailableTags ===

// Module 6122 (useAvailableTags)
import closure_2 from "noop" /* 19 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;
import closure_4 from "getUncachedChannelPermissions" /* 4121 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
let closure_6 = [];
let result = require("set").fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export const useAvailableTags = function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  const items = [closure_3];
  const items1 = [parent_id];
  return parent_id(589).useStateFromStoresObject(items, () => {
    const channel = closure_1_3.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((arg0, id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
};
export const useAppliedTags = function useAppliedTags(thread) {
  let parent_id = thread;
  parent_id = undefined;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  const items = [closure_3];
  const items1 = [parent_id];
  stateFromStoresObject = parent_id(stateFromStoresObject[4]).useStateFromStoresObject(items, () => {
    const channel = closure_1_3.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((arg0, id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
  const items2 = [stateFromStoresObject, thread];
  return React.useMemo(() => {
    let found;
    if (parent_id != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((arg0) => table[arg0]);
        if (mapped != null) {
          found = mapped.filter(parent_id(memo[5]).isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_1_6;
    }
    let result;
    if (parent_id != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = parent_id(memo[6]).sortedModeratorReportTags(found);
      const obj2 = parent_id(memo[6]);
    }
    return result1;
  }, items2);
};
export const useSomeAppliedTags = function useSomeAppliedTags(thread, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let parent_id = num;
  let memo;
  parent_id = thread;
  memo = undefined;
  parent_id = undefined;
  parent_id = undefined;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  let items = [closure_3];
  const items1 = [parent_id];
  const stateFromStoresObject = parent_id(memo[4]).useStateFromStoresObject(items, () => {
    const channel = closure_1_3.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((arg0, id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
  memo = stateFromStoresObject;
  const items2 = [stateFromStoresObject, thread];
  memo = React.useMemo(() => {
    let found;
    if (parent_id != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((arg0) => table[arg0]);
        if (mapped != null) {
          found = mapped.filter(parent_id(memo[5]).isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_1_6;
    }
    let result;
    if (parent_id != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = parent_id(memo[6]).sortedModeratorReportTags(found);
      const obj2 = parent_id(memo[6]);
    }
    return result1;
  }, items2);
  const items3 = [memo, num];
  return React.useMemo(() => {
    const items = [memo.slice(0, parent_id), Math.max(0, memo.length - parent_id)];
    return items;
  }, items3);
};
export const useVisibleForumTags = function useVisibleForumTags(parentChannel) {
  const _require = parentChannel;
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => closure_1_4.can(closure_1_5.MANAGE_THREADS, stateFromStores));
  const items1 = [stateFromStores, ];
  let availableTags;
  if (parentChannel != null) {
    availableTags = parentChannel.availableTags;
  }
  items1[1] = availableTags;
  return React.useMemo(() => {
    let availableTags;
    if (stateFromStores != null) {
      availableTags = stateFromStores.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores1) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items1);
};
export const useVisibleAppliedForumTags = function useVisibleAppliedForumTags(arg0, arg1) {
  let stateFromStores = arg0;
  let stateFromStores1 = arg1;
  let items = [closure_3];
  const items1 = [arg0];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => {
    let parent_id;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return closure_1_3.getChannel(parent_id);
  }, items1);
  stateFromStores1 = undefined;
  const obj = stateFromStores(stateFromStores1[4]);
  const items2 = [closure_4];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items2, () => closure_1_4.can(closure_1_5.MANAGE_THREADS, stateFromStores));
  const items3 = [stateFromStores1, ];
  let availableTags;
  if (stateFromStores != null) {
    availableTags = stateFromStores.availableTags;
  }
  items3[1] = availableTags;
  memo = memo.useMemo(() => {
    let availableTags;
    if (stateFromStores != null) {
      availableTags = stateFromStores.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores1) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items3);
  const items4 = [arg1, memo, arg0];
  return memo.useMemo(() => {
    const found = stateFromStores1.filter((arg0) => closure_2.includes(arg0));
    let result;
    if (stateFromStores != null) {
      result = stateFromStores.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = stateFromStores(stateFromStores1[6]).sortedModeratorReportTags(found);
      const obj2 = stateFromStores(stateFromStores1[6]);
    }
    return result1;
  }, items4);
};