// === Module 16594: FrameRenderTarget ===

// Module 16594 (FrameRenderTarget)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import WebView from "WebView" /* 7973 */;
import useFramePoolBorrowDefault from "useFramePoolBorrow" /* 16595 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ target: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let landscapeSafeAreasConfig;
  let layoutMode;
  let portraitSafeAreasConfig;
  const obj = react2;
  const cResult = obj.c(4);
  ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig } = arg0);
  if (cResult[0] === landscapeSafeAreasConfig) {
    if (cResult[1] === layoutMode) {
      let tmp2;
      if (cResult[2] === portraitSafeAreasConfig) {
        tmp2 = cResult[3];
      }
      return tmp2;
    }
  }
  const obj2 = { layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig };
  cResult[0] = landscapeSafeAreasConfig;
  cResult[1] = layoutMode;
  cResult[2] = portraitSafeAreasConfig;
  cResult[3] = obj2;
  tmp2 = obj2;
}) : ((layoutMode) => {
  layoutMode = layoutMode.layoutMode;
  const portraitSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
  const items = [layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  return react.useMemo(() => ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig }), items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let frameId;
  let level;
  let presentation;
  let temporaryParentNodeTag;
  let webViewKey;
  const obj = react2;
  const cResult = obj.c(4);
  ({ frameId, level, presentation } = arg0);
  const tmp4 = closure_5();
  const tmp5 = closure_6(presentation);
  ({ webViewKey, temporaryParentNodeTag } = useFramePoolBorrowDefault(frameId, level, tmp5));
  let tmp7 = null;
  useFramePoolBorrowDefault(frameId, level, tmp5);
  if (null != webViewKey) {
    if (cResult[0] === tmp4.target) {
      if (cResult[1] === temporaryParentNodeTag) {
        let tmp8;
        if (cResult[2] === webViewKey) {
          tmp8 = cResult[3];
        }
        tmp7 = tmp8;
      }
    }
    const tmp10 = jsx(WebView.WebViewTarget, { webViewKey, temporaryParentNodeTag, style: tmp4.target });
    cResult[0] = tmp4.target;
    cResult[1] = temporaryParentNodeTag;
    cResult[2] = webViewKey;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  }
  return tmp7;
}) : ((arg0) => {
  let frameId;
  let level;
  let presentation;
  ({ frameId, level, presentation } = arg0);
  const tmp = closure_5();
  const tmp2 = closure_6(presentation);
  const webViewKey = useFramePoolBorrowDefault(frameId, level, tmp2).webViewKey;
  let tmp6 = null;
  useFramePoolBorrowDefault(frameId, level, tmp2);
  if (null != webViewKey) {
    tmp6 = jsx(WebView.WebViewTarget, { webViewKey, temporaryParentNodeTag: tmp5, style: tmp.target });
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameRenderTarget.tsx");

export default tmp2;