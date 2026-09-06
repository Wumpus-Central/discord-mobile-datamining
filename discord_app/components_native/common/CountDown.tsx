// === Module 10930: CountDown ===

// Module 10930 (CountDown)
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const Component = noop.Component;
class CountDown extends Component {
}
const prototype = CountDown.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this._interval = setInterval(() => self.forceUpdate(), 1000);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  this.clearRefreshInterval();
};
prototype["clearRefreshInterval"] = function clearRefreshInterval() {
  if (null != this._interval) {
    const _clearInterval = clearInterval;
    clearInterval(tmp._interval);
  }
};
prototype["render"] = function render() {
  const self = this;
  const style = this.props;
  ({ postDeadlineText, deadline, freezeAtRemainingSeconds } = style);
  if (deadline === Infinity) {
    const intl5 = util.intl;
    let children = intl5.string(util.t.PqEzn8);
  } else {
    const _Math5 = Math;
    const _Number = Number;
    const _Date = Date;
    let result = Math.max(0, Number(deadline) - Date.now()) / 1000;
    if (tmp2) {
      self.clearRefreshInterval();
      result = freezeAtRemainingSeconds;
    }
    if (result < 0) {
      const _Math = Math;
      const items = [Math.floor(result / DurationsDefault.Seconds.DAY), , , ];
      const _Math2 = Math;
      const result1 = result % DurationsDefault.Seconds.DAY;
      items[1] = Math.floor(result1 / DurationsDefault.Seconds.HOUR);
      const _Math3 = Math;
      const result2 = result1 % DurationsDefault.Seconds.HOUR;
      items[2] = Math.floor(result2 / DurationsDefault.Seconds.MINUTE);
      const _Math4 = Math;
      items[3] = Math.floor(result2 % DurationsDefault.Seconds.MINUTE);
      let num = 0;
      if (0 === items[0]) {
        items.shift();
        num = 1;
      }
      const mapped = items.map((item) => {
        let combined = item;
        if (item < 10) {
          const _HermesInternal = HermesInternal;
          combined = "0" + item;
        }
        return combined;
      });
      const joined = mapped.join(":");
      children = joined;
      if (tmp) {
        const intl = util.intl;
        const items1 = [intl.string(util.t.QJyuxY), , , ];
        const intl2 = util.intl;
        items1[1] = intl2.string(util.t["1LyF1h"]);
        const intl3 = util.intl;
        items1[2] = intl3.string(util.t.n7dksO);
        const intl4 = util.intl;
        items1[3] = intl4.string(util.t["6m/6nM"]);
        let tmp11 = num;
        let tmp12 = joined;
        if (-1 !== joined.indexOf(":")) {
          let tmp13 = num;
          let str4 = joined;
          tmp12 = joined;
          tmp11 = num;
          if (num < items1.length) {
            let _HermesInternal = HermesInternal;
            const replaced = str4.replace(":", "" + items1[tmp13] + " ");
            const sum = tmp13 + 1;
            tmp11 = sum;
            tmp12 = replaced;
            while (-1 !== replaced.indexOf(":")) {
              tmp13 = sum;
              str4 = replaced;
              tmp12 = replaced;
              tmp11 = sum;
              if (sum >= items1.length) {
                break;
              }
            }
          }
        }
        const _HermesInternal2 = HermesInternal;
        children = "" + tmp12 + items1[tmp11];
      }
    }
    const NumberResult = Number(deadline);
    tmp2 = null != freezeAtRemainingSeconds && result <= freezeAtRemainingSeconds;
  }
  return jsx(Text_Text.Text, { tabularNumbers: true, variant: "text-md/semibold", style: style.style, children });
};
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/CountDown.tsx");

export default CountDown;