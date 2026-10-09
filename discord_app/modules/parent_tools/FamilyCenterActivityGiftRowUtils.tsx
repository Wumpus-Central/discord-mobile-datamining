// === Module 15101: FamilyCenterActivityGiftRowUtils ===

// Module 15101 (FamilyCenterActivityGiftRowUtils)
import util from "util" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import _mod4304 from "module_4304" /* 4304 */;
import PriceUtils from "PriceUtils" /* 6933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export const getGiftRowDisplayInfo = function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
};
export const formatGiftDate = function formatGiftDate(claimedAt) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(_mod4304.parseISO(claimedAt));
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
      let formatToPlainStringResult = intl.formatToPlainString(_modDef2565["o44n/1"], obj2);
    }
    const items = [formatToPlainStringResult, ];
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2565;
    if (claimed.claimed) {
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const obj3 = { date: null };
      const _Intl2 = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj3.date = dateTimeFormat.format(_mod4304.parseISO(claimedAt));
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj3);
      const tmp8Result = _mod4304;
    } else {
      const obj4 = { date: null };
      const _Intl = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj4.date = dateTimeFormat1.format(_mod4304.parseISO(offeredAt));
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj4);
      const tmp8Result2 = _mod4304;
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