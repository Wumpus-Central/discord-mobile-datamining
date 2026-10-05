// discord_app/components_native/common/UntouchableAlert.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import native from "../../../discord_common/js/packages/design/native.tsx";
import ActivityIndicator_ActivityIndicator from "../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import react from "../../../_runtime/00019_react.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import size from "../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createLegacyClassComponentStyles({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const PureComponent = react.PureComponent;
class UntouchableAlert extends PureComponent {
  componentDidMount() {
    const self = this;
    if (!this.props.loading) {
      self.closeAlert();
    }
  }
  componentDidUpdate(loading) {
    const self = this;
    loading = this.props.loading;
    const tmp = loading.loading === loading || loading;
    if (!tmp) {
      self.closeAlert();
    }
  }
  closeAlert() {
    const self = this;
    setImmediate(() => {
      const props = self.props;
      return props.onClose();
    });
  }
  render() {
    let tmp2 = null;
    if (this.props.loading) {
      tmp2 = <View style={tmp.container}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>;
    }
    return tmp2;
  }
}
const prototype = UntouchableAlert.prototype;
UntouchableAlert.contextType = native.ThemeContext;
const result = size.fileFinishedImporting("components_native/common/UntouchableAlert.tsx");

export default UntouchableAlert;
