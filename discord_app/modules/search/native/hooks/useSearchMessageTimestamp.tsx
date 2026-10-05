// === Module 16844: useSearchMessageTimestamp ===

// Module 16844 (useSearchMessageTimestamp)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, id2) => {
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === id2) {
    let tmp4;
    let tmp5;
    if (cResult[1] === id.id) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      let tmp10;
      if (cResult[5] === tmp4) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
    const obj2 = { timestamp: tmp5, timestampAccessibilityLabel: tmp4 };
    cResult[4] = tmp5;
    cResult[5] = tmp4;
    cResult[6] = obj2;
    tmp10 = obj2;
  }
  id = id.id;
  const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
  SnowflakeUtilsDefault;
  if (id == null) {
    id = id2.id;
  }
  const extractTimestampResult = extractTimestamp(id);
  const tmpResult = NotificationCenterUtils;
  const relativeTimestamp = tmpResult.getRelativeTimestamp(extractTimestampResult, true);
  const tmpResult2 = NotificationCenterUtils;
  const relativeTimestamp1 = tmpResult2.getRelativeTimestamp(extractTimestampResult, false);
  cResult[0] = id2;
  cResult[1] = id.id;
  cResult[2] = relativeTimestamp1;
  cResult[3] = relativeTimestamp;
  tmp5 = relativeTimestamp;
  tmp4 = relativeTimestamp1;
}) : ((arg0, arg1) => {
  let id = arg0;
  const id2 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let obj2;
    let obj3;
    id = id.id;
    const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
    SnowflakeUtilsDefault;
    if (id == null) {
      id = id2.id;
    }
    const extractTimestampResult = extractTimestamp(id);
    const obj = { timestamp: obj2.getRelativeTimestamp(extractTimestampResult, true), timestampAccessibilityLabel: obj3.getRelativeTimestamp(extractTimestampResult, false) };
    obj2 = NotificationCenterUtils;
    obj3 = NotificationCenterUtils;
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = tmp2;