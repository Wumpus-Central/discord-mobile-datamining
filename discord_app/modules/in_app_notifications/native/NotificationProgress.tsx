// discord_app/modules/in_app_notifications/native/NotificationProgress.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = {
  progress: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 },
  progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 },
};
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  percent = percent.percent;
  const tmp = closure_7();
  width = undefined;
  closure_2 = undefined;
  [width, closure_2] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  const fn = function s() {
    value = percent;
    if (typeof percent !== "number") {
      value = percent.get();
    }
    const obj2 = { transform: null };
    const items = [{ translateX: first * (value / 100) - first }];
    obj2.transform = items;
    return obj2;
  };
  fn.__closure = { percent, width };
  fn.__workletHash = 14879761869068;
  fn.__initData = __initData;
  let obj2 = { onLayout: callback, style: tmp.progressContainerBottom, children: null };
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null };
  let items = [tmp.progress, animatedStyle];
  obj3.style = items;
  obj2.children = jsx(ReanimatedRexportDefault.View, { style: null });
  return (
    <View onLayout={callback} style={tmp.progressContainerBottom}>
      {null}
    </View>
  );
}
