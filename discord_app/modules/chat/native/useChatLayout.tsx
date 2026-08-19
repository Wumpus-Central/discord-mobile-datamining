// === Module 4232: useChatLayout ===

// Module 4232 (useChatLayout)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4233 */;
import useWindowSizeClassifierDefault from "useWindowSizeClassifier" /* 4233 */;
import noop from "noop" /* 19 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifierDefault();
  closure_0 = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: callback >= callback(dependencyMap[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: callback >= callback(dependencyMap[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
  return obj;
};