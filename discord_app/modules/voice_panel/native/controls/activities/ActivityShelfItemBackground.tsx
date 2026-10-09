// === Module 17749: ActivityShelfItemBackground ===

// Module 17749 (ActivityShelfItemBackground)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 6163 */;
import NativeViewDefault from "NativeView" /* 6168 */;
import BrokenImageDefault from "BrokenImage" /* 11725 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: { width: "100%", aspectRatio } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityShelfItemBackground(aspectRatio) {
  const cResult = c.c(15);
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp3 = closure_6(aspectRatio.aspectRatio);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp4[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp4[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function y() {
              return closure_0(true);
            };
            cResult[5] = fn;
            let tmp5 = fn;
          } else {
            tmp5 = cResult[5];
          }
          if (cResult[6] !== imageBackground.url) {
            const obj2 = { uri: imageBackground.url };
            cResult[6] = imageBackground.url;
            cResult[7] = obj2;
            let tmp6 = obj2;
          } else {
            tmp6 = cResult[7];
          }
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          if (cResult[8] === tmp3.activityImage) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === accessibilityLabel) {
                let tmp7 = cResult[11];
              }
              if (cResult[12] === tmp3.previewImage) {
                if (cResult[13] === tmp7) {
                  let tmp11 = cResult[14];
                }
                return tmp11;
              }
              const obj3 = { style: tmp3.previewImage, children: tmp7 };
              const tmp14 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: tmp7 });
              cResult[12] = tmp3.previewImage;
              cResult[13] = tmp7;
              cResult[14] = tmp14;
              tmp11 = tmp14;
            }
          }
          const obj4 = { onError: tmp5, source: tmp6, style: tmp3.activityImage, accessibilityRole: "image", accessibilityLabel };
          const tmp10 = jsx(FastImageDefault, { onError: tmp5, source: tmp6, style: tmp3.activityImage, accessibilityRole: "image", accessibilityLabel });
          cResult[8] = tmp3.activityImage;
          cResult[9] = tmp6;
          cResult[10] = accessibilityLabel;
          cResult[11] = tmp10;
          tmp7 = tmp10;
        }
      }
      if (cResult[3] !== tmp3.previewImage) {
        const obj5 = { style: tmp3.previewImage };
        const tmp18 = jsx(NativeViewDefault, { style: tmp3.previewImage });
        cResult[3] = tmp3.previewImage;
        cResult[4] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[4];
      }
      return tmp15;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = jsx(BrokenImageDefault, {});
    cResult[0] = tmp22;
    let first = tmp22;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.previewImage) {
    const obj6 = { style: tmp3.previewImage, children: first };
    const tmp26 = jsx(NativeViewDefault, { style: tmp3.previewImage, children: first });
    cResult[1] = tmp3.previewImage;
    cResult[2] = tmp26;
    let tmp23 = tmp26;
  } else {
    tmp23 = cResult[2];
  }
  return tmp23;
}) : (function ActivityShelfItemBackground(aspectRatio) {
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = closure_6(aspectRatio.aspectRatio);
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
          obj2.children = jsx(FastImageDefault, {
            onError() {
                      return closure_0(true);
                    },
            source: null,
            style: null,
            accessibilityRole: "image",
            accessibilityLabel: null
          });
          let tmp9Result = <tmp12 style={tmp.previewImage}>{null}</tmp12>;
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