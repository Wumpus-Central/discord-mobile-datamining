// discord_common/js/packages/shallow-equal/shallowEqual.tsx
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = {};
const result = size.fileFinishedImporting("../discord_common/js/packages/shallow-equal/shallowEqual.tsx");

export default function shallowEqual(activeMediaPlayerSource, _require, arr) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = closure_0;
  }
  ({ shouldWarnLargeObjects, logCallback } = tmp);
  if (activeMediaPlayerSource === _require) {
    return true;
  } else {
    if (undefined !== activeMediaPlayerSource) {
      if (undefined !== _require) {
        const _Object = Object;
        const keys = Object.keys(activeMediaPlayerSource);
        const _Object2 = Object;
        if (keys.length !== Object.keys(_require).length) {
          return false;
        } else {
          let num = 0;
          if (0 < keys.length) {
            while (true) {
              let tmp4 = keys[num];
              if (activeMediaPlayerSource[tmp4] !== _require[tmp4]) {
                if (null == arr) {
                  break;
                } else if (!arr.includes(tmp4)) {
                  break;
                }
              }
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return tmp2;
  }
}
export const areArraysShallowEqual = function areArraysShallowEqual(items, current) {
  closure_0 = current;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = closure_0;
  }
  ({ logCallback, shouldWarnLargeObjects } = tmp);
  return null != current && items.length === current.length && items.every((item, index) => closure_0[index] === item);
};
