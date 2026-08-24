// discord_app/modules/voice_calls/native/components/Timer.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import Button from "../../../../design/void/native.tsx";
import { jsxs } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
const PureComponent = importAllResult.PureComponent;
class Timer extends PureComponent {
  constructor(arg0) {
    tmp6 = new Timer(global, tmp5, tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
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
      let obj = closure_0;
      const state = closure_0.state;
      ({ minutes, hours } = state);
      let num = state.seconds - 1;
      if (num >= 1) {
        if (num <= 0) {
          const _clearInterval = clearInterval;
          clearInterval(obj._timerId);
          obj._timerId = null;
          const onComplete = obj.props.onComplete;
          if (onComplete != null) {
            onComplete();
          }
        } else {
          obj = { seconds: null, minutes: null, hours: null };
          obj[0] = num;
          obj[1] = minutes;
          obj[2] = hours;
          obj.setState(obj);
        }
      } else if (minutes >= 1) {
        let num2 = minutes - 1;
        num = 59;
        let diff = hours;
      } else {
        diff = hours;
        num2 = minutes;
        if (tmp) {
          diff = hours - 1;
          num2 = 59;
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
        result = require("../../../../index.native.tsx") / 1000 % 86400;
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
    obj = { seconds: num3, minutes: null, hours: null };
    if (num2 == null) {
      num2 = 0;
    }
    obj[1] = num2;
    if (num == null) {
      num = 0;
    }
    obj[2] = num;
    tmp6.state = obj;
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
    const _String = String;
    const _HermesInternal = HermesInternal;
    let str = "" + applyDefault.padStart(String(hours), 2, "0") + ":";
    const obj = applyDefault;
  } else {
    str = "";
  }
  if (!hideMinutes) {
    const _String2 = String;
    const _HermesInternal2 = HermesInternal;
    let str5 = "" + applyDefault.padStart(String(minutes), 2, "0") + ":";
    const obj2 = applyDefault;
  } else {
    str5 = "";
  }
  if (str.length > 0) {
    const _String3 = String;
    let padStartResult = applyDefault.padStart(String(seconds), 2, "0");
    const obj3 = applyDefault;
  } else {
    padStartResult = seconds;
  }
  const children = [str, str5, padStartResult];
  return jsxs(Button.LegacyText, { style, accessibilityRole: "timer", children });
};
Timer.defaultProps = { hideMinutes: false, hideHours: false };
let result = require("set").fileFinishedImporting("modules/voice_calls/native/components/Timer.tsx");

export default Timer;