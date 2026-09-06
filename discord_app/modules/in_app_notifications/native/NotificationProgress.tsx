// === Module 10173: NotificationProgress ===

// Module 10173 (NotificationProgress)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { progress: null, progressContainerBottom: null };
createStyles = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 };
createStyles.progress = createStyles;
createStyles.progressContainerBottom = { width: "100%", position: "absolute", bottom: -1 };
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  percent = percent.percent;
  const tmp = closure_7();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const width = tmp2[0];
  closure_2 = tmp2[1];
  const callback = noop.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  const fn = function s() {
    let obj = percent;
    value = percent;
    if (typeof percent !== "number") {
      value = obj.get();
    }
    obj = { transform: null };
    obj = { translateX: first * (value / 100) - first };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { percent, width };
  fn.__workletHash = 14879761869068;
  fn.__initData = __initData;
  let obj = { onLayout: callback, style: tmp.progressContainerBottom, children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null };
  let items = [tmp.progress, animatedStyle];
  obj.style = items;
  obj.children = jsx(ReanimatedRexportDefault.View, { style: null });
  return <View style={null} />;
};