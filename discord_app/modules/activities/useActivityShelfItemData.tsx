// discord_app/modules/activities/useActivityShelfItemData.tsx
import c from "../../../_runtime/00576_c.js";
import useActivityShelfItemsDefault from "useActivityShelfItems.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = ReactCompilerGating.isReactCompilerEnabled()
  ? function useActivityShelfItemData(guildId, arg1) {
      closure_0 = arg1;
      const cResult = c.c(5);
      if (cResult[0] !== guildId) {
        const obj2 = { guildId };
        cResult[0] = guildId;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const arr = useActivityShelfItemsDefault(tmp3);
      if (cResult[2] === arg1) {
        if (cResult[3] === arr) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
      let found = arr.find((application) => application.application.id === closure_0);
      if (found == null) {
        found = null;
      }
      cResult[2] = arg1;
      cResult[3] = arr;
      cResult[4] = found;
      tmp4 = found;
    }
  : function useActivityShelfItemData(guildId, arg1) {
      closure_0 = arg1;
      const tmp = useActivityShelfItemsDefault({ guildId });
      closure_1 = tmp;
      const items = [tmp, arg1];
      return noop.useMemo(() => {
        let found = closure_1.find((application) => application.application.id === closure_1_0);
        if (found == null) {
          found = null;
        }
        return found;
      }, items);
    };
