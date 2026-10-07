// === Module 15743: useHasExpiredShopBlocks ===

// Module 15743 (useHasExpiredShopBlocks)
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

const require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
const MAX_TIMEOUT_MS = fn(1085).MAX_TIMEOUT_MS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
  const cResult = require("c").c(5);
  const obj = require("c");
  closure_3 = _slicedToArray(closure_4(false), 2)[1];
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg2) {
        let tmp4 = cResult[3];
        let tmp5 = cResult[4];
      }
      closure_3(tmp4, tmp5);
      return tmp3;
    }
  }
  const fn = function p() {
    let timeout = null;
    const item = timeout.forEach((type) => {
      if (type.type === time1(dependencyMap[5]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != type.endTime) {
          const endTime2 = type.endTime;
          time = endTime2.getTime();
        }
        time1 = time;
      } else {
        time1 = null;
        if (type.type === tmp(dependencyMap[5]).ShopBlockType.COUNTDOWN_TIMER) {
          const endTime = type.endTime;
          time1 = endTime.getTime();
        }
      }
      let tmp5 = null == time1;
      if (!tmp5) {
        let tmp6 = null != time1;
        if (tmp6) {
          tmp6 = time1 < time1;
        }
        tmp5 = tmp6;
      }
      tmp = time1;
    });
    if (!closure_1) {
      if (!closure_2) {
        if (null != tmp2) {
          const _Date = Date;
          const diff = tmp2 - Date.now();
          if (diff <= 0) {
            closure_3(true);
          } else {
            closure_3(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            timeout = setTimeout(() => {
              closure_1_3(true);
            }, Math.min(MAX_TIMEOUT_MS, diff));
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
}) : ((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  _slicedToArray = arg2;
  let tmp = _slicedToArray(closure_4(false), 2);
  closure_3 = tmp[1];
  const items = [arg1, arg2, arg0];
  closure_3(() => {
    let time1 = null;
    const item = time1.forEach((type) => {
      if (type.type === time1(dependencyMap[5]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != type.endTime) {
          const endTime2 = type.endTime;
          time = endTime2.getTime();
        }
        time1 = time;
      } else {
        time1 = null;
        if (type.type === tmp(dependencyMap[5]).ShopBlockType.COUNTDOWN_TIMER) {
          const endTime = type.endTime;
          time1 = endTime.getTime();
        }
      }
      let tmp5 = null == time1;
      if (!tmp5) {
        let tmp6 = null != time1;
        if (tmp6) {
          tmp6 = time1 < time1;
        }
        tmp5 = tmp6;
      }
      tmp = time1;
    });
    if (!dependencyMap) {
      if (!closure_2) {
        if (null != tmp2) {
          const _Date = Date;
          const diff = tmp2 - Date.now();
          if (diff <= 0) {
            closure_3(true);
          } else {
            closure_3(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            time1 = setTimeout(() => {
              closure_1_3(true);
            }, Math.min(MAX_TIMEOUT_MS, diff));
            return () => clearTimeout(time1);
          }
        }
      }
    }
    closure_3(false);
  }, items);
  return tmp[0];
});