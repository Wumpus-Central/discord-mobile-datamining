// === Module 6970: ForumTagHooks ===

// Module 6970 (ForumTagHooks)
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ReportToModUtils from "ReportToModUtils" /* 6971 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import PermissionStore from "PermissionStore" /* 4709 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1096).Permissions;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvailableTags(parent_id) {
  const cResult = parent_id(576).c(4);
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parent_id) {
    const fn = function l() {
      const channel = ChannelStore.getChannel(parent_id);
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
    };
    const items1 = [parent_id];
    cResult[1] = parent_id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = parent_id(576);
  return parent_id(504).useStateFromStoresObject(first, tmp7, tmp8);
}) : (function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  const items = [ChannelStore];
  const items1 = [parent_id];
  return parent_id(504).useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(parent_id);
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
  }, items1);
});
let closure_6 = tmp2;
let closure_7 = [];
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppliedTags(appliedTags) {
  const cResult = c.c(3);
  const tmp4 = closure_6(appliedTags);
  closure_0 = tmp4;
  if (cResult[0] === tmp4) {
    if (cResult[1] === appliedTags) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  let found;
  if (appliedTags != null) {
    appliedTags = appliedTags.appliedTags;
    if (appliedTags != null) {
      const mapped = appliedTags.map((item) => closure_0[item]);
      if (mapped != null) {
        found = mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  if (found == null) {
    found = closure_7;
  }
  let result;
  if (appliedTags != null) {
    result = appliedTags.isModeratorReportChannel();
  }
  let result1 = found;
  if (result) {
    result1 = ReportToModUtils.sortedModeratorReportTags(found);
    const tmpResult = ReportToModUtils;
  }
  cResult[0] = tmp4;
  cResult[1] = appliedTags;
  cResult[2] = result1;
  tmp5 = result1;
}) : (function useAppliedTags(arg0) {
  const moderatorReportChannel = arg0;
  const tmp = closure_6(arg0);
  closure_1 = tmp;
  const items = [tmp, arg0];
  return noop.useMemo(() => {
    let found;
    if (moderatorReportChannel != null) {
      const appliedTags = moderatorReportChannel.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((item) => closure_1_1[item]);
        if (mapped != null) {
          found = mapped.filter(GlobalUtils.isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_7;
    }
    let result;
    if (moderatorReportChannel != null) {
      result = moderatorReportChannel.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = ReportToModUtils.sortedModeratorReportTags(found);
    }
    return result1;
  }, items);
});
let closure_8 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleForumTags(availableTags) {
  _require = availableTags;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== availableTags) {
    const fn = function n() {
      return PermissionStore.can(Permissions.MANAGE_THREADS, closure_0);
    };
    cResult[1] = availableTags;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  availableTags = undefined;
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (availableTags != null) {
    availableTags = availableTags.availableTags;
  }
  if (cResult[3] !== availableTags) {
    let availableTags1;
    if (availableTags != null) {
      availableTags1 = availableTags.availableTags;
    }
    if (availableTags1 == null) {
      availableTags1 = [];
    }
    let availableTags2;
    if (availableTags != null) {
      availableTags2 = availableTags.availableTags;
    }
    cResult[3] = availableTags2;
    cResult[4] = availableTags1;
    let tmp9 = availableTags1;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp9) {
    const items1 = [];
    HermesBuiltin.arraySpread(tmp9, 0);
    cResult[5] = tmp9;
    cResult[6] = items1;
    let arr3 = items1;
  } else {
    arr3 = cResult[6];
  }
  if (stateFromStores) {
    return arr3;
  } else if (cResult[7] !== arr3) {
    const found = arr3.filter((moderated) => !moderated.moderated);
    cResult[7] = arr3;
    cResult[8] = found;
  }
  const tmpResult = require("initialize");
}) : (function useVisibleForumTags(availableTags) {
  _require = availableTags;
  let items = [PermissionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_THREADS, closure_0));
  const items1 = [stateFromStores, ];
  availableTags = undefined;
  if (availableTags != null) {
    availableTags = availableTags.availableTags;
  }
  items1[1] = availableTags;
  return noop.useMemo(() => {
    availableTags = undefined;
    if (availableTags != null) {
      availableTags = availableTags.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items1);
});
let closure_9 = tmp5;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSomeAppliedTags(arg0, arg1) {
  const cResult = c.c(6);
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  const arr = closure_8(arg0);
  if (cResult[0] === arr) {
    if (cResult[1] === num) {
      let tmp2 = cResult[2];
    }
    const _Math = Math;
    const bound = Math.max(0, arr.length - num);
    if (cResult[3] === tmp2) {
      if (cResult[4] === bound) {
        let tmp6 = cResult[5];
      }
      return tmp6;
    }
    const items = [tmp2, bound];
    cResult[3] = tmp2;
    cResult[4] = bound;
    cResult[5] = items;
    tmp6 = items;
  }
  const substr = arr.slice(0, num);
  cResult[0] = arr;
  cResult[1] = num;
  cResult[2] = substr;
  tmp2 = substr;
}) : (function useSomeAppliedTags(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const tmp = closure_8(arg0);
  closure_1 = tmp;
  let items = [tmp, num];
  return noop.useMemo(() => {
    const items = [closure_1.slice(0, num), Math.max(0, closure_1.length - num)];
    return items;
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export const useAvailableTags = tmp2;
export const useAppliedTags = tmp3;
export const useSomeAppliedTags = tmp4;
export const useVisibleForumTags = tmp5;
export const useVisibleAppliedForumTags = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleAppliedForumTags(parent_id, arr) {
  _require = parent_id;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  if (cResult[1] !== parent_id) {
    let parent_id1;
    if (parent_id != null) {
      parent_id1 = parent_id.parent_id;
    }
    const fn = function n() {
      parent_id = undefined;
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      return ChannelStore.getChannel(parent_id);
    };
    cResult[1] = parent_id1;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== parent_id) {
    const items1 = [parent_id];
    cResult[3] = parent_id;
    cResult[4] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  const obj = require("c");
  const tmp10 = closure_9(require("initialize").useStateFromStores(first, tmp7, tmp9));
  dependencyMap = tmp10;
  if (cResult[5] === arr) {
    if (cResult[6] === parent_id) {
      if (cResult[7] === tmp10) {
        let tmp11 = cResult[8];
      }
      return tmp11;
    }
  }
  if (cResult[9] !== tmp10) {
    const fn2 = function f(arg0) {
      return closure_1.includes(arg0);
    };
    cResult[9] = tmp10;
    cResult[10] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[10];
  }
  const found = arr.filter(tmp12);
  let result;
  if (parent_id != null) {
    result = parent_id.isModeratorReportChannel();
  }
  let result1 = found;
  if (result) {
    result1 = tmp(6971).sortedModeratorReportTags(found);
    const tmpResult2 = tmp(6971);
  }
  cResult[5] = arr;
  cResult[6] = parent_id;
  cResult[7] = tmp10;
  cResult[8] = result1;
  tmp11 = result1;
  const tmpResult = require("initialize");
}) : (function useVisibleAppliedForumTags(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ChannelStore];
  const items1 = [arg0];
  const tmp = closure_9(require("initialize").useStateFromStores(items, () => {
    parent_id = undefined;
    if (parent_id != null) {
      parent_id = parent_id.parent_id;
    }
    return ChannelStore.getChannel(parent_id);
  }, items1));
  noop = tmp;
  const items2 = [arg1, tmp, arg0];
  return noop.useMemo(() => {
    const found = closure_1.filter((item) => closure_1_2.includes(item));
    let result;
    if (parent_id != null) {
      result = parent_id.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      result1 = ReportToModUtils.sortedModeratorReportTags(found);
    }
    return result1;
  }, items2);
});