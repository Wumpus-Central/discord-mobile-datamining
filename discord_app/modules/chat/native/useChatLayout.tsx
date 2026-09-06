// === Module 4420: useChatLayout ===

// Module 4420 (useChatLayout)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4421 */;
import noop from "module_19" /* 19 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifierDefault();
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => ({ isChatBesideChannelList: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
  return obj;
};