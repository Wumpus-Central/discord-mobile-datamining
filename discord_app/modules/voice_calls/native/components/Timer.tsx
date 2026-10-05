// discord_app/modules/voice_calls/native/components/Timer.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsxs = Fragment.jsxs;
const PureComponent = react.PureComponent;
class Timer extends PureComponent {
  constructor(arg0) {
    let hours;
    let minutes;
    let seconds;
    let timestamp;
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    const tmp6 = new Timer(arg0, tmp5, tmp4, tmp3, tmp2, tmp);
    let closure_0 = tmp6;
    tmp6._incrementSecond = function _incrementSecond() {
      let hours;
      let minutes;
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
      let hours;
      let minutes;
      const state = closure_0.state;
      ({ minutes, hours } = state);
      let num = state.seconds - 1;
      let tmp = hours;
      let tmp2 = minutes;
      let tmp3 = num;
      if (num < 1) {
        let num2;
        let diff;
        if (minutes >= 1) {
          num2 = minutes - 1;
          num = 59;
          diff = hours;
        } else {
          diff = hours;
          num2 = minutes;
          const tmp4 = minutes < 1 && hours >= 1;
          if (tmp4) {
            diff = hours - 1;
            num2 = 59;
            num = 59;
          }
        }
        tmp = diff;
        tmp2 = num2;
        tmp3 = num;
      }
      if (tmp3 <= 0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0._timerId);
        closure_0._timerId = null;
        const onComplete = closure_0.props.onComplete;
        if (onComplete != null) {
          onComplete();
        }
      } else {
        const time = { seconds: tmp3, minutes: tmp2, hours: tmp };
        closure_0.setState(time);
      }
    };
    ({ seconds, minutes, hours, timestamp } = arg0);
    let num = hours;
    let num2 = minutes;
    let num3 = seconds;
    if (null != timestamp) {
      num = hours;
      num2 = minutes;
      num3 = seconds;
      if (timestamp > 0) {
        const _Math = Math;
        const _Date = Date;
        const _Math2 = Math;
        const result = (Math.max(0, Date.now() - timestamp) / 1000) % 86400;
        num = Math.floor(result / 3600);
        const _Math3 = Math;
        const result1 = result % 3600;
        num2 = Math.floor(result1 / 60);
        const _Math4 = Math;
        num3 = Math.floor(result1 % 60);
      }
    }
    if (num3 == null) {
      num3 = 0;
    }
    let time = { seconds: num3, minutes: num2, hours: num };
    if (num2 == null) {
      num2 = 0;
    }
    if (num == null) {
      num = 0;
    }
    tmp6.state = time;
    return tmp6;
  }
  componentDidMount() {
    const self = this;
    const _setInterval = setInterval;
    if (this.props.countdown) {
      self._timerId = _setInterval(self._decrementSecond, 1000);
    } else {
      self._timerId = _setInterval(self._incrementSecond, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this._timerId);
    this._timerId = null;
  }
  render() {
    let hideMinutes;
    let hours;
    let minutes;
    let padStartResult;
    let props;
    let seconds;
    let state;
    let str;
    let str5;
    let style;
    ({ props, state } = this);
    ({ seconds, minutes, hours } = state);
    ({ style, hideMinutes } = props);
    if (!props.hideHours) {
      const _String = String;
      const _HermesInternal = HermesInternal;
      const obj = _modDef12;
      str = "" + obj.padStart(String(hours), 2, "0") + ":";
    } else {
      str = "";
    }
    if (!hideMinutes) {
      const _String2 = String;
      const _HermesInternal2 = HermesInternal;
      const obj2 = _modDef12;
      str5 = "" + obj2.padStart(String(minutes), 2, "0") + ":";
    } else {
      str5 = "";
    }
    if (str.length > 0) {
      const _String3 = String;
      const obj3 = _modDef12;
      padStartResult = obj3.padStart(String(seconds), 2, "0");
    } else {
      padStartResult = seconds;
    }
    const items = [str, str5, padStartResult];
    return jsxs(native.LegacyText, { style, accessibilityRole: "timer", children: items });
  }
}
const prototype = Timer.prototype;
Timer.defaultProps = { hideMinutes: false, hideHours: false };
let result = size.fileFinishedImporting("modules/voice_calls/native/components/Timer.tsx");

export default Timer;
