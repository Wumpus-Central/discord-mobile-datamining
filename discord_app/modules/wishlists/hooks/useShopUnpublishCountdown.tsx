// === Module 14490: useShopUnpublishCountdown ===

// Module 14490 (useShopUnpublishCountdown)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let c4 = 2147483647;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useShopUnpublishCountdown.tsx");

export default function useShopUnpublishCountdown(getTime) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let time;
  dependencyMap = time(noop.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  time = undefined;
  if (getTime != null) {
    time = getTime.getTime();
  }
  items = [time, flag];
  const effect = noop.useEffect(() => {
    if (null != tick) {
      const diff = tmp - c0(8883).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
      dependencyMap = diff;
      tick = function tick() {
        const timestamp = Date.now();
        if (timestamp < diff) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          let timeout = setTimeout(tick, Math.min(tmp2 - timestamp, c4));
        } else {
          diff();
          if (timestamp < time) {
            let num = 60000;
            if (!c0) {
              num = c4;
            }
            timeout = setTimeout(tick, Math.min(num, tmp5 - timestamp));
          }
        }
      };
      const _Date = Date;
      let timestamp = Date.now();
      if (timestamp < diff) {
        let _setTimeout = setTimeout;
        let _Math = Math;
        let timeout = setTimeout(tick, Math.min(diff - timestamp, closure_1_4));
      } else {
        dependencyMap();
        if (timestamp < tmp) {
          let num = 60000;
          if (!timeout) {
            num = closure_1_4;
          }
          timeout = setTimeout(tick, Math.min(num, tmp - timestamp));
        }
      }
      return () => clearTimeout(closure_0);
    }
  }, items);
  return flag(8883).getShopUnpublishCountdown(getTime);
};
export function useHasShopUnpublishCountdown(memo1) {
  const nextFutureShopUnpublishedAt = require("WishlistShopUnpublishUtils").getNextFutureShopUnpublishedAt(memo1);
  _require = false;
  let time;
  dependencyMap = time(noop.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  time = undefined;
  if (nextFutureShopUnpublishedAt != null) {
    time = nextFutureShopUnpublishedAt.getTime();
  }
  items = [time, false];
  const effect = noop.useEffect(() => {
    if (null != tick) {
      const diff = tmp - c0(8883).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
      dependencyMap = diff;
      tick = function tick() {
        const timestamp = Date.now();
        if (timestamp < diff) {
          const _setTimeout = setTimeout;
          const _Math = Math;
          let timeout = setTimeout(tick, Math.min(tmp2 - timestamp, c4));
        } else {
          diff();
          if (timestamp < time) {
            let num = 60000;
            if (!c0) {
              num = c4;
            }
            timeout = setTimeout(tick, Math.min(num, tmp5 - timestamp));
          }
        }
      };
      const _Date = Date;
      let timestamp = Date.now();
      if (timestamp < diff) {
        let _setTimeout = setTimeout;
        let _Math = Math;
        let timeout = setTimeout(tick, Math.min(diff - timestamp, closure_1_4));
      } else {
        dependencyMap();
        if (timestamp < tmp) {
          let num = 60000;
          if (!timeout) {
            num = closure_1_4;
          }
          timeout = setTimeout(tick, Math.min(num, tmp - timestamp));
        }
      }
      return () => clearTimeout(closure_0);
    }
  }, items);
  const obj = require("WishlistShopUnpublishUtils");
  return null != require("WishlistShopUnpublishUtils").getShopUnpublishCountdown(nextFutureShopUnpublishedAt);
}