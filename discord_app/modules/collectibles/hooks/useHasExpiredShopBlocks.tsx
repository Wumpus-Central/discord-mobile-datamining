// discord_app/modules/collectibles/hooks/useHasExpiredShopBlocks.tsx
import Constants from "../../../Constants.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
const f121539 = (type) => {
  const tmp = time1;
  if (type.type === time1(closure_2_1[5]).ShopBlockType.IMMERSIVE_BANNER) {
    let time = null;
    if (null != type.endTime) {
      const endTime2 = type.endTime;
      time = endTime2.getTime();
    }
    time1 = time;
  } else {
    time1 = null;
    if (type.type === tmp(closure_2_1[5]).ShopBlockType.COUNTDOWN_TIMER) {
      const endTime = type.endTime;
      time1 = endTime.getTime();
    }
  }
  let tmp5 = null == time1;
  if (!tmp5) {
    tmp5 = null != time1 && time1 < time1;
    const tmp6 = null != time1 && time1 < time1;
  }
};
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useState: closure_4 } = react);
const MAX_TIMEOUT_MS = Constants.MAX_TIMEOUT_MS;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      let closure_2;
      let closure_3;
      _require = arg0;
      dependencyMap = arg1;
      _slicedToArray = arg2;
      const obj = require("react");
      const cResult = obj.c(5);
      [, closure_3] = closure_4(false);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp4;
          let tmp5;
          if (cResult[2] === arg2) {
            tmp4 = cResult[3];
            tmp5 = cResult[4];
          }
          closure_3(tmp4, tmp5);
          return tmp3;
        }
      }
      const fn = function p() {
        let timeout;
        let c0 = null;
        const item = timeout.forEach(f121539);
        if (!closure_1) {
          if (!closure_2) {
            if (null != c0) {
              const _Date = Date;
              const diff = tmp2 - Date.now();
              if (diff <= 0) {
                closure_3(true);
              } else {
                closure_3(false);
                const _setTimeout = setTimeout;
                const _Math = Math;
                timeout = setTimeout(
                  () => {
                    closure_1_3(true);
                  },
                  Math.min(MAX_TIMEOUT_MS, diff),
                );
                return () => clearTimeout(closure_0);
              }
            }
          }
        }
        closure_3(false);
      };
      const items = [arg1, arg2, arg0];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = arg2;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_2;
      let closure_3;
      let first;
      let closure_0 = arg0;
      let closure_1 = arg1;
      _slicedToArray = arg2;
      [first, closure_3] = closure_4(false);
      const items = [arg1, arg2, arg0];
      closure_3(() => {
        let timeout;
        let time1 = null;
        const item = timeout.forEach(f121539);
        if (!closure_1) {
          if (!closure_2) {
            if (null != time1) {
              let tmp5 = globalThis;
              const _Date = Date;
              const diff = tmp2 - Date.now();
              if (diff <= 0) {
                closure_3(true);
              } else {
                closure_3(false);
                const _setTimeout = setTimeout;
                const _Math = Math;
                timeout = setTimeout(
                  () => {
                    closure_1_3(true);
                  },
                  Math.min(MAX_TIMEOUT_MS, diff),
                );
                return () => clearTimeout(closure_0);
              }
            }
          }
        }
        closure_3(false);
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = tmp3;
