// discord_app/modules/conjure/debug/ConjureDebugLogStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureSequencedBuffer from "ConjureSequencedBuffer.tsx";

require = fn;
function logSeq(log) {
  return log.log.seq;
}
function handleLogAppend(arg0) {
  ({ projectId, log } = arg0);
  let str = map.get(projectId);
  if (null == str) {
    const conjureSequencedBuffer = new ConjureSequencedBuffer.ConjureSequencedBuffer(logSeq);
    const result = map.set(projectId, conjureSequencedBuffer);
    str = conjureSequencedBuffer;
  }
  if (null != log.seq) {
    if (-1 !== str.indexOfSeq(log.seq)) {
      return false;
    }
  }
  const obj2 = { key: null, log };
  const sum = c4 + 1;
  c4 = sum;
  obj2.key = sum;
  str.insert(obj2);
  const trimmed = str.trim(500);
}
function handleHistoryLoadSettle(status) {
  ({ projectId, scope } = status);
  if ("failed" !== status.status) {
    const obj2 = { status: "loaded", truncated: tmp2, count: tmp };
    value = map2.get(projectId);
    if (null == value) {
      const _Map2 = Map;
      map = new Map();
      const result = map2.set(projectId, map);
      value = map;
    }
    const result1 = value.set(scope, obj2);
  } else {
    value4 = map2.get(projectId);
    let value5;
    if (value4 != null) {
      value5 = value4.get(scope);
    }
    let flag;
    if (value5 != null) {
      flag = value5.truncated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj = { status: "failed", truncated: flag, count: null };
    let num;
    if (value5 != null) {
      num = value5.count;
    }
    if (num == null) {
      num = 0;
    }
    obj.count = num;
    let value6 = map2.get(projectId);
    if (null == value6) {
      const _Map = Map;
      map1 = new Map();
      const result2 = map2.set(projectId, map1);
      value6 = map1;
    }
    const result3 = value6.set(scope, obj);
  }
}
let closure_2 = [];
let map = new Map();
let c4 = 0;
let map1 = new Map();
let closure_6 = { status: "idle", truncated: false, count: 0 };
const map2 = new Map();
const Store = initializeDefault.Store;
class ConjureDebugLogStore extends Store {}
const prototype = ConjureDebugLogStore.prototype;
prototype["getLogs"] = function getLogs(projectId) {
  value = map.get(projectId);
  let snapshotResult;
  if (value != null) {
    snapshotResult = value.snapshot();
  }
  if (snapshotResult == null) {
    snapshotResult = closure_2;
  }
  return snapshotResult;
};
prototype["getUnreadLogErrorCount"] = function getUnreadLogErrorCount(arg0) {
  value = map.get(arg0);
  if (null == value) {
    return 0;
  } else {
    let num = map1.get(arg0);
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    const values = value.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = nextResult.key > num;
      if (tmp7) {
        tmp7 = "error" === tmp6.log.level;
      }
      if (tmp7) {
        tmp7 = true !== tmp6.log.historical;
      }
      if (tmp7) {
        num2 = num2 + 1;
      }
      continue;
    }
    return num2;
  }
};
prototype["getHistoryState"] = function getHistoryState(arg0, arg1) {
  value = map2.get(arg0);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg1);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  return value2;
};
const conjureDebugLogStore = new ConjureDebugLogStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          return false;
        }
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
  },
  CONJURE_HISTORY_LOAD_SETTLE: handleHistoryLoadSettle,
  CONJURE_DEBUG_BACKLOG: function handleDebugBacklog(arg0) {
    ({ projectId, backlog } = arg0);
    for (const item10008 of tmp) {
      let obj = { type: "CONJURE_LOG_APPEND", projectId, log: item10008 };
      let tmp3 = handleLogAppend(obj);
      continue;
    }
    const iter = backlog.states[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj3 = {
        type: "CONJURE_HISTORY_LOAD_SETTLE",
        projectId,
        scope: null,
        status: null,
        count: null,
        truncated: null,
      };
      ({ scope: obj2.scope, status: obj2.status, count: obj2.count } = nextResult);
      obj3.truncated = true === nextResult.truncated;
      let tmp6 = handleHistoryLoadSettle(obj3);
      continue;
    }
  },
  CONJURE_LOG_APPEND: handleLogAppend,
  CONJURE_LOGS_SEEN: function handleLogsSeen(projectId) {
    projectId = projectId.projectId;
    let num = 0;
    value = map.get(projectId);
    let values;
    if (value != null) {
      values = value.values();
    }
    if (values == null) {
      values = closure_2;
    }
    while (tmp2 !== undefined) {
      let _Math = Math;
      num = Math.max(num, tmp3.key);
      continue;
    }
    let num2 = map1.get(projectId);
    if (num2 == null) {
      num2 = 0;
    }
    if (num2 >= num) {
      return false;
    } else {
      const result = map1.set(projectId, num);
    }
    tmp2 = values[Symbol.iterator]();
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLogStore.tsx");

export default conjureDebugLogStore;
