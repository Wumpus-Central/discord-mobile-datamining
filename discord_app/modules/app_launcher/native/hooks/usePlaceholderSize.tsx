// discord_app/modules/app_launcher/native/hooks/usePlaceholderSize.tsx
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => Math.random() * (arg1 - arg0) + arg0
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      return react.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = tmp2;
