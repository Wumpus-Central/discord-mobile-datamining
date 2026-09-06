// === Module 8480: ? ===

// Module 8480
import _mod17 from "module_17" /* 17 */;

let closure_0 = { top: 20, left: 20, right: 20, bottom: 30 };
const Mixin = _mod17.Touchable.Mixin;
({ touchableHandleStartShouldSetResponder: closure_1, touchableHandleResponderTerminationRequest: c2, touchableHandleResponderGrant: c3, touchableHandleResponderMove: closure_4, touchableHandleResponderRelease: hasOwnProperty, touchableHandleResponderTerminate: metroRequire, touchableGetInitialState: closure_7 } = Mixin);
let obj = {};
const merged = Object.assign(Mixin);
obj.touchableHandleStartShouldSetResponder = function touchableHandleStartShouldSetResponder(arg0) {
  const self = this;
  const onStartShouldSetResponder = this.props.onStartShouldSetResponder;
  if (onStartShouldSetResponder) {
    let result = onStartShouldSetResponder(arg0);
  } else {
    const call = framebus.call;
    result = typeof call === "unknown" ? framebus(arg0) : call(self, arg0);
  }
  return result;
};
obj.touchableHandleResponderTerminationRequest = function touchableHandleResponderTerminationRequest(arg0) {
  const self = this;
  const onResponderTerminationRequest = this.props.onResponderTerminationRequest;
  if (onResponderTerminationRequest) {
    let result = onResponderTerminationRequest(arg0);
  } else {
    const call = React2.call;
    result = typeof call === "unknown" ? React2(arg0) : call(self, arg0);
  }
  return result;
};
obj.touchableHandleResponderGrant = function touchableHandleResponderGrant(arg0) {
  const self = this;
  const onResponderGrant = this.props.onResponderGrant;
  if (onResponderGrant) {
    let onResponderGrantResult = onResponderGrant(arg0);
  } else {
    const call = React3.call;
    onResponderGrantResult = typeof call === "unknown" ? React3(arg0) : call(self, arg0);
  }
  return onResponderGrantResult;
};
obj.touchableHandleResponderMove = function touchableHandleResponderMove(arg0) {
  const self = this;
  const onResponderMove = this.props.onResponderMove;
  if (onResponderMove) {
    let onResponderMoveResult = onResponderMove(arg0);
  } else {
    const call = React4.call;
    onResponderMoveResult = typeof call === "unknown" ? React4(arg0) : call(self, arg0);
  }
  return onResponderMoveResult;
};
obj.touchableHandleResponderRelease = function touchableHandleResponderRelease(arg0) {
  const self = this;
  const onResponderRelease = this.props.onResponderRelease;
  if (onResponderRelease) {
    let onResponderReleaseResult = onResponderRelease(arg0);
  } else {
    const call = hasOwnProperty.call;
    onResponderReleaseResult = typeof call === "unknown" ? hasOwnProperty(arg0) : call(self, arg0);
  }
  return onResponderReleaseResult;
};
obj.touchableHandleResponderTerminate = function touchableHandleResponderTerminate(arg0) {
  const self = this;
  const onResponderTerminate = this.props.onResponderTerminate;
  if (onResponderTerminate) {
    let onResponderTerminateResult = onResponderTerminate(arg0);
  } else {
    const call = timestampProducer.call;
    onResponderTerminateResult = typeof call === "unknown" ? timestampProducer(arg0) : call(self, arg0);
  }
  return onResponderTerminateResult;
};
obj.touchableHandlePress = function touchableHandlePress(nativeEvent) {
  const onPress = this.props.onPress;
  if (onPress) {
    onPress(nativeEvent);
  }
};
obj.touchableHandleActivePressIn = function touchableHandleActivePressIn(nativeEvent) {
  const onPressIn = this.props.onPressIn;
  if (onPressIn) {
    onPressIn(nativeEvent);
  }
};
obj.touchableHandleActivePressOut = function touchableHandleActivePressOut(nativeEvent) {
  const onPressOut = this.props.onPressOut;
  if (onPressOut) {
    onPressOut(nativeEvent);
  }
};
obj.touchableHandleLongPress = function touchableHandleLongPress(nativeEvent) {
  const onLongPress = this.props.onLongPress;
  if (onLongPress) {
    onLongPress(nativeEvent);
  }
};
obj.touchableGetPressRectOffset = function touchableGetPressRectOffset() {
  return this.props.pressRetentionOffset || closure_0;
};
obj.touchableGetHitSlop = function touchableGetHitSlop() {
  return this.props.hitSlop;
};
obj.touchableGetHighlightDelayMS = function touchableGetHighlightDelayMS() {
  return this.props.delayPressIn || 0;
};
obj.touchableGetLongPressDelayMS = function touchableGetLongPressDelayMS() {
  let num = this.props.delayLongPress;
  let num2 = 0;
  if (0 !== num) {
    if (!num) {
      num = 500;
    }
    num2 = num;
  }
  return num2;
};
obj.touchableGetPressOutDelayMS = function touchableGetPressOutDelayMS() {
  return this.props.delayPressOut || 0;
};
const keys = Object.keys(obj);
let closure_10 = keys.map((item) => obj[item]);

export default (self) => {
  let num = 0;
  if (0 < length) {
    do {
      obj = closure_10[num];
      let bindResult = obj;
      if (typeof obj === "function") {
        bindResult = obj.bind(self);
      }
      self[keys[num]] = bindResult;
      num = num + 1;
    } while (num < length);
  }
  self.state = React5();
};