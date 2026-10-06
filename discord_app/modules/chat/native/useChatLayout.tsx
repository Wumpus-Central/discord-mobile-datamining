// === Module 4745: useChatLayout ===

// Module 4745 (useChatLayout)
import react2 from "react" /* 576 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4746 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp2 = useWindowSizeClassifierDefault();
  const tmp3 = tmp2 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
  const tmp4 = tmp2 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE;
  if (cResult[0] === tmp3) {
    let tmp5;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { isChatBesideChannelList: tmp3, isChatLockedOpen: tmp4 };
  cResult[0] = tmp3;
  cResult[1] = tmp4;
  cResult[2] = obj2;
  tmp5 = obj2;
}) : (() => {
  const tmp = useWindowSizeClassifierDefault();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => {
    const obj = { isChatBesideChannelList: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: closure_0 >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default tmp2;
export const getChatLayout = function getChatLayout() {
  const obj = useWindowSizeClassifier;
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  const obj2 = { isChatBesideChannelList: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.XLARGE };
  return obj2;
};