// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let context = react.createContext({ quest: null, videoSessionId: "" });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      context = react.useContext(context);
      _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
      return context;
    }
  : () => {
      context = react.useContext(context);
      _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
      return context;
    };
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = tmp3;
