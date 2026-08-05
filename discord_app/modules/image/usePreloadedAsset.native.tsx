// discord_app/modules/image/usePreloadedAsset.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { TurboModuleRegistry } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../../utils/PlatformUtils.tsx";

const require = arg1;
let closure_6 = TurboModuleRegistry.get("NativeAPNGDecorationModule");
const result = require("get ActivityIndicator").fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default function usePreloadedAsset(arg0) {
  let c5;
  let tmp8;
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
  const tmp2 = _set.isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp2;
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = null != closure_6;
  }
  callback = tmp3;
  let str = "image";
  if (tmp2) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  const obj3 = _set;
  const obj4 = combined;
  [tmp8, c5] = callback(combined.useState(null), 2);
  let status = "skipped";
  if (null != arg0) {
    status = "skipped";
    if (tmp3) {
      let key;
      if (tmp8 != null) {
        key = tmp8.key;
      }
      let str3 = "pending";
      if (key === combined) {
        str3 = tmp8.status;
      }
      status = str3;
    }
  }
  const items1 = [arg0, combined, tmp3, tmp2, num];
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
          if (null != outer1_6) {
            let preloadResult = outer1_6.preload(tmp);
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
        const obj2 = num(_undefined[6]);
        const tmp4 = timeout;
      }
    }
  }, items1);
  return { status };
};