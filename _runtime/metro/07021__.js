// _runtime/metro/07021__.js
import noop from "00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
try {
  let closure_0 = fn(4912);
  exports.MaybeScreenContainer = (enabled) => {
    const merged = Object.assign(enabled, Object.assign({ enabled: 0 }));
    if (null != closure_0) {
      let obj = { enabled: enabled.enabled };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.ScreenContainer enabled={enabled.enabled} />;
    } else {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
  exports.MaybeScreen = (arg0) => {
    ({ enabled, active } = arg0);
    const merged = Object.assign(arg0, Object.assign({ enabled: 0, active: 0 }));
    if (null != closure_0) {
      let obj = { enabled, activityState: active };
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.Screen enabled={enabled} activityState={active} />;
    } else {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
} catch (err) {}
