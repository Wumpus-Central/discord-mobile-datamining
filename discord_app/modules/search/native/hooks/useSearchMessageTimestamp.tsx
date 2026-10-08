// discord_app/modules/search/native/hooks/useSearchMessageTimestamp.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import c from "../../../../../_runtime/00576_c.js";
import NotificationCenterUtils from "../../../notification_center/NotificationCenterUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSearchMessageTimestamp(id, id2) {
      const cResult = c.c(7);
      if (cResult[0] === id2) {
        if (cResult[1] === id.id) {
          let tmp4 = cResult[2];
          let tmp5 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp4) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
        const obj3 = { timestamp: tmp5, timestampAccessibilityLabel: tmp4 };
        cResult[4] = tmp5;
        cResult[5] = tmp4;
        cResult[6] = obj3;
        tmp9 = obj3;
      }
      id = id.id;
      if (id == null) {
        id = id2.id;
      }
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id);
      const relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, true);
      const tmpResult = NotificationCenterUtils;
      const relativeTimestamp1 = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, false);
      cResult[0] = id2;
      cResult[1] = id.id;
      cResult[2] = relativeTimestamp1;
      cResult[3] = relativeTimestamp;
      tmp5 = relativeTimestamp;
      tmp4 = relativeTimestamp1;
      const tmpResult2 = NotificationCenterUtils;
    }
  : function useSearchMessageTimestamp(arg0, arg1) {
      let id = arg0;
      const id2 = arg1;
      const items = [arg0, arg1];
      return noop.useMemo(() => {
        id = id.id;
        if (id == null) {
          id = id2.id;
        }
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id);
        const obj2 = { timestamp: null, timestampAccessibilityLabel: null };
        obj2.timestamp = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, true);
        obj2.timestampAccessibilityLabel = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, false);
        return obj2;
      }, items);
    };
