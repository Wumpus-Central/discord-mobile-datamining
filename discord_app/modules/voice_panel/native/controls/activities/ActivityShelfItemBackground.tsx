// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx
import obj132Default from "../../../../core/native/NativeView.tsx";
import BrokenImageDefault from "../../../../image/native/BrokenImage.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { Image } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles((aspectRatio) => {
  const activityImage = { width: "100%", aspectRatio };
  return { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage };
});
const memoResult = importAllResult.memo(function ActivityShelfItemBackground(aspectRatio) {
  ({ imageBackground, accessibilityLabel } = aspectRatio);
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
          let tmp9Result = jsx(obj132Default, { onError: null, source: null, style: null, accessibilityRole: "image", accessibilityLabel: null });
        }
      }
      obj = { style: null };
      obj[0] = tmp.previewImage;
      tmp9Result = jsx(obj132Default, { style: null });
    }
    return tmp9Result;
  }
  const obj2 = { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) };
  tmp9Result = jsx(obj132Default, { style: tmp.previewImage, children: jsx(BrokenImageDefault, {}) });
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;