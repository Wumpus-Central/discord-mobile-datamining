// === Module 15061: usePrioritizedWishlistItems ===

// Module 15061 (usePrioritizedWishlistItems)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
function getUpcomingShopUnpublish(shopUnpublishedAt, arg1) {
  let tmp = null;
  if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
    tmp = null;
    if (null != shopUnpublishedAt.shopUnpublishedAt) {
      shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
      const time = shopUnpublishedAt.getTime();
      const _Number = Number;
      let tmp4 = null;
      if (Number.isFinite(time)) {
        tmp4 = time;
      }
      tmp = tmp4;
    }
  }
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp > arg1) {
      tmp5 = tmp;
    }
  }
  return tmp5;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/usePrioritizedWishlistItems.tsx");

export default function usePrioritizedWishlistItems(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let tmp = first(noop.useState(Date.now), 2);
  first = tmp[0];
  noop = tmp[1];
  items = [arg0, arg1, first];
  const effect = noop.useEffect(() => {
    if (timestamp) {
      const _Date = Date;
      timestamp = Date.now();
      let tmp3 = (function getNextPriorityChange(timeout, timestamp) {
        let tmp = null;
        while (tmp2 !== undefined) {
          let tmp5 = closure_1_4(tmp3, timestamp);
          if (null != tmp5) {
            let diff = tmp6 - closure_0(timestamp[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
            let tmp12 = diff > timestamp ? diff : tmp5;
            let tmp15 = null == tmp;
            if (!tmp15) {
              tmp15 = tmp13 < tmp;
            }
            if (tmp15) {
              tmp = tmp12;
            }
          }
          continue;
        }
        return tmp;
      })(timeout, timestamp);
      timeout = first;
      let num2 = 0;
      if (!tmp5) {
        let bound = null;
        if (null != tmp3) {
          const _Math = Math;
          bound = Math.min(tmp3 - timestamp, 2147483647);
        }
        num2 = bound;
      }
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
      tmp5 = timestamp > first && timeout.some((shopUnpublishedAt) => {
        let tmp3 = null;
        if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
          tmp3 = null;
          if (null != shopUnpublishedAt.shopUnpublishedAt) {
            shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
            const time = shopUnpublishedAt.getTime();
            const _Number = Number;
            let tmp6 = null;
            if (Number.isFinite(time)) {
              tmp6 = time;
            }
            tmp3 = tmp6;
          }
        }
        if (null == tmp3) {
          return false;
        } else {
          const diff = tmp3 - closure_0(timestamp[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
          let tmp9 = diff > closure_0;
          if (tmp9) {
            tmp9 = diff <= timestamp;
          }
          if (!tmp9) {
            let tmp11 = tmp3 > closure_0;
            if (tmp11) {
              tmp11 = tmp3 <= timestamp;
            }
            tmp9 = tmp11;
          }
          return tmp9;
        }
        obj = closure_0(timestamp[2]);
      });
    }
  }, items);
  let items1 = [arg0, arg1, first];
  return noop.useMemo(() => {
    if (items) {
      let timestamp = first;
      if (first === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      items = [];
      const items1 = [];
      const item = arr.forEach((shopUnpublishedAt, index) => {
        let tmp4 = null;
        if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
          tmp4 = null;
          if (null != shopUnpublishedAt.shopUnpublishedAt) {
            shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
            const time = shopUnpublishedAt.getTime();
            const _Number = Number;
            let tmp7 = null;
            if (Number.isFinite(time)) {
              tmp7 = time;
            }
            tmp4 = tmp7;
          }
        }
        let tmp8 = null;
        if (null != tmp4) {
          tmp8 = null;
          if (tmp4 > timestamp) {
            tmp8 = tmp4;
          }
        }
        if (null != tmp8) {
          const diff = tmp8 - timestamp;
          if (diff <= timestamp(items[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS) {
            const obj2 = { item: shopUnpublishedAt, deadline: tmp8, index };
            items.push(obj2);
          }
        }
        items1.push(shopUnpublishedAt);
        obj = timestamp(items[2]);
      });
      const sorted = items.sort((deadline, deadline2) => {
        let diff = deadline.deadline - deadline2.deadline;
        if (0 === diff) {
          diff = deadline.index - deadline2.index;
        }
        return diff;
      });
      const items2 = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items.map((item) => item.item), 0));
      let tmp = items2;
    } else {
      tmp = arr;
    }
    return tmp;
  }, items1);
};
export function prioritizeSoonToUnpublishWishlistItems(arr) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  items = [];
  const items1 = [];
  const item = arr.forEach((shopUnpublishedAt, index) => {
    let tmp4 = null;
    if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
      tmp4 = null;
      if (null != shopUnpublishedAt.shopUnpublishedAt) {
        shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
        const time = shopUnpublishedAt.getTime();
        const _Number = Number;
        let tmp7 = null;
        if (Number.isFinite(time)) {
          tmp7 = time;
        }
        tmp4 = tmp7;
      }
    }
    let tmp8 = null;
    if (null != tmp4) {
      tmp8 = null;
      if (tmp4 > timestamp) {
        tmp8 = tmp4;
      }
    }
    if (null != tmp8) {
      const diff = tmp8 - timestamp;
      if (diff <= timestamp(items[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS) {
        const obj2 = { item: shopUnpublishedAt, deadline: tmp8, index };
        items.push(obj2);
      }
    }
    items1.push(shopUnpublishedAt);
    obj = timestamp(items[2]);
  });
  const sorted = items.sort((deadline, deadline2) => {
    let diff = deadline.deadline - deadline2.deadline;
    if (0 === diff) {
      diff = deadline.index - deadline2.index;
    }
    return diff;
  });
  const items2 = [...items1];
  return items2;
}
export function doesWishlistReorderChangePreview(arr, arr2, arg2) {
  const substr = arr.slice(0, arg2);
  const found = substr.filter((sku) => null != sku.sku);
  const substr1 = arr2.slice(0, arg2);
  const found1 = substr1.filter((sku) => null != sku.sku);
  return found.length !== found1.length || found.some((item, index) => item !== found1[index]);
}