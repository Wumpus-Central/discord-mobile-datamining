// discord_app/modules/frames/native/FrameRenderTarget.tsx
import c from "../../../../_runtime/00576_c.js";
import FramePoolManagerDefault from "FramePoolManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4972);
let obj2 = { target: { flex: 1 }, loading: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj2.loading = obj3;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
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
  ? function FrameRenderTarget(frameId) {
      const cResult = frameId(576).c(14);
      frameId = frameId.frameId;
      const spinnerWhileLoading = frameId.spinnerWhileLoading;
      let tmp4 = undefined !== spinnerWhileLoading;
      ({ level, presentation } = frameId);
      if (tmp4) {
        tmp4 = spinnerWhileLoading;
      }
      let target = closure_8();
      let obj = frameId(576);
      const tmp = frameId;
      const tmp7 = webViewKey(11781)(frameId, level, closure_9(presentation));
      webViewKey = tmp7.webViewKey;
      const temporaryParentNodeTag = tmp7.temporaryParentNodeTag;
      if (cResult[0] === frameId) {
        if (cResult[1] === webViewKey) {
          let tmp8 = cResult[2];
        }
        const syncExternalStore = noop.useSyncExternalStore(tmp6(11782).subscribe, tmp8);
        if (null == webViewKey) {
          return null;
        } else {
          if (cResult[3] === target.target) {
            if (cResult[4] === temporaryParentNodeTag) {
              if (cResult[5] === webViewKey) {
                let tmp12 = cResult[6];
              }
              if (!tmp4) {
                return tmp12;
              } else {
                if (cResult[7] === syncExternalStore) {
                  if (cResult[8] === target.loading) {
                    let tmp16 = cResult[9];
                  }
                  if (cResult[10] === target.target) {
                    if (cResult[11] === tmp16) {
                    }
                  }
                  const obj2 = { style: target.target, children: null };
                  const items = [tmp12, tmp16];
                  obj2.children = items;
                  const tmp24 = closure_7(closure_5, obj2);
                  target = target.target;
                  cResult[10] = target;
                  cResult[11] = tmp16;
                  cResult[12] = tmp12;
                  cResult[13] = tmp24;
                }
                let tmp17 = null;
                if (!syncExternalStore) {
                  const obj3 = {
                    style: target.loading,
                    pointerEvents: "none",
                    children: closure_6(closure_4, { size: "large" }),
                  };
                  tmp17 = closure_6(closure_5, obj3);
                }
                cResult[7] = syncExternalStore;
                cResult[8] = target.loading;
                cResult[9] = tmp17;
                tmp16 = tmp17;
              }
            }
          }
          const obj4 = { webViewKey, temporaryParentNodeTag, style: target.target };
          const tmp14 = closure_6(tmp(7908).WebViewTarget, obj4);
          cResult[3] = target.target;
          cResult[4] = temporaryParentNodeTag;
          cResult[5] = webViewKey;
          cResult[6] = tmp14;
          tmp12 = tmp14;
        }
      }
      const fn = function o() {
        let isWebViewLoadedResult = null != webViewKey;
        if (isWebViewLoadedResult) {
          isWebViewLoadedResult = FramePoolManagerDefault.isWebViewLoaded(frameId, tmp);
        }
        return isWebViewLoadedResult;
      };
      cResult[0] = frameId;
      cResult[1] = webViewKey;
      cResult[2] = fn;
      tmp8 = fn;
      const tmp5 = closure_9(presentation);
      tmp6 = webViewKey;
    }
  : function FrameRenderTarget(frameId) {
      frameId = frameId.frameId;
      let flag = frameId.spinnerWhileLoading;
      ({ level, presentation } = frameId);
      if (flag === undefined) {
        flag = false;
      }
      let webViewKey;
      const tmp = closure_8();
      const tmp4 = webViewKey(11781)(frameId, level, closure_9(presentation));
      webViewKey = tmp4.webViewKey;
      if (null == webViewKey) {
        return null;
      } else {
        const obj2 = { webViewKey, temporaryParentNodeTag: tmp4.temporaryParentNodeTag, style: tmp.target };
        const tmp13 = closure_6(frameId(7908).WebViewTarget, obj2);
        let tmp6Result = tmp13;
        if (flag) {
          let obj = { style: tmp.target, children: null };
          const items = [tmp13];
          let tmp11Result = null;
          if (!tmp5) {
            const obj3 = {
              style: tmp.loading,
              pointerEvents: "none",
              children: closure_6(closure_4, { size: "large" }),
            };
            tmp11Result = closure_6(closure_5, obj3);
          }
          items[1] = tmp11Result;
          obj.children = items;
          tmp6Result = closure_7(closure_5, obj);
        }
        return tmp6Result;
      }
      const tmp2 = closure_9(presentation);
    };
