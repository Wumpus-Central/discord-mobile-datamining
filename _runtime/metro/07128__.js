// _runtime/metro/07128__.js
import noop from "00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
try {
  let closure_0 = fn(4991);
  exports.MaybeScreenContainer = (enabled) => {
    const merged = Object.assign(enabled, Object.assign({ enabled: 0 }));
    if (null != closure_0) {
      const obj2 = { enabled: enabled.enabled };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.ScreenContainer enabled={enabled.enabled} />;
    } else {
      const obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
  exports.MaybeScreen = (arg0) => {
    ({ enabled, active } = arg0);
    const merged = Object.assign(arg0, Object.assign({ enabled: 0, active: 0 }));
    if (null != closure_0) {
      const obj2 = { enabled, activityState: active };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.Screen enabled={enabled} activityState={active} />;
    } else {
      const obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
} catch (err) {}
