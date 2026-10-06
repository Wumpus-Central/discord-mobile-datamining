// === Module 17312: useActivityShelfItemData ===

// Module 17312 (useActivityShelfItemData)
import react2 from "react" /* 576 */;
import useActivityShelfItemsDefault from "useActivityShelfItems" /* 11667 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  let tmp3;
  let closure_0 = arg1;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== guildId) {
    const obj2 = { guildId };
    cResult[0] = guildId;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const arr = useActivityShelfItemsDefault(tmp3);
  if (cResult[2] === arg1) {
    let tmp4;
    if (cResult[3] === arr) {
      tmp4 = cResult[4];
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
}) : ((guildId, arg1) => {
  let closure_0 = arg1;
  const obj = { guildId };
  const tmp = useActivityShelfItemsDefault(obj);
  let closure_1 = tmp;
  const items = [tmp, arg1];
  return react.useMemo(() => {
    let found = closure_1.find((application) => application.application.id === closure_1_0);
    if (found == null) {
      found = null;
    }
    return found;
  }, items);
});
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemData.tsx");

export const useActivityShelfItemData = tmp2;