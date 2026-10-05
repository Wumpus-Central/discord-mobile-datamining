// discord_app/modules/forums/ForumTagHooks.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ReportToModUtils from "../report_to_mod/ReportToModUtils.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, parent_id;

let react = react_mod;
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parent_id) => {
      let first;
      let tmp7;
      let tmp8;
      let obj = parent_id(576);
      const cResult = obj.c(4);
      const tmp = parent_id;
      parent_id = undefined;
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== parent_id) {
        const fn = function s() {
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
    }
  : (parent_id) => {
      parent_id = undefined;
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      let obj = parent_id(504);
      const items = [ChannelStore];
      const items1 = [parent_id];
      return obj.useStateFromStoresObject(
        items,
        () => {
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
        },
        items1,
      );
    };
let closure_6 = tmp2;
let closure_7 = [];
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (appliedTags) => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_6(appliedTags);
      let closure_0 = tmp4;
      if (cResult[0] === tmp4) {
        let tmp5;
        if (cResult[1] === appliedTags) {
          tmp5 = cResult[2];
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
        const tmpResult = ReportToModUtils;
        result1 = tmpResult.sortedModeratorReportTags(found);
      }
      cResult[0] = tmp4;
      cResult[1] = appliedTags;
      cResult[2] = result1;
      tmp5 = result1;
    }
  : (arg0) => {
      const moderatorReportChannel = arg0;
      const tmp = closure_6(arg0);
      let closure_1 = tmp;
      const items = [tmp, arg0];
      return react.useMemo(() => {
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
          const obj2 = ReportToModUtils;
          result1 = obj2.sortedModeratorReportTags(found);
        }
        return result1;
      }, items);
    };
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const obj = react2;
      const cResult = obj.c(6);
      let num = 1;
      if (undefined !== arg1) {
        num = arg1;
      }
      const arr = closure_8(arg0);
      if (cResult[0] === arr) {
        let tmp2;
        if (cResult[1] === num) {
          tmp2 = cResult[2];
        }
        const _Math = Math;
        const bound = Math.max(0, arr.length - num);
        if (cResult[3] === tmp2) {
          let tmp6;
          if (cResult[4] === bound) {
            tmp6 = cResult[5];
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
    }
  : (arg0) => {
      let num = arg1;
      if (arg1 === undefined) {
        num = 1;
      }
      const tmp = closure_8(arg0);
      let closure_1 = tmp;
      let items = [tmp, num];
      return react.useMemo(() => {
        const items = [closure_1.slice(0, num), Math.max(0, closure_1.length - num)];
        return items;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (availableTags) => {
      let arr3;
      let first;
      let tmp11;
      let tmp7;
      _require = availableTags;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp2 = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== availableTags) {
        const fn = function l() {
          return PermissionStore.can(Permissions.MANAGE_THREADS, availableTags);
        };
        cResult[1] = availableTags;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      availableTags = undefined;
      const tmp2Result = tmp2(504);
      const stateFromStores = tmp2Result.useStateFromStores(first, tmp7);
      const tmp9 = cResult[3];
      if (availableTags != null) {
        availableTags = availableTags.availableTags;
      }
      if (tmp9 !== availableTags) {
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
        tmp11 = availableTags1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== tmp11) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, tmp11, 0);
        cResult[5] = tmp11;
        cResult[6] = items1;
        arr3 = items1;
      } else {
        arr3 = cResult[6];
      }
      let tmp16 = arr3;
      if (!stateFromStores) {
        let tmp17;
        if (cResult[7] !== arr3) {
          const found = arr3.filter((moderated) => !moderated.moderated);
          cResult[7] = arr3;
          cResult[8] = found;
          tmp17 = found;
        } else {
          tmp17 = cResult[8];
        }
        tmp16 = tmp17;
      }
      return tmp16;
    }
  : (availableTags) => {
      let stateFromStores;
      _require = availableTags;
      let items = [PermissionStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () =>
        PermissionStore.can(Permissions.MANAGE_THREADS, availableTags),
      );
      const items1 = [stateFromStores];
      availableTags = undefined;
      const useMemo = react.useMemo;
      if (availableTags != null) {
        availableTags = availableTags.availableTags;
      }
      items1[1] = availableTags;
      return useMemo(() => {
        let found;
        availableTags = undefined;
        if (availableTags != null) {
          availableTags = availableTags.availableTags;
        }
        if (availableTags == null) {
          availableTags = [];
        }
        const items = [...availableTags];
        if (!stateFromStores) {
          found = items.filter((moderated) => !moderated.moderated);
        }
        return found;
      }, items1);
    };
let closure_9 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parent_id, arr) => {
      let closure_1;
      let first;
      let tmp10;
      let tmp8;
      _require = parent_id;
      const obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      parent_id = undefined;
      const tmp6 = cResult[1];
      if (parent_id != null) {
        parent_id = parent_id.parent_id;
      }
      if (tmp6 !== parent_id) {
        let parent_id1;
        if (parent_id != null) {
          parent_id1 = parent_id.parent_id;
        }
        const fn = function l() {
          parent_id = undefined;
          const getChannel = ChannelStore.getChannel;
          if (parent_id != null) {
            parent_id = parent_id.parent_id;
          }
          return getChannel(parent_id);
        };
        cResult[1] = parent_id1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== parent_id) {
        const items1 = [parent_id];
        cResult[3] = parent_id;
        cResult[4] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = tmp(504);
      const tmp11 = closure_9(tmpResult.useStateFromStores(first, tmp8, tmp10));
      dependencyMap = tmp11;
      if (cResult[5] === arr) {
        if (cResult[6] === parent_id) {
          let tmp12;
          if (cResult[7] === tmp11) {
            tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      if (cResult[9] !== tmp11) {
        class T {
          constructor(arg0) {
            return closure_1.includes(arg0);
          }
        }
        cResult[9] = tmp11;
        cResult[10] = T;
      } else {
        class T {
          constructor(arg0) {
            return closure_1.includes(arg0);
          }
        }
      }
      const found = arr.filter(T);
      if (parent_id != null) {
        class T {
          constructor(arg0) {
            return closure_1.includes(arg0);
          }
        }
      }
      let result = found;
      if (undefined) {
        class T {
          constructor(arg0) {
            return closure_1.includes(arg0);
          }
        }
        result = obj3.sortedModeratorReportTags(found);
      }
      cResult[5] = arr;
      cResult[6] = parent_id;
      cResult[7] = tmp11;
      cResult[8] = result;
      tmp12 = result;
    }
  : (arg0, arg1) => {
      let closure_1;
      let closure_2;
      _require = arg0;
      dependencyMap = arg1;
      const items = [ChannelStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const tmp = closure_9(
        obj.useStateFromStores(
          items,
          () => {
            parent_id = undefined;
            const getChannel = ChannelStore.getChannel;
            if (parent_id != null) {
              parent_id = parent_id.parent_id;
            }
            return getChannel(parent_id);
          },
          items1,
        ),
      );
      react = tmp;
      const items2 = [arg1, tmp, arg0];
      return react.useMemo(() => {
        const found = closure_1.filter((item) => closure_1_2.includes(item));
        let result;
        if (parent_id != null) {
          result = parent_id.isModeratorReportChannel();
        }
        let result1 = found;
        if (result) {
          const obj2 = ReportToModUtils;
          result1 = obj2.sortedModeratorReportTags(found);
        }
        return result1;
      }, items2);
    };
let result = size.fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export const useAvailableTags = tmp2;
export const useAppliedTags = tmp3;
export const useSomeAppliedTags = tmp4;
export const useVisibleForumTags = tmp5;
export const useVisibleAppliedForumTags = tmp6;
