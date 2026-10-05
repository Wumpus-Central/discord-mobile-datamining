// discord_app/modules/parent_tools/hooks/useFormattedEndTime.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import intl from "../../../intl/index.native.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let currentUser;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          currentUser = currentUser.getCurrentUser();
          let nextEndTime;
          if (currentUser != null) {
            const restrictedSchedule = currentUser.restrictedSchedule;
            if (restrictedSchedule != null) {
              nextEndTime = restrictedSchedule.getNextEndTime();
            }
          }
          let formatResult = null;
          if (null != nextEndTime) {
            const _Intl = Intl;
            const self = this;
            const self2 = this;
            const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, {
              hour: "numeric",
              minute: "2-digit",
              weekday: "long",
            });
            formatResult = dateTimeFormat.format(nextEndTime);
          }
          return formatResult;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [UserStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, function () {
        currentUser = currentUser.getCurrentUser();
        let nextEndTime;
        if (currentUser != null) {
          const restrictedSchedule = currentUser.restrictedSchedule;
          if (restrictedSchedule != null) {
            nextEndTime = restrictedSchedule.getNextEndTime();
          }
        }
        let formatResult = null;
        if (null != nextEndTime) {
          const _Intl = Intl;
          const self = this;
          const self2 = this;
          const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, {
            hour: "numeric",
            minute: "2-digit",
            weekday: "long",
          });
          formatResult = dateTimeFormat.format(nextEndTime);
        }
        return formatResult;
      });
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default tmp2;
