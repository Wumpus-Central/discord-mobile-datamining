// _runtime/metro/00474__.js
import _mod475 from "00475__.js";

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
    const sum = _accountsForMovesUpTo.dx + (closure_0(touchHistory, _accountsForMovesUpTo) - tmp);
    const tmp2 = closure_0(touchHistory, _accountsForMovesUpTo);
    const tmp3 = closure_3(touchHistory, _accountsForMovesUpTo);
    const sum1 = _accountsForMovesUpTo.dy + (closure_1(touchHistory, _accountsForMovesUpTo) - tmp3);
    const diff = touchHistory.mostRecentTimeStamp - _accountsForMovesUpTo._accountsForMovesUpTo;
    _accountsForMovesUpTo.vx = (sum - _accountsForMovesUpTo.dx) / diff;
    _accountsForMovesUpTo.vy = (sum1 - _accountsForMovesUpTo.dy) / diff;
    _accountsForMovesUpTo.dx = sum;
    _accountsForMovesUpTo.dy = sum1;
    _accountsForMovesUpTo._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create(arg0) {
    closure_0 = arg0;
    obj = {
      stateID: Math.random(),
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      numberActiveTouches: 0,
      _accountsForMovesUpTo: 0,
    };
    return {
      panHandlers: {
        onStartShouldSetResponder(arg0) {
          const result =
            null != closure_0.onStartShouldSetPanResponder && closure_0.onStartShouldSetPanResponder(arg0, closure_0);
          return result;
        },
        onMoveShouldSetResponder(arg0) {
          const result =
            null != closure_0.onMoveShouldSetPanResponder && closure_0.onMoveShouldSetPanResponder(arg0, closure_0);
          return result;
        },
        onStartShouldSetResponderCapture(nativeEvent) {
          if (1 === nativeEvent.nativeEvent.touches.length) {
            const result = closure_0._initializeGestureState(closure_0);
          }
          closure_0.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
          const tmp5 =
            null != closure_0.onStartShouldSetPanResponderCapture &&
            closure_0.onStartShouldSetPanResponderCapture(nativeEvent, tmp4);
          return tmp5;
        },
        onMoveShouldSetResponderCapture(touchHistory) {
          touchHistory = touchHistory.touchHistory;
          let tmp2 = closure_0._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp;
          if (tmp2) {
            const result = closure_0._updateGestureStateOnMove(closure_0, touchHistory);
            tmp2 =
              closure_0.onMoveShouldSetPanResponderCapture &&
              closure_0.onMoveShouldSetPanResponderCapture(touchHistory, closure_0);
            closure_0.onMoveShouldSetPanResponderCapture &&
              closure_0.onMoveShouldSetPanResponderCapture(touchHistory, closure_0);
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
          const tmp3 =
            null == closure_0.onShouldBlockNativeResponder ||
            closure_0.onShouldBlockNativeResponder(touchHistory, closure_0);
          return tmp3;
        },
        onResponderReject(arg0) {
          const onPanResponderReject = closure_0.onPanResponderReject;
          if (onPanResponderReject != null) {
            onPanResponderReject.call(undefined, arg0, obj);
          }
        },
        onResponderRelease(arg0) {
          const onPanResponderRelease = closure_0.onPanResponderRelease;
          if (onPanResponderRelease != null) {
            onPanResponderRelease.call(undefined, arg0, obj);
          }
          const result = obj._initializeGestureState(obj);
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
            onPanResponderEnd.call(undefined, touchHistory, tmp);
          }
        },
        onResponderTerminate(arg0) {
          const onPanResponderTerminate = closure_0.onPanResponderTerminate;
          if (onPanResponderTerminate != null) {
            onPanResponderTerminate.call(undefined, arg0, obj);
          }
          const result = obj._initializeGestureState(obj);
        },
        onResponderTerminationRequest(arg0) {
          const result =
            null == closure_0.onPanResponderTerminationRequest ||
            closure_0.onPanResponderTerminationRequest(arg0, closure_0);
          return result;
        },
      },
      getInteractionHandle() {
        return null;
      },
    };
  },
};

export default obj;
