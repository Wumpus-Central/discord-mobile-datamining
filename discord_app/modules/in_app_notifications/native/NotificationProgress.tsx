// === Module 11211: NotificationProgress ===

// Module 11211 (NotificationProgress)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { progress: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 }, progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 } };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = { code: "(function NotificationProgressTsx1(){let[percent,width]=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default function NotificationProgress(percent) {
  const tmp = closure_7();
  [tmp3, c0] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.width), []);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  items = [closure_8, percent.percent, tmp3];
  c0 = undefined;
  c1 = undefined;
  [tmp6, tmp7, tmp8] = items;
  class NotificationProgressTsx1 {
    constructor() {
      obj = closure_0;
      value = closure_0;
      if (typeof closure_0 !== "number") {
        value = obj.get();
      }
      obj1 = { transform: null };
      obj4 = { translateX: closure_1 * (value / 100) - closure_1 };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp7, tmp8];
  NotificationProgressTsx1.__closure = items1;
  NotificationProgressTsx1.__workletHash = 14085017050901;
  NotificationProgressTsx1.__initData = tmp6;
  let obj2 = { onLayout: callback, style: tmp.progressContainerBottom, children: null };
  const animatedStyle = _mod1652.useAnimatedStyle(NotificationProgressTsx1);
  const obj3 = { style: null };
  const items2 = [tmp.progress, animatedStyle];
  obj3.style = items2;
  obj2.children = jsx(_modDef1652.View, { style: null });
  return <View onLayout={callback} style={tmp.progressContainerBottom}>{null}</View>;
};