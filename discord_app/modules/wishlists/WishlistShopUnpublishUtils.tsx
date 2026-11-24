// === Module 11022: WishlistShopUnpublishUtils ===

// Module 11022 (WishlistShopUnpublishUtils)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6197 */;
import size from "module_2" /* 2 */;

const SKUProductLines = Constants.SKUProductLines;
let c3 = 2592000000;
const result = size.fileFinishedImporting("modules/wishlists/WishlistShopUnpublishUtils.tsx");

export const SHOP_UNPUBLISH_LABEL_THRESHOLD_MS = 2592000000;
export function canRenderWishlistShopUnpublishCountdown(sku) {
  sku = sku.sku;
  let productLine;
  if (sku != null) {
    productLine = sku.productLine;
  }
  return productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM || productLine === SKUProductLines.COLLECTIBLES || productLine === SKUProductLines.PREMIUM;
}
export function getNextFutureShopUnpublishedAt(memo1) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3;
  const iter = memo1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    if (null != nextResult) {
      let time = obj.getTime();
      let tmp8 = time > timestamp;
      if (tmp8) {
        let tmp10 = null == tmp3;
        if (!tmp10) {
          tmp10 = tmp7 < tmp3.getTime();
        }
        tmp8 = tmp10;
      }
      if (tmp8) {
        tmp3 = nextResult;
      }
    }
    continue;
  }
  return tmp3;
}
export function getShopUnpublishCountdown(nextFutureShopUnpublishedAt) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null == nextFutureShopUnpublishedAt) {
    return null;
  } else {
    const diff = nextFutureShopUnpublishedAt.getTime() - timestamp;
    if (diff <= 0) {
      return null;
    } else if (diff > c3) {
      return null;
    } else {
      const daysRemaining = CollectiblesUtils.getDaysRemaining(nextFutureShopUnpublishedAt, timestamp);
      if (daysRemaining <= 1) {
        const obj2 = { unit: "hours", hours: null };
        const _Math = Math;
        const _Math2 = Math;
        obj2.hours = Math.max(1, Math.floor(diff / 3600000));
        let obj3 = obj2;
      } else {
        obj3 = { unit: "days", days: daysRemaining };
      }
      return obj3;
    }
  }
}
export function formatWishlistShopUnpublishLabel(countdown, compact) {
  let hours = countdown;
  if ("compact" === compact) {
    if ("hours" === hours.unit) {
      const intl4 = util.intl;
      const obj2 = { hours: null };
      hours = hours.hours;
      obj2.hours = hours;
      let formatToPlainStringResult = intl4.formatToPlainString(util.t.WJieZ2, obj2);
    } else {
      const intl3 = util.intl;
      const obj3 = { days: hours.days };
      formatToPlainStringResult = intl3.formatToPlainString(util.t.DkxLY0, obj3);
    }
  } else {
    if ("hours" === hours.unit) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.Bc13HF);
    } else {
      const intl = util.intl;
      const obj = { days: hours.days };
      stringResult = intl.formatToPlainString(util.t.Io7ozn, obj);
    }
    return stringResult;
  }
}