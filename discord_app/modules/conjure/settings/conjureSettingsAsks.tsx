// === Module 12414: conjureSettingsAsks ===

// Module 12414 (conjureSettingsAsks)
import c from "c" /* 576 */;
import conjureChatTurns from "conjureChatTurns" /* 10735 */;
import conjureSettingsRequest from "conjureSettingsRequest" /* 12410 */;
import conjureSettingsSummary from "conjureSettingsSummary" /* 12415 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10751 */;

const require = globalThis.__r;

require = fn;
function subscribe(arg0) {
  closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
}
function markSettingsRequestSaved(arg0) {
  if (!set.has(arg0)) {
    const _Set = Set;
    const items = [];
    items[HermesBuiltin.arraySpread(set, 0)] = arg0;
    set = new Set(items);
    for (const item10021 of set1) {
      let item10021Result = item10021();
      continue;
    }
  }
}
function supersededSettingsRequests(messages) {
  set = new Set();
  let diff = messages.length - 1;
  let flag = false;
  let flag2 = false;
  if (0 <= diff) {
    do {
      let tmp2 = messages[diff];
      let someResult = flag2;
      let tmp6 = flag;
      let flag3 = flag2;
      if (null != tmp2) {
        tmp6 = flag;
        flag3 = someResult;
        if ("assistant" === tmp2.role) {
          tmp6 = flag;
          flag3 = someResult;
          if (null != tmp2.settingsRequest) {
            let obj3 = conjureChatTurns;
            tmp6 = flag;
            flag3 = someResult;
            if (obj3.turnSettled(tmp2)) {
              let keys = tmp2.settingsRequest.keys;
              if (keys == null) {
                keys = [];
              }
              let tmp7 = flag;
              if (!flag) {
                if (0 !== keys.length) {
                  someResult = keys.some((item) => set1.has(item));
                }
                tmp7 = someResult;
              }
              if (tmp7) {
                let addResult = set.add(tmp2.id);
              }
              for (const item10039 of keys) {
                let addResult1 = set1.add(item10039);
                continue;
              }
              let tmp12 = flag;
              if (!flag) {
                tmp12 = 0 === keys.length;
              }
              tmp6 = tmp12;
              flag3 = true;
            }
          }
        }
      }
      diff = diff - 1;
      flag = tmp6;
      flag2 = flag3;
    } while (0 <= diff);
  }
  return set;
}
let set = new Set();
const set1 = new Set();
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedSettingsRequests() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return set;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return noop.useSyncExternalStore(subscribe, first);
}) : (function useSavedSettingsRequests() {
  return noop.useSyncExternalStore(subscribe, () => set);
});
let closure_11 = tmp4;
ReactCompilerGating = fn(558);
function conjureSettingsRequestDone(settingsRequest, settings, arg2) {
  if (arg2) {
    if (null != settings) {
      const result = conjureSettingsRequest.conjureSettingsRequestKeys(settingsRequest, settings);
      let tmp6 = result.length > 0;
      if (tmp6) {
        const obj2 = { keys: result };
        tmp6 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, settings);
        const tmp4Result = conjureSettingsRequest;
      }
      return tmp6;
    }
  }
  return false;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsAsks.tsx");

