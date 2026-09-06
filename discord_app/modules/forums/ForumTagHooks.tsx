// discord_app/modules/forums/ForumTagHooks.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ReportToModUtils from "../report_to_mod/ReportToModUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
const Permissions = fn(1085).Permissions;
let closure_6 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export const useAvailableTags = function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  const items = [ChannelStore];
  const items1 = [parent_id];
  return parent_id(504).useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(closure_0);
      let availableTags;
      if (channel != null) {
        availableTags = channel.availableTags;
      }
      if (availableTags == null) {
        availableTags = [];
      }
      return availableTags.reduce((acc, id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[id.id] = id;
        return obj;
      }, {});
    },
    items1,
  );
};
export const useAppliedTags = function useAppliedTags(thread) {
  _require = thread;
  let parent_id;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  closure_129_0 = parent_id;
  const items = [ChannelStore];
  const items1 = [parent_id];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(closure_0);
      let availableTags;
      if (channel != null) {
        availableTags = channel.availableTags;
      }
      if (availableTags == null) {
        availableTags = [];
      }
      return availableTags.reduce((acc, id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[id.id] = id;
        return obj;
      }, {});
    },
    items1,
  );
  const items2 = [stateFromStoresObject, thread];
  return noop.useMemo(() => {
    let found;
    if (closure_0 != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((item) => memo[item]);
        if (mapped != null) {
          found = mapped.filter(GlobalUtils.isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_6;
    }
    let result;
    if (closure_0 != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = ReportToModUtils.sortedModeratorReportTags(found);
    }
    return result1;
  }, items2);
};
export const useSomeAppliedTags = function useSomeAppliedTags(thread, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  _require = thread;
  let memo;
  closure_129_0 = undefined;
  let parent_id;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  closure_129_0 = parent_id;
  let items = [ChannelStore];
  const items1 = [parent_id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      const channel = ChannelStore.getChannel(closure_0);
      let availableTags;
      if (channel != null) {
        availableTags = channel.availableTags;
      }
      if (availableTags == null) {
        availableTags = [];
      }
      return availableTags.reduce((acc, id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[id.id] = id;
        return obj;
      }, {});
    },
    items1,
  );
  const items2 = [stateFromStoresObject, thread];
  memo = noop.useMemo(() => {
    let found;
    if (closure_0 != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((item) => memo[item]);
        if (mapped != null) {
          found = mapped.filter(GlobalUtils.isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_6;
    }
    let result;
    if (closure_0 != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = ReportToModUtils.sortedModeratorReportTags(found);
    }
    return result1;
  }, items2);
  const items3 = [memo, num];
  return noop.useMemo(() => {
    const items = [memo.slice(0, closure_0), Math.max(0, memo.length - closure_0)];
    return items;
  }, items3);
};
export const useVisibleForumTags = function useVisibleForumTags(parentChannel) {
  _require = parentChannel;
  const items = [PermissionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(Permissions.MANAGE_THREADS, closure_0),
  );
  const items1 = [stateFromStores];
  let availableTags;
  if (parentChannel != null) {
    availableTags = parentChannel.availableTags;
  }
  items1[1] = availableTags;
  return noop.useMemo(() => {
    let availableTags;
    if (moderatorReportChannel != null) {
      availableTags = moderatorReportChannel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!closure_1) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items1);
};
export const useVisibleAppliedForumTags = function useVisibleAppliedForumTags(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [ChannelStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let parent_id;
      if (moderatorReportChannel != null) {
        parent_id = moderatorReportChannel.parent_id;
      }
      return ChannelStore.getChannel(parent_id);
    },
    items1,
  );
  closure_129_0 = stateFromStores;
  const obj = require("initialize");
  const items2 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
    PermissionStore.can(Permissions.MANAGE_THREADS, closure_0),
  );
  closure_129_1 = stateFromStores1;
  const items3 = [stateFromStores1];
  let availableTags;
  if (stateFromStores != null) {
    availableTags = stateFromStores.availableTags;
  }
  items3[1] = availableTags;
  memo = memo.useMemo(() => {
    let availableTags;
    if (moderatorReportChannel != null) {
      availableTags = moderatorReportChannel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!closure_1) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items3);
  const items4 = [arg1, memo, arg0];
  return memo.useMemo(() => {
    const found = closure_1.filter((item) => memo.includes(item));
    let result;
    if (moderatorReportChannel != null) {
      result = moderatorReportChannel.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = ReportToModUtils.sortedModeratorReportTags(found);
    }
    return result1;
  }, items4);
};
