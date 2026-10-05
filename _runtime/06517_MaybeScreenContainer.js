// _runtime/06517_MaybeScreenContainer.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import enableScreens from "05715_enableScreens.js";
import react from "00019_react.js";

const View = react_native.View;
const jsx = Fragment.jsx;
try {
  let closure_0 = enableScreens;
} catch (err) {}

export const MaybeScreenContainer = (enabled) => {
  let tmp8;
  enabled = enabled.enabled;
  const merged = Object.assign(enabled, Object.assign({ enabled: 0 }));
  if (null != closure_0) {
    const ScreenContainer = tmp2.ScreenContainer;
    const merged1 = Object.assign(merged);
    tmp8 = <ScreenContainer enabled={enabled} />;
  } else {
    const merged2 = Object.assign(merged);
    tmp8 = <View />;
  }
  return tmp8;
};
export const MaybeScreen = (arg0) => {
  let active;
  let enabled;
  let tmp8;
  ({ enabled, active } = arg0);
  const merged = Object.assign(arg0, Object.assign({ enabled: 0, active: 0 }));
  if (null != closure_0) {
    const Screen = tmp2.Screen;
    const merged1 = Object.assign(merged);
    tmp8 = <Screen enabled={enabled} activityState={active} />;
  } else {
    const merged2 = Object.assign(merged);
    tmp8 = <View />;
  }
  return tmp8;
};
