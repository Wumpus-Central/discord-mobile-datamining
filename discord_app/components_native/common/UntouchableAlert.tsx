// === Module 15085: componentDidMount ===

// Module 15085 (componentDidMount)
import ActivityIndicator from "ActivityIndicator" /* 6057 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createCacheKey.createLegacyClassComponentStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const PureComponent = importAllResult.PureComponent;
class UntouchableAlert extends PureComponent {
}
const prototype = UntouchableAlert.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  if (!this.props.loading) {
    self.closeAlert();
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(loading) {
  const self = this;
  loading = this.props.loading;
  if (!tmp) {
    self.closeAlert();
  }
};
prototype["closeAlert"] = function closeAlert() {
  const self = this;
  setImmediate(() => {
    const props = self.props;
    return props.onClose();
  });
};
prototype["render"] = function render() {
  let tmp2 = null;
  if (this.props.loading) {
    const obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj[1] = jsx(ActivityIndicator.ActivityIndicator, {});
    tmp2 = <View style={null}>{null}</View>;
  }
  return tmp2;
};
UntouchableAlert.contextType = require("ManaContext").ThemeContext;
const result = require("set").fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default UntouchableAlert;