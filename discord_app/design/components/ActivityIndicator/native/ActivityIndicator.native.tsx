// discord_app/design/components/ActivityIndicator/native/ActivityIndicator.native.tsx
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
  let obj = require("../../../tokens/native/useToken.tsx") /* map */;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};