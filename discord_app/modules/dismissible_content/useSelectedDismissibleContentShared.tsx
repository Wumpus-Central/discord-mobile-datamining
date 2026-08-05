// discord_app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
import noop from "noop";
import set from "set";
import { ContentDismissActionType } from "ContentDismissActionType";
import { set } from "DismissibleContentFatigueConfig.tsx";

const require = arg1;
let result = require("ContentDismissActionType").fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  const React = id;
  let c3;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _set.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  c3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = React.useEffect(() => () => {
    let tmp = set;
    if (set) {
      const lastDismissed = outer1_3.lastDismissed;
      let content;
      if (lastDismissed != null) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== closure_0;
      if (!tmp6) {
        let result = outer1_0(outer1_1[4]).isGuildDismissibleContent(tmp5);
        if (result) {
          const lastDismissed2 = tmp2.lastDismissed;
          let guildId;
          if (lastDismissed2 != null) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== noop;
        }
        tmp6 = result;
        const obj = outer1_0(outer1_1[4]);
      }
      tmp = tmp6;
      tmp2 = outer1_3;
    }
    if (tmp) {
      callback(outer1_4.AUTO_DISMISS, true);
    }
  }, items);
};