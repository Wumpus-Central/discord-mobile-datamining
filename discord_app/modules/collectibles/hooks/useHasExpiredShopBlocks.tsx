// === Module 14954: useHasExpiredShopBlocks ===

// Module 14954 (useHasExpiredShopBlocks)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { MAX_TIMEOUT_MS } from "ME" /* 676 */;

const require = fn;
({ useEffect: c3, useState: c4 } = noop);
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, flag2, flag) => {
  closure_0 = arg0;
  closure_1 = flag2;
  const callback = flag;
  const tmp = callback(callback3(false), 2);
  const callback2 = tmp[1];
  const items = [flag2, flag, arg0];
  callback2(() => {
    let timeout = null;
    const item = timeout.forEach((item, index) => {
      if (item.type === callback(flag2[3]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != item.endTime) {
          const endTime2 = item.endTime;
          time = endTime2.getTime();
        }
        let time1 = time;
      } else {
        time1 = null;
        if (item.type === callback(flag2[3]).ShopBlockType.COUNTDOWN_TIMER) {
          const endTime = item.endTime;
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
      if (!closure_2) {
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
            }, Math.min(MAX_TIMEOUT_MS, diff));
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
    callback(false);
  }, items);
  return tmp[0];
};