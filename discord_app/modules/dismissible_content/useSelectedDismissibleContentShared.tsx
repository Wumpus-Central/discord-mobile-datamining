// discord_app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
import noop from "../../../_runtime/00019_noop.js";
import set from "DismissibleContentFrameworkStore.tsx";
import { ContentDismissActionType } from "DismissibleContentConstants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, closure_14) {
  const _require = arg0;
  dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  const React = closure_14;
  closure_3 = undefined;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig.tsx").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, closure_14];
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
          const lastDismissed2 = closure_1_3.lastDismissed;
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
    }
    if (tmp) {
      callback(closure_1_4.AUTO_DISMISS, true);
    }
  }, items);
};