// === Module 10667: CountDown ===

// Module 10667 (CountDown)
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const Component = react.Component;
class CountDown extends Component {
  componentDidMount() {
    const self = this;
    this._interval = setInterval(() => self.forceUpdate(), 1000);
  }
  componentWillUnmount() {
    this.clearRefreshInterval();
  }
  clearRefreshInterval() {
    if (null != this._interval) {
      const _clearInterval = clearInterval;
      clearInterval(tmp._interval);
    }
  }
  render() {
    let children;
    let deadline;
    let freezeAtRemainingSeconds;
    let postDeadlineText;
    const self = this;
    const props = this.props;
    ({ postDeadlineText, deadline, freezeAtRemainingSeconds } = props);
    const style = props.style;
    if (deadline === Infinity) {
      const intl5 = intl6.intl;
      children = intl5.string(intl6.t.PqEzn8);
    } else {
      const _Math5 = Math;
      const _Number = Number;
      const _Date = Date;
      const NumberResult = Number(deadline);
      let result = max(0, NumberResult - Date.now()) / 1000;
      const tmp2 = null != freezeAtRemainingSeconds && result <= freezeAtRemainingSeconds;
      if (tmp2) {
        self.clearRefreshInterval();
        result = freezeAtRemainingSeconds;
      }
      if (result < 0) {
        const _Math = Math;
        const items = [Math.floor(result / DurationsDefault.Seconds.DAY), , , ];
        const _Math2 = Math;
        const result1 = result % DurationsDefault.Seconds.DAY;
        items[1] = floor(result1 / DurationsDefault.Seconds.HOUR);
        const _Math3 = Math;
        const floor2 = Math.floor;
        const result2 = result1 % DurationsDefault.Seconds.HOUR;
        items[2] = floor2(result2 / DurationsDefault.Seconds.MINUTE);
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
          const intl = intl6.intl;
          const items1 = [intl.string(intl6.t.QJyuxY), , , ];
          const intl2 = intl6.intl;
          items1[1] = intl2.string(intl6.t["1LyF1h"]);
          const intl3 = intl6.intl;
          items1[2] = intl3.string(intl6.t.n7dksO);
          const intl4 = intl6.intl;
          items1[3] = intl4.string(intl6.t["6m/6nM"]);
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
    }
    return jsx(Text_Text.Text, { tabularNumbers: true, variant: "text-md/semibold", style, children });
  }
}
const prototype = CountDown.prototype;
let result = size.fileFinishedImporting("components_native/common/CountDown.tsx");

export default CountDown;