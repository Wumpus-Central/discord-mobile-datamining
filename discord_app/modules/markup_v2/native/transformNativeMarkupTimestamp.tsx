// === Module 8127: transformNativeMarkupTimestamp ===

// Module 8127 (transformNativeMarkupTimestamp)
import MarkupTypes from "MarkupTypes" /* 5010 */;
import TimestampUtils from "TimestampUtils" /* 5036 */;
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