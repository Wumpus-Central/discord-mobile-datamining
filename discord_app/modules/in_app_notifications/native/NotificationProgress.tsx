// discord_app/modules/in_app_notifications/native/NotificationProgress.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { progress: null, progressContainerBottom: null };
createCacheKey = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, height: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", position: "absolute", bottom: -1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  percent = percent.percent;
  const tmp = callback2();
  let first;
  dependencyMap = undefined;
  const tmp2 = callback(React.useState(0), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useCallback((nativeEvent) => callback(nativeEvent.nativeEvent.layout.width), []);
  let obj = percent(4185);
  const fn = function s() {
    let obj = percent;
    let value = percent;
    if (typeof percent !== "number") {
      value = obj.get();
    }
    obj = { translateX: first * (value / 100) - first };
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = closure_8;
  obj = { onLayout: callback, style: tmp.progressContainerBottom, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [tmp.progress, animatedStyle];
  obj[2] = jsx(first(4185).View, { style: items });
  return <View onLayout={callback} style={tmp.progressContainerBottom}>{null}</View>;
};