// discord_app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
import noop from "../../../_runtime/metro/00019__.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

const require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = function useSelectedDismissibleContentShared(arg0, arg1, flag, id) {
  _require = arg0;
  dependencyMap = arg1;
  if (flag === undefined) {
    flag = false;
  }
  noop = id;
  closure_3 = undefined;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE =
      require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, id];
  const effect = noop.useEffect(
    () => () => {
      let tmp = closure_1_3;
      if (closure_1_3) {
        lastDismissed = lastDismissed.lastDismissed;
        let content;
        if (lastDismissed != null) {
          content = lastDismissed.content;
        }
        let tmp6 = content !== closure_1_0;
        if (!tmp6) {
          let result = closure_0(1944).isGuildDismissibleContent(tmp5);
          if (result) {
            const lastDismissed2 = tmp2.lastDismissed;
            let guildId;
            if (lastDismissed2 != null) {
              guildId = lastDismissed2.guildId;
            }
            result = guildId !== id;
          }
          tmp6 = result;
          const obj = closure_0(1944);
        }
        tmp = tmp6;
        tmp2 = lastDismissed;
      }
      if (tmp) {
        dependencyMap(constants.AUTO_DISMISS, true);
      }
    },
    items,
  );
};
