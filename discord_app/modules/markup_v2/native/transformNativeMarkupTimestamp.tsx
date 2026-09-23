// === Module 8455: transformNativeMarkupTimestamp ===

// Module 8455 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5292 */;
import TimestampUtils from "TimestampUtils" /* 5320 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  const str1 = value.value.toString();
  const style = value.style;
  const parseTimestampResult = TimestampUtils.parseTimestamp(str1, style);
  if (null == parseTimestampResult) {
    const obj2 = { type: MarkupTypes.AST_KEY.TEXT, content: TimestampUtils.unparseTimestamp(str1, style) };
    let obj3 = obj2;
    const tmp2Result = TimestampUtils;
  } else {
    obj3 = {};
    const merged = Object.assign(parseTimestampResult);
    obj3.type = MarkupTypes.AST_KEY.TIMESTAMP;
  }
  return obj3;
};