// === Module 16059: ? ===

// Module 16059
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles((aspectRatio) => {
  const activityImage = { width: "100%", aspectRatio };
  return { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage };
});
const memoResult = importAllResult.memo(function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  let importDefault;
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
          const obj1 = { uri: null };
          obj1[0] = imageBackground.url;
          obj[1] = obj1;
          obj[2] = tmp.activityImage;
          if (accessibilityLabel == null) {
            accessibilityLabel = "";
          }
          obj[4] = accessibilityLabel;
          obj[1] = <Image onError={null} source={null} style={null} accessibilityRole="image" accessibilityLabel={null} />;
          let tmp9Result = tmp9(importDefault(5634), obj);
          const tmp12 = importDefault(5634);
          const tmp13 = Image;
        }
      }
      obj = { style: null };
      obj[0] = tmp.previewImage;
      tmp9Result = jsx(importDefault(5634), { style: null });
    }
    return tmp9Result;
  }
  const obj2 = { style: tmp.previewImage, children: null };
  obj2[1] = jsx(importDefault(11383), {});
  tmp9Result = jsx(importDefault(5634), { style: tmp.previewImage, children: null });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;