export { markSettingsRequestSaved };
export const useSavedSettingsRequests = tmp4;
export { supersededSettingsRequests };
export { conjureSettingsRequestDone };
export const hasOtherOpenSetupAsk = function hasOtherOpenSetupAsk(arr, arg1, secrets, arg3) {
  _require = arg1;
  dependencyMap = secrets;
  secrets = undefined;
  if (secrets != null) {
    secrets = secrets.secrets;
  }
  closure_3 = require("ConjureSecretRequestState").secretRequestStatuses(arr, secrets);
  supersededSettingsRequests(arr);
  return arr.some((role) => {
    let tmp = "assistant" !== role.role;
    if (!tmp) {
      tmp = role.id === closure_0;
    }
    if (!tmp) {
      tmp = !conjureChatTurns.turnSettled(role);
    }
    let tmp5 = !tmp;
    if (!tmp) {
      let tmp7 = null != role.secretRequest;
      if (tmp7) {
        tmp7 = "open" === closure_3.get(role.render_id);
      }
      if (!tmp7) {
        let tmp9 = null != role.settingsRequest;
        if (tmp9) {
          tmp9 = !set2.has(role.id);
        }
        if (tmp9) {
          let flag = false;
          if (set.has(role.id)) {
            flag = false;
            if (null != closure_1) {
              const result = conjureSettingsRequest.conjureSettingsRequestKeys(role.settingsRequest, closure_1);
              let tmp15 = result.length > 0;
              if (tmp15) {
                const obj3 = { keys: result };
                tmp15 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj3, closure_1);
                const tmp13Result = conjureSettingsRequest;
              }
              flag = tmp15;
            }
          }
          tmp9 = !flag;
        }
        tmp7 = tmp9;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  });
};
export const useConjureSettingsAsk = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingsAsk(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  const cResult = require("c").c(27);
  let obj2 = closure_11();
  let obj = require("c");
  [tmp5, noop] = noop.useState(false);
  if (cResult[0] === arg2) {
    if (cResult[1] === obj2) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      closure_4 = tmp6;
      if (cResult[4] !== arg2) {
        const fn = function y() {
          if (null != closure_2) {
            markSettingsRequestSaved(tmp);
          } else {
            noop(true);
          }
        };
        cResult[4] = arg2;
        cResult[5] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureSettingsStore];
        cResult[6] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === arg0) {
        if (cResult[8] === arg1) {
          if (cResult[9] === tmp6) {
            let tmp12 = cResult[10];
            let tmp13 = cResult[11];
          }
          const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp12, tmp13);
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ConjureChatStore];
            cResult[12] = items1;
            let tmp15 = items1;
          } else {
            tmp15 = cResult[12];
          }
          if (cResult[13] === arg2) {
            if (cResult[14] === arg0) {
              let tmp17 = cResult[15];
              let tmp18 = cResult[16];
            }
            const stateFromStores1 = tmp(504).useStateFromStores(tmp15, tmp17, tmp18);
            const _Symbol3 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [ConjureSettingsStore, closure_4];
              cResult[17] = items2;
              class B {
                constructor() {
                  settings = closure_6.getSettings(closure_0);
                  if (null == settings) {
                    items = [];
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_1;
                    obj = closure_0(closure_1[11]);
                    tmp4 = closure_1;
                    result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                      channel = channel.getChannel(arg0);
                      let name;
                      if (channel != null) {
                        name = channel.name;
                      }
                      if (name == null) {
                        name = null;
                      }
                      return name;
                    });
                    items = result.map((text) => text.text);
                  }
                  return items;
                }
              }
            } else {
              const tmp21 = cResult[17];
            }
            if (cResult[18] === arg0) {
              if (cResult[19] === arg1) {
                let tmp24 = cResult[20];
                let tmp25 = cResult[21];
              }
              const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp21, tmp25, tmp24);
              if (cResult[22] === stateFromStores) {
                if (cResult[23] === tmp8) {
                  if (cResult[24] === stateFromStoresArray) {
                    if (cResult[25] === stateFromStores1) {
                      let tmp27 = cResult[26];
                    }
                    return tmp27;
                  }
                }
              }
              const obj3 = { done: stateFromStores, superseded: stateFromStores1, summary: null, markSaved: null };
              class B {
                constructor() {
                  settings = closure_6.getSettings(closure_0);
                  if (null == settings) {
                    items = [];
                  } else {
                    tmp2 = closure_0;
                    tmp3 = closure_1;
                    obj = closure_0(closure_1[11]);
                    tmp4 = closure_1;
                    result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                      channel = channel.getChannel(arg0);
                      let name;
                      if (channel != null) {
                        name = channel.name;
                      }
                      if (name == null) {
                        name = null;
                      }
                      return name;
                    });
                    items = result.map((text) => text.text);
                  }
                  return items;
                }
              }
              obj3.markSaved = tmp8;
              class A {
                constructor() {
                  tmp = closure_1;
                  settings = closure_6.getSettings(closure_0);
                  flag = false;
                  if (closure_4) {
                    tmp3 = null;
                    flag = false;
                    if (null != settings) {
                      tmp4 = closure_0;
                      tmp5 = closure_1;
                      obj = closure_0(closure_1[8]);
                      result = obj.conjureSettingsRequestKeys(tmp, settings);
                      num = 0;
                      tmp6 = result.length > 0;
                      if (tmp6) {
                        tmp4Result = tmp4(tmp5[8]);
                        obj1 = { keys: null };
                        obj1.keys = result;
                        tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj1, settings);
                      }
                      flag = tmp6;
                    }
                  }
                  return flag;
                }
              }
              cResult[22] = stateFromStores;
              cResult[23] = tmp8;
              cResult[24] = stateFromStoresArray;
              cResult[25] = stateFromStores1;
              cResult[26] = obj3;
              tmp27 = obj3;
              const tmpResult4 = tmp(504);
            }
            class B {
              constructor() {
                settings = closure_6.getSettings(closure_0);
                if (null == settings) {
                  items = [];
                } else {
                  tmp2 = closure_0;
                  tmp3 = closure_1;
                  obj = closure_0(closure_1[11]);
                  tmp4 = closure_1;
                  result = obj.conjureSettingsSummary(closure_1, settings, (arg0) => {
                    channel = channel.getChannel(arg0);
                    let name;
                    if (channel != null) {
                      name = channel.name;
                    }
                    if (name == null) {
                      name = null;
                    }
                    return name;
                  });
                  items = result.map((text) => text.text);
                }
                return items;
              }
            }
            const items3 = [, ];
            class A {
              constructor() {
                tmp = closure_1;
                settings = closure_6.getSettings(closure_0);
                flag = false;
                if (closure_4) {
                  tmp3 = null;
                  flag = false;
                  if (null != settings) {
                    tmp4 = closure_0;
                    tmp5 = closure_1;
                    obj = closure_0(closure_1[8]);
                    result = obj.conjureSettingsRequestKeys(tmp, settings);
                    num = 0;
                    tmp6 = result.length > 0;
                    if (tmp6) {
                      tmp4Result = tmp4(tmp5[8]);
                      obj1 = { keys: null };
                      obj1.keys = result;
                      tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj1, settings);
                    }
                    flag = tmp6;
                  }
                }
                return flag;
              }
            }
            items3[1] = arg1;
            cResult[18] = arg0;
            cResult[19] = arg1;
            cResult[20] = items3;
            cResult[21] = B;
            tmp25 = B;
            tmp24 = items3;
            const tmpResult3 = tmp(504);
          }
          const items4 = [, ];
          class A {
            constructor() {
              tmp = closure_1;
              settings = closure_6.getSettings(closure_0);
              flag = false;
              if (closure_4) {
                tmp3 = null;
                flag = false;
                if (null != settings) {
                  tmp4 = closure_0;
                  tmp5 = closure_1;
                  obj = closure_0(closure_1[8]);
                  result = obj.conjureSettingsRequestKeys(tmp, settings);
                  num = 0;
                  tmp6 = result.length > 0;
                  if (tmp6) {
                    tmp4Result = tmp4(tmp5[8]);
                    obj1 = { keys: null };
                    obj1.keys = result;
                    tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj1, settings);
                  }
                  flag = tmp6;
                }
              }
              return flag;
            }
          }
          items4[1] = arg2;
          cResult[13] = arg2;
          cResult[14] = arg0;
          cResult[15] = tmp19;
          cResult[16] = items4;
          tmp18 = items4;
          tmp17 = tmp19;
          const tmpResult = tmp(504);
        }
      }
      class A {
        constructor() {
          tmp = closure_1;
          settings = closure_6.getSettings(closure_0);
          flag = false;
          if (closure_4) {
            tmp3 = null;
            flag = false;
            if (null != settings) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              obj = closure_0(closure_1[8]);
              result = obj.conjureSettingsRequestKeys(tmp, settings);
              num = 0;
              tmp6 = result.length > 0;
              if (tmp6) {
                tmp4Result = tmp4(tmp5[8]);
                obj1 = { keys: null };
                obj1.keys = result;
                tmp6 = !tmp4Result.conjureSettingsRequestBlocks(obj1, settings);
              }
              flag = tmp6;
            }
          }
          return flag;
        }
      }
      const items5 = [arg0, arg1, tmp6];
      cResult[7] = arg0;
      cResult[8] = arg1;
      cResult[9] = tmp6;
      cResult[10] = A;
      cResult[11] = items5;
      tmp13 = items5;
      tmp12 = A;
    }
  }
  let hasItem = tmp5;
  if (null != arg2) {
    hasItem = obj2.has(arg2);
  }
  cResult[0] = arg2;
  cResult[1] = obj2;
  cResult[2] = tmp5;
  cResult[3] = hasItem;
  tmp6 = hasItem;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function useConjureSettingsAsk(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  let obj = closure_11();
  [tmp2, noop] = noop.useState(false);
  if (null != arg2) {
    let hasItem = obj.has(arg2);
  }
  let items = [arg2];
  const obj3 = { done: null, superseded: null, summary: null, markSaved: null };
  const callback = noop.useCallback(() => {
    if (null != closure_2) {
      markSettingsRequestSaved(tmp);
    } else {
      noop(true);
    }
  }, items);
  const tmp = _slicedToArray(noop.useState(false), 2);
  const items1 = [ConjureSettingsStore];
  const items2 = [arg0, arg1, hasItem];
  obj3.done = require("initialize").useStateFromStores(items1, () => {
    const settings = ConjureSettingsStore.getSettings(closure_0);
    let flag = false;
    if (hasItem) {
      flag = false;
      if (null != settings) {
        const result = conjureSettingsRequest.conjureSettingsRequestKeys(closure_1, settings);
        let tmp6 = result.length > 0;
        if (tmp6) {
          const obj2 = { keys: result };
          tmp6 = !conjureSettingsRequest.conjureSettingsRequestBlocks(obj2, settings);
          const tmp4Result = conjureSettingsRequest;
        }
        flag = tmp6;
      }
    }
    return flag;
  }, items2);
  const obj4 = require("initialize");
  const items3 = [ConjureChatStore];
  const items4 = [arg0, arg2];
  obj3.superseded = require("initialize").useStateFromStores(items3, () => {
    hasItem = null != closure_2;
    if (hasItem) {
      hasItem = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0)).has(tmp);
      const obj = supersededSettingsRequests(ConjureChatStore.getMessages(closure_0));
    }
    return hasItem;
  }, items4);
  const obj5 = require("initialize");
  const items5 = [ConjureSettingsStore, hasItem];
  const items6 = [arg0, arg1];
  obj3.summary = require("initialize").useStateFromStoresArray(items5, () => {
    const settings = ConjureSettingsStore.getSettings(closure_0);
    if (null == settings) {
      let items = [];
    } else {
      const result = conjureSettingsSummary.conjureSettingsSummary(closure_1, settings, (arg0) => {
        channel = channel.getChannel(arg0);
        let name;
        if (channel != null) {
          name = channel.name;
        }
        if (name == null) {
          name = null;
        }
        return name;
      });
      items = result.map((text) => text.text);
    }
    return items;
  }, items6);
  obj3.markSaved = callback;
  return obj3;
});