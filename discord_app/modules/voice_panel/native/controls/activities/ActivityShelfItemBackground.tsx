// === Module 17287: ActivityShelfItemBackground ===

// Module 17287 (ActivityShelfItemBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import BrokenImageDefault from "BrokenImage" /* 11709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: obj2 };
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((aspectRatio) => {
  let accessibilityLabel;
  let imageBackground;
  let tmp15;
  let tmp18;
  const obj = react2;
  const cResult = obj.c(15);
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp3 = closure_7(aspectRatio.aspectRatio);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  _require = tmp4[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp4[0]) {
      let tmp12;
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
        const tmp14 = jsx(NativeViewDefault, { style: tmp3.previewImage });
        cResult[3] = tmp3.previewImage;
        cResult[4] = tmp14;
        tmp12 = tmp14;
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
    tmp15 = tmp17;
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
    const tmp20 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: tmp15 });
    cResult[1] = tmp3.previewImage;
    cResult[2] = tmp20;
    tmp18 = tmp20;
  } else {
    class I {
      constructor() {
        return closure_0(true);
      }
    }
  }
  return tmp18;
}) : ((aspectRatio) => {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = closure_7(aspectRatio.aspectRatio);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_0 = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    let tmp9Result;
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          const obj4 = { uri: imageBackground.url };
          NativeViewDefault;
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          tmp9Result = <tmp12 style={tmp.previewImage}>{null}</tmp12>;
        }
      }
      tmp9Result = jsx(NativeViewDefault, { style: tmp.previewImage });
    }
    return tmp9Result;
  }
  NativeViewDefault;
  tmp9Result = <tmp7 style={tmp.previewImage}>{null}</tmp7>;
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;