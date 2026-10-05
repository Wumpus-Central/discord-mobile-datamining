// discord_app/modules/devtools/native/useSortedDevToolsScreens.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import DevToolsActionCreators from "../DevToolsActionCreators.tsx";
import DevToolsScreens from "components/DevToolsScreens.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import DevToolsSettingsStore from "../DevToolsSettingsStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f121023 = (item) => {
  let obj;
  [, obj] = item;
  const tmp = null == obj.predicate || obj.predicate();
  return tmp;
};
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter(f121023);
  return found.sort((arg0, arg1) => {
    let num2;
    let tmp;
    let tmp2;
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (-1 !== index) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react;
      const cResult = obj.c(4);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let sortedScreenKeys = stateFromStores;
        if (stateFromStores === undefined) {
          sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
        }
        const _Object = Object;
        const entries = Object.entries(DevToolsScreens.DevToolsScreens);
        const found = entries.filter(f121023);
        const sorted = found.sort((arg0, arg1) => {
          let num2;
          let tmp;
          let tmp2;
          [tmp] = arg0;
          [tmp2] = arg1;
          const index = sortedScreenKeys.indexOf(tmp);
          const index1 = sortedScreenKeys.indexOf(tmp2);
          let num = -1;
          if (-1 !== index) {
            let num3 = 1;
            if (-1 !== index) {
              if (num !== index1) {
                num = index - index1;
              }
              num3 = num;
            }
            num2 = num3;
          } else {
            num2 = 0;
          }
          return num2;
        });
        cResult[2] = stateFromStores;
        cResult[3] = sorted;
        tmp8 = sorted;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      const obj = get_initialized;
      const items = [DevToolsSettingsStore];
      obj.useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
      let sortedScreenKeys;
      if (sortedScreenKeys === undefined) {
        sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
      }
      const entries = Object.entries(DevToolsScreens.DevToolsScreens);
      const found = entries.filter(f121023);
      return found.sort((arg0, arg1) => {
        let num2;
        let tmp;
        let tmp2;
        [tmp] = arg0;
        [tmp2] = arg1;
        const index = sortedScreenKeys.indexOf(tmp);
        const index1 = sortedScreenKeys.indexOf(tmp2);
        let num = -1;
        if (-1 !== index) {
          let num3 = 1;
          if (-1 !== index) {
            if (num !== index1) {
              num = index - index1;
            }
            num3 = num;
          }
          num2 = num3;
        } else {
          num2 = 0;
        }
        return num2;
      });
    };
let result = size.fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default tmp2;
export const updateSortOrder = function updateSortOrder(screenKey, down) {
  const items = [...DevToolsSettingsStore.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
  const tmp2 = tmp[Symbol.iterator]();
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
  const obj = DevToolsActionCreators;
  const result = obj.updateDevToolsSettings({ sortedScreenKeys: items });
};
