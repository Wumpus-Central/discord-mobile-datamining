import _slicedToArray from "_slicedToArray";
import initialize from "initialize";

const require = arg1;
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = initialize.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(13718).DevToolsScreens);
  const found = entries.filter((arg0) => {
    let obj;
    [, obj] = arg0;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    let tmp;
    let tmp2;
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
let result = require("DevToolsScreens").fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [initialize];
  sortedScreenKeys = sortedScreenKeys(589).useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  sortedScreenKeys = undefined;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = initialize.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(13718).DevToolsScreens);
  const found = entries.filter((arg0) => {
    let obj;
    [, obj] = arg0;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    let tmp;
    let tmp2;
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
  const items = [...initialize.sortedScreenKeys];
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
  const result = require(13720) /* updateDevToolsSettings */.updateDevToolsSettings({ sortedScreenKeys: items });
};