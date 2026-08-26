// === Module 6200: useSelectedDismissibleContentShared ===

// Module 6200 (useSelectedDismissibleContentShared)
import closure_2 from "noop" /* 19 */;
import closure_3 from "set" /* 1381 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  const _require = arg0;
  dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  const React = id;
  closure_3 = undefined;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _require(1382).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = React.useEffect(() => () => {
    let tmp = closure_3;
    if (closure_3) {
      const lastDismissed = closure_1_3.lastDismissed;
      let content;
      if (lastDismissed != null) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== closure_0;
      if (!tmp6) {
        let result = closure_1_0(closure_1_1[4]).isGuildDismissibleContent(tmp5);
        if (result) {
          const lastDismissed2 = tmp2.lastDismissed;
          let guildId;
          if (lastDismissed2 != null) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== closure_2;
        }
        tmp6 = result;
        const obj = closure_1_0(closure_1_1[4]);
      }
      tmp = tmp6;
      tmp2 = closure_1_3;
    }
    if (tmp) {
      callback(closure_1_4.AUTO_DISMISS, true);
    }
  }, items);
};