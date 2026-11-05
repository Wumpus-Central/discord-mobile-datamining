// discord_app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
import noop from "../../../_runtime/metro/00019__.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

const require = globalThis.__r;

const require = fn;
const ContentDismissActionType = fn(4989).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export function useSelectedDismissibleContentShared(visibleContent, markAsDismissed) {
  _require = visibleContent;
  dependencyMap = markAsDismissed;
  if (flag === undefined) {
    flag = false;
  }
  noop = guildId;
  closure_3 = undefined;
  let tmp = null != visibleContent && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE =
      require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(visibleContent);
  }
  closure_3 = tmp;
  items = [tmp, markAsDismissed, visibleContent, guildId];
  const effect = noop.useEffect(
    () => () => {
      let tmp = closure_1_3;
      if (closure_1_3) {
        lastDismissed = lastDismissed.lastDismissed;
        let content;
        if (lastDismissed != null) {
          content = lastDismissed.content;
        }
        let tmp6 = content !== visibleContent;
        if (!tmp6) {
          let result = closure_0(4983).isGuildDismissibleContent(tmp5);
          if (result) {
            const lastDismissed2 = tmp2.lastDismissed;
            guildId = undefined;
            if (lastDismissed2 != null) {
              guildId = lastDismissed2.guildId;
            }
            result = guildId !== closure_1_2;
          }
          tmp6 = result;
          const obj = closure_0(4983);
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
}
