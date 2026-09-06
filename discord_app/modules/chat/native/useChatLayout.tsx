// discord_app/modules/chat/native/useChatLayout.tsx
import useWindowSizeClassifier from "../../screen/native/useWindowSizeClassifier.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
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
