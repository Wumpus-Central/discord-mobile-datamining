// === Module 14521: useHighlightSettingItem ===

// Module 14521 (useHighlightSettingItem)
import react from "react" /* 576 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14517 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s(selected) {
      return selected.selected === closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return UserSettingSearchStore.useState(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = tmp2;