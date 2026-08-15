// discord_app/modules/image/usePreloadedAsset.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../utils/PlatformUtils.tsx";

const require = arg1;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default function usePreloadedAsset(arg0) {
  let c5;
  let tmp9;
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
  let dependencyMap;
  let callback;
  let combined;
  c5 = undefined;
  const items = [c5];
  const stateFromStores = _initialize.useStateFromStores(items, () => _undefined2.useReducedMotion);
  let obj2 = _initialize;
  const tmp3 = _set.isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp3;
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = null != num(16171);
  }
  callback = tmp4;
  let str = "image";
  if (tmp3) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  const obj3 = _set;
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
      if (c3) {
        c0 = false;
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          if (!c0) {
            c0 = true;
            const obj = { key: null, status: "timed-out" };
            obj[0] = outer1_4;
            outer1_5(obj);
          }
        }, timeout);
        if (_undefined) {
          if (null != num(_undefined[5])) {
            let preloadResult = num(_undefined[5]).preload(tmp);
            const obj2 = num(_undefined[5]);
          }
          preloadResult.then(() => {
            if (!c0) {
              c0 = true;
              const obj = { key: null, status: "preloaded" };
              obj[0] = outer1_4;
              outer1_5(obj);
            }
          }, () => {
            if (!c0) {
              c0 = true;
              const obj = { key: null, status: "skipped" };
              obj[0] = outer1_4;
              outer1_5(obj);
            }
          });
          return () => {
            let c0 = true;
            clearTimeout(closure_1);
          };
        }
        preloadResult = num(_undefined[6]).preload(tmp, timeout + 1000);
        let obj = num(_undefined[6]);
        const tmp4 = timeout;
      }
    }
  }, items1);
  return { status };
};