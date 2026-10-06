// === Module 14945: VideoQuestModalContext ===

// Module 14945 (VideoQuestModalContext)
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let context = react.createContext({ quest: null, videoSessionId: "" });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  context = react.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
}) : (() => {
  context = react.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = tmp3;