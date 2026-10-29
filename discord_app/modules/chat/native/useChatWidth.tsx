// === Module 11317: useChatWidth ===

// Module 11317 (useChatWidth)
import c from "c" /* 576 */;
import useChatLayoutDefault from "useChatLayout" /* 5190 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5192 */;
import ChatViewWidthContextDefault from "ChatViewWidthContext" /* 11318 */;
import useDrawerWidth from "useDrawerWidth" /* 11319 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChatWidth(arg0) {
  const cResult = c.c(1);
  let context = noop.useContext(ChatViewWidthContextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { whileSliding: "narrower" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  useDrawerWidth;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayoutDefault().isChatLockedOpen) {
        diff = width - tmp7;
      }
      let tmp9 = diff;
    } else {
      tmp9 = width;
    }
    context = tmp9;
  }
  return context;
}) : (function useChatWidth(arg0) {
  let context = noop.useContext(ChatViewWidthContextDefault);
  const width = useBaseAppContainerDimensionsDefault().width;
  useDrawerWidth;
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (useChatLayoutDefault().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp5 = diff;
    } else {
      tmp5 = width;
    }
    context = tmp5;
  }
  return context;
});