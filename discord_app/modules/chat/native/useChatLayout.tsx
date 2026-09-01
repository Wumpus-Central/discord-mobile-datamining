// discord_app/modules/chat/native/useChatLayout.tsx
import useWindowSizeClassifier from "../../screen/native/useWindowSizeClassifier.tsx";
import useWindowSizeClassifierDefault from "../../screen/native/useWindowSizeClassifier.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";

require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifierDefault();
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(
    () => ({
      isChatBesideChannelList: callback >= callback(closure_1_2[1]).WindowSizeClassifier.LARGE,
      isChatLockedOpen: callback >= callback(closure_1_2[1]).WindowSizeClassifier.XLARGE,
    }),
    items,
  );
}
export const getChatLayout = function getChatLayout() {
  let obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = {
    isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE,
    isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE,
  };
  return obj;
};
