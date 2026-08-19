// discord_app/modules/parent_tools/SpendingLimitUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/parent_tools/SpendingLimitUtils.tsx");

export const spendingLimitEqual = function spendingLimitEqual(amount, amount2) {
  let tmp = null == amount && null == amount2;
  if (!tmp) {
    let tmp2 = null != amount && null != amount2;
    if (tmp2) {
      tmp2 = amount.amount === amount2.amount && amount.currency === amount2.currency;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getNextRenewalDateLabel = function getNextRenewalDateLabel() {
  const date = new Date();
  const uTCFullYear = date.getUTCFullYear();
  const dateTimeFormat = new Intl.DateTimeFormat(undefined, { dateStyle: "short", timeZone: "UTC" });
  return dateTimeFormat.format(new Date(Date.UTC(uTCFullYear, date.getUTCMonth() + 1, 1)));
};
export const getCurrencySymbol = function getCurrencySymbol(formatted) {
  try {
    const _Intl = Intl;
    const obj = { style: "currency", currency: null };
    obj[1] = formatted.toUpperCase();
    formatted = undefined;
    const numberFormat = new Intl.NumberFormat(undefined, obj);
    const iter = numberFormat.formatToParts(0).find((item, index) => "currency" === item.type);
    if (iter != null) {
      formatted = iter.value;
    }
    if (formatted == null) {
      formatted = formatted.toUpperCase();
    }
    return formatted;
  } catch (err) {
    return str.toUpperCase();
  }
};
export const sanitizeAmountInput = function sanitizeAmountInput(str, arg1) {
  if (0 === arg1) {
    return str.replace(/[^0-9]/g, "");
  } else {
    let str2 = str.replace(/[^0-9.]/g, "");
    const parts = str2.split(".");
    if (1 !== parts.length) {
      const substr = parts.slice(1);
      const joined = substr.join("");
      const _HermesInternal = HermesInternal;
      str2 = "" + parts[0] + "." + joined.slice(0, arg1);
    }
    return str2;
  }
};