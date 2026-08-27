// === Module 10587: componentDidMount ===

// Module 10587 (componentDidMount)
import setDefault from "set" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const Component = importAllResult.Component;
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
    const intl5 = getSystemLocale.intl;
    let children = intl5.string(getSystemLocale.t.PqEzn8);
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
      const items = [Math.floor(result / setDefault.Seconds.DAY), , , ];
      const _Math2 = Math;
      const result1 = result % setDefault.Seconds.DAY;
      items[1] = Math.floor(result1 / setDefault.Seconds.HOUR);
      const _Math3 = Math;
      const result2 = result1 % setDefault.Seconds.HOUR;
      items[2] = Math.floor(result2 / setDefault.Seconds.MINUTE);
      const _Math4 = Math;
      items[3] = Math.floor(result2 % setDefault.Seconds.MINUTE);
      let num = 0;
      if (0 === items[0]) {
        items.shift();
        num = 1;
      }
      const mapped = items.map((arg0) => {
        let combined = arg0;
        if (arg0 < 10) {
          const _HermesInternal = HermesInternal;
          combined = "0" + arg0;
        }
        return combined;
      });
      const joined = mapped.join(":");
      children = joined;
      if (tmp) {
        const intl = getSystemLocale.intl;
        const items1 = [intl.string(getSystemLocale.t.QJyuxY), , , ];
        const intl2 = getSystemLocale.intl;
        items1[1] = intl2.string(getSystemLocale.t["1LyF1h"]);
        const intl3 = getSystemLocale.intl;
        items1[2] = intl3.string(getSystemLocale.t.n7dksO);
        const intl4 = getSystemLocale.intl;
        items1[3] = intl4.string(getSystemLocale.t["6m/6nM"]);
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
  return jsx(Text.Text, { tabularNumbers: true, variant: "text-md/semibold", style: style.style, children });
};
let result = require("set").fileFinishedImporting("components_native/common/CountDown.tsx");

export default CountDown;