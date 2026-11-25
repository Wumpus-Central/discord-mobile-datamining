// === Module 16360: FamilyCenterActivityGiftRowUtils ===

// Module 16360 (FamilyCenterActivityGiftRowUtils)
import util from "util" /* 1112 */;
import _modDef2168 from "module_2168" /* 2168 */;
import _modDef2846 from "module_2846" /* 2846 */;
import PriceUtils from "PriceUtils" /* 6294 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export function getGiftRowDisplayInfo(giftInfo) {
  return { skuId: giftInfo.sku_id, subscriptionPlanId: giftInfo.subscription_plan_id, price: giftInfo.price, gifterUserId: giftInfo.gifter_user_id, claimed: giftInfo.claimed, offeredAt: giftInfo.offered_at, claimedAt: giftInfo.claimed_at };
}
export function formatGiftDate(arg0) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(_modDef2168(arg0).toDate());
}
export function getGiftSubtext(claimed) {
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  if (null != price) {
    formatPriceResult = PriceUtils.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    if (null != gifterName) {
      const intl = util.intl;
      const obj2 = { price: formatPriceResult, username: gifterName };
      let formatToPlainStringResult = intl.formatToPlainString(_modDef2846["o44n/1"], obj2);
    }
    items = [formatToPlainStringResult, ];
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2846;
    if (claimed.claimed) {
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const obj3 = { date: null };
      const _Intl2 = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj3.date = dateTimeFormat.format(_modDef2168(claimedAt).toDate());
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj3);
      const obj8 = _modDef2168(claimedAt);
    } else {
      const obj4 = { date: null };
      const _Intl = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj4.date = dateTimeFormat1.format(_modDef2168(offeredAt).toDate());
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj4);
      const obj5 = _modDef2168(offeredAt);
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
}