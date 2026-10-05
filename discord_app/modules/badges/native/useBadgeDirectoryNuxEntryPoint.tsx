// discord_app/modules/badges/native/useBadgeDirectoryNuxEntryPoint.tsx
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === arg0) {
        let tmp3;
        let tmp4;
        if (cResult[1] === arg1) {
          tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp3) {
          const obj2 = { entryPointRef: tmp2, onOpenBadgeDirectory: tmp3 };
          cResult[3] = tmp3;
          cResult[4] = obj2;
          tmp4 = obj2;
        } else {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      const fn = function s() {
        if (closure_0) {
          closure_1(ContentDismissActionType.TAKE_ACTION);
        }
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (arg0, arg1) => {
      let items;
      let closure_0 = arg0;
      let closure_1 = arg1;
      const obj = {
        entryPointRef: react.useRef(null),
        onOpenBadgeDirectory: react.useCallback(() => {
          if (closure_0) {
            closure_1(ContentDismissActionType.TAKE_ACTION);
          }
        }, items),
      };
      items = [arg0, arg1];
      return obj;
    };
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxEntryPoint.tsx");

export const useBadgeDirectoryNuxEntryPoint = tmp2;
