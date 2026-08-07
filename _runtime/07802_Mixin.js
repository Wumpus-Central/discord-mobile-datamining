// _runtime/07802_Mixin.js
let c3;
let c4;
let c5;
let closure_1;
let closure_6;
let error;
let obj1;
let closure_0 = { top: 20, left: 20, right: 20, bottom: 30 };
const Mixin = require("get ActivityIndicator").Touchable.Mixin;
({ touchableHandleStartShouldSetResponder: closure_1, touchableHandleResponderTerminationRequest: obj1, touchableHandleResponderGrant: c3, touchableHandleResponderMove: c4, touchableHandleResponderRelease: c5, touchableHandleResponderTerminate: closure_6, touchableGetInitialState: error } = Mixin);
let obj = {};
const merged = Object.assign(Mixin);
obj.touchableHandleStartShouldSetResponder = function touchableHandleStartShouldSetResponder(arg0) {
  const self = this;
  const onStartShouldSetResponder = this.props.onStartShouldSetResponder;
  if (onStartShouldSetResponder) {
    let result = onStartShouldSetResponder(arg0);
  } else {
    const call = closure_1.call;
    result = typeof call === "unknown" ? closure_1(arg0) : call(self, arg0);
    const tmp = closure_1;
  }
  return result;
};
obj.touchableHandleResponderTerminationRequest = function touchableHandleResponderTerminationRequest(arg0) {
  const self = this;
  const onResponderTerminationRequest = this.props.onResponderTerminationRequest;
  if (onResponderTerminationRequest) {
    let result = onResponderTerminationRequest(arg0);
  } else {
    const call = closure_2.call;
    result = typeof call === "unknown" ? closure_2(arg0) : call(self, arg0);
    const tmp = closure_2;
  }
  return result;
};
obj.touchableHandleResponderGrant = function touchableHandleResponderGrant(arg0) {
  const self = this;
  const onResponderGrant = this.props.onResponderGrant;
  if (onResponderGrant) {
    let onResponderGrantResult = onResponderGrant(arg0);
  } else {
    const call = closure_3.call;
    onResponderGrantResult = typeof call === "unknown" ? closure_3(arg0) : call(self, arg0);
    const tmp = closure_3;
  }
  return onResponderGrantResult;
};
obj.touchableHandleResponderMove = function touchableHandleResponderMove(arg0) {
  const self = this;
  const onResponderMove = this.props.onResponderMove;
  if (onResponderMove) {
    let onResponderMoveResult = onResponderMove(arg0);
  } else {
    const call = closure_4.call;
    onResponderMoveResult = typeof call === "unknown" ? closure_4(arg0) : call(self, arg0);
    const tmp = closure_4;
  }
  return onResponderMoveResult;
};
obj.touchableHandleResponderRelease = function touchableHandleResponderRelease(arg0) {
  const self = this;
  const onResponderRelease = this.props.onResponderRelease;
  if (onResponderRelease) {
    let onResponderReleaseResult = onResponderRelease(arg0);
  } else {
    const call = closure_5.call;
    onResponderReleaseResult = typeof call === "unknown" ? closure_5(arg0) : call(self, arg0);
    const tmp = closure_5;
  }
  return onResponderReleaseResult;
};
obj.touchableHandleResponderTerminate = function touchableHandleResponderTerminate(arg0) {
  const self = this;
  const onResponderTerminate = this.props.onResponderTerminate;
  if (onResponderTerminate) {
    let onResponderTerminateResult = onResponderTerminate(arg0);
  } else {
    const call = closure_6.call;
    onResponderTerminateResult = typeof call === "unknown" ? closure_6(arg0) : call(self, arg0);
    const tmp = closure_6;
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
obj.touchableHandleActivePressOut = function touchableHandleActivePressOut(closure_0) {
  const onPressOut = this.props.onPressOut;
  if (onPressOut) {
    onPressOut(closure_0);
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
let closure_10 = keys.map((arg0) => obj[arg0]);

export default (self) => {
  let num = 0;
  if (0 < length) {
    do {
      let tmp = keys;
      let tmp2 = table;
      let obj = table[num];
      let tmp3 = num;
      let bindResult = obj;
      if (typeof obj === "function") {
        bindResult = obj.bind(self);
      }
      self[keys[num]] = bindResult;
      num = num + 1;
      let tmp5 = length;
    } while (num < length);
  }
  self.state = callback();
};