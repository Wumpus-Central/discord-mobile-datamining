// === Module 17316: ActivityShelfItemBackground ===

// Module 17316 (ActivityShelfItemBackground)
import c from "c" /* 576 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import BrokenImageDefault from "BrokenImage" /* 11723 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: { width: "100%", aspectRatio } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((aspectRatio) => {
  const cResult = c.c(15);
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp3 = closure_7(aspectRatio.aspectRatio);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  _require = tmp4[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp4[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
            cResult[5] = I;
          } else {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
          }
          if (cResult[6] !== imageBackground.url) {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
            tmp7[0] = imageBackground.url;
            cResult[6] = imageBackground.url;
            cResult[7] = tmp7;
          } else {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
          }
          if (accessibilityLabel == null) {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
          }
          if (cResult[8] === tmp3.activityImage) {
            class I {
              constructor() {
                return closure_0(true);
              }
            }
          }
          const obj2 = { onError: I, source: tmp7, style: tmp3.activityImage, accessibilityRole: "image", accessibilityLabel };
          const tmp11 = <Image onError={I} source={tmp7} style={tmp3.activityImage} accessibilityRole="image" accessibilityLabel={accessibilityLabel} />;
          cResult[8] = tmp3.activityImage;
          cResult[9] = tmp7;
          cResult[10] = accessibilityLabel;
          cResult[11] = tmp11;
        }
      }
      if (cResult[3] !== tmp3.previewImage) {
        class I {
          constructor() {
            return closure_0(true);
          }
        }
        const obj3 = { style: tmp3.previewImage };
        const tmp14 = jsx(NativeViewDefault, { style: tmp3.previewImage });
        cResult[3] = tmp3.previewImage;
        cResult[4] = tmp14;
        const tmp12 = tmp14;
      } else {
        class I {
          constructor() {
            return closure_0(true);
          }
        }
      }
      return tmp12;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_0(true);
      }
    }
    const tmp17 = jsx(BrokenImageDefault, {});
    cResult[0] = tmp17;
    const tmp15 = tmp17;
  } else {
    class I {
      constructor() {
        return closure_0(true);
      }
    }
  }
  if (cResult[1] !== tmp3.previewImage) {
    class I {
      constructor() {
        return closure_0(true);
      }
    }
    const obj4 = { style: tmp3.previewImage, children: tmp15 };
    const tmp20 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: tmp15 });
    cResult[1] = tmp3.previewImage;
    cResult[2] = tmp20;
    const tmp18 = tmp20;
  } else {
    class I {
      constructor() {
        return closure_0(true);
      }
    }
  }
  return tmp18;
}) : ((aspectRatio) => {
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = closure_7(aspectRatio.aspectRatio);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          const obj2 = { style: tmp.previewImage, children: null };
          const obj3 = {
            onError() {
                      return closure_0(true);
                    },
            source: null,
            style: null,
            accessibilityRole: "image",
            accessibilityLabel: null
          };
          const obj4 = { uri: imageBackground.url };
          obj3.source = obj4;
          obj3.style = tmp.activityImage;
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          obj3.accessibilityLabel = accessibilityLabel;
          obj2.children = <Image onError={function onError() {
            return closure_0(true);
          }} source={null} style={null} accessibilityRole="image" accessibilityLabel={null} />;
          let tmp9Result = jsx(NativeViewDefault, { style: tmp.previewImage, children: null });
        }
      }
      const obj = { style: tmp.previewImage };
      tmp9Result = jsx(NativeViewDefault, { style: tmp.previewImage });
    }
    return tmp9Result;
  }
  const obj5 = { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) };
  tmp9Result = jsx(NativeViewDefault, { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) });
}));