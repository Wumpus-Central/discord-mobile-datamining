// === Module 13798: Timer ===

// Module 13798 (Timer)
import _modDef12 from "module_12" /* 12 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxs = fn(21).jsxs;
const PureComponent = noop.PureComponent;
class Timer extends PureComponent {
  constructor(arg0) {
    tmp6 = new Timer(global, tmp5, tmp4, tmp3, tmp2, tmp);
    closure_0 = tmp6;
    tmp6._incrementSecond = function _incrementSecond() {
      const state = closure_0.state;
      ({ minutes, hours } = state);
      let num = state.seconds + 1;
      let tmp = hours;
      let tmp2 = minutes;
      if (num >= 60) {
        let num2 = minutes + 1;
        let sum = hours;
        if (num2 >= 60) {
          sum = hours + 1;
          num2 = 0;
        }
        num = 0;
        tmp = sum;
        tmp2 = num2;
      }
      closure_0.setState({ seconds: num, minutes: tmp2, hours: tmp });
    };
    tmp6._decrementSecond = function _decrementSecond() {
      const state = closure_0.state;
      ({ minutes, hours } = state);
      let num = state.seconds - 1;
      if (num >= 1) {
        if (num <= 0) {
          const _clearInterval = clearInterval;
          clearInterval(closure_0._timerId);
          closure_0._timerId = null;
          const onComplete = closure_0.props.onComplete;
          if (onComplete != null) {
            onComplete();
          }
        } else {
          const time = { seconds: num, minutes, hours };
          closure_0.setState(time);
        }
      } else if (minutes >= 1) {
        const num2 = minutes - 1;
        num = 59;
        let diff = hours;
      } else {
        diff = hours;
        if (tmp) {
          diff = hours - 1;
          num = 59;
        }
        tmp = minutes < 1 && hours >= 1;
      }
    };
    ({ seconds, minutes, hours, timestamp } = global);
    num = hours;
    num2 = minutes;
    num3 = seconds;
    if (null != timestamp) {
      num4 = 0;
      num = hours;
      num2 = minutes;
      num3 = seconds;
      if (timestamp > 0) {
        tmp7 = globalThis;
        _Math = Math;
        _Date = Date;
        num5 = 1000;
        _Math2 = Math;
        num6 = 86400;
        result = Math.max(0, Date.now() - timestamp) / 1000 % 86400;
        num7 = 3600;
        num = Math.floor(result / 3600);
        _Math3 = Math;
        result1 = result % 3600;
        num8 = 60;
        num2 = Math.floor(result1 / 60);
        _Math4 = Math;
        num3 = Math.floor(result1 % 60);
      }
    }
    if (num3 == null) {
      num3 = 0;
    }
    time = { seconds: num3, minutes: null, hours: null };
    if (num2 == null) {
      num2 = 0;
    }
    time.minutes = num2;
    if (num == null) {
      num = 0;
    }
    time.hours = num;
    tmp6.state = time;
    return tmp6;
  }
}
const prototype = Timer.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  const _setInterval = setInterval;
  if (this.props.countdown) {
    self._timerId = _setInterval(self._decrementSecond, 1000);
  } else {
    self._timerId = _setInterval(self._incrementSecond, 1000);
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  clearInterval(this._timerId);
  this._timerId = null;
};
prototype["render"] = function render() {
  ({ props, state } = this);
  ({ seconds, minutes, hours } = state);
  ({ style, hideMinutes } = props);
  if (!props.hideHours) {
    let obj = _modDef12;
    const _String = String;
    const _HermesInternal = HermesInternal;
    let str = "" + obj.padStart(String(hours), 2, "0") + ":";
  } else {
    str = "";
  }
  if (!hideMinutes) {
    const _String2 = String;
    const _HermesInternal2 = HermesInternal;
    let str5 = "" + _modDef12.padStart(String(minutes), 2, "0") + ":";
  } else {
    str5 = "";
  }
  if (str.length > 0) {
    const _String3 = String;
    let padStartResult = _modDef12.padStart(String(seconds), 2, "0");
  } else {
    padStartResult = seconds;
  }
  obj = { style, accessibilityRole: "timer", children: null };
  const items = [str, str5, padStartResult];
  obj.children = items;
  return jsxs(native.LegacyText, { style, accessibilityRole: "timer", children: null });
};
Timer.defaultProps = { hideMinutes: false, hideHours: false };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/components/Timer.tsx");

export default Timer;