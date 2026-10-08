// discord_app/modules/chat/native/useChatLayout.tsx
import c from "../../../../_runtime/00576_c.js";
import useWindowSizeClassifier from "../../screen/native/useWindowSizeClassifier.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useChatLayout() {
      const cResult = c.c(3);
      const tmp2 = useWindowSizeClassifierDefault();
      const tmp3 = tmp2 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
      const tmp4 = tmp2 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE;
      if (cResult[0] === tmp3) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = { isChatBesideChannelList: tmp3, isChatLockedOpen: tmp4 };
      cResult[0] = tmp3;
      cResult[1] = tmp4;
      cResult[2] = obj2;
      tmp5 = obj2;
    }
  : function useChatLayout() {
      const tmp = useWindowSizeClassifierDefault();
      closure_0 = tmp;
      const items = [tmp];
      return noop.useMemo(
        () => ({
          isChatBesideChannelList: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE,
          isChatLockedOpen: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE,
        }),
        items,
      );
    };
export const getChatLayout = function getChatLayout() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return {
    isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE,
    isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE,
  };
};
