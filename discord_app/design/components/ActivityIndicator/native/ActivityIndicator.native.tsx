// discord_app/design/components/ActivityIndicator/native/ActivityIndicator.native.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ActivityIndicator = _mod17.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export const ActivityIndicator = function ActivityIndicator(size) {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(size, Object.assign({ size: 0, animating: 0 }));
  let obj = useToken;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};
