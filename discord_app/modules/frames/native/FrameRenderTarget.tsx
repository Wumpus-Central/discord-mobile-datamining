// discord_app/modules/frames/native/FrameRenderTarget.tsx
import c from "../../../../_runtime/00576_c.js";
import useFramePoolBorrowDefault from "useFramePoolBorrow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const WebView = WebViewTarget(7511);
require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ target: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMemoizedPresentation(arg0) {
      const cResult = c.c(4);
      ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig } = arg0);
      if (cResult[0] === landscapeSafeAreasConfig) {
        if (cResult[1] === layoutMode) {
          if (cResult[2] === portraitSafeAreasConfig) {
            let tmp2 = cResult[3];
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
    }
  : function useMemoizedPresentation(layoutMode) {
      layoutMode = layoutMode.layoutMode;
      const portraitSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
      const landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
      const items = [layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig];
      return noop.useMemo(() => ({ layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig }), items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameRenderTarget.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FrameRenderTarget(arg0) {
      let WebViewTarget = require;
      let tmp = dependencyMap;
      const cResult = c.c(4);
      ({ frameId, level, presentation } = arg0);
      let target = closure_5();
      const tmp3 = closure_6(presentation);
      ({ webViewKey, temporaryParentNodeTag } = useFramePoolBorrowDefault(frameId, level, closure_6(presentation)));
      if (null == webViewKey) {
        return null;
      } else {
        if (cResult[0] === target.target) {
          if (cResult[1] === temporaryParentNodeTag) {
          }
        }
        WebViewTarget = WebView.WebViewTarget;
        const obj2 = { webViewKey, temporaryParentNodeTag, style: target.target };
        tmp = (
          <WebViewTarget
            webViewKey={webViewKey}
            temporaryParentNodeTag={temporaryParentNodeTag}
            style={target.target}
          />
        );
        target = target.target;
        cResult[0] = target;
        cResult[1] = temporaryParentNodeTag;
        cResult[2] = webViewKey;
        cResult[3] = tmp;
      }
      const tmp4 = useFramePoolBorrowDefault(frameId, level, closure_6(presentation));
    }
  : function FrameRenderTarget(arg0) {
      ({ frameId, level, presentation } = arg0);
      const tmp = closure_5();
      const tmp2 = closure_6(presentation);
      const webViewKey = useFramePoolBorrowDefault(frameId, level, closure_6(presentation)).webViewKey;
      let tmp6 = null;
      if (null != webViewKey) {
        const obj = { webViewKey, temporaryParentNodeTag: tmp5, style: tmp.target };
        tmp6 = jsx(WebView.WebViewTarget, { webViewKey, temporaryParentNodeTag: tmp5, style: tmp.target });
      }
      return tmp6;
    };
