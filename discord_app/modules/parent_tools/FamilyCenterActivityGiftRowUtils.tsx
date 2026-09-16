// === Module 15020: FamilyCenterActivityGiftRowUtils ===

// Module 15020 (FamilyCenterActivityGiftRowUtils)
import util from "util" /* 1115 */;
import _modDef2397 from "module_2397" /* 2397 */;
import _mod3872 from "module_3872" /* 3872 */;
import PriceUtils from "PriceUtils" /* 7344 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export const getGiftRowDisplayInfo = function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
};
export const formatGiftDate = function formatGiftDate(claimedAt) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(_mod3872.parseISO(claimedAt));
};
export const getGiftSubtext = function getGiftSubtext(claimed) {
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  if (null != price) {
    formatPriceResult = PriceUtils.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    if (null != gifterName) {
      const intl = util.intl;
      const obj2 = { price: formatPriceResult, username: gifterName };
      let formatToPlainStringResult = intl.formatToPlainString(_modDef2397["o44n/1"], obj2);
    }
    const items = [formatToPlainStringResult, ];
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2397;
    if (claimed.claimed) {
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const obj3 = { date: null };
      const _Intl2 = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj3.date = dateTimeFormat.format(_mod3872.parseISO(claimedAt));
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj3);
      const tmp8Result = _mod3872;
    } else {
      const obj4 = { date: null };
      const _Intl = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj4.date = dateTimeFormat1.format(_mod3872.parseISO(offeredAt));
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj4);
      const tmp8Result2 = _mod3872;
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