// discord_app/modules/devtools/native/useSortedDevToolsScreens.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DevToolsActionCreators from "../DevToolsActionCreators.tsx";
import DevToolsScreens from "components/DevToolsScreens.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import DevToolsSettingsStore from "../DevToolsSettingsStore.tsx";

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
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
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
}
export const updateSortOrder = function updateSortOrder(arg0, down) {
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
  const index = items.indexOf(arg0);
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
