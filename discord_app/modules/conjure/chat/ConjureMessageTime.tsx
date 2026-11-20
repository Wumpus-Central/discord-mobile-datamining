// === Module 18345: ConjureMessageTime ===

// Module 18345 (ConjureMessageTime)
import DateUtils from "DateUtils" /* 4616 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureMessageTime.tsx");

export function describeMessageTime(at) {
  let isFiniteResult = null != at;
  if (isFiniteResult) {
    const _Number = Number;
    isFiniteResult = Number.isFinite(at);
  }
  if (isFiniteResult) {
    isFiniteResult = at > 0;
  }
  let calendarFormatResult = null;
  if (isFiniteResult) {
    const _Date = Date;
    const date = new Date(at);
    calendarFormatResult = DateUtils.calendarFormat(date, true);
  }
  return calendarFormatResult;
}