// === Module 5703: ActivityIndicator ===

// Module 5703 (ActivityIndicator)
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("map").fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

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
  let obj = require(3959) /* map */;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(importDefault(712).colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};