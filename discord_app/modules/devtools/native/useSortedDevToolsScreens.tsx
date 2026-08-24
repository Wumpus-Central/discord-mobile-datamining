// === Module 14016: getSortedDevToolsScreens ===

// Module 14016 (getSortedDevToolsScreens)
import updateDevToolsSettings from "updateDevToolsSettings" /* 14019 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "initialize" /* 7509 */;

require = arg1;
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = closure_3.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(14017).DevToolsScreens);
  const found = entries.filter((arg0) => {
    [, obj] = arg0;
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
let result = require("set").fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [closure_3];
  sortedScreenKeys = sortedScreenKeys(589).useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  sortedScreenKeys = undefined;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = closure_3.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(14017).DevToolsScreens);
  const found = entries.filter((arg0) => {
    [, obj] = arg0;
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
};
export const updateSortOrder = function updateSortOrder(closure_0, down) {
  const items = [...closure_3.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let first = callback(tmp3, 1)[0];
    let tmp6 = first;
    if (!items.includes(first)) {
      let tmp7 = first;
      let arr = items.push(tmp6);
    }
    continue;
  }
  const index = items.indexOf(closure_0);
  if ("up" === down) {
    items[index] = items[index - 1];
    items[index - 1] = items[index];
  } else if ("down" === down) {
    items[index] = items[index + 1];
    items[index + 1] = items[index];
  }
  tmp2 = getSortedDevToolsScreens()[Symbol.iterator]();
  const result = updateDevToolsSettings.updateDevToolsSettings({ sortedScreenKeys: items });
};