// === Module 16037: useSortedDevToolsScreens ===

// Module 16037 (useSortedDevToolsScreens)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15795 */;
import DevToolsScreens from "DevToolsScreens" /* 15799 */;
import _slicedToArray from "module_32" /* 32 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7401 */;

require = fn;
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter((item) => {
    [, obj] = item;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (!tmp5) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedDevToolsScreens() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevToolsSettingsStore];
    const fn = function s() {
      return sortedScreenKeys.sortedScreenKeys;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let sortedScreenKeys = stateFromStores;
    if (stateFromStores === undefined) {
      sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
    }
    const _Object = Object;
    const entries = Object.entries(DevToolsScreens.DevToolsScreens);
    const found = entries.filter((item) => {
      [, obj] = item;
      return null == obj.predicate || obj.predicate();
    });
    const sorted = found.sort((arg0, arg1) => {
      [tmp] = arg0;
      [tmp2] = arg1;
      const index = sortedScreenKeys.indexOf(tmp);
      const index1 = sortedScreenKeys.indexOf(tmp2);
      let num = -1;
      if (-1 !== index) {
        let num3 = 1;
        if (!tmp5) {
          if (num !== index1) {
            num = index - index1;
          }
          num3 = num;
        }
        let num2 = num3;
      } else {
        num2 = 0;
      }
      return num2;
    });
    cResult[2] = stateFromStores;
    cResult[3] = sorted;
    let tmp8 = sorted;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useSortedDevToolsScreens() {
  const items = [DevToolsSettingsStore];
  initialize.useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  let sortedScreenKeys;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter((item) => {
    [, obj] = item;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (!tmp5) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
});
export const updateSortOrder = function updateSortOrder(screenKey, down) {
  const items = [...DevToolsSettingsStore.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
  while (tmp2 !== undefined) {
    let first = _slicedToArray(tmp3, 1)[0];
    let tmp6 = first;
    if (!items.includes(first)) {
      let arr = items.push(tmp6);
    }
    continue;
  }
  const index = items.indexOf(screenKey);
  if ("up" === down) {
    items[index] = items[index - 1];
    items[index - 1] = items[index];
  } else if ("down" === down) {
    items[index] = items[index + 1];
    items[index + 1] = items[index];
  }
  tmp2 = getSortedDevToolsScreens()[Symbol.iterator]();
  const result = DevToolsActionCreators.updateDevToolsSettings({ sortedScreenKeys: items });
};