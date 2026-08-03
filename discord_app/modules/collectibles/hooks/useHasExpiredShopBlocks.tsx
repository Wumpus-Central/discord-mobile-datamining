// === Module 14626: useHasExpiredShopBlocks ===

// Module 14626 (useHasExpiredShopBlocks)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { MAX_TIMEOUT_MS } from "ME";

let c3;
let c4;
const require = arg1;
({ useEffect: c3, useState: c4 } = noop);
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const callback = arg2;
  const tmp = callback(callback3(false), 2);
  const callback2 = tmp[1];
  const items = [arg1, arg2, arg0];
  callback2(() => {
    let timeout = null;
    const item = timeout.forEach((type) => {
      if (type.type === callback(outer1_1[3]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != type.endTime) {
          const endTime2 = type.endTime;
          time = endTime2.getTime();
        }
        let time1 = time;
      } else {
        time1 = null;
        if (type.type === callback(outer1_1[3]).ShopBlockType.COUNTDOWN_TIMER) {
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
    });
    if (!closure_1) {
      if (!_slicedToArray) {
        if (null != tmp2) {
          const _Date = Date;
          const diff = tmp2 - Date.now();
          if (diff <= 0) {
            callback(true);
          } else {
            callback(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            timeout = setTimeout(() => {
              callback2(true);
            }, Math.min(outer1_5, diff));
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
    callback(false);
  }, items);
  return tmp[0];
};