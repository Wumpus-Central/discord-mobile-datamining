// discord_app/modules/chat/native/useChatLayout.tsx
import noop from "noop";
import { useWindowSizeClassifier } from "../../screen/native/useWindowSizeClassifier.tsx";

let require = arg1;
const result = require("set").fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = useWindowSizeClassifier();
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(outer1_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = useWindowSizeClassifier /* useWindowSizeClassifier */;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier /* useWindowSizeClassifier */.WindowSizeClassifier.XLARGE };
  return obj;
};