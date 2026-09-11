// === Module 8186: transformNativeMarkupTimestamp ===

// Module 8186 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5047 */;
import TimestampUtils from "TimestampUtils" /* 5073 */;
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