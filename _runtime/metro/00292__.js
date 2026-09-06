// === Module 292: ? ===

// Module 292
import _modDef38 from "module_38" /* 38 */;
import measureDefault from "measure" /* 68 */;
import PressabilityPerformanceEventEmitterDefault from "PressabilityPerformanceEventEmitter" /* 293 */;
import SoundManagerDefault from "SoundManager" /* 294 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const Pressability = arg1;
let closure_5 = Object.freeze({ NOT_RESPONDER: { DELAY: "ERROR", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "ERROR", RESPONDER_TERMINATED: "ERROR", ENTER_PRESS_RECT: "ERROR", LEAVE_PRESS_RECT: "ERROR", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, ERROR: { DELAY: "NOT_RESPONDER", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "NOT_RESPONDER", LEAVE_PRESS_RECT: "NOT_RESPONDER", LONG_PRESS_DETECTED: "NOT_RESPONDER" } });
function isActiveSignal(arg0) {

}
function isActivationSignal(arg0) {

}
function isPressInSignal(arg0) {

}
let c9 = 30;
let c10 = 20;
let c11 = 20;
let c12 = 20;
let global = 10;
class Pressability {
  constructor(arg0) {
    self = this;
    tmp = closure_4(this, Pressability);
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
        tmp = left;
      }
      if (!tmp) {
        tmp = top;
      }
      if (tmp) {
        const rect = { bottom: top + arg3, left, right: left + arg2, top };
        self._responderRegion = rect;
      }
    };
    configureResult = this.configure(global);
    return;
  }
}
const entry = {
  key: "configure",
  value: function configure(_config) {
    this._config = _config;
  }
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
    }
  },
  {
    key: "getEventHandlers",
    value: function getEventHandlers() {
      const self = this;
      if (null == this._eventHandlers) {
        self._eventHandlers = self._createEventHandlers();
      }
      return self._eventHandlers;
    }
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
        }
      };
      obj = {
        onStartShouldSetResponder() {
          return !self._config.disabled;
        },
        onResponderGrant(persist) {
          closure_0 = persist;
          persist.persist();
          const result = self._cancelPressOutDelayTimeout();
          self._responderID = persist.currentTarget;
          self._touchState = "NOT_RESPONDER";
          self._receiveSignal("RESPONDER_GRANT", persist);
          let num = self._config.delayPressIn;
          if (num == null) {
            num = 0;
          }
          const bound = Math.max(0, num);
          if (bound > 0) {
            const _setTimeout = setTimeout;
            self._pressDelayTimeout = setTimeout(() => {
              self._receiveSignal("DELAY", closure_0);
            }, bound);
          } else {
            self._receiveSignal("DELAY", persist);
          }
          let delayLongPress = self._config.delayLongPress;
          if (delayLongPress == null) {
            delayLongPress = 500 - bound;
          }
          self._longPressDelayTimeout = setTimeout(() => {
            self._handleLongPress(closure_0);
          }, Math.max(10, delayLongPress) + bound);
          return true === self._config.blockNativeResponder;
        },
        onResponderMove(nativeEvent) {
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
                    if (Math.hypot(self._touchActivatePosition.pageX - nativeEvent.pageX, self._touchActivatePosition.pageY - nativeEvent.pageY) > global) {
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
              let tmp7 = null != onPress;
              if (tmp7) {
                tmp7 = true !== tmp6;
              }
              if (tmp7) {
                onPress(nativeEvent);
              }
            } else if (nativeEvent != null) {
              nativeEvent.stopPropagation();
            }
          }
        }
      };
      let obj2 = self(27);
      if (obj2.shouldPressibilityUseW3CPointerEventsForHover()) {
        obj = { onPointerEnter: "hash", onPointerLeave: "call" };
        const _config = this._config;
        const onHoverIn = _config.onHoverIn;
        const onHoverOut = _config.onHoverOut;
        if (null != onHoverIn) {
          obj.onPointerEnter = (persist) => {
            self._isHovered = true;
            const result = self._cancelHoverOutDelayTimeout();
            if (null != onHoverIn) {
              let num = self._config.delayHoverIn;
              if (num == null) {
                num = 0;
              }
              const bound = Math.max(0, num);
              if (bound > 0) {
                persist.persist();
                const _setTimeout = setTimeout;
                self._hoverInDelayTimeout = setTimeout(() => {
                  ({ clientX, clientY } = persist.nativeEvent);
                  const obj = {};
                  const merged = Object.assign(persist);
                  obj.nativeEvent = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                  onHoverIn(obj);
                }, bound);
              } else {
                ({ clientX, clientY } = persist.nativeEvent);
                let obj = {};
                let merged = Object.assign(persist);
                obj = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                obj.nativeEvent = obj;
                tmp3(obj);
              }
            }
          };
        }
        if (null != onHoverOut) {
          obj.onPointerLeave = (persist) => {
            let obj = self;
            if (self._isHovered) {
              obj._isHovered = false;
              const result = obj._cancelHoverInDelayTimeout();
              if (null != persist) {
                let num = obj._config.delayHoverOut;
                if (num == null) {
                  num = 0;
                }
                const bound = Math.max(0, num);
                if (bound > 0) {
                  persist.persist();
                  const _setTimeout = setTimeout;
                  obj._hoverOutDelayTimeout = setTimeout(() => {
                    ({ clientX, clientY } = persist.nativeEvent);
                    const obj = {};
                    const merged = Object.assign(persist);
                    obj.nativeEvent = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                    onHoverOut(obj);
                  }, bound);
                } else {
                  ({ clientX, clientY } = persist.nativeEvent);
                  obj = {};
                  let merged = Object.assign(persist);
                  obj = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: persist.timeStamp };
                  obj.nativeEvent = obj;
                  tmp2(obj);
                }
              }
            }
          };
        }
        const obj1 = {};
        let merged = Object.assign(obj);
        const merged1 = Object.assign(obj);
        const merged2 = Object.assign(obj);
        return obj1;
      } else {
        obj2 = {};
        const merged3 = Object.assign(obj);
        const merged4 = Object.assign(obj);
        return obj2;
      }
    }
  },
  {
    key: "_receiveSignal",
    value: function _receiveSignal(signal, nativeEvent) {
      if (null != nativeEvent.nativeEvent.timestamp) {
        PressabilityPerformanceEventEmitterDefault.emitEvent(() => ({ signal, nativeTimestamp: nativeEvent.nativeEvent.timestamp }));
      }
      const self = this;
      const _touchState = this._touchState;
      let tmp6 = null == self._responderID;
      if (tmp6) {
        tmp6 = "RESPONDER_RELEASE" === signal;
      }
      if (!tmp6) {
        let tmp10 = null != tmp5;
        if (tmp10) {
          tmp10 = "ERROR" !== tmp5;
        }
        let str3 = "<<host component>>";
        if (typeof self._responderID === "number") {
          str3 = self._responderID;
        }
        _modDef38(tmp10, "Pressability: Invalid signal `%s` for state `%s` on responder: %s", signal, _touchState, str3);
        if (_touchState !== tmp5) {
          const result = self._performTransitionSideEffects(_touchState, tmp5, signal, nativeEvent);
          self._touchState = tmp5;
        }
      }
    }
  },
  {
    key: "_performTransitionSideEffects",
    value: function _performTransitionSideEffects(_touchState, arg1, signal, nativeEvent) {
      let tmp = "RESPONDER_TERMINATED" === signal;
      if (!tmp) {
        tmp = "RESPONDER_RELEASE" === signal;
      }
      const self = this;
      if (tmp) {
        self._touchActivatePosition = null;
        const result = self._cancelLongPressDelayTimeout();
      }
      let tmp4 = "NOT_RESPONDER" === _touchState;
      if (tmp4) {
        tmp4 = "RESPONDER_INACTIVE_PRESS_IN" === arg1;
      }
      if (typeof isActivationSignal === "function") {
        let tmp6 = "RESPONDER_ACTIVE_PRESS_OUT" === _touchState;
        if (!tmp6) {
          tmp6 = "RESPONDER_ACTIVE_PRESS_IN" === _touchState;
        }
        let tmp7 = !tmp6;
        if (!tmp6) {
          if (typeof tmp5 === "function") {
            let tmp8 = "RESPONDER_ACTIVE_PRESS_OUT" === arg1;
            if (!tmp8) {
              tmp8 = "RESPONDER_ACTIVE_PRESS_IN" === arg1;
            }
            tmp7 = tmp8;
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
          let tmp12 = tmp11;
          if (!tmp11) {
            tmp12 = "RESPONDER_ACTIVE_PRESS_IN" === _touchState;
          }
          if (!tmp12) {
            tmp12 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
          }
          if (tmp12) {
            if ("LONG_PRESS_DETECTED" === signal) {
              const onLongPress = self._config.onLongPress;
              if (null != onLongPress) {
                onLongPress(nativeEvent);
              }
            }
          }
          if (typeof isActiveSignal === "function") {
            let tmp18 = tmp17;
            if ("RESPONDER_ACTIVE_PRESS_IN" !== _touchState) {
              tmp18 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
            }
            if (typeof tmp16 === "function") {
              let tmp19 = "RESPONDER_ACTIVE_PRESS_IN" === arg1;
              if (!tmp19) {
                tmp19 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === arg1;
              }
              if (!tmp18) {
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
                    if ("RESPONDER_RELEASE" === signal) {
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
                        let tmp27 = null != _config.onLongPress;
                        if (tmp27) {
                          tmp27 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
                        }
                        if (!tmp27) {
                          if (true !== tmp25) {
                            SoundManagerDefault.playTouchSound();
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
              let tmp21 = tmp18;
              if (tmp18) {
                tmp21 = !tmp19;
              }
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
    }
  },
  {
    key: "_activate",
    value: function _activate(nativeEvent) {
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
    }
  },
  {
    key: "_deactivate",
    value: function _deactivate(persist) {
      const self = this;
      closure_0 = persist;
      const onPressOut = this._config.onPressOut;
      if (null != onPressOut) {
        let num = self._config.minPressDuration;
        if (num == null) {
          num = 130;
        }
        const _Date = Date;
        const bound = Math.max(0, num);
        let num3 = self._touchActivateTime;
        const timestamp = Date.now();
        if (num3 == null) {
          num3 = 0;
        }
        let num4 = self._config.delayPressOut;
        const diff = bound - (timestamp - num3);
        if (num4 == null) {
          num4 = 0;
        }
        const bound1 = Math.max(diff, Math.max(0, num4));
        if (bound1 > 0) {
          persist.persist();
          const _setTimeout = setTimeout;
          self._pressOutDelayTimeout = setTimeout(() => {
            onPressOut(closure_0);
          }, bound1);
        } else {
          onPressOut(persist);
        }
      }
      self._touchActivateTime = null;
    }
  },
  {
    key: "_measureResponderRegion",
    value: function _measureResponderRegion() {
      const self = this;
      if (null != this._responderID) {
        if (typeof self._responderID === "number") {
          measureDefault.measure(self._responderID, self._measureCallback);
        } else {
          const _responderID = self._responderID;
          _responderID.measureAsyncOnUI(self._measureCallback);
        }
      }
    }
  },
  {
    key: "_isTouchWithinResponderRegion",
    value: function _isTouchWithinResponderRegion(nativeEvent, _responderRegion) {
      const rect = Pressability(297).normalizeRect(this._config.hitSlop);
      const obj = Pressability(297);
      const rect2 = Pressability(297).normalizeRect(this._config.pressRectOffset);
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
      bottom = undefined;
      if (rect2 != null) {
        bottom = rect2.bottom;
      }
      if (bottom == null) {
        bottom = c9;
      }
      left = undefined;
      const sum2 = tmp4 + bottom;
      if (rect2 != null) {
        left = rect2.left;
      }
      if (left == null) {
        left = c10;
      }
      right = undefined;
      const diff2 = tmp3 - left;
      if (rect2 != null) {
        right = rect2.right;
      }
      if (right == null) {
        right = c11;
      }
      top = undefined;
      const sum3 = tmp2 + right;
      if (rect2 != null) {
        top = rect2.top;
      }
      if (top == null) {
        top = c12;
      }
      let tmp17 = nativeEvent.pageX > diff2;
      const diff3 = tmp - top;
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
    }
  },
  {
    key: "_handleLongPress",
    value: function _handleLongPress(arg0) {
      const self = this;
      let tmp = "RESPONDER_ACTIVE_PRESS_IN" !== this._touchState;
      if (tmp) {
        tmp = "RESPONDER_ACTIVE_LONG_PRESS_IN" !== self._touchState;
      }
      if (!tmp) {
        self._receiveSignal("LONG_PRESS_DETECTED", arg0);
      }
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
const entry1 = {
  key: "setLongPressDeactivationDistance",
  value: function setLongPressDeactivationDistance(arg0) {
    global = arg0;
  }
};
const items1 = [entry1];
function getTouchFromPressEvent(arg0) {

}

export default _createClass(Pressability, items, items1);