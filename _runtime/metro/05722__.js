// _runtime/metro/05722__.js
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

try {
  let closure_0 = require("enableScreens");
  exports.MaybeScreenContainer = (enabled) => {
    const merged = Object.assign(enabled, Object.create(null));
    if (null != closure_0) {
      let obj = { enabled: null };
      obj[0] = enabled.enabled;
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.ScreenContainer enabled={null} />;
    } else {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
  exports.MaybeScreen = (arg0) => {
    let active;
    let enabled;
    ({ enabled, active } = arg0);
    const merged = Object.assign(arg0, Object.create(null));
    if (null != closure_0) {
      let obj = { enabled: null, activityState: null };
      obj[0] = enabled;
      obj[1] = active;
      const merged1 = Object.assign(merged);
      let tmp8 = <tmp2.Screen enabled={null} activityState={null} />;
    } else {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp8 = <View />;
    }
    return tmp8;
  };
} catch (err) {
}