// discord_app/modules/devtools/native/useSortedDevToolsScreens.tsx
import updateDevToolsSettings from "../DevToolsActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import initialize from "../DevToolsSettingsStore.tsx";

require = fn;
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = closure_3.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(13949).DevToolsScreens);
  const found = entries.filter((item, index) => {
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
let result = require("obj132").fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [closure_3];
  sortedScreenKeys(589).useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  sortedScreenKeys = undefined;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = closure_3.sortedScreenKeys;
  }
  const entries = Object.entries(sortedScreenKeys(13949).DevToolsScreens);
  const found = entries.filter((item, index) => {
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
};
export const updateSortOrder = function updateSortOrder(closure_0, down) {
  const items = [...closure_3.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
  while (tmp2 !== undefined) {
    let first = callback(tmp3, 1)[0];
    let tmp6 = first;
    if (!items.includes(first)) {
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