// discord_app/modules/in_app_notifications/native/NotificationProgress.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function Progress(percent) {
  percent = percent.percent;
  const tmp = createCacheKey();
  let first;
  let dependencyMap;
  const tmp2 = callback(React.useState(0), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useCallback((nativeEvent) => callback(nativeEvent.nativeEvent.layout.width), []);
  let obj = percent(4054);
  const fn = function n() {
    let obj = percent;
    let value = percent;
    if (typeof percent !== "Object") {
      value = obj.get();
    }
    obj = { translateX: first * (value / 100) - first };
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = closure_8;
  obj = { onLayout: callback, style: null, children: null };
  const items = [tmp.progressContainerBottom, ];
  let num = 1;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (percent.hideProgress) {
    num = 0;
  }
  items[1] = { opacity: num };
  obj[1] = items;
  const items1 = [tmp.progress, animatedStyle];
  obj[2] = jsx(first(4054).View, { style: items1 });
  return <View onLayout={callback} style={null}>{null}</View>;
}
function RedesignProgress(percent) {
  let hideProgress;
  let type;
  percent = percent.percent;
  ({ hideProgress, type } = percent);
  const tmp = createCacheKey();
  let first;
  let dependencyMap;
  const tmp2 = callback(React.useState(0), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  callback = React.useCallback((nativeEvent) => callback(nativeEvent.nativeEvent.layout.width), []);
  let obj = percent(4054);
  const fn = function n() {
    let obj = percent;
    let value = percent;
    if (typeof percent !== "Object") {
      value = obj.get();
    }
    obj = { translateX: first * (value / 100) - first };
    const transform = [obj];
    return { transform };
  };
  fn.__closure = { percent, width: first };
  fn.__workletHash = 14879761869068;
  fn.__initData = closure_8;
  obj = { onLayout: callback, style: null, children: null };
  const items = [tmp.progressContainerTop, ];
  let num = 1;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (hideProgress) {
    num = 0;
  }
  items[1] = { opacity: num };
  obj[1] = items;
  obj = { style: tmp.progressTrack, children: tmp7(first(4054).View, { style: items1 }) };
  items1 = [tmp.progressRedesign, "ALERT" === type ? tmp.progressBarWarning : tmp.progressBarBrand, animatedStyle];
  obj[2] = <View style={tmp.progressTrack}>{tmp7(first(4054).View, { style: items1 })}</View>;
  return <View style={tmp.progressTrack}>{tmp7(first(4054).View, { style: items1 })}</View>;
}
createCacheKey = { progress: null, progressRedesign: null, progressBarBrand: null, progressBarWarning: null, progressTrack: null, progressContainerTop: null, progressContainerBottom: null };
createCacheKey = { borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, height: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.xs, height: 8 };
const obj1 = { borderRadius: require("Themes").radii.xs, height: 8 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.YELLOW_300 };
const obj3 = { backgroundColor: require("Themes").unsafe_rawColors.YELLOW_300 };
createCacheKey[4] = { width: "100%", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 8, overflow: "hidden" };
createCacheKey[5] = { position: "absolute", top: -5, left: 16, right: 16 };
createCacheKey[6] = { width: "100%", position: "absolute", bottom: -1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const obj4 = { width: "100%", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 8, overflow: "hidden" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  let canExpand;
  let type;
  percent = percent.percent;
  ({ canExpand, type } = percent);
  let obj = require(10316) /* context */;
  const inAppNotificationContext = obj.useInAppNotificationContext();
  if (canExpand) {
    obj = { percent: null, hideProgress: null, type: null };
    obj[0] = percent;
    obj[1] = tmp2;
    obj[2] = type;
    let tmp3Result = tmp3(RedesignProgress, obj);
  } else {
    obj = { percent: null, hideProgress: null };
    obj[0] = percent;
    obj[1] = tmp2;
    tmp3Result = tmp3(Progress, obj);
  }
  return tmp3Result;
};