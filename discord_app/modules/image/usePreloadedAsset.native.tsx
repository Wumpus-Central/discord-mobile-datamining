// discord_app/modules/image/usePreloadedAsset.native.tsx
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../a11y/AccessibilityStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../utils/PlatformUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default function usePreloadedAsset(arg0) {
  const _require = arg0;
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
  dependencyMap = undefined;
  let callback;
  let combined;
  c5 = undefined;
  const items = [c5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => _undefined.useReducedMotion,
  );
  let obj2 = initialize;
  const tmp3 = require("../../utils/PlatformUtils.tsx").isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp3;
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = null != num(16768);
  }
  callback = tmp4;
  let str = "image";
  if (tmp3) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  const obj3 = set;
  const obj4 = combined;
  [tmp9, c5] = callback(combined.useState(null), 2);
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
            const obj = { key: null, status: "timed-out" };
            obj[0] = closure_1_4;
            closure_1_5(obj);
          }
        }, timeout);
        if (dependencyMap) {
          if (null != num(16768)) {
            let preloadResult = num(16768).preload(tmp);
            const obj2 = num(16768);
          }
          preloadResult.then(
            () => {
              if (!c0) {
                c0 = true;
                const obj = { key: null, status: "preloaded" };
                obj[0] = closure_1_4;
                closure_1_5(obj);
              }
            },
            () => {
              if (!c0) {
                c0 = true;
                const obj = { key: null, status: "skipped" };
                obj[0] = closure_1_4;
                closure_1_5(obj);
              }
            },
          );
          return () => {
            c0 = true;
            clearTimeout(closure_1);
          };
        }
        preloadResult = num(5501).preload(tmp, timeout + 1000);
        let obj = num(5501);
        const tmp4 = timeout;
      }
    }
  }, items1);
  return { status };
}
