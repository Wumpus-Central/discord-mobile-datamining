// === Module 8218: transformNativeMarkupTimestamp ===

// Module 8218 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5077 */;
import TimestampUtils from "TimestampUtils" /* 5103 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupTimestamp.tsx");

export const transformNativeTimestamp = function transformNativeTimestamp(value) {
  let str = value.value;
  str = str.toString();
  const style = value.style;
  let obj = TimestampUtils;
  const parseTimestampResult = obj.parseTimestamp(str, style);
  if (null == parseTimestampResult) {
    obj = { type: MarkupTypes.AST_KEY.TEXT, content: TimestampUtils.unparseTimestamp(str, style) };
    const tmp2Result = TimestampUtils;
  } else {
    obj = {};
    const merged = Object.assign(parseTimestampResult);
    obj.type = MarkupTypes.AST_KEY.TIMESTAMP;
  }
  return obj;
};