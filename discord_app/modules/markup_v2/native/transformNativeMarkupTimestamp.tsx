// discord_app/modules/markup_v2/native/transformNativeMarkupTimestamp.tsx
import MarkupTypes from "../../markup/MarkupTypes.tsx";
import TimestampUtils from "../../markup/TimestampUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
