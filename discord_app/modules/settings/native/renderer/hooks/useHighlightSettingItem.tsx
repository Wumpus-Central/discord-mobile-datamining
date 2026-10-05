// discord_app/modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx
import react from "../../../../../../_runtime/00576_react.js";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
      let closure_0 = arg0;
      return UserSettingSearchStore.useState((selected) => selected.selected === closure_0);
    };
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useHighlightSettingItem.tsx");

export const useHighlightSettingItem = tmp2;
