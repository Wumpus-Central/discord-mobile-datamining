// === Module 12446: vibegrationsPreviewControlLease ===

// Module 12446 (vibegrationsPreviewControlLease)
import noop from "module_19" /* 19 */;

function emit() {
  const items = [...set];
  const iter = items[Symbol.iterator]();
  if (iter !== undefined) {
    try {
      tmp2();
    } catch (err) {
    }
  }
}
function subscribeVibegrationsControl(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => {
    set.delete(closure_0);
  };
}
const map = new Map();
let set = new Set();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewControlLease.tsx");

export const acquireVibegrationsControlLease = function acquireVibegrationsControlLease(arg0) {
  closure_0 = arg0;
  value = map.get(arg0);
  if (value == null) {
    const obj2 = { holders: 0, timers: null };
    const _Set = Set;
    set = new Set();
    obj2.timers = set;
    value = obj2;
  }
  value.holders = value.holders + 1;
  function release() {
    if (!c2) {
      c2 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_1_3);
      if (map.get(closure_0) === closure_1_1) {
        const timers = closure_1_1.timers;
        timers.delete(closure_1_3);
        closure_1_1.holders = closure_1_1.holders - 1;
        if (closure_1_1.holders <= 0) {
          map.delete(closure_0);
        }
        emit();
      }
    }
  }
  const result = map.set(arg0, value);
  c2 = false;
  const timerId = setTimeout(() => {
    if (!c2) {
      c2 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_1_3);
      if (map.get(closure_0) === closure_1_1) {
        const timers = closure_1_1.timers;
        timers.delete(closure_1_3);
        closure_1_1.holders = closure_1_1.holders - 1;
        if (closure_1_1.holders <= 0) {
          map.delete(closure_0);
        }
        emit();
      }
    }
  }, 35000);
  const timers = value.timers;
  timers.add(timerId);
  timerId();
  return release;
};
export const CONTROL_OPERATION_IDLE_MS = 20000;
export const beginVibegrationsControlOperation = function beginVibegrationsControlOperation(TableRowGroup) {
  closure_0 = TableRowGroup;
  value = map1.get(TableRowGroup);
  const timerId = setTimeout(() => {
    value = map1.get(closure_0);
    if (null != value) {
      map1.delete(closure_0);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timer);
      value.release();
    }
  }, 20000);
  if (null != value) {
    let _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    closure_130_0 = TableRowGroup;
    closure_130_1 = undefined;
    closure_130_2 = undefined;
    closure_130_3 = undefined;
    let value3 = map.get(TableRowGroup);
    if (value3 == null) {
      const obj2 = { holders: 0, timers: null };
      const _Set2 = Set;
      set = new Set();
      obj2.timers = set;
      value3 = obj2;
    }
    closure_130_1 = value3;
    value3.holders = value3.holders + 1;
    const release2 = function release() {
      if (!c2) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_3);
        if (map.get(closure_0) === closure_1_1) {
          const timers = closure_1_1.timers;
          timers.delete(closure_1_3);
          closure_1_1.holders = closure_1_1.holders - 1;
          if (closure_1_1.holders <= 0) {
            map.delete(closure_0);
          }
          emit();
        }
      }
    };
    const result = map.set(TableRowGroup, value3);
    closure_130_2 = false;
    const _setTimeout2 = setTimeout;
    const timerId1 = setTimeout(() => {
      if (!c2) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_3);
        if (map.get(closure_0) === closure_1_1) {
          const timers = closure_1_1.timers;
          timers.delete(closure_1_3);
          closure_1_1.holders = closure_1_1.holders - 1;
          if (closure_1_1.holders <= 0) {
            map.delete(closure_0);
          }
          emit();
        }
      }
    }, 35000);
    closure_130_3 = timerId1;
    const timers2 = value3.timers;
    timers2.add(timerId1);
    emit();
    value.release();
    const obj3 = { release: release2, timer: timerId };
    const result1 = map1.set(TableRowGroup, obj3);
  } else {
    closure_129_0 = TableRowGroup;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    let value4 = map.get(TableRowGroup);
    if (value4 == null) {
      const obj4 = { holders: 0, timers: null };
      const _Set = Set;
      const set1 = new Set();
      obj4.timers = set1;
      value4 = obj4;
    }
    const obj6 = { release: null, timer: null };
    closure_129_1 = value4;
    value4.holders = value4.holders + 1;
    function release() {
      if (!c2) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_3);
        if (map.get(closure_0) === closure_1_1) {
          const timers = closure_1_1.timers;
          timers.delete(closure_1_3);
          closure_1_1.holders = closure_1_1.holders - 1;
          if (closure_1_1.holders <= 0) {
            map.delete(closure_0);
          }
          emit();
        }
      }
    }
    const result2 = map.set(TableRowGroup, value4);
    closure_129_2 = false;
    const _setTimeout = setTimeout;
    const timerId2 = setTimeout(() => {
      if (!c2) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_3);
        if (map.get(closure_0) === closure_1_1) {
          const timers = closure_1_1.timers;
          timers.delete(closure_1_3);
          closure_1_1.holders = closure_1_1.holders - 1;
          if (closure_1_1.holders <= 0) {
            map.delete(closure_0);
          }
          emit();
        }
      }
    }, 35000);
    closure_129_3 = timerId2;
    let timers = value4.timers;
    timers.add(timerId2);
    emit();
    obj6.release = release;
    obj6.timer = timerId;
    const result3 = map1.set(TableRowGroup, obj6);
  }
};
export const endVibegrationsControlOperation = function endVibegrationsControlOperation(openResult) {
  value = map1.get(openResult);
  if (null != value) {
    map1.delete(openResult);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.release();
  }
};
export const releaseVibegrationsControlLeases = function releaseVibegrationsControlLeases(projectId) {
  value = map1.get(projectId);
  if (null != value) {
    map1.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
  }
  value2 = map.get(projectId);
  if (null != value2) {
    const timers = value2.timers;
    const tmp7 = timers[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let _clearTimeout2 = clearTimeout;
      let clearTimeoutResult1 = clearTimeout(tmp10);
      continue;
    }
    map.delete(projectId);
    emit();
  }
};
export const isVibegrationsControlActive = function isVibegrationsControlActive(openResult) {
  value = map.get(openResult);
  let num;
  if (value != null) {
    num = value.holders;
  }
  if (num == null) {
    num = 0;
  }
  return num > 0;
};
export const getVibegrationsControlActiveProjectIds = function getVibegrationsControlActiveProjectIds() {
  const items = [...map.keys()];
  return items;
};
export { subscribeVibegrationsControl };
export const useVibegrationsControlActive = function useVibegrationsControlActive(projectId) {
  noop = projectId;
  const items = [projectId];
  const callback = noop.useCallback(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      value = map.get(tmp);
      let num;
      if (value != null) {
        num = value.holders;
      }
      if (num == null) {
        num = 0;
      }
      tmp2 = num > 0;
    }
    return tmp2;
  }, items);
  return noop.useSyncExternalStore(subscribeVibegrationsControl, callback, callback);
};