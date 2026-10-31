// === Module 12106: FrameRenderTarget ===

// Module 12106 (FrameRenderTarget)
import FramePoolManagerDefault from "FramePoolManager" /* 12108 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { target: { flex: 1 }, loading: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj2.loading = obj3;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameRenderTarget.tsx");

export default function FrameRenderTarget(frameId) {
  frameId = frameId.frameId;
  let layoutMode = frameId;
  ({ presentation, spinnerWhileLoading } = frameId);
  if (spinnerWhileLoading === undefined) {
    spinnerWhileLoading = false;
  }
  const tmp = closure_8();
  layoutMode = presentation.layoutMode;
  const portraitSafeAreasConfig = presentation.portraitSafeAreasConfig;
  let webViewKey = portraitSafeAreasConfig;
  const landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  const items = [layoutMode, portraitSafeAreasConfig, landscapeSafeAreasConfig];
  const memo = noop.useMemo(() => ({ layoutMode, portraitSafeAreasConfig: webViewKey, landscapeSafeAreasConfig }), items);
  const tmp4 = webViewKey(landscapeSafeAreasConfig[4])(frameId, frameId.level, memo);
  webViewKey = tmp4.webViewKey;
  if (null == webViewKey) {
    return null;
  } else {
    const obj2 = { webViewKey, temporaryParentNodeTag: tmp4.temporaryParentNodeTag, style: tmp.target };
    const tmp13 = closure_6(layoutMode(tmp3[6]).WebViewTarget, obj2);
    let tmp6Result = tmp13;
    if (spinnerWhileLoading) {
      let obj = { style: tmp.target, children: null };
      const items1 = [tmp13, ];
      let tmp11Result = null;
      if (!tmp5) {
        const obj3 = { style: tmp.loading, pointerEvents: "none", children: closure_6(closure_4, { size: "large" }) };
        tmp11Result = closure_6(closure_5, obj3);
      }
      items1[1] = tmp11Result;
      obj.children = items1;
      tmp6Result = closure_7(closure_5, obj);
    }
    return tmp6Result;
  }
  tmp3 = landscapeSafeAreasConfig;
};