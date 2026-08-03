const result = require("formatSingleCurrencyPrice").fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export const getGiftRowDisplayInfo = function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
};
export const formatGiftDate = function formatGiftDate(claimedAt) {
  const dateTimeFormat = new Intl.DateTimeFormat(require(1236) /* getSystemLocale */.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(require(3480).parseISO(claimedAt));
};
export const getGiftSubtext = function getGiftSubtext(claimed) {
  let claimedAt;
  let gifterName;
  let offeredAt;
  let price;
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  if (null != price) {
    let obj = require(5735) /* formatSingleCurrencyPrice */;
    formatPriceResult = obj.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    if (null != gifterName) {
      const intl = require(1236) /* getSystemLocale */.intl;
      obj = { price: null, username: null };
      obj[0] = formatPriceResult;
      obj[1] = gifterName;
      let formatToPlainStringResult = intl.formatToPlainString(importDefault(2255)["o44n/1"], obj);
    }
    const items = [formatToPlainStringResult, ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = importDefault(2255);
    if (claimed.claimed) {
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      obj = { date: null };
      const _Intl2 = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(tmp8(1236).intl.currentLocale, { month: "short", day: "numeric" });
      let tmp8Result = tmp8(3480);
      obj[0] = dateTimeFormat.format(tmp8Result.parseISO(claimedAt));
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj);
    } else {
      const obj1 = { date: null };
      const _Intl = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(tmp8(1236).intl.currentLocale, { month: "short", day: "numeric" });
      tmp8Result = tmp8(3480);
      obj1[0] = dateTimeFormat1.format(tmp8Result.parseISO(offeredAt));
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj1);
    }
    items[1] = formatToPlainStringResult1;
    const _Boolean = Boolean;
    const found = items.filter(Boolean);
    return found.join(" \u2022 ");
  }
  formatToPlainStringResult = null;
  if (null != formatPriceResult) {
    formatToPlainStringResult = formatPriceResult;
  }
};