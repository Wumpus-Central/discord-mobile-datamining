// === Module 12629: CheckpointNumberUtils ===

// Module 12629 (CheckpointNumberUtils)
import util from "util" /* 1112 */;
import _modDef3341 from "module_3341" /* 3341 */;
import FunctionUtils from "FunctionUtils" /* 2159 */;
import size from "module_2" /* 2 */;

let closure_3 = FunctionUtils.cachedFunction((arg0) => {
  const numberFormat = new Intl.NumberFormat(arg0, { maximumFractionDigits: 0, useGrouping: true });
  return numberFormat;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/CheckpointNumberUtils.tsx");

export function formatCheckpointStatNumber(rounded) {
  return closure_3(util.intl.currentLocale).format(rounded);
}
export function formatCheckpointStatAccessibilityLabel(messages, rounded) {
  if ("voice" === messages) {
    const intl6 = util.intl;
    const obj2 = { duration: null };
    const intl7 = util.intl;
    const obj3 = { minutes: rounded };
    obj2.duration = intl7.formatToPlainString(_modDef3341.x7PkHm, obj3);
    return intl6.formatToPlainString(_modDef3341.lw35aH, obj2);
  } else if ("messages" === messages) {
    const intl5 = util.intl;
    const obj4 = { count: rounded };
    return intl5.formatToPlainString(_modDef3341.IdRUAC, obj4);
  } else if ("topServerDays" === messages) {
    const intl4 = util.intl;
    const obj5 = { days: rounded };
    return intl4.formatToPlainString(_modDef3341.MpSH8v, obj5);
  } else if ("emoji" === messages) {
    const intl3 = util.intl;
    const obj6 = { count: rounded };
    return intl3.formatToPlainString(_modDef3341["36qpUG"], obj6);
  } else if ("games" === messages) {
    const intl2 = util.intl;
    const obj7 = { count: rounded };
    return intl2.formatToPlainString(_modDef3341.z72P4t, obj7);
  } else if ("gameDays" === messages) {
    const intl = util.intl;
    const obj = { days: rounded };
    return intl.formatToPlainString(_modDef3341.LYcKX7, obj);
  }
}