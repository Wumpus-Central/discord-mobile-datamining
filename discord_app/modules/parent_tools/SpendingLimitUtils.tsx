// === Module 14628: SpendingLimitUtils ===

// Module 14628 (SpendingLimitUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitUtils.tsx");

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
  const date1 = new Date(UTC(uTCFullYear, date.getUTCMonth() + 1, 1));
  const dateTimeFormat = new Intl.DateTimeFormat(undefined, { dateStyle: "short", timeZone: "UTC" });
  return dateTimeFormat.format(date1);
};
export const getCurrencySymbol = function getCurrencySymbol(formatted) {
  try {
    const _Intl = Intl;
    const self = this;
    const obj = { style: "currency", currency: formatted.toUpperCase() };
    formatted = undefined;
    const self2 = this;
    const numberFormat = new NumberFormat(undefined, obj);
    const formatToPartsResult = numberFormat.formatToParts(0);
    const iter = formatToPartsResult.find((type) => "currency" === type.type);
    if (iter != null) {
      formatted = iter.value;
    }
    if (formatted == null) {
      formatted = formatted.toUpperCase();
    }
    return formatted;
  } catch (err) {
    return formatted.toUpperCase();
  }
};
export const sanitizeAmountInput = function sanitizeAmountInput(str, arg1) {
  if (0 === arg1) {
    return str.replace(/[^0-9]/g, "");
  } else {
    let str2 = str.replace(/[^0-9.]/g, "");
    const parts = str2.split(".");
    if (1 !== parts.length) {
      const first = parts[0];
      const substr = parts.slice(1);
      const joined = substr.join("");
      const _HermesInternal = HermesInternal;
      str2 = "" + first + "." + joined.slice(0, arg1);
    }
    return str2;
  }
};