// discord_app/components_native/common/UntouchableAlert.tsx
import ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";

require = fn;
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
const result = require("obj132").fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default UntouchableAlert;