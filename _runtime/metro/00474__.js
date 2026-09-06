// === Module 474: ? ===

// Module 474
import _mod475 from "module_475" /* 475 */;

let closure_0 = _mod475.default.currentCentroidXOfTouchesChangedAfter;
let closure_1 = _mod475.default.currentCentroidYOfTouchesChangedAfter;
let closure_2 = _mod475.default.previousCentroidXOfTouchesChangedAfter;
let closure_3 = _mod475.default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = _mod475.default.currentCentroidX;
const currentCentroidY = _mod475.default.currentCentroidY;
let obj = {
  _initializeGestureState(arg0) {
    arg0.moveX = 0;
    arg0.moveY = 0;
    arg0.x0 = 0;
    arg0.y0 = 0;
    arg0.dx = 0;
    arg0.dy = 0;
    arg0.vx = 0;
    arg0.vy = 0;
    arg0.numberActiveTouches = 0;
    arg0._accountsForMovesUpTo = 0;
  },
  _updateGestureStateOnMove(_accountsForMovesUpTo, touchHistory) {
    _accountsForMovesUpTo.numberActiveTouches = touchHistory.numberActiveTouches;
    _accountsForMovesUpTo.moveX = closure_0(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo.moveY = closure_1(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo = _accountsForMovesUpTo._accountsForMovesUpTo;
    const tmp = closure_2(touchHistory, _accountsForMovesUpTo);
    const tmp2 = closure_0(touchHistory, _accountsForMovesUpTo);
    const sum = _accountsForMovesUpTo.dx + (tmp2 - tmp);
    const sum1 = _accountsForMovesUpTo.dy + (closure_1(touchHistory, _accountsForMovesUpTo) - closure_3(touchHistory, _accountsForMovesUpTo));
    const diff = touchHistory.mostRecentTimeStamp - _accountsForMovesUpTo._accountsForMovesUpTo;
    _accountsForMovesUpTo.vx = (sum - _accountsForMovesUpTo.dx) / diff;
    _accountsForMovesUpTo.vy = (sum1 - _accountsForMovesUpTo.dy) / diff;
    _accountsForMovesUpTo.dx = sum;
    _accountsForMovesUpTo.dy = sum1;
    _accountsForMovesUpTo._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create(arg0) {
    closure_0 = arg0;
    obj = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
    obj = {
      panHandlers: {
        onStartShouldSetResponder(arg0) {
          let result = null != closure_0.onStartShouldSetPanResponder;
          if (result) {
            result = closure_0.onStartShouldSetPanResponder(arg0, closure_0);
          }
          return result;
        },
        onMoveShouldSetResponder(arg0) {
          let result = null != closure_0.onMoveShouldSetPanResponder;
          if (result) {
            result = closure_0.onMoveShouldSetPanResponder(arg0, closure_0);
          }
          return result;
        },
        onStartShouldSetResponderCapture(nativeEvent) {
          if (1 === nativeEvent.nativeEvent.touches.length) {
            const result = closure_0._initializeGestureState(closure_0);
          }
          closure_0.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
          return null != closure_0.onStartShouldSetPanResponderCapture && closure_0.onStartShouldSetPanResponderCapture(nativeEvent, tmp4);
        },
        onMoveShouldSetResponderCapture(touchHistory) {
          touchHistory = touchHistory.touchHistory;
          let tmp2 = closure_0._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp;
          if (tmp2) {
            const result = closure_0._updateGestureStateOnMove(closure_0, touchHistory);
            tmp2 = closure_0.onMoveShouldSetPanResponderCapture && closure_0.onMoveShouldSetPanResponderCapture(touchHistory, closure_0);
            const tmp5 = closure_0.onMoveShouldSetPanResponderCapture && closure_0.onMoveShouldSetPanResponderCapture(touchHistory, closure_0);
          }
          return tmp2;
        },
        onResponderGrant(touchHistory) {
          closure_0.x0 = currentCentroidX(touchHistory.touchHistory);
          closure_0.y0 = currentCentroidY(touchHistory.touchHistory);
          closure_0.dx = 0;
          closure_0.dy = 0;
          if (closure_0.onPanResponderGrant) {
            closure_0.onPanResponderGrant(touchHistory, closure_0);
          }
          return null == closure_0.onShouldBlockNativeResponder || closure_0.onShouldBlockNativeResponder(touchHistory, closure_0);
        },
        onResponderReject(arg0) {
          const onPanResponderReject = closure_0.onPanResponderReject;
          if (onPanResponderReject != null) {
            const call = onPanResponderReject.call;
            if (typeof call === "unknown") {
              onPanResponderReject(arg0, obj);
            } else {
              call(undefined, arg0, obj);
            }
          }
        },
        onResponderRelease(arg0) {
          const onPanResponderRelease = closure_0.onPanResponderRelease;
          if (onPanResponderRelease != null) {
            const call = onPanResponderRelease.call;
            if (typeof call === "unknown") {
              const result = onPanResponderRelease(arg0, obj);
            } else {
              call(undefined, arg0, obj);
            }
          }
          const result1 = obj._initializeGestureState(obj);
        },
        onResponderStart(touchHistory) {
          closure_0.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
          if (closure_0.onPanResponderStart) {
            closure_0.onPanResponderStart(touchHistory, tmp);
          }
        },
        onResponderMove(touchHistory) {
          touchHistory = touchHistory.touchHistory;
          if (closure_0._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp) {
            const result = closure_0._updateGestureStateOnMove(closure_0, touchHistory);
            if (closure_0.onPanResponderMove) {
              closure_0.onPanResponderMove(touchHistory, closure_0);
            }
          }
        },
        onResponderEnd(touchHistory) {
          obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
          const onPanResponderEnd = closure_0.onPanResponderEnd;
          if (onPanResponderEnd != null) {
            const call = onPanResponderEnd.call;
            if (typeof call === "unknown") {
              onPanResponderEnd(touchHistory, obj);
            } else {
              call(undefined, touchHistory, obj);
            }
          }
        },
        onResponderTerminate(arg0) {
          const onPanResponderTerminate = closure_0.onPanResponderTerminate;
          if (onPanResponderTerminate != null) {
            const call = onPanResponderTerminate.call;
            if (typeof call === "unknown") {
              const result = onPanResponderTerminate(arg0, obj);
            } else {
              call(undefined, arg0, obj);
            }
          }
          const result1 = obj._initializeGestureState(obj);
        },
        onResponderTerminationRequest(arg0) {
          let result = null == closure_0.onPanResponderTerminationRequest;
          if (!result) {
            result = closure_0.onPanResponderTerminationRequest(arg0, closure_0);
          }
          return result;
        }
      },
      getInteractionHandle() {
        return null;
      }
    };
    return obj;
  }
};

export default obj;