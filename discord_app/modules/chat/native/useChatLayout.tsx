// discord_app/modules/chat/native/useChatLayout.tsx
import noop from "noop";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(4140)();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = require(4140) /* useWindowSizeClassifier */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= require(4140) /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= require(4140) /* useWindowSizeClassifier */.WindowSizeClassifier.XLARGE };
  return obj;
};