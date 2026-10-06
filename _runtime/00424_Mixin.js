// _runtime/00424_Mixin.js
import Fragment from "react/00021_Fragment.js";
import _modDef68 from "metro/00068__.js";
import get_VersionDefault from "00273_get_Version.js";
import SoundManagerDefault from "00294_SoundManager.js";
import PositionDefault from "00425_Position.js";
import BoundingDimensionsDefault from "00427_BoundingDimensions.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";

let obj5;
let touchableHandleBlur;
let touchableHandleFocus;
const jsx = Fragment.jsx;
const f19673 = (arg0) => {};
const NOT_RESPONDER = "NOT_RESPONDER";
const RESPONDER_INACTIVE_PRESS_IN = "RESPONDER_INACTIVE_PRESS_IN";
const RESPONDER_ACTIVE_PRESS_IN = "RESPONDER_ACTIVE_PRESS_IN";
const RESPONDER_ACTIVE_LONG_PRESS_IN = "RESPONDER_ACTIVE_LONG_PRESS_IN";
const ERROR = "ERROR";
let obj = {
  NOT_RESPONDER: false,
  RESPONDER_INACTIVE_PRESS_IN: false,
  RESPONDER_INACTIVE_PRESS_OUT: false,
  RESPONDER_ACTIVE_PRESS_IN: false,
  RESPONDER_ACTIVE_PRESS_OUT: false,
  RESPONDER_ACTIVE_LONG_PRESS_IN: false,
  RESPONDER_ACTIVE_LONG_PRESS_OUT: false,
  ERROR: false,
};
let obj2 = { RESPONDER_ACTIVE_PRESS_OUT: true, RESPONDER_ACTIVE_PRESS_IN: true };
const merged = Object.assign(obj);
let obj3 = { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true };
const merged1 = Object.assign(obj);
let obj4 = { RESPONDER_ACTIVE_LONG_PRESS_IN: true };
const merged2 = Object.assign(obj);
const DELAY = "DELAY";
const RESPONDER_GRANT = "RESPONDER_GRANT";
const RESPONDER_RELEASE = "RESPONDER_RELEASE";
const RESPONDER_TERMINATED = "RESPONDER_TERMINATED";
const ENTER_PRESS_RECT = "ENTER_PRESS_RECT";
const LEAVE_PRESS_RECT = "LEAVE_PRESS_RECT";
const LONG_PRESS_DETECTED = "LONG_PRESS_DETECTED";
let closure_18 = {
  NOT_RESPONDER: {
    DELAY: "ERROR",
    RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN",
    RESPONDER_RELEASE: "ERROR",
    RESPONDER_TERMINATED: "ERROR",
    ENTER_PRESS_RECT: "ERROR",
    LEAVE_PRESS_RECT: "ERROR",
    LONG_PRESS_DETECTED: "ERROR",
  },
  RESPONDER_INACTIVE_PRESS_IN: {
    DELAY: "RESPONDER_ACTIVE_PRESS_IN",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT",
    LONG_PRESS_DETECTED: "ERROR",
  },
  RESPONDER_INACTIVE_PRESS_OUT: {
    DELAY: "RESPONDER_ACTIVE_PRESS_OUT",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT",
    LONG_PRESS_DETECTED: "ERROR",
  },
  RESPONDER_ACTIVE_PRESS_IN: {
    DELAY: "ERROR",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT",
    LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN",
  },
  RESPONDER_ACTIVE_PRESS_OUT: {
    DELAY: "ERROR",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT",
    LONG_PRESS_DETECTED: "ERROR",
  },
  RESPONDER_ACTIVE_LONG_PRESS_IN: {
    DELAY: "ERROR",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT",
    LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN",
  },
  RESPONDER_ACTIVE_LONG_PRESS_OUT: {
    DELAY: "ERROR",
    RESPONDER_GRANT: "ERROR",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN",
    LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT",
    LONG_PRESS_DETECTED: "ERROR",
  },
  error: {
    DELAY: "NOT_RESPONDER",
    RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "NOT_RESPONDER",
    LEAVE_PRESS_RECT: "NOT_RESPONDER",
    LONG_PRESS_DETECTED: "NOT_RESPONDER",
  },
};
obj5 = {
  componentDidMount() {
    const isTV = get_VersionDefault.isTV;
  },
  componentWillUnmount() {
    const self = this;
    if (this.touchableDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.touchableDelayTimeout);
    }
    if (self.longPressDelayTimeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    if (self.pressOutDelayTimeout) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
  },
  touchableGetInitialState() {
    return { touchable: { touchState: "Array", responderID: 0 } };
  },
  touchableHandleResponderTerminationRequest() {
    return !this.props.rejectResponderTermination;
  },
  touchableHandleStartShouldSetResponder() {
    return !this.props.disabled;
  },
  touchableLongPressCancelsPress() {
    return true;
  },
  touchableHandleResponderGrant(currentTarget) {
    const self = this;
    currentTarget = currentTarget.currentTarget;
    currentTarget.persist();
    if (this.pressOutDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
    self.pressOutDelayTimeout = null;
    self.state.touchable.touchState = NOT_RESPONDER;
    self.state.touchable.responderID = currentTarget;
    self._receiveSignal(RESPONDER_GRANT, currentTarget);
    let num = 130;
    let num2 = 130;
    if (undefined !== self.touchableGetHighlightDelayMS) {
      const _Math = Math;
      num2 = Math.max(self.touchableGetHighlightDelayMS(), 0);
    }
    if (!isNaN(num2)) {
      num = num2;
    }
    if (0 !== num) {
      const _setTimeout = setTimeout;
      const _handleDelay = self._handleDelay;
      self.touchableDelayTimeout = setTimeout(_handleDelay.bind(self, currentTarget), num);
    } else {
      self._handleDelay(currentTarget);
    }
    let num4 = 370;
    let num5 = 370;
    if (undefined !== self.touchableGetLongPressDelayMS) {
      const _Math2 = Math;
      num5 = Math.max(self.touchableGetLongPressDelayMS(), 10);
    }
    if (!isNaN(num5)) {
      num4 = num5;
    }
    const _handleLongDelay = self._handleLongDelay;
    self.longPressDelayTimeout = setTimeout(_handleLongDelay.bind(self, currentTarget), num4 + num);
  },
  touchableHandleResponderRelease(arg0) {
    this.pressInLocation = null;
    this._receiveSignal(RESPONDER_RELEASE, arg0);
  },
  touchableHandleResponderTerminate(arg0) {
    this.pressInLocation = null;
    this._receiveSignal(RESPONDER_TERMINATED, arg0);
  },
  touchableHandleResponderMove(nativeEvent) {
    let bottom;
    let changedTouches;
    let left;
    let right;
    let top;
    let touches;
    const self = this;
    if (this.state.touchable.positionOnActivate) {
      let result;
      const positionOnActivate = self.state.touchable.positionOnActivate;
      const dimensionsOnActivate = self.state.touchable.dimensionsOnActivate;
      if (self.touchableGetPressRectOffset) {
        result = self.touchableGetPressRectOffset();
      } else {
        result = { left: 20, right: 20, top: 20, bottom: 20 };
      }
      ({ left, top, right, bottom } = result);
      let touchableGetHitSlopResult = null;
      if (self.touchableGetHitSlop) {
        touchableGetHitSlopResult = self.touchableGetHitSlop();
      }
      let sum3 = bottom;
      let tmp3 = right;
      let tmp4 = top;
      let tmp5 = left;
      if (touchableGetHitSlopResult) {
        let num = touchableGetHitSlopResult.top;
        const sum = left + (touchableGetHitSlopResult.left || 0);
        if (!num) {
          num = 0;
        }
        let num2 = touchableGetHitSlopResult.right;
        const sum1 = top + num;
        if (!num2) {
          num2 = 0;
        }
        let num3 = touchableGetHitSlopResult.bottom;
        const sum2 = right + num2;
        if (!num3) {
          num3 = 0;
        }
        sum3 = bottom + num3;
        tmp3 = sum2;
        tmp4 = sum1;
        tmp5 = sum;
      }
      nativeEvent = nativeEvent.nativeEvent;
      if (typeof f19673 === "function") {
        ({ touches, changedTouches } = nativeEvent);
        const tmp13 = changedTouches && changedTouches.length > 0;
        if (!(touches && touches.length > 0)) {
          let first;
          if (tmp13) {
            first = changedTouches[0];
          }
          if (self.pressInLocation) {
            if (
              self._getDistanceBetweenPoints(
                first && first.pageX,
                first && first.pageY,
                self.pressInLocation.pageX,
                self.pressInLocation.pageY,
              ) > 10
            ) {
              const result1 = self._cancelLongPressDelayTimeout();
            }
          }
          if ((first && first.pageX) > positionOnActivate.left - tmp5) {
            if ((first && first.pageY) > positionOnActivate.top - tmp4) {
              if ((first && first.pageX) < positionOnActivate.left + dimensionsOnActivate.width + tmp3) {
                if ((first && first.pageY) < positionOnActivate.top + dimensionsOnActivate.height + sum3) {
                  const touchState = self.state.touchable.touchState;
                  self._receiveSignal(ENTER_PRESS_RECT, nativeEvent);
                  const tmp26 =
                    self.state.touchable.touchState === RESPONDER_INACTIVE_PRESS_IN &&
                    touchState !== RESPONDER_INACTIVE_PRESS_IN;
                  if (tmp26) {
                    const result2 = self._cancelLongPressDelayTimeout();
                  }
                }
              }
            }
          }
          const result3 = self._cancelLongPressDelayTimeout();
          self._receiveSignal(LEAVE_PRESS_RECT, nativeEvent);
        }
        if (touches && touches.length > 0) {
          nativeEvent = touches[0];
        }
        first = nativeEvent;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
  touchableHandleFocus(arg0) {
    if (this.props.onFocus) {
      const props = tmp.props;
      props.onFocus(arg0);
    }
  },
  touchableHandleBlur(arg0) {
    if (this.props.onBlur) {
      const props = tmp.props;
      props.onBlur(arg0);
    }
  },
  _remeasureMetricsOnActivation() {
    const self = this;
    const responderID = this.state.touchable.responderID;
    if (null != responderID) {
      if (typeof responderID === "number") {
        const obj = _modDef68;
        obj.measure(responderID, self._handleQueryLayout);
      } else {
        responderID.measure(self._handleQueryLayout);
      }
    }
  },
  _handleQueryLayout(arg0, arg1, arg2, arg3, arg4, arg5) {
    const tmp = arg0 || arg1 || arg2 || arg3 || arg4 || arg5;
    if (tmp) {
      const self = this;
      if (this.state.touchable.positionOnActivate) {
        const obj = PositionDefault;
        obj.release(self.state.touchable.positionOnActivate);
      }
      if (self.state.touchable.dimensionsOnActivate) {
        obj2 = BoundingDimensionsDefault;
        obj2.release(self.state.touchable.dimensionsOnActivate);
      }
      const touchable = self.state.touchable;
      obj3 = PositionDefault;
      touchable.positionOnActivate = obj3.getPooled(arg4, arg5);
      const touchable2 = self.state.touchable;
      obj4 = BoundingDimensionsDefault;
      touchable2.dimensionsOnActivate = obj4.getPooled(arg2, arg3);
    }
  },
  _handleDelay(currentTarget) {
    this.touchableDelayTimeout = null;
    this._receiveSignal(DELAY, currentTarget);
  },
  _handleLongDelay(arg0) {
    const self = this;
    this.longPressDelayTimeout = null;
    const touchState = this.state.touchable.touchState;
    const tmp = touchState !== RESPONDER_ACTIVE_PRESS_IN && touchState !== RESPONDER_ACTIVE_LONG_PRESS_IN;
    if (!tmp) {
      self._receiveSignal(LONG_PRESS_DETECTED, arg0);
    }
  },
  _receiveSignal(arg0, nativeEvent) {
    const self = this;
    const touchState = this.state.touchable.touchState;
    let tmp = closure_18[touchState];
    const responderID = this.state.touchable.responderID;
    if (tmp) {
      tmp = closure_18[touchState][arg0];
    }
    if (responderID) {
      if (tmp) {
        if (tmp === ERROR) {
          const _HermesInternal2 = HermesInternal;
          const _Error2 = Error;
          let str9 = "<<host component>>`";
          if (
            "Touchable cannot transition from `" +
              touchState +
              "` to `" +
              arg0 +
              "` for responder `" +
              typeof self.state.touchable.responderID ===
            "number"
          ) {
            str9 = self.state.touchable.responderID;
          }
          const self4 = this;
          const self5 = this;
          const _Error21 = new _Error2(str9);
          throw _Error21;
        } else if (touchState !== tmp) {
          const result = self._performSideEffectsForTransition(touchState, tmp, arg0, nativeEvent);
          self.state.touchable.touchState = tmp;
        }
      } else {
        const _HermesInternal = HermesInternal;
        const _Error = Error;
        let str4 = "host component`";
        if (
          "Unrecognized signal `" +
            arg0 +
            "` or state `" +
            touchState +
            "` for Touchable responder `" +
            typeof self.state.touchable.responderID ===
          "number"
        ) {
          str4 = self.state.touchable.responderID;
        }
        const self2 = this;
        const self3 = this;
        const _Error1 = new _Error(str4);
        throw _Error1;
      }
    }
  },
  _cancelLongPressDelayTimeout() {
    const self = this;
    if (this.longPressDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    self.longPressDelayTimeout = null;
  },
  _isHighlight(touchState) {
    return touchState === RESPONDER_ACTIVE_PRESS_IN || touchState === RESPONDER_ACTIVE_LONG_PRESS_IN;
  },
  _savePressInLocation(nativeEvent) {
    let changedTouches;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let touches;
    nativeEvent = nativeEvent.nativeEvent;
    if (typeof f19673 === "function") {
      ({ touches, changedTouches } = nativeEvent);
      const tmp2 = changedTouches && changedTouches.length > 0;
      if (!(touches && touches.length > 0)) {
        let first;
        if (tmp2) {
          first = changedTouches[0];
        }
        const self = this;
        const obj = { pageX: tmp4, pageY: tmp5, locationX: tmp6, locationY: tmp7 };
        tmp4 = first && first.pageX;
        tmp5 = first && first.pageY;
        tmp6 = first && first.locationX;
        tmp7 = first && first.locationY;
        this.pressInLocation = obj;
      }
      if (touches && touches.length > 0) {
        nativeEvent = touches[0];
      }
      first = nativeEvent;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  _getDistanceBetweenPoints(arg0, arg1, pageX, pageY) {
    const diff = arg0 - pageX;
    const diff1 = arg1 - pageY;
    return Math.sqrt(diff * diff + diff1 * diff1);
  },
  _performSideEffectsForTransition(touchState, touchState2, arg2, nativeEvent) {
    const self = this;
    const _isHighlightResult = this._isHighlight(touchState);
    let _isHighlightResult1 = this._isHighlight(touchState);
    const tmp3 = arg2 === RESPONDER_TERMINATED || arg2 === RESPONDER_RELEASE;
    if (tmp3) {
      const result = self._cancelLongPressDelayTimeout();
    }
    let tmp6 = touchState === NOT_RESPONDER && touchState === RESPONDER_INACTIVE_PRESS_IN;
    if (!tmp6) {
      tmp6 = !obj2[touchState] && obj2[touchState];
    }
    if (tmp6) {
      const result1 = self._remeasureMetricsOnActivation();
    }
    const touchableHandleLongPress = obj3[touchState] && arg2 === LONG_PRESS_DETECTED && self.touchableHandleLongPress;
    if (touchableHandleLongPress) {
      const result2 = self.touchableHandleLongPress(nativeEvent);
    }
    if (_isHighlightResult1) {
      if (!_isHighlightResult) {
        self._startHighlight(nativeEvent);
      }
      if (obj3[touchState]) {
        if (arg2 === RESPONDER_RELEASE) {
          let tmp19 = obj4[touchState];
          if (tmp19) {
            const onLongPress = self.props.onLongPress;
            let tmp18 = !onLongPress;
            if (onLongPress) {
              tmp18 = !self.touchableLongPressCancelsPress();
            }
            tmp19 = tmp18;
          }
          let touchableHandlePress = !tmp20;
          if (obj4[touchState]) {
            touchableHandlePress = tmp19;
          }
          if (touchableHandlePress) {
            touchableHandlePress = self.touchableHandlePress;
          }
          if (touchableHandlePress) {
            if (!_isHighlightResult1) {
              _isHighlightResult1 = _isHighlightResult;
            }
            if (!_isHighlightResult1) {
              self._startHighlight(nativeEvent);
              self._endHighlight(nativeEvent);
            }
            if (!self.props.touchSoundDisabled) {
              const obj = SoundManagerDefault;
              obj.playTouchSound();
            }
            self.touchableHandlePress(nativeEvent);
          }
        }
      }
      if (self.touchableDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.touchableDelayTimeout);
      }
      self.touchableDelayTimeout = null;
    }
    const tmp14 = !_isHighlightResult1 && _isHighlightResult;
    if (tmp14) {
      self._endHighlight(nativeEvent);
    }
  },
  _startHighlight(nativeEvent) {
    const self = this;
    this._savePressInLocation(nativeEvent);
    if (this.touchableHandleActivePressIn) {
      const result = self.touchableHandleActivePressIn(nativeEvent);
    }
  },
  _endHighlight(nativeEvent) {
    const self = this;
    let closure_0 = nativeEvent;
    if (this.touchableHandleActivePressOut) {
      if (self.touchableGetPressOutDelayMS) {
        if (self.touchableGetPressOutDelayMS()) {
          const _setTimeout = setTimeout;
          self.pressOutDelayTimeout = setTimeout(() => {
            const result = self.touchableHandleActivePressOut(nativeEvent);
          }, self.touchableGetPressOutDelayMS());
        }
      }
      let result = self.touchableHandleActivePressOut(nativeEvent);
    }
  },
  withoutDefaultFocusAndBlur: _objectWithoutProperties(obj5, ["touchableHandleFocus", "touchableHandleBlur"]),
};
({ touchableHandleFocus, touchableHandleBlur } = obj5);

export default {
  Mixin: obj5,
  renderDebugView(arg0) {
    let color;
    let hitSlop;
    ({ color, hitSlop } = arg0);
    return null;
  },
};
