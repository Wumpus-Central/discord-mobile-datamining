// discord_app/modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef2167 from "../../../_runtime/metro/02167__.js";
import _modDef2725 from "FamilyCenter.messages.js";
import PriceUtils from "../../utils/PriceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export function getGiftRowDisplayInfo(giftInfo) {
  return {
    skuId: giftInfo.sku_id,
    subscriptionPlanId: giftInfo.subscription_plan_id,
    price: giftInfo.price,
    gifterUserId: giftInfo.gifter_user_id,
    claimed: giftInfo.claimed,
    offeredAt: giftInfo.offered_at,
    claimedAt: giftInfo.claimed_at,
  };
}
export function formatGiftDate(arg0) {
  const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
  return dateTimeFormat.format(_modDef2167(arg0).toDate());
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
      let formatToPlainStringResult = intl.formatToPlainString(_modDef2725["o44n/1"], obj2);
    }
    items = [formatToPlainStringResult];
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2725;
    if (claimed.claimed) {
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const obj3 = { date: null };
      const _Intl2 = Intl;
      const dateTimeFormat = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj3.date = dateTimeFormat.format(_modDef2167(claimedAt).toDate());
      let formatToPlainStringResult1 = formatToPlainString(tmp11.kDyllq, obj3);
      const obj8 = _modDef2167(claimedAt);
    } else {
      const obj4 = { date: null };
      const _Intl = Intl;
      const dateTimeFormat1 = new Intl.DateTimeFormat(util.intl.currentLocale, { month: "short", day: "numeric" });
      obj4.date = dateTimeFormat1.format(_modDef2167(offeredAt).toDate());
      formatToPlainStringResult1 = formatToPlainString(tmp11.gAG45y, obj4);
      const obj5 = _modDef2167(offeredAt);
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
