// discord_app/modules/notification_center/useRelativeTimestamp.tsx
import NotificationCenterUtils from "NotificationCenterUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let dependencyMap, timestamp;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (timestamp) => {
      let closure_2;
      let obj = timestamp(576);
      const cResult = obj.c(7);
      timestamp = timestamp.timestamp;
      const abbreviated = timestamp.abbreviated;
      let closure_1 = tmp2;
      if (cResult[0] === (undefined === abbreviated || abbreviated)) {
        let tmp3;
        if (cResult[1] === timestamp) {
          tmp3 = cResult[2];
        }
        dependencyMap = _slicedToArray(react.useState(tmp3), 2)[1];
        _slicedToArray(react.useState(tmp3), 2);
        if (cResult[3] === (undefined === abbreviated || abbreviated)) {
          let tmp7;
          let tmp8;
          if (cResult[4] === timestamp) {
            tmp7 = cResult[5];
            tmp8 = cResult[6];
          }
          const effect = react.useEffect(tmp7, tmp8);
          return tmp6;
        }
        const fn2 = function p() {
          let closure_0;
          let interval;
          let obj = timestamp(closure_2[4]);
          closure_2(obj.getRelativeTimestamp(interval, closure_1));
          const diff = Date.now() - interval;
          if (diff <= closure_1(closure_2[5]).Millis.DAY) {
            let MINUTE;
            if (diff >= closure_1(closure_2[5]).Millis.HOUR) {
              MINUTE = closure_1(closure_2[5]).Millis.HOUR;
            } else {
              MINUTE = closure_1(closure_2[5]).Millis.MINUTE;
            }
            const _setInterval = setInterval;
            interval = setInterval(
              () => {
                const obj = timestamp(closure_2[4]);
                closure_1_2(obj.getRelativeTimestamp(closure_0, closure_1_1));
              },
              MINUTE,
              MINUTE - (diff % MINUTE),
            );
            return () => clearInterval(closure_0);
          }
        };
        const items = [timestamp, tmp2];
        cResult[3] = undefined === abbreviated || abbreviated;
        cResult[4] = timestamp;
        cResult[5] = fn2;
        cResult[6] = items;
        tmp8 = items;
        tmp7 = fn2;
      }
      const fn = function v() {
        const obj = NotificationCenterUtils;
        return obj.getRelativeTimestamp(timestamp, closure_1);
      };
      cResult[0] = undefined === abbreviated || abbreviated;
      cResult[1] = timestamp;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (timestamp) => {
      let closure_2;
      let first;
      timestamp = timestamp.timestamp;
      let flag = timestamp.abbreviated;
      if (flag === undefined) {
        flag = true;
      }
      closure_2 = undefined;
      [first, closure_2] = react.useState(() => {
        const obj = NotificationCenterUtils;
        return obj.getRelativeTimestamp(timestamp, flag);
      });
      const items = [timestamp, flag];
      const effect = react.useEffect(() => {
        let closure_0;
        let interval;
        let obj = timestamp(closure_2[4]);
        closure_2(obj.getRelativeTimestamp(interval, flag));
        const diff = Date.now() - interval;
        if (diff <= flag(closure_2[5]).Millis.DAY) {
          let MINUTE;
          if (diff >= flag(closure_2[5]).Millis.HOUR) {
            MINUTE = flag(closure_2[5]).Millis.HOUR;
          } else {
            MINUTE = flag(closure_2[5]).Millis.MINUTE;
          }
          const _setInterval = setInterval;
          interval = setInterval(
            () => {
              const obj = timestamp(closure_2[4]);
              closure_1_2(obj.getRelativeTimestamp(closure_0, flag));
            },
            MINUTE,
            MINUTE - (diff % MINUTE),
          );
          return () => clearInterval(closure_0);
        }
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = tmp2;
