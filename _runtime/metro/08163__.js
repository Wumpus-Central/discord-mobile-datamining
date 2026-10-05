// _runtime/metro/08163__.js
import react_native from "../00017_react-native.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let map;
let metroImportDefault;
let metroRequire;
let closure_0 = { top: 20, left: 20, right: 20, bottom: 30 };
const Mixin = react_native.Touchable.Mixin;
({
  touchableHandleStartShouldSetResponder: map,
  touchableHandleResponderTerminationRequest: c2,
  touchableHandleResponderGrant: c3,
  touchableHandleResponderMove: closure_4,
  touchableHandleResponderRelease: hasOwnProperty,
  touchableHandleResponderTerminate: metroRequire,
  touchableGetInitialState: metroImportDefault,
} = Mixin);
let obj = {
  touchableHandleStartShouldSetResponder(arg0) {
    let result;
    const onStartShouldSetResponder = this.props.onStartShouldSetResponder;
    if (onStartShouldSetResponder) {
      result = onStartShouldSetResponder(arg0);
    } else {
      result = map.call(tmp, arg0);
    }
    return result;
  },
  touchableHandleResponderTerminationRequest(arg0) {
    let result;
    const onResponderTerminationRequest = this.props.onResponderTerminationRequest;
    if (onResponderTerminationRequest) {
      result = onResponderTerminationRequest(arg0);
    } else {
      result = React2.call(tmp, arg0);
    }
    return result;
  },
  touchableHandleResponderGrant(arg0) {
    let onResponderGrantResult;
    const onResponderGrant = this.props.onResponderGrant;
    if (onResponderGrant) {
      onResponderGrantResult = onResponderGrant(arg0);
    } else {
      onResponderGrantResult = _false.call(tmp, arg0);
    }
    return onResponderGrantResult;
  },
  touchableHandleResponderMove(arg0) {
    let onResponderMoveResult;
    const onResponderMove = this.props.onResponderMove;
    if (onResponderMove) {
      onResponderMoveResult = onResponderMove(arg0);
    } else {
      onResponderMoveResult = React3.call(tmp, arg0);
    }
    return onResponderMoveResult;
  },
  touchableHandleResponderRelease(arg0) {
    let onResponderReleaseResult;
    const onResponderRelease = this.props.onResponderRelease;
    if (onResponderRelease) {
      onResponderReleaseResult = onResponderRelease(arg0);
    } else {
      onResponderReleaseResult = hasOwnProperty.call(tmp, arg0);
    }
    return onResponderReleaseResult;
  },
  touchableHandleResponderTerminate(arg0) {
    let onResponderTerminateResult;
    const onResponderTerminate = this.props.onResponderTerminate;
    if (onResponderTerminate) {
      onResponderTerminateResult = onResponderTerminate(arg0);
    } else {
      onResponderTerminateResult = metroRequire.call(tmp, arg0);
    }
    return onResponderTerminateResult;
  },
  touchableHandlePress(nativeEvent) {
    const onPress = this.props.onPress;
    if (onPress) {
      onPress(nativeEvent);
    }
  },
  touchableHandleActivePressIn(nativeEvent) {
    const onPressIn = this.props.onPressIn;
    if (onPressIn) {
      onPressIn(nativeEvent);
    }
  },
  touchableHandleActivePressOut(nativeEvent) {
    const onPressOut = this.props.onPressOut;
    if (onPressOut) {
      onPressOut(nativeEvent);
    }
  },
  touchableHandleLongPress(nativeEvent) {
    const onLongPress = this.props.onLongPress;
    if (onLongPress) {
      onLongPress(nativeEvent);
    }
  },
  touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || closure_0;
  },
  touchableGetHitSlop() {
    return this.props.hitSlop;
  },
  touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0;
  },
  touchableGetLongPressDelayMS() {
    let num = this.props.delayLongPress;
    let num2 = 0;
    if (0 !== num) {
      if (!num) {
        num = 500;
      }
      num2 = num;
    }
    return num2;
  },
  touchableGetPressOutDelayMS() {
    return this.props.delayPressOut || 0;
  },
};
const merged = Object.assign(Mixin);
const keys = Object.keys(obj);
let closure_10 = keys.map((item) => obj[item]);
const length = keys.length;

export default (self) => {
  let num;
  for (let num = 0; num < length; num = num + 1) {
    obj = closure_10[num];
    let bindResult = obj;
    let tmp2 = keys[num];
    if (typeof obj === "function") {
      bindResult = obj.bind(self);
    }
    self[tmp2] = bindResult;
  }
  self.state = metroImportDefault();
};
