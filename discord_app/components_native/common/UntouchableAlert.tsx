// === Module 15063: UntouchableAlert ===

// Module 15063 (UntouchableAlert)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4589 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createLegacyClassComponentStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
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