// === Module 7102: useSelectedDismissibleContentShared ===

// Module 7102 (useSelectedDismissibleContentShared)
import noop from "module_19" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2052 */;

const require = globalThis.__r;

const require = fn;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedDismissibleContentShared(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg3;
  const cResult = require("c").c(9);
  if (cResult[0] === (undefined !== arg2 && arg2)) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
    }
    closure_3 = tmp5;
    if (cResult[3] === arg3) {
      if (cResult[4] === arg1) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === arg0) {
            let tmp7 = cResult[7];
            let tmp8 = cResult[8];
          }
          const effect = noop.useEffect(tmp7, tmp8);
          class T {
            constructor() {
              return () => { ... };
            }
          }
        }
      }
    }
    class T {
      constructor() {
        return () => { ... };
      }
    }
    const items = [tmp5, arg1, arg0, arg3];
    cResult[3] = arg3;
    cResult[4] = arg1;
    cResult[5] = tmp5;
    cResult[6] = arg0;
    cResult[7] = T;
    cResult[8] = items;
    tmp8 = items;
    tmp7 = T;
  }
  let tmp6 = null != arg0 && !tmp4;
  if (tmp6) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp6 = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  cResult[0] = undefined !== arg2 && arg2;
  cResult[1] = arg0;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function useSelectedDismissibleContentShared(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  noop = arg3;
  closure_3 = undefined;
  let tmp = null != arg0 && !flag;
  if (tmp) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
  }
  closure_3 = tmp;
  const items = [tmp, arg1, arg0, arg3];
  const effect = noop.useEffect(() => () => {
    let tmp = closure_1_3;
    if (closure_1_3) {
      lastDismissed = lastDismissed.lastDismissed;
      let content;
      if (lastDismissed != null) {
        content = lastDismissed.content;
      }
      let tmp6 = content !== closure_1_0;
      if (!tmp6) {
        let result = closure_0(2056).isGuildDismissibleContent(tmp5);
        if (result) {
          const lastDismissed2 = tmp2.lastDismissed;
          let guildId;
          if (lastDismissed2 != null) {
            guildId = lastDismissed2.guildId;
          }
          result = guildId !== closure_1_2;
        }
        tmp6 = result;
        const obj = closure_0(2056);
      }
      tmp = tmp6;
      tmp2 = lastDismissed;
    }
    if (tmp) {
      dependencyMap(constants.AUTO_DISMISS, true);
    }
  }, items);
});