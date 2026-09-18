// === Module 17523: ActivityShelfItemBackground ===

// Module 17523 (ActivityShelfItemBackground)
import NativeViewDefault from "NativeView" /* 5759 */;
import BrokenImageDefault from "BrokenImage" /* 12327 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles((aspectRatio) => {
  const obj = { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage: { width: "100%", aspectRatio } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default noop.memo(function ActivityShelfItemBackground(aspectRatio) {
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
});