// discord_app/modules/image/usePreloadedAsset.native.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default function usePreloadedAsset(arg0) {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isAPNG;
  if (flag === undefined) {
    flag = true;
  }
  let num = obj.timeoutMs;
  if (num === undefined) {
    num = 2000;
  }
  _slicedToArray = undefined;
  let combined;
  c5 = undefined;
  const items = [c5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined.useReducedMotion);
  let obj2 = require("initialize");
  const tmp3 = require("PlatformUtils").isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp3;
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = null != num(16953);
  }
  _slicedToArray = tmp4;
  let str = "image";
  if (tmp3) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  const obj3 = require("PlatformUtils");
  const obj4 = combined;
  [tmp9, c5] = _slicedToArray(combined.useState(null), 2);
  let status = "skipped";
  if (null != arg0) {
    status = "skipped";
    if (tmp4) {
      let key;
      if (tmp9 != null) {
        key = tmp9.key;
      }
      let str3 = "pending";
      if (key === combined) {
        str3 = tmp9.status;
      }
      status = str3;
    }
  }
  const items1 = [arg0, combined, tmp4, tmp3, num];
  const effect = obj4.useEffect(() => {
    if (null != c0) {
      if (closure_3) {
        c0 = false;
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          if (!c0) {
            c0 = true;
            const obj = { key: combined, status: "timed-out" };
            c5(obj);
          }
        }, timeout);
        if (dependencyMap) {
          if (null != num(16953)) {
            let preloadResult = num(16953).preload(tmp);
            const obj2 = num(16953);
          }
          preloadResult.then(
            () => {
              if (!c0) {
                c0 = true;
                const obj = { key: combined, status: "preloaded" };
                c5(obj);
              }
            },
            () => {
              if (!c0) {
                c0 = true;
                const obj = { key: combined, status: "skipped" };
                c5(obj);
              }
            },
          );
          return () => {
            c0 = true;
            clearTimeout(closure_1);
          };
        }
        preloadResult = num(5587).preload(tmp, timeout + 1000);
        let obj = num(5587);
      }
    }
  }, items1);
  return { status };
}
