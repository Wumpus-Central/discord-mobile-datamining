// discord_app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
import DismissibleContentConstants from "DismissibleContentConstants.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, lastDismissed;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_0;
      let closure_1;
      let closure_2;
      _require = arg0;
      dependencyMap = arg1;
      react = arg3;
      let tmp = _require;
      let tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === (undefined !== arg2 && arg2)) {
        let tmp5;
        if (cResult[1] === arg0) {
          tmp5 = cResult[2];
        }
        let closure_3 = tmp5;
        if (cResult[3] === arg3) {
          if (cResult[4] === arg1) {
            if (cResult[5] === tmp5) {
              let tmp7;
              let tmp8;
              if (cResult[6] === arg0) {
                tmp7 = cResult[7];
                tmp8 = cResult[8];
              }
              const effect = react.useEffect(tmp7, tmp8);
              class D {
                constructor() {
                  return () => {
                    /* body not rendered: F137793 */
                  };
                }
              }
            }
          }
        }
        class D {
          constructor() {
            return () => {
              /* body not rendered: F137793 */
            };
          }
        }
        const items = [tmp5, arg1, arg0, arg3];
        cResult[3] = arg3;
        cResult[4] = arg1;
        cResult[5] = tmp5;
        cResult[6] = arg0;
        cResult[7] = D;
        cResult[8] = items;
        tmp8 = items;
        tmp7 = D;
      }
      let tmp6 = null != arg0 && !tmp4;
      if (tmp6) {
        const CONTENT_TYPES_WITH_BYPASS_FATIGUE = tmp(2041).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        tmp6 = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
      }
      cResult[0] = undefined !== arg2 && arg2;
      cResult[1] = arg0;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_2;
      _require = arg0;
      dependencyMap = arg1;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      react = arg3;
      let closure_3;
      let tmp = null != arg0 && !flag;
      if (tmp) {
        let tmp2 = _require;
        const CONTENT_TYPES_WITH_BYPASS_FATIGUE =
          require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        tmp = !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
      }
      closure_3 = tmp;
      const items = [tmp, arg1, arg0, arg3];
      const effect = react.useEffect(
        () => () => {
          let tmp = closure_1_3;
          if (tmp) {
            lastDismissed = lastDismissed.lastDismissed;
            let content;
            const tmp2 = lastDismissed;
            if (lastDismissed != null) {
              content = lastDismissed.content;
            }
            let tmp6 = content !== closure_1_0;
            if (!tmp6) {
              const obj = closure_0(closure_1[6]);
              let result = obj.isGuildDismissibleContent(tmp5);
              if (result) {
                const lastDismissed2 = tmp2.lastDismissed;
                let guildId;
                if (lastDismissed2 != null) {
                  guildId = lastDismissed2.guildId;
                }
                result = guildId !== closure_1_2;
              }
              tmp6 = result;
            }
            tmp = tmp6;
          }
          if (tmp) {
            closure_1_1(constants.AUTO_DISMISS, true);
          }
        },
        items,
      );
    };
let result = size.fileFinishedImporting("modules/dismissible_content/useSelectedDismissibleContentShared.tsx");

export const useSelectedDismissibleContentShared = tmp2;
