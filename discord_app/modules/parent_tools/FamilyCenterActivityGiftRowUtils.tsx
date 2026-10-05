// discord_app/modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx
import intl3 from "../../intl/index.native.tsx";
import _modDef2493 from "FamilyCenter.messages.js";
import _mod4104 from "../../../_runtime/metro/04104__.js";
import PriceUtils from "../../utils/PriceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx");

export const getGiftRowDisplayInfo = function getGiftRowDisplayInfo(giftInfo) {
  return {
    skuId: giftInfo.sku_id,
    subscriptionPlanId: giftInfo.subscription_plan_id,
    price: giftInfo.price,
    gifterUserId: giftInfo.gifter_user_id,
    claimed: giftInfo.claimed,
    offeredAt: giftInfo.offered_at,
    claimedAt: giftInfo.claimed_at,
  };
};
export const formatGiftDate = function formatGiftDate(claimedAt) {
  const dateTimeFormat = new Intl.DateTimeFormat(intl3.intl.currentLocale, { month: "short", day: "numeric" });
  const format = dateTimeFormat.format;
  const obj = _mod4104;
  return format(obj.parseISO(claimedAt));
};
export const getGiftSubtext = function getGiftSubtext(claimed) {
  let claimedAt;
  let format;
  let format2;
  let formatToPlainStringResult;
  let gifterName;
  let offeredAt;
  let price;
  let tmp8Result;
  let tmp8Result2;
  ({ price, gifterName, offeredAt, claimedAt } = claimed);
  let formatPriceResult = null;
  claimed = claimed.claimed;
  if (null != price) {
    const obj = PriceUtils;
    formatPriceResult = obj.formatPrice(price.amount, price.currency);
  }
  if (null != formatPriceResult) {
    let formatToPlainStringResult1;
    if (null != gifterName) {
      const intl = intl3.intl;
      const obj2 = { price: formatPriceResult, username: gifterName };
      formatToPlainStringResult = intl.formatToPlainString(_modDef2493["o44n/1"], obj2);
    }
    const items = [formatToPlainStringResult];
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const tmp11 = _modDef2493;
    if (claimed) {
      const kDyllq = tmp11.kDyllq;
      if (claimedAt == null) {
        claimedAt = offeredAt;
      }
      const _Intl2 = Intl;
      const self3 = this;
      const self4 = this;
      const obj3 = { date: format2(tmp8Result.parseISO(claimedAt)) };
      const dateTimeFormat = new Intl.DateTimeFormat(intl3.intl.currentLocale, { month: "short", day: "numeric" });
      format2 = dateTimeFormat.format;
      tmp8Result = _mod4104;
      formatToPlainStringResult1 = formatToPlainString(kDyllq, obj3);
    } else {
      const _Intl = Intl;
      const gAG45y = tmp11.gAG45y;
      const self = this;
      const self2 = this;
      const obj4 = { date: format(tmp8Result2.parseISO(offeredAt)) };
      const dateTimeFormat1 = new Intl.DateTimeFormat(intl3.intl.currentLocale, { month: "short", day: "numeric" });
      format = dateTimeFormat1.format;
      tmp8Result2 = _mod4104;
      formatToPlainStringResult1 = formatToPlainString(gAG45y, obj4);
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
