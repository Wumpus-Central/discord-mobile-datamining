// _runtime/metro/00292__.js
import _modDef38 from "00038__.js";
import _modDef68 from "00068__.js";
import _modDef293 from "00293__.js";
import SoundManagerDefault from "../00294_SoundManager.js";
import normalizeRect from "../00297_normalizeRect.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let hasOwnProperty;

let closure_5 = Object.freeze({
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
  ERROR: {
    DELAY: "NOT_RESPONDER",
    RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN",
    RESPONDER_RELEASE: "NOT_RESPONDER",
    RESPONDER_TERMINATED: "NOT_RESPONDER",
    ENTER_PRESS_RECT: "NOT_RESPONDER",
    LEAVE_PRESS_RECT: "NOT_RESPONDER",
    LONG_PRESS_DETECTED: "NOT_RESPONDER",
  },
});
function isActiveSignal(arg0) {}
function isActivationSignal(arg0) {}
function isPressInSignal(arg0) {}
let c9 = 30;
let c10 = 20;
let c11 = 20;
let c12 = 20;
let c13 = 10;
class Pressability {
  constructor(arg0) {
    const self = this;
    let tmp = _classCallCheck(this, Pressability);
    this._eventHandlers = null;
    this._hoverInDelayTimeout = null;
    this._hoverOutDelayTimeout = null;
    this._isHovered = false;
    this._longPressDelayTimeout = null;
    this._pressDelayTimeout = null;
    this._pressOutDelayTimeout = null;
    this._responderID = null;
    this._responderRegion = null;
    this._touchState = "NOT_RESPONDER";
    this._measureCallback = (arg0, arg1, arg2, arg3, left, top) => {
      const tmp = arg0 || arg1 || arg2 || arg3 || left || top;
      if (tmp) {
        const rect = { bottom: top + arg3, left, right: left + arg2, top };
        self._responderRegion = rect;
      }
    };
    this.configure(arg0);
  }
}
const entry = {
  key: "configure",
  value: function configure(_config) {
    this._config = _config;
  },
};
const items = [
  entry,
  {
    key: "reset",
    value: function reset() {
      const result = this._cancelHoverInDelayTimeout();
      const result1 = this._cancelHoverOutDelayTimeout();
      const result2 = this._cancelLongPressDelayTimeout();
      const result3 = this._cancelPressDelayTimeout();
      const result4 = this._cancelPressOutDelayTimeout();
      this._config = Object.freeze({});
    },
  },
  {
    key: "getEventHandlers",
    value: function getEventHandlers() {
      const self = this;
      if (null == this._eventHandlers) {
        self._eventHandlers = self._createEventHandlers();
      }
      return self._eventHandlers;
    },
  },
  {
    key: "_createEventHandlers",
    value: function _createEventHandlers() {
      const self = this;
      let obj = {
        onBlur(arg0) {
          const onBlur = self._config.onBlur;
          if (null != onBlur) {
            onBlur(arg0);
          }
        },
        onFocus(arg0) {
          const onFocus = self._config.onFocus;
          if (null != onFocus) {
            onFocus(arg0);
          }
        },
      };
      let obj2 = {
        onStartShouldSetResponder() {
          return !self._config.disabled;
        },
        onResponderGrant(persist) {
          let closure_0 = persist;
          persist.persist();
          const result = self._cancelPressOutDelayTimeout();
          self._responderID = persist.currentTarget;
          self._touchState = "NOT_RESPONDER";
          self._receiveSignal("RESPONDER_GRANT", persist);
          let num = self._config.delayPressIn;
          const _Math = Math;
          if (num == null) {
            num = 0;
          }
          const maxResult = max(0, num);
          if (maxResult > 0) {
            const _setTimeout = setTimeout;
            self._pressDelayTimeout = setTimeout(() => {
              self._receiveSignal("DELAY", persist);
            }, maxResult);
          } else {
            self._receiveSignal("DELAY", persist);
          }
          let delayLongPress = self._config.delayLongPress;
          const _Math2 = Math;
          const max2 = Math.max;
          if (delayLongPress == null) {
            delayLongPress = 500 - maxResult;
          }
          self._longPressDelayTimeout = setTimeout(() => {
            self._handleLongPress(persist);
          }, max2(10, delayLongPress) + maxResult);
          return true === self._config.blockNativeResponder;
        },
        onResponderMove(nativeEvent) {
          let changedTouches;
          let touches;
          const onPressMove = self._config.onPressMove;
          if (null != onPressMove) {
            onPressMove(nativeEvent);
          }
          const _responderRegion = self._responderRegion;
          if (null != _responderRegion) {
            if (typeof getTouchFromPressEvent === "function") {
              ({ changedTouches, touches } = nativeEvent.nativeEvent);
              if (null != touches) {
                if (touches.length > 0) {
                  nativeEvent = touches[0];
                }
                if (null == nativeEvent) {
                  const result = self._cancelLongPressDelayTimeout();
                  self._receiveSignal("LEAVE_PRESS_RECT", nativeEvent);
                } else {
                  if (null != self._touchActivatePosition) {
                    const _Math = Math;
                    if (
                      Math.hypot(
                        self._touchActivatePosition.pageX - nativeEvent.pageX,
                        self._touchActivatePosition.pageY - nativeEvent.pageY,
                      ) > c13
                    ) {
                      const result1 = self._cancelLongPressDelayTimeout();
                    }
                  }
                  if (self._isTouchWithinResponderRegion(nativeEvent, _responderRegion)) {
                    self._receiveSignal("ENTER_PRESS_RECT", nativeEvent);
                  } else {
                    const result2 = self._cancelLongPressDelayTimeout();
                    self._receiveSignal("LEAVE_PRESS_RECT", nativeEvent);
                  }
                }
              }
              if (null != changedTouches) {
                if (changedTouches.length > 0) {
                  nativeEvent = changedTouches[0];
                }
              }
              nativeEvent = nativeEvent.nativeEvent;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        },
        onResponderRelease(arg0) {
          self._receiveSignal("RESPONDER_RELEASE", arg0);
        },
        onResponderTerminate(arg0) {
          self._receiveSignal("RESPONDER_TERMINATED", arg0);
        },
        onResponderTerminationRequest() {
          let flag = self._config.cancelable;
          if (flag == null) {
            flag = true;
          }
          return flag;
        },
        onClick(nativeEvent) {
          let hasOwnPropertyResult;
          if (nativeEvent != null) {
            nativeEvent = nativeEvent.nativeEvent;
            if (nativeEvent != null) {
              hasOwnProperty = nativeEvent.hasOwnProperty;
              if (hasOwnProperty != null) {
                hasOwnPropertyResult = hasOwnProperty("pointerType");
              }
            }
          }
          if (!hasOwnPropertyResult) {
            let currentTarget;
            if (nativeEvent != null) {
              currentTarget = nativeEvent.currentTarget;
            }
            let target;
            if (nativeEvent != null) {
              target = nativeEvent.target;
            }
            if (currentTarget === target) {
              const onPress = self._config.onPress;
              const tmp7 = null != onPress && true !== tmp6;
              if (tmp7) {
                onPress(nativeEvent);
              }
            } else if (nativeEvent != null) {
              nativeEvent.stopPropagation();
            }
          }
        },
      };
      let obj3 = self(27);
      if (obj3.shouldPressibilityUseW3CPointerEventsForHover()) {
        const obj4 = { onPointerEnter: "Array", onPointerLeave: "Set" };
        const _config = this._config;
        const onHoverIn = _config.onHoverIn;
        const onHoverOut = _config.onHoverOut;
        let tmp7 = null;
        if (null != onHoverIn) {
          obj4.onPointerEnter = (persist) => {
            let clientX;
            let clientY;
            let obj2;
            self._isHovered = true;
            const result = self._cancelHoverOutDelayTimeout();
            if (null != onHoverIn) {
              let num = self._config.delayHoverIn;
              const _Math = Math;
              if (num == null) {
                num = 0;
              }
              const maxResult = max(0, num);
              if (maxResult > 0) {
                persist.persist();
                const _setTimeout = setTimeout;
                self._hoverInDelayTimeout = setTimeout(() => {
                  let clientX;
                  let clientY;
                  ({ clientX, clientY } = persist.nativeEvent);
                  const obj = {
                    nativeEvent: { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp },
                  };
                  const merged = Object.assign(persist);
                  onHoverIn(obj);
                }, maxResult);
              } else {
                ({ clientX, clientY } = persist.nativeEvent);
                let obj = { nativeEvent: obj2 };
                let merged = Object.assign(persist);
                obj2 = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                tmp3(obj);
              }
            }
          };
        }
        if (null != onHoverOut) {
          obj4.onPointerLeave = (persist) => {
            let clientX;
            let clientY;
            let obj3;
            if (self._isHovered) {
              self._isHovered = false;
              const result = self._cancelHoverInDelayTimeout();
              if (null != persist) {
                let num = self._config.delayHoverOut;
                const _Math = Math;
                if (num == null) {
                  num = 0;
                }
                const maxResult = max(0, num);
                if (maxResult > 0) {
                  persist.persist();
                  const _setTimeout = setTimeout;
                  self._hoverOutDelayTimeout = setTimeout(() => {
                    let clientX;
                    let clientY;
                    ({ clientX, clientY } = persist.nativeEvent);
                    const obj = {
                      nativeEvent: { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp },
                    };
                    const merged = Object.assign(persist);
                    onHoverOut(obj);
                  }, maxResult);
                } else {
                  ({ clientX, clientY } = persist.nativeEvent);
                  const obj2 = { nativeEvent: obj3 };
                  let merged = Object.assign(persist);
                  obj3 = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                  tmp2(obj2);
                }
              }
            }
          };
        }
        const obj5 = {};
        let merged = Object.assign(obj);
        const merged1 = Object.assign(obj2);
        const merged2 = Object.assign(obj4);
        return obj5;
      } else {
        const obj6 = {};
        const tmp2 = obj;
        const merged3 = Object.assign(obj);
        const merged4 = Object.assign(obj2);
        return obj6;
      }
    },
  },
  {
    key: "_receiveSignal",
    value: function _receiveSignal(arg0, nativeEvent) {
      let closure_0 = arg0;
      let closure_1 = nativeEvent;
      if (null != nativeEvent.nativeEvent.timestamp) {
        const obj = _modDef293;
        obj.emitEvent(() => ({ signal, nativeTimestamp: nativeEvent.nativeEvent.timestamp }));
      }
      const self = this;
      const _touchState = this._touchState;
      const tmp6 = null == self._responderID && "RESPONDER_RELEASE" === arg0;
      if (!tmp6) {
        let tmp10 = null != tmp5;
        const tmp9 = _modDef38;
        if (tmp10) {
          tmp10 = "ERROR" !== tmp5;
        }
        let str3 = "<<host component>>";
        if (typeof self._responderID === "number") {
          str3 = self._responderID;
        }
        tmp9(tmp10, "Pressability: Invalid signal `%s` for state `%s` on responder: %s", arg0, _touchState, str3);
        if (_touchState !== tmp5) {
          const result = self._performTransitionSideEffects(_touchState, tmp5, arg0, nativeEvent);
          self._touchState = tmp5;
        }
      }
    },
  },
  {
    key: "_performTransitionSideEffects",
    value: function _performTransitionSideEffects(_touchState, arg1, arg2, nativeEvent) {
      const self = this;
      const tmp = "RESPONDER_TERMINATED" === arg2 || "RESPONDER_RELEASE" === arg2;
      if (tmp) {
        self._touchActivatePosition = null;
        const result = self._cancelLongPressDelayTimeout();
      }
      let tmp4 = "NOT_RESPONDER" === _touchState && "RESPONDER_INACTIVE_PRESS_IN" === arg1;
      if (typeof isActivationSignal === "function") {
        let tmp7 = !("RESPONDER_ACTIVE_PRESS_OUT" === _touchState || "RESPONDER_ACTIVE_PRESS_IN" === _touchState);
        const tmp6 = "RESPONDER_ACTIVE_PRESS_OUT" === _touchState || "RESPONDER_ACTIVE_PRESS_IN" === _touchState;
        if (tmp7) {
          if (typeof tmp5 === "function") {
            tmp7 = "RESPONDER_ACTIVE_PRESS_OUT" === arg1 || "RESPONDER_ACTIVE_PRESS_IN" === arg1;
            const tmp8 = "RESPONDER_ACTIVE_PRESS_OUT" === arg1 || "RESPONDER_ACTIVE_PRESS_IN" === arg1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (!tmp4) {
          tmp4 = tmp7;
        }
        if (tmp4) {
          const result1 = self._measureResponderRegion();
        }
        if (typeof isPressInSignal === "function") {
          let tmp11 = "RESPONDER_INACTIVE_PRESS_IN" === _touchState;
          const tmp12 =
            tmp11 || "RESPONDER_ACTIVE_PRESS_IN" === _touchState || "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
          if (tmp12) {
            if ("LONG_PRESS_DETECTED" === arg2) {
              const onLongPress = self._config.onLongPress;
              if (null != onLongPress) {
                onLongPress(nativeEvent);
              }
            }
          }
          if (typeof isActiveSignal === "function") {
            if (typeof tmp16 === "function") {
              let tmp19 = "RESPONDER_ACTIVE_PRESS_IN" === arg1 || "RESPONDER_ACTIVE_LONG_PRESS_IN" === arg1;
              if (!(tmp17 || "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState)) {
                if (tmp19) {
                  self._activate(nativeEvent);
                }
                if (typeof tmp10 === "function") {
                  if (!tmp11) {
                    tmp11 = tmp17;
                  }
                  if (!tmp11) {
                    tmp11 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
                  }
                  if (tmp11) {
                    if ("RESPONDER_RELEASE" === arg2) {
                      if (!tmp19) {
                        tmp19 = tmp18;
                      }
                      if (!tmp19) {
                        self._activate(nativeEvent);
                        self._deactivate(nativeEvent);
                      }
                      const _config = self._config;
                      const onPress = _config.onPress;
                      if (null != onPress) {
                        const tmp27 = null != _config.onLongPress && "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
                        if (!tmp27) {
                          if (true !== tmp25) {
                            const obj = SoundManagerDefault;
                            obj.playTouchSound();
                          }
                          onPress(nativeEvent);
                        }
                      }
                    }
                  }
                  const result2 = self._cancelPressDelayTimeout();
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const tmp21 = (tmp17 || "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState) && !tmp19;
              if (tmp21) {
                self._deactivate(nativeEvent);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
  },
  {
    key: "_activate",
    value: function _activate(nativeEvent) {
      let changedTouches;
      let touches;
      const self = this;
      const onPressIn = this._config.onPressIn;
      if (typeof getTouchFromPressEvent === "function") {
        ({ changedTouches, touches } = nativeEvent.nativeEvent);
        if (null != touches) {
          if (touches.length > 0) {
            nativeEvent = touches[0];
          }
          const obj = { pageX: null, pageY: null };
          ({ pageX: obj.pageX, pageY: obj.pageY } = nativeEvent);
          self._touchActivatePosition = obj;
          const _Date = Date;
          self._touchActivateTime = Date.now();
          if (null != onPressIn) {
            onPressIn(nativeEvent);
          }
        }
        if (null != changedTouches) {
          if (changedTouches.length > 0) {
            nativeEvent = changedTouches[0];
          }
        }
        nativeEvent = nativeEvent.nativeEvent;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
  },
  {
    key: "_deactivate",
    value: function _deactivate(persist) {
      const self = this;
      let closure_0 = persist;
      const onPressOut = this._config.onPressOut;
      if (null != onPressOut) {
        let num = self._config.minPressDuration;
        const _Math3 = Math;
        const max3 = Math.max;
        if (num == null) {
          num = 130;
        }
        const _Date = Date;
        let num3 = self._touchActivateTime;
        const max3Result = max3(0, num);
        const timestamp = Date.now();
        if (num3 == null) {
          num3 = 0;
        }
        let num4 = self._config.delayPressOut;
        const _Math = Math;
        const diff = max3Result - (timestamp - num3);
        const _Math2 = Math;
        const max2 = Math.max;
        if (num4 == null) {
          num4 = 0;
        }
        const maxResult = max(diff, max2(0, num4));
        if (maxResult > 0) {
          persist.persist();
          const _setTimeout = setTimeout;
          self._pressOutDelayTimeout = setTimeout(() => {
            onPressOut(persist);
          }, maxResult);
        } else {
          onPressOut(persist);
        }
      }
      self._touchActivateTime = null;
    },
  },
  {
    key: "_measureResponderRegion",
    value: function _measureResponderRegion() {
      const self = this;
      if (null != this._responderID) {
        if (typeof self._responderID === "number") {
          const obj = _modDef68;
          obj.measure(self._responderID, self._measureCallback);
        } else {
          const _responderID = self._responderID;
          _responderID.measureAsyncOnUI(self._measureCallback);
        }
      }
    },
  },
  {
    key: "_isTouchWithinResponderRegion",
    value: function _isTouchWithinResponderRegion(nativeEvent, _responderRegion) {
      let bottom;
      let left;
      let right;
      let top;
      const obj = normalizeRect;
      const rect = obj.normalizeRect(this._config.hitSlop);
      const obj2 = normalizeRect;
      const rect2 = obj2.normalizeRect(this._config.pressRectOffset);
      ({ bottom, left, right, top } = _responderRegion);
      let tmp = top;
      let tmp2 = right;
      let tmp3 = left;
      let tmp4 = bottom;
      if (null != rect) {
        let sum = bottom;
        if (null != rect.bottom) {
          sum = bottom + rect.bottom;
        }
        let diff = left;
        if (null != rect.left) {
          diff = left - rect.left;
        }
        let sum1 = right;
        if (null != rect.right) {
          sum1 = right + rect.right;
        }
        let diff1 = top;
        if (null != rect.top) {
          diff1 = top - rect.top;
        }
        tmp = diff1;
        tmp2 = sum1;
        tmp3 = diff;
        tmp4 = sum;
      }
      let bottom1;
      if (rect2 != null) {
        bottom1 = rect2.bottom;
      }
      if (bottom1 == null) {
        bottom1 = c9;
      }
      let left1;
      const sum2 = tmp4 + bottom1;
      if (rect2 != null) {
        left1 = rect2.left;
      }
      if (left1 == null) {
        left1 = c10;
      }
      let right1;
      const diff2 = tmp3 - left1;
      if (rect2 != null) {
        right1 = rect2.right;
      }
      if (right1 == null) {
        right1 = c11;
      }
      let top1;
      const sum3 = tmp2 + right1;
      if (rect2 != null) {
        top1 = rect2.top;
      }
      if (top1 == null) {
        top1 = c12;
      }
      let tmp17 = nativeEvent.pageX > diff2;
      const diff3 = tmp - top1;
      if (tmp17) {
        tmp17 = nativeEvent.pageX < sum3;
      }
      if (tmp17) {
        tmp17 = nativeEvent.pageY > diff3;
      }
      if (tmp17) {
        tmp17 = nativeEvent.pageY < sum2;
      }
      return tmp17;
    },
  },
  {
    key: "_handleLongPress",
    value: function _handleLongPress(persist) {
      const self = this;
      const tmp =
        "RESPONDER_ACTIVE_PRESS_IN" !== this._touchState && "RESPONDER_ACTIVE_LONG_PRESS_IN" !== self._touchState;
      if (!tmp) {
        self._receiveSignal("LONG_PRESS_DETECTED", persist);
      }
    },
  },
  {
    key: "_cancelHoverInDelayTimeout",
    value: function _cancelHoverInDelayTimeout() {
      const self = this;
      if (null != this._hoverInDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverInDelayTimeout);
        self._hoverInDelayTimeout = null;
      }
    },
  },
  {
    key: "_cancelHoverOutDelayTimeout",
    value: function _cancelHoverOutDelayTimeout() {
      const self = this;
      if (null != this._hoverOutDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverOutDelayTimeout);
        self._hoverOutDelayTimeout = null;
      }
    },
  },
  {
    key: "_cancelLongPressDelayTimeout",
    value: function _cancelLongPressDelayTimeout() {
      const self = this;
      if (null != this._longPressDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._longPressDelayTimeout);
        self._longPressDelayTimeout = null;
      }
    },
  },
  {
    key: "_cancelPressDelayTimeout",
    value: function _cancelPressDelayTimeout() {
      const self = this;
      if (null != this._pressDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressDelayTimeout);
        self._pressDelayTimeout = null;
      }
    },
  },
  {
    key: "_cancelPressOutDelayTimeout",
    value: function _cancelPressOutDelayTimeout() {
      const self = this;
      if (null != this._pressOutDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressOutDelayTimeout);
        self._pressOutDelayTimeout = null;
      }
    },
  },
];
const entry1 = {
  key: "setLongPressDeactivationDistance",
  value: function setLongPressDeactivationDistance(arg0) {
    c13 = arg0;
  },
};
const items1 = [entry1];
function getTouchFromPressEvent(arg0) {}

export default _createClass(Pressability, items, items1);
