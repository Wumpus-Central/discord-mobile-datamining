// === Module 16692: ? ===

// Module 16692
import setDefault from "set" /* 5974 */;
import BrokenImageDefault from "BrokenImage" /* 11624 */;
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles((aspectRatio) => {
  const activityImage = { width: "100%", aspectRatio };
  return { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage };
});
const memoResult = importAllResult.memo(function ActivityShelfItemBackground(aspectRatio) {
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  importDefault = undefined;
  const tmp = callback2(aspectRatio.aspectRatio);
  const tmp2 = callback(importAllResult.useState(false), 2);
  importDefault = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          let obj = { style: null, children: null };
          obj[0] = tmp.previewImage;
          obj = { onError: null, source: null, style: null, accessibilityRole: "image", accessibilityLabel: null };
          obj[0] = function onError() {
            return callback(true);
          };
          obj1 = { uri: null };
          obj1[0] = imageBackground.url;
          obj[1] = obj1;
          obj[2] = tmp.activityImage;
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          obj[4] = accessibilityLabel;
          obj[1] = <Image onError={null} source={null} style={null} accessibilityRole="image" accessibilityLabel={null} />;
          let tmp9Result = tmp9(setDefault, obj);
          const tmp12 = setDefault;
          const tmp13 = Image;
        }
      }
      obj = { style: null };
      obj[0] = tmp.previewImage;
      tmp9Result = jsx(setDefault, { style: null });
    }
    return tmp9Result;
  }
  const obj2 = { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) };
  tmp9Result = jsx(setDefault, { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;