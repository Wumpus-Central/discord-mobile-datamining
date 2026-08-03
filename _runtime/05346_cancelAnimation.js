try {
  const _module = require("cancelAnimation");
  let useSharedValue;
  if (_module != null) {
    useSharedValue = _module.useSharedValue;
  }
  let setGestureState = undefined === _module;
  if (!setGestureState) {
    setGestureState = _module.setGestureState;
  }
  if (!setGestureState) {
    const fn = function t() {
      console.warn(require(5343) /* toArray */.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
    };
    let obj = { tagMessage: null };
    obj = { code: "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}" };
    obj[0] = require("toArray").tagMessage;
    fn.__closure = obj;
    fn.__workletHash = 12835327155090;
    fn.__initData = obj;
    _module.setGestureState = fn;
  }
  exports.Reanimated = _module;
} catch (err) {
}