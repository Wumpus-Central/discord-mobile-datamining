// _runtime/00424_Mixin.js
import noopAll from "00019_noop.js";
import measureDefault from "00068_measure.js";
import _objectWithoutPropertiesDefault from "metro/00109__objectWithoutProperties.js";
import get_VersionDefault from "00273_get_Version.js";
import SoundManagerDefault from "00294_SoundManager.js";
import PositionDefault from "00425_Position.js";
import BoundingDimensionsDefault from "00427_BoundingDimensions.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
const f18646 = (arg0) => {

};
const NOT_RESPONDER = "NOT_RESPONDER";
const RESPONDER_INACTIVE_PRESS_IN = "RESPONDER_INACTIVE_PRESS_IN";
const RESPONDER_ACTIVE_PRESS_IN = "RESPONDER_ACTIVE_PRESS_IN";
const RESPONDER_ACTIVE_LONG_PRESS_IN = "RESPONDER_ACTIVE_LONG_PRESS_IN";
const ERROR = "ERROR";
let obj = { NOT_RESPONDER: false, RESPONDER_INACTIVE_PRESS_IN: false, RESPONDER_INACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_PRESS_IN: false, RESPONDER_ACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_LONG_PRESS_IN: false, RESPONDER_ACTIVE_LONG_PRESS_OUT: false, ERROR: false };
obj = {};
const merged = Object.assign(obj);
obj.RESPONDER_ACTIVE_PRESS_OUT = true;
obj.RESPONDER_ACTIVE_PRESS_IN = true;
obj = {};
const merged1 = Object.assign(obj);
obj.RESPONDER_INACTIVE_PRESS_IN = true;
obj.RESPONDER_ACTIVE_PRESS_IN = true;
obj.RESPONDER_ACTIVE_LONG_PRESS_IN = true;
const obj1 = {};
const merged2 = Object.assign(obj);
obj1.RESPONDER_ACTIVE_LONG_PRESS_IN = true;
const DELAY = "DELAY";
const RESPONDER_GRANT = "RESPONDER_GRANT";
const RESPONDER_RELEASE = "RESPONDER_RELEASE";
const RESPONDER_TERMINATED = "RESPONDER_TERMINATED";
const ENTER_PRESS_RECT = "ENTER_PRESS_RECT";
const LEAVE_PRESS_RECT = "LEAVE_PRESS_RECT";
const LONG_PRESS_DETECTED = "LONG_PRESS_DETECTED";
let closure_18 = { NOT_RESPONDER: { DELAY: "ERROR", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "ERROR", RESPONDER_TERMINATED: "ERROR", ENTER_PRESS_RECT: "ERROR", LEAVE_PRESS_RECT: "ERROR", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, error: { DELAY: "NOT_RESPONDER", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "NOT_RESPONDER", LEAVE_PRESS_RECT: "NOT_RESPONDER", LONG_PRESS_DETECTED: "NOT_RESPONDER" } };
let obj2 = {
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
  touchableHandleResponderGrant(persist) {
    const self = this;
    persist.persist();
    if (this.pressOutDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
    self.pressOutDelayTimeout = null;
    self.state.touchable.touchState = NOT_RESPONDER;
    self.state.touchable.responderID = persist.currentTarget;
    self._receiveSignal(RESPONDER_GRANT, persist);
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
      self.touchableDelayTimeout = setTimeout(_handleDelay.bind(self, persist), num);
    } else {
      self._handleDelay(persist);
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
    self.longPressDelayTimeout = setTimeout(_handleLongDelay.bind(self, persist), num4 + num);
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
    const self = this;
    if (this.state.touchable.positionOnActivate) {
      const positionOnActivate = self.state.touchable.positionOnActivate;
      const dimensionsOnActivate = self.state.touchable.dimensionsOnActivate;
      if (self.touchableGetPressRectOffset) {
        let result = self.touchableGetPressRectOffset();
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
        const tmp6 = touchableGetHitSlopResult.left || 0;
      }
      nativeEvent = nativeEvent.nativeEvent;
      if (typeof f18646 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      ({ touches, changedTouches } = nativeEvent);
      let tmp12 = touches;
      if (touches) {
        tmp12 = touches.length > 0;
      }
      let tmp13 = changedTouches;
      if (changedTouches) {
        tmp13 = changedTouches.length > 0;
      }
      if (!tmp12) {
        if (tmp13) {
          let first = changedTouches[0];
        }
        let pageX = first;
        if (first) {
          pageX = first.pageX;
        }
        let pageY = first;
        if (first) {
          pageY = first.pageY;
        }
        if (self.pressInLocation) {
          if (self._getDistanceBetweenPoints(pageX, pageY, self.pressInLocation.pageX, self.pressInLocation.pageY) > 10) {
            const result1 = self._cancelLongPressDelayTimeout();
          }
        }
        if (pageX > positionOnActivate.left - tmp5) {
          if (pageY > positionOnActivate.top - tmp4) {
            if (pageX < positionOnActivate.left + dimensionsOnActivate.width + tmp3) {
              if (pageY < positionOnActivate.top + dimensionsOnActivate.height + sum3) {
                self._receiveSignal(ENTER_PRESS_RECT, nativeEvent);
                if (tmp24) {
                  const result2 = self._cancelLongPressDelayTimeout();
                }
                tmp24 = self.state.touchable.touchState === RESPONDER_INACTIVE_PRESS_IN && self.state.touchable.touchState !== RESPONDER_INACTIVE_PRESS_IN;
              }
            }
          }
        }
        const result3 = self._cancelLongPressDelayTimeout();
        self._receiveSignal(LEAVE_PRESS_RECT, nativeEvent);
      }
      if (tmp12) {
        nativeEvent = touches[0];
      }
      first = nativeEvent;
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
        measureDefault.measure(responderID, self._handleQueryLayout);
        obj = measureDefault;
      } else {
        responderID.measure(self._handleQueryLayout);
      }
    }
  },
  _handleQueryLayout(arg0, arg1, arg2, arg3, arg4, arg5) {
    let tmp = arg0;
    if (!arg0) {
      tmp = arg1;
    }
    if (!tmp) {
      tmp = arg2;
    }
    if (!tmp) {
      tmp = arg3;
    }
    if (!tmp) {
      tmp = arg4;
    }
    if (!tmp) {
      tmp = arg5;
    }
    if (tmp) {
      const self = this;
      if (this.state.touchable.positionOnActivate) {
        PositionDefault.release(self.state.touchable.positionOnActivate);
        obj = PositionDefault;
      }
      if (self.state.touchable.dimensionsOnActivate) {
        BoundingDimensionsDefault.release(self.state.touchable.dimensionsOnActivate);
        const obj2 = BoundingDimensionsDefault;
      }
      self.state.touchable.positionOnActivate = PositionDefault.getPooled(arg4, arg5);
      const obj3 = PositionDefault;
      self.state.touchable.dimensionsOnActivate = BoundingDimensionsDefault.getPooled(arg2, arg3);
      const obj4 = BoundingDimensionsDefault;
    }
  },
  _handleDelay(persist) {
    this.touchableDelayTimeout = null;
    this._receiveSignal(DELAY, persist);
  },
  _handleLongDelay(arg0) {
    const self = this;
    this.longPressDelayTimeout = null;
    const touchState = this.state.touchable.touchState;
    let tmp = touchState !== RESPONDER_ACTIVE_PRESS_IN;
    if (tmp) {
      tmp = touchState !== RESPONDER_ACTIVE_LONG_PRESS_IN;
    }
    if (!tmp) {
      self._receiveSignal(LONG_PRESS_DETECTED, arg0);
    }
  },
  _receiveSignal(arg0, nativeEvent) {
    const self = this;
    const touchState = this.state.touchable.touchState;
    let tmp = dependencyMap[touchState];
    if (tmp) {
      tmp = dependencyMap[touchState][arg0];
    }
    if (this.state.touchable.responderID) {
      if (tmp) {
        if (tmp === ERROR) {
          const _HermesInternal2 = HermesInternal;
          let str9 = "<<host component>>`";
          if ("Touchable cannot transition from `" + touchState + "` to `" + arg0 + "` for responder `" + typeof self.state.touchable.responderID === "number") {
            str9 = self.state.touchable.responderID;
          }
          error = new Error(str9);
          throw error;
        } else if (touchState !== tmp) {
          const result = self._performSideEffectsForTransition(touchState, tmp, arg0, nativeEvent);
          self.state.touchable.touchState = tmp;
        }
      } else {
        const _HermesInternal = HermesInternal;
        let str4 = "host component`";
        if ("Unrecognized signal `" + arg0 + "` or state `" + touchState + "` for Touchable responder `" + typeof self.state.touchable.responderID === "number") {
          str4 = self.state.touchable.responderID;
        }
        const error1 = new Error(str4);
        throw error1;
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
    let tmp = touchState === RESPONDER_ACTIVE_PRESS_IN;
    if (!tmp) {
      tmp = touchState === RESPONDER_ACTIVE_LONG_PRESS_IN;
    }
    return tmp;
  },
  _savePressInLocation(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if (typeof f18646 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    ({ touches, changedTouches } = nativeEvent);
    let tmp = touches;
    if (touches) {
      tmp = touches.length > 0;
    }
    let tmp2 = changedTouches;
    if (changedTouches) {
      tmp2 = changedTouches.length > 0;
    }
    if (!tmp) {
      if (tmp2) {
        let first = changedTouches[0];
      }
      let pageX = first;
      if (first) {
        pageX = first.pageX;
      }
      let pageY = first;
      if (first) {
        pageY = first.pageY;
      }
      let locationX = first;
      if (first) {
        locationX = first.locationX;
      }
      let locationY = first;
      if (first) {
        locationY = first.locationY;
      }
      const self = this;
      obj = { pageX: null, pageY: null, locationX: null, locationY: null };
      obj[0] = pageX;
      obj[1] = pageY;
      obj[2] = locationX;
      obj[3] = locationY;
      this.pressInLocation = obj;
    }
    if (tmp) {
      nativeEvent = touches[0];
    }
    first = nativeEvent;
  },
  _getDistanceBetweenPoints(pageX, pageY, pageX2, pageY2) {
    const diff = pageX - pageX2;
    const diff1 = pageY - pageY2;
    return Math.sqrt(diff * diff + diff1 * diff1);
  },
  _performSideEffectsForTransition(touchState, touchState, arg2, nativeEvent) {
    const self = this;
    const _isHighlightResult = this._isHighlight(touchState);
    let _isHighlightResult1 = this._isHighlight(touchState);
    let tmp3 = arg2 === RESPONDER_TERMINATED;
    if (!tmp3) {
      tmp3 = arg2 === RESPONDER_RELEASE;
    }
    if (tmp3) {
      const result = self._cancelLongPressDelayTimeout();
    }
    let tmp6 = touchState === NOT_RESPONDER;
    if (tmp6) {
      tmp6 = touchState === RESPONDER_INACTIVE_PRESS_IN;
    }
    if (!tmp6) {
      let tmp9 = !tmp8;
      if (!obj[touchState]) {
        tmp9 = obj[touchState];
      }
      tmp6 = tmp9;
    }
    if (tmp6) {
      const result1 = self._remeasureMetricsOnActivation();
    }
    let touchableHandleLongPress = obj[touchState];
    if (touchableHandleLongPress) {
      touchableHandleLongPress = arg2 === LONG_PRESS_DETECTED;
    }
    if (touchableHandleLongPress) {
      touchableHandleLongPress = self.touchableHandleLongPress;
    }
    if (touchableHandleLongPress) {
      const result2 = self.touchableHandleLongPress(nativeEvent);
    }
    if (_isHighlightResult1) {
      if (!_isHighlightResult) {
        self._startHighlight(nativeEvent);
      }
      if (obj[touchState]) {
        if (arg2 === RESPONDER_RELEASE) {
          let tmp20 = obj1[touchState];
          if (tmp20) {
            const onLongPress = self.props.onLongPress;
            let tmp19 = !onLongPress;
            if (onLongPress) {
              tmp19 = !self.touchableLongPressCancelsPress();
            }
            tmp20 = tmp19;
          }
          let touchableHandlePress = !tmp21;
          if (obj1[touchState]) {
            touchableHandlePress = tmp20;
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
              obj = SoundManagerDefault;
              obj.playTouchSound();
            }
            self.touchableHandlePress(nativeEvent);
          }
          const tmp31 = obj1;
        }
      }
      if (self.touchableDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.touchableDelayTimeout);
      }
      self.touchableDelayTimeout = null;
    }
    let tmp15 = !_isHighlightResult1;
    if (!_isHighlightResult1) {
      tmp15 = _isHighlightResult;
    }
    if (tmp15) {
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
  _endHighlight(closure_0) {
    let self = this;
    self = this;
    if (this.touchableHandleActivePressOut) {
      if (self.touchableGetPressOutDelayMS) {
        if (self.touchableGetPressOutDelayMS()) {
          const _setTimeout = setTimeout;
          self.pressOutDelayTimeout = setTimeout(() => {
            const result = self.touchableHandleActivePressOut(closure_0);
          }, self.touchableGetPressOutDelayMS());
        }
      }
      let result = self.touchableHandleActivePressOut(closure_0);
    }
  },
  withoutDefaultFocusAndBlur: {}
};
({ touchableHandleFocus, touchableHandleBlur } = obj2);
obj2.withoutDefaultFocusAndBlur = _objectWithoutPropertiesDefault(obj2, ["touchableHandleFocus", "touchableHandleBlur"]);

export default {
  Mixin: obj2,
  renderDebugView(arg0) {
    ({ color, hitSlop } = arg0);
    return null;
  }
};