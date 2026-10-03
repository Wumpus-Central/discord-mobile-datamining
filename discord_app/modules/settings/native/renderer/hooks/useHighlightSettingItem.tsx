// === Module 14501: useHighlightSettingItem ===

// Module 14501 (useHighlightSettingItem)
import c from "c" /* 576 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14497 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s(selected) {
      return selected.selected === closure_0;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return UserSettingSearchStore.useState(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
});