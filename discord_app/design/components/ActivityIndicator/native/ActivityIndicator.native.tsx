// === Module 5446: ActivityIndicator ===

// Module 5446 (ActivityIndicator)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;

const ActivityIndicator = get_ActivityIndicator.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export const ActivityIndicator = function ActivityIndicator(size) {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(size, Object.create(null));
  let obj = map;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(ThemesDefault.colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};