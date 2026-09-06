// discord_app/modules/collectibles/hooks/useHasExpiredShopBlocks.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
const MAX_TIMEOUT_MS = fn(1074).MAX_TIMEOUT_MS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  _slicedToArray = arg2;
  const tmp = _slicedToArray(closure_4(false), 2);
  closure_3 = tmp[1];
  const items = [arg1, arg2, arg0];
  closure_3(() => {
    let time1 = null;
    const item = time1.forEach((type) => {
      if (type.type === time1(dependencyMap[3]).ShopBlockType.IMMERSIVE_BANNER) {
        let time = null;
        if (null != type.endTime) {
          const endTime2 = type.endTime;
          time = endTime2.getTime();
        }
        time1 = time;
      } else {
        time1 = null;
        if (type.type === time1(dependencyMap[3]).ShopBlockType.COUNTDOWN_TIMER) {
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
            time1 = setTimeout(
              () => {
                closure_1_3(true);
              },
              Math.min(MAX_TIMEOUT_MS, diff),
            );
            return () => clearTimeout(time1);
          }
        }
      }
    }
    closure_3(false);
  }, items);
  return tmp[0];
};